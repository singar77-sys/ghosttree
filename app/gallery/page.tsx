import type { Metadata } from "next";
import { gallery } from "@/lib/gallery";
import { site } from "@/lib/site";
import GalleryGrid from "@/components/GalleryGrid";
import QuoteBand from "@/components/QuoteBand";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery — Tree Removal & Storm Cleanup in Medina County",
  description:
    "Before-and-after job photos from Ghost Tree Service — crane removals, storm-damage cleanup, and tight-access takedowns across Medina County, Ohio.",
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
        <h1 className={styles.h1}>Every job, start to finish.</h1>
        <p className={styles.lead}>
          Crane removals, storm damage, tight-access takedowns, and the cleanup that follows. Open any photo for a
          closer look.
        </p>
      </section>

      <GalleryGrid items={gallery} />

      <QuoteBand kicker="See something like your job?" heading="Let’s add yours to the gallery." />
    </>
  );
}
