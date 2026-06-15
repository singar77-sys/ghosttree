import Link from "next/link";
import { navItems, site } from "@/lib/site";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} home`}>
          <BrandLogo size={40} />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <a href={site.phoneHref} className={`btn btn-call ${styles.call}`}>
          Call {site.phone}
        </a>
      </div>
    </header>
  );
}
