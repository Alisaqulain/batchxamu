import { afterItems, beforeItems } from "@/data/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/lib/site";

export function WhyAppSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything students usually search for. In one place."
          description={`Stop switching between chats, PDFs and notice boards. ${siteConfig.name} brings your academic day into one organised app.`}
        />

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          <AnimateOnScroll>
            <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-accent-coral/35 bg-accent-red-light/40 p-6 sm:p-7">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-coral/20" />
              <p className="relative mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-red">
                Before
              </p>
              <div className="relative flex flex-wrap gap-2">
                {beforeItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-accent-coral/25 bg-surface/90 px-3 py-2 text-sm font-medium text-muted shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-primary/20 bg-primary-light/55 p-6 sm:p-7">
              <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-primary-bright/15" />
              <p className="relative mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                After — One App
              </p>
              <div className="relative flex flex-wrap gap-2">
                {afterItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-primary/15 bg-surface px-3 py-2 text-sm font-medium text-foreground shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-10 text-center">
          <DownloadButton size="lg" />
        </div>
      </div>
    </section>
  );
}
