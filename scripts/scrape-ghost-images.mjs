import { execFile } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const ROOT = "https://www.ghosttreeservice.com";
const PAGES = [
  "/",
  "/our-story",
  "/services",
  "/photo-gallery",
  "/testimonials",
  "/quote",
  "/contact-us",
  "/services-1",
  "/sitemap.xml"
];

const originalDir = path.resolve("public/images/originals");
const optimizedDir = path.resolve("public/images/optimized");
const manifestPath = path.resolve("src/data/gallery.generated.json");

const semanticNames = new Map([
  ["01", "chainsaw-tree-service"],
  ["12", "24-7-emergency-response"],
  ["14", "lot-clearing"],
  ["17", "tree-pruning"],
  ["19", "tree-removal-crane"],
  ["23", "crane-tree-removal"],
  ["24", "emergency-tree-service"],
  ["25", "tree-removal-crew"]
]);

const titleCase = (value) =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const decodeHtml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const stripQuery = (url) => url.replace(/[?#].*$/, "");

const slugify = (value) =>
  decodeURIComponent(value)
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const imageKey = (url) => stripQuery(url);

const imageNameFromUrl = (url, index) => {
  const clean = stripQuery(url);
  const rawName = clean.split("/").pop() || `image-${index}.jpg`;
  const parsed = path.parse(rawName);
  const baseSlug = slugify(parsed.name);
  const semantic = semanticNames.get(baseSlug) ?? baseSlug;
  const prefix = "ghost-tree-service";
  const suffix = semantic.includes("logo") ? "" : "-medina-oh";
  const fallback = `tree-service-medina-oh-${String(index).padStart(2, "0")}`;
  return `${prefix}-${semantic || fallback}${suffix}`;
};

const collectImages = (html) => {
  const images = new Map();
  const patterns = [
    /https?:\/\/(?:images|static1)\.squarespace-cdn\.com\/[^"'<>\s)]+?\.(?:jpg|jpeg|png|webp|ico)(?:\?[^"'<>\s)]*)?/gi,
    /\/\/(?:images|static1)\.squarespace-cdn\.com\/[^"'<>\s)]+?\.(?:jpg|jpeg|png|webp|ico)(?:\?[^"'<>\s)]*)?/gi
  ];

  for (const pattern of patterns) {
    for (const match of html.matchAll(pattern)) {
      const url = decodeHtml(match[0]).replace(/^\/\//, "https://");
      if (url.includes("format=")) continue;
      if (url.toLowerCase().endsWith(".ico")) continue;
      images.set(imageKey(url), url);
    }
  }

  return images;
};

const fetchText = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.text();
};

const download = async (url, filePath) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(filePath, buffer);
};

const optimizeImage = async (inputPath, outputPath) => {
  await execFileAsync("magick", [
    inputPath,
    "-auto-orient",
    "-strip",
    "-resize",
    "1800x1800>",
    "-quality",
    "82",
    outputPath
  ]);
};

const main = async () => {
  await mkdir(originalDir, { recursive: true });
  await mkdir(optimizedDir, { recursive: true });

  const allImages = new Map();

  for (const pagePath of PAGES) {
    try {
      const html = await fetchText(`${ROOT}${pagePath}`);
      for (const [key, url] of collectImages(html)) allImages.set(key, url);
    } catch (error) {
      console.warn(error.message);
    }
  }

  const manifest = [];
  const usedNames = new Map();
  let index = 1;

  for (const url of allImages.values()) {
    const cleanUrl = stripQuery(url);
    const ext = path.extname(cleanUrl).toLowerCase() || ".jpg";
    const baseSeoName = imageNameFromUrl(cleanUrl, index);
    const collisionCount = usedNames.get(baseSeoName) ?? 0;
    usedNames.set(baseSeoName, collisionCount + 1);
    const seoName = collisionCount > 0 ? `${baseSeoName}-${collisionCount + 1}` : baseSeoName;
    const originalPath = path.join(originalDir, `${seoName}${ext}`);
    const optimizedName = seoName.includes("logo") ? `${seoName}.png` : `${seoName}.webp`;
    const optimizedPath = path.join(optimizedDir, optimizedName);

    try {
      await download(cleanUrl, originalPath);
      await optimizeImage(originalPath, optimizedPath);
      const semantic = seoName
        .replace(/^ghost-tree-service-/, "")
        .replace(/-medina-oh$/, "");

      manifest.push({
        src: `/images/optimized/${optimizedName}`,
        original: `/images/originals/${seoName}${ext}`,
        alt: `${titleCase(semantic)} by Ghost Tree Service in Medina County Ohio`,
        sourceUrl: cleanUrl,
        slug: semantic
      });

      console.log(`optimized ${optimizedName}`);
      index += 1;
    } catch (error) {
      console.warn(`Skipping ${cleanUrl}: ${error.message}`);
    }
  }

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Wrote ${manifest.length} optimized images to ${optimizedDir}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
