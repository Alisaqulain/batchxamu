"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  Calendar,
  Bell,
  BookOpen,
  WifiOff,
  Moon,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import {
  AttendanceAppScreen,
  TimetableAppScreen,
  NoticesAppScreen,
  VaultAppScreen,
} from "@/components/ui/AppScreens";
import { cn } from "@/lib/utils";

type PillarId = "attendance" | "timetable" | "notices" | "vault";

export function CoreCapabilitiesAtlas() {
  const [activePillar, setActivePillar] = useState<PillarId>("attendance");
  const [selectedDay, setSelectedDay] = useState("Mon");

  const pillars = [
    {
      id: "attendance" as PillarId,
      stepNumber: "01",
      title: "75% Attendance & Hall Ticket Engine",
      subtitle: "Theory & Laboratory Margins Calculated Independently",
      icon: ClipboardCheck,
      badge: "AMU Regulation",
      time: "09:41",
      description:
        "At Aligarh Muslim University, students must maintain 75 percent attendance across theory and laboratory sessions to receive semester examination admit cards. BATCH X calculates your exact safety margin in real time, alerting you before you enter the debarment zone.",
      points: [
        "Separate accounting for classroom lectures and multi-hour practical lab sessions.",
        "Calculates exact safe-absence allowance: know precisely how many classes you can miss while staying above 75%.",
        "Early warning indicators highlight subjects nearing the 80% caution threshold.",
        "All data stored locally on your device with complete student privacy.",
      ],
    },
    {
      id: "timetable" as PillarId,
      stepNumber: "02",
      title: "Daily Timetable & Laboratory Venue Slotting",
      subtitle: "Mapped to Lecture Halls CS-01 through CS-04 and Unix Labs",
      icon: Calendar,
      badge: "Department Roster",
      time: "14:10",
      description:
        "Reflects the actual weekly schedule of the Department of Computer Science. Displays ongoing lectures, venue changes, and lab shifts so you never show up at the wrong department hall.",
      points: [
        "Structured Monday to Friday class schedule with lecture timings and faculty names.",
        "Clear demarcation between standard lecture rooms (CS-01 to CS-04) and Unix/Systems laboratories.",
        "Live ongoing class indicator with real-time room and teacher allocations.",
        "Cached in local storage on Android: accessible without campus Wi-Fi or cellular signal.",
      ],
    },
    {
      id: "notices" as PillarId,
      stepNumber: "03",
      title: "Verified Department Notice Dispatch Feed",
      subtitle: "Emergency Exam Shifts & Class Reschedules with Push Alerts",
      icon: Bell,
      badge: "Verified Feed",
      time: "10:20",
      description:
        "Eliminates reliance on cluttered WhatsApp groups and forwarded screenshots. A direct, noise-free dispatch channel delivering official departmental announcements straight from faculty coordinators.",
      points: [
        "Categorized into Exam Circulars, Room Relocations, Submission Deadlines, and University Notices.",
        "High-priority alert broadcast for same-day schedule shifts or lab timing revisions.",
        "Sub-5-second push alerting prevents wasted commutes across campus.",
        "Searchable archive of all past department notices and circulars.",
      ],
    },
    {
      id: "vault" as PillarId,
      stepNumber: "04",
      title: "Academic Vault & PYQ Question Archive",
      subtitle: "Curated Study Material, Lab Code & Semester Exam Archives",
      icon: BookOpen,
      badge: "Curated Archive",
      time: "16:45",
      description:
        "Centralized study repository built and maintained by the student development team. Organizes syllabus notes, verified lab implementations, and past semester question papers.",
      points: [
        "Unit-wise study notes for Data Structures, Computer Networks, Operating Systems, and DBMS.",
        "Solved laboratory program guides with syntax-highlighted code samples.",
        "Semester question papers spanning 2021 to 2025 with syllabus mapping.",
        "One-tap offline caching for studying in areas with limited campus connectivity.",
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="scroll-mt-20 border-b border-border bg-surface py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Masthead */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary-light px-2.5 py-1 font-mono-code text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>SYSTEM ARCHITECTURE & CAPABILITIES</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Four core modules engineered for daily student life.
            </h2>
            <p className="mt-2 text-base text-muted">
              Explore the four primary systems that eliminate academic friction for Department of Computer Science students.
            </p>
          </div>

          <div className="shrink-0">
            <DownloadButton size="sm" />
          </div>
        </div>

        {/* Interactive Sticky 3D Feature Inspector */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          
          {/* Left Column: Sticky 3D Phone Inspection Stage (Desktop) */}
          <div className="lg:col-span-5 lg:block">
            <div className="lg:sticky lg:top-28">
              <div className="perspective-stage">
                <div className="rounded-2xl border border-border bg-surface-muted/60 p-5 sm:p-7 shadow-xs">
                  {/* Phone Header Strip */}
                  <div className="flex items-center justify-between border-b border-border pb-3 font-mono-code text-xs">
                    <span className="font-bold text-primary flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span>LIVE MODULE VIEW</span>
                    </span>
                    <span className="rounded bg-surface px-2 py-0.5 font-bold text-foreground border border-border">
                      {activePillar.toUpperCase()}
                    </span>
                  </div>

                  {/* 3D Phone Container */}
                  <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-[290px] sm:max-w-[310px] transition-all duration-500 shadow-3d-phone rounded-[44px]">
                      <PhoneMockup
                        time={pillars.find((p) => p.id === activePillar)?.time || "09:41"}
                      >
                        {activePillar === "attendance" && <AttendanceAppScreen />}
                        {activePillar === "timetable" && (
                          <TimetableAppScreen
                            selectedDay={selectedDay}
                            onSelectDay={setSelectedDay}
                          />
                        )}
                        {activePillar === "notices" && <NoticesAppScreen />}
                        {activePillar === "vault" && <VaultAppScreen />}
                      </PhoneMockup>
                    </div>
                  </div>

                  {/* Device Caption & Quick Pill Selector */}
                  <div className="mt-6 border-t border-border pt-4">
                    <div className="flex items-center justify-between font-mono-code text-xs text-muted mb-2">
                      <span>Tap module to switch phone screen:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {pillars.map((p) => {
                        const Icon = p.icon;
                        const isCurrent = activePillar === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setActivePillar(p.id)}
                            className={cn(
                              "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-mono-code text-xs font-semibold transition-all touch-manipulation cursor-pointer",
                              isCurrent
                                ? "bg-primary text-white shadow-xs"
                                : "bg-surface text-muted hover:bg-surface-raised hover:text-foreground border border-border/70"
                            )}
                          >
                            <Icon className="h-3.5 w-3.5 shrink-0" />
                            <span className="truncate">{p.title.split(" ")[0]}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quick Mode Toggle for Timetable */}
                    {activePillar === "timetable" && (
                      <div className="mt-3 flex items-center justify-center gap-1 rounded-lg border border-border bg-surface p-1">
                        <button
                          type="button"
                          onClick={() => setSelectedDay("Mon")}
                          className={cn(
                            "flex-1 rounded-md px-2 py-1 text-center font-mono-code text-[11px] font-semibold transition-colors cursor-pointer",
                            selectedDay !== "grid"
                              ? "bg-primary text-white"
                              : "text-muted hover:text-foreground"
                          )}
                        >
                          Daily Schedule
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedDay("grid")}
                          className={cn(
                            "flex-1 rounded-md px-2 py-1 text-center font-mono-code text-[11px] font-semibold transition-colors cursor-pointer",
                            selectedDay === "grid"
                              ? "bg-primary text-white"
                              : "text-muted hover:text-foreground"
                          )}
                        >
                          Weekly Matrix
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Chapters (Broken Down Without Boxy Repetition) */}
          <div className="lg:col-span-7 space-y-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isCurrent = activePillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  id={`capability-${pillar.id}`}
                  className={cn(
                    "relative border-b border-border pb-12 transition-all duration-300",
                    isCurrent && "pt-1"
                  )}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary font-mono-code text-xs font-bold text-white shadow-xs">
                        {pillar.stepNumber}
                      </span>
                      <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                        {pillar.badge}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActivePillar(pillar.id)}
                      className={cn(
                        "inline-flex min-h-[38px] items-center gap-2 rounded-xl px-4 py-2 font-mono-code text-xs font-bold transition-all touch-manipulation cursor-pointer border shadow-2xs",
                        isCurrent
                          ? "bg-primary text-white border-primary shadow-xs ring-2 ring-primary/20"
                          : "border-border bg-surface text-foreground hover:border-primary/40 hover:bg-surface-muted hover:text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{isCurrent ? "Active on Phone" : "Inspect Screen"}</span>
                    </button>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-mono-code text-xs font-semibold text-primary">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                    {pillar.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {pillar.points.map((point, pointIdx) => (
                      <div
                        key={pointIdx}
                        className="flex items-start gap-2 text-xs leading-relaxed text-foreground/90 font-mono-code"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Functional Snippet: Live Attendance Table (For Pillar 1) */}
                  {pillar.id === "attendance" && (
                    <div className="mt-6 rounded-xl border border-border bg-surface-muted p-4 font-mono-code text-xs">
                      <div className="flex items-center justify-between border-b border-border/80 pb-2 text-[11px] font-bold text-muted">
                        <span>Course / Subject</span>
                        <span>Current %</span>
                        <span>Safety Margin</span>
                      </div>
                      <div className="mt-2.5 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none">
                            Data Structures & Algorithms
                          </span>
                          <span className="font-bold text-primary">90.0%</span>
                          <span className="rounded bg-primary-light px-2 py-0.5 text-primary font-bold border border-primary/20">
                            +6 Safe
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none">
                            Operating Systems Lab (Lab 2)
                          </span>
                          <span className="font-bold text-primary">85.0%</span>
                          <span className="rounded bg-primary-light px-2 py-0.5 text-primary font-bold border border-primary/20">
                            +2 Safe
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none">
                            Computer Networks
                          </span>
                          <span className="font-bold text-accent-terracotta">78.0%</span>
                          <span className="rounded bg-accent-red-light px-2 py-0.5 text-accent-terracotta font-bold border border-accent-coral/30">
                            Caution (0 Margin)
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Functional Venue Snippet (For Pillar 2) */}
                  {pillar.id === "timetable" && (
                    <div className="mt-6 rounded-xl border border-border bg-surface-muted p-4 font-mono-code text-xs">
                      <div className="flex items-center justify-between border-b border-border/80 pb-2 text-[11px] font-bold text-muted">
                        <span>Lecture Room</span>
                        <span>Capacity</span>
                        <span>Assigned Stream</span>
                      </div>
                      <div className="mt-2.5 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-foreground">Lecture Hall CS-01</span>
                          <span className="text-muted">70 Seats</span>
                          <span className="font-semibold text-primary">Core Theory</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-foreground">Unix Systems Lab (Lab 2)</span>
                          <span className="text-muted">45 Terminals</span>
                          <span className="font-semibold text-primary">C/C++ & Shell</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Offline & Architecture Foundation Ribbon */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 font-mono-code text-xs">
          <div className="rounded-xl border border-border bg-surface-muted/60 p-4 flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
              <WifiOff className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-foreground block">100% Offline SQLite</span>
              <span className="text-muted text-[11px]">Zero network dependency</span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface-muted/60 p-4 flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-foreground block">Student Privacy Guard</span>
              <span className="text-muted text-[11px]">No external tracking SDKs</span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface-muted/60 p-4 flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
              <Moon className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-foreground block">High-Contrast OLED</span>
              <span className="text-muted text-[11px]">Optimized for night study</span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface-muted/60 p-4 flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-foreground block">Sub-5s Push Alerts</span>
              <span className="text-muted text-[11px]">Instant notice delivery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
