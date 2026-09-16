import { siteConfig } from "./site";

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AMU BATCH X",
    alternateName: "AMU Batch X Platform",
    description:
      "A student-focused academic platform for the Department of Computer Science community in Aligarh.",
    url: "https://www.amubatchx.app/",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "AMU BATCH X",
      url: "https://www.amubatchx.app/",
      logo: `${siteConfig.url}/logo.png`,
    },
  };
}

export function getMobileAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AMU BATCH X",
    applicationCategory: "Education",
    operatingSystem: "Android, iOS, Web",
    description:
      "A student-focused academic platform for the Department of Computer Science community in Aligarh.",
    url: "https://www.amubatchx.app/",
    image: `${siteConfig.url}/logo.png`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    author: {
      "@type": "Organization",
      name: "AMU BATCH X Student Development Team",
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AMU BATCH X",
    url: "https://www.amubatchx.app/",
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.githubOrg, siteConfig.linkedinOrg],
    description:
      "A student-focused academic platform for the Department of Computer Science community in Aligarh.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@amubatchx.app",
      contactType: "student support",
    },
  };
}
