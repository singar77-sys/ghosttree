import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash keeps one canonical URL per page (matches sitemap + prior Squarespace URLs).
  trailingSlash: true,
  reactStrictMode: true,
  // Pin the workspace root so a stray ancestor lockfile can't mis-detect it.
  turbopack: { root: path.resolve() },
  // 301s from the old Squarespace URLs so inbound links and rankings carry over the cutover.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/photo-gallery", destination: "/gallery/", permanent: true },
      { source: "/our-story", destination: "/about/", permanent: true },
      { source: "/contact-us", destination: "/quote/", permanent: true },
      { source: "/testimonials", destination: "/about/", permanent: true },
      { source: "/services-1", destination: "/services/", permanent: true }
    ];
  }
};

export default nextConfig;
