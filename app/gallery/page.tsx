import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/lib/gallery";
import { site } from "@/lib/site";
import QuoteBand from "@/components/QuoteBand";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery: Real Tree Work in Medina County",
  description:
    "Real before-and-after job photos from Ghost Tree Service: crane removals, storm damage cleanup, and low-impact tree work across Medina County, Ohio.",
  alternates: { canonical: "/gallery/" }
};

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Ghost Tree Service Job Photos",
  about: "Tree removal, storm damage cleanup, and crane work in Medina County, Ohio",
  image: gallery.slice(0, 24).map((g) => new URL(g.src, site.url).toString())
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={imageGallerySchema} />
      <section className={`wrap ${styles.intro}`}>
        <p className="kicker">Proof in the work</p>
        <h1 className={styles.h1}>Real jobs. No stock photos.</h1>
        <p className={styles.lead}>
          Crane removals, storm damage, tight-access takedowns, and the cleanup that follows. Every photo is a real
          Ghost Tree Service job in Medina County and Northeast Ohio.
        </p>
      </section>

      <section className={`wrap ${styles.grid}`} aria-label="Job photos">
        {gallery.map((g, i) => (
          <figure key={g.src} className={styles.item}>
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 980px) 33vw, 25vw"
              className={styles.cover}
              priority={i < 4}
            />
          </figure>
        ))}
      </section>

      <QuoteBand kicker="See something like your job?" heading="Let’s add yours to the gallery." />
    </>
  );
}
