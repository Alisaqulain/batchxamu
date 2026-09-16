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
  title: "Faculty Platform Blueprint",
  description:
    "Explore the planned AMU BATCH X teacher dashboard: class rescheduling, digital attendance management, notice publishing, and instant student push notifications.",
  path: "/teachers",
});

const facultyModules = [
  {
    title: "Class Rescheduling & Relocation",
    desc: "When a lecture needs to be moved to an alternate time or a lab shifted from Lab 1 to Lab 2, the instructor selects the subject and publishes the change in seconds.",
    impact: "Eliminates empty classroom visits and informal WhatsApp forwards.",
    icon: Calendar,
    tag: "Sub-5s Push Dispatch",
  },
  {
    title: "Digital Attendance Ledger Sync",
    desc: "Facilitates digital recording or verification of classroom attendance, synchronizing directly with students 75 percent eligibility margin.",
    impact: "Zero surprises or discrepancy disputes before semester admit card issuance.",
    icon: ClipboardCheck,
    tag: "Transparent Records",
  },
  {
    title: "Assignment Publishing & Problem Sets",
    desc: "Upload lab problem sets, project guidelines, and deadline parameters directly to enrolled student profiles.",
    impact: "Centralized submission tracking with clear timestamp verification.",
    icon: FileUp,
    tag: "Course Vault Sync",
  },
  {
    title: "High-Priority Department Notices",
    desc: "Broadcast official academic circulars, mid-semester test timings, and make-up lecture alerts directly from course instructors.",
    impact: "Guaranteed student visibility with priority banner alerts on Android.",
    icon: BellRing,
    tag: "Priority Broadcast",
  },
];

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        label="Faculty Portal"
        title="Closing the communication loop on campus."
        description="A dedicated instructor dashboard in active development to connect Department of Computer Science faculty directly with student devices."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Status Ribbon */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-accent-terracotta/30 bg-accent-red-light/60 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <StatusBadge status="coming-soon" />
              <span className="text-xs sm:text-sm font-semibold text-accent-terracotta">
                Phase 2 Architecture: In Active Development
              </span>
            </div>
            <p className="text-xs text-muted">
              Designed in collaboration with MCA students and academic workflows.
            </p>
          </div>

          {/* Planned Modules Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {facultyModules.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="ledger-card border border-border bg-surface p-6 sm:p-8 flex flex-col justify-between"
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
                    <span>Impact: {m.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Workflow Walkthrough */}
          <div className="mt-14 ledger-card border border-border bg-surface p-6 sm:p-8">
            <div className="border-b border-border pb-4 mb-6">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Classroom Dispatch Sequence
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1">
                How an Instructor Dispatches a Schedule Update in 3 Steps
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 font-mono-code text-xs">
              <div className="rounded-xl border border-border bg-surface-muted p-5">
                <span className="text-primary font-bold text-sm block">Step 01</span>
                <h4 className="font-bold text-foreground text-sm mt-2">Select Course & Action</h4>
                <p className="text-muted mt-1 leading-relaxed text-xs">
                  Instructor selects CSM-203 Operating Systems and selects &quot;Reschedule to Thursday 11:00 AM (Room CS-03)&quot;.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted p-5">
                <span className="text-primary font-bold text-sm block">Step 02</span>
                <h4 className="font-bold text-foreground text-sm mt-2">Log Verification</h4>
                <p className="text-muted mt-1 leading-relaxed text-xs">
                  The portal validates venue availability to avoid room conflicts with other department batches and signs the update.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted p-5">
                <span className="text-primary font-bold text-sm block">Step 03</span>
                <h4 className="font-bold text-foreground text-sm mt-2">Instant Student Push</h4>
                <p className="text-muted mt-1 leading-relaxed text-xs">
                  Within 5 seconds, all enrolled students receive a priority notification on their phone, and the weekly timetable refreshes.
                </p>
              </div>
            </div>
          </div>

          {/* Community Suggestion Banner */}
          <div className="mt-10 rounded-2xl border border-border bg-surface-muted p-6 sm:p-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Have feedback on faculty workflows?
              </h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                We are actively interviewing department instructors and batch representatives to refine this tool.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 font-mono-code text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-primary-light/40 transition-colors"
              >
                <span>Share workflow suggestions</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
