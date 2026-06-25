import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type QuoteBody = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  details?: string;
  photos?: string[];
  company?: string;
  elapsedMs?: number;
};

// Best-effort, per-serverless-instance rate limiter. NOT durable across
// instances or cold starts — a determined attacker hitting many instances can
// exceed the limit. Adequate as a cheap first line of defense.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const rateLimitHits = new Map<string, number[]>();

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as QuoteBody | null;
  if (!data) return NextResponse.json({ ok: false, error: "Bad request." }, { status: 400 });

  // Per-instance rate limit (best-effort): max 5 requests / 10 min per IP.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitHits.set(ip, recent);
    return NextResponse.json({ ok: false, error: "Too many requests. Please call us." }, { status: 429 });
  }
  recent.push(now);
  rateLimitHits.set(ip, recent);

  const { name, phone, email, address, service, details, photos, company, elapsedMs } = data;
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 422 });
  }

  // Honeypot: a filled `company` field means a bot. Accept silently so it can't
  // distinguish a rejection from success and adapt.
  if (typeof company === "string" && company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Timing: a real visitor can't fill name + phone in under 2.5s. Treat fast
  // submissions as bots and accept silently (no email sent).
  if (typeof elapsedMs === "number" && elapsedMs < 2500) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Not yet configured (no Resend key) — tell the UI to route the visitor to the phone.
  if (!apiKey) return NextResponse.json({ ok: false, configured: false });

  const to = process.env.QUOTE_TO_EMAIL || site.email;
  const from = process.env.QUOTE_FROM_EMAIL || "Ghost Tree Quotes <quotes@ghosttreeservice.com>";

  // Bound every field so a malformed or abusive payload can't send a giant email.
  const cap = (v: unknown, n: number) => (typeof v === "string" ? v : "").slice(0, n);
  const safeEmail = cap(email, 160);

  try {
    const resend = new Resend(apiKey);
    const photoLines =
      Array.isArray(photos) && photos.length ? `\n\nPhotos:\n${photos.slice(0, 5).join("\n")}` : "";
    await resend.emails.send({
      from,
      to,
      replyTo: safeEmail || undefined,
      subject: `New quote request — ${cap(name, 120)}${service ? ` (${cap(service, 80)})` : ""}`,
      text: `Name: ${cap(name, 120)}\nPhone: ${cap(phone, 40)}\nEmail: ${safeEmail || "—"}\nAddress: ${cap(address, 240) || "—"}\nService: ${cap(service, 80) || "—"}\n\nDetails:\n${cap(details, 4000) || "—"}${photoLines}`
    });

    // Confirmation to the customer. Best-effort: a failure here must not fail the
    // request — the business email above is what actually matters.
    if (safeEmail.trim().length > 0) {
      try {
        await resend.emails.send({
          from,
          to: safeEmail,
          subject: "We got your request — Ghost Tree Service",
          text: `Hi ${cap(name, 120)},\n\nThanks for reaching out — we got your request and our team will be in touch shortly to talk through the details and get you a quote.\n\nFor storm emergencies, you can call or text (330) 907-6403 any time, day or night. We're here 24/7.\n\nTalk soon,\nGhost Tree Service`
        });
      } catch {
        // Confirmation failed (bad address, Resend hiccup). Swallow it.
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Quote send failed:", e);
    return NextResponse.json({ ok: false, error: "Couldn't send right now — please call us." }, { status: 500 });
  }
}
