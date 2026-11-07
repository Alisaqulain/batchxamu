"use client";

import { useState, useEffect, useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import {
  TimetableAppScreen,
  AttendanceAppScreen,
  NoticesAppScreen,
  VaultAppScreen,
  DailyTimetableAppScreen,
  FullTimetableAppScreen,
} from "@/components/ui/AppScreens";
import {
  Calendar,
  ClipboardCheck,
  Bell,
  BookOpen,
  LayoutGrid,
  Smartphone,
  ShieldCheck,
  WifiOff,
  ArrowRight,
  Layers,
} from "lucide-react";
import { useLatestRelease } from "@/components/ui/DownloadModal";
import { cn, formatVersion } from "@/lib/utils";

const heroTabs = [
  { id: "timetable", label: "Today", icon: Calendar, description: "Today's classes and rooms" },
  { id: "grid", label: "Week", icon: LayoutGrid, description: "The full weekly timetable" },
  { id: "attendance", label: "Attendance", icon: ClipboardCheck, description: "Where you stand against 75%" },
  { id: "notices", label: "Notices", icon: Bell, description: "Department notices" },
  { id: "vault", label: "Notes", icon: BookOpen, description: "Notes and past papers" },
];

export function Hero() {
  const displayVersion = formatVersion(useLatestRelease().version);
  const [activeTab, setActiveTab] = useState("timetable");
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked 3D: as the hero scrolls away the phones tilt back and fan out.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const centerRotateX = useTransform(progress, [0, 1], [0, 24]);
  const centerY = useTransform(progress, [0, 1], [0, -90]);
  const centerScale = useTransform(progress, [0, 1], [1, 0.88]);
  const sideX = useTransform(progress, [0, 1], [70, 200]);
  const sideXNeg = useTransform(sideX, (v) => -v);
  const sideRotate = useTransform(progress, [0, 1], [16, 40]);
  const sideRotateNeg = useTransform(sideRotate, (v) => -v);
  const sideY = useTransform(progress, [0, 1], [0, 70]);
  const textY = useTransform(progress, [0, 1], [0, -70]);
  const textOpacity = useTransform(progress, [0, 0.8], [1, 0.15]);

  // Pointer parallax: the whole device stage leans toward the cursor.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const stageRotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-9, 9]), { stiffness: 90, damping: 18 });
  const stageRotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 90, damping: 18 });

  const handleStagePointer = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetStagePointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  // Auto-advance hero app screen every 4 seconds (within 3 to 5 second range)
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setActiveTab((prev) => {
        const currentIndex = heroTabs.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % heroTabs.length;
        return heroTabs[nextIndex].id;
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeTab, isPaused]);

  return (
    <section
      ref={heroRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative overflow-hidden border-b border-border bg-surface pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 arch-grid opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Asymmetrical Editorial Composition: Desktop Grid (5 Cols Text / 7 Cols 3D Stage) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Academic Masthead & Action Directives */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Department Identity Pill */}
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-primary/25 bg-surface px-3 py-1 font-mono-code text-[11px] sm:text-xs font-semibold text-primary shadow-2xs">
              <span>Department of Computer Science</span>
              <span className="h-1 w-1 rounded-full bg-border shrink-0" aria-hidden="true" />
              <span className="text-muted">Aligarh</span>
            </div>

            {/* App Branding Row */}
            <div className="animate-rise animate-rise-delay-1 mt-5 flex items-center gap-4">
              <div className="relative shrink-0">
                <Image
                  src="/logo.png"
                  alt="AMU BATCH X official application icon"
                  width={76}
                  height={76}
                  priority
                  className="relative h-16 w-16 sm:h-18 sm:w-18 rounded-[18px] sm:rounded-[20px] border border-border/90 object-cover shadow-md ring-1 ring-black/10"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                    AMU BATCH X
                  </h1>
                  <span className="rounded-md bg-primary-light px-2 py-0.5 font-mono-code text-[11px] font-bold text-primary border border-primary/25">
                    {displayVersion}
                  </span>
                </div>
                <h2 className="mt-1 font-mono-code text-xs sm:text-sm font-semibold text-primary">
                  Student app for AMU Computer Science
                </h2>
              </div>
            </div>

            {/* Factual Value Narrative */}
            <p className="animate-rise animate-rise-delay-2 mt-5 text-sm sm:text-base text-muted leading-relaxed">
              Your timetable, attendance, department notices and notes in one app. Built by students of the Department of Computer Science at Aligarh Muslim University. Free, and works offline.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="animate-rise animate-rise-delay-2 mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <DownloadButton size="lg" className="sm:min-w-[210px]" />
              <Link
                href="#capabilities"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 font-mono-code text-xs sm:text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-surface-muted transition-colors text-center touch-manipulation"
              >
                <span>See features</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>

            {/* Platform & Trust Specification Chips */}
            <div className="animate-rise animate-rise-delay-3 mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono-code text-muted">
              <span className="inline-flex items-center gap-1">
                <Smartphone className="h-3.5 w-3.5 text-primary" />
                Android · iOS coming later
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="inline-flex items-center gap-1">
                <WifiOff className="h-3.5 w-3.5 text-primary" />
                Works offline
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                No ads
              </span>
            </div>

            {/* Interactive Screen Director (Switches live phone view on the right) */}
            <div className="animate-rise animate-rise-delay-3 mt-8 w-full border-t border-border pt-6">
              <div className="flex items-center justify-between mb-3 font-mono-code text-xs">
                <span className="font-bold text-foreground flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-primary" />
                  <span>Preview the app</span>
                </span>
              </div>

              <div
                role="tablist"
                aria-label="App preview screen selector"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5"
              >
                {heroTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`hero-tab-${tab.id}`}
                      aria-selected={isActive}
                      aria-controls={`hero-panel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex flex-col items-start p-3 rounded-xl border font-mono-code text-left transition-all touch-manipulation cursor-pointer",
                        isActive
                          ? "border-primary bg-primary-light text-primary shadow-2xs ring-1 ring-primary/20"
                          : "border-border bg-surface text-muted hover:border-border-light hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="font-bold text-xs truncate">{tab.label}</span>
                      </div>
                      <span className="text-xs text-muted line-clamp-2 leading-normal">
                        {tab.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D device stage */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-4 lg:pt-0">
            <div
              onPointerMove={handleStagePointer}
              onPointerLeave={resetStagePointer}
              className="perspective-deep w-full max-w-[680px] py-4 relative flex items-center justify-center min-h-[580px] sm:min-h-[640px]"
            >
              <motion.div
                style={{ rotateX: stageRotateX, rotateY: stageRotateY, transformStyle: "preserve-3d" }}
                className="relative flex w-full items-center justify-center"
              >
                {/* Left phone: attendance */}
                <motion.button
                  type="button"
                  onClick={() => setActiveTab("attendance")}
                  aria-label="Show attendance screen"
                  initial={{ opacity: 0, x: 120, rotateY: 0, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden xl:block absolute left-0 top-10 z-0 w-[270px] cursor-pointer select-none text-left"
                >
                  <motion.div
                    style={{ x: sideXNeg, y: sideY, rotateY: sideRotate, z: -80, scale: 0.86, transformStyle: "preserve-3d" }}
                    className={cn(
                      "transition-opacity duration-300 opacity-75 hover:opacity-100",
                      activeTab === "attendance" && "opacity-100"
                    )}
                  >
                    <div className={cn("shadow-3d-layer rounded-[44px] overflow-hidden", activeTab === "attendance" && "ring-2 ring-primary/40")}>
                      <PhoneMockup className="shadow-none">
                        <AttendanceAppScreen />
                      </PhoneMockup>
                    </div>
                    <div className="mt-2 text-center font-mono-code text-xs font-semibold text-primary flex items-center justify-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Attendance</span>
                    </div>
                  </motion.div>
                </motion.button>

                {/* Center phone: the selected screen */}
                <motion.div
                  initial={{ opacity: 0, y: 120, rotateX: 30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-20 w-full max-w-[310px] sm:max-w-[350px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    style={{ rotateX: centerRotateX, y: centerY, scale: centerScale, z: 40, transformStyle: "preserve-3d" }}
                    className="shadow-3d-phone rounded-[48px]"
                  >
                    <PhoneMockup>
                      <div
                        role="tabpanel"
                        id={`hero-panel-${activeTab}`}
                        aria-labelledby={`hero-tab-${activeTab}`}
                        className="h-full"
                      >
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full"
                        >
                          {activeTab === "timetable" && <DailyTimetableAppScreen priority />}
                          {activeTab === "grid" && <FullTimetableAppScreen priority />}
                          {activeTab === "attendance" && <AttendanceAppScreen priority />}
                          {activeTab === "notices" && <NoticesAppScreen priority />}
                          {activeTab === "vault" && <VaultAppScreen priority />}
                        </motion.div>
                      </div>
                    </PhoneMockup>
                  </motion.div>
                </motion.div>

                {/* Right phone: notices */}
                <motion.button
                  type="button"
                  onClick={() => setActiveTab("notices")}
                  aria-label="Show notices screen"
                  initial={{ opacity: 0, x: -120, rotateY: 0, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden xl:block absolute right-0 top-10 z-0 w-[270px] cursor-pointer select-none text-left"
                >
                  <motion.div
                    style={{ x: sideX, y: sideY, rotateY: sideRotateNeg, z: -80, scale: 0.86, transformStyle: "preserve-3d" }}
                    className={cn(
                      "transition-opacity duration-300 opacity-75 hover:opacity-100",
                      activeTab === "notices" && "opacity-100"
                    )}
                  >
                    <div className={cn("shadow-3d-layer rounded-[44px] overflow-hidden", activeTab === "notices" && "ring-2 ring-accent-terracotta/40")}>
                      <PhoneMockup className="shadow-none">
                        <NoticesAppScreen />
                      </PhoneMockup>
                    </div>
                    <div className="mt-2 text-center font-mono-code text-xs font-semibold text-accent-terracotta flex items-center justify-center gap-1.5">
                      <Bell className="h-3.5 w-3.5" />
                      <span>Notices</span>
                    </div>
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
