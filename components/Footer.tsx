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
          <div className={styles.contact}>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <p className={styles.nap}>
              {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
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
          <a href={site.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className={`wrap ${styles.legal}`}>
        <span>
          © {year} {site.legalName}
        </span>
        <span className="mono">24/7 emergency · {site.phone}</span>
      </div>
    </footer>
  );
}
