import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "About AMU BATCH X",
  description:
    "Learn about the origins, student engineering philosophy, and department expansion roadmap of AMU BATCH X at Aligarh Muslim University.",
  path: "/about",
});

const principles = [
  {
    title: "Grounded in Daily Campus Reality",
    desc: "Every feature solves a genuine administrative or academic friction point experienced by Computer Science students at AMU: attendance margin calculation, lab room slotting, or urgent class relocations.",
  },
  {
    title: "Offline-First Reliability",
    desc: "We prioritize local caching. Lecture halls and laboratory basements should never prevent you from checking your daily schedule or accessing your saved study notes.",
  },
  {
    title: "Student Privacy & Respect",
    desc: "The platform contains zero advertisements, zero third-party data tracking, and no monetization barriers on foundational syllabus notes and question papers.",
  },
  {
    title: "Transparent Department Positioning",
    desc: "We are honest about our identity: an organic student engineering project designed for our department community, maintaining clear labels on what is live today versus what is on the roadmap.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About the Project"
        title="Software built to elevate student life in Computer Science."
        description="The story, philosophy, and future roadmap of AMU BATCH X at the Department of Computer Science, Aligarh Muslim University."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-10">
              <div className="ledger-card border border-border bg-surface p-6 sm:p-10">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  The Origin
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground mt-2 sm:text-3xl">
                  Why MCA 2026 students built AMU BATCH X
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    AMU BATCH X is a student-focused digital academic platform built to simplify academic coordination and access to essential resources for the Department of Computer Science community in Aligarh.
                  </p>
                  <p>
                    University education at the Department of Computer Science, Aligarh Muslim University, is intellectually demanding. Students juggle theoretical algorithms, intense database query tuning, multi-hour Unix operating system laboratories, and continuous internal evaluations.
                  </p>
                  <p>
                    Yet for years, the logistics of student life remained fragmented across informal WhatsApp groups, lost PDF circulars, and crumpled paper schedules. Students were forced to constantly ask: &quot;Which room is the OS lab in today?&quot;, &quot;Has the 2 PM lecture been rescheduled?&quot;, or &quot;Am I safely above the 75 percent attendance threshold before mid-sems?&quot;
                  </p>
                  <p>
                    AMU BATCH X was built by students Ali Saqulain, Sameer Ahmad, and Okasha Ansari to solve this fragmentation directly. The platform provides:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 font-mono-code text-xs text-foreground/90">
                    <li>Daily lecture timetable mapped to department halls CS-01 through CS-04 and Unix Labs</li>
                    <li>75% attendance margin calculation with safe bunk allowance tallies</li>
                    <li>Verified department notice dispatch feed with push alerting</li>
                    <li>Academic vault with course syllabus notes, verified lab implementations, and exam PYQs</li>
                    <li>Direct offline mobile application access with zero tracking or ads</li>
                  </ul>
                </div>
              </div>

              {/* Core Principles */}
              <div className="space-y-4">
                <div className="border-b border-border pb-3">
                  <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                    Core Principles
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1">
                    How We Make Engineering Decisions
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {principles.map((p, idx) => (
                    <div
                      key={idx}
                      className="ledger-card border border-border bg-surface p-6 flex flex-col justify-between"
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
                    Institutional Relationship & Transparency
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted">
                  AMU BATCH X is an independent digital academic platform built by the student development team for the Department of Computer Science community. It is not an official university-operated administrative body unless formally authorized. We prioritize accuracy, verify our data against departmental circulars, and maintain strict student privacy standards.
                </p>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Snapshot Card */}
              <div className="ledger-card border border-border bg-surface p-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Project Snapshot
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
                    <span className="text-primary font-bold">v{siteConfig.appVersion} Stable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Release Channel</span>
                    <span className="text-foreground">Direct Android APK</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <DownloadButton size="md" fullWidth />
                </div>
              </div>

              {/* Developer Team Link Card */}
              <div className="ledger-card border border-border bg-surface p-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-muted">
                  The Student Team
                </span>
                <h4 className="font-display text-base font-bold text-foreground mt-2">
                  Meet the Architects
                </h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Discover the developer backgrounds of Ali Saqulain, Sameer Ahmad, and Okasha Ansari.
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
