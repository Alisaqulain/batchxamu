import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  ClipboardCheck,
  Calendar,
  Bell,
  BookOpen,
  CheckCircle2,
  Check,
} from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Platform Capabilities",
  description:
    "Complete breakdown of AMU BATCH X features including attendance tracking, weekly lecture schedules, department notice dispatch, and study archives.",
  path: "/features",
});

const featureCategories = [
  {
    category: "Schedule & Routing",
    title: "Timetable & Laboratory Venue Slotting",
    description:
      "Engineered to reflect the actual weekly schedule of the Department of Computer Science, Aligarh Muslim University.",
    icon: Calendar,
    points: [
      "Explicit division between theory lectures and multi-hour practical laboratory sessions.",
      "Mapped directly to department rooms: CS-01, CS-02, CS-03, CS-04, Unix Lab, and Systems Lab.",
      "Day-by-day filterable view for quick checks between consecutive lectures.",
      "Cached in local storage on Android so you can check class venues without network signal.",
    ],
    highlight: "Room & Lab Allocation",
  },
  {
    category: "Academic Compliance",
    title: "Attendance & 75% AMU Rule Tracker",
    description:
      "Prevents last-minute examination debarment by maintaining a continuous, verified record of classes attended.",
    icon: ClipboardCheck,
    points: [
      "Separate accounting for theory subjects and lab attendance registers.",
      "Live margin calculation: shows how many classes you can miss while staying above 75 percent.",
      "Early warning alerts when a subject slips into the danger threshold under 80 percent.",
      "All attendance data remains strictly on your smartphone without third-party tracking.",
    ],
    highlight: "Exam Hall Ticket Safety",
  },
  {
    category: "Official Communications",
    title: "Department Notice Dispatch & Alerts",
    description:
      "A clean, noise-free announcement channel that separates critical university notices from casual group chats.",
    icon: Bell,
    points: [
      "Categorized by Exam Circulars, Class Relocations, Deadlines, and University Holidays.",
      "Urgent flags for same-day schedule shifts or instructor advisories.",
      "Push notification support on Android to alert you before you commute to an empty room.",
      "Searchable archive of all past department announcements throughout the semester.",
    ],
    highlight: "Sub-5-Second Alerting",
  },
  {
    category: "Learning Resources",
    title: "Subject Notes, Lab Codes & PYQ Archive",
    description:
      "A structured repository of syllabus resources curated directly by MCA 2026 students.",
    icon: BookOpen,
    points: [
      "Organized strictly by department course codes (CSM-201, CSM-202, CSM-203L, CSM-204).",
      "Unit-by-unit lecture notes collected from verified classroom presentations and textbooks.",
      "Solved practical programs for C++, Java, Unix Shell, and SQL databases.",
      "Past five years of solved examination papers with marking scheme insights.",
    ],
    highlight: "Offline PDF Library",
  },
];

const technicalSpecs = [
  { label: "Target Operating System", value: "Android 8.0 (API Level 26) through Android 15" },
  { label: "Storage Architecture", value: "Offline SQLite & Encrypted Key-Value Cache" },
  { label: "Data Transmission", value: "TLS 1.3 encrypted API dispatch" },
  { label: "Notice Delivery", value: "Priority Push Notification Service" },
  { label: "User Tracking & Ads", value: "Zero trackers, zero advertising, student-first privacy" },
  { label: "Primary Supported Batch", value: "MCA 2026 (Extensible to M.Sc., B.Sc., Ph.D.)" },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        label="Technical Capabilities"
        title="Every feature built for a specific campus requirement."
        description="AMU BATCH X was designed by analyzing where students lose time and information during the academic week."
      />

      {/* Main Features Deep-Dive */}
      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="space-y-12">
            {featureCategories.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.category}
                  className="ledger-card overflow-hidden border border-border bg-surface p-6 sm:p-10"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary-light text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-accent-terracotta">
                            {feat.category}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
                          <StatusBadge status="live" />
                        </div>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-bold text-foreground sm:text-2xl">
                        {feat.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {feat.description}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary-light px-3 py-1.5 font-mono-code text-xs font-semibold text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>{feat.highlight}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-7 rounded-xl border border-border bg-surface-muted p-5 sm:p-6">
                      <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                        Operational Details
                      </h4>
                      <ul className="space-y-3">
                        {feat.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-xs leading-relaxed text-muted sm:text-sm">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check className="h-2.5 w-2.5" />
                            </span>
                            <span className="text-foreground/90">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Specifications Table */}
          <div className="mt-16 ledger-card border border-border bg-surface p-6 sm:p-8">
            <div className="border-b border-border pb-4 mb-6">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                System Engineering
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1">
                Technical Specifications & Architecture
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technicalSpecs.map((spec) => (
                <div key={spec.label} className="rounded-lg border border-border bg-surface-muted p-4">
                  <span className="font-mono-code text-[11px] text-muted block">{spec.label}</span>
                  <span className="text-xs font-bold text-foreground mt-1 block">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Install Banner */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Ready to organize your Computer Science semester?
              </h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                Download the official v{siteConfig.appVersion} APK package for your Android device.
              </p>
            </div>
            <div className="shrink-0">
              <DownloadButton size="lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
