import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash keeps one canonical URL per page (matches sitemap + prior Squarespace URLs).
  trailingSlash: true,
  reactStrictMode: true,
  // Pin the workspace root so a stray ancestor lockfile can't mis-detect it.
  turbopack: { root: path.resolve() }
};

export default nextConfig;
