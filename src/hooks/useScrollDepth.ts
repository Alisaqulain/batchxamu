"use client";

import { useState, useEffect, useRef, RefObject } from "react";

interface ScrollDepthOptions {
  threshold?: number;
  clamp?: boolean;
}

/**
 * High-performance hook for scroll-driven 3D depth and parallax.
 * Uses requestAnimationFrame, passive event listeners, and respects prefers-reduced-motion.
 */
export function useScrollDepth<T extends HTMLElement = HTMLDivElement>(
  options: ScrollDepthOptions = {}
): [RefObject<T | null>, number, boolean] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0.5);
  const [isInView, setIsInView] = useState(true);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px 0px 100px 0px", threshold: options.threshold || 0 }
    );

    observer.observe(element);

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      const totalDistance = windowHeight + rect.height;
      const currentPosition = windowHeight - rect.top;
      let calculated = currentPosition / totalDistance;

      if (options.clamp !== false) {
        calculated = Math.max(0, Math.min(1, calculated));
      }

      setProgress(calculated);
    };

    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null;
        updatePosition();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId.current = window.requestAnimationFrame(updatePosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [options.threshold, options.clamp]);

  return [ref, progress, isInView];
}
