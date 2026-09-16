import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getLatestAppVersion, resolveDownloadSource } from "@/lib/app-version";

export const revalidate = 60;

export const metadata = createMetadata({
  title: "Download Android APK",
  description:
    "Download the official AMU BATCH X Android application APK. Complete installation instructions, system requirements, and release notes.",
  path: "/download",
});

const releaseHighlights = [
  "Comprehensive Theory & Laboratory attendance ledger with AMU 75% cutoff indicator.",
  "Daily lecture timetable mapped to Department halls CS-01 to CS-04 and Unix / Systems Labs.",
  "Direct department circular dispatch feed with sub-5-second priority push alerting.",
  "Curated MCA 26 study notes library and previous-year question archives.",
  "Offline-first local storage ensures zero disruption when campus Wi-Fi drops.",
  "High-contrast OLED dark theme for comfortable late-evening exam preparation.",
];

export default async function DownloadPage() {
  const latest = await getLatestAppVersion();
  const resolved = resolveDownloadSource(latest);
  const ver = resolved.version;

  return (
    <>
      <PageHeader
        label="Application Distribution"
        title="Get AMU BATCH X for Your Device"
        description={`The official v${ver} Android APK is live via ${resolved.sourceLabel}. The iOS edition for iPhone and iPad is currently in active development.`}
      />


      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Main Download Card */}
          <div className="ledger-card border border-border bg-surface p-6 sm:p-10 lg:p-12 mb-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.png"
                    alt={`${siteConfig.name} official application icon`}
                    width={76}
                    height={76}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border border-border shadow-xs object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                        AMU BATCH X
                      </h2>
                      <span className="rounded bg-primary-light px-2 py-0.5 font-mono-code text-xs font-bold text-primary border border-primary/20">
                        v{ver}
                      </span>
                    </div>
                    <p className="font-mono-code text-xs text-primary font-semibold mt-0.5">
                      Department of Computer Science Edition
                    </p>
                    <p className="font-mono-code text-[11px] text-muted">
                      Targeted for MCA 2026 Batch
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                  Direct APK build for Android smartphones. Free for all Department of Computer Science students. No advertisements, no external tracking, and full offline caching.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <DownloadButton size="lg" className="w-full sm:w-auto" />
                  <a
                    href={siteConfig.githubOrg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 font-mono-code text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-surface-muted transition-colors text-center"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted" />
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-3 font-mono-code text-xs">
                  <div>
                    <span className="text-muted block text-[11px]">Platform</span>
                    <span className="font-semibold text-foreground mt-0.5 block">Android (Live) · iOS (In Dev)</span>
                  </div>
                  <div>
                    <span className="text-muted block text-[11px]">Package Format</span>
                    <span className="font-semibold text-foreground mt-0.5 block">
                      {latest.apk_file_name || "Direct APK Package"}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted block text-[11px]">Package Size</span>
                    <span className="font-semibold text-primary mt-0.5 block">
                      {latest.apk_file_size || "Universal APK"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Package Verification Details */}
              <div className="lg:col-span-5 rounded-2xl border border-border bg-surface-muted p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                    Package Verification
                  </h3>
                </div>

                <div className="space-y-3 font-mono-code text-xs">
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Release Tag</span>
                    <span className="text-foreground font-bold">v{ver}-stable</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Target Architecture</span>
                    <span className="text-foreground">arm64-v8a / universal</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Security Review</span>
                    <span className="text-primary font-bold">Verified Student Build</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Distribution Source</span>
                    <span className="text-foreground font-semibold">{resolved.sourceLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Offline Engine</span>
                    <span className="text-foreground">Active SQLite Cache</span>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-primary/20 bg-primary-light/50 p-3 text-[11px] text-primary-deep leading-relaxed">
                  Notice: AMU BATCH X is distributed as a direct APK for students before formal app store placement.
                </div>
              </div>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-border pb-3">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Installation Walkthrough
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">
                  How to Install the APK on Your Android Device
                </h3>
              </div>

              <div className="space-y-4">
                <div className="ledger-card border border-border bg-surface p-5 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-mono-code text-xs font-bold">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Download the APK Package
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      Tap the &quot;Download App&quot; button directly from Chrome or your phone browser. The APK file will save to your Downloads folder.
                    </p>
                  </div>
                </div>

                <div className="ledger-card border border-border bg-surface p-5 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-mono-code text-xs font-bold">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Allow Browser Installation Prompt
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      When Android alerts that the package is from an outside source, tap &quot;Settings&quot; and toggle on &quot;Allow from this source&quot; for your browser.
                    </p>
                  </div>
                </div>

                <div className="ledger-card border border-border bg-surface p-5 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-mono-code text-xs font-bold">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Complete Setup & Select Batch
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      Tap &quot;Install&quot;, open AMU BATCH X, and pick your active academic semester to automatically synchronize your timetable and attendance ledger.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Release Notes for v1.0.0 */}
            <div className="lg:col-span-5">
              <div className="border-b border-border pb-3 mb-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Changelog
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">
                  v{siteConfig.appVersion} Release Highlights
                </h3>
              </div>

              <div className="ledger-card border border-border bg-surface p-6">
                <ul className="space-y-3.5">
                  {releaseHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-muted">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-4 text-center">
                  <p className="font-mono-code text-[11px] text-muted">
                    Questions or install issues? Use our{" "}
                    <Link href="/contact" className="text-primary font-bold hover:underline">
                      contact form
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
