import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI crawlers are welcome — this reverses the old Squarespace robots.txt that
// blocked GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, and others.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`
  };
}
