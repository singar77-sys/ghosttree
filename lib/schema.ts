// JSON-LD builders: structured data for search engines and AI answer engines.
// Render with <script type="application/ld+json"> (see components/JsonLd.tsx).

import { site, services, reviewSummary, faqs, type Service, type ServiceAreaTown } from "@/lib/site";

const BUSINESS_ID = `${site.url}/#business`;

const areaServed = [
  "Medina County, OH",
  "Summit County, OH",
  "Portage County, OH",
  "Wayne County, OH",
  "Northeast Ohio"
];

const abs = (path: string) => (path.startsWith("http") ? path : `${site.url}${path}`);

export function localBusinessSchema(
  image = "/images/optimized/ghost-tree-service-crane-tree-removal-over-house-medina-oh.webp"
) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: abs("/icon.png"),
    image: abs(image),
    telephone: "+13309076403",
    email: site.email,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+13309076403",
      contactType: "customer service",
      areaServed: "US-OH",
      availableLanguage: "en"
    },
    priceRange: "$$",
    areaServed,
    knowsAbout: [
      "Tree removal",
      "Emergency tree removal",
      "Tree trimming and pruning",
      "Storm damage cleanup",
      "Lot clearing",
      "Tree cabling and bracing",
      "Crane tree removal"
    ],
    sameAs: [site.facebook, site.googleMaps],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.ratingValue,
      reviewCount: reviewSummary.reviewCount,
      bestRating: "5",
      worstRating: "1"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tree Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.summary }
      }))
    }
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    provider: { "@id": BUSINESS_ID },
    areaServed,
    url: `${site.url}/services/${service.slug}/`
  };
}

export function townServiceSchema(town: ServiceAreaTown) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Tree Service in ${town.name}, OH`,
    serviceType: "Tree Service",
    description: town.intro,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: `${town.name}, OH` },
    url: abs(`/tree-service/${town.slug}/`)
  };
}

export function faqPageSchema(items: ReadonlyArray<{ q: string; a: string }> = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}

export function breadcrumbSchema(crumbs: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path)
    }))
  };
}
