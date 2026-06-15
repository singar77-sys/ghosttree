# Ghost Tree Service SEO Audit and 2026 Gameplan

Prepared May 15, 2026 for https://www.ghosttreeservice.com/

## 1. Medina County Tree Service Research

Medina County is a strong local-service market for tree work. The U.S. Census estimates 185,025 residents in 2025, 77,727 housing units, an 80.3% owner-occupied housing rate, and a 2020-2024 median owner-occupied home value of $287,000. Those signals support a homeowner-led market where urgent removal, preventive trimming, storm cleanup, and property-value protection matter.

The City of Medina also maintains a large public tree ecosystem and publishes guidance around pruning, removals, stump grinding, and storm-damage handling. That does not replace private tree-service demand, but it proves that trees, right-of-way issues, utilities, and storm response are active local concerns.

Primary search-intent buckets:

- Emergency: "emergency tree removal Medina OH", "24/7 tree service Medina County", "storm damage tree removal".
- Core services: "tree removal Medina OH", "tree trimming Medina OH", "tree pruning Medina County", "lot clearing Medina OH".
- Local pages: Medina, Brunswick, Wadsworth, Seville, Lodi, Chippewa Lake, Spencer, Westfield Center.
- Trust searches: "insured tree service", "tree removal cost", "dangerous tree over house", "tree service reviews".
- Visual proof: before/after crane jobs, storm damage, tight-access removals, cleanup results.

Ghost's strongest differentiator is not just "tree removal". It is low-impact tree service: responsive, professional work that leaves the property looking like the crew was never there.

## 2. Current Site SEO Audit

Current strengths:

- Clear 24/7 emergency CTA and phone number.
- Real job photography, including crane work and storm damage.
- Authentic "low impact" story and customer testimonials.
- Strong third-party review signal: 5.0 rating across 39 Google reviews, visible through Birdeye's Google review mirror.
- Sitemap exists and public pages are indexable.
- Service area copy includes Medina County, Summit County, Wayne County, Portage County, and adjacent counties.

Critical issues:

- The homepage title is only "Ghost Tree Service", and meta descriptions are empty across audited pages.
- The services page title is "Services 4 - Ghost Tree Service", which is a CMS artifact, not a search-focused title.
- The site has one broad services page instead of individual pages for emergency tree removal, tree removal, pruning, and lot clearing.
- There is no dedicated Medina County landing page despite Medina being the strongest local SEO target.
- Image alt text and filenames are mostly generic, like "24.jpg" or unstructured gallery filenames.
- Phone CTAs in the Squarespace markup include malformed links like `href=" (330) 907-6403"` instead of `tel:+13309076403`.
- No visible LocalBusiness, Service, FAQ, ImageObject, or review schema was found in the audited HTML.
- The quote page is extremely thin in the text-only crawl.
- Current `robots.txt` blocks major AI/LLM crawlers such as GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, and others. That conflicts with a 2026 LLM visibility strategy.
- No `llms.txt` exists.
- Sitemap includes `/home` while the canonical homepage is `/`, creating avoidable duplication.

Priority fixes:

- Rewrite every title and meta description around Medina County service intent.
- Add crawlable service pages and a Medina County service-area page.
- Add JSON-LD schema for LocalBusiness and service offerings.
- Replace malformed phone links with `tel:` links.
- Rename and compress images with service/location filenames.
- Add `llms.txt` and update `robots.txt` based on the desired AI-crawler policy.
- Add FAQ content for emergency scenarios, cost factors, insurance questions, cleanup, and quote timing.

## 3. Top 5 Competitor SEO Audit

### Dave's Tree Removal

Strengths: Strongest SEO footprint found. Dave's uses Medina-focused headings, service pages, reviews, awards, FAQs, internal links, service-area lists, and multiple CTAs. Their site explicitly targets tree removal, trimming, stump grinding, land clearing, and 24/7 emergency service.

Weaknesses to exploit: The page is crowded, repetitive, and keyword-heavy. The copy sometimes feels stitched together for search engines rather than cleanly written for homeowners. Ghost can win with a sharper brand, cleaner UX, better page speed, better structure, and authentic low-impact cleanup proof.

### Anytime Tree Service

Strengths: Strong local award positioning, Medina County address, "Best of the Best" claims, discounts, and fresh news posts in 2026.

Weaknesses to exploit: Thin service content, dated visual system, limited page architecture, weak emergency-service depth, and little modern semantic structure. Ghost can build deeper service pages and own urgent-intent queries.

