# Ghost Tree Service — Build Blueprint

> Living foundation doc. Phase 1 (Strategy & Foundation) locked 2026-06-09.
> Pairs with [`docs/seo-audit-and-2026-gameplan.md`](./seo-audit-and-2026-gameplan.md) (market + competitor audit).
> Phases 2–6 append below as they complete.

## Status & Locked Decisions

- **Framework:** Next.js (App Router) → Vercel. **NOT Astro** — the on-disk Astro scaffold gets *ported*, not extended. Reason: brand consistency (Hunter Systems sells "we build Next.js"), the signed proposal says Next.js, Mark's existing Next muscle. (Honest note: zero customer-conversion gain vs Astro; justified as an HS brand-asset cost.)
- **Service pages: 6** — Emergency Tree Removal · Tree Removal · Tree Trimming & Pruning · Storm Damage Cleanup · Lot Clearing · Utility & Commercial Accounts. (site.ts currently has 4 — add Storm Damage + Utility/Commercial.)
- **Port from Astro build:** typed data model (`src/data/site.ts`), ~40 optimized/SEO-named WebP job photos, LocalBusiness schema, SEO meta pattern, the creative concept.
- **Pricing/contract context:** $1,500 local launch rate (valid through 2026-06-17), $750 signing + $750 within 7 days of launch, 1–2 wk build, Vercel hosting 12mo managed, 2 rounds revisions/milestone, 90-day scorecard owed (day 30/60/90).

## Business Facts (single source of truth — keep NAP airtight)

- **Name:** Ghost Tree Service LLC · **Owner/operator:** Logan
- **Address:** 6289 Buffham Rd, Seville, OH 44273 (Medina County)
- **Phone:** (330) 907-6403 → `tel:+13309076403` · **Email:** info@ghosttreeservice.com
- **Domain (prod):** https://www.ghosttreeservice.com
- **Proof:** 5.0★ / 39 Google reviews (Birdeye mirror) · real crane/storm job photos · low-impact + cleanup
- **Service area:** Medina County core (Medina, Brunswick, Wadsworth, Seville, Lodi, Chippewa Lake, Spencer, Westfield Center) + Summit/Wayne/Portage adjacent.

## Creative Anchor (hunter)

- **Emotional target (first 3s):** *"Handled. The cavalry is real and close."* Calm authority, not spooky.
- **Chimera / tension:** **Heavy iron meets clean disappearance** — brutal crane/chainsaw force + ghost-clean, no-trace aftermath. *Arrives like a machine, leaves like a ghost.* This is literally their differentiator (low-impact + cleanup), so art = sales argument.
- **Film frequency:** *There Will Be Blood* (textured authority, unhurried) + *Beyond the Black Rainbow* amber containment (the 2am work-light).
- **Physical space:** working timber yard at blue hour — cut oak, diesel, matte steel, one amber light, spotless swept floor.
- **The cut:** stock-photo heroes, hi-vis safety-green/orange palette, badge clutter, the **cleverness tax** (geometry poetry → demoted to a deep mono "job-spec" layer), and the **Halloween read of "ghost"** (no fog kitsch).
- **Color:** foundation bark-black (textured, earthed — NOT corporate forest green) · primary contained amber/work-light gold (also CTA) · "violence" = one cold spectral pale-green (the ghost, used once) · refuse hi-vis green+orange.
- **Type:** Display **Anton** (heavy condensed, the iron) · body neutral grotesk (disappears) · accent **IBM Plex Mono** (arborist job-spec layer). All already in the build.
- **Motion:** one hero moment (ghost-clean reveal: grain settling) + micro-only (amber work-light hover). NIN scroll dynamics, Black Rainbow hero stillness.

## Strategy Stack (strategy-architect)

**Segments (3):**
| Segment | Trigger | Wants | Action | Metric |
|---|---|---|---|---|
| A — Emergency | post-storm, hazard, night/mobile, panicked. Highest margin. | answer now, fast, insured, safe | **tap to call** (no form) | off-hours/mobile calls |
| B — Planned | researching removal/pruning, comparing quotes. Highest volume = core revenue. | trust, cost clarity, clean proof | **free quote** (+photo) or call | quotes + calls |
| C — Commercial/Municipal/Utility | property mgr, builder, HOA, utility. Fewer/larger/recurring. | capacity, COI, references | request quote / open account | commercial inquiries |

**Offer (defensible):** *Medina County's low-impact tree crew — heavy enough for the crane jobs, clean enough you'd never know we were there. Answered 24/7.*

