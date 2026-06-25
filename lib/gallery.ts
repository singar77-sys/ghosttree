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

// Hand-written alt text for the strongest shots — the generated alts are
// slug-derived and generic. Keyed by filename; anything not listed keeps its
// generated alt.
const ALT_OVERRIDES: Record<string, string> = {
  "ghost-tree-service-97982318-576964626268797-2180593250237153280-n-medina-oh.webp":
    "Before and after of a large tree removed beside a Medina County home, the yard cleared and raked",
  "ghost-tree-service-80193135-486349255330335-57083044531535872-o-medina-oh.webp":
    "Before and after of tree work at a white farmhouse, the takedown reached from a bucket lift",
  "ghost-tree-service-68555049-407862976512297-7541599260492431360-n-medina-oh.webp":
    "Before and after of overgrown front-yard trees pruned back at a home with a white picket fence",
  "ghost-tree-service-62578020-371468196818442-1908809248754630656-o-medina-oh.webp":
    "A storm-downed limb cleared off a chain-link fence at a commercial site, before and after",
  "ghost-tree-service-60977997-362002134431715-866071423569887232-o-medina-oh.webp":
    "Before and after of a large multi-trunk maple removed from a brick home's front yard",
  "ghost-tree-service-39467730-252553302043266-9164931189952217088-o-medina-oh.webp":
    "A storm-split tree removed beside a home in three stages: leaning, cut to a spar, and cleared to a stump",
  "ghost-tree-service-cool-crane-shot-medina-oh.webp":
    "A crane boom reaching into a backyard removal at first light, a tracked spider crane staged behind",
  "ghost-tree-service-maxed-out-medina-oh.webp":
    "A compact tracked spider crane at full reach, lifting out a tall pine beside a garage",
  "ghost-tree-service-logan-action-shot-medina-oh.webp":
    "A climber roped to a tall bare spar, cutting a section loose under the crane hook as sawdust flies",
  "ghost-tree-service-storm-job-cool-pic-medina-oh.webp":
    "A wind-toppled tree leaning against a house, reached by a bucket lift for removal",
  "ghost-tree-service-tight-fit-medina-oh.webp":
    "A tracked spider crane threaded through a narrow gap between a house and the fence to reach the backyard",
  "ghost-tree-service-unique-set-up-medina-oh.webp":
    "A spider crane set up on the drive of a wooded log home, rigged to take a tree off the slope",
  "ghost-tree-service-tree-top-flyer-medina-oh.webp":
    "A climber's view from the top of the canopy, looking out over the Medina County treeline",
  "ghost-tree-service-gordon-st-crane-job-medina-oh.webp":
    "A tall tree taken down between two houses with a crane and a bucket lift working together"
};

export const gallery: GalleryItem[] = (data as GalleryItem[])
  .filter(
    (g) =>
      g.src.endsWith(".webp") &&
      !g.src.includes("logo") &&
      !g.src.includes("tree-removal-crew") &&
      !EXCLUDE.some((f) => g.src.endsWith(f))
  )
  .map((g) => {
    const file = g.src.split("/").pop() ?? "";
    return file in ALT_OVERRIDES ? { ...g, alt: ALT_OVERRIDES[file] } : g;
  });
