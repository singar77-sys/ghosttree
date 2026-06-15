import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services/",
    "/medina-county-tree-service/",
    "/gallery/",
    "/about/",
    "/quote/"
  ];
  const serviceRoutes = services.map((s) => `/services/${s.slug}/`);
  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") || path.includes("medina") ? 0.8 : 0.6
  }));
}
