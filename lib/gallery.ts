import data from "@/lib/gallery.generated.json";

export type GalleryItem = {
  src: string;
  original: string;
  alt: string;
  sourceUrl?: string;
  slug: string;
};

// Job photos only — drop logo/non-webp entries from the scraped manifest.
// tree-removal-crew is the logo-stamped duplicate of crane-tree-removal.
export const gallery: GalleryItem[] = (data as GalleryItem[]).filter(
  (g) => g.src.endsWith(".webp") && !g.src.includes("logo") && !g.src.includes("tree-removal-crew")
);
