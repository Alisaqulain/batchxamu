import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const auditItems = [
  {
    id: "notices",
    functionName: "Department notices",
    tag: "Notices",
    fragmentationTitle: "Buried in group chats",
    fragmentationDetail:
      "Exam notices, room changes and holiday lists get lost between hundreds of other messages.",
    batchxSolution: "One notice feed",
    batchxDetail:
      "Department notices in one list. Urgent ones, like exam notices, also come as push notifications.",
    systemStatus: "Live",
  },
  {
    id: "attendance",
    functionName: "Attendance and the 75% rule",
    tag: "Attendance",
    fragmentationTitle: "Finding out too late",
    fragmentationDetail:
      "Most students track attendance from memory and only find out they're short of 75% when admit cards come out.",
    batchxSolution: "Attendance tracker",
    batchxDetail:
      "Theory and lab attendance are tracked separately, and the app tells you how many classes you can still miss.",
    systemStatus: "Live",
  },
  {
    id: "schedule",
    functionName: "Timetable and labs",
    tag: "Timetable",
    fragmentationTitle: "Which room is it today?",
    fragmentationDetail:
      "Checking old PDFs or asking classmates every morning which room or lab a class is in.",
    batchxSolution: "Daily timetable",
    batchxDetail:
      "Class times, rooms (CS-01 to CS-04) and labs by day. Works offline.",
    systemStatus: "Live",
  },
  {
    id: "resources",
    functionName: "Notes and past papers",
    tag: "Study material",
    fragmentationTitle: "Scattered links",
    fragmentationDetail:
      "Notes, lab manuals and past papers are spread across personal drives, and the links often stop working.",
    batchxSolution: "Notes by subject",
    batchxDetail:
      "Unit-wise notes, lab programs and previous year papers (2021 to 2025), organized by subject.",
    systemStatus: "Live",
  },
];

export function FragmentationLedger() {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div data-reveal className="flex flex-col justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-primary">
              Why we built it
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Before and after AMU BATCH X
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              When class information is spread across group chats and PDFs, things get missed. Sometimes that means falling short on attendance.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 font-mono-code text-xs font-bold text-primary hover:underline"
            >
              <span>See all features</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Comparative Audit Ledger Table */}
        <div className="mt-12 overflow-x-auto">
          <div data-reveal-stagger className="min-w-[820px] divide-y divide-border border-y border-border rounded-2xl overflow-hidden shadow-xs">
            {/* Table Header */}
            <div className="grid grid-cols-12 py-4 font-mono-code text-xs font-bold text-muted bg-surface-muted px-6">
              <div className="col-span-3">Area</div>
              <div className="col-span-4 text-accent-terracotta flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>Before</span>
              </div>
              <div className="col-span-4 text-primary flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>With AMU BATCH X</span>
              </div>
              <div className="col-span-1 text-right">Status</div>
            </div>

            {/* Table Rows */}
            {auditItems.map((item, idx) => (
              <div
                key={item.id}
                className="grid grid-cols-12 py-6 px-6 gap-6 items-start hover:bg-surface-muted/30 transition-colors bg-surface"
              >
                {/* Column 1: System Function */}
                <div className="col-span-3 pr-2">
                  <span className="font-mono-code text-xs font-bold text-primary block mb-1">
                    0{idx + 1} · {item.tag}
                  </span>
                  <h3 className="font-display text-sm font-bold text-foreground">
                    {item.functionName}
                  </h3>
                </div>

                {/* Column 2: Problem / Fragmentation */}
                <div className="col-span-4 pr-3 border-l border-border/80 pl-5">
                  <div className="text-xs font-bold text-accent-terracotta mb-1">
                    {item.fragmentationTitle}
                  </div>
                  <p className="text-xs leading-relaxed text-muted">
                    {item.fragmentationDetail}
                  </p>
                </div>

                {/* Column 3: BATCH X Solution */}
                <div className="col-span-4 pr-3 border-l border-border/80 pl-5">
                  <div className="text-xs font-bold text-primary mb-1">
                    {item.batchxSolution}
                  </div>
                  <p className="text-xs leading-relaxed text-muted">
                    {item.batchxDetail}
                  </p>
                </div>

                {/* Column 4: Status */}
                <div className="col-span-1 text-right border-l border-border/80 pl-3">
                  <span className="inline-block rounded-md bg-primary-light px-2 py-0.5 font-mono-code text-xs font-bold text-primary border border-primary/25">
                    {item.systemStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
