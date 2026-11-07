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
import { getLatestRelease } from "@/lib/app-version";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "lenis/dist/lenis.css";
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
  title: siteConfig.fullName,
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

// The latest app version is read here and shared with every page, so all
// routes are regenerated at most every 60s. Admin release actions also call
// revalidatePath("/", "layout") to refresh them immediately.
export const revalidate = 60;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const release = await getLatestRelease();
  const structuredData = [
    getWebsiteJsonLd(),
    getOrganizationJsonLd(),
    getMobileAppJsonLd(release),
  ];

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
        <MotionProvider>
          <DownloadModalProvider initialRelease={release}>
            <Navbar />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <Footer />
            <StickyMobileCTA />
            <CookieBanner />
          </DownloadModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
