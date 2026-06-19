// Optimize + rename a batch of client-supplied photos into the site's
// /public/images/optimized convention: auto-orient by EXIF, cap the longest
// edge at 1800px, convert to webp q80 (matches the existing optimized assets).
// Re-runnable. Source folder can be deleted afterward (originals live in Drive).
import sharp from "sharp";
import { statSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "public/images/drive-download-20260619T161124Z-3-001";
const OUT = "public/images/optimized";
const MAX = 1800;
const QUALITY = 80;

// [ sourceFile, optimizedName ] — names derived from photo content for SEO.
const MAP = [
  ["website photo 1.jpg", "ghost-tree-service-crane-assisted-spar-takedown-medina-oh.webp"],
  ["website photo 2.jpg", "ghost-tree-service-tree-climber-summer-canopy-medina-oh.webp"],
  ["website photo 3.jpg", "ghost-tree-service-crane-boom-canopy-view-medina-oh.webp"],
  ["website photo 4.jpg", "ghost-tree-service-crane-tree-removal-over-house-medina-oh.webp"],
  ["website photo 5.jpg", "ghost-tree-service-winter-tree-takedown-medina-oh.webp"],
  ["website photo 6.jpg", "ghost-tree-service-crew-member-branded-hoodie-medina-oh.webp"],
  ["website photo 7.jpg", "ghost-tree-service-owners-morbark-wood-chipper-medina-oh.webp"],
  ["website photo 8.jpeg", "ghost-tree-service-storm-fallen-tree-cleanup-medina-oh.webp"],
  ["website photo 9.jpg", "ghost-tree-service-mini-skid-steer-brush-cleanup-medina-oh.webp"],
  ["website photo 10.jpg", "ghost-tree-service-climber-chainsaw-pine-canopy-medina-oh.webp"],
  ["website photo 11.jpg", "ghost-tree-service-tree-climber-bare-maple-by-house-medina-oh.webp"],
  ["website photo 12.jpg", "ghost-tree-service-ground-cutting-near-deck-medina-oh.webp"],
  ["website photo 13.jpg", "ghost-tree-service-climber-tall-yard-tree-removal-medina-oh.webp"]
];

mkdirSync(OUT, { recursive: true });

let totalIn = 0;
let totalOut = 0;
for (const [from, to] of MAP) {
  const inPath = join(SRC, from);
  const outPath = join(OUT, to);
  const inKb = statSync(inPath).size / 1024;
  const info = await sharp(inPath, { failOn: "none" }) // tolerate recoverable JPEG warnings
    .rotate() // auto-orient from EXIF, then strip the tag
    .resize(MAX, MAX, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);
  const outKb = info.size / 1024;
  totalIn += inKb;
  totalOut += outKb;
  console.log(`${to.padEnd(62)} ${`${info.width}x${info.height}`.padEnd(11)} ${`${Math.round(inKb)}KB`.padStart(7)} -> ${`${Math.round(outKb)}KB`.padStart(6)}`);
}
console.log(`\nTOTAL  ${(totalIn / 1024).toFixed(1)}MB -> ${(totalOut / 1024).toFixed(1)}MB  across ${MAP.length} images`);
