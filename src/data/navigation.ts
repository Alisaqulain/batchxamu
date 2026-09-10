import type { NavLink } from "@/types";

export const centerNavLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Programs", href: "/programs" },
  { label: "For Students", href: "/students" },
  { label: "Coming Soon", href: "/#roadmap" },
  { label: "Developers", href: "/developers" },
];

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  ...centerNavLinks,
  { label: "Download", href: "/download" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerPlatformLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Programs", href: "/programs" },
  { label: "Download", href: "/download" },
  { label: "Developers", href: "/developers" },
  { label: "Blog", href: "/blog" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
