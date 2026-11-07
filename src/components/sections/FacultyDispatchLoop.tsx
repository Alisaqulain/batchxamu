import {
  Users,
  BellRing,
  Smartphone,
  ArrowRight,
  Server,
} from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Link from "next/link";

const pipelineStages = [
  {
    stage: "01",
    actor: "Teacher",
    title: "Moves a class or posts a notice",
    description:
      "A teacher reschedules a lecture or tells the batch the lab has moved, from a simple web page.",
    icon: Users,
    channel: "Web dashboard",
  },
  {
    stage: "02",
    actor: "Server",
    title: "Timetable is updated",
    description:
      "The change is saved with a reason and time, and the shared timetable is updated.",
    icon: Server,
    channel: "Backend",
  },
  {
    stage: "03",
    actor: "Notification",
    title: "Students are notified",
    description:
      "Students in that class get a push notification, so nobody walks to an empty room.",
    icon: BellRing,
    channel: "Push notification",
  },
  {
    stage: "04",
    actor: "App",
    title: "Timetable shows the change",
    description:
      "The day's timetable in the app shows the class as moved, with the new time and room.",
    icon: Smartphone,
    channel: "Android app",
  },
];

export function FacultyDispatchLoop() {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div data-reveal className="flex flex-col justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-primary">
              For teachers (planned)
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Class changes that reach every student
            </h2>
            <p className="mt-2 text-base text-muted">
              We&apos;re working on tools for teachers so class changes go straight to students instead of through forwarded messages.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <StatusBadge status="coming-soon" />
            <Link
              href="/teachers"
              className="font-mono-code text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              <span>Teacher tools</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Connected Architectural Pipeline Diagram */}
        <div className="mt-12">
          <div data-reveal-stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.stage}
                  data-tilt="7" className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-2xs hover:border-primary/40"
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
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
