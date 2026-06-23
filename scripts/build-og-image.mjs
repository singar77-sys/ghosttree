// Build the 1200x630 social/OG card: a dramatic real job photo, darkened with a
// bottom gradient for legibility, with the white logo lockup in the lower-left.
import sharp from "sharp";
import { statSync } from "node:fs";

const PHOTO = "public/images/optimized/ghost-tree-service-crane-tree-removal-over-house-medina-oh.webp";
const LOGO = "public/images/brand/ghost-logo-light.png";
const OUT = "public/images/og-card.jpg";
const W = 1200;
const H = 630;

const base = await sharp(PHOTO).resize(W, H, { fit: "cover", position: "centre" }).toBuffer();

const gradient = Buffer.from(
  `<svg width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="#000" stop-opacity="0.15"/>` +
    `<stop offset="0.55" stop-color="#000" stop-opacity="0.35"/>` +
    `<stop offset="1" stop-color="#000" stop-opacity="0.88"/>` +
    `</linearGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/></svg>`
);

const logo = await sharp(LOGO).resize({ width: 560 }).toBuffer();
const lm = await sharp(logo).metadata();

await sharp(base)
  .composite([
    { input: gradient, top: 0, left: 0 },
    { input: logo, left: 64, top: H - lm.height - 54 }
  ])
  .jpeg({ quality: 86 })
  .toFile(OUT);

console.log(`${OUT}  ${W}x${H}  ${Math.round(statSync(OUT).size / 1024)}KB`);
