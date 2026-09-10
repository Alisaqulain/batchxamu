"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-20 sm:py-28">
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Make your academic life simpler.
        </h2>
        <p className="mt-4 text-lg text-primary-light/80">
          Download the Department of Computer Science app and keep everything
          important in one place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <DownloadButton size="lg" variant="light" />
          <Button
            href="/features"
            variant="secondary"
            size="lg"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Explore Features
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
