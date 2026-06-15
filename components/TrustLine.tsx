import { reviewSummary } from "@/lib/site";
import styles from "./TrustLine.module.css";

// Proof at the moment of decision — sits directly under primary CTAs.
export default function TrustLine({ center = false }: { center?: boolean }) {
  return (
    <p className={`mono ${styles.trust} ${center ? styles.center : ""}`}>
      Licensed &amp; insured · <span className={styles.stars}>★ {reviewSummary.ratingValue}</span> ({reviewSummary.reviewCount} Google reviews) · answered 24/7
    </p>
  );
}
