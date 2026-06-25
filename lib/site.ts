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
  // Birdeye aggregator (kept for reference). Google is the canonical, user-facing
  // review source — see reviewSummary.sourceUrl, which points at the Google profile.
  reviewSource:
    "https://reviews.birdeye.com/ghost-tree-service-llc-170489385790097",
  address: {
    street: "6289 Buffham Rd",
    city: "Seville",
    region: "OH",
    postalCode: "44273",
    country: "US"
  },
  // Approximate (Seville, OH 44273). TODO: replace with exact lat/lng for the HQ address.
  geo: { latitude: 41.0148, longitude: -81.8665 },
  hours: "24/7 emergency response",
  familyOwned: true,
  familyLine: "Family owned & operated",
  tagline: "Low-impact tree service for Medina County and Northeast Ohio.",
  // The brand promise: heavy iron + clean disappearance (low-impact + spotless cleanup).
  description:
    "Ghost Tree Service is a family owned and operated company providing 24/7 emergency tree removal, tree removals, trimming and pruning, storm damage cleanup, lot clearing, and utility and commercial tree work across Medina County and Northeast Ohio. Heavy enough for the crane jobs, clean enough you would never know we were there."
} as const;

export const navItems = [
  { label: "Services", href: "/services/" },
  { label: "Medina County", href: "/medina-county-tree-service/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "About", href: "/about/" },
  { label: "Quote", href: "/quote/" }
] as const;

// Flat list consumed by the Footer slice, the home-page service-area band, and the
// Medina County chips. Kept as a representative subset of the full county coverage
// below — every town here also appears in serviceAreasByCounty.
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

// Full, owner-confirmed service-area coverage grouped by county. This is the
// authoritative town list; serviceAreas (above) is a flat subset for compact UI.
export const serviceAreasByCounty = {
  "Medina County": [
    "Brunswick",
    "Chippewa Lake",
    "Lodi",
    "Medina",
    "Seville",
    "Spencer",
    "Wadsworth",
    "Westfield Center"
  ],
  "Summit County": [
    "Akron",
    "Barberton",
    "Bath",
    "Boston Heights",
    "Clinton",
    "Copley",
    "Cuyahoga Falls",
    "Fairlawn",
    "Green",
    "Hudson",
    "Macedonia",
    "Munroe Falls",
    "Northfield",
    "Norton",
    "Peninsula",
    "Portage Lakes",
    "Richfield",
    "Silver Lake",
    "Stow",
    "Twinsburg",
    "Uniontown"
  ],
  "Portage County": ["Brimfield", "Kent"],
  "Wayne County": ["Rittman", "Wooster"]
} as const;

export const serviceAreaNote =
  "We also travel to adjacent counties (Cuyahoga, Lorain, Stark) for larger assignments. References available on request.";

export type ProcessStep = { step: string; detail: string };
export type ServiceFaq = { q: string; a: string };

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
  // How the job runs, start to finish (ordered).
  process: ProcessStep[];
  // What's covered in the work.
  included: string[];
  // Signs a homeowner should call for this specific service.
  whenToCall: string[];
  // Service-specific Q&A (distinct from the site-wide faqs).
  serviceFaqs: ServiceFaq[];
};

