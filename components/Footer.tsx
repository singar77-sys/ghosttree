import Link from "next/link";
import { navItems, serviceAreas, site } from "@/lib/site";
import BrandLogo from "./BrandLogo";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <div className={styles.brand}>
            <BrandLogo size={44} title={site.name} />
          </div>
          <p className={styles.tag}>{site.tagline}</p>
          <p className={`mono ${styles.familyLine}`}>{site.familyLine}</p>
          <div className={styles.contact}>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <p className={styles.nap}>
              {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            <a className={styles.social} href={site.facebook} target="_blank" rel="noopener noreferrer">
              <svg
                className={styles.socialIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.06C22 6.49 17.52 1.98 12 1.98S2 6.49 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>
        </div>

        <nav className={styles.col} aria-label="Footer">
          <span className="kicker">Pages</span>
          {navItems.map((i) => (
            <Link key={i.href} href={i.href}>
              {i.label}
            </Link>
          ))}
        </nav>

        <div className={styles.col}>
          <span className="kicker">Service area</span>
          <p className={styles.areas}>{serviceAreas.slice(0, 8).join(" · ")} &amp; surrounding Northeast Ohio</p>
        </div>
      </div>

      <div className={`wrap ${styles.legal}`}>
        <span>
          © {year} {site.legalName}
        </span>
        <span className="mono">
          <Link href="/privacy/">Privacy</Link> · 24/7 emergency · {site.phone}
        </span>
        <a
          href="https://huntersystems.dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.builtBy}
          aria-label="Built by Hunter Systems — opens in a new tab"
        >
          <svg
            className={styles.hsSigil}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3.2 L21.5 20.4 L2.5 20.4 Z" />
            <path d="M12 9 L17 18.2 L7 18.2 Z" />
            <circle cx="12" cy="15.2" r="1.15" fill="currentColor" stroke="none" />
          </svg>
          <span>Built by Hunter Systems</span>
        </a>
      </div>
    </footer>
  );
}
