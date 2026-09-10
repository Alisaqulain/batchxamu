import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { footerLegalLinks, footerPlatformLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="footer" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              A digital academic platform built to simplify student life and
              connect the Department of Computer Science through one app.
            </p>
            <div className="mt-5">
              <DownloadButton size="sm" />
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border p-2.5 text-muted transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedinOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border p-2.5 text-muted transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerPlatformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-center text-sm text-muted">{siteConfig.copyright}</p>
          <p className="mt-2 text-center text-xs text-muted/80">
            {siteConfig.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
