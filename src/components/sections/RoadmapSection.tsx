import { referralCard, roadmapPhases } from "@/data/roadmap";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ChevronDown } from "lucide-react";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Roadmap"
          title="More than an app. A growing academic platform."
          description="MCA 26 is evolving from a student app into a comprehensive department platform."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {roadmapPhases.map((phase, i) => (
            <div key={phase.id} className="relative">
              <article className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                  <StatusBadge status={phase.status} />
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted before:mr-2 before:text-primary before:content-['•']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              {i < roadmapPhases.length - 1 && (
                <ChevronDown
                  className="mx-auto my-2 hidden h-5 w-5 text-primary/40 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-border bg-background p-5 sm:max-w-sm">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h4 className="font-semibold text-foreground">{referralCard.title}</h4>
              <p className="mt-1 text-sm text-muted">{referralCard.description}</p>
            </div>
            <StatusBadge status={referralCard.status} />
          </div>
        </div>
      </div>
    </section>
  );
}
