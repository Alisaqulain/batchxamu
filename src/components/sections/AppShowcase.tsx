import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const screens = [
  { title: "Dashboard", accent: "bg-primary/15" },
  { title: "Attendance", accent: "bg-primary-light" },
  { title: "Timetable", accent: "bg-slate-100" },
  { title: "Notices", accent: "bg-accent-red-light" },
  { title: "Notes", accent: "bg-primary-light/80" },
];

export function AppShowcase() {
  return (
    <section className="overflow-hidden border-y border-border bg-[#f1f4f0] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Product Preview"
          title="See the app in action."
          description="A digital platform for the Department of Computer Science — starting with the features students use every day."
        />

        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] lg:justify-center lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {screens.map((screen, i) => (
            <AnimateOnScroll key={screen.title} delay={i * 70}>
              <div
                className={`group relative min-w-[200px] flex-shrink-0 snap-center rounded-[1.75rem] border border-border ${screen.accent} p-3 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-2 sm:min-w-[220px] ${
                  i === 2 ? "lg:scale-105 lg:shadow-[var(--shadow-lift)]" : "lg:mt-4"
                }`}
                style={{ zIndex: screens.length - Math.abs(i - 2) }}
              >
                <div className="rounded-[1.35rem] bg-[#07110c] p-4">
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-primary-bright">
                    {screen.title}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 rounded bg-[#1f3428]" />
                    <div className="h-2 w-full rounded bg-[#15241c]" />
                    <div className="h-2 w-5/6 rounded bg-[#15241c]" />
                    <div className="mt-3 grid grid-cols-2 gap-1.5">
                      <div className="h-8 rounded-lg bg-primary/25" />
                      <div className="h-8 rounded-lg bg-[#15241c]" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          UI mockups — sample demo screens
        </p>
      </div>
    </section>
  );
}
