import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { formatVersion } from "@/lib/utils";
import { getLatestAppVersion, resolveDownloadSource } from "@/lib/app-version";

export const revalidate = 60;

export const metadata = createMetadata({
  title: "Download Android APK",
  description:
    "Download the latest AMU BATCH X APK for Android, with install steps and release notes.",
  path: "/download",
});

// Shown under the release notes: what the app includes in general.
const appHighlights = [
  "Theory and lab attendance, checked against the 75% rule.",
  "Daily timetable with rooms CS-01 to CS-04 and the labs.",
  "Department notices with push notifications.",
  "Notes and previous year question papers.",
  "Works offline once your data has loaded.",
  "Dark theme.",
];

export default async function DownloadPage() {
  const latest = await getLatestAppVersion();
  const resolved = resolveDownloadSource(latest);
  const ver = resolved.version;

  return (
    <>
      <PageHeader
        label="Download"
        title="Download AMU BATCH X"
        description={`${formatVersion(ver)} is available for Android. An iOS version is in development.`}
      />


      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Main Download Card */}
          <div data-reveal className="ledger-card border border-border bg-surface p-6 sm:p-10 lg:p-12 mb-12">
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
                        {formatVersion(ver)}
                      </span>
                    </div>
                    <p className="font-mono-code text-xs text-primary font-semibold mt-0.5">
                      Department of Computer Science, AMU
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                  An APK for Android phones. Free for students of the Department of Computer Science, with no ads or tracking, and it works offline.
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
                    <span className="font-semibold text-foreground mt-0.5 block">Android 8.0+</span>
                  </div>
                  <div>
                    <span className="text-muted block text-[11px]">File</span>
                    <span className="font-semibold text-foreground mt-0.5 block break-all">
                      {resolved.fileName}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted block text-[11px]">Size</span>
                    <span className="font-semibold text-primary mt-0.5 block">
                      {resolved.fileSize || "Unknown"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Package Verification Details */}
              <div className="lg:col-span-5 rounded-2xl border border-border bg-surface-muted p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                    Release details
                  </h3>
                </div>

                <div className="space-y-3 font-mono-code text-xs">
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Version</span>
                    <span className="text-foreground font-bold">{formatVersion(ver)}</span>
                  </div>
                  {resolved.versionCode > 0 && (
                    <div className="flex justify-between border-b border-border/60 pb-2">
                      <span className="text-muted">Build</span>
                      <span className="text-foreground">{resolved.versionCode}</span>
                    </div>
                  )}
                  {latest.minimum_supported_version && (
                    <div className="flex justify-between border-b border-border/60 pb-2">
                      <span className="text-muted">Oldest supported version</span>
                      <span className="text-foreground">{formatVersion(latest.minimum_supported_version)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted">Hosted on</span>
                    <span className="text-foreground font-semibold">{resolved.sourceLabel}</span>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-primary/20 bg-primary-light/50 p-3 text-[11px] text-primary-deep leading-relaxed">
                  AMU BATCH X isn&apos;t on the Play Store yet, so it&apos;s installed from the APK file.
                </div>
              </div>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-border pb-3">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Install
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">
                  How to install the APK
                </h3>
              </div>

              <div className="space-y-4">
                <div data-reveal className="ledger-card border border-border bg-surface p-5 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-mono-code text-xs font-bold">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Download the APK
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      Tap &quot;Download App&quot; in your phone&apos;s browser. The file is saved to your Downloads folder.
                    </p>
                  </div>
                </div>

                <div data-reveal className="ledger-card border border-border bg-surface p-5 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-mono-code text-xs font-bold">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Allow the install
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      If Android warns that the app is from an unknown source, tap &quot;Settings&quot; and turn on &quot;Allow from this source&quot; for your browser.
                    </p>
                  </div>
                </div>

                <div data-reveal className="ledger-card border border-border bg-surface p-5 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-mono-code text-xs font-bold">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Open the app and pick your batch
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      Tap &quot;Install&quot;, open AMU BATCH X and choose your semester. Your timetable and attendance load automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Release notes for the latest version */}
            <div id="changelog" className="lg:col-span-5 scroll-mt-24">
              <div className="border-b border-border pb-3 mb-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Changelog
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">
                  {formatVersion(ver)} release notes
                </h3>
              </div>

              <div data-reveal className="ledger-card border border-border bg-surface p-6">
                {latest.update_description && (
                  <p className="mb-5 whitespace-pre-line border-b border-border pb-5 text-sm leading-relaxed text-foreground/90">
                    {latest.update_description}
                  </p>
                )}
                <span className="mb-3 block font-mono-code text-[11px] font-bold uppercase tracking-wider text-muted">
                  In the app
                </span>
                <ul className="space-y-3.5">
                  {appHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-muted">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-4 text-center">
                  <p className="font-mono-code text-[11px] text-muted">
                    Trouble installing? Use the{" "}
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
