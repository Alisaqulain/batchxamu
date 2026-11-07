import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  BellRing,
  Calendar,
  ClipboardCheck,
  FileUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "For Teachers",
  description:
    "Planned AMU BATCH X tools for teachers: rescheduling classes, marking attendance and sending notices to students.",
  path: "/teachers",
});

const facultyModules = [
  {
    title: "Moving a class",
    desc: "To move a lecture or switch a lab from Lab 1 to Lab 2, pick the subject, set the new time or room, and publish.",
    impact: "Students aren't left waiting in an empty room.",
    icon: Calendar,
    tag: "Timetable",
  },
  {
    title: "Attendance",
    desc: "Mark or confirm attendance digitally. Students see the same numbers in their app.",
    impact: "Fewer disputes when admit cards are issued.",
    icon: ClipboardCheck,
    tag: "Attendance",
  },
  {
    title: "Assignments",
    desc: "Share lab problem sets, project guidelines and deadlines with the class.",
    impact: "Everyone gets the same deadline, with a record of when it was posted.",
    icon: FileUp,
    tag: "Assignments",
  },
  {
    title: "Notices",
    desc: "Send circulars, mid-semester test timings and extra class announcements to your students.",
    impact: "Urgent notices arrive as push notifications.",
    icon: BellRing,
    tag: "Notices",
  },
];

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        label="For teachers"
        title="Tools for teachers (in development)"
        description="We're building a simple dashboard for teachers in the Department of Computer Science to update classes, attendance and notices. It isn't available yet."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Status Ribbon */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-accent-terracotta/30 bg-accent-red-light/60 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <StatusBadge status="coming-soon" />
              <span className="text-xs sm:text-sm font-semibold text-accent-terracotta">
                Not available yet
              </span>
            </div>
            <p className="text-xs text-muted">
              Planned features are listed below and may change.
            </p>
          </div>

          {/* Planned Modules Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {facultyModules.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  data-reveal className="ledger-card border border-border bg-surface p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary border border-primary/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono-code text-[11px] font-bold text-primary">
                        {m.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                      {m.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-6 rounded-lg bg-surface-muted p-3 border border-border/80 text-xs text-foreground font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{m.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Workflow Walkthrough */}
          <div className="mt-14 ledger-card border border-border bg-surface p-6 sm:p-8">
            <div className="border-b border-border pb-4 mb-6">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Example
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1">
                Moving a class in three steps
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 font-mono-code text-xs">
              <div className="rounded-xl border border-border bg-surface-muted p-5">
                <span className="text-primary font-bold text-sm block">Step 01</span>
                <h4 className="font-bold text-foreground text-sm mt-2">Pick the class</h4>
                <p className="text-muted mt-1 leading-relaxed text-xs">
                  For example, CSM-203 Operating Systems, moved to Thursday 11:00 AM in CS-03.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted p-5">
                <span className="text-primary font-bold text-sm block">Step 02</span>
                <h4 className="font-bold text-foreground text-sm mt-2">Check the room</h4>
                <p className="text-muted mt-1 leading-relaxed text-xs">
                  The dashboard checks that the room isn&apos;t already booked by another batch.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted p-5">
                <span className="text-primary font-bold text-sm block">Step 03</span>
                <h4 className="font-bold text-foreground text-sm mt-2">Students are notified</h4>
                <p className="text-muted mt-1 leading-relaxed text-xs">
                  Students in that class get a notification and their timetable updates.
                </p>
              </div>
            </div>
          </div>

          {/* Community Suggestion Banner */}
          <div className="mt-10 rounded-2xl border border-border bg-surface-muted p-6 sm:p-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Are you a teacher in the department?
              </h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                We&apos;d like to hear what would actually help you before we build it.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 font-mono-code text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-primary-light/40 transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
