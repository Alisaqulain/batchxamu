"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const screens = [
  { title: "Dashboard", color: "from-primary/20 to-primary-light" },
  { title: "Attendance", color: "from-primary-light to-surface" },
  { title: "Timetable", color: "from-slate-100 to-surface" },
  { title: "Notices", color: "from-accent-red-light to-surface" },
  { title: "Notes", color: "from-primary-light/80 to-surface" },
];

export function AppShowcase() {
  return (
    <section className="overflow-hidden border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Product Preview"
          title="See the app in action."
          description="A growing digital platform for the Department of Computer Science — starting with the features students use every day."
        />

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:justify-center lg:overflow-visible">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative min-w-[200px] flex-shrink-0 snap-center rounded-[1.75rem] border border-border bg-gradient-to-b ${screen.color} p-3 shadow-lg sm:min-w-[220px] ${i === 2 ? "lg:scale-105 lg:shadow-xl" : ""}`}
              style={{ zIndex: screens.length - i }}
            >
              <div className="rounded-[1.35rem] bg-slate-950 p-4">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-primary-bright">
                  {screen.title}
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded bg-slate-700" />
                  <div className="h-2 w-full rounded bg-slate-800" />
                  <div className="h-2 w-5/6 rounded bg-slate-800" />
                  <div className="mt-3 grid grid-cols-2 gap-1.5">
                    <div className="h-8 rounded-lg bg-primary/20" />
                    <div className="h-8 rounded-lg bg-slate-800" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">UI mockups — sample demo screens</p>
      </div>
    </section>
  );
}
