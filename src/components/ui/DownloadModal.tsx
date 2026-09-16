"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { X, ArrowRight, ShieldCheck, Download } from "lucide-react";
import { AndroidIcon, AppleIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface DownloadModalContextType {
  isOpen: boolean;
  openDownloadModal: (triggerEl?: HTMLElement | null) => void;
  closeDownloadModal: () => void;
}

const DownloadModalContext = createContext<DownloadModalContextType | undefined>(
  undefined
);

export function useDownloadModal() {
  const context = useContext(DownloadModalContext);
  if (!context) {
    throw new Error(
      "useDownloadModal must be used within a DownloadModalProvider"
    );
  }
  return context;
}

export function DownloadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openDownloadModal = useCallback((triggerEl?: HTMLElement | null) => {
    if (triggerEl) {
      triggerRef.current = triggerEl;
    } else if (typeof document !== "undefined" && document.activeElement) {
      triggerRef.current = document.activeElement as HTMLElement;
    }
    setIsOpen(true);
  }, []);

  const closeDownloadModal = useCallback(() => {
    setIsOpen(false);
    // Restore focus back to the trigger button
    if (triggerRef.current && typeof triggerRef.current.focus === "function") {
      setTimeout(() => {
        triggerRef.current?.focus();
      }, 50);
    }
  }, []);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDownloadModal();
        return;
      }

      // Trap focus inside modal
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href]:not([aria-disabled="true"]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Auto focus the close button or first interactive element
    const timeoutId = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [isOpen, closeDownloadModal]);

  const [releaseInfo, setReleaseInfo] = useState<{
    version: string;
    downloadUrl: string;
    sourceType: "github" | "supabase" | "direct";
    sourceLabel: string;
    fileSize: string;
    fileName: string;
  }>({
    version: siteConfig.appVersion || "1.0.8",
    downloadUrl:
      siteConfig.androidDownloadUrl ||
      "https://github.com/sameerahmad005/Batch-26/releases/download/v1.0.8/v1.0.8.apk",
    sourceType: "github",
    sourceLabel: "GitHub Release",
    fileSize: "24.2 MB",
    fileName: "batch-x.apk",
  });

  useEffect(() => {
    let isMounted = true;
    fetch("/api/version")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data?.success && data.downloadUrl) {
          setReleaseInfo({
            version: data.version || siteConfig.appVersion || "1.0.8",
            downloadUrl: data.downloadUrl,
            sourceType: data.sourceType || "direct",
            sourceLabel: data.sourceLabel || "Official Release",
            fileSize: data.fileSize || "24.2 MB",
            fileName: data.fileName || "batch-x.apk",
          });
        }
      })
      .catch((err) => {
        console.warn("Could not fetch latest release info:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const androidUrl = releaseInfo.downloadUrl || "/api/download";
  const isExternalAndroid = androidUrl.startsWith("http");

  return (
    <DownloadModalContext.Provider
      value={{ isOpen, openDownloadModal, closeDownloadModal }}
    >
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto"
          role="presentation"
        >
          {/* Backdrop with soft blur */}
          <div
            className="fixed inset-0 bg-foreground/45 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={closeDownloadModal}
            aria-hidden="true"
          />

          {/* Modal Container Card */}
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="platform-modal-title"
            aria-describedby="platform-modal-desc"
            className={cn(
              "relative z-10 w-full max-w-[440px] sm:max-w-[480px]",
              "rounded-2xl border border-border bg-surface p-5 sm:p-7 shadow-2xl",
              "transition-all duration-200 ease-out",
              "animate-in fade-in zoom-in-95"
            )}
          >
            {/* Header: Title & Close Action */}
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary-light px-2 py-0.5 font-mono-code text-[11px] font-bold text-primary mb-1.5">
                  <Download className="h-3 w-3" />
                  <span>INSTALLATION HUB</span>
                </div>
                <h2
                  id="platform-modal-title"
                  className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground"
                >
                  Download the App
                </h2>
                <p
                  id="platform-modal-desc"
                  className="mt-1 text-xs sm:text-sm text-muted"
                >
                  Choose your platform to continue.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDownloadModal}
                aria-label="Close platform selection modal"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-muted text-muted hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Platform Options Stack */}
            <div className="mt-5 space-y-3.5">
              {/* Option 1: Android (Active, Available) */}
              <a
                href={androidUrl}
                target={isExternalAndroid ? "_blank" : undefined}
                rel={isExternalAndroid ? "noopener noreferrer" : undefined}
                onClick={() => {
                  // Allow browser to follow link then dismiss modal
                  setTimeout(closeDownloadModal, 300);
                }}
                className={cn(
                  "group block rounded-xl border-2 border-primary/40 bg-gradient-to-br from-primary-light/40 via-surface to-surface p-4 sm:p-4.5",
                  "shadow-xs transition-all duration-200",
                  "hover:border-primary hover:bg-primary-light/70 hover:shadow-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  "active:scale-[0.99]"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs group-hover:scale-105 transition-transform">
                      <AndroidIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base font-bold text-foreground">
                          Android
                        </span>
                        <span className="rounded-full bg-primary-light px-2 py-0.5 font-mono-code text-[10px] font-bold text-primary border border-primary/30">
                          v{releaseInfo.version}
                        </span>
                        <span className="rounded-full bg-surface-muted px-2 py-0.5 font-mono-code text-[10px] text-muted border border-border">
                          {releaseInfo.sourceLabel}
                        </span>
                      </div>
                      <p className="font-mono-code text-xs text-muted mt-0.5">
                        Direct APK package · Android 8.0+
                      </p>
                    </div>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface border border-primary/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-primary/20 pt-2.5 font-mono-code text-[11px]">
                  <span className="text-muted truncate max-w-[200px]" title={releaseInfo.fileName}>
                    {releaseInfo.fileSize} · {releaseInfo.sourceLabel}
                  </span>
                  <span className="font-bold text-primary flex items-center gap-1">
                    <span>Download APK</span>
                    <Download className="h-3 w-3" />
                  </span>
                </div>
              </a>

              {/* Option 2: iOS (Disabled, Intentionally Coming Soon) */}
              <div
                aria-disabled="true"
                tabIndex={-1}
                className={cn(
                  "relative rounded-xl border border-dashed border-border bg-surface-muted/60 p-4 sm:p-4.5",
                  "opacity-65 select-none transition-colors",
                  "cursor-not-allowed"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface border border-border text-muted">
                      <AppleIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base font-bold text-foreground/80">
                          iOS
                        </span>
                        <span className="rounded-full bg-surface px-2 py-0.5 font-mono-code text-[10px] font-bold text-muted border border-border">
                          Not Active Yet
                        </span>
                      </div>
                      <p className="font-mono-code text-xs text-muted mt-0.5">
                        iPhone & iPad · In Active Development
                      </p>
                    </div>
                  </div>

                  <div className="rounded bg-surface px-2 py-1 font-mono-code text-[10px] font-semibold text-muted border border-border">
                    In Dev
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-border/70 pt-2.5 font-mono-code text-[11px] text-muted">
                  <span>Apple App Store Channel</span>
                  <span className="italic">Not Active Yet</span>
                </div>
              </div>
            </div>

            {/* Bottom Security Note */}
            <div className="mt-5 rounded-xl border border-border bg-surface-muted p-3 flex items-center gap-2 text-xs text-muted">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>
                Verified student build for Department of Computer Science.
              </span>
            </div>
          </div>
        </div>
      )}
    </DownloadModalContext.Provider>
  );
}
