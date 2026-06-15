// Renders app/apple-icon.png (180x180) from the Canopy Eye sigil (components/Sigil.tsx).
// Solid black tile, white strokes — apple-touch-icons can't be transparent or scheme-aware.
// Re-run if the sigil geometry changes: node scripts/generate-apple-icon.mjs
import path from "node:path";
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="-12 -2 104 104">
  <rect x="-12" y="-2" width="104" height="104" fill="#000" />
  <g fill="none" stroke="#fff" stroke-width="4">
    <path d="M10 40 Q40 16 70 40 Q40 64 10 40 Z" />
    <circle cx="40" cy="40" r="6.5" />
    <line x1="40" y1="46.5" x2="40" y2="72" />
  </g>
</svg>`;

const out = path.join(import.meta.dirname, "..", "app", "apple-icon.png");
await sharp(Buffer.from(svg)).png().toFile(out);
console.log("wrote", out);
