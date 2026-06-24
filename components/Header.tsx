"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} home`} onClick={close}>
          <BrandLogo size={40} />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href={site.phoneHref} className={`btn btn-call ${styles.call}`}>
            Call {site.phone}
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={styles.burgerBox} data-open={open || undefined}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={styles.drawer} data-open={open || undefined}>
        <nav className={styles.drawerNav} aria-label="Mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={site.phoneHref} className="btn btn-call" onClick={close}>
          Call {site.phone}
        </a>
      </div>
    </header>
  );
}
