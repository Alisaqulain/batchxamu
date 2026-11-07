import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { FileText, CheckCircle2, AlertTriangle, BookOpen, Shield, Code2 } from "lucide-react";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the AMU BATCH X mobile application and web platform for Department of Computer Science students.",
  path: "/terms",
});

const termsSections = [
  {
    icon: CheckCircle2,
    title: "1. Accepting these terms",
    subtitle: "Applies to the app and this website",
    content:
      "By downloading or using the AMU BATCH X app or this website (www.amubatchx.app), you agree to these terms. If you don't agree, please don't use the app or website.",
  },
  {
    icon: BookOpen,
    title: "2. What AMU BATCH X is",
    subtitle: "A student project",
    content:
      "AMU BATCH X is an independent app made by postgraduate Computer Science students at Aligarh Muslim University (AMU). It is not an official university service and does not replace official university notices.",
  },
  {
    icon: AlertTriangle,
    title: "3. Check important notices with the university",
    subtitle: "Exams, fees and admit cards",
    content:
      "We try to keep room changes and deadlines accurate, but always confirm exam schedules, fee deadlines and admit card rules against the official notices on the department notice board and amu.ac.in.",
  },
  {
    icon: Shield,
    title: "4. The attendance tracker is a guide",
    subtitle: "Not an official record",
    content:
      "The attendance tracker counts the classes you enter yourself. It helps you keep an eye on the 75% rule, but your exam eligibility is decided only by the official attendance registers kept by your teachers.",
  },
  {
    icon: Code2,
    title: "5. Ownership",
    subtitle: "Code, design and study material",
    content:
      "The AMU BATCH X code, design and app builds are made by the AMU BATCH X team. Lab programs, notes and past papers belong to their original student and faculty authors and are shared for non-commercial study use.",
  },
  {
    icon: FileText,
    title: "6. Changes to these terms",
    subtitle: "Updates",
    content:
      "We may update these terms when the app changes. If you keep using AMU BATCH X after an update, you accept the new terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Terms"
        title="Terms and Conditions"
        description="Last updated: March 2026. The rules for using the AMU BATCH X app and website."
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
                  In short
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                  AMU BATCH X is a free student project, provided as-is. Use it to stay organized, but treat official university notices as final.
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
                  data-reveal className="ledger-card border border-border bg-surface p-6 sm:p-8 transition-all hover:border-border-light"
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
