"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import {
  footerCommunityLinks,
  footerLegalLinks,
  footerPlatformLinks,
} from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  // Do not render public footer on admin console routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="mt-auto border-t border-border bg-surface">

      <div className="mx-auto max-w-[1536px] px-4 pt-12 pb-[calc(6rem+env(safe-area-inset-bottom,0px))] sm:px-8 sm:pt-16 sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] lg:px-12 xl:px-16 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Main Brand Column (2 cols) */}
          <div className="lg:col-span-2">
            <Logo size="footer" />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted sm:text-sm">
              An academic operating platform engineered by Computer Science students at Aligarh Muslim University to centralize attendance, lecture schedules, department circulars, and study archives into one reliable mobile application.
            </p>

            <div className="mt-5 flex items-center gap-3 font-mono-code text-xs text-muted">
              <span className="rounded bg-primary-light px-2 py-0.5 font-bold text-primary border border-primary/20">
                v{siteConfig.appVersion} Stable
              </span>
              <span>Android (Live) · iOS (In Dev)</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href={siteConfig.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary font-mono-code"
                aria-label="Batch-X Project GitHub"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.linkedinOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary font-mono-code"
                aria-label="Ali Saqulain on LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>Ali Saqulain</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-abrar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary font-mono-code"
                aria-label="Sameer Ahmad on LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>Sameer Ahmad</span>
              </a>
              <a
                href="https://www.linkedin.com/in/okasha-ansari-90199136b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary font-mono-code"
                aria-label="Okasha Ansari on LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>Okasha Ansari</span>
              </a>
            </div>
          </div>

          {/* Column 2: Platform Modules */}
          <div>
            <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground">
              Platform Modules
            </h3>
            <ul className="mt-4 space-y-2">
              {footerPlatformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community & Team */}
          <div>
            <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground">
              Community & Team
            </h3>
            <ul className="mt-4 space-y-2">
              {footerCommunityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Department & Legal */}
          <div>
            <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground">
              Institutional
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.amu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-primary"
                >
                  <span>AMU Official Portal</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center text-xs text-muted">
            <p className="font-mono-code">{siteConfig.copyright}</p>
            <p className="max-w-xl text-[11px] leading-relaxed text-muted/90 sm:text-right">
              {siteConfig.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
