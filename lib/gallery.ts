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
// EXCLUDE also drops the remaining stock + generic numbered exports, which leaves
// a flush count of 60 (15x4 / 20x3 / 30x2, even at every gallery breakpoint).
const EXCLUDE = [
  "ghost-tree-service-04-medina-oh.webp",
  "ghost-tree-service-05-medina-oh.webp",
  "ghost-tree-service-06-medina-oh.webp",
  "ghost-tree-service-image-asset-medina-oh-2.webp",
  "ghost-tree-service-tree-pruning-medina-oh.webp",
  "ghost-tree-service-chainsaw-tree-service-medina-oh.webp",
  "ghost-tree-service-crane-tree-removal-medina-oh.webp"
];

export const gallery: GalleryItem[] = (data as GalleryItem[]).filter(
  (g) =>
    g.src.endsWith(".webp") &&
    !g.src.includes("logo") &&
    !g.src.includes("tree-removal-crew") &&
    !EXCLUDE.some((f) => g.src.endsWith(f))
);
