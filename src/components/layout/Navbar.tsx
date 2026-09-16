"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  Smartphone,
  Sparkles,
  Download,
  History,
  GraduationCap,
  BookOpen,
  Users,
  CheckSquare,
  Building2,
  Info,
  Code2,
  Newspaper,
  Mail,
  ShieldCheck,
  FileText,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { navDropdownCategories, type NavDropdownItem } from "@/data/navigation";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

function NavIcon({ name, className }: { name: string; className?: string }) {
  const iconProps = { className: cn("h-4 w-4 shrink-0", className) };
  switch (name) {
    case "Layers":
      return <Layers {...iconProps} />;
    case "Smartphone":
      return <Smartphone {...iconProps} />;
    case "Sparkles":
      return <Sparkles {...iconProps} />;
    case "Download":
      return <Download {...iconProps} />;
    case "History":
      return <History {...iconProps} />;
    case "GraduationCap":
      return <GraduationCap {...iconProps} />;
    case "BookOpen":
      return <BookOpen {...iconProps} />;
    case "Users":
      return <Users {...iconProps} />;
    case "CheckSquare":
      return <CheckSquare {...iconProps} />;
    case "Building2":
      return <Building2 {...iconProps} />;
    case "Info":
      return <Info {...iconProps} />;
    case "Code2":
      return <Code2 {...iconProps} />;
    case "Newspaper":
      return <Newspaper {...iconProps} />;
    case "Mail":
      return <Mail {...iconProps} />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "FileText":
      return <FileText {...iconProps} />;
    default:
      return <Layers {...iconProps} />;
  }
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>("platform");
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active page section on scroll for landing page
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }
    const sectionIds = ["download", "department", "capabilities", "screenshots"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  // Click outside, touch outside, and Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    const handlePointerDownOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDownOutside);
    document.addEventListener("touchstart", handlePointerDownOutside, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDownOutside);
      document.removeEventListener("touchstart", handlePointerDownOutside);
    };
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (categoryId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(categoryId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Do not render public website navbar on admin portal pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200",
        scrolled
          ? "border-b border-border bg-surface/95 shadow-xs backdrop-blur-md"
          : "border-b border-border/60 bg-surface/90 backdrop-blur-sm"
      )}
    >
      <nav
        className="mx-auto flex max-w-[1536px] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12 xl:px-16"
        aria-label="App product navigation"
      >
        <Logo size="nav" />

        {/* Desktop Navigation Links with Multi Dropdowns */}
        <ul className="hidden flex-1 items-center justify-center gap-1 xl:gap-2 lg:flex">
          {navDropdownCategories.map((cat) => {
            const isOpen = activeDropdown === cat.id;
            const isCategoryActive =
              cat.items.some((item) => pathname === item.href) ||
              (pathname === "/" && Boolean(activeSection) && cat.items.some((item) => item.href === `/#${activeSection}`));

            return (
              <li
                key={cat.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono-code text-xs font-semibold transition-all touch-manipulation cursor-pointer",
                    isOpen
                      ? "bg-primary-light text-primary shadow-2xs ring-1 ring-primary/25"
                      : isCategoryActive
                      ? "text-primary font-bold bg-primary-light/60 border border-primary/25 shadow-2xs"
                      : "text-muted hover:bg-surface-muted hover:text-foreground"
                  )}
                >
                  {isCategoryActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  )}
                  <span>{cat.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200 text-muted",
                      isOpen && "rotate-180 text-primary"
                    )}
                  />
                </button>

                {/* Dropdown Floating Panel */}
                {isOpen && (
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[360px] animate-in fade-in-0 zoom-in-95 duration-150"
                    )}
                  >
                    <div className="rounded-2xl border border-border bg-surface/98 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-black/5">
                      {/* Category Header */}
                      <div className="border-b border-border/70 px-3 pb-2.5 mb-1.5">
                        <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                          {cat.label} Directory
                        </span>
                        <p className="font-sans text-xs text-muted mt-0.5 leading-snug">
                          {cat.description}
                        </p>
                      </div>

                      {/* Item Links */}
                      <div className="space-y-1">
                        {cat.items.map((item) => {
                          const isItemActive =
                            pathname === item.href ||
                            (pathname === "/" && Boolean(activeSection) && item.href === `/#${activeSection}`);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={cn(
                                "group flex items-start gap-3 rounded-xl p-2.5 transition-all",
                                isItemActive
                                  ? "bg-primary-light/80 text-primary font-semibold"
                                  : "hover:bg-surface-muted/90 text-foreground"
                              )}
                            >
                              <div
                                className={cn(
                                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors",
                                  isItemActive
                                    ? "border-primary/40 bg-primary text-white shadow-xs"
                                    : "border-border bg-surface-muted text-muted group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary-light"
                                )}
                              >
                                <NavIcon name={item.iconName} />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-mono-code text-xs font-bold text-foreground group-hover:text-primary truncate">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span className="rounded bg-primary-light px-1.5 py-0.2 font-mono-code text-[10px] font-bold text-primary border border-primary/20">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="font-sans text-[11px] text-muted line-clamp-1 leading-normal mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}

          {/* Quick Direct Link to Release Changelog */}
          <li>
            <Link
              href="/download#changelog"
              className="rounded-lg px-2.5 py-1.5 font-mono-code text-xs font-semibold text-muted hover:bg-surface-muted hover:text-foreground transition-colors"
            >
              Changelog
            </Link>
          </li>
        </ul>

        {/* Desktop Quick Action CTA */}
        <div className="flex shrink-0 items-center gap-2.5">
          <DownloadButton size="sm" compact className="hidden sm:inline-flex" />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-border bg-surface text-foreground shadow-xs hover:bg-surface-muted lg:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 bg-foreground/40 backdrop-blur-xs lg:hidden animate-in fade-in-0 duration-200"
          onClick={() => setMobileOpen(false)}
          onTouchEnd={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer with Multi-Category Accordion */}
      <div
        id="mobile-navigation-menu"
        role="region"
        aria-label="Mobile Navigation"
        className={cn(
          "border-t border-border bg-surface transition-[max-height,opacity] duration-300 ease-in-out lg:hidden relative z-50",
          mobileOpen
            ? "max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain opacity-100 shadow-2xl"
            : "max-h-0 overflow-hidden opacity-0 border-t-0 pointer-events-none"
        )}
      >
        <div className="px-3 py-4 sm:px-6 space-y-4">
          <div className="border-b border-border pb-2 flex items-center justify-between">
            <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-primary">
              All Portal Pages & Modules
            </span>
            <span className="font-mono-code text-[10px] text-muted">
              Tap category to expand
            </span>
          </div>

          {/* Category Accordion */}
          <div className="space-y-2">
            {navDropdownCategories.map((cat) => {
              const isExpanded = expandedMobileCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  className="rounded-xl border border-border bg-surface-muted/60 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedMobileCategory(isExpanded ? null : cat.id)
                    }
                    className="flex w-full items-center justify-between p-3 text-left font-mono-code text-xs font-bold text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{cat.label}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted transition-transform duration-200",
                        isExpanded && "rotate-180 text-primary"
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border/70 bg-surface px-2 py-2 space-y-1">
                      {cat.items.map((item) => {
                        const isItemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex items-center gap-2.5 rounded-lg p-2 font-mono-code text-xs transition-colors",
                              isItemActive
                                ? "bg-primary-light font-bold text-primary"
                                : "text-muted hover:bg-surface-muted hover:text-foreground"
                            )}
                          >
                            <NavIcon name={item.iconName} className="h-3.5 w-3.5" />
                            <span className="flex-1 truncate">{item.title}</span>
                            {item.badge && (
                              <span className="rounded bg-primary-light px-1.5 py-0.5 text-[10px] font-bold text-primary border border-primary/20">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Direct Link to Changelog on Mobile */}
          <div className="rounded-xl border border-border bg-surface-muted/60 p-2.5">
            <Link
              href="/download#changelog"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between font-mono-code text-xs font-semibold text-muted hover:text-primary transition-colors"
            >
              <span>Release Changelog & History</span>
              <ChevronRight className="h-4 w-4 text-muted" />
            </Link>
          </div>

          {/* Direct CTA Button in Mobile Drawer */}
          <div className="pt-2 border-t border-border">
            <DownloadButton size="md" fullWidth onClick={() => setMobileOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
