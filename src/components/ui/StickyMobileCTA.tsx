"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { useDownloadModal } from "@/components/ui/DownloadModal";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { openDownloadModal } = useDownloadModal();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after user scrolls past 160px
      setVisible(window.scrollY > 160);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Do not render on admin pages or if user is at top of page
  if (pathname?.startsWith("/admin") || !visible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
        "border-t border-border/80 bg-surface/95 backdrop-blur-xl",
        "px-4 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]",
        "animate-in slide-in-from-bottom duration-250 ease-out"
      )}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        {/* Left: App Identity */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-border shadow-xs">
            <Image
              src="/logo.png"
              alt="AMU BATCH X icon"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xs font-bold text-foreground truncate">
                AMU BATCH X
              </span>
              <span className="rounded bg-primary-light px-1.5 py-0.2 font-mono-code text-[10px] font-bold text-primary border border-primary/20">
                v{siteConfig.appVersion}
              </span>
            </div>
            <p className="font-mono-code text-[10px] text-muted truncate">
              Dept. of Computer Science
            </p>
          </div>
        </div>

        {/* Right: Quick Action Download Trigger */}
        <button
          type="button"
          onClick={() => openDownloadModal()}
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono-code text-xs font-bold",
            "bg-primary text-white shadow-sm hover:bg-primary-hover active:scale-96 transition-all touch-manipulation cursor-pointer"
          )}
        >
          <Download className="h-3.5 w-3.5" />
          <span>Get APK</span>
        </button>
      </div>
    </div>
  );
}
