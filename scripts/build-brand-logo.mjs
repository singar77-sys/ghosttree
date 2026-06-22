// Derive the two theme-swapped brand-logo PNGs from a single monochrome wordmark.
// Input: a white-on-transparent logo. Output: trimmed white (dark mode) + black (light mode),
// both at the same tight bbox so they register perfectly in the theme swap.
import sharp from "sharp";
import { statSync } from "node:fs";

const SRC = "C:/Users/Mark/Desktop/Ghost_Tree_Service_Logo_-_Update_Trans.png";
const OUT = "public/images/brand";
const TARGET_W = 1400;

// Trim the transparent padding down to the wordmark itself.
const trimmed = await sharp(SRC).trim({ threshold: 10 }).png().toBuffer();
const tm = await sharp(trimmed).metadata();
const ratio = tm.width / tm.height;
const W = TARGET_W;
const H = Math.round(W / ratio);

// White wordmark — shown in DARK mode.
await sharp(trimmed)
  .resize(W, H, { fit: "fill" })
  .png({ compressionLevel: 9, palette: true })
  .toFile(`${OUT}/ghost-logo-light.png`);

// Black wordmark — shown in LIGHT mode. Mask the logo's alpha onto solid black so the
// result is pure black where opaque and fully transparent elsewhere (no inverted fringe).
const alpha = await sharp(trimmed)
  .resize(W, H, { fit: "fill" })
  .ensureAlpha()
  .extractChannel("alpha")
  .raw()
  .toBuffer();
await sharp({ create: { width: W, height: H, channels: 3, background: { r: 0, g: 0, b: 0 } } })
  .joinChannel(alpha, { raw: { width: W, height: H, channels: 1 } })
  .png({ compressionLevel: 9, palette: true })
  .toFile(`${OUT}/ghost-logo-dark.png`);

console.log(`trimmed source: ${tm.width}x${tm.height}  ratio ${ratio.toFixed(3)}:1`);
for (const f of ["light", "dark"]) {
  const p = `${OUT}/ghost-logo-${f}.png`;
  const m = await sharp(p).metadata();
  console.log(`${f.padEnd(6)} ${m.width}x${m.height} alpha:${m.hasAlpha} ${Math.round(statSync(p).size / 1024)}KB`);
}
console.log(`=> set .brand-logo aspect-ratio to ${ratio.toFixed(3)}`);
