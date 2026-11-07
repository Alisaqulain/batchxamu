import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // /api/download and /api/version stay crawlable: llms.txt links to them.
      allow: ["/", "/api/download", "/api/version"],
      disallow: ["/admin", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
