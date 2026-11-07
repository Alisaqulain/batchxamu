"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";

/**
 * Site-wide motion setup:
 * - MotionConfig: every motion component honours "reduce motion" in the OS.
 * - Lenis: inertial smooth scrolling (skipped for reduced motion and /admin).
 * - A thin scroll progress bar under the navbar.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdmin) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // In-page links like /#capabilities scroll smoothly, offset for the sticky navbar.
      anchors: { offset: -80 },
    });

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [isAdmin]);

  // New page: start at the top (Lenis keeps its own scroll position otherwise).
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);

  useScrollEffects(pathname);

  return (
    <MotionConfig reducedMotion="user">
      {!isAdmin && <ScrollProgress />}
      {children}
    </MotionConfig>
  );
}

/**
 * Attribute-driven effects, so any component (server or client) can opt in
 * without extra wrappers. Styles live in globals.css.
 *
 * data-reveal="up|left|right"  fades/tilts the element in when scrolled into view
 * data-reveal-stagger           same, for each direct child, one after another
 * data-tilt                     3D tilt toward the pointer, with a soft highlight
 */
function useScrollEffects(pathname: string | null) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];

    // Once revealed, drop the attributes so the elements go back to their own
    // transitions (e.g. card hover) instead of the slow reveal timing.
    const finish = (el: HTMLElement, attr: string, after: number) => {
      timers.push(
        window.setTimeout(() => {
          el.removeAttribute(attr);
          el.classList.remove("is-revealed");
        }, after)
      );
    };

    const pending = new Set<HTMLElement>();
    const reveal = (el: HTMLElement) => {
      if (!pending.delete(el)) return;
      observer.unobserve(el);
      el.classList.add("is-revealed");
      if (el.hasAttribute("data-reveal-stagger")) {
        finish(el, "data-reveal-stagger", 1100 + el.children.length * 90);
      } else {
        finish(el, "data-reveal", 1200);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    // The observer misses elements that jump straight from below the screen to
    // above it (anchor links, fast flings, reload mid-page). Catch those here.
    let checkQueued = false;
    const revealPassed = () => {
      checkQueued = false;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
      });
    };
    const onScroll = () => {
      if (checkQueued || pending.size === 0) return;
      checkQueued = true;
      timers.push(window.setTimeout(revealPassed, 150));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(i, 8) * 90}ms`);
        });
      });
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]").forEach((el) => {
        if (reduced) {
          el.classList.add("is-revealed");
        } else {
          pending.add(el);
          observer.observe(el);
        }
      });
    });

    // Pointer tilt (mouse and pen only).
    const tiltCleanups: (() => void)[] = [];
    if (!reduced && window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const max = Number(el.dataset.tilt) || 6;
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          el.style.setProperty("--ry", `${(x - 0.5) * 2 * max}deg`);
          el.style.setProperty("--rx", `${(0.5 - y) * 2 * max}deg`);
          el.style.setProperty("--mx", `${x * 100}%`);
          el.style.setProperty("--my", `${y * 100}%`);
          el.style.setProperty("--glare", "1");
        };
        const leave = () => {
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
          el.style.setProperty("--glare", "0");
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        tiltCleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      timers.forEach(clearTimeout);
      tiltCleanups.forEach((fn) => fn());
    };
  }, [pathname]);
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
