import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllBlogSlugs } from "@/data/blog";

const staticRoutes = [
  "",
  "/about",
  "/features",
  "/programs",
  "/students",
  "/teachers",
  "/mock-tests",
  "/developers",
  "/download",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/download" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/download" ? 0.95 : 0.7,
  }));

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
