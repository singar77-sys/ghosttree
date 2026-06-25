"use client";

import { useEffect, useRef, useState } from "react";
import { upload } from "@vercel/blob/client";
import { track } from "@vercel/analytics";
import { services, site } from "@/lib/site";
import styles from "./QuoteForm.module.css";

type Status = "idle" | "sending" | "ok" | "error" | "callus";

const MAX_PHOTOS = 5;
const MAX_DIM = 1600;
// Overall budget for the whole photo-upload step. Past this we abort and submit
// text-only, so a slow or failing Blob upload can never hang the form on "Sending…".
const UPLOAD_BUDGET_MS = 15000;

// Downscale + re-encode in the browser so we never upload multi-MB phone originals.
async function compress(file: File): Promise<File> {
  if (!file.type.startsWith("image/")) return file;
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
    const scale = Math.min(1, MAX_DIM / Math.max(bitmap.width, bitmap.height));
    const w = Math.round(bitmap.width * scale);
    const h = Math.round(bitmap.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, w, h);
    bitmap.close();
    const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/jpeg", 0.8));
    if (!blob || blob.size >= file.size) return file;
    return new File([blob], `${file.name.replace(/\.[^.]+$/, "")}.jpg`, { type: "image/jpeg" });
  } catch {
    return file;
  }
}

// Compress + upload up to MAX_PHOTOS to Vercel Blob; return the public URLs. Any
// failure (e.g. Blob not configured yet) is swallowed so the text submission still sends.
async function uploadPhotos(files: File[]): Promise<string[]> {
  const urls: string[] = [];
  // One shared deadline for all photos. If Blob is slow or erroring (the SDK
  // retries internally), the abort fires and we fall back to a text-only send
  // instead of leaving the button stuck on "Sending…".
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPLOAD_BUDGET_MS);
  try {
    for (const file of files.slice(0, MAX_PHOTOS)) {
      if (controller.signal.aborted) break;
      try {
        const ready = await compress(file);
        const blob = await upload(ready.name, ready, {
          access: "public",
          handleUploadUrl: "/api/quote/upload",
          abortSignal: controller.signal
        });
        urls.push(blob.url);
      } catch {
        // skip this photo, keep going
      }
    }
  } finally {
    clearTimeout(timer);
  }
  return urls;
}

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sentEmail, setSentEmail] = useState("");
  // Time-on-form baseline, set after mount (Date.now() is impure — never called during render).
  const loadedAt = useRef(0);
  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const fileInput = form.elements.namedItem("photos") as HTMLInputElement | null;
    const files = fileInput?.files ? Array.from(fileInput.files) : [];
    const photos = files.length ? await uploadPhotos(files) : [];

    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      address: String(fd.get("address") || ""),
      service: String(fd.get("service") || ""),
      details: String(fd.get("details") || ""),
      photos,
      // Spam signals: honeypot field (should stay empty) + time-on-form.
      company: String(fd.get("company") || ""),
      elapsedMs: Date.now() - loadedAt.current
    };
    // Remember the email so the success view can point the visitor at their inbox.
    setSentEmail(payload.email);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("ok");
        // Conversion event; safe no-op when analytics is disabled.
        track("quote_submitted");
        form.reset();
      } else if (json.configured === false) {
        setStatus("callus");
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error.");
    }
  }

  if (status === "ok") {
    return (
      <div className={styles.done}>
        <p className="kicker">Got it</p>
        {sentEmail ? (
          <h3>
            Request received — keep an eye on {sentEmail} for a confirmation, and
            we&rsquo;ll call you back too.
          </h3>
        ) : (
          <h3>Request received. We&rsquo;ll call you back.</h3>
        )}
        <p>
          Can&rsquo;t wait? Call{" "}
          <a href={site.phoneHref}>{site.phone}</a> now. We answer 24/7.
        </p>
      </div>
    );
  }

  if (status === "callus") {
    return (
      <div className={styles.done}>
        <p className="kicker">Fastest way to reach us</p>
        <h3>Call {site.phone}</h3>
        <p>We answer 24/7 for quotes and emergencies.</p>
        <a href={site.phoneHref} className="btn btn-call" style={{ marginTop: "var(--sp-2)" }}>
          Call now
        </a>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {/* Honeypot: hidden from sighted users, screen readers, and keyboard nav.
          Bots that auto-fill every field will populate it; real users can't. */}
      <span aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <input
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </span>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>Phone *</span>
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label className={styles.field}>
          <span>Property address</span>
          <input name="address" autoComplete="street-address" />
        </label>
      </div>
      <label className={styles.field}>
        <span>Service</span>
        <select name="service" defaultValue="">
          <option value="" disabled>
            Choose a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure">Not sure / other</option>
        </select>
      </label>
      <label className={styles.field}>
        <span>What&rsquo;s going on?</span>
        <textarea name="details" rows={4} placeholder="Tree down, leaning, dead limbs near the house…" />
      </label>
      <label className={styles.field}>
        <span>Photos (optional, up to 5)</span>
        <input name="photos" type="file" accept="image/*" multiple className={styles.file} />
      </label>
      <button type="submit" className="btn btn-call" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my free quote"}
      </button>
      {status === "error" && (
        <p className={styles.err}>
          {error} Please call <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      )}
      <p className={styles.note}>
        Prefer to talk? Call <a href={site.phoneHref}>{site.phone}</a>, 24/7.
      </p>
    </form>
  );
}
