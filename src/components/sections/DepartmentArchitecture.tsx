import { ArrowRight, Check, GraduationCap, Building2 } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const academicPrograms = [
  {
    id: "mca",
    code: "MCA",
    degree: "Master of Computer Applications",
    level: "Postgraduate · 2-Year Program",
    focus: "Software Engineering, Full-Stack Systems, Database Architecture & Distributed Algorithms.",
    status: "live" as const,
    activeBadge: "Active Flagship Release (v1.0)",
    stats: "Full Daily Schedule & Lab Sync",
  },
  {
    id: "msc",
    code: "M.Sc. CS",
    degree: "Master of Science in Computer Science",
    level: "Postgraduate · Research & Specializations",
    focus: "Specialization pathways including Artificial Intelligence, Machine Learning, Cyber Security & Digital Forensics.",
    status: "coming-soon" as const,
    activeBadge: "Curriculum Staged",
    stats: "Shared Department Infrastructure",
  },
  {
    id: "bsc",
    code: "B.Sc. (Hons.)",
    degree: "B.Sc. in Computer Science & Applications",
    level: "Undergraduate · Core Computing",
    focus: "Foundational programming, discrete mathematics, computer architecture, and systems engineering.",
    status: "planned" as const,
    activeBadge: "Roadmap Expansion",
    stats: "Multi-Course Schema Prepared",
  },
  {
    id: "phd",
    code: "Ph.D. CS",
    degree: "Doctoral Research Program",
    level: "Doctoral · Advanced Computing",
    focus: "Cutting-edge computer science research, peer-reviewed publications, and advanced laboratory investigations.",
    status: "planned" as const,
    activeBadge: "Department Collaboration",
    stats: "Department Directory Integration",
  },
];

const roadmapMilestones = [
  {
    phase: "Phase 1: Student App v1.0",
    timeframe: "Current Release",
    status: "live" as const,
    deliverables: [
      "Theory & lab attendance tracking with 75% AMU cutoff calculation",
      "Interactive weekly timetable with lecture halls and lab allocations",
      "Verified department notice dispatch feed with push alerts",
      "Curated study notes library and previous year question bank",
      "Offline-first local storage and high-contrast OLED dark theme",
    ],
  },
  {
    phase: "Phase 2: Faculty Dispatch Portal",
    timeframe: "In Active Staging",
    status: "coming-soon" as const,
    deliverables: [
      "Instructor web interface for instant class rescheduling and venue updates",
      "Sub-5 second push notifications directly to student smartphones",
      "Direct attendance sign-off and lab manual distribution",
      "Curriculum expansion to M.Sc. Computer Science courses",
    ],
  },
  {
    phase: "Phase 3: Academic Tools & Research",
    timeframe: "Planned",
    status: "planned" as const,
    deliverables: [
      "Subject-wise revision engine with timed practice modules",
      "Previous year semester paper practice with department rank insights",
      "Senior student mentorship hub for placement and project guidance",
      "Comprehensive rollout across all computing degrees in the department",
    ],
  },
];

export function DepartmentArchitecture() {
  return (
    <section id="department" className="scroll-mt-20 border-b border-border bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary-light px-2.5 py-1 font-mono-code text-xs font-semibold text-primary">
              <Building2 className="h-3.5 w-3.5" />
              <span>DEPARTMENT OF COMPUTER SCIENCE · AMU</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Engineered for the Department of Computer Science ecosystem.
            </h2>
            <p className="mt-2 text-base text-muted">
              Built on a multi-program database architecture designed to support students, faculty coordinators, and research scholars across every academic tier in computing.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 font-mono-code text-xs font-semibold text-primary hover:underline"
            >
              <span>View program specifications</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Academic Degree Tier Matrix */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicPrograms.map((prog) => (
            <div
              key={prog.id}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-2xs hover:border-primary/40 transition-colors"
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

              <div className="mt-6 border-t border-border/70 pt-3 font-mono-code text-xs text-primary font-semibold flex items-center justify-between">
                <span>{prog.stats}</span>
                <GraduationCap className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Three-Phase Platform Evolution Roadmap */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="mb-8">
            <span className="font-mono-code text-xs font-bold text-primary">
              PLATFORM LIFECYCLE & MILESTONES
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">
              Engineering Progression Timeline
            </h3>
            <p className="mt-1 text-sm text-muted">
              Chronological milestones tracking the architecture from current student client to department-wide research rollout.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Timeline Track Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-border z-0" aria-hidden="true" />

            <div className="grid gap-6 lg:grid-cols-3 relative z-10">
              {roadmapMilestones.map((phase, phaseIdx) => (
                <div
                  key={phase.phase}
                  className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs hover:border-primary/40 transition-colors"
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

                  <div className="mt-6 border-t border-border/70 pt-3 font-mono-code text-xs text-primary font-semibold flex items-center justify-between">
                    <span>{phase.status === "live" ? "In Production" : "Planned Release"}</span>
                    <span className={cn(
                      "h-2 w-2 rounded-full",
                      phase.status === "live" ? "bg-primary animate-pulse" : "bg-muted/40"
                    )} />
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
