import type { Metadata } from "next";
import { siteConfig } from "./site";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  type = "website",
  publishedTime,
}: PageMetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === ""
      ? `${siteConfig.name} — ${title}`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: "AMU BATCH X Development Team" }],
    creator: "AMU BATCH X Development Team",
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
