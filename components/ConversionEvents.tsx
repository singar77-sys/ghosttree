"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Site-wide call-click conversion tracking.
 *
 * Attaches a single delegated click listener on the document and fires a
 * `call_click` Vercel Analytics event whenever any `tel:` link is clicked.
 * This catches phone-link clicks everywhere (Header, StickyCallBar, service
 * and quote CTAs) without editing those components individually.
 */
export default function ConversionEvents() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="tel:"]');
      if (a) track("call_click", { href: a.getAttribute("href") ?? "" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
