"use client";

import { useEffect, useRef, useState } from "react";
import { stickyFeatures } from "@/data/features";
import { FeatureIcon } from "@/components/ui/FeatureIcon";

export function StickyFeatures() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Features
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everything students need.
            </h2>
            <p className="mt-4 text-muted">
              Scroll to explore how MCA 26 organizes your academic day.
            </p>
          </div>

          <div className="space-y-4 lg:space-y-6">
            {stickyFeatures.map((feature, i) => (
              <div
                key={feature.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  active === i
                    ? "border-primary/40 bg-primary-light/30 shadow-md"
                    : "border-border bg-surface"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      active === i
                        ? "bg-primary text-white"
                        : "bg-primary-light text-primary"
                    }`}
                  >
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
