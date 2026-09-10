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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo size="nav" />

        <ul className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {centerNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary-light text-primary"
                    : "text-muted hover:bg-slate-50 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <DownloadButton size="sm" compact className="inline-flex sm:hidden" />
          <DownloadButton size="sm" className="hidden sm:inline-flex" />

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-sm hover:bg-slate-50 xl:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[73px] z-40 bg-black/20 xl:hidden" onClick={() => setOpen(false)} aria-hidden="true" />
      )}

      <div
        className={cn(
          "border-t border-border bg-white transition-all duration-300 xl:hidden",
          open ? "max-h-[70vh] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0 border-t-0"
        )}
      >
        <ul className="space-y-1 px-4 py-4 sm:px-6">
          {centerNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-[44px] items-center rounded-xl px-4 text-sm font-medium text-foreground hover:bg-primary-light/40"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <DownloadButton size="md" fullWidth />
          </li>
        </ul>
      </div>
    </header>
  );
}
