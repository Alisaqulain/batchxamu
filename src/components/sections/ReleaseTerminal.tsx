import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { siteConfig } from "@/lib/site";
import { formatVersion } from "@/lib/utils";
import Link from "next/link";
import { AppVersion } from "@/lib/supabase";

interface ReleaseTerminalProps {
  latest?: AppVersion;
}

export function ReleaseTerminal({ latest }: ReleaseTerminalProps) {
  const versionTag = formatVersion(latest?.latest_version || siteConfig.fallbackAppVersion);
  const binarySize = latest?.apk_file_size || "Android APK";

  return (
    <section id="download" className="scroll-mt-20 border-b border-border bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div data-reveal className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xs">
          
          {/* Top Terminal Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground">
                Download
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono-code text-xs text-muted">
              <span className="rounded bg-primary-light px-2 py-0.5 font-bold text-primary border border-primary/20">
                {versionTag}
              </span>
              <span>Android · iOS coming later</span>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: App Identity & Download Actions */}
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
                    <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                      {siteConfig.name}
                    </h2>
                    <p className="font-mono-code text-xs text-primary font-semibold">
                      Department of Computer Science, AMU
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
                  Install the APK on your Android phone to get your timetable, attendance and department notices. An iOS version is in development.
                </p>

                {/* Primary Download CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <DownloadButton size="lg" className="w-full sm:w-auto" />
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 font-mono-code text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-surface-muted transition-colors text-center"
                  >
                    <span>Install guide and release notes</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted" />
                  </Link>
                </div>

                {/* Technical Specifications List */}
                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-3 text-xs font-mono-code">
                  <div>
                    <span className="text-muted block text-xs">Platform</span>
                    <span className="font-semibold text-foreground mt-0.5 block">Android 8.0+</span>
                  </div>
                  <div>
                    <span className="text-muted block text-xs">Size</span>
                    <span className="font-semibold text-foreground mt-0.5 block">{binarySize}</span>
                  </div>
                  <div>
                    <span className="text-muted block text-xs">Price</span>
                    <span className="font-semibold text-primary mt-0.5 block">Free</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3-Step Clean Installation Guide */}
              <div className="lg:col-span-5 rounded-2xl border border-border bg-surface-muted p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <h3 className="font-mono-code text-sm font-bold text-primary">
                    How to install
                  </h3>
                </div>

                <div className="mt-4 space-y-4 font-mono-code">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-white text-xs font-bold">
                      1
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">
                        Download the APK
                      </h4>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">
                        Tap &quot;Download App&quot; and choose Android.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-white text-xs font-bold">
                      2
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">
                        Allow the install
                      </h4>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">
                        If Android asks, allow installing apps from this source.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-white text-xs font-bold">
                      3
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">
                        Open the app
                      </h4>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">
                        Pick your batch. Your timetable and notices load and are saved for offline use.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-primary/20 bg-primary-light/50 p-3 text-xs text-primary-deep font-mono-code">
                  No ads and no tracking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
