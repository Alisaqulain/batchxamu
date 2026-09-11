import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-20 sm:py-28 grain">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(34 197 94 / 0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgb(253 164 175 / 0.12), transparent 35%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 mesh-grid opacity-30" />

      <div className="relative z-[1] mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Make your academic life simpler.
        </h2>
        <p className="mt-4 text-lg text-primary-light/85">
          Download the Department of Computer Science app and keep everything
          important in one place.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <DownloadButton
            size="lg"
            variant="light"
            className="w-full sm:w-auto"
          />
          <Button
            href="/features"
            variant="outline"
            size="lg"
            className="w-full border-white/50 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
          >
            Explore Features
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
