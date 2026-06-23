import Link from "next/link";
import { site } from "@/lib/site";
import GhostSection from "./GhostSection";
import TrustLine from "./TrustLine";
import styles from "./QuoteBand.module.css";

export default function QuoteBand({
  kicker = "Get it handled",
  heading = "The tree isn’t waiting. Neither are we."
}: {
  kicker?: string;
  heading?: string;
}) {
  return (
    <GhostSection
      src="/images/optimized/ghost-tree-service-tree-climber-bare-maple-by-house-medina-oh.webp"
      className={styles.cta}
    >
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h2 className={styles.h2}>{heading}</h2>
        <div className={styles.ctas}>
          <a href={site.phoneHref} className="btn btn-call">
            Call {site.phone}
          </a>
          <Link href="/quote/" className="btn btn-quote">
            Get my free quote
          </Link>
        </div>
        <TrustLine center />
      </div>
    </GhostSection>
  );
}
