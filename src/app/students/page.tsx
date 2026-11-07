import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "For Students",
  description:
    "A practical guide for Computer Science students at AMU: the 75% attendance rule, lab schedules, lecture rooms and exam preparation.",
  path: "/students",
});

const survivalChecklist = [
  {
    title: "1. Check your attendance every week",
    desc: "At AMU, falling below 75% in a theory or lab subject can stop you from sitting the semester exam. A quick weekly look in the app is enough.",
    tip: "Keep 3 or 4 classes spare in each subject before planning travel or leave.",
  },
  {
    title: "2. Check where your lab is",
    desc: "Labs like Operating Systems or DBMS run for two hours. Lectures are in CS-01 to CS-04, but labs are in the Unix Lab or the Systems Lab.",
    tip: "Look at your notifications in the morning in case a room has changed.",
  },
  {
    title: "3. Save notes for offline use",
    desc: "Signal is weak in some halls and labs. Download the units and lab manuals you need ahead of time.",
    tip: "The app keeps your timetable and saved notes on the phone automatically.",
  },
  {
    title: "4. Practise with past papers",
    desc: "Semester exams test concepts, proofs and exact syntax. Previous year papers are the best way to see what gets asked.",
    tip: "Start with the last five years of Data Structures, DBMS and Computer Networks papers.",
  },
];

export default function StudentsPage() {
  return (
    <>
      <PageHeader
        label="For students"
        title="A few things that make the semester easier"
        description="Practical tips for Computer Science students at AMU on attendance, labs and exams."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Main Survival Manual Grid */}
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="border-b border-border pb-4">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Tips
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground mt-1">
                  Four habits worth having
                </h2>
              </div>

              {survivalChecklist.map((item, idx) => (
                <div
                  key={idx}
                  data-reveal className="ledger-card border border-border bg-surface p-6 sm:p-7"
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
                      <span className="font-bold">Tip:</span> {item.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Quick Reference & Download Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Department Lecture Room Quick Key */}
              <div data-reveal className="ledger-card border border-border bg-surface p-6">
                <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                  <MapPin className="h-4 w-4 text-accent-terracotta" />
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground">
                    Rooms
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
              <div data-reveal className="ledger-card border border-primary/30 bg-primary-light/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-primary">
                    The app
                  </span>
                  <div className="flex items-center gap-1.5 font-mono-code text-[10px]">
                    <span className="rounded bg-primary text-white px-1.5 py-0.5 font-bold">Android</span>
                    <span className="rounded bg-surface text-muted border border-border px-1.5 py-0.5 font-medium">iOS coming later</span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mt-2">
                  Get AMU BATCH X
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Your timetable, attendance and department notices on your phone. Available for Android now; iOS is in development.
                </p>

                <div className="mt-5">
                  <DownloadButton size="md" fullWidth />
                </div>

                <div className="mt-4 pt-3 border-t border-primary/20 text-center">
                  <Link
                    href="/features"
                    className="font-mono-code text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>See all features</span>
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
