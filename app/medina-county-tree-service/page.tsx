import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, serviceAreasByCounty, serviceAreaNote, serviceAreaTowns, site, faqs } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import QuoteBand from "@/components/QuoteBand";
import CoverageGrid from "@/components/CoverageGrid";
import styles from "./page.module.css";

const BAND = "/images/optimized/ghost-tree-service-chainsaw-cutting-fallen-oak-medina-oh.webp";

export const metadata: Metadata = {
  title: "Medina County Tree Service",
  description:
    "Local 24/7 tree removal, trimming, storm cleanup, and lot clearing across Medina County, OH: Medina, Brunswick, Wadsworth, Seville, Lodi, and surrounding Northeast Ohio towns.",
  alternates: { canonical: "/medina-county-tree-service/" }
};

export default function MedinaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Medina County Tree Service", path: "/medina-county-tree-service/" }
        ])}
      />

      <section className={`wrap ${styles.intro}`}>
        <p className="kicker">Primary service area</p>
        <h1 className={styles.h1}>Medina County tree service, without the franchise blur.</h1>
        <p className={styles.lead}>
          Local crews, low-impact equipment, and 24/7 emergency response across Medina County and Northeast Ohio. We
          know these towns, these trees, and these storms.
        </p>
        <div className={styles.ctas}>
          <a href={site.phoneHref} className="btn btn-call">
            Call {site.phone}
          </a>
          <Link href="/quote/" className="btn btn-quote">
            Free quote
          </Link>
        </div>
      </section>

      <section className={`wrap ${styles.block}`}>
        <p className="kicker">Towns we serve</p>
        <CoverageGrid
          className={styles.coverage}
          groups={Object.entries(serviceAreasByCounty).map(([county, towns]) => ({
            label: county,
            towns: towns.map((name) => ({ name, slug: serviceAreaTowns.find((t) => t.name === name)?.slug }))
          }))}
        />
        <p className={styles.note}>{serviceAreaNote}</p>
      </section>

      <section className={`always-dark ${styles.band}`} aria-label="Working in Medina County">
        <Image
          src={BAND}
          alt="Bucking a fallen oak in a Medina County backyard"
          fill
          sizes="100vw"
          className={styles.bandImg}
        />
        <div className={styles.bandScrim} aria-hidden="true" />
        <div className={`wrap ${styles.bandInner}`}>
          <p className="kicker">These towns, these trees, these storms</p>
        </div>
      </section>

      <section className={`wrap ${styles.block}`}>
        <p className="kicker">Every service, county-wide</p>
        <ul className={styles.svc}>
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}/`}>{s.title} →</Link>
            </li>
          ))}
        </ul>
      </section>

      <Faq items={faqs} />
      <QuoteBand kicker="Local and ready" heading="Got a tree problem in Medina County?" />
    </>
  );
}
