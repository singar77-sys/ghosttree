import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const tag = typeof index === "number" ? `${String(index + 1).padStart(2, "0")} / ${service.eyebrow}` : service.eyebrow;
  return (
    <Link href={`/services/${service.slug}/`} className={styles.card}>
      <div className={styles.img}>
        <Image
          src={service.image}
          alt={`${service.title} by Ghost Tree Service in Medina County, Ohio`}
          fill
          sizes="(max-width: 680px) 100vw, 33vw"
          className={styles.cover}
        />
      </div>
      <div className={styles.body}>
        <span className={`mono ${styles.tag}`}>{tag}</span>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <span className={styles.arrow}>→</span>
      </div>
    </Link>
  );
}
