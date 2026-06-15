// Single source of truth for Ghost Tree Service.
// NAP must stay identical here, in schema, on Google Business Profile, and in citations.

export const site = {
  name: "Ghost Tree Service",
  legalName: "Ghost Tree Service LLC",
  url: "https://www.ghosttreeservice.com",
  phone: "(330) 907-6403",
  phoneHref: "tel:+13309076403",
  email: "info@ghosttreeservice.com",
  emailHref: "mailto:info@ghosttreeservice.com",
  facebook: "https://www.facebook.com/ghosttreeservices",
  googleMaps:
    "https://www.google.com/maps?place_id=ChIJd54O6CK1MIgR5PEvh_ijxXw&q=place_id%3AChIJd54O6CK1MIgR5PEvh_ijxXw",
  reviewSource:
    "https://reviews.birdeye.com/ghost-tree-service-llc-170489385790097",
  address: {
    street: "6289 Buffham Rd",
    city: "Seville",
    region: "OH",
    postalCode: "44273",
    country: "US"
  },
  hours: "24/7 emergency response",
  tagline: "Low-impact tree service for Medina County and Northeast Ohio.",
  // The brand promise: heavy iron + clean disappearance (low-impact + spotless cleanup).
  description:
    "Ghost Tree Service provides 24/7 emergency tree removal, tree removals, trimming and pruning, storm damage cleanup, lot clearing, and utility and commercial tree work across Medina County and Northeast Ohio. Heavy enough for the crane jobs, clean enough you would never know we were there."
} as const;

