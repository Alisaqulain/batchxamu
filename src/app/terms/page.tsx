import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { FileText, CheckCircle2, AlertTriangle, BookOpen, Shield, Code2 } from "lucide-react";

export const metadata = createMetadata({
  title: "Terms & Conditions · AMU BATCH X",
  description:
    "Terms and conditions for using the AMU BATCH X mobile application and web platform for Department of Computer Science students.",
  path: "/terms",
});

const termsSections = [
  {
    icon: CheckCircle2,
    title: "1. Acceptance of Platform Terms",
    subtitle: "Mutual Agreement for Academic Utilities",
    content:
      "By downloading, installing, or browsing the AMU BATCH X mobile application or official website (www.amubatchx.app), you agree to be bound by these terms. If you disagree with any portion of these provisions, you should refrain from using the application and platform.",
  },
  {
    icon: BookOpen,
    title: "2. Purpose & Student Developer Scope",
    subtitle: "Department of Computer Science Academic Initiative",
    content:
      "AMU BATCH X is an independent academic companion engineered by postgraduate computer science students at Aligarh Muslim University (AMU). While designed specifically to address daily scheduling and attendance tracking friction within the Department of Computer Science, it is a student-led engineering initiative and does not supplant formal university notifications unless explicitly stated by faculty administration.",
  },
  {
    icon: AlertTriangle,
    title: "3. Verification of Critical University Circulars",
    subtitle: "Advisory on Examination & Admit Card Guidelines",
    content:
      "While BATCH X employs automated feeds and student coordinators to reflect class room shifts (CS-01 to CS-04, Unix Labs) and official deadlines with high reliability, students must cross-verify critical university examination schedules, fee deadlines, and formal admit card rules against official university circulars posted on department notice boards and amu.ac.in.",
  },
  {
    icon: Shield,
    title: "4. Attendance Calculator Functionality",
    subtitle: "75% Rule Compliance as an Informational Tool",
    content:
      "The 75% attendance engine operates on local mathematical tallying based on the user's manual inputs. It is an organizational aid designed to warn students before entering debarment thresholds. Official exam eligibility remains determined solely by the faculty registers maintained by course instructors.",
  },
  {
    icon: Code2,
    title: "5. Intellectual Property & Open Collaboration",
    subtitle: "Student Engineering Ownership & Study Vault Notes",
    content:
      "The AMU BATCH X software source code, interface designs, 3D brand assets, and mobile APK builds are authored by the student development team. Solved lab programs, syllabus guides, and previous year examination papers belong to their respective student and faculty authors and are shared for educational and non-commercial research purposes.",
  },
  {
    icon: FileText,
    title: "6. Modifications to Terms",
    subtitle: "Platform Evolution & Semester Updates",
    content:
      "These terms may be updated from time to time to accommodate new features, Android platform policy revisions, or academic calendar adjustments. Continued use of AMU BATCH X constitutes acceptance of revised terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Operational Guidelines"
        title="Terms & Conditions"
        description="Last updated: March 2026. Clear, transparent guidelines governing the use of the AMU BATCH X platform and student utilities."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Key Advisory Card */}
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-surface p-6 sm:p-8 mb-12 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">
                  Academic Platform Agreement
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                  AMU BATCH X was created to support Computer Science students with accurate daily timetables, instant room alerts, and attendance math. By using this service, you acknowledge that all utilities are provided as-is to foster academic collaboration and semester organization.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Articles Grid */}
          <div className="mx-auto max-w-4xl space-y-6">
            {termsSections.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="ledger-card border border-border bg-surface p-6 sm:p-8 transition-all hover:border-border-light"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary-light text-primary mt-1">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="font-mono-code text-xs font-semibold text-primary mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
