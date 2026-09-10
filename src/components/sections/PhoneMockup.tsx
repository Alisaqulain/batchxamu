"use client";

import { motion } from "motion/react";

interface PhoneMockupProps {
  variant?: "hero" | "compact";
}

export function PhoneMockup({ variant = "hero" }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto ${variant === "hero" ? "max-w-md" : "max-w-xs"}`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -right-8 top-8 h-28 w-28 rounded-full bg-primary-light/70 blur-2xl" />
      <div className="pointer-events-none absolute -left-6 bottom-12 h-24 w-24 rounded-full bg-accent-red-light/80 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 rounded-[2rem] border border-border bg-slate-900 p-2.5 shadow-2xl"
      >
        <div className="rounded-[1.6rem] bg-slate-950 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] font-semibold text-primary-bright">Dashboard</div>
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
              <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
            </div>
          </div>

          <div className="mb-3 grid grid-cols-2 gap-2">
            {[
              { l: "Attendance", v: "88%", c: "bg-primary/25 text-primary-bright" },
              { l: "Classes", v: "3 today", c: "bg-slate-800 text-slate-300" },
              { l: "Notices", v: "2 new", c: "bg-accent-red/20 text-accent-coral" },
              { l: "Notes", v: "12 files", c: "bg-slate-800 text-slate-300" },
            ].map((item) => (
              <div key={item.l} className={`rounded-xl p-2.5 ${item.c}`}>
                <div className="text-[9px] font-bold">{item.l}</div>
                <div className="text-[8px] opacity-80">{item.v}</div>
              </div>
            ))}
          </div>

          <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
            Today&apos;s Classes
          </div>
          {["09:00 Data Structures", "11:00 Database Systems", "14:00 OS Lab"].map(
            (line) => (
              <div
                key={line}
                className="mb-1.5 flex items-center gap-2 rounded-lg bg-slate-800/60 px-2 py-1.5"
              >
                <div className="h-1 w-1 rounded-full bg-primary-bright" />
                <span className="text-[8px] text-slate-400">{line}</span>
              </div>
            )
          )}
        </div>
      </motion.div>

      {variant === "hero" && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -right-2 top-16 z-20 w-36 rounded-2xl border border-border bg-surface p-3 shadow-xl sm:-right-8 sm:w-40"
          >
            <div className="text-[9px] font-bold uppercase tracking-wider text-primary">
              Today&apos;s Classes
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="text-[8px] text-muted">09:00 · Data Structures</div>
              <div className="text-[8px] text-muted">14:00 · OS Lab</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="absolute -left-2 bottom-20 z-20 w-32 rounded-2xl border border-primary/20 bg-primary-light p-3 shadow-xl sm:-left-10 sm:w-36"
          >
            <div className="text-[9px] font-bold uppercase tracking-wider text-primary">
              Attendance
            </div>
            <div className="mt-2 text-2xl font-bold text-primary">88%</div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white">
              <div className="h-full w-[88%] rounded-full bg-primary-bright" />
            </div>
          </motion.div>
        </>
      )}

      <p className="mt-4 text-center text-xs text-muted">UI mockup — sample demo data</p>
    </div>
  );
}
