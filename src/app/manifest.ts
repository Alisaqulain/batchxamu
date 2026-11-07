import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: "BATCH X",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#166534",
    orientation: "portrait-primary",
    categories: ["education", "productivity"],
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