export const navItems = [
  { label: "Services", href: "/services/" },
  { label: "Medina County", href: "/medina-county-tree-service/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "About", href: "/about/" },
  { label: "Quote", href: "/quote/" }
] as const;

export const serviceAreas = [
  "Medina",
  "Brunswick",
  "Wadsworth",
  "Seville",
  "Lodi",
  "Chippewa Lake",
  "Spencer",
  "Westfield Center",
  "Akron",
  "Bath",
  "Copley",
  "Hudson",
  "Stow",
  "Twinsburg",
  "Rittman",
  "Wooster"
] as const;

export type Service = {
  title: string;
  slug: string;
  eyebrow: string;
  image: string;
  image2?: string;
  image2Alt?: string;
  summary: string;
  details: string;
  keywords: string[];
};

// Order matches the homepage service grid (01..06).
export const services: Service[] = [
  {
    title: "24/7 Emergency Tree Removal",
    slug: "emergency-tree-removal",
    eyebrow: "Storm response",
    image: "/images/optimized/ghost-tree-service-emergency-tree-service-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-winter-storm-response-medina-oh.webp",
    image2Alt: "Storm-response truck pushing through a Northeast Ohio blizzard — 24/7 conditions",
    summary:
      "Fast response when wind, rain, or a split trunk puts a home, driveway, utility line, or business at risk.",
    details:
      "When a tree becomes an immediate hazard, the crew evaluates access, rigging angles, landing zones, and remaining canopy risk before removing the danger and clearing the site.",
    keywords: ["emergency tree removal Medina OH", "24/7 tree service Medina County", "storm damage tree removal"]
  },
  {
    title: "Tree Removal",
    slug: "tree-removal",
    eyebrow: "Controlled takedowns",
    image: "/images/optimized/ghost-tree-service-tree-removal-crane-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-lawn-stump-grinding-medina-oh.webp",
    image2Alt: "Stump grinding after a removal — the stump goes too, ground flush with the lawn",
    summary:
      "Dead, leaning, or too close to the house. We take it down clean and crane it out when the yard is tight.",
    details:
      "The removal plan accounts for crown weight, structure clearance, access lanes, rope paths, crane reach when needed, and full debris cleanup.",
    keywords: ["tree removal Medina OH", "tree removal Medina County", "tree cutting service Ohio"]
  },
  {
    title: "Tree Trimming & Pruning",
    slug: "tree-trimming-pruning",
    eyebrow: "Canopy geometry",
    image: "/images/optimized/ghost-tree-service-tree-pruning-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-boom-lift-chainsaw-trimming-medina-oh.webp",
    image2Alt: "Arborist trimming limbs from a boom lift with a chainsaw",
    summary:
      "Dead limbs over the driveway, branches on the roof, growth into the lines. Cut back for safety and shape.",
    details:
      "Pruning work removes damaged, dead, low, or overgrown branches while preserving a balanced structure where possible, with attention to clearance near roofs and power lines.",
    keywords: ["tree trimming Medina OH", "tree pruning Medina County", "tree branch removal Ohio"]
  },
  {
    title: "Storm Damage Cleanup",
    slug: "storm-damage-cleanup",
    eyebrow: "After the wind",
    image: "/images/optimized/ghost-tree-service-storm-cleanup-aerial-view-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-storm-split-willow-limbs-medina-oh.webp",
    image2Alt: "Storm-split willow with broken limbs exposed, waiting on cleanup",
    summary:
      "After the storm: downed trees, hung limbs, and debris cleared fast. Hauled, ground, and raked clean.",
    details:
      "After high wind or ice, the crew stabilizes hazards first, then removes downed and hanging material, grinds what remains, and clears the debris so the property is usable again.",
    keywords: ["storm damage cleanup Medina OH", "storm damage tree removal Medina County", "fallen tree removal Ohio"]
  },
  {
    title: "Lot Clearing",
    slug: "lot-clearing",
    eyebrow: "Ground prep",
    image: "/images/optimized/ghost-tree-service-lot-clearing-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-forestry-harvester-felling-medina-oh.webp",
    image2Alt: "Mechanized felling on a clearing job — pine coming down clean",
    summary:
      "Brush, scrub, and trees cleared for building, access, or resale. Ground prepped at any scale.",
    details:
      "Lot clearing starts with a practical site review so the right trees, brush, and obstacles are removed before construction or property work begins.",
    keywords: ["lot clearing Medina OH", "land clearing Medina County", "tree clearing service Ohio"]
  },
  {
    title: "Utility & Commercial Accounts",
    slug: "utility-commercial",
    eyebrow: "Crews & capacity",
    image: "/images/optimized/ghost-tree-service-crane-tree-removal-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-backhoe-loading-trees-truck-medina-oh.webp",
    image2Alt: "Crew and loader moving trees onto a flatbed — built for volume work",
    summary:
      "Insured, repeatable tree work for property managers, municipalities, builders, and utility-adjacent accounts.",
    details:
      "For commercial and municipal accounts the crew brings crane capacity, certificates of insurance, scheduling reliability, and references. Built for repeat work, not one-off calls.",
    keywords: ["commercial tree service Medina OH", "municipal tree removal Medina County", "utility tree clearing Ohio"]
  }
];

export const testimonials = [
  { quote: "Logan and his team did a great job.", name: "Josh H.", source: "Google review", rating: 5 },
  { quote: "He knows what he's doing.", name: "Brad Werley", source: "Google review", rating: 5 },
  { quote: "The trees look fantastic.", name: "Elizabeth", source: "Google review", rating: 5 }
] as const;

export const reviewSummary = {
  ratingValue: "5.0",
  reviewCount: "39",
  sourceLabel: "Google reviews",
  sourceUrl: site.reviewSource
} as const;

export const proofPoints = [
  "24/7 emergency response",
  "Low-impact, spotless cleanup",
  "Insured · references on request",
  "Residential · commercial · municipal"
] as const;

// Answer-engine fuel: concrete Q&A for FAQPage schema and on-page sections.
export const faqs = [
  {
    q: "Do you offer 24/7 emergency tree removal in Medina County?",
    a: "Yes. Ghost Tree Service answers around the clock for storm damage and hazard trees across Medina County and Northeast Ohio. Call (330) 907-6403."
  },
  {
    q: "What does tree removal cost?",
    a: "Cost depends on the tree's size, location, access, and whether a crane is needed. We give a clear price up front, on site or fast from photos you text us, with no surprises."
  },
  {
    q: "Are you insured?",
    a: "Yes. Ghost Tree Service is insured, and references are available on request, especially for commercial, municipal, and utility accounts."
  },
  {
    q: "What is low-impact tree service?",
    a: "It means protecting your property while we work and leaving the site clean. We haul, grind, and rake so the hazard is gone and the yard looks like we were never there."
  },
  {
    q: "How fast can you respond after a storm?",
    a: "Emergencies are triaged on the call. For active hazards we move as fast as conditions and crew availability allow; planned work is scheduled around the danger."
  }
] as const;
