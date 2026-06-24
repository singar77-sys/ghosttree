import type { Metadata } from "next";
import Image from "next/image";
import { site, proofPoints, reviewSummary } from "@/lib/site";
import GhostSection from "@/components/GhostSection";
import QuoteBand from "@/components/QuoteBand";
import styles from "./page.module.css";

const WORK_PHOTOS = [
  {
    src: "/images/optimized/ghost-tree-service-nikki-and-log-medina-oh.webp",
    alt: "A Ghost Tree Service crew member beside a freshly cut log section"
  },
  {
    src: "/images/optimized/ghost-tree-service-nikki-on-logs-from-shreeve-storm-medina-oh.webp",
    alt: "On a stack of storm-felled logs cleared after the Shreve storm"
  },
  {
    src: "/images/optimized/ghost-tree-service-us-lift-pic-medina-oh.webp",
    alt: "A massive log section craned out onto the flatbed"
  }
];

export const metadata: Metadata = {
  title: "About Ghost Tree Service",
  description:
    "Ghost Tree Service started with a small truck, a trailer, and one rule: treat the customer's property like our own. A low-impact tree crew across Medina County and Northeast Ohio. 5.0 stars across 39 Google reviews.",
  alternates: { canonical: "/about/" }
};

export default function AboutPage() {
  return (
    <>
      <section className={`wrap ${styles.intro}`}>
        <p className="kicker">Who we are</p>
        <h1 className={styles.h1}>The crew that leaves like a ghost.</h1>
        <p className={styles.lead}>
          Ghost Tree Service started the way a lot of good crews do. A few guys who had worked for other local tree
          services, a small truck and a trailer, and one rule: treat the customer&rsquo;s property like it&rsquo;s our
          own. It grew into a full-time operation across Northeast Ohio. The rule never changed.
        </p>
      </section>

      <section className={`wrap ${styles.story}`}>
        <div>
          <p className="kicker">The name</p>
          <h2>We come and go without it looking like we were here.</h2>
        </div>
        <p>
          That is where &ldquo;Ghost&rdquo; comes from. Low-impact equipment, careful rigging, and cleanup so thorough
          the only sign we were on the property is that the dangerous tree is gone. Hauled, chipped, raked. Like we were
          never there.
        </p>
      </section>

      <section className={`wrap ${styles.story}`}>
        <div>
          <p className="kicker">How we work</p>
          <h2>Responsive, professional, clean.</h2>
        </div>
        <p>
          Every job starts as a read: access, weight, drop zones, structure clearance, the debris path, the final rake.
          Low-impact equipment protects the lawn and the lines. Then we clear the site and go. That discipline is why
          homeowners, businesses, and municipalities across the county call us back.
        </p>
      </section>

      <section className={`wrap ${styles.strip}`} aria-label="The work, up close">
        {WORK_PHOTOS.map((photo) => (
          <figure key={photo.src} className={styles.sFig}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 600px) 100vw, 33vw"
              className={styles.sImg}
            />
          </figure>
        ))}
      </section>

      <section className={`wrap ${styles.story}`}>
        <div>
          <p className="kicker">Who runs it</p>
          <h2>Family owned &amp; operated.</h2>
        </div>
        <p>
          Ghost Tree Service is a family owned and operated crew based in Seville, serving Medina County and Northeast
          Ohio. You&rsquo;re hiring the family whose name is on the truck, not a call center routing you to a stranger.
          That&rsquo;s why the property gets treated like our own and the cleanup is never someone else&rsquo;s problem.
        </p>
      </section>

      <section className={`wrap ${styles.story}`}>
        <div>
          <p className="kicker">Where we work</p>
          <h2>Based in Seville. Working all over Northeast Ohio.</h2>
        </div>
        <p>
          We cover Medina County, Summit County, and parts of Portage and Wayne. For larger jobs we travel into
          Cuyahoga, Lorain, Stark, and the surrounding counties. Storm down at 2 a.m.? We answer 24/7 at{" "}
          <a href={site.phoneHref} className={styles.link}>
            {site.phone}
          </a>
          .
        </p>
      </section>

      <GhostSection
        src="/images/optimized/ghost-tree-service-crew-member-branded-hoodie-medina-oh.webp"
        className={styles.proof}
        ariaLabel="What sets Ghost Tree apart"
      >
        <div className={`wrap ${styles.proofGrid}`}>
          {proofPoints.map((p) => (
            <div key={p} className={styles.pItem}>
              {p}
            </div>
          ))}
        </div>
      </GhostSection>

      <section className={`wrap ${styles.rev}`}>
        <p className="kicker">Rated on Google</p>
        <h2>
          {reviewSummary.ratingValue} stars across {reviewSummary.reviewCount} reviews.
        </h2>
        <a href={site.googleMaps} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Open the Google profile →
        </a>
      </section>

      <QuoteBand kicker="Work with us" heading="Let’s get your tree handled." />
    </>
  );
}
