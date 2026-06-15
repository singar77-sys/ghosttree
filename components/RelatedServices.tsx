import Link from "next/link";
import { services } from "@/lib/site";
import styles from "./RelatedServices.module.css";

// Hub-and-spoke internal linking: each service links to its siblings + the county hub.
export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const others = services.filter((s) => s.slug !== currentSlug);
  return (
    <section className={`wrap ${styles.wrap}`} aria-label="More services">
      <p className="kicker">More from Ghost Tree</p>
      <ul className={styles.list}>
        {others.map((s) => (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}/`}>{s.title} →</Link>
          </li>
        ))}
        <li>
          <Link href="/medina-county-tree-service/" className={styles.hub}>
            Serving all of Medina County →
          </Link>
        </li>
      </ul>
    </section>
  );
}
