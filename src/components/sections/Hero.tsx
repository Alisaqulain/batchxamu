"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { PhoneMockup } from "./PhoneMockup";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary-light/50 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-red-light/40 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
              Department of Computer Science · Digital Platform
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
            >
              Your{" "}
              <span className="text-primary">Department.</span>
              <br />
              Your{" "}
              <span className="text-primary">Academic Life.</span>
              <br />
              One App.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Everything students need for their academic journey — attendance,
              timetable, notices, notes, assignments, exams and more — in one
              place.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <DownloadButton size="lg" />
              <Button href="/features" variant="secondary" size="lg">
                Explore Features
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-sm font-medium text-muted"
            >
              Built for students. Designed for the Department of Computer Science.
            </motion.p>
          </div>

          <PhoneMockup variant="hero" />
        </div>
      </div>
    </section>
  );
}
