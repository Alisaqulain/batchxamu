import { AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Layers } from "lucide-react";
import Link from "next/link";

const auditItems = [
  {
    id: "notices",
    functionName: "Official Circulars & Notice Dispatch",
    tag: "Notice Architecture",
    fragmentationTitle: "Lost in Informal WhatsApp Floods",
    fragmentationDetail:
      "Important exam notifications, room changes, and holiday lists get buried under hundreds of chat messages, jokes, and informal chatter.",
    batchxSolution: "Dedicated Verified Notice Dispatch Feed",
    batchxDetail:
      "Official announcements directly from department faculty. High-priority exam notices trigger instant push notifications to student phones.",
    systemStatus: "Live v1.0",
  },
  {
    id: "attendance",
    functionName: "75% Attendance & Hall Ticket Eligibility",
    tag: "Academic Compliance",
    fragmentationTitle: "Uncertainty Before Examination Admit Cards",
    fragmentationDetail:
      "Students calculate attendance by memory or rough paper notes, discovering they fall short of the strict AMU 75% rule when it is already too late.",
    batchxSolution: "Mathematical Safety Margin Engine",
    batchxDetail:
      "Separate theory and laboratory registers calculate exact attendance percentages and tell you precisely how many classes you can afford to miss.",
    systemStatus: "Live v1.0",
  },
  {
    id: "schedule",
    functionName: "Lecture Timetable & Lab Slotting",
    tag: "Daily Operations",
    fragmentationTitle: "Confusing Room Allocations & Shifts",
    fragmentationDetail:
      "Students cross-reference crumpled PDF circulars or query classmates every morning whether lab sessions shifted between Unix Lab 1 or Lab 2.",
    batchxSolution: "Live Daily Schedule with Offline SQLite Cache",
    batchxDetail:
      "Class timings, room numbers (CS-01 to CS-04), and lab sessions organized by day, fully accessible without campus network connectivity.",
    systemStatus: "Live v1.0",
  },
  {
    id: "resources",
    functionName: "Curated Course Vault & Examination PYQs",
    tag: "Academic Archive",
    fragmentationTitle: "Scattered Drives & Expired Download Links",
    fragmentationDetail:
      "Study notes, lab manuals, and previous year questions are scattered across informal personal links and expired cloud shares.",
    batchxSolution: "Verified Subject Vault & 2021-2025 PYQ Archive",
    batchxDetail:
      "Organized unit-wise syllabus notes, verified lab implementations with code, and previous year semester papers maintained by student developers.",
    systemStatus: "Live v1.0",
  },
];

export function FragmentationLedger() {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-accent-terracotta/30 bg-accent-red-light px-2.5 py-1 font-mono-code text-xs font-semibold text-accent-terracotta">
              <Layers className="h-3.5 w-3.5" />
              <span>DEPARTMENT INFRASTRUCTURE AUDIT</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Why Computer Science students built their own platform.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Managing lectures, Unix laboratory allocations, attendance cutoffs, and exam schedules requires precision. When academic information is scattered across informal channels, students lose time and risk exam debarment.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 font-mono-code text-xs font-bold text-primary hover:underline"
            >
              <span>Explore full capabilities</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Comparative Audit Ledger Table */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[760px] divide-y divide-border border-y border-border">
            {/* Table Header */}
            <div className="grid grid-cols-12 py-3.5 font-mono-code text-xs font-bold uppercase tracking-wider text-muted bg-surface-muted/40 px-4">
              <div className="col-span-3">Core Academic System</div>
              <div className="col-span-4 text-accent-terracotta">Campus Disconnect (Before)</div>
              <div className="col-span-4 text-primary">BATCH X Platform (Engineered)</div>
              <div className="col-span-1 text-right">Status</div>
            </div>

            {/* Table Rows */}
            {auditItems.map((item, idx) => (
              <div
                key={item.id}
                className="grid grid-cols-12 py-6 px-4 gap-4 items-start hover:bg-surface-muted/30 transition-colors"
              >
                {/* Column 1: System Function */}
                <div className="col-span-3 pr-2">
                  <span className="font-mono-code text-[11px] font-bold text-primary block mb-1">
                    0{idx + 1} · {item.tag}
                  </span>
                  <h3 className="font-display text-sm font-bold text-foreground">
                    {item.functionName}
                  </h3>
                </div>

                {/* Column 2: Problem / Fragmentation */}
                <div className="col-span-4 pr-3 border-l border-border pl-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent-terracotta mb-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.fragmentationTitle}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted">
                    {item.fragmentationDetail}
                  </p>
                </div>

                {/* Column 3: BATCH X Solution */}
                <div className="col-span-4 pr-3 border-l border-border pl-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary mb-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.batchxSolution}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted">
                    {item.batchxDetail}
                  </p>
                </div>

                {/* Column 4: Status */}
                <div className="col-span-1 text-right border-l border-border pl-2">
                  <span className="inline-block rounded bg-primary-light px-2 py-0.5 font-mono-code text-[10px] font-bold text-primary border border-primary/25">
                    {item.systemStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Summary Footnote */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-code text-xs text-muted">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Audit compiled by MCA 2026 Batch Student Development Working Group</span>
          </div>
          <span className="text-primary font-semibold">
            All 4 systems operational in v1.0.0 Stable APK
          </span>
        </div>

      </div>
    </section>
  );
}
