import type { Metadata } from "next";
import { services, site } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import QuoteBand from "@/components/QuoteBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Tree Services in Medina County, OH",
  description:
    "Emergency tree removal, tree removal, trimming and pruning, storm damage cleanup, lot clearing, and utility & commercial tree work across Medina County and Northeast Ohio.",
  alternates: { canonical: "/services/" }
};

export default function ServicesPage() {
  return (
    <>
      <section className={`wrap ${styles.intro}`}>
        <p className="kicker">What we do</p>
        <h1 className={styles.h1}>Tree services across Medina County.</h1>
        <p className={styles.lead}>
          Six dedicated services, each handled with low-impact equipment and spotless cleanup. Heavy enough for the
          crane jobs, clean enough you&rsquo;d never know we were here.
        </p>
        <a href={site.phoneHref} className="btn btn-call">
          Call {site.phone}
        </a>
      </section>

      <section className={`wrap ${styles.grid}`}>
        {services.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </section>

      <QuoteBand />
    </>
  );
}
