export function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-light/60 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-accent-red-light/80 blur-2xl" />

      <div className="relative flex gap-3">
        {/* Main phone */}
        <div className="relative z-10 flex-1 rounded-[1.75rem] border border-border bg-slate-900 p-2.5 shadow-2xl">
          <div className="rounded-[1.35rem] bg-slate-950 p-3.5">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="h-2 w-14 rounded-full bg-slate-700" />
              <div className="text-[9px] font-medium text-slate-500">Dashboard</div>
            </div>

            <div className="mb-3 rounded-xl bg-primary/20 p-3 ring-1 ring-primary/20">
              <div className="mb-1 text-[10px] font-semibold text-primary-bright">
                Good morning, Student
              </div>
              <div className="text-[9px] text-slate-400">3 classes today · 1 notice</div>
            </div>

            <div className="mb-3 grid grid-cols-2 gap-1.5">
              {[
                { label: "Attendance", pct: "88%", color: "bg-primary/30 text-primary-bright" },
                { label: "Timetable", pct: "Next: 10 AM", color: "bg-slate-800 text-slate-300" },
                { label: "Notices", pct: "2 new", color: "bg-accent-red/20 text-accent-coral" },
                { label: "Notes", pct: "12 files", color: "bg-slate-800 text-slate-300" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-lg p-2 ${item.color}`}
                >
                  <div className="text-[9px] font-semibold">{item.label}</div>
                  <div className="text-[8px] opacity-80">{item.pct}</div>
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              {["Data Structures — Room 204", "DBMS Assignment due Fri"].map(
                (line) => (
                  <div
                    key={line}
                    className="flex items-center gap-2 rounded-lg bg-slate-800/50 px-2 py-1.5"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
                    <span className="text-[8px] text-slate-400">{line}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Secondary card */}
        <div className="mt-8 w-28 shrink-0 rounded-2xl border border-border bg-surface p-2 shadow-xl sm:w-32">
          <div className="mb-2 text-[8px] font-bold uppercase tracking-wider text-primary">
            Attendance
          </div>
          {[
            { sub: "DS", pct: 90, good: true },
            { sub: "OS", pct: 80, good: false },
          ].map((row) => (
            <div key={row.sub} className="mb-2 rounded-lg bg-background p-2">
              <div className="flex justify-between text-[8px]">
                <span className="font-medium text-foreground">{row.sub}</span>
                <span
                  className={
                    row.good ? "text-primary" : "text-accent-red"
                  }
                >
                  {row.pct}%
                </span>
              </div>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full ${row.good ? "bg-primary-bright" : "bg-accent-coral"}`}
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </div>
          ))}
          <div className="rounded-lg bg-primary-light p-2">
            <div className="text-[8px] font-semibold text-primary">Notices</div>
            <div className="mt-0.5 text-[7px] text-muted">Exam schedule updated</div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        UI mockup — sample data for preview only
      </p>
    </div>
  );
}
