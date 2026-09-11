interface PhoneMockupProps {
  variant?: "hero" | "compact";
}

export function PhoneMockup({ variant = "hero" }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto ${variant === "hero" ? "max-w-md" : "max-w-xs"}`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -right-6 top-10 h-32 w-32 rounded-full bg-primary-light blur-2xl" />
      <div className="pointer-events-none absolute -left-4 bottom-16 h-28 w-28 rounded-full bg-accent-red-light blur-2xl" />

      <div
        className={`relative z-10 ${variant === "hero" ? "animate-float" : ""}`}
      >
        <div className="rounded-[2rem] border border-[#1a2e22] bg-[#0c1a12] p-2.5 shadow-[0_24px_60px_-20px_rgb(12_26_18_/_0.55)]">
          <div className="rounded-[1.55rem] bg-[#07110c] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[10px] font-semibold tracking-wide text-primary-bright">
                Dashboard
              </div>
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-[#2a4a38]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#2a4a38]" />
              </div>
            </div>

            <div className="mb-3 grid grid-cols-2 gap-2">
              {[
                {
                  l: "Attendance",
                  v: "88%",
                  c: "bg-primary/20 text-primary-bright",
                },
                {
                  l: "Classes",
                  v: "3 today",
                  c: "bg-[#132419] text-[#9fb5a8]",
                },
                {
                  l: "Notices",
                  v: "2 new",
                  c: "bg-accent-red/15 text-accent-coral",
                },
                {
                  l: "Notes",
                  v: "12 files",
                  c: "bg-[#132419] text-[#9fb5a8]",
                },
              ].map((item) => (
                <div key={item.l} className={`rounded-xl p-2.5 ${item.c}`}>
                  <div className="text-[9px] font-bold">{item.l}</div>
                  <div className="text-[8px] opacity-80">{item.v}</div>
                </div>
              ))}
            </div>

            <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-[#4a6355]">
              Today&apos;s Classes
            </div>
            {[
              "09:00 Data Structures",
              "11:00 Database Systems",
              "14:00 OS Lab",
            ].map((line) => (
              <div
                key={line}
                className="mb-1.5 flex items-center gap-2 rounded-lg bg-[#0f1c14] px-2 py-1.5"
              >
                <div className="h-1 w-1 rounded-full bg-primary-bright" />
                <span className="text-[8px] text-[#8aa396]">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {variant === "hero" && (
        <>
          <div className="absolute -right-1 top-14 z-20 w-36 animate-rise animate-rise-delay-3 rounded-2xl border border-border bg-surface p-3 shadow-[var(--shadow-lift)] sm:-right-6 sm:w-40">
            <div className="text-[9px] font-bold uppercase tracking-wider text-primary">
              Today&apos;s Classes
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="text-[8px] text-muted">09:00 · Data Structures</div>
              <div className="text-[8px] text-muted">14:00 · OS Lab</div>
            </div>
          </div>

          <div className="absolute -left-1 bottom-16 z-20 w-32 animate-rise animate-rise-delay-4 rounded-2xl border border-primary/20 bg-primary-light p-3 shadow-[var(--shadow-lift)] sm:-left-8 sm:w-36">
            <div className="text-[9px] font-bold uppercase tracking-wider text-primary">
              Attendance
            </div>
            <div className="mt-2 text-2xl font-bold text-primary">88%</div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white">
              <div
                className="h-full origin-left rounded-full bg-primary-bright"
                style={{ width: "88%", animation: "bar-fill 1s ease-out 0.6s both" }}
              />
            </div>
          </div>
        </>
      )}

      <p className="mt-4 text-center text-xs text-muted">
        UI mockup — sample demo data
      </p>
    </div>
  );
}
