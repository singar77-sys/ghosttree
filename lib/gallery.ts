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
// EXCLUDE drops the remaining stock + generic exports, plus the photos now
// featured on the About page (avoid duplicate placement). Leaves an all-real,
// flush grid: 52 = 13x4 (desktop) / 26x2 (mobile).
const EXCLUDE = [
  // stock / generic exports
  "ghost-tree-service-04-medina-oh.webp",
  "ghost-tree-service-05-medina-oh.webp",
  "ghost-tree-service-06-medina-oh.webp",
  "ghost-tree-service-image-asset-medina-oh.webp",
  "ghost-tree-service-image-asset-medina-oh-2.webp",
  "ghost-tree-service-tree-pruning-medina-oh.webp",
  "ghost-tree-service-chainsaw-tree-service-medina-oh.webp",
  "ghost-tree-service-crane-tree-removal-medina-oh.webp",
  "ghost-tree-service-emergency-tree-service-medina-oh.webp",
  "ghost-tree-service-24-7-emergency-response-medina-oh.webp",
  "ghost-tree-service-tree-removal-crane-medina-oh.webp",
  "ghost-tree-service-lot-clearing-medina-oh.webp",
  // now featured on the About page — avoid gallery redundancy
  "ghost-tree-service-nikki-and-log-medina-oh.webp",
  "ghost-tree-service-nikki-on-logs-from-shreeve-storm-medina-oh.webp",
  "ghost-tree-service-us-lift-pic-medina-oh.webp"
];

export const gallery: GalleryItem[] = (data as GalleryItem[]).filter(
  (g) =>
    g.src.endsWith(".webp") &&
    !g.src.includes("logo") &&
    !g.src.includes("tree-removal-crew") &&
    !EXCLUDE.some((f) => g.src.endsWith(f))
);
