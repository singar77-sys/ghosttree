import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, site, faqs } from "@/lib/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import AfterYouCall from "@/components/AfterYouCall";
import QuoteBand from "@/components/QuoteBand";
import TrustLine from "@/components/TrustLine";
import RelatedServices from "@/components/RelatedServices";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const title = `${service.title} in Medina County, OH`;
  const description = `${service.summary} Call Ghost Tree Service at ${site.phone}.`;
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: { title, description, url: `${site.url}/services/${service.slug}/`, images: [service.image] }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.title, path: `/services/${service.slug}/` }
        ])}
      />

      <section className={`wrap ${styles.hero}`}>
        <div className={styles.left}>
          <p className="kicker">{service.eyebrow}</p>
          <h1 className={styles.h1}>{service.title} in Medina County, Ohio</h1>
          <p className={styles.sum}>{service.summary}</p>
          <div className={styles.ctas}>
            <a href={site.phoneHref} className="btn btn-call">
              Call {site.phone}
            </a>
            <Link href="/quote/" className="btn btn-quote">
              Get my free quote
            </Link>
          </div>
          <TrustLine />
          <dl className={styles.spec}>
            <div>
              <dt className="mono">ACCESS //</dt>
              <dd>evaluated on site</dd>
            </div>
            <div>
              <dt className="mono">RIGGING //</dt>
              <dd>crane when the job calls for it</dd>
            </div>
            <div>
              <dt className="mono">SITE //</dt>
              <dd>left spotless</dd>
            </div>
          </dl>
        </div>
        <div className={styles.right}>
          <Image
            src={service.image}
            alt={`${service.title} by Ghost Tree Service in Medina County, Ohio`}
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            className={styles.cover}
            priority
          />
        </div>
      </section>

      <section className={`wrap ${styles.detail}`}>
        <div>
          <p className="kicker">Execution notes</p>
          <h2>Measured like a theorem. Finished like a ghost.</h2>
        </div>
        <p>{service.details}</p>
      </section>

      <section className={`wrap ${styles.process}`} aria-label="How the job runs">
        <div className={styles.secHead}>
          <p className="kicker">How the job runs</p>
          <h2>Start to finish, no surprises.</h2>
        </div>
        <ol className={styles.steps}>
          {service.process.map((p, i) => (
            <li key={p.step} className={styles.step}>
              <span className={`mono ${styles.stepNum}`}>{String(i + 1).padStart(2, "0")}{" //"}</span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepLabel}>{p.step}</h3>
                <p className={styles.stepDetail}>{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={`wrap ${styles.lists}`}>
        <div className={styles.col}>
          <div className={styles.secHead}>
            <p className="kicker">What&apos;s included</p>
            <h2>What you get.</h2>
          </div>
          <ul className={styles.included}>
            {service.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.col}>
          <div className={styles.secHead}>
            <p className="kicker">When to call</p>
            <h2>Signs it&apos;s time.</h2>
          </div>
          <ul className={styles.when}>
            {service.whenToCall.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {service.image2 && (
        <section className={`always-dark ${styles.band}`} aria-label="On the job">
          <Image
            src={service.image2}
            alt={service.image2Alt ?? ""}
            fill
            sizes="100vw"
            className={styles.bandImg}
          />
          <div className={styles.bandScrim} aria-hidden="true" />
          <div className={`wrap ${styles.bandCap}`}>
            <p className="kicker">{service.eyebrow}</p>
          </div>
        </section>
      )}

      <section className={`wrap ${styles.kw}`} aria-label="Related searches">
        {service.keywords.map((k) => (
          <span key={k} className="mono">
            {k}
          </span>
        ))}
      </section>

      <RelatedServices currentSlug={service.slug} />
      <Faq items={[...service.serviceFaqs, ...faqs]} />
      <AfterYouCall />
      <QuoteBand kicker="Get this handled" heading={`Need ${service.title.toLowerCase()} in Medina County?`} />
    </>
  );
}
