import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";
import {
  getMobileAppJsonLd,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Department of Computer Science Student App",
  description: siteConfig.description,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#166534" },
    { media: "(prefers-color-scheme: dark)", color: "#14532D" },
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
    <html lang="en-IN" className={`${dmSans.variable} ${sourceSerif.variable} h-full`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
