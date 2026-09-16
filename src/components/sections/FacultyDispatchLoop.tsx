import {
  Users,
  BellRing,
  Smartphone,
  ArrowRight,
  Layers,
  CheckCircle2,
  Server,
} from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Link from "next/link";

const pipelineStages = [
  {
    stage: "01",
    actor: "Faculty Instructor",
    title: "Class Reschedule or Notice",
    description:
      "A professor logs into the portal to reschedule an afternoon lecture or notify the batch about an alternate lab hall.",
    icon: Users,
    channel: "Web Dispatch Interface",
    statusBadge: "Instructor Entry",
  },
  {
    stage: "02",
    actor: "API Gateway",
    title: "Central Verification & Sync",
    description:
      "The change is verified with reason and timestamp, updating the department centralized timetable database.",
    icon: Server,
    channel: "Central Cloud Service",
    statusBadge: "Automated Ledger",
  },
  {
    stage: "03",
    actor: "Push Alert Broadcast",
    title: "Sub-5s Priority Notification",
    description:
      "A priority notification is dispatched to enrolled student phones, preventing wasted commutes across campus.",
    icon: BellRing,
    channel: "Push Alert Engine",
    statusBadge: "Instant Alert",
  },
  {
    stage: "04",
    actor: "Student Application",
    title: "Timetable Dynamic Adjustment",
    description:
      "The student mobile app dynamically adjusts the day schedule and marks the lecture as rescheduled with room details.",
    icon: Smartphone,
    channel: "Local SQLite Cache",
    statusBadge: "Offline Updated",
  },
];

export function FacultyDispatchLoop() {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-accent-terracotta/30 bg-accent-red-light px-2.5 py-1 font-mono-code text-xs font-semibold text-accent-terracotta">
              <Layers className="h-3.5 w-3.5" />
              <span>FACULTY & CLASSROOM DISPATCH PIPELINE</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Closing the loop between faculty and students.
            </h2>
            <p className="mt-2 text-base text-muted">
              Planned faculty dispatch workflow designed to eliminate empty classroom visits and informal WhatsApp forwards.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <StatusBadge status="coming-soon" />
            <Link
              href="/teachers"
              className="font-mono-code text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>Faculty specifications</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Connected Architectural Pipeline Diagram */}
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.stage}
                  className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-2xs hover:border-primary/40 transition-colors"
                >
                  {/* Top Step Meta */}
                  <div>
                    <div className="flex items-center justify-between border-b border-border/80 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary font-mono-code text-xs font-bold text-white">
                          {stage.stage}
                        </span>
                        <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                          {stage.actor}
                        </span>
                      </div>
                      <span className="rounded bg-surface-muted px-2 py-0.5 font-mono-code text-[11px] text-muted border border-border">
                        {stage.statusBadge}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary border border-primary/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground leading-tight">
                          {stage.title}
                        </h3>
                        <span className="font-mono-code text-[11px] text-muted">
                          {stage.channel}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-muted">
                      {stage.description}
                    </p>
                  </div>

                  {/* Flow Connector Arrow to Next Node */}
                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface border border-border text-primary shadow-2xs">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Connection Status */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-3 font-mono-code text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      <span>Stage Verified</span>
                    </span>
                    <span>Sub-10s Loop</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Pipeline Note */}
        <div className="mt-8 rounded-xl border border-primary/20 bg-primary-light/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-code text-primary-deep">
          <span>
            System Phase 2: Currently in active staging with department faculty coordinators.
          </span>
          <span className="font-bold text-primary">
            Direct API integration with Aligarh Muslim University timetable servers.
          </span>
        </div>

      </div>
    </section>
  );
}
