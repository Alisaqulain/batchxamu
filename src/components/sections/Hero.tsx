"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { PhoneMockup } from "./PhoneMockup";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary-light/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent-red-light/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground min-[480px]:text-4xl sm:text-5xl lg:text-[3.25rem]"
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
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            >
              Attendance, timetable, notices, notes, assignments, exams and
              more — everything students need in one place.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <DownloadButton size="lg" fullWidth className="sm:w-auto" />
              <Button
                href="/features"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-sm text-muted"
            >
              Built for students. Designed for the department.
            </motion.p>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <PhoneMockup variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
