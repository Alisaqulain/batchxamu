import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getLatestRelease } from "@/lib/app-version";
import { formatVersion } from "@/lib/utils";

export const metadata = createMetadata({
  title: "About AMU BATCH X",
  description:
    "Why AMU BATCH X exists, who builds it, and how it helps Computer Science students at Aligarh Muslim University keep track of classes, attendance and notices.",
  path: "/about",
});

const principles = [
  {
    title: "Built around real problems",
    desc: "Each feature started as something we kept asking each other: how many classes can I miss, which lab is it today, did that lecture move?",
  },
  {
    title: "Works offline",
    desc: "Your timetable, attendance and saved notes are stored on the phone, so weak signal in a lab doesn't stop you from checking them.",
  },
  {
    title: "No ads, no tracking",
    desc: "There are no ads or third-party trackers, and notes and question papers are free.",
  },
  {
    title: "Clear about what's live",
    desc: "This is a student project. We label what works today and what is still planned.",
  },
];

export default async function AboutPage() {
  const release = await getLatestRelease();

  return (
    <>
      <PageHeader
        label="About the Project"
        title="A student-built app for the Department of Computer Science"
        description="Why we built AMU BATCH X, what it does, and who works on it."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-10">
              <div data-reveal className="ledger-card border border-border bg-surface p-6 sm:p-10">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Background
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground mt-2 sm:text-3xl">
                  Why MCA 2026 students built AMU BATCH X
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    AMU BATCH X is an app for students of the Department of Computer Science at Aligarh Muslim University.
                  </p>
                  <p>
                    Timetables, notices and notes were spread across WhatsApp groups, PDFs and printouts. We kept asking the same questions: which room is the OS lab in today, has the 2 PM lecture moved, am I still above 75% attendance?
                  </p>
                  <p>
                    Ali Saqulain and Sameer Ahmad built AMU BATCH X to put all of that in one place. It includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 font-mono-code text-xs text-foreground/90">
                    <li>Daily timetable with rooms and labs</li>
                    <li>Attendance tracking against the 75% requirement, including how many classes you can still miss</li>
                    <li>Department notices with push notifications</li>
                    <li>Notes, lab programs and previous year question papers</li>
                    <li>Offline access, with no ads or tracking</li>
                  </ul>
                </div>
              </div>

              {/* Core Principles */}
              <div className="space-y-4">
                <div className="border-b border-border pb-3">
                  <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                    Principles
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1">
                    What guides the app
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {principles.map((p, idx) => (
                    <div
                      key={idx}
                      data-reveal className="ledger-card border border-border bg-surface p-6 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-display text-base font-bold text-foreground">
                          {p.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institutional Transparency */}
              <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2 text-accent-terracotta">
                  <ShieldAlert className="h-5 w-5 shrink-0" />
                  <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider">
                    Not an official university app
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted">
                  AMU BATCH X is an independent student project. It is not run by Aligarh Muslim University. We check information against department circulars, but the official notice is always final.
                </p>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Snapshot Card */}
              <div data-reveal className="ledger-card border border-border bg-surface p-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  At a glance
                </span>

                <div className="mt-4 space-y-3 font-mono-code text-xs">
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Initiative</span>
                    <span className="text-foreground font-bold">MCA 2026 Batch</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Institution</span>
                    <span className="text-foreground">Aligarh Muslim University</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Department</span>
                    <span className="text-foreground">Computer Science</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted">Current Version</span>
                    <span className="text-primary font-bold">{formatVersion(release.version)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Release Channel</span>
                    <span className="text-foreground">Android APK</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <DownloadButton size="md" fullWidth />
                </div>
              </div>

              {/* Developer Team Link Card */}
              <div data-reveal className="ledger-card border border-border bg-surface p-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-muted">
                  Team
                </span>
                <h4 className="font-display text-base font-bold text-foreground mt-2">
                  Meet the developers
                </h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Ali Saqulain and Sameer Ahmad build and maintain AMU BATCH X.
                </p>

                <div className="mt-4">
                  <Link
                    href="/developers"
                    className="font-mono-code text-xs font-bold text-primary hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>View developer profiles</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
