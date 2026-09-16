"use client";

import { useState } from "react";
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
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useScrollDepth } from "@/hooks/useScrollDepth";

const heroTabs = [
  { id: "timetable", label: "Timetable", icon: Calendar, description: "Lecture halls CS-01 to CS-04 & Unix labs" },
  { id: "grid", label: "Weekly Grid", icon: LayoutGrid, description: "Full 5-day master lab & class roster" },
  { id: "attendance", label: "75% Attendance", icon: ClipboardCheck, description: "Theory & lab aggregate safety margins" },
  { id: "notices", label: "Notice Feed", icon: Bell, description: "Official department circulars with push alerts" },
  { id: "vault", label: "Study Vault", icon: BookOpen, description: "Curated notes & previous year exam questions" },
];

interface HeroProps {
  latestVersion?: string;
}

export function Hero({ latestVersion }: HeroProps = {}) {
  const displayVersion = latestVersion || siteConfig.appVersion;
  const [activeTab, setActiveTab] = useState("timetable");
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [heroRef, scrollProgress] = useScrollDepth<HTMLElement>({ threshold: 0.1 });


  // Subtle differential parallax offsets for 3D depth layers
  const backgroundLayerOffset = (scrollProgress - 0.5) * -35;
  const foregroundLayerOffset = (scrollProgress - 0.5) * 15;

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface via-background to-surface-muted/30 pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      {/* Background Architectural Grid & Atmospheric Depth */}
      <div className="pointer-events-none absolute inset-0 arch-grid opacity-50" />
      <div className="pointer-events-none absolute -top-32 right-10 h-[500px] w-[500px] rounded-full bg-primary/6 blur-3xl" />
      <div className="pointer-events-none absolute top-48 -left-20 h-[400px] w-[400px] rounded-full bg-primary/4 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Asymmetrical Editorial Composition: Desktop Grid (5 Cols Text / 7 Cols 3D Stage) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Academic Masthead & Action Directives */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Department Identity Pill */}
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-primary/25 bg-surface px-3 py-1 font-mono-code text-[11px] sm:text-xs font-semibold text-primary shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse shrink-0" aria-hidden="true" />
              <span>Department of Computer Science</span>
              <span className="h-1 w-1 rounded-full bg-border shrink-0" aria-hidden="true" />
              <span className="text-muted">AMU</span>
            </div>

            {/* App Branding Row */}
            <div className="animate-rise animate-rise-delay-1 mt-5 flex items-center gap-4">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-tr from-primary to-primary-bright opacity-25 blur-xs group-hover:opacity-45 transition-opacity" />
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
                    v{displayVersion} Stable
                  </span>
                </div>
                <p className="mt-1 font-mono-code text-xs sm:text-sm font-semibold text-primary">
                  The Computer Science Student Application
                </p>
              </div>
            </div>

            {/* Factual Value Narrative */}
            <p className="animate-rise animate-rise-delay-2 mt-5 text-sm sm:text-base text-muted leading-relaxed">
              Engineered specifically for daily academic life at Aligarh Muslim University. Coordinates lecture schedules, Unix laboratory allocations, the strict 75 percent examination attendance threshold, and verified department circulars in one fast, offline Android application.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="animate-rise animate-rise-delay-2 mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <DownloadButton size="lg" className="sm:min-w-[210px]" />
              <Link
                href="#capabilities"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 font-mono-code text-xs sm:text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-surface-muted transition-colors text-center touch-manipulation"
              >
                <span>Inspect Capabilities</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>

            {/* Platform & Trust Specification Chips */}
            <div className="animate-rise animate-rise-delay-3 mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono-code text-muted">
              <span className="inline-flex items-center gap-1">
                <Smartphone className="h-3.5 w-3.5 text-primary" />
                Android (Live) · iOS (In Dev)
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="inline-flex items-center gap-1">
                <WifiOff className="h-3.5 w-3.5 text-primary" />
                100% Offline SQLite
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Student Built · Zero Ads
              </span>
            </div>

            {/* Interactive Screen Director (Switches live phone view on the right) */}
            <div className="animate-rise animate-rise-delay-3 mt-8 w-full border-t border-border pt-6">
              <div className="flex items-center justify-between mb-3 font-mono-code text-xs">
                <span className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-primary" />
                  <span>Live App Screen Director</span>
                </span>
                <span className="text-muted text-[11px]">Select to inspect</span>
              </div>

              <div
                role="tablist"
                aria-label="App preview screen selector"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2"
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
                        "flex flex-col items-start p-2.5 rounded-xl border font-mono-code text-left transition-all touch-manipulation cursor-pointer",
                        isActive
                          ? "border-primary bg-primary-light text-primary shadow-2xs ring-1 ring-primary/20"
                          : "border-border bg-surface text-muted hover:border-border-light hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="font-bold text-xs truncate">{tab.label}</span>
                      </div>
                      <span className="text-[10px] text-muted line-clamp-1 leading-tight">
                        {tab.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Spatial Device Stage */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-4 lg:pt-0">
            <div className="perspective-deep w-full max-w-[680px] py-4 relative flex items-center justify-center min-h-[580px] sm:min-h-[640px]">
              
              {/* Secondary Layer Left: 3D Rotated Phone (Attendance Engine) */}
              <div
                onClick={() => setActiveTab("attendance")}
                style={{
                  transform: `translate3d(-140px, ${backgroundLayerOffset}px, -70px) rotateY(16deg) rotateX(2deg) scale(0.88)`,
                }}
                className={cn(
                  "hidden md:block absolute left-2 top-10 w-[280px] sm:w-[300px] cursor-pointer preserve-3d transition-all duration-500 z-0",
                  "opacity-70 hover:opacity-95 hover:scale-92 select-none",
                  activeTab === "attendance" && "opacity-95 ring-2 ring-primary/40 rounded-[48px]"
                )}
                title="Click to bring 75% Attendance Ledger into focus"
              >
                <div className="shadow-3d-layer rounded-[44px] overflow-hidden">
                  <PhoneMockup className="shadow-none">
                    <AttendanceAppScreen />
                  </PhoneMockup>
                </div>
                <div className="mt-2 text-center font-mono-code text-[11px] font-bold text-primary flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  <span>75% Margin Engine</span>
                </div>
              </div>

              {/* Central Primary Phone: Dominant Foreground Screen */}
              <div
                style={{
                  transform: `translate3d(0, ${foregroundLayerOffset}px, 40px)`,
                }}
                className="relative z-20 w-full max-w-[310px] sm:max-w-[350px] preserve-3d transition-transform duration-300"
              >
                {/* Floating Context Pill: Live Status */}
                <div className="hidden sm:flex absolute -left-14 top-20 z-30 items-center gap-1.5 rounded-xl border border-primary/20 bg-surface/95 px-3 py-1.5 text-xs font-mono-code font-bold text-primary shadow-md backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span>75% Cutoff Calculated</span>
                </div>

                {/* Floating Context Pill: Campus Location */}
                <div className="hidden sm:flex absolute -right-12 top-48 z-30 items-center gap-1.5 rounded-xl border border-accent-terracotta/25 bg-surface/95 px-3 py-1.5 text-xs font-mono-code font-bold text-accent-terracotta shadow-md backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 text-accent-terracotta shrink-0" />
                  <span>Halls CS-01 to CS-04</span>
                </div>

                {/* Floating Context Pill: Push Notifications */}
                <div className="hidden sm:flex absolute -left-10 bottom-24 z-30 items-center gap-1.5 rounded-xl border border-border bg-surface/95 px-3 py-1.5 text-xs font-mono-code font-bold text-foreground shadow-md backdrop-blur-md">
                  <WifiOff className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Full Offline SQLite</span>
                </div>

                {/* Primary Hardware Frame with Deep Contact Shadow */}
                <div className="shadow-3d-phone rounded-[48px]">
                  <PhoneMockup>
                    <div
                      role="tabpanel"
                      id={`hero-panel-${activeTab}`}
                      aria-labelledby={`hero-tab-${activeTab}`}
                      className="h-full"
                    >
                      {activeTab === "timetable" && (
                        <DailyTimetableAppScreen priority />
                      )}
                      {activeTab === "grid" && (
                        <FullTimetableAppScreen priority />
                      )}
                      {activeTab === "attendance" && <AttendanceAppScreen priority />}
                      {activeTab === "notices" && <NoticesAppScreen priority />}
                      {activeTab === "vault" && <VaultAppScreen priority />}
                    </div>
                  </PhoneMockup>
                </div>
              </div>

              {/* Secondary Layer Right: 3D Rotated Phone (Notice Feed) */}
              <div
                onClick={() => setActiveTab("notices")}
                style={{
                  transform: `translate3d(140px, ${backgroundLayerOffset}px, -70px) rotateY(-16deg) rotateX(2deg) scale(0.88)`,
                }}
                className={cn(
                  "hidden md:block absolute right-2 top-10 w-[280px] sm:w-[300px] cursor-pointer preserve-3d transition-all duration-500 z-0",
                  "opacity-70 hover:opacity-95 hover:scale-92 select-none",
                  activeTab === "notices" && "opacity-95 ring-2 ring-accent-terracotta/40 rounded-[48px]"
                )}
                title="Click to bring Notice Dispatch Feed into focus"
              >
                <div className="shadow-3d-layer rounded-[44px] overflow-hidden">
                  <PhoneMockup className="shadow-none">
                    <NoticesAppScreen />
                  </PhoneMockup>
                </div>
                <div className="mt-2 text-center font-mono-code text-[11px] font-bold text-accent-terracotta flex items-center justify-center gap-1">
                  <Bell className="h-3 w-3" />
                  <span>Push Notice Broadcast</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
