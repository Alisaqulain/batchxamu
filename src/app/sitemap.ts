import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/data/blog";

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
    url: route === "" ? `${baseUrl}/` : `${baseUrl}${route}`,
    changeFrequency: route === "" || route === "/download" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/download" ? 0.95 : 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
