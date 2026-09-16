import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CheckCircle2, Check } from "lucide-react";

export const metadata = createMetadata({
  title: "Academic Programs",
  description:
    "Explore the Computer Science academic programs supported by AMU BATCH X, including MCA, M.Sc. Computer Science, B.Sc. (Hons.), and Ph.D. research.",
  path: "/programs",
});

const detailedPrograms = [
  {
    id: "mca",
    code: "MCA",
    title: "Master in Computer Science and Applications",
    level: "Postgraduate · 2-Year Degree",
    status: "live" as const,
    overview:
      "The flagship postgraduate program in the Department of Computer Science. Focuses on rigorous software engineering, systems design, and advanced computing applications.",
    semesters: [
      {
        sem: "Semester I & II",
        courses: [
          "CSM-201: Data Structures & Advanced Algorithms",
          "CSM-202: Relational DBMS & Query Optimization",
          "CSM-203L: Operating Systems & Unix System Calls Lab",
          "CSM-204: Computer Networks & Socket Programming",
          "CSM-205: Software Engineering & Agile Methodologies",
        ],
      },
      {
        sem: "Semester III & IV",
        courses: [
          "CSM-301: Cloud Computing & Microservices Architecture",
          "CSM-302: Web Technologies & Distributed Systems",
          "CSM-303L: Full-Stack Engineering Capstone Lab",
          "CSM-401: Major Industrial Project & Research Dissertation",
        ],
      },
    ],
    highlights: [
      "Dedicated daily lecture schedule mapped to halls CS-01 through CS-04",
      "Separate theory and lab attendance tracking with 75% cutoff indicator",
      "Verified course note archives and previous year question papers",
      "Direct push notifications for class venue relocations and exam notices",
    ],
  },
  {
    id: "msc",
    code: "M.Sc. CS",
    title: "M.Sc. Computer Science",
    level: "Postgraduate · 2-Year Degree",
    status: "coming-soon" as const,
    overview:
      "Advanced research-oriented postgraduate computing with specialized concentrations in Artificial Intelligence, Machine Learning, Cyber Security, and Digital Forensics.",
    semesters: [
      {
        sem: "Core & Specialization Tracks",
        courses: [
          "Advanced Theoretical Computer Science & Automata",
          "Artificial Intelligence & Deep Learning Architectures",
          "Cyber Security, Cryptography & Network Defense",
          "Digital Forensics & Vulnerability Analysis",
        ],
      },
    ],
    highlights: [
      "Shared department noticeboard and faculty directory integration",
      "Specialized seminar hall and research lab scheduling",
      "Co-curricular project guidance and paper reading repositories",
    ],
  },
  {
    id: "bsc",
    code: "B.Sc. (Hons.)",
    title: "B.Sc. (Hons.) Computer Science & Applications",
    level: "Undergraduate · 3/4-Year Degree",
    status: "planned" as const,
    overview:
      "Foundational undergraduate degree preparing students with strong mathematical principles, programming logic, computer architecture, and modern IT career readiness.",
    semesters: [
      {
        sem: "Foundational Sequence",
        courses: [
          "Programming Fundamentals in C++ and Java",
          "Discrete Mathematical Structures",
          "Digital Logic & Computer Organization",
          "Database Basics & Web Programming",
        ],
      },
    ],
    highlights: [
      "Multi-course architecture designed to onboard undergraduate batches",
      "Department-wide academic calendar and holiday schedule",
      "Introductory programming lab guides and code repositories",
    ],
  },
  {
    id: "phd",
    code: "Ph.D. CS",
    title: "Ph.D. in Computer Science",
    level: "Doctoral · Research Degree",
    status: "planned" as const,
    overview:
      "Doctoral research program producing innovative contributions in distributed computing, machine learning, security protocols, and advanced computing algorithms.",
    semesters: [
      {
        sem: "Research Activities",
        courses: [
          "Research Methodology & Technical Writing",
          "Advanced Doctoral Seminars & Publications",
          "Department Laboratory Research Fellowship",
        ],
      },
    ],
    highlights: [
      "Department noticeboard integration for viva-voce and thesis defense",
      "Faculty directory and research group associations",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        label="Department Programs"
        title="One platform built for the entire department."
        description="While currently active for MCA 2026 students, the platform architecture is structured to serve every Computer Science program at Aligarh Muslim University."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Detailed Program Cards */}
          <div className="space-y-12">
            {detailedPrograms.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className="ledger-card overflow-hidden border border-border bg-surface p-6 sm:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-base font-bold text-primary">
                      {prog.code}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
                    <span className="font-mono-code text-xs text-muted">
                      {prog.level}
                    </span>
                  </div>
                  <StatusBadge status={prog.status} />
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {prog.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted max-w-3xl">
                    {prog.overview}
                  </p>
                </div>

                {/* Coursework & Platform Features Grid */}
                <div className="mt-8 grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-7 rounded-xl border border-border bg-surface-muted p-5">
                    <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                      Representative Coursework
                    </h4>
                    <div className="space-y-4">
                      {prog.semesters.map((s, idx) => (
                        <div key={idx}>
                          <span className="font-mono-code text-[11px] font-semibold text-primary block mb-1.5">
                            {s.sem}
                          </span>
                          <ul className="space-y-1.5">
                            {s.courses.map((c, cIdx) => (
                              <li key={cIdx} className="text-xs text-muted flex items-start gap-2">
                                <Check className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground/90">{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 rounded-xl border border-primary/20 bg-primary-light/40 p-5">
                    <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Platform Integration
                    </h4>
                    <ul className="space-y-2.5">
                      {prog.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-primary-deep flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Department Hierarchy Diagram */}
          <div className="mt-16 ledger-card border border-border bg-surface p-6 sm:p-8">
            <div className="border-b border-border pb-4 mb-6">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Institutional Hierarchy
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1">
                Department of Computer Science Academic Tree
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-primary/30 bg-primary-light p-4">
                <span className="font-mono-code text-[10px] uppercase font-bold text-primary">Core Hub</span>
                <h4 className="font-bold text-sm text-foreground mt-1">MCA Program</h4>
                <p className="text-xs text-muted mt-1">Batch of 2026 active with full timetable and attendance tracking.</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted p-4">
                <span className="font-mono-code text-[10px] uppercase font-bold text-accent-terracotta">Staged Expansion</span>
                <h4 className="font-bold text-sm text-foreground mt-1">M.Sc. Computer Science</h4>
                <p className="text-xs text-muted mt-1">Curriculum and specialization pathways prepared for integration.</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted p-4">
                <span className="font-mono-code text-[10px] uppercase font-bold text-muted">Undergraduate</span>
                <h4 className="font-bold text-sm text-foreground mt-1">B.Sc. (Hons.)</h4>
                <p className="text-xs text-muted mt-1">Multi-course architecture supports future undergraduate enrollment.</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-muted p-4">
                <span className="font-mono-code text-[10px] uppercase font-bold text-muted">Doctoral</span>
                <h4 className="font-bold text-sm text-foreground mt-1">Ph.D. Research</h4>
                <p className="text-xs text-muted mt-1">Department seminar and research viva announcements layer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
