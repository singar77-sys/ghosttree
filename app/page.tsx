import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import GhostSection from "@/components/GhostSection";
import ServiceCard from "@/components/ServiceCard";
import QuoteBand from "@/components/QuoteBand";
import TrustLine from "@/components/TrustLine";
import CoverageGrid from "@/components/CoverageGrid";
import { services, serviceAreas, serviceAreaTowns, testimonials, reviewSummary, proofPoints, site } from "@/lib/site";

const HERO = "/images/optimized/ghost-tree-service-04-medina-oh.webp";
const BA_BEFORE = "/images/optimized/ghost-tree-service-big-sky-apartments-before-medina-oh.webp";
const BA_AFTER = "/images/optimized/ghost-tree-service-big-sky-apart-after-medina-oh.webp";
const OWNERS = "/images/optimized/ghost-tree-service-owners-morbark-wood-chipper-medina-oh.webp";

export default function Home() {
  return (
    <>
      <section className={`always-dark ${styles.hero}`}>
        <Image
          src={HERO}
          alt="Ghost Tree Service tree work in Medina County, Ohio"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`wrap ${styles.heroInner}`}>
          <p className="kicker">Medina County · 24/7 emergency</p>
          <h1 className={styles.h1}>When a tree comes down in Medina County, we&rsquo;re already moving.</h1>
          <p className={styles.heroSub}>
            Family owned &amp; operated. 24/7 emergency tree removal, careful takedowns, trimming, and storm cleanup
            across Medina County and Northeast Ohio. Heavy enough for the crane jobs, clean enough you&rsquo;d never know
            we were here.
          </p>
          <div className={styles.ctas}>
            <a href={site.phoneHref} className="btn btn-call">
              Call 24/7 · {site.phone}
            </a>
            <Link href="/quote/" className="btn btn-quote">
              Get my free quote
            </Link>
          </div>
          <TrustLine />
        </div>
      </section>

      <section className={`wrap ${styles.proof}`} aria-label="Why Ghost Tree Service">
        {proofPoints.map((p, i) => (
          <div key={p} className={styles.proofItem}>
            <span className={`mono ${styles.proofNum}`}>{String(i + 1).padStart(2, "0")}</span>
            <span>{p}</span>
          </div>
        ))}
      </section>

      <GhostSection
        src="/images/optimized/ghost-tree-service-crane-tree-removal-over-house-medina-oh.webp"
        className={styles.diff}
        ariaLabel="The difference"
      >
        <div className="wrap">
          <p className="kicker">The difference</p>
          <h2 className={styles.diffH2}>
            Low-impact equipment. Obsessive cleanup. Your property, protected the whole way down.
          </h2>
        </div>
      </GhostSection>

      <section className={`wrap ${styles.section}`} aria-label="Services">
        <div className={styles.head}>
          <div>
            <p className="kicker">What we do</p>
            <h2>Six jobs. Each handled.</h2>
          </div>
          <Link href="/services/" className={`mono ${styles.headLink}`}>
            All services →
          </Link>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <GhostSection
        src="/images/optimized/ghost-tree-service-climber-tall-yard-tree-removal-medina-oh.webp"
        className={styles.medina}
        ariaLabel="Primary service area"
      >
        <div className="wrap">
          <p className="kicker">Primary service area</p>
          <h2 className={styles.medinaH2}>Medina County tree service, without the franchise blur.</h2>
          <CoverageGrid
            className={styles.areaGrid}
            groups={[
              {
                towns: serviceAreas
                  .slice(0, 9)
                  .map((name) => ({ name, slug: serviceAreaTowns.find((t) => t.name === name)?.slug }))
              }
            ]}
          />
          <Link href="/medina-county-tree-service/" className={`mono ${styles.headLink}`}>
            Open the Medina County plan →
          </Link>
        </div>
      </GhostSection>

      <section className={`wrap ${styles.section}`} aria-label="Recent work">
        <div className={styles.head}>
          <div>
            <p className="kicker">Proof in the work</p>
            <h2>Before. After. No stock photos.</h2>
          </div>
          <Link href="/gallery/" className={`mono ${styles.headLink}`}>
            Full gallery →
          </Link>
        </div>
        <div className={styles.ba}>
          <figure className={styles.figure}>
            <div className={styles.baImg}>
              <Image
                src={BA_BEFORE}
                alt="Overgrown trees crowding the Big Sky apartments before Ghost Tree Service cleared them"
                fill
                sizes="(max-width: 680px) 100vw, 50vw"
                className={styles.coverImg}
              />
            </div>
            <figcaption className="mono">Before · apartment tree work · Big Sky</figcaption>
          </figure>
          <figure className={styles.figure}>
            <div className={styles.baImg}>
              <Image
                src={BA_AFTER}
                alt="The same Big Sky apartments property cleared and cleaned up by Ghost Tree Service"
                fill
                sizes="(max-width: 680px) 100vw, 50vw"
                className={styles.coverImg}
              />
            </div>
            <figcaption className="mono">After · cleared + cleaned</figcaption>
          </figure>
        </div>
      </section>

      <section className={`wrap ${styles.family}`} aria-label="Family owned and operated">
        <figure className={styles.familyFig}>
          <Image
            src={OWNERS}
            alt="Logan and his wife, owners of Ghost Tree Service, with their Morbark wood chipper in Medina County, Ohio"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            className={styles.coverImg}
          />
        </figure>
        <div>
          <p className="kicker">Who you&rsquo;re hiring</p>
          <h2 className={styles.familyH2}>Family owned &amp; operated.</h2>
          <p className={styles.familyP}>
            Ghost Tree Service is run by the family whose name is on the truck — not a call center. You deal with the
            owners from the first call to the final rake, which is exactly why your property gets treated like our own.
          </p>
          <Link href="/about/" className={`mono ${styles.headLink}`}>
            Meet the family →
          </Link>
        </div>
      </section>

      <section className={`wrap ${styles.section}`} aria-label="Reviews">
        <div className={styles.head}>
          <div>
            <p className="kicker">Real Google proof</p>
            <h2>
              {reviewSummary.ratingValue} stars across {reviewSummary.reviewCount} reviews.
            </h2>
          </div>
          <a href={site.googleMaps} target="_blank" rel="noopener noreferrer" className={`mono ${styles.headLink}`}>
            Google profile →
          </a>
        </div>
        <div className={styles.reviews}>
          {testimonials.map((t) => (
            <blockquote key={t.name} className={styles.quote}>
              <span className={styles.stars} aria-label={`${t.rating} star review`}>
                ★★★★★
              </span>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <cite className="mono">
                {t.name} · {t.source}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
