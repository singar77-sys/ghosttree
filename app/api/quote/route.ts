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
};

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as QuoteBody | null;
  if (!data) return NextResponse.json({ ok: false, error: "Bad request." }, { status: 400 });

  const { name, phone, email, address, service, details, photos } = data;
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Not yet configured (no Resend key) — tell the UI to route the visitor to the phone.
  if (!apiKey) return NextResponse.json({ ok: false, configured: false });

  const to = process.env.QUOTE_TO_EMAIL || site.email;
  const from = process.env.QUOTE_FROM_EMAIL || "Ghost Tree Quotes <quotes@ghosttreeservice.com>";

  try {
    const resend = new Resend(apiKey);
    const photoLines = Array.isArray(photos) && photos.length ? `\n\nPhotos:\n${photos.join("\n")}` : "";
    await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `New quote request — ${name}${service ? ` (${service})` : ""}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "—"}\nAddress: ${address || "—"}\nService: ${service || "—"}\n\nDetails:\n${details || "—"}${photoLines}`
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof Error ? e.message : "Send failed." }, { status: 500 });
  }
}
