"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "amu_batchx_privacy_ack_v1";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const acknowledged = localStorage.getItem(STORAGE_KEY);
      if (!acknowledged) {
        // Delay slightly for smooth entrance
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable (e.g., incognito restrictions)
    }
  }, []);

  const handleAcknowledge = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore
    }
  };

  if (!mounted || !visible) {
    return null;
  }

  return (
    <aside
      aria-label="Student Privacy Notice"
      className={cn(
        "fixed bottom-20 lg:bottom-6 left-4 right-4 sm:left-6 sm:right-auto z-50",
        "max-w-md rounded-2xl border border-primary/30 bg-surface/98 p-4 shadow-2xl backdrop-blur-xl",
        "animate-in fade-in slide-in-from-bottom-5 duration-300 ring-1 ring-black/10"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary-light text-primary mt-0.5">
          <ShieldCheck className="h-4 w-4" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-display text-xs font-bold text-foreground">
              Zero Tracking Cookies · Student Privacy
            </h4>
            <button
              type="button"
              onClick={handleAcknowledge}
              className="text-muted hover:text-foreground p-1 transition-colors cursor-pointer"
              aria-label="Dismiss privacy notice"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <p className="mt-1 text-[11px] leading-relaxed text-muted font-sans">
            AMU BATCH X operates without third-party advertising SDKs or tracking cookies. All academic rosters, attendance margins, and notes remain strictly encrypted in local on-device SQLite storage.
          </p>

          <div className="mt-3 flex items-center justify-between gap-3">
            <Link
              href="/privacy"
              className="font-mono-code text-[11px] font-semibold text-primary hover:underline"
            >
              Read Privacy Policy →
            </Link>

            <button
              type="button"
              onClick={handleAcknowledge}
              className="rounded-lg bg-primary px-3 py-1 font-mono-code text-[11px] font-bold text-white shadow-xs hover:bg-primary-hover active:scale-96 transition-all cursor-pointer"
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
