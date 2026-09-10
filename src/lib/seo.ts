import { siteConfig } from "./site";

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.appName,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
    },
  };
}

export function getMobileAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    operatingSystem: "Android",
    applicationCategory: "EducationalApplication",
    description: siteConfig.description,
    url: siteConfig.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    author: {
      "@type": "Organization",
      name: `${siteConfig.name} Development Team`,
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.githubOrg, siteConfig.linkedinOrg],
    description: siteConfig.description,
  };
}