### Sun and Seed Tree

Strengths: Over 40 years in business, family-owned positioning, fully insured language, 24-hour emergency tree service, firewood niche, photos, and BBB trust signal.

Weaknesses to exploit: Older site structure, mixed focus between firewood and tree service, limited local landing-page strategy, and dated design. Ghost can look more current, more focused, and more emergency-ready.

### Expert Tree Solutions

Strengths: Modern site, broad service pages, Google-review positioning, equipment/fleet proof, and strong area coverage including Medina and Medina County.

Weaknesses to exploit: Broad Northeast Ohio footprint can dilute Medina-specific relevance. Ghost should go hyperlocal with Medina County town pages, storm-response content, and proof tied to local job photos.

### Countryside Tree Service

Strengths: Dedicated county pages, clear Medina County page, "servicing Medina County since 2005", land clearing, stump grinding, and tree trimming navigation.

Weaknesses to exploit: Medina page is thin, design is generic, proof is limited, and the business is based outside Medina County. Ghost can beat it with richer photos, stronger service copy, faster UX, and Medina-first messaging.

## 4. SEO Gameplan for 2026

Technical foundation:

- Launch static HTML pages with Astro for fast, crawlable output.
- Use one canonical URL per page and generate a clean sitemap.
- Add optimized WebP images under descriptive filenames.
- Add LocalBusiness schema globally and service/FAQ schema on service pages.
- Add `llms.txt` with canonical business facts, services, areas, and priority pages.
- Decide AI crawler policy. If LLM discovery is desired, do not block GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, or Perplexity-style crawlers by default.

Site architecture:

- `/` - main Medina County tree service homepage.
- `/services/` - service index.
- `/services/emergency-tree-removal/` - urgent storm and hazard intent.
- `/services/tree-removal/` - core revenue page.
- `/services/tree-pruning/` - trimming/pruning intent.
- `/services/lot-clearing/` - construction and acreage intent.
- `/medina-county-tree-service/` - local hub for Medina, Brunswick, Wadsworth, Seville, Lodi, Chippewa Lake, Spencer, and Westfield Center.
- `/gallery/` - proof library with optimized images and alt text.
- `/about/` - story, low-impact promise, service-area depth.
- `/quote/` - conversion page.

Content opportunities:

- "What to do when a tree falls on your house in Medina County".
- "Tree removal cost factors in Medina, Ohio".
- "Emergency tree removal vs standard removal".
- "How low-impact tree service protects your yard".
- "When to prune large trees near power lines".
- "Lot clearing checklist before building in Medina County".
- Town pages for Brunswick, Wadsworth, Medina, Seville, Lodi, and Chippewa Lake after the core pages are live.

Conversion plan:

- Keep the phone number sticky and visible.
- Separate emergency CTAs from non-urgent quote CTAs.
- Add proof blocks: real photos, cleanup promise, testimonials, references available.
- Add a short "what happens after you call" sequence.
- Add photo upload capability to the quote form in production.

LLM and answer-engine plan:

- Publish `llms.txt`.
- Keep NAP, services, and service areas consistent across page copy, schema, GBP, and citations.
- Add concise Q&A sections written in answerable language.
- Avoid vague claims. Prefer specific statements: 24/7 emergency removal, low-impact cleanup, Medina County service area, references available.
- Add original job narratives to images where possible, especially before/after sets.

Sources:

- Ghost Tree Service homepage: https://www.ghosttreeservice.com/
- Ghost Tree Service story page: https://www.ghosttreeservice.com/our-story
- Ghost Tree Service services page: https://www.ghosttreeservice.com/services
- Ghost Tree Service sitemap: https://www.ghosttreeservice.com/sitemap.xml
- Ghost Tree Service robots.txt: https://www.ghosttreeservice.com/robots.txt
- U.S. Census QuickFacts, Medina County Ohio: https://www.census.gov/quickfacts/fact/table/medinacountyohio/SBO001222
- City of Medina Forestry Services: https://medinaoh.org/city-hall/forestry/forestry-services/
- Dave's Tree Removal: https://www.davestreeremovalinc.com/
- Anytime Tree Service: https://www.anytimetree.com/
- Sun and Seed Tree: https://sunandseedtree.com/
- Expert Tree Solutions: https://experttreesolutionsohio.com/
- Countryside Tree Service Medina County page: https://countrysidetreeservicellc.com/tree-service-medina-co
- Ghost Tree Service Google review mirror: https://reviews.birdeye.com/ghost-tree-service-llc-170489385790097