**Uncontested corner:** most **local** + most **modern** + most **proven**, simultaneously. (Dave's = SEO leader but stitched/cluttered → out-brand+UX. Anytime/Sun&Seed/Countryside = dated/thin → out-modern+depth. Expert = modern but diluted across NE Ohio → out-local.)

**Page → outcome:** `/` route all 3 · `/services/emergency-tree-removal/` calls · `/services/tree-removal/` core revenue · `/services/tree-trimming-pruning/` quotes · `/services/storm-damage-cleanup/` calls+quotes · `/services/lot-clearing/` commercial+quote · `/services/utility-commercial/` commercial · `/medina-county-tree-service/` local SEO hub · `/gallery/` proof · `/about/` trust · `/quote/` conversion (form+photo upload).

**Friction → zero:** sticky tap-to-call (mobile) · two CTAs never blended (hot Call / calm Quote) · "what happens after you call" sequence · short quote form + photo upload · proof before price.

## $50K Quality Contract (dominate) — definition-of-done for Phase 4 gauntlet

1. Strategy ✅ every page → segment+action.
2. IA — nav ≤6, call=0 clicks, else ≤2.
3. Conversion — 1 goal/1 primary CTA/proof per page; CTA pair never blended.
4. UX/UI — one token system; all states (hover/loading/error/empty); mobile flawless.
5. Engineering — App Router, reusable components, single typed data source; add town/service via data not rebuild.
6. Performance — **Lighthouse mobile ≥90** (contractual), LCP <2.5s, CLS ~0; WebP, lazy below fold, minimal JS.
7. SEO — clean URLs, internal-link web, 1 intent H1/page, descriptive filenames+alt, per-page meta, schema (LocalBusiness+Service+FAQ+ImageObject+AggregateRating), **llms.txt**, **robots allows AI crawlers**, sitemap no `/home` dupe.
8. Content — specific, differentiated, zero slop; answerable Q&A; real job narratives.
9. Integration — quote form→email/CRM+photo upload, call tracking, analytics, GBP/FB/review consistency.
10. Analytics — every primary CTA fires a tracked event day one; scorecard = feedback loop.

## Finish Standard (premium + trends)

- **Halo (50ms):** real razor-sharp job photo hero on bark-black + Anton + amber. NO Spline/3D/AI-scroll-video hero (perf + slop).
- **Cognitive fluency:** matters *more* (Segment A is stressed) — one feeling/viewport, one action/section, brutal white space, number always visible.
- **Peak-end (CSS-first):** amber work-light hover · ghost-clean hero reveal · restrained IntersectionObserver reveals · the *ending* = quote-confirmation + "after you call" relief moment. Any micro-interaction that costs LCP is cut.
- **2026→2027 edge:** answer-engine-first (be the machine-canonical source so AI names Ghost Tree).
- **Trend picks (earned versions):** Spaceship Manual (real arborist job-spec labels) · Human Touch (real uncropped photos = anti-AI-slop) · Barely-There restraint + one dissonant element (ghost-green/Anton).
- **Slop Stack hits: 0.** Logo-removal test: passes. Refused: tech-bro gradient, Spline blob, GSAP-everywhere, 3-card row, gradient "Get Started", sonic feedback.
- **Animation budget:** one hero moment + micro only.

## ROI Model (roi-man)

- **GTS:** site → tracked calls+quotes → jobs. Build recouped in 1–2 jobs; ~2–4 extra jobs/mo = ~$1.6–6K/mo. **Emergency = #1 financial lever.**
- **HS:** fee at/below cost; ROI = hosting + **$499/mo retainer (scorecard triggers)** + referrals + **portfolio → next 10 gigs.** Mediocre site = negative ROI → $50K standard is pipeline, not charity.
- **Build priority (ROI-ranked):** ① emergency path (incl. fix malformed `tel:`) ② per-page SEO+schema+Medina hub ③ answer-engine layer ④ quote form+photo+tracking ⑤ proof blocks.

## Open Gaps — resolve before launch (Phase 3 build / integration)

1. **Call tracking** mechanism — tracking number vs `tel:` click-events.
2. **Quote-form backend** — serverless function or form service for submit + photo upload.
3. **Domain + Squarespace migration** ⚠️ NEEDS MARK — confirm registrar control, zero-downtime cutover, **301 redirect map** from old URLs (`/home`, `/our-story`, `/services`) to preserve ranking equity.
4. **Analytics** — GA4 vs Vercel Analytics (or both).
5. **AggregateRating honesty** — keep 5.0/39 matching real Google data + updatable.

## Phase 2 — Design Thinking (locked 2026-06-09)

- **Homepage architecture:** Direction **A — The Arrival** leads (full-bleed real crane photo, scrim, Anton headline, 2 CTAs, proof chip, mono microline). Spine = 9 movements: header → hero → proof strip → promise band → 6 services (3+3) → Medina hub → before/after → reviews → quote band → footer.
- **Service-page system:** Direction **B — The Spec Sheet** (split, dual-layer, mono job-spec readout: access / rig / drop zone / site).
- **Harmonia (homepage as designed): 7.9 composite.** Build must fix: (1) semantic H1 carrying "emergency tree removal Medina County" intent while the display line stays the iron; (2) mobile fixed bottom call bar; (3) keep concrete proof strip above the "promise" beat.
- **Ghost sigil:** **G2 — Canopy Eye** (Vesica Piscis eye + trunk). Depth layer ONLY — favicon, section markers, footer, loading. Complements existing logo, never replaces the wordmark. Favicon may use a simplified ring (G3) at 16px.
- **"After you call" rite (5 steps):** call → assess → schedule → work → "we leave like a ghost" (payoff + sigil). Homepage/service/quote. Kills fear-of-unknown; lands the brand as a picture.
- **Invisible proportion system (esoteric-touch):** φ 1.618 governing; type modular 1.25 (13·16·20·25·31·39·49, Anton breaks past as the deliberate outlier); spacing Fibonacci (8·13·21·34·55·89); grouping 3/5/9 (nav 5 ✓, rite 5, services 3+3, page 9). Sigil's Vesica geometry also governs section transitions. `normalize` enforces in Phase 3.
- **Lynchian cuts:** delete the duplicate iron/ghost claim (say it once, at the hero); repurpose the "promise" band to a NON-echo job (low-impact method or one hard proof stat); one 300ms easing curve everywhere; the single motion = ghost-clean hero reveal (grain settling on load).
- **Visceral / graphic:** type-as-architecture (Anton at wall-scale, mono as the seam). **Photo grade = A "Raw + graded"** primary (true color, slight contrast/saturation lift, universal grain) — real-for-proof, anti-AI-slop. **B "Bark duotone" reserved for atmosphere only** (hero scrim, dividers, About). C (hi-contrast B&W) rejected — kills the color that sells the work.

## Phase 3 — Build status (structural build complete + verified 2026-06-09)

**Stack:** Next.js 16.2.7 (App Router, Turbopack, React 19) · CSS Modules + `app/globals.css` token system (φ scale, Fibonacci spacing) · target Vercel. Astro fully removed. Full `next build` green: 18 routes; marketing pages static-prerendered, `/api/quote` + `/api/quote/upload` serverless. Dev: `npm run dev` → http://localhost:3001.

**Built + verified:**
- Pages: `/` (Direction A homepage), `/services` index, `/services/[slug]` (6 pages, B spec-sheet, SSG, Service+FAQ+Breadcrumb schema), `/medina-county-tree-service`, `/gallery` (filtered manifest + ImageGallery schema), `/about`, `/quote` (QuoteForm client + Resend/Blob routes)
- Shell/components: Header, Footer, StickyCallBar (mobile), Sigil (G2), QuoteBand, AfterYouCall (rite), Faq (details/summary, no-JS), ServiceCard
- SEO/AEO: per-page metadata, sitewide LocalBusiness schema, `app/sitemap.ts`, `app/robots.ts` (AI crawlers allowed), `public/llms.txt`
- Data: `lib/site.ts` (single source of truth), `lib/schema.ts`, `lib/gallery.ts`

**OPEN — needs Mark / pre-launch:**
1. `RESEND_API_KEY` + `QUOTE_TO_EMAIL` / `QUOTE_FROM_EMAIL` (quote email; form degrades to "call us" until set)
2. `BLOB_READ_WRITE_TOKEN` (photo upload; degrades to text-only until set)
3. Domain control + **Squarespace 301 redirect map** (`/home`, `/our-story`, `/services`)
4. Analytics (GA4 / Vercel) + call tracking
5. Favicon (G2 ring) + OG images not yet generated
6. 2 moderate npm audit warnings (review in Phase 4 security)

**Refactor note:** homepage inlines service-card/quote-band markup; dedupe to shared components during `normalize`.

**Remaining Phase 3 skills (refine the built site):** normalize → cta/conversion-war-machine → seo-maximus → copy → stop-slop/bs-filter → the-closer → money-man.

## Phase Plan (Mark's sequence)

- **Phase 1 — Strategy & Foundation** ✅ hunter · strategy-architect · dominate · premium · trends · roi-man
- **Phase 2 — Design Thinking** ✅ the-architect · the-cognitive-architecture · illuminati · the-hierophant · esoteric-touch · the-lynchian-monolith (sparingly) · the-visceral-architect
- **Phase 3 — Build** ✅ optimus-prime · pantheon (conversion brief) · ~~milkshake~~ · normalize (homepage dedupe) · cta/conversion-war-machine (TrustLine proof on every CTA + first-person copy) · seo/seo-maximus (hub-and-spoke RelatedServices + image-SEO audit + .vercelignore) · copy (customer-voice summaries) · stop-slop/bs-filter (em dashes purged) · ~~the-closer~~ · ~~money-man~~ (bypassed) · **Our Story transferred to /about** from the live Squarespace page
- **Phase 4 — Audits (gauntlet)** stoner-check · the-reactor · god-mode · detective · conty · systems-overloaded · phototits · visual-precision-auditor · mobile-man · website-security-sentinel · deep-throat · major-audit
- **Phase 5 — Critique & Harden** elon · brutal-website-analysis · shredder
- **Phase 6 — Financial/Business (parallel)** spready · zero-drift-auditor
