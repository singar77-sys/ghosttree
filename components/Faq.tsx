import JsonLd from "./JsonLd";
import { faqPageSchema } from "@/lib/schema";
import styles from "./Faq.module.css";

export default function Faq({
  items,
  heading = "Questions, answered."
}: {
  items: ReadonlyArray<{ q: string; a: string }>;
  heading?: string;
}) {
  if (!items.length) return null;
  return (
    <section className={`wrap ${styles.wrap}`} aria-label="Frequently asked questions">
      <JsonLd data={faqPageSchema(items)} />
      <p className="kicker">FAQ</p>
      <h2 className={styles.h2}>{heading}</h2>
      <div className={styles.list}>
        {items.map((f) => (
          <details key={f.q} className={styles.item}>
            <summary className={styles.q}>{f.q}</summary>
            <p className={styles.a}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
