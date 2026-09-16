import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DownloadModalProvider } from "@/components/ui/DownloadModal";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";
import {
  getMobileAppJsonLd,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/seo";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { CookieBanner } from "@/components/ui/CookieBanner";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Department of Computer Science Student Platform",
  description: siteConfig.description,
  path: "",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#166534" },
    { media: "(prefers-color-scheme: dark)", color: "#0f3d24" },
  ],
};

const structuredData = [
  getWebsiteJsonLd(),
  getOrganizationJsonLd(),
  getMobileAppJsonLd(),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${plusJakarta.variable} ${fraunces.variable} h-full`}
    >
      <head>
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <DownloadModalProvider>
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
          <StickyMobileCTA />
          <CookieBanner />
        </DownloadModalProvider>
      </body>
    </html>
  );
}
