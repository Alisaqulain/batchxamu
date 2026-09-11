import Image from "next/image";
import { QrCode, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "./PhoneMockup";
import { ArrowRight } from "lucide-react";

export function DownloadSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden border-y border-primary-deep/20 bg-primary-deep py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(252,165,165,0.1),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-bright">
              Download
            </p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Your department. In your pocket.
            </h2>
            <p className="mt-4 text-lg text-primary-light/80">
              Download the app and keep your academic information, updates and
              resources close at hand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DownloadButton size="lg" variant="light" className="w-full sm:w-auto" />
              <Button
                href="/features"
                variant="outline"
                size="lg"
                className="w-full border-white/50 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              >
                Explore the platform
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} app icon`}
                width={72}
                height={72}
                className="rounded-2xl"
              />
              <div>
                <p className="text-sm font-medium">Android</p>
                <p className="text-sm text-primary-light/70">
                  v{siteConfig.appVersion}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <PhoneMockup variant="compact" />
            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6">
              <QrCode className="h-12 w-12 text-primary-light/50" aria-hidden="true" />
              <p className="mt-3 text-sm text-primary-light/70">QR Code Placeholder</p>
              <Smartphone className="mt-2 h-4 w-4 text-primary-light/40" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
