import { ArrowRight, Check } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const academicPrograms = [
  {
    id: "mca",
    code: "MCA",
    degree: "Master of Computer Applications",
    level: "Postgraduate · 2 years",
    focus: "Fully supported: timetable, labs, attendance, notices and notes.",
    status: "live" as const,
  },
  {
    id: "msc",
    code: "M.Sc. CS",
    degree: "Master of Science in Computer Science",
    level: "Postgraduate · 2 years",
    focus: "Department notices work today. Timetable and subjects are being added.",
    status: "coming-soon" as const,
  },
  {
    id: "bsc",
    code: "B.Sc. (Hons.)",
    degree: "B.Sc. in Computer Science & Applications",
    level: "Undergraduate · 3 years",
    focus: "Planned after M.Sc.",
    status: "planned" as const,
  },
  {
    id: "phd",
    code: "Ph.D. CS",
    degree: "Ph.D. in Computer Science",
    level: "Doctoral",
    focus: "Planned. Likely limited to notices and the faculty directory.",
    status: "planned" as const,
  },
];

const roadmapMilestones = [
  {
    phase: "Student app",
    timeframe: "Available now",
    status: "live" as const,
    deliverables: [
      "Theory and lab attendance against the 75% rule",
      "Weekly timetable with rooms and labs",
      "Department notices with push notifications",
      "Notes and previous year papers",
      "Offline storage and dark theme",
    ],
  },
  {
    phase: "Teacher tools",
    timeframe: "In development",
    status: "coming-soon" as const,
    deliverables: [
      "Web page for teachers to move classes and change rooms",
      "Push notifications to students when a class changes",
      "Marking attendance and sharing lab manuals",
      "M.Sc. Computer Science support",
    ],
  },
  {
    phase: "Practice and more programs",
    timeframe: "Planned",
    status: "planned" as const,
    deliverables: [
      "Timed subject-wise practice tests",
      "Practice with previous year papers",
      "Mentorship from senior students for placements and projects",
      "Support for every program in the department",
    ],
  },
];

export function DepartmentArchitecture() {
  return (
    <section id="department" className="scroll-mt-20 border-b border-border bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div data-reveal className="flex flex-col justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-primary">
              Programs
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Starting with MCA, then the rest of the department
            </h2>
            <p className="mt-2 text-base text-muted">
              MCA is fully supported today. Other programs in the Department of Computer Science are being added one at a time.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 font-mono-code text-xs font-semibold text-primary hover:underline"
            >
              <span>All programs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Academic Degree Tier Matrix */}
        <div data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicPrograms.map((prog) => (
            <div
              key={prog.id}
              data-tilt="7" className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-2xs hover:border-primary/40"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                  <span className="font-mono-code text-base font-bold text-primary">
                    {prog.code}
                  </span>
                  <StatusBadge status={prog.status} />
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {prog.degree}
                  </h3>
                  <span className="font-mono-code text-xs text-muted block mt-0.5">
                    {prog.level}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {prog.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="mt-16 border-t border-border pt-12">
          <div data-reveal className="mb-8">
            <span className="font-mono-code text-xs font-bold text-primary">
              ROADMAP
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">
              What&apos;s done and what&apos;s next
            </h3>
          </div>

          <div className="relative">
            {/* Connecting Timeline Track Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-border z-0" aria-hidden="true" />

            <div data-reveal-stagger className="grid gap-6 lg:grid-cols-3 relative z-10">
              {roadmapMilestones.map((phase, phaseIdx) => (
                <div
                  key={phase.phase}
                  data-tilt="5" className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs hover:border-primary/40"
                >
                  <div>
                    {/* Step Sequence Badge */}
                    <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono-code text-xs">
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-lg font-bold shadow-2xs text-xs",
                          phase.status === "live"
                            ? "bg-primary text-white"
                            : "bg-surface-muted text-muted border border-border"
                        )}>
                          0{phaseIdx + 1}
                        </span>
                        <span className="font-bold text-foreground">{phase.phase}</span>
                      </div>
                      <span className="text-muted">{phase.timeframe}</span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {phase.deliverables.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-2 text-xs text-muted font-mono-code leading-relaxed"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border/70 pt-3">
                    <StatusBadge status={phase.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
