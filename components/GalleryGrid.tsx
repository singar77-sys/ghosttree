"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery";
import styles from "./GalleryGrid.module.css";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const go = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  // While open: arrow/Escape keys + lock background scroll.
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, close, go]);

  return (
    <>
      <section className={`wrap ${styles.grid}`} aria-label="Job photos">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            className={styles.item}
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${g.alt}`}
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 980px) 33vw, 25vw"
              className={styles.cover}
              priority={i < 4}
            />
          </button>
        ))}
      </section>

      {index !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button type="button" className={styles.backdrop} onClick={close} aria-label="Close viewer" />
          <button type="button" className={styles.close} onClick={close} aria-label="Close viewer">
            &times;
          </button>
          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            onClick={() => go(-1)}
            aria-label="Previous photo"
          >
            &lsaquo;
          </button>
          <figure className={styles.stage}>
            <Image src={items[index].src} alt={items[index].alt} fill sizes="92vw" className={styles.full} priority />
            <figcaption className={styles.caption}>
              {items[index].alt}
              <span className={styles.count}>
                {" "}
                · {index + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            onClick={() => go(1)}
            aria-label="Next photo"
          >
            &rsaquo;
          </button>
        </div>
      )}
    </>
  );
}