// Order matches the homepage service grid (01..06).
export const services: Service[] = [
  {
    title: "24/7 Emergency Tree Removal",
    slug: "emergency-tree-removal",
    eyebrow: "Storm response",
    image: "/images/optimized/ghost-tree-service-pine-franks-crane-storm-job-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-shreeve-pine-crane-storm-job-medina-oh.webp",
    image2Alt: "Crane lifting a storm-toppled pine off a property during an emergency call",
    summary:
      "Fast response when wind, rain, or a split trunk puts a home, driveway, utility line, or business at risk.",
    details:
      "A tree on the house or across the drive can't wait for a quote next week. We pick up, roll a truck, and work out the safe way down once we're on site. Then it's gone and the yard's clear, day or night.",
    keywords: ["emergency tree removal Medina OH", "24/7 tree service Medina County", "storm damage tree removal"],
    process: [
      { step: "Triage on the call", detail: "We size up the hazard by phone or text photo and tell you whether to evacuate the area while we roll." },
      { step: "Secure the scene", detail: "On arrival the crew isolates the danger zone, checks for charged lines, and stabilizes anything actively moving." },
      { step: "Rig and lower", detail: "We rope or crane the broken section out in controlled pieces instead of letting it drop on what's below." },
      { step: "Clear and make safe", detail: "Debris is hauled, the landing zone is raked, and we confirm nothing left standing is a second-strike risk." }
    ],
    included: [
      "Around-the-clock dispatch, including nights, weekends, and holidays",
      "Hazard assessment of remaining canopy and structural lean",
      "Controlled removal of the immediate danger by rope or crane",
      "Debris haul-off and a clear, usable landing zone",
      "Documentation and photos for insurance claims on request"
    ],
    whenToCall: [
      "A tree or large limb is on your house, garage, vehicle, or fence",
      "A trunk has split, cracked, or is leaning further than it was yesterday",
      "Branches are resting on or tangled in a power or service line",
      "A storm dropped a tree across your driveway or only access road",
      "Roots have heaved and the whole tree is starting to tip"
    ],
    serviceFaqs: [
      {
        q: "A tree is on a power line at my house — who do I call first?",
        a: "Call your utility (and 911 if a line is down and arcing) before anyone touches it. Once the line is confirmed de-energized or cleared, we handle removing the tree off the structure and the line corridor."
      },
      {
        q: "It's the middle of the night after a storm. Are you actually answering?",
        a: "Yes. Emergency calls are answered around the clock at (330) 907-6403. We triage on the phone and move on active hazards as fast as conditions and crew availability allow."
      },
      {
        q: "Will my homeowner's insurance cover emergency removal?",
        a: "Often, when the tree hit a covered structure. We document the scene with photos and an itemized scope so you have what the adjuster needs, but coverage is between you and your carrier."
      }
    ]
  },
  {
    title: "Tree Removal",
    slug: "tree-removal",
    eyebrow: "Controlled takedowns",
    image: "/images/optimized/ghost-tree-service-crane-assisted-spar-takedown-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-large-splitting-oak-crane-job-medina-oh.webp",
    image2Alt: "Crane lifting a sectioned trunk off a splitting oak during a controlled removal",
    summary:
      "Dead, leaning, or too close to the house. We take it down clean and crane it out when the yard is tight.",
    details:
      "Every removal is its own puzzle: how much the crown weighs, what it can hit coming down, where a truck or crane can reach. We rig it so the wood comes down in pieces instead of a crash, then haul off the wood and chips before we leave.",
    keywords: ["tree removal Medina OH", "tree removal Medina County", "tree cutting service Ohio"],
    process: [
      { step: "On-site estimate", detail: "We walk the tree, check access and what's underneath, and give you a firm written price — no guessing from the curb." },
      { step: "Plan the drop", detail: "We map fall direction, rope paths, and crane setup if the yard is tight, then protect beds, fences, and the lawn." },
      { step: "Sectional takedown", detail: "The tree comes down in measured pieces, lowered or craned out so nothing slams the ground or your turf." },
      { step: "Cut low and clear roots", detail: "We cut the trunk low to the ground and clear the surface so the spot is tidy and ready for whatever comes next." },
      { step: "Haul and rake clean", detail: "Wood, brush, and chips are removed and the work area is raked so it looks like the tree was never there." }
    ],
    included: [
      "Written on-site estimate before any work starts",
      "Full removal by rope or crane, sized to your access and clearances",
      "Property protection for beds, hardscape, and lawn during the drop",
      "Trunk cut low to grade with the surface cleared",
      "Complete wood and debris haul-off, site raked clean"
    ],
    whenToCall: [
      "The tree is dead, hollow, or has large dead sections in the crown",
      "It leans toward the house, garage, or a neighbor's roof",
      "Roots or trunk are heaving the sidewalk, driveway, or foundation",
      "It's the wrong tree in the wrong spot and crowding what you want to keep",
      "Fungus shelves, deep bark cracks, or a sudden lean appeared this season"
    ],
    serviceFaqs: [
      {
        q: "Do I need to be home when you take the tree down?",
        a: "Not usually. Once we've walked the job and you've approved the written price, most removals are done with you away. We text before and after, and there's nothing to clean up when you get back."
      },
      {
        q: "Do you grind stumps?",
        a: "We don't grind stumps in-house, but we work with a trusted local stump-grinding company and can connect you."
      },
      {
        q: "My tree is right next to the house — can you still get it out?",
        a: "Yes. Tight backyards and zero-clearance trees are exactly where we bring the crane and rigging, lowering the wood in pieces instead of felling it whole."
      }
    ]
  },
  {
    title: "Tree Trimming & Pruning",
    slug: "tree-trimming-pruning",
    eyebrow: "Canopy geometry",
    image: "/images/optimized/ghost-tree-service-tree-climber-summer-canopy-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-climber-chainsaw-pine-canopy-medina-oh.webp",
    image2Alt: "Climber running a chainsaw high in a pine canopy",
    summary:
      "Dead limbs over the driveway, branches on the roof, growth into the lines. Cut back for safety and shape.",
    details:
      "Good pruning takes off the dead, the broken, and the limbs crowding your roof or the lines, and leaves the tree looking like a tree, not a hat rack. When a big tree has a weak fork or a heavy limb you'd rather not lose, we can cable and brace it instead of taking the whole thing down.",
    keywords: ["tree trimming Medina OH", "tree pruning Medina County", "tree cabling and bracing Ohio"],
    process: [
      { step: "Read the canopy", detail: "We look at structure, deadwood, and clearance problems, then agree on how much to take and where to stop." },
      { step: "Set up off the structure", detail: "Boom lift or climbing line, with rope rigging so cut limbs are lowered clear of the roof, lines, and beds." },
      { step: "Make proper cuts", detail: "Cuts are made at the branch collar to seal cleanly, removing dead, crossing, and overgrown limbs without topping." },
      { step: "Balance and clean", detail: "We step back to keep the tree balanced, then chip the brush and rake so the lawn is clear when we leave." }
    ],
    included: [
      "Deadwood, broken, and crossing-limb removal",
      "Roof, siding, and driveway clearance pruning",
      "Clearance cuts back from service drops and structures",
      "Cable and brace installation to support weak unions and heavy limbs",
      "Proper branch-collar cuts that protect the tree's health",
      "Brush chipping and a raked-clean work area"
    ],
    whenToCall: [
      "Dead or broken limbs are hanging over the driveway, deck, or walkway",
      "Branches are scraping the roof, gutters, or siding in the wind",
      "The canopy is so dense that light and air no longer reach the yard",
      "Limbs are growing into or near the service line to your house",
      "The tree looks lopsided or heavy on one side and you're worried it'll fail"
    ],
    serviceFaqs: [
      {
        q: "Will pruning hurt the tree?",
        a: "Done right, no. We cut at the branch collar so the wound seals naturally and we never top a tree, which is what actually causes long-term damage and weak regrowth."
      },
      {
        q: "When is the best time of year to trim?",
        a: "Most species do best with dormant-season pruning in late fall through winter, but dead, broken, or hazard limbs should come off any time of year. We'll tell you if waiting is the smarter call."
      },
      {
        q: "Can you just clear the branches off my roof and lines?",
        a: "Yes. Clearance pruning for roofs, gutters, and the service drop to your house is one of our most common calls, and we keep enough structure that the tree still looks intentional."
      },
      {
        q: "Do you top trees?",
        a: "No. Topping (cutting limbs back to stubs) causes decay, weak hazardous regrowth, and stress — we do proper crown reduction and thinning instead."
      },
      {
        q: "My tree has a weak split or a heavy limb — can it be saved instead of removed?",
        a: "Often, yes. We install cables and braces to support weak unions, heavy or overextended limbs, and heritage trees, which can keep a structurally questionable tree standing safely instead of taking it down."
      }
    ]
  },
  {
    title: "Storm Damage Cleanup",
    slug: "storm-damage-cleanup",
    eyebrow: "After the wind",
    image: "/images/optimized/ghost-tree-service-storm-fallen-tree-cleanup-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-akron-storm-on-garage-medina-oh.webp",
    image2Alt: "Storm-felled tree dropped across a garage roof after high wind",
    summary:
      "After the storm: downed trees, hung limbs, and debris cleared fast. Hauled, chipped, and raked clean.",
    details:
      "After a storm we handle the dangerous stuff first: the limbs hung up overhead, the leaners resting on a roof or fence. Then we clear the downed wood, cut up what's left, and rake the yard back so you can use it again.",
    keywords: ["storm damage cleanup Medina OH", "storm damage tree removal Medina County", "fallen tree removal Ohio"],
    process: [
      { step: "Stabilize hazards first", detail: "Hung limbs, leaners, and anything under tension get dealt with before general cleanup so no one gets hurt." },
      { step: "Clear what's down", detail: "Fallen trunks and limbs are cut, dragged, and removed, starting with whatever is blocking access or sitting on structures." },
      { step: "Cut and chip", detail: "Snapped sections and broken limbs are cut down to size and the brush is chipped on site." },
      { step: "Rake and restore", detail: "We rake the debris field, pick up the small stuff, and leave the property usable again." }
    ],
    included: [
      "Priority handling of hung-up limbs and trees under tension",
      "Removal of downed trunks, branches, and storm debris",
      "Cutting down of snapped trunk sections and broken limbs",
      "Brush chipping and full debris haul-off",
      "Insurance-ready photos and scope documentation on request"
    ],
    whenToCall: [
      "Wind or ice brought a tree down across your yard, drive, or fence",
      "Limbs are hung up in the canopy and could drop without warning",
      "A leaning tree is now resting on another tree or a structure",
      "Your property is a debris field after a storm and you can't use the yard",
      "You need the mess documented and cleared for an insurance claim"
    ],
    serviceFaqs: [
      {
        q: "A limb is hung up high in the tree but hasn't fallen — is that urgent?",
        a: "Treat it as urgent. A widow-maker under tension can release on its own with no warning. Keep people and cars out from under it and call us to bring it down in a controlled way."
      },
      {
        q: "Do you work with my insurance after a storm?",
        a: "We document the damage with photos and an itemized scope so you have what your adjuster needs. The claim itself is between you and your carrier, but our paperwork makes it easier."
      },
      {
        q: "Storms hit the whole area — how soon can you get to me?",
        a: "After a regional storm we triage by severity, prioritizing trees on homes and blocked-in driveways. We give you a realistic window on the call rather than an empty promise."
      }
    ]
  },
  {
    title: "Lot Clearing",
    slug: "lot-clearing",
    eyebrow: "Ground prep",
    image: "/images/optimized/ghost-tree-service-mini-skid-steer-brush-cleanup-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-winter-tree-takedown-medina-oh.webp",
    image2Alt: "Bare-tree takedown clearing an open lot in winter",
    summary:
      "Brush, scrub, and trees cleared for building, access, or resale — including rotary brush hogging of overgrown fields. Ground prepped at any scale.",
    details:
      "We walk the lot with you and mark what stays and what goes before anything comes down, so a builder or excavator can get right to work. Overgrown fields, fence rows, and thickets of saplings get knocked back to usable ground with a rotary brush hog.",
    keywords: ["lot clearing Medina OH", "land clearing Medina County", "brush hogging Ohio"],
    process: [
      { step: "Walk the site", detail: "We mark what stays, what goes, and where equipment can reach, accounting for slope, wet ground, and property lines." },
      { step: "Drop and pile", detail: "Trees and brush come down and get staged in work zones, keeping the cleared edge clean against what you're keeping." },
      { step: "Brush hog the overgrowth", detail: "Overgrown brush, fields, and light saplings get cut down with a rotary brush hog so the ground underneath is usable again." },
      { step: "Process the material", detail: "We chip brush and buck logs based on whether you want it hauled, mulched, or left for firewood." },
      { step: "Grade-ready cleanup", detail: "The lot is cleared and raked back so it's ready for a builder, excavator, or your own next step." }
    ],
    included: [
      "Site walk to scope access, terrain, and what to preserve",
      "Selective or full clearing of trees, brush, and scrub",
      "Rotary brush hogging of overgrown brush, fields, and light saplings",
      "Material processed your way — hauled, mulched, or stacked",
      "Cleared area raked back and left ready for grading"
    ],
    whenToCall: [
      "You're prepping a lot to build a home, garage, pole barn, or addition",
      "An overgrown back acre or fence line needs to be opened up",
      "You need a driveway, trail, or equipment path cut through the trees",
      "You're getting a property ready to list or sell",
      "Brush and scrub have taken over usable yard or pasture"
    ],
    serviceFaqs: [
      {
        q: "Can you clear just part of a lot and leave the mature trees?",
        a: "Yes. Selective clearing is common — we mark the keepers with you, protect them during the work, and only take out the brush and trees you've flagged to go."
      },
      {
        q: "What happens to all the wood and brush?",
        a: "Your choice. We can haul everything off, chip it into mulch and leave it on site, or buck the logs and stack them if you want the firewood. We scope that before we start."
      },
      {
        q: "Do I need a permit to clear my lot?",
        a: "It depends on your township or city and whether wetlands or setbacks are involved. We'll flag anything that looks like it needs a permit, but confirming with your local zoning office is the safe move."
      }
    ]
  },
  {
    title: "Utility & Commercial Accounts",
    slug: "utility-commercial",
    eyebrow: "Crews & capacity",
    image: "/images/optimized/ghost-tree-service-cool-crane-shot-medina-oh.webp",
    image2: "/images/optimized/ghost-tree-service-maxed-out-medina-oh.webp",
    image2Alt: "Crane truck loaded to capacity on a large commercial removal",
    summary:
      "Insured, repeatable tree work for property managers, municipalities, builders, and utility-adjacent accounts.",
    details:
      "Property managers, municipalities, and builders need a crew that shows up when it's scheduled and carries the insurance to be on site. We bring that, plus the crane capacity for the big jobs and references from accounts we already run.",
    keywords: ["commercial tree service Medina OH", "municipal tree removal Medina County", "utility tree clearing Ohio"],
    process: [
      { step: "Scope and certify", detail: "We survey the site or portfolio, define scope, and get your required certificates of insurance on file up front." },
      { step: "Schedule around operations", detail: "Work is staged so it doesn't disrupt tenants, traffic, or business hours, with notice to whoever needs it." },
      { step: "Execute with the right iron", detail: "Crane, loader, and crew are matched to the volume so large or repeat jobs move on schedule, not in fits and starts." },
      { step: "Document and invoice clean", detail: "You get completion records, photos, and itemized invoicing built for property management and municipal accounting." }
    ],
    included: [
      "Certificates of insurance and references furnished up front",
      "Crane and loader capacity for high-volume removals",
      "Scheduling built around tenants, traffic, and business hours",
      "Repeatable service agreements for portfolios and right-of-way work",
      "Completion documentation and itemized invoicing"
    ],
    whenToCall: [
      "You manage apartments, HOAs, or commercial property and need a reliable tree vendor",
      "A municipality or township needs right-of-way or park tree work",
      "A builder or GC needs trees cleared on a job site to stay on schedule",
      "Trees are encroaching on a parking lot, signage, or building access",
      "You need a vendor who can produce a COI before stepping on site"
    ],
    serviceFaqs: [
      {
        q: "Can you provide a certificate of insurance before we hire you?",
        a: "Yes. For commercial, municipal, and utility-adjacent accounts we furnish certificates of insurance and references up front, before any crew is on your property."
      },
      {
        q: "Do you handle recurring or contract tree work, not just one-offs?",
        a: "That's the core of this service. We set up repeatable agreements for property managers, HOAs, and municipalities so the same crew handles your sites on a known schedule."
      },
      {
        q: "Can you work around our tenants and business hours?",
        a: "Yes. We schedule and stage the work to minimize disruption to tenants, traffic, and operations, and coordinate notice with whoever on your side needs it."
      }
    ]
  }
];

