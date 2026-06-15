import { site } from "@/lib/site";
import styles from "./StickyCallBar.module.css";

// Mobile-only fixed call bar. No JS — pure CSS, shown under 760px.
// The highest-value conversion path with the lowest failure surface.
export default function StickyCallBar() {
  return (
    <div className={styles.bar} aria-label="Quick contact">
      <a href={site.phoneHref} className={styles.call}>
        Call 24/7 · {site.phone}
      </a>
      <a href="/quote/" className={styles.quote}>
        Quote
      </a>
    </div>
  );
}
