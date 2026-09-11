import { appBenefits } from "@/data/roadmap";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function AppBenefitsSection() {
  return (
    <section className="border-y border-border bg-primary-light/25 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Why students will keep it installed.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {appBenefits.map((benefit, i) => (
            <AnimateOnScroll key={benefit.title} delay={i * 50}>
              <div className="surface-card h-full p-5">
                <div className="mb-3 h-1 w-8 rounded-full bg-primary-bright" />
                <h3 className="font-semibold text-primary">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted">{benefit.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-10 text-center">
          <DownloadButton size="lg" />
        </div>
      </div>
    </section>
  );
}
