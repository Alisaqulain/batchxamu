"use client";

import { motion } from "motion/react";
import { afterItems, beforeItems } from "@/data/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";

export function WhyAppSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything students usually search for. In one place."
          description="Stop switching between chats, PDFs and notice boards. MCA 26 brings your academic day into one organized app."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-accent-coral/40 bg-accent-red-light/30 p-6"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent-red">
              Before
            </p>
            <div className="flex flex-wrap gap-2">
              {beforeItems.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg border border-accent-coral/30 bg-surface px-3 py-2 text-sm font-medium text-muted"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/20 bg-primary-light/40 p-6"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              After — One App
            </p>
            <div className="flex flex-wrap gap-2">
              {afterItems.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg border border-primary/20 bg-surface px-3 py-2 text-sm font-medium text-foreground"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <DownloadButton size="lg" />
        </div>
      </div>
    </section>
  );
}
