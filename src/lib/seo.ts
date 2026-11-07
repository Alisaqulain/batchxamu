import { siteConfig } from "./site";
import type { ResolvedDownload } from "./app-version";
import { developers } from "@/data/developers";

const siteUrl = `${siteConfig.url}/`;
const logo = `${siteConfig.url}/logo.png`;

const publisher = {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  logo,
};

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: "Batch X",
    description: siteConfig.description,
    url: siteUrl,
    inLanguage: "en-IN",
    publisher,
  };
}

export function getMobileAppJsonLd(release?: ResolvedDownload) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android 8.0+",
    description: siteConfig.description,
    url: `${siteConfig.url}/download`,
    image: logo,
    ...(release?.version && { softwareVersion: release.version }),
    ...(release?.downloadUrl && { downloadUrl: release.downloadUrl }),
    ...(release?.fileSize && { fileSize: release.fileSize }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    author: developers.map((dev) => ({
      "@type": "Person",
      name: dev.name,
      ...(dev.github && { url: dev.github }),
    })),
    publisher,
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "Batch X",
    url: siteUrl,
    logo,
    sameAs: [siteConfig.githubOrg, siteConfig.linkedinOrg],
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.supportEmail,
      contactType: "customer support",
    },
  };
}
