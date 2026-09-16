"use client";

import { useState } from "react";
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
    title: "Daily Class Timetable",
    shortTitle: "Daily",
    subtitle: "Halls CS-01 to CS-04 & Unix Labs",
    description:
      "Structured Monday through Friday roster reflecting the real Department of Computer Science schedule. Highlights ongoing lectures with room numbers, instructor names, and timing intervals.",
    icon: Calendar,
    color: "text-primary",
    badge: "Daily Schedule",
    time: "14:15",
    tags: ["Hall CS-01", "Unix Lab 2", "Break Schedule", "Live Indicator"],
  },
  {
    id: "attendance",
    title: "75% Attendance Engine",
    shortTitle: "Attendance",
    subtitle: "Theory & Practical Laboratory Cutoff Margin Tracker",
    description:
      "Calculates your exact aggregate and course-wise percentages. Shows precisely how many classes you can afford to miss while remaining safely eligible for examination admit cards.",
    icon: ClipboardCheck,
    color: "text-primary",
    badge: "AMU 75% Cutoff Guard",
    time: "09:41",
    tags: ["Theory & Lab Split", "Cutoff Warning", "Safe Margin Math", "Local Storage"],
  },
  {
    id: "notices",
    title: "Verified Department Notice Feed",
    shortTitle: "Notices",
    subtitle: "Direct Circulars & Instant Push Alerts",
    description:
      "Official announcements categorized into Exams, Class Relocations, and Academic Deadlines. Urgent examination notices trigger immediate push broadcasts straight to student phones.",
    icon: Bell,
    color: "text-accent-terracotta",
    badge: "Push Notifications",
    time: "10:20",
    tags: ["Exam Schedules", "Hall Relocations", "Sub-5s Push", "Searchable"],
  },
  {
    id: "vault",
    title: "Academic Vault & PYQ Library",
    shortTitle: "Vault",
    subtitle: "Curated Study Material & Semester Exam Archives",
    description:
      "Organized unit-wise study notes, solved laboratory program code with sample outputs, and 2021-2025 previous year semester examination question papers curated by the student development team.",
    icon: BookOpen,
    color: "text-primary",
    badge: "Offline Archive",
    time: "16:45",
    tags: ["Unit-Wise Notes", "Solved Lab Code", "2021-2025 PYQs", "Offline Access"],
  },
  {
    id: "fullTimetable",
    title: "Weekly Timetable Matrix",
    shortTitle: "Matrix",
    subtitle: "Full 5-Day Department Schedule & Lab Matrix",
    description:
      "Complete Monday to Friday master timetable matrix for the Department of Computer Science. Displays parallel practical lab batches, seminar sessions, and faculty lecture allocations at a single glance.",
    icon: LayoutGrid,
    color: "text-primary",
    badge: "Full Matrix Grid",
    time: "11:30",
    tags: ["5-Day Overview", "Parallel Lab Batches", "Faculty Allocations", "Offline Grid"],
  },
];

export function AppScreenshotGallery() {
  const [activeScreen, setActiveScreen] = useState(0);

  const handleNext = () => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  };

  const handlePrev = () => {
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const current = screens[activeScreen];

  return (
    <section
      id="screenshots"
      className="scroll-mt-20 border-b border-border bg-gradient-to-b from-surface via-surface-muted/30 to-background py-16 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary-light px-2.5 py-1 font-mono-code text-xs font-semibold text-primary">
              <Smartphone className="h-3.5 w-3.5" />
              <span>SPATIAL APP SCREEN SHOWCASE</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Authentic mobile interface. No sketches or marketing mockups.
            </h2>
            <p className="mt-2 text-base text-muted">
              Inspect the real application screens as rendered on Android. Click any screen or use controls to step into spatial focus.
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
        <div className="mt-12">
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
                    "absolute transition-all duration-500 ease-out w-[320px] preserve-3d select-none rounded-[48px]",
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

          {/* Detailed Editorial Caption Bar for Active Screen */}
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
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
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">
                  {current.title}
                </h3>
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
