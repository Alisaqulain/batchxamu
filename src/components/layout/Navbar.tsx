"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { centerNavLinks } from "@/data/navigation";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface/95 shadow-sm backdrop-blur-md"
          : "bg-surface/90 backdrop-blur-sm"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo size="md" className="shrink-0" />

        <ul className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
          {centerNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href ||
                    (link.href.startsWith("/#") && pathname === "/")
                    ? "bg-primary-light text-primary"
                    : "text-muted hover:bg-slate-100 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <DownloadButton size="sm" className="hidden sm:inline-flex" />
          <DownloadButton
            size="sm"
            className="inline-flex sm:hidden"
            fullWidth={false}
          />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-foreground hover:bg-slate-100 xl:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-surface transition-all duration-300 xl:hidden",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <ul className="space-y-1 px-4 py-4 sm:px-6">
          {centerNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-primary-light/30 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <DownloadButton className="w-full" size="md" fullWidth />
          </li>
        </ul>
      </div>
    </header>
  );
}
