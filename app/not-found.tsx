import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`wrap ${styles.wrap}`}>
      <p className="kicker">404</p>
      <h1 className={styles.h1}>This page vanished like a ghost.</h1>
      <p className={styles.lead}>
        The page you&rsquo;re after isn&rsquo;t here &mdash; moved, removed, or never existed. The tree work, though, is
        very real.
      </p>
      <div className={styles.ctas}>
        <Link href="/" className="btn btn-quote">
          Back home
        </Link>
        <a href={site.phoneHref} className="btn btn-call">
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}
