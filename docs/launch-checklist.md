# Ghost Tree Service — Launch Checklist

Everything between the current build and a public, working site. The code is done;
this is dashboard + DNS work. Do them roughly in this order.

- **Vercel project:** `ghost-tree` (team `spinkick-entertainment`)
- **Domain:** `ghosttreeservice.com` (+ `www`)
- **Email is on Google Workspace** — nothing below touches your inbox/MX if you follow the notes.

---

## 1. Environment variables (Vercel → ghost-tree → Settings → Environment Variables)

Add these for **Production** (and Preview if you want preview deploys to send too). Save, then redeploy.

| Name | Value | Required? |
|---|---|---|
| `RESEND_API_KEY` | `re_...` (from Resend → API Keys) | **Yes** — without it the quote form just tells visitors to call. |
| `QUOTE_TO_EMAIL` | `info@ghosttreeservice.com` | Optional — this is already the default, so you can leave it unset. Where quote requests land. Must be a real Workspace mailbox: `info@` exists, `logan@` does **not** — never point it at logan@ or every lead bounces. |
| `QUOTE_FROM_EMAIL` | `Ghost Tree Quotes <quotes@ghosttreeservice.com>` | Optional — this is the default. The address must be at a domain verified in Resend (step 2). |
| `BLOB_READ_WRITE_TOKEN` | auto-added when you create a Vercel Blob store | Optional — enables quote-form photo uploads. Without it the form silently submits text-only. Create a **Blob store** under Storage and connect it to the project. |

Notes:
- After adding/changing env vars, trigger a new deploy (they're baked at build/runtime per Vercel).
- `QUOTE_TO_EMAIL` must be a real Workspace mailbox or alias. `info@ghosttreeservice.com` exists; `logan@ghosttreeservice.com` does **not** — sending there bounces silently. Leave the var unset (it defaults to info@) or set it explicitly to info@.

---

## 2. Resend — verify the sending domain (so quote emails actually send)

1. Create or log in at **resend.com**, create an **API key** → that's `RESEND_API_KEY` above.
2. **Domains → Add Domain →** `ghosttreeservice.com` (verify the **root** domain so `quotes@ghosttreeservice.com` works as the From).
3. Resend shows a set of DNS records. Add them at your DNS host **exactly as shown**. They look like this (DKIM value is unique to you — copy it from Resend):

| Type | Host / Name | Value | Purpose |
|---|---|---|---|
| `MX` | `send` | `feedback-smtp.<region>.amazonses.com` (priority `10`) | bounce/return-path |
| `TXT` | `send` | `v=spf1 include:amazonses.com ~all` | SPF |
| `TXT` | `resend._domainkey` | `p=MIGfMA0...` (long key, **copy from Resend**) | DKIM |
| `TXT` | `_dmarc` | `v=DMARC1; p=none;` | DMARC (skip if you already have a DMARC record) |

4. Click **Verify** in Resend once the records propagate (minutes to a few hours).

> **Google Workspace safety:** Resend's `MX` and `SPF` go on the **`send`** subdomain, **not** the root. Do **not** change the root `MX` records (those are Google's). Your email keeps working. Only add a root `_dmarc` record if one doesn't already exist.

---

## 3. Connect the domain (Vercel → ghost-tree → Settings → Domains)

1. **Add** `ghosttreeservice.com` and `www.ghosttreeservice.com`.
2. Vercel shows the exact DNS records to add. Current standard values:

| Type | Name | Value |
|---|---|---|
| `A` | `@` (root/apex) | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

3. Pick the primary (recommend `www` as canonical, with apex → `www` redirect, or vice-versa — the site's canonical URLs use `www`).
4. These web records are separate from your `MX` — **email is unaffected.**

---

## 4. Make it public (Vercel)

- **Settings → Deployment Protection →** turn it **off** (it was returning `401` to visitors). Leave Vercel Authentication on only if you want it private.
- **Deployments →** confirm the latest is **Production** / promoted (project currently shows `live: false`).
- **Settings → Analytics →** enable **Web Analytics** (and Speed Insights) so the wired-in tracking actually collects.

---

## 5. Smoke test (after it's live)

- [ ] `https://www.ghosttreeservice.com` returns the site (not 401/404).
- [ ] Submit a real quote on `/quote` → request email arrives at `QUOTE_TO_EMAIL`, and the customer-confirmation email arrives at the address you entered.
- [ ] `tel:` links work on mobile; the sticky call bar shows.
- [ ] Paste the URL into the **Facebook Sharing Debugger** and **X Card Validator** → the 1200×630 OG card shows.
- [ ] Favicon (the tree) shows in the tab.

---

## 6. Post-launch

- [ ] **Google Search Console:** add the property, submit `https://www.ghosttreeservice.com/sitemap.xml`.
- [ ] **Google Business Profile:** confirm NAP matches the site (phone, Seville address), add the website link.
- [ ] Watch the first analytics + form submissions.

---

## Reference — what the code does if a var is missing

- No `RESEND_API_KEY` → `/api/quote` returns `configured:false` and the form shows the "call us" card. No emails sent.
- No `QUOTE_TO_EMAIL` → quote requests go to `info@ghosttreeservice.com`.
- No `QUOTE_FROM_EMAIL` → sends as `Ghost Tree Quotes <quotes@ghosttreeservice.com>` (needs the domain verified in Resend).
