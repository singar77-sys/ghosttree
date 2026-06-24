import type { MetadataRoute } from "next";
import { services, serviceAreaTowns, site } from "@/lib/site";
import { gallery } from "@/lib/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services/",
    "/medina-county-tree-service/",
    "/gallery/",
    "/about/",
    "/quote/",
    "/privacy/"
  ];
  const serviceRoutes = services.map((s) => `/services/${s.slug}/`);
  const townRoutes = serviceAreaTowns.map((t) => `/tree-service/${t.slug}/`);

  const entries: MetadataRoute.Sitemap = [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") || path.includes("medina") ? 0.8 : 0.6,
    // Image sitemap entries for the photo-heavy gallery page.
    ...(path === "/gallery/" ? { images: gallery.map((g) => `${site.url}${g.src}`) } : {})
  }));

  const townEntries: MetadataRoute.Sitemap = townRoutes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...entries, ...townEntries];
}
