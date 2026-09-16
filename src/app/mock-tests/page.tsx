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
    "Systematic examination practice for Computer Science students: subject tests, previous year question banks, timed mock exams, and analytics.",
  path: "/mock-tests",
});

const subjectTestRoster = [
  {
    code: "CSM-201",
    subject: "Data Structures & Algorithms",
    topics: "Binary Trees, Graphs, Sorting Algorithms, Dynamic Programming",
    questions: 25,
    duration: "35 mins",
    tier: "Free Practice",
    status: "planned" as const,
  },
  {
    code: "CSM-202",
    subject: "Database Management Systems",
    topics: "Relational Algebra, SQL Queries, Normalization, Transactions & Locking",
    questions: 30,
    duration: "40 mins",
    tier: "Free Practice",
    status: "planned" as const,
  },
  {
    code: "CSM-203",
    subject: "Operating Systems",
    topics: "CPU Scheduling, Virtual Memory, Semaphore Synchronization, Deadlock Avoidance",
    questions: 50,
    duration: "60 mins",
    tier: "Full Mock Test",
    status: "planned" as const,
  },
  {
    code: "CSM-204",
    subject: "Computer Networks",
    topics: "OSI Layering, TCP/IP Handshake, Subnetting, Congestion Control",
    questions: 40,
    duration: "50 mins",
    tier: "Full Mock Test",
    status: "planned" as const,
  },
  {
    code: "PYQ-SOLVED",
    subject: "AMU MCA Entrance & Semester Solved Papers",
    topics: "Curated collection of previous 5 years examination papers with step-by-step solutions",
    questions: 100,
    duration: "120 mins",
    tier: "Archive Vault",
    status: "planned" as const,
  },
];

export default function MockTestsPage() {
  return (
    <>
      <PageHeader
        label="Mock Tests"
        title="Prepare systematically for semester exams."
        description="A planned examination practice environment featuring subject question banks, previous year solved papers, and timed full-length assessments."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Status Alert Banner */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-primary/25 bg-primary-light/50 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <StatusBadge status="planned" />
              <span className="text-xs sm:text-sm font-semibold text-primary-deep">
                Phase 3 Module: Examination Engine Specifications
              </span>
            </div>
            <p className="text-xs text-muted">
              Curated by senior students and past batch top-performers.
            </p>
          </div>

          {/* Practice Roster Grid */}
          <div className="space-y-4">
            <div className="border-b border-border pb-3">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Syllabus Question Bank Roster
              </span>
              <h2 className="font-display text-xl font-bold text-foreground mt-1">
                Core Subject Mock Assessments
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {subjectTestRoster.map((test) => (
                <div
                  key={test.code}
                  className="ledger-card flex flex-col justify-between border border-border bg-surface p-6"
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
            <div className="ledger-card border border-primary/30 bg-surface p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    Free Practice Tier
                  </h3>
                  <p className="text-xs text-muted mt-0.5">Always available for every enrolled student</p>
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
                Zero paywalls on foundational syllabus questions.
              </div>
            </div>

            {/* Premium Full-Length Tier */}
            <div className="ledger-card border border-border bg-surface-muted p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Comprehensive Mock Exams
                  </h3>
                  <p className="text-xs text-muted mt-0.5">Full semester simulation and analytics</p>
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
                Includes batch percentile ranking and weak-topic analysis.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
