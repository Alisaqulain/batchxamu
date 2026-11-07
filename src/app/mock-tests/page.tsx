import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { mockTestFreeFeatures, mockTestPremiumFeatures } from "@/data/mockTests";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Clock,
  HelpCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Mock Tests & Practice",
  description:
    "Planned mock tests for Computer Science students at AMU: subject tests, previous year questions and timed practice exams.",
  path: "/mock-tests",
});

const subjectTestRoster = [
  {
    code: "CSM-201",
    subject: "Data Structures & Algorithms",
    topics: "Trees, graphs, sorting, dynamic programming",
    questions: 25,
    duration: "35 mins",
    tier: "Practice",
    status: "planned" as const,
  },
  {
    code: "CSM-202",
    subject: "Database Management Systems",
    topics: "Relational algebra, SQL, normalization, transactions",
    questions: 30,
    duration: "40 mins",
    tier: "Practice",
    status: "planned" as const,
  },
  {
    code: "CSM-203",
    subject: "Operating Systems",
    topics: "CPU scheduling, virtual memory, semaphores, deadlocks",
    questions: 50,
    duration: "60 mins",
    tier: "Full test",
    status: "planned" as const,
  },
  {
    code: "CSM-204",
    subject: "Computer Networks",
    topics: "OSI model, TCP/IP, subnetting, congestion control",
    questions: 40,
    duration: "50 mins",
    tier: "Full test",
    status: "planned" as const,
  },
  {
    code: "PYQ-SOLVED",
    subject: "Solved past papers",
    topics: "Semester papers from the last five years, with worked solutions",
    questions: 100,
    duration: "120 mins",
    tier: "Past papers",
    status: "planned" as const,
  },
];

export default function MockTestsPage() {
  return (
    <>
      <PageHeader
        label="Mock Tests"
        title="Mock tests (planned)"
        description="Subject-wise practice questions, solved past papers and timed tests. This isn't available yet."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Status Alert Banner */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-primary/25 bg-primary-light/50 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <StatusBadge status="planned" />
              <span className="text-xs sm:text-sm font-semibold text-primary-deep">
                Not available yet
              </span>
            </div>
            <p className="text-xs text-muted">
              Questions will be written and checked by senior students.
            </p>
          </div>

          {/* Practice Roster Grid */}
          <div className="space-y-4">
            <div className="border-b border-border pb-3">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Subjects
              </span>
              <h2 className="font-display text-xl font-bold text-foreground mt-1">
                What we plan to cover
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {subjectTestRoster.map((test) => (
                <div
                  key={test.code}
                  data-reveal className="ledger-card flex flex-col justify-between border border-border bg-surface p-6"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <span className="font-mono-code text-xs font-bold text-primary">
                        {test.code}
                      </span>
                      <span className="rounded bg-surface-muted px-2 py-0.5 font-mono-code text-[10px] text-muted">
                        {test.tier}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-base font-bold text-foreground">
                      {test.subject}
                    </h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      {test.topics}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <div className="flex items-center justify-between text-xs font-mono-code text-muted">
                      <span className="flex items-center gap-1">
                        <HelpCircle className="h-3.5 w-3.5 text-primary" />
                        {test.questions} MCQs
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-accent-terracotta" />
                        {test.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier Structure: Free Practice vs Full Mocks */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* Free Tier */}
            <div data-reveal className="ledger-card border border-primary/30 bg-surface p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    Practice
                  </h3>
                  <p className="text-xs text-muted mt-0.5">Free for every student</p>
                </div>
                <span className="font-mono-code text-xs font-bold text-primary bg-primary-light px-2.5 py-1 rounded-md border border-primary/20">
                  FREE
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {mockTestFreeFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-foreground/90 sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-4 text-xs font-mono-code text-muted">
                Syllabus questions will always be free.
              </div>
            </div>

            {/* Premium Full-Length Tier */}
            <div data-reveal className="ledger-card border border-border bg-surface-muted p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Full mock tests
                  </h3>
                  <p className="text-xs text-muted mt-0.5">Timed tests with results</p>
                </div>
                <StatusBadge status="planned" />
              </div>

              <ul className="mt-6 space-y-3">
                {mockTestPremiumFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-muted sm:text-sm">
                    <Sparkles className="h-4 w-4 text-accent-terracotta shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-4 text-xs font-mono-code text-muted">
                Shows which topics you need to work on.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
