import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceAreaTowns, services, site } from "@/lib/site";
import { townServiceSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import AfterYouCall from "@/components/AfterYouCall";
import QuoteBand from "@/components/QuoteBand";
import TrustLine from "@/components/TrustLine";
import styles from "./page.module.css";

const HERO_IMAGE = "/images/optimized/ghost-tree-service-tree-removal-crane-medina-oh.webp";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreaTowns.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }): Promise<Metadata> {
  const { town: slug } = await params;
  const town = serviceAreaTowns.find((t) => t.slug === slug);
  if (!town) return {};
  const title = `Tree Service in ${town.name}, OH`;
  const description = town.intro.length > 155 ? `${town.intro.slice(0, 152).trimEnd()}…` : town.intro;
  return {
    title,
    description,
    alternates: { canonical: `/tree-service/${town.slug}/` },
    openGraph: {
      title,
      description,
      url: `${site.url}/tree-service/${town.slug}/`,
      images: [HERO_IMAGE]
    }
  };
}

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const { town: slug } = await params;
  const town = serviceAreaTowns.find((t) => t.slug === slug);
  if (!town) notFound();

  const townServices = town.primaryServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((svc): svc is (typeof services)[number] => Boolean(svc));

  const nearby = town.nearbyTowns
    .map((n) => serviceAreaTowns.find((t) => t.slug === n))
    .filter((t): t is (typeof serviceAreaTowns)[number] => Boolean(t));

  return (
    <>
      <JsonLd data={townServiceSchema(town)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: `${town.name} Tree Service`, path: `/tree-service/${town.slug}/` }
        ])}
      />

      <section className={`wrap ${styles.hero}`}>
        <div className={styles.left}>
          <p className="kicker">{town.name} · Medina County tree service</p>
          <h1 className={styles.h1}>Tree Service in {town.name}, Ohio</h1>
          <p className={styles.sum}>{town.intro}</p>
          <div className={styles.ctas}>
            <a href={site.phoneHref} className="btn btn-call">
              Call {site.phone}
            </a>
            <Link href="/quote/" className="btn btn-quote">
              Get my free quote
            </Link>
          </div>
          <TrustLine />
        </div>
        <div className={styles.right}>
          <Image
            src={HERO_IMAGE}
            alt={`Ghost Tree Service crane tree removal in ${town.name}, Ohio`}
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            className={styles.cover}
            priority
          />
        </div>
      </section>

      <section className={`wrap ${styles.areas}`} aria-label={`Areas we serve in ${town.name}`}>
        <div>
          <p className="kicker">Where we work</p>
          <h2>Neighborhoods and areas around {town.name}</h2>
        </div>
        <ul className={styles.hoods}>
          {town.neighborhoods.map((h) => (
            <li key={h} className="mono">
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className={`wrap ${styles.proof}`} aria-label={`Local response in ${town.name}`}>
        <p className="kicker">On the ground in {town.name}</p>
        <p className={styles.proofText}>{town.localProof}</p>
      </section>

      <section className={`wrap ${styles.svcBlock}`} aria-label={`Services in ${town.name}`}>
        <p className="kicker">Services in {town.name}</p>
        <ul className={styles.svc}>
          {townServices.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}/`}>{s.title} →</Link>
            </li>
          ))}
        </ul>
      </section>

      {nearby.length > 0 && (
        <section className={`wrap ${styles.nearbyBlock}`} aria-label={`Towns near ${town.name}`}>
          <p className="kicker">Nearby towns we serve</p>
          <ul className={styles.nearby}>
            {nearby.map((t) => (
              <li key={t.slug}>
                <Link href={`/tree-service/${t.slug}/`}>{t.name} →</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Faq items={town.townFaqs} heading={`${town.name} tree service questions, answered.`} />
      <AfterYouCall />
      <QuoteBand kicker={`Serving ${town.name}, OH`} heading={`Need a tree handled in ${town.name}?`} />
    </>
  );
}
