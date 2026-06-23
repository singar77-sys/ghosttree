// Build the favicon + apple icon from the brand logo's tree mark.
// Crops the tree off the left of the wordmark lockup, then centers it (white) on a
// solid black tile — matching the existing icon language. Writes app/icon.png +
// app/apple-icon.png. Re-run if the source logo changes.
import sharp from "sharp";
import { statSync } from "node:fs";

const SRC = "C:/Users/Mark/Desktop/Ghost_Tree_Service_Logo_-_Update_Trans.png";
const APP = "app";
const CROP_FRAC = 0.22; // left fraction of the trimmed lockup that holds the tree + birds
const TILE_PAD = 0.12; // breathing room inside the tile

// 1) trim transparent padding to the full lockup
const lockup = await sharp(SRC).trim({ threshold: 10 }).png().toBuffer();
const lm = await sharp(lockup).metadata();

// 2) crop the left region (tree), then trim tight → white tree on transparent
const cropW = Math.round(lm.width * CROP_FRAC);
const cropped = await sharp(lockup)
  .extract({ left: 0, top: 0, width: cropW, height: lm.height })
  .png()
  .toBuffer();
const tree = await sharp(cropped).trim({ threshold: 10 }).png().toBuffer();
const tmeta = await sharp(tree).metadata();

async function tile(size, out) {
  const inner = Math.round(size * (1 - 2 * TILE_PAD));
  const fitted = await sharp(tree).resize(inner, inner, { fit: "inside" }).toBuffer();
  const fm = await sharp(fitted).metadata();
  await sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 1 } } })
    .composite([{ input: fitted, left: Math.round((size - fm.width) / 2), top: Math.round((size - fm.height) / 2) }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`${out.padEnd(22)} ${size}x${size}  mark ${fm.width}x${fm.height}  ${Math.round(statSync(out).size / 1024)}KB`);
}

console.log(`lockup ${lm.width}x${lm.height} | tree bbox ${tmeta.width}x${tmeta.height} (ratio ${(tmeta.width / tmeta.height).toFixed(2)})`);
await tile(512, `${APP}/icon.png`);
await tile(180, `${APP}/apple-icon.png`);
