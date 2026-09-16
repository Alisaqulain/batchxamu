"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Wifi, Battery, Signal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  screenClassName?: string;
  time?: string;
  showStatusBar?: boolean;
  showHomeIndicator?: boolean;
  priority?: boolean;
  notchType?: "island" | "punchhole" | "none";
  interactive?: boolean;
}

export function PhoneMockup({
  children,
  imageSrc,
  imageAlt = "AMU BATCH X Application Screen Preview",
  className,
  screenClassName,
  time = "09:41",
  showStatusBar = false,
  showHomeIndicator = false,
  notchType = "none",
  priority = false,
}: PhoneMockupProps) {
  // Real app screenshots already include authentic status bars & notches
  const effectiveShowStatusBar = showStatusBar;
  const effectiveNotchType = notchType;

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-full max-w-[340px] sm:max-w-[360px]",
        "rounded-[44px] sm:rounded-[48px] p-[10px] sm:p-[12px]",
        "bg-gradient-to-b from-zinc-800 via-zinc-900 to-black",
        "shadow-[0_20px_50px_-12px_rgba(7,37,20,0.35),0_0_0_1px_rgba(255,255,255,0.12),0_0_0_3px_rgba(15,81,43,0.15)]",
        "ring-1 ring-black/80 select-none",
        className
      )}
    >
      {/* Outer Side Hardware Buttons */}
      <div
        className="absolute -left-[3px] top-[95px] h-[30px] w-[3px] rounded-l-sm bg-zinc-600/80"
        aria-hidden="true"
      />
      <div
        className="absolute -left-[3px] top-[140px] h-[46px] w-[3px] rounded-l-sm bg-zinc-600/80"
        aria-hidden="true"
      />
      <div
        className="absolute -left-[3px] top-[198px] h-[46px] w-[3px] rounded-l-sm bg-zinc-600/80"
        aria-hidden="true"
      />
      <div
        className="absolute -right-[3px] top-[150px] h-[60px] w-[3px] rounded-r-sm bg-zinc-600/80"
        aria-hidden="true"
      />

      {/* Screen Enclosure */}
      <div
        className={cn(
          "relative flex h-full w-full flex-col overflow-hidden rounded-[36px] sm:rounded-[38px] bg-black text-foreground",
          "border border-zinc-700/40 shadow-inner",
          screenClassName
        )}
      >
        {/* Dynamic Island / Punch Hole */}
        {effectiveNotchType === "island" && (
          <div
            className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex h-[18px] w-[88px] items-center justify-between rounded-full bg-black px-2 shadow-sm"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-zinc-900" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-950 border border-zinc-800" />
          </div>
        )}
        {effectiveNotchType === "punchhole" && (
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 z-30 h-3 w-3 rounded-full bg-black shadow-sm"
            aria-hidden="true"
          />
        )}

        {/* Device Status Bar */}
        {effectiveShowStatusBar && (
          <div
            className="relative z-20 flex shrink-0 items-center justify-between px-6 pt-3 pb-1 font-mono-code text-xs font-semibold text-foreground/80"
            aria-hidden="true"
          >
            <span>{time}</span>
            <div className="flex items-center gap-1.5 text-foreground/80">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <Battery className="h-3.5 w-3.5" />
            </div>
          </div>
        )}

        {/* Phone Screen Viewport */}
        <div className="relative flex-1 overflow-hidden text-left h-full w-full">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
              className="object-cover object-top"
            />
          ) : (
            children
          )}
        </div>

        {/* Bottom Home Indicator Bar (rendered only if explicitly requested) */}
        {showHomeIndicator && (
          <div
            className="relative z-20 flex shrink-0 items-center justify-center py-2 bg-gradient-to-t from-surface via-surface/90 to-transparent"
            aria-hidden="true"
          >
            <span className="h-1 w-28 rounded-full bg-zinc-400/80" />
          </div>
        )}
      </div>
    </div>
  );
}
