import type { Metadata } from "next";
import { siteConfig } from "./site";

const ogImage = `${siteConfig.url}/og-image.png`;

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  type = "website",
  publishedTime,
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === ""
      ? `${siteConfig.name}: ${title}`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: `${siteConfig.name} Team`, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    category: "education",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}: Department of Computer Science App Platform`,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-title": siteConfig.name,
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
    },
  };
}
