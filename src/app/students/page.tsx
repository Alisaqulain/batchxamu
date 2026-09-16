import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Student Academic Guide",
  description:
    "Essential guide for Computer Science students at AMU: navigating the 75% attendance rule, daily lab schedules, lecture rooms, and examination preparation.",
  path: "/students",
});

const survivalChecklist = [
  {
    title: "1. The 75% Attendance Safe-Margin Habit",
    desc: "At Aligarh Muslim University, failing to meet the 75 percent threshold in theory or practical labs leads to detention from semester examinations. Check your BATCH X attendance margin every Friday afternoon.",
    tip: "Always maintain a buffer of at least 3 to 4 classes in each subject before scheduling travel or personal leave.",
  },
  {
    title: "2. Verify Laboratory Allocations Daily",
    desc: "Laboratory sessions (like Operating Systems or Database Management) run for 2 consecutive hours. While lectures take place in CS-01 through CS-04, labs require assembling in either the Unix Lab or Systems Lab.",
    tip: "Check the app notifications at 08:30 AM for any morning room relocations posted by instructors.",
  },
  {
    title: "3. Keep Study Notes Saved Offline",
    desc: "Mobile network connectivity inside certain campus seminar halls and departmental basements can be intermittent. Download core syllabus units and lab manuals to offline storage.",
    tip: "BATCH X automatically caches your timetable and favorited PDF units locally on your Android device.",
  },
  {
    title: "4. Systematic PYQ Practice",
    desc: "Aligarh Muslim University semester examinations emphasize thorough conceptual understanding, algorithmic proofs, and syntax rigor. Practice with previous year question papers available in the app repository.",
    tip: "Focus on 5-year solved papers for Data Structures, Database Systems, and Computer Networks.",
  },
];

export default function StudentsPage() {
  return (
    <>
      <PageHeader
        label="Student Guide"
        title="Everything you need to navigate your semester."
        description="A practical guide for Department of Computer Science students at AMU: attendance compliance, timetable routines, and exam preparation."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Main Survival Manual Grid */}
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="border-b border-border pb-4">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Department Best Practices
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground mt-1">
                  The Four Pillars of Academic Peace of Mind
                </h2>
              </div>

              {survivalChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="ledger-card border border-border bg-surface p-6 sm:p-7"
                >
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>

                  <div className="mt-4 rounded-lg border border-primary/20 bg-primary-light/50 p-3 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-primary-deep font-medium leading-relaxed">
                      <span className="font-bold">Student Tip:</span> {item.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Quick Reference & Download Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Department Lecture Room Quick Key */}
              <div className="ledger-card border border-border bg-surface p-6">
                <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                  <MapPin className="h-4 w-4 text-accent-terracotta" />
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground">
                    Department Room Key
                  </h3>
                </div>

                <div className="space-y-3 font-mono-code text-xs">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-foreground font-semibold">CS-01 & CS-02</span>
                    <span className="text-muted">Ground Floor Lecture Halls</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-foreground font-semibold">CS-03 & CS-04</span>
                    <span className="text-muted">First Floor Lecture Halls</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-foreground font-semibold">Unix Lab (Lab 2)</span>
                    <span className="text-muted">Operating Systems & C++</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground font-semibold">Systems Lab (Lab 1)</span>
                    <span className="text-muted">DBMS SQL & Web Tech</span>
                  </div>
                </div>
              </div>

              {/* Install Terminal Card */}
              <div className="ledger-card border border-primary/30 bg-primary-light/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-primary">
                    Official Mobile App
                  </span>
                  <div className="flex items-center gap-1.5 font-mono-code text-[10px]">
                    <span className="rounded bg-primary text-white px-1.5 py-0.5 font-bold">Android Live</span>
                    <span className="rounded bg-surface text-muted border border-border px-1.5 py-0.5 font-medium">iOS In Dev</span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mt-2">
                  Get AMU BATCH X
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Keep your daily schedule, 75 percent attendance record, and verified department notices on your phone. Direct APK is available for Android; iOS edition is currently in active development.
                </p>

                <div className="mt-5">
                  <DownloadButton size="md" fullWidth />
                </div>

                <div className="mt-4 pt-3 border-t border-primary/20 text-center">
                  <Link
                    href="/features"
                    className="font-mono-code text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View all app capabilities</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
