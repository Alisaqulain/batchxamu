"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import {
  DailyTimetableAppScreen,
  AttendanceAppScreen,
  NoticesAppScreen,
  VaultAppScreen,
  FullTimetableAppScreen,
} from "@/components/ui/AppScreens";
import {
  Calendar,
  ClipboardCheck,
  Bell,
  BookOpen,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const screens = [
  {
    id: "dailyTimetable",
    title: "Today's timetable",
    shortTitle: "Today",
    subtitle: "Rooms CS-01 to CS-04 and the labs",
    description:
      "Today's classes with the room, teacher and time. The class that's on right now is highlighted.",
    icon: Calendar,
    color: "text-primary",
    badge: "Timetable",
    time: "14:15",
    tags: ["Rooms", "Labs", "Breaks", "Current class"],
  },
  {
    id: "attendance",
    title: "Attendance",
    shortTitle: "Attendance",
    subtitle: "Theory and lab, against the 75% rule",
    description:
      "Your overall and per-subject attendance, and how many classes you can still miss before you drop below 75%.",
    icon: ClipboardCheck,
    color: "text-primary",
    badge: "75% rule",
    time: "09:41",
    tags: ["Theory and lab", "Warnings", "Classes left to miss", "Stored on phone"],
  },
  {
    id: "notices",
    title: "Notices",
    shortTitle: "Notices",
    subtitle: "Department notices with push notifications",
    description:
      "Notices sorted into exams, room changes and deadlines. Urgent exam notices also come as push notifications.",
    icon: Bell,
    color: "text-accent-terracotta",
    badge: "Notices",
    time: "10:20",
    tags: ["Exams", "Room changes", "Push notifications", "Search"],
  },
  {
    id: "vault",
    title: "Notes",
    shortTitle: "Notes",
    subtitle: "Notes, lab programs and past papers",
    description:
      "Unit-wise notes, solved lab programs with sample output, and question papers from 2021 to 2025.",
    icon: BookOpen,
    color: "text-primary",
    badge: "Study material",
    time: "16:45",
    tags: ["Unit-wise notes", "Lab programs", "Past papers", "Offline"],
  },
  {
    id: "fullTimetable",
    title: "Weekly timetable",
    shortTitle: "Week",
    subtitle: "Monday to Friday at a glance",
    description:
      "The whole week in one grid, including lab batches, seminars and which teacher takes each class.",
    icon: LayoutGrid,
    color: "text-primary",
    badge: "Timetable",
    time: "11:30",
    tags: ["Full week", "Lab batches", "Teachers", "Offline"],
  },
];

export function AppScreenshotGallery() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  };

  const handlePrev = () => {
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  // Auto-advance screen every 4 seconds (within 3 to 5 second range)
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeScreen, isPaused]);

  const current = screens[activeScreen];

  // The phone stage rises and tilts flat as the section scrolls into view.
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "center center"] });
  const stageProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.4 });
  const stageRotateX = useTransform(stageProgress, [0, 1], [38, 0]);
  const stageScale = useTransform(stageProgress, [0, 1], [0.82, 1]);
  const stageY = useTransform(stageProgress, [0, 1], [120, 0]);
  const stageOpacity = useTransform(stageProgress, [0, 0.5], [0, 1]);

  return (
    <section
      id="screenshots"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="scroll-mt-20 border-b border-border bg-background py-16 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div data-reveal className="flex flex-col justify-between gap-4 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-primary">
              Screenshots
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Screens from the app
            </h2>
            <p className="mt-2 text-base text-muted">
              These are the actual Android screens. Click one to take a closer look.
            </p>
          </div>

          {/* Tactile Screen Switcher Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-xl border border-border bg-surface p-1 shadow-2xs">
              {screens.map((screen, idx) => {
                const Icon = screen.icon;
                const isActive = activeScreen === idx;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveScreen(idx)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono-code text-xs font-semibold transition-all touch-manipulation cursor-pointer",
                      isActive
                        ? "bg-primary text-white shadow-xs"
                        : "text-muted hover:bg-surface-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="hidden md:inline">{screen.shortTitle}</span>
                    <span className="md:hidden">{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous app screen"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next app screen"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Spatial Screen Presentation (Desktop) / Fluid Carousel (Mobile) */}
        <div ref={stageRef} className="mt-12 perspective-deep">
          <motion.div
            style={{ rotateX: stageRotateX, scale: stageScale, y: stageY, opacity: stageOpacity, transformStyle: "preserve-3d" }}
          >
          {/* Desktop 3D Spatial Stage */}
          <div className="hidden lg:flex perspective-deep items-center justify-center py-6 min-h-[560px] relative">
            {screens.map((screen, idx) => {
              const offset = idx - activeScreen;
              const isActive = offset === 0;
              const isPrev = offset === -1 || (activeScreen === 0 && idx === screens.length - 1);
              const isNext = offset === 1 || (activeScreen === screens.length - 1 && idx === 0);

              if (!isActive && !isPrev && !isNext) return null;

              let transform = "";
              let zIndex = 10;
              let opacity = "opacity-75";

              if (isActive) {
                transform = "translate3d(0, 0, 60px) scale(1.02)";
                zIndex = 30;
                opacity = "opacity-100 ring-2 ring-primary/40 shadow-3d-phone";
              } else if (isPrev) {
                transform = "translate3d(-260px, 12px, -80px) rotateY(16deg) scale(0.9)";
                zIndex = 15;
                opacity = "opacity-70 hover:opacity-95 shadow-3d-layer cursor-pointer";
              } else if (isNext) {
                transform = "translate3d(260px, 12px, -80px) rotateY(-16deg) scale(0.9)";
                zIndex = 15;
                opacity = "opacity-70 hover:opacity-95 shadow-3d-layer cursor-pointer";
              }

              return (
                <div
                  key={screen.id}
                  onClick={() => setActiveScreen(idx)}
                  style={{ transform, zIndex }}
                  className={cn(
                    "absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-[320px] preserve-3d select-none rounded-[48px]",
                    opacity
                  )}
                  title={`Click to inspect ${screen.title}`}
                >
                  <PhoneMockup className="shadow-none">
                    {screen.id === "dailyTimetable" && <DailyTimetableAppScreen />}
                    {screen.id === "attendance" && <AttendanceAppScreen />}
                    {screen.id === "notices" && <NoticesAppScreen />}
                    {screen.id === "vault" && <VaultAppScreen />}
                    {screen.id === "fullTimetable" && <FullTimetableAppScreen />}
                  </PhoneMockup>
                </div>
              );
            })}
          </div>

          {/* Mobile Dominant Screen View (Guarantees large readability without clipping) */}
          <div className="lg:hidden flex flex-col items-center justify-center">
            <div className="w-full max-w-[310px] sm:max-w-[340px] shadow-3d-phone rounded-[44px]">
              <PhoneMockup>
                {current.id === "dailyTimetable" && <DailyTimetableAppScreen />}
                {current.id === "attendance" && <AttendanceAppScreen />}
                {current.id === "notices" && <NoticesAppScreen />}
                {current.id === "vault" && <VaultAppScreen />}
                {current.id === "fullTimetable" && <FullTimetableAppScreen />}
              </PhoneMockup>
            </div>
          </div>

          </motion.div>

          {/* Detailed Editorial Caption Bar for Active Screen */}
          <div data-reveal className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                    Module 0{activeScreen + 1} of 0{screens.length}
                  </span>
                  <span className="rounded bg-primary-light px-2 py-0.5 font-mono-code text-[11px] font-bold text-primary border border-primary/20">
                    {current.badge}
                  </span>
                </div>
                <motion.h3
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1"
                >
                  {current.title}
                </motion.h3>
              </div>

              <span className="font-mono-code text-xs text-muted">
                {current.subtitle}
              </span>
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
              {current.description}
            </p>

            {/* Feature Tags Strip */}
            <div className="mt-5 flex flex-wrap items-center gap-2 font-mono-code text-xs">
              {current.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="rounded-lg border border-border bg-surface-muted px-2.5 py-1 text-foreground font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
