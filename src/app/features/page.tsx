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
import { getLatestRelease } from "@/lib/app-version";
import { formatVersion } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Features",
  description:
    "What AMU BATCH X does: class timetable, attendance tracking against the 75% rule, department notices, notes and past papers.",
  path: "/features",
});

const featureCategories = [
  {
    category: "Timetable",
    title: "Timetable",
    description:
      "The weekly timetable of the Department of Computer Science, with rooms and labs.",
    icon: Calendar,
    points: [
      "Lectures and lab sessions are shown separately.",
      "Rooms CS-01 to CS-04, the Unix Lab and the Systems Lab.",
      "Switch between days to check your next class.",
      "Saved on your phone, so it works without signal.",
    ],
    highlight: "Rooms and labs",
  },
  {
    category: "Attendance",
    title: "Attendance and the 75% rule",
    description:
      "Keep a running count of your attendance so you don't find out you're short when admit cards come out.",
    icon: ClipboardCheck,
    points: [
      "Theory and lab attendance are counted separately.",
      "Shows how many classes you can still miss and stay above 75%.",
      "Warns you when a subject drops below 80%.",
      "Attendance data stays on your phone.",
    ],
    highlight: "Know where you stand",
  },
  {
    category: "Notices",
    title: "Department notices",
    description:
      "Department notices in one place, separate from group chats.",
    icon: Bell,
    points: [
      "Sorted into exams, room changes, deadlines and holidays.",
      "Same-day changes are marked as urgent.",
      "Push notifications, so you hear about a moved class before you walk there.",
      "Search all notices from the semester.",
    ],
    highlight: "Push notifications",
  },
  {
    category: "Notes",
    title: "Notes, lab programs and past papers",
    description:
      "Study material for each subject, collected by students of the MCA 2026 batch.",
    icon: BookOpen,
    points: [
      "Sorted by course code (CSM-201, CSM-202, CSM-203L, CSM-204).",
      "Unit-wise notes from lectures and textbooks.",
      "Solved lab programs in C++, Java, shell scripting and SQL.",
      "Question papers from the last five years.",
    ],
    highlight: "Available offline",
  },
];

const technicalSpecs = [
  { label: "Android version", value: "Android 8.0 (API 26) or newer" },
  { label: "Storage", value: "On the phone, works offline" },
  { label: "Network", value: "HTTPS only" },
  { label: "Notices", value: "Push notifications" },
  { label: "Ads and tracking", value: "None" },
  { label: "Supported programs", value: "MCA 2026, with more planned" },
];

export default async function FeaturesPage() {
  const release = await getLatestRelease();
  return (
    <>
      <PageHeader
        label="Features"
        title="What AMU BATCH X does"
        description="Four things we needed every day as students: timetable, attendance, notices and notes."
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
                  data-reveal className="ledger-card overflow-hidden border border-border bg-surface p-6 sm:p-10"
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
                        Details
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
                Specs
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1">
                Requirements
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
                Get the app
              </h3>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                Download {formatVersion(release.version)} for Android.
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
