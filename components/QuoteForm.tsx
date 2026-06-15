"use client";

import { useState } from "react";
import { upload } from "@vercel/blob/client";
import { services, site } from "@/lib/site";
import styles from "./QuoteForm.module.css";

type Status = "idle" | "sending" | "ok" | "error" | "callus";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Best-effort photo upload to Vercel Blob; falls back silently if not configured.
    const photoUrls: string[] = [];
    const files = (form.elements.namedItem("photos") as HTMLInputElement | null)?.files;
    if (files && files.length) {
      try {
        for (const file of Array.from(files).slice(0, 6)) {
          const blob = await upload(file.name, file, { access: "public", handleUploadUrl: "/api/quote/upload" });
          photoUrls.push(blob.url);
        }
      } catch {
        // Blob not configured yet — proceed with text only.
      }
    }

    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      address: String(fd.get("address") || ""),
      service: String(fd.get("service") || ""),
      details: String(fd.get("details") || ""),
      photos: photoUrls
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("ok");
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
        <h3>Request received. We&rsquo;ll call you back.</h3>
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
        <span>Photos (optional)</span>
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