// Per-town data for the /tree-service/[slug]/ local landing pages (P3).
// Every field is written distinctly per town — no templating — so these read as
// genuine local pages, not doorway pages. Facts are geography/operations based.
export type ServiceAreaTown = {
  slug: string;
  name: string;
  intro: string;
  neighborhoods: string[];
  localProof: string;
  townFaqs: ServiceFaq[];
  nearbyTowns: string[];
  primaryServices: string[];
};

export const serviceAreaTowns: ServiceAreaTown[] = [
  {
    slug: "medina-oh",
    name: "Medina",
    intro:
      "Medina is the Medina County seat, built around one of Ohio's best-preserved Victorian town squares and the gas-lamp historic district that surrounds it. The mature street trees that give Uptown its character — and the big silver maples and oaks behind the older homes off Public Square — are exactly the kind of work we're set up for. We run crane and rigging jobs here without tearing up the period landscaping.",
    neighborhoods: ["Uptown / Historic Square", "Weymouth", "Reagan Park", "Northgate", "Roscoe Ewing Park area"],
    localProof:
      "Medina is a short, direct run up Route 3 from our Seville shop, so crews reach the city and its outlying subdivisions quickly. We know the older neighborhoods where access is tight and the canopy is old enough that limbs come down without warning.",
    townFaqs: [
      {
        q: "Do you work in Medina's historic district around the square?",
        a: "Yes. The older homes near Public Square and the gas-lamp district have large, mature trees and tight access. We rig and crane in those yards specifically so we can take trees down without damaging period landscaping or the home."
      },
      {
        q: "A lot of Medina's ash trees are dead — can you remove them?",
        a: "We remove a lot of emerald ash borer kills around Medina. Dead ash get brittle fast and fail without warning, so they're a removal we prioritize rather than prune."
      },
      {
        q: "Do you need a permit to remove a tree in Medina?",
        a: "On private property usually not, but trees in the city right-of-way or tree lawn can fall under city rules. We'll flag it if your tree looks like it's in that zone so you can check with the city first."
      }
    ],
    nearbyTowns: ["brunswick-oh", "seville-oh", "wadsworth-oh", "lodi-oh"],
    primaryServices: ["emergency-tree-removal", "tree-removal", "tree-trimming-pruning", "storm-damage-cleanup"]
  },
  {
    slug: "brunswick-oh",
    name: "Brunswick",
    intro:
      "Brunswick is the largest city in Medina County, a dense grid of postwar and newer subdivisions along Route 303 and Pearl Road in the county's northeast corner. The lots here tend to be tighter and closer together, which means a leaning or storm-damaged tree usually threatens a neighbor's roof as much as your own. That's exactly the kind of zero-clearance removal our crane setup is built for.",
    neighborhoods: ["Substation Road corridor", "Brunswick Hills", "Sleepy Hollow", "Town Center", "Hadcock Road area"],
    localProof:
      "Brunswick sits at the north end of the county, and we cover it daily from the Seville shop. We know the subdivision layouts where backyard trees can only come out over the house or the fence, not through the side yard.",
    townFaqs: [
      {
        q: "My Brunswick lot is small and the tree is right against the fence — can you still remove it?",
        a: "Yes, and it's common here. Brunswick's tighter subdivision lots are why we run a crane and rigging — we lower the tree out in pieces over the house or fence instead of needing room to fell it."
      },
      {
        q: "Do you serve Brunswick Hills as well as the city?",
        a: "Yes, we cover both the City of Brunswick and Brunswick Hills Township, along with the surrounding subdivisions off Substation and Center Roads."
      },
      {
        q: "Storms knocked trees down across my street — who handles the road?",
        a: "Trees on the public road are the city or county's responsibility, but anything on your property, driveway, or between the curb and your house we clear directly. We'll tell you which is which when we arrive."
      }
    ],
    nearbyTowns: ["medina-oh", "seville-oh"],
    primaryServices: ["emergency-tree-removal", "tree-removal", "storm-damage-cleanup", "tree-trimming-pruning"]
  },
  {
    slug: "wadsworth-oh",
    name: "Wadsworth",
    intro:
      "Wadsworth straddles the Medina–Summit county line in the southeast, a former coal and match-manufacturing town that's grown into a busy bedroom community off I-76 and Route 57. The established neighborhoods around the historic downtown carry a lot of big, aging maples and oaks, while the newer developments toward Western Reserve Road bring younger trees that need shaping. We handle both ends of that.",
    neighborhoods: ["Downtown / Main Street", "Durling Drive area", "Blue Heron", "Western Reserve Road corridor", "Silver Creek Metro Park edge"],
    localProof:
      "Wadsworth is a quick run south and east from Seville, and we work both the Medina-County and Summit-County sides of the city line. We know the older in-town blocks where the canopy is tall and the lots back up tight to one another.",
    townFaqs: [
      {
        q: "Wadsworth sits on the county line — do you still cover my side?",
        a: "Yes. We work both the Medina County and Summit County portions of Wadsworth. The county line runs through town but it doesn't change anything about how we service it."
      },
      {
        q: "I have big old maples downtown dropping limbs — prune or remove?",
        a: "Depends on the tree. Many of Wadsworth's mature downtown maples can be cleaned up and reduced with proper pruning; others with major deadwood or trunk decay are safer to remove. We'll give you a straight read on site."
      },
      {
        q: "Do you do storm cleanup near Silver Creek?",
        a: "Yes. The neighborhoods backing up to Silver Creek Metro Park and the wooded edges around Wadsworth see a lot of wind-thrown limbs, and storm cleanup there is routine work for us."
      }
    ],
    nearbyTowns: ["seville-oh", "medina-oh", "copley-oh", "akron-oh"],
    primaryServices: ["tree-removal", "tree-trimming-pruning", "storm-damage-cleanup", "emergency-tree-removal"]
  },
  {
    slug: "seville-oh",
    name: "Seville",
    intro:
      "Seville is home base — our shop sits at 6289 Buffham Rd, just outside the village in the rural southwest corner of Medina County. This is where the trucks, the crane, and the crew stage every morning, so Seville and the surrounding townships get the fastest response we offer. From the village streets to the farm properties along Greenwich and Friendsville Roads, this is our backyard.",
    neighborhoods: ["Seville Village center", "Guilford Township", "Westfield Center", "Buffham Road corridor", "River Styx area"],
    localProof:
      "Our shop is in Seville, so response here is measured in minutes, not a drive across the county. Crews stage out of the Buffham Road yard, which means emergency calls in and around the village get answered before almost anywhere else we serve.",
    townFaqs: [
      {
        q: "You're based in Seville — does that mean faster service?",
        a: "Yes. Our shop and equipment are right here on Buffham Road, so Seville and the surrounding townships get the quickest response we offer, especially for storm and emergency calls."
      },
      {
        q: "Do you handle farm and rural property tree work around Seville?",
        a: "Constantly. A lot of the work around Seville and Guilford Township is fence-line clearing, windbreak cleanup, and big yard trees on rural lots — exactly what our equipment is sized for."
      },
      {
        q: "Can you clear trees for a building project on my Seville-area lot?",
        a: "Yes. Lot and land clearing for new builds, pole barns, and driveways is common on the larger parcels out here. We'll walk the site and scope what comes out before we start."
      }
    ],
    nearbyTowns: ["medina-oh", "wadsworth-oh", "lodi-oh", "brunswick-oh"],
    primaryServices: ["emergency-tree-removal", "tree-removal", "lot-clearing", "storm-damage-cleanup"]
  },
  {
    slug: "lodi-oh",
    name: "Lodi",
    intro:
      "Lodi anchors the southwest corner of Medina County where I-76 meets I-71, a small village best known for its tidy public square and the outlet shopping at the interchange. Beyond the village it's open, rural country — farm lots, tree lines, and big yard trees on acreage. The work here leans toward removals and clearing on larger parcels rather than tight subdivision jobs.",
    neighborhoods: ["Lodi Village square", "Harrisville Township", "Lafayette Township", "Ohio Route 83 corridor", "Chippewa Lake (nearby)"],
    localProof:
      "Lodi is just up the road from our Seville shop, one of the closest towns we serve. That proximity matters most for the rural emergency calls out here, where a downed tree can block the only drive in.",
    townFaqs: [
      {
        q: "I'm on acreage outside Lodi with a tree line to clear — can you handle it?",
        a: "Yes. A lot of Lodi-area work is clearing tree lines, fence rows, and large yard trees on rural parcels. We bring the equipment to do it at that scale and haul or mulch the material however you want."
      },
      {
        q: "How fast can you reach a rural property near Lodi after a storm?",
        a: "Lodi is one of the closest towns to our Seville shop, so it's a short run. For a tree blocking your only driveway we move as fast as conditions and crew availability allow."
      },
      {
        q: "Do you cover the townships around Lodi, not just the village?",
        a: "Yes — Harrisville, Lafayette, and the surrounding rural townships are all within our normal service area, along with the Chippewa Lake area nearby."
      }
    ],
    nearbyTowns: ["seville-oh", "medina-oh", "wadsworth-oh"],
    primaryServices: ["tree-removal", "lot-clearing", "emergency-tree-removal", "storm-damage-cleanup"]
  },
  {
    slug: "akron-oh",
    name: "Akron",
    intro:
      "Akron is the largest city in our service area and the seat of Summit County, a former rubber-industry hub with dense, tree-lined older neighborhoods and steep, wooded ravines along the Cuyahoga and Little Cuyahoga valleys. The mature canopy over established districts like Highland Square and the hillside lots in Merriman Valley make for demanding removals where access and rigging matter more than raw horsepower.",
    neighborhoods: ["Highland Square", "West Akron", "Merriman Valley", "Wallhaven", "Firestone Park"],
    localProof:
      "We run into Akron from Seville regularly and know the city's older neighborhoods, where tall trees, narrow tree lawns, and hillside lots demand careful rigging. The valley properties in particular need a crew that's comfortable working on a slope.",
    townFaqs: [
      {
        q: "My Akron lot is on a hillside in Merriman Valley — can you work it?",
        a: "Yes. The wooded, sloped lots in Merriman Valley and along the Cuyahoga are some of the more technical work we do. We rig accordingly rather than relying on machine access that a slope won't allow."
      },
      {
        q: "Do you remove the big old trees in Highland Square and West Akron?",
        a: "Regularly. Those established neighborhoods have tall, mature canopy over tight lots and narrow tree lawns, so we lower the wood with rope and crane instead of felling it whole."
      },
      {
        q: "Akron is in Summit County — is that still your service area?",
        a: "Yes. Akron and the surrounding Summit County communities are a core part of our Northeast Ohio service area, alongside Medina County."
      }
    ],
    nearbyTowns: ["bath-oh", "copley-oh", "wadsworth-oh"],
    primaryServices: ["tree-removal", "emergency-tree-removal", "tree-trimming-pruning", "storm-damage-cleanup"]
  },
  {
    slug: "bath-oh",
    name: "Bath",
    intro:
      "Bath Township sits in northwest Summit County between Akron and the Cuyahoga Valley National Park, known for its large wooded estate lots and the rolling, heavily treed terrain around Ira and Ghent. Properties here are big and the trees are mature, so the work tends toward high-value removals and canopy management where protecting the rest of the landscape is as important as taking the hazard down.",
    neighborhoods: ["Ghent", "Ira", "Yellow Creek", "Hametown Road area", "Cuyahoga Valley edge"],
    localProof:
      "Bath's large, wooded lots are exactly the kind of property our crane and rigging are built for, and we reach the township from Seville by way of Route 18. We're set up to take down big estate trees without chewing up the surrounding landscape.",
    townFaqs: [
      {
        q: "I have a large wooded estate lot in Bath — can you handle big removals?",
        a: "Yes. Bath's estate properties around Ghent and Ira have some of the largest trees we work on. The crane and rigging let us bring big timber down in controlled pieces without damaging the rest of the grounds."
      },
      {
        q: "My property backs up to the Cuyahoga Valley — any special considerations?",
        a: "Lots bordering the national park and Yellow Creek are heavily wooded and prone to wind-thrown limbs. We focus on the hazard trees threatening your structures while leaving the healthy woodland intact."
      },
      {
        q: "Do you serve Ghent and Ira specifically?",
        a: "Yes. Ghent, Ira, and the surrounding Bath Township areas are all within our regular Summit County service area."
      }
    ],
    nearbyTowns: ["akron-oh", "copley-oh"],
    primaryServices: ["tree-removal", "tree-trimming-pruning", "emergency-tree-removal", "lot-clearing"]
  },
  {
    slug: "copley-oh",
    name: "Copley",
    intro:
      "Copley is a Summit County township and growing suburban community just west of Akron, a mix of established neighborhoods around Copley Circle and newer subdivisions spreading toward Montrose and Route 21. The trees here range from mature shade trees in the older sections to younger plantings in the newer developments, so the work splits between removals and the structural pruning that keeps a young canopy healthy.",
    neighborhoods: ["Copley Circle", "Montrose (edge)", "Heritage Woods", "Ridgewood Road corridor", "Copley Township center"],
    localProof:
      "Copley sits just west of Akron, an easy reach from our Seville shop, and we cover its established neighborhoods and newer subdivisions alike. We know the mix here — old shade trees that need removing and young trees that just need shaping.",
    townFaqs: [
      {
        q: "My Copley subdivision trees are still young — do they need pruning?",
        a: "Often yes. Structural pruning on young trees in Copley's newer developments sets them up to grow strong and avoids bigger problems later. We make proper branch-collar cuts, never topping."
      },
      {
        q: "Do you cover both old Copley and the Montrose side?",
        a: "Yes. We work the established neighborhoods around Copley Circle as well as the newer growth toward Montrose and Ridgewood Road."
      },
      {
        q: "Is Copley within your service area from Seville?",
        a: "Yes. Copley is part of our regular Summit County coverage, just west of Akron and an easy run from our Seville shop."
      }
    ],
    nearbyTowns: ["akron-oh", "bath-oh", "wadsworth-oh"],
    primaryServices: ["tree-trimming-pruning", "tree-removal", "storm-damage-cleanup", "emergency-tree-removal"]
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
  // Google is the canonical review source. Point users at the Google profile,
  // not the Birdeye aggregator (site.reviewSource).
  sourceUrl: site.googleMaps
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
    a: "Cost depends on the tree's size, location, access, and whether a crane is needed. You get the full price on site, before any work begins."
  },
  {
    q: "Are you insured?",
    a: "Yes. Ghost Tree Service is insured, and references are available on request, especially for commercial, municipal, and utility accounts."
  },
  {
    q: "What is low-impact tree service?",
    a: "It means protecting your property while we work and leaving the site clean. We haul, chip, and rake so the hazard is gone and the yard looks like we were never there."
  },
  {
    q: "How fast can you respond after a storm?",
    a: "Emergencies are triaged on the call. For active hazards we move as fast as conditions and crew availability allow; planned work is scheduled around the danger."
  }
] as const;
