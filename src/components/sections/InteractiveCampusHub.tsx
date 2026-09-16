"use client";

import { useState } from "react";
import {
  Calendar,
  ClipboardCheck,
  Bell,
  BookOpen,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type HubTab = "schedule" | "attendance" | "notices" | "resources";

interface ScheduleItem {
  time: string;
  code: string;
  subject: string;
  room: string;
  type: "lecture" | "lab" | "seminar";
}

const scheduleByDay: Record<string, ScheduleItem[]> = {
  Monday: [
    {
      time: "09:00 - 10:00",
      code: "CSM-201",
      subject: "Data Structures & Algorithms",
      room: "Room CS-04",
      type: "lecture",
    },
    {
      time: "11:00 - 12:00",
      code: "CSM-202",
      subject: "Database Management Systems",
      room: "Room CS-02",
      type: "lecture",
    },
    {
      time: "14:00 - 16:00",
      code: "CSM-203L",
      subject: "Operating Systems Laboratory",
      room: "Lab 2 (Unix Lab)",
      type: "lab",
    },
  ],
  Tuesday: [
    {
      time: "09:00 - 10:00",
      code: "CSM-204",
      subject: "Computer Networks & Protocols",
      room: "Room CS-01",
      type: "lecture",
    },
    {
      time: "10:00 - 11:00",
      code: "CSM-201",
      subject: "Data Structures (Problem Solving)",
      room: "Room CS-04",
      type: "lecture",
    },
    {
      time: "12:00 - 13:00",
      code: "CSM-205",
      subject: "Software Engineering Principles",
      room: "Room CS-03",
      type: "lecture",
    },
  ],
  Wednesday: [
    {
      time: "09:00 - 11:00",
      code: "CSM-202L",
      subject: "DBMS SQL & Query Tuning Lab",
      room: "Lab 1 (Systems Lab)",
      type: "lab",
    },
    {
      time: "11:30 - 12:30",
      code: "CSM-204",
      subject: "Computer Networks",
      room: "Room CS-01",
      type: "lecture",
    },
    {
      time: "14:00 - 15:00",
      code: "CSM-206",
      subject: "Mathematical Foundations of CS",
      room: "Room CS-04",
      type: "lecture",
    },
  ],
  Thursday: [
    {
      time: "10:00 - 11:00",
      code: "CSM-201",
      subject: "Data Structures & Algorithms",
      room: "Room CS-04",
      type: "lecture",
    },
    {
      time: "11:00 - 12:00",
      code: "CSM-202",
      subject: "Database Management Systems",
      room: "Room CS-02",
      type: "lecture",
    },
    {
      time: "14:00 - 16:00",
      code: "CSM-207",
      subject: "Department Seminar & Project Review",
      room: "Seminar Hall",
      type: "seminar",
    },
  ],
  Friday: [
    {
      time: "08:30 - 09:30",
      code: "CSM-204",
      subject: "Computer Networks",
      room: "Room CS-01",
      type: "lecture",
    },
    {
      time: "09:30 - 10:30",
      code: "CSM-205",
      subject: "Software Engineering",
      room: "Room CS-03",
      type: "lecture",
    },
    {
      time: "11:00 - 12:30",
      code: "CSM-208",
      subject: "Elective: Cloud Architecture & DevOps",
      room: "Room CS-04",
      type: "lecture",
    },
  ],
};

const attendanceLedger = [
  {
    code: "CSM-201",
    subject: "Data Structures & Algorithms",
    attended: 36,
    total: 40,
    pct: 90,
    status: "Safe (+6 margin)",
    isLab: false,
  },
  {
    code: "CSM-202",
    subject: "Database Management Systems",
    attended: 35,
    total: 38,
    pct: 92,
    status: "Safe (+7 margin)",
    isLab: false,
  },
  {
    code: "CSM-203L",
    subject: "Operating Systems Laboratory",
    attended: 17,
    total: 20,
    pct: 85,
    status: "Safe (+2 margin)",
    isLab: true,
  },
  {
    code: "CSM-204",
    subject: "Computer Networks",
    attended: 28,
    total: 36,
    pct: 78,
    status: "Attention: Must attend next 3",
    isLab: false,
  },
];

const noticesFeed = [
  {
    id: 1,
    tag: "Exam Schedule",
    tagColor: "bg-amber-100 text-amber-900 border-amber-300",
    title: "Mid-Semester Examination Schedule for MCA 2026 Batch",
    meta: "Office of the Chairman · 2 hrs ago",
    detail:
      "Theory examinations commence from next Monday at Department Hall A. Admit verification required 15 minutes prior.",
    urgent: true,
  },
  {
    id: 2,
    tag: "Class Update",
    tagColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    title: "Operating Systems Lab shifted to Lab 2 (Unix Lab)",
    meta: "Prof. Course Instructor · Today 08:30 AM",
    detail:
      "Network switch maintenance completed. All afternoon lab sections will assemble directly in Lab 2.",
    urgent: false,
  },
  {
    id: 3,
    tag: "Assignment",
    tagColor: "bg-blue-100 text-blue-900 border-blue-300",
    title: "Assignment 2: Red-Black Trees Implementation Submission",
    meta: "CSM-201 Portal · Yesterday",
    detail:
      "Upload GitHub repository link and PDF report via the app submission portal by Friday 11:59 PM.",
    urgent: false,
  },
];

const courseResources = [
  {
    code: "CSM-201",
    title: "Data Structures & Algorithms",
    units: "Units 1 to 5 Comprehensive Notes",
    format: "PDF · 4.8 MB",
    downloads: "MCA 26 Verified",
  },
  {
    code: "CSM-202",
    title: "Database Management Systems",
    units: "Relational Algebra, SQL & Normalization Cheatsheet",
    format: "PDF · 3.2 MB",
    downloads: "Lab Manual Attached",
  },
  {
    code: "CSM-204",
    title: "Computer Networks",
    units: "OSI vs TCP/IP & Socket Programming Reference",
    format: "PDF · 5.1 MB",
    downloads: "Mid-Sem Question Bank",
  },
  {
    code: "PYQ-BANK",
    title: "Previous Year Question Papers (2021-2025)",
    units: "Semester Solved Papers with Key Explanations",
    format: "ZIP / PDF Archive",
    downloads: "Curated by Batch X",
  },
];

export function InteractiveCampusHub() {
  const [activeTab, setActiveTab] = useState<HubTab>("schedule");
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="w-full">
      {/* Console Frame */}
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
        {/* Terminal Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-foreground">
                AMU DoCS Campus Terminal
              </span>
              <span className="hidden rounded border border-primary/30 bg-primary-light px-2 py-0.5 font-mono-code text-xs font-semibold text-primary sm:inline-block">
                LIVE DEMO
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-bright animate-pulse" />
            <span className="font-mono-code text-xs">DoCS Academic Feed</span>
          </div>
        </div>

        {/* Tab Switcher (Accessible Tablist with Connected Visual Affordance) */}
        <div
          role="tablist"
          aria-label="Campus views tabs"
          className="grid grid-cols-2 border-b border-border bg-surface sm:grid-cols-4"
        >
          <button
            type="button"
            role="tab"
            id="tab-schedule"
            aria-selected={activeTab === "schedule"}
            aria-controls="panel-schedule"
            tabIndex={activeTab === "schedule" ? 0 : -1}
            onClick={() => setActiveTab("schedule")}
            className={cn(
              "flex items-center justify-center gap-2 border-r border-border py-3.5 px-3 text-xs font-semibold transition-all sm:text-sm relative -mb-px",
              activeTab === "schedule"
                ? "border-b-2 border-b-primary bg-primary-light/60 text-primary font-bold shadow-xs"
                : "border-b-2 border-b-transparent text-muted hover:bg-surface-muted hover:text-foreground"
            )}
          >
            <Calendar className="h-4 w-4 shrink-0" />
            <span>Timetable & Labs</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-attendance"
            aria-selected={activeTab === "attendance"}
            aria-controls="panel-attendance"
            tabIndex={activeTab === "attendance" ? 0 : -1}
            onClick={() => setActiveTab("attendance")}
            className={cn(
              "flex items-center justify-center gap-2 border-r border-border py-3.5 px-3 text-xs font-semibold transition-all sm:text-sm relative -mb-px",
              activeTab === "attendance"
                ? "border-b-2 border-b-primary bg-primary-light/60 text-primary font-bold shadow-xs"
                : "border-b-2 border-b-transparent text-muted hover:bg-surface-muted hover:text-foreground"
            )}
          >
            <ClipboardCheck className="h-4 w-4 shrink-0" />
            <span>Attendance (75%)</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-notices"
            aria-selected={activeTab === "notices"}
            aria-controls="panel-notices"
            tabIndex={activeTab === "notices" ? 0 : -1}
            onClick={() => setActiveTab("notices")}
            className={cn(
              "flex items-center justify-center gap-2 border-r border-border py-3.5 px-3 text-xs font-semibold transition-all sm:text-sm relative -mb-px",
              activeTab === "notices"
                ? "border-b-2 border-b-primary bg-primary-light/60 text-primary font-bold shadow-xs"
                : "border-b-2 border-b-transparent text-muted hover:bg-surface-muted hover:text-foreground"
            )}
          >
            <Bell className="h-4 w-4 shrink-0" />
            <span className="flex items-center gap-1.5">
              Notices
              <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono-code text-xs font-semibold text-primary">
                3
              </span>
            </span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-resources"
            aria-selected={activeTab === "resources"}
            aria-controls="panel-resources"
            tabIndex={activeTab === "resources" ? 0 : -1}
            onClick={() => setActiveTab("resources")}
            className={cn(
              "flex items-center justify-center gap-2 py-3.5 px-3 text-xs font-semibold transition-all sm:text-sm relative -mb-px",
              activeTab === "resources"
                ? "border-b-2 border-b-primary bg-primary-light/60 text-primary font-bold shadow-xs"
                : "border-b-2 border-b-transparent text-muted hover:bg-surface-muted hover:text-foreground"
            )}
          >
            <BookOpen className="h-4 w-4 shrink-0" />
            <span>Study Notes & PYQs</span>
          </button>
        </div>

        {/* Tab 1: Timetable Content */}
        {activeTab === "schedule" && (
          <div
            role="tabpanel"
            id="panel-schedule"
            aria-labelledby="tab-schedule"
            tabIndex={0}
            className="p-4 sm:p-6 focus-visible:outline-none"
          >
            {/* Day Selector (44px min touch targets) */}
            <div className="mb-5 flex items-center justify-between gap-2 overflow-x-auto pb-1">
              <div className="flex gap-1.5">
                {days.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={cn(
                      "min-h-[44px] min-w-[44px] rounded-lg px-3.5 py-2 font-mono-code text-xs font-semibold transition-colors flex items-center justify-center",
                      selectedDay === day
                        ? "bg-primary text-white shadow-sm"
                        : "border border-border bg-surface-muted text-muted hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
              <div className="hidden items-center gap-1.5 text-xs text-muted font-mono-code md:flex">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>MCA Semester II · Schedule</span>
              </div>
            </div>

            {/* Schedule Slot Cards */}
            <div className="space-y-3">
              {scheduleByDay[selectedDay]?.map((slot, idx) => (
                <div
                  key={`${slot.code}-${idx}`}
                  className="group flex flex-col justify-between gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40 hover:bg-primary-light/20 sm:flex-row sm:items-center"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono-code text-xs font-bold",
                        slot.type === "lab"
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : slot.type === "seminar"
                          ? "bg-purple-100 text-purple-900 border border-purple-300"
                          : "bg-primary-light text-primary border border-primary/20"
                      )}
                    >
                      {slot.type === "lab" ? "LAB" : "LEC"}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono-code text-xs font-bold text-primary">
                          {slot.code}
                        </span>
                        <span className="rounded bg-surface-muted px-2 py-0.5 font-mono-code text-xs font-medium text-muted">
                          {slot.type.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="mt-1 text-sm font-semibold text-foreground">
                        {slot.subject}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono-code text-muted">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span>{slot.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-accent-terracotta" />
                      <span className="font-medium text-foreground">{slot.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                Timetable synced directly from the Department circular
              </span>
              <span className="font-mono-code text-xs">
                Showing: {selectedDay} Class Roster
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Attendance Ledger Content */}
        {activeTab === "attendance" && (
          <div
            role="tabpanel"
            id="panel-attendance"
            aria-labelledby="tab-attendance"
            tabIndex={0}
            className="p-4 sm:p-6 focus-visible:outline-none"
          >
            <div className="mb-5 flex flex-col justify-between gap-3 rounded-xl border border-primary/20 bg-primary-light/50 p-4 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wide text-primary">
                    AMU 75% Examination Eligibility Rule
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">
                  The platform tracks theory and laboratory attendance separately to ensure
                  no surprises before admit cards are issued.
                </p>
              </div>

              <div className="shrink-0 rounded-lg border border-primary/30 bg-surface px-3 py-2 text-center">
                <span className="block font-mono-code text-xs text-muted">Aggregate</span>
                <span className="font-mono-code text-lg font-bold text-primary">88.2%</span>
              </div>
            </div>

            {/* Subject Attendance Rows */}
            <div className="space-y-3">
              {attendanceLedger.map((sub) => {
                const isWarning = sub.pct < 80;
                return (
                  <div
                    key={sub.code}
                    className="rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40"
                  >
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code text-xs font-semibold text-muted">
                          {sub.code}
                        </span>
                        <h3 className="font-semibold text-foreground text-sm">
                          {sub.subject}
                        </h3>
                        {sub.isLab && (
                          <span className="rounded bg-amber-50 px-1.5 py-0.5 font-mono-code text-xs font-bold text-amber-800 border border-amber-200">
                            LAB
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono-code text-xs text-muted">
                          {sub.attended}/{sub.total} Classes
                        </span>
                        <span
                          className={cn(
                            "font-mono-code text-base font-bold",
                            isWarning ? "text-accent-terracotta" : "text-primary"
                          )}
                        >
                          {sub.pct}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 flex items-center gap-3">
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-surface-muted border border-border">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            isWarning ? "bg-accent-coral" : "bg-primary"
                          )}
                          style={{ width: `${sub.pct}%` }}
                        />
                        {/* 75% Marker Line */}
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-red-500"
                          style={{ left: "75%" }}
                          title="75% AMU Cutoff"
                        />
                      </div>
                      <span className="shrink-0 font-mono-code text-xs text-muted">
                        {sub.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-lg bg-surface-muted p-3 text-xs text-muted flex items-center justify-between">
              <span>Red vertical guideline represents the mandatory 75% AMU threshold.</span>
              <span className="font-mono-code text-primary font-semibold">Zero guesswork</span>
            </div>
          </div>
        )}

        {/* Tab 3: Notices Feed Content */}
        {activeTab === "notices" && (
          <div
            role="tabpanel"
            id="panel-notices"
            aria-labelledby="tab-notices"
            tabIndex={0}
            className="p-4 sm:p-6 focus-visible:outline-none"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Official Department Dispatch Feed
              </span>
              <span className="font-mono-code text-xs text-primary font-semibold">
                Updated in Real Time
              </span>
            </div>

            <div className="space-y-3">
              {noticesFeed.map((notice) => (
                <article
                  key={notice.id}
                  className={cn(
                    "rounded-xl border p-4 transition-all hover:shadow-sm",
                    notice.urgent
                      ? "border-accent-terracotta/30 bg-accent-red-light/40"
                      : "border-border bg-surface"
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "rounded border px-2 py-0.5 font-mono-code text-xs font-bold uppercase",
                          notice.tagColor
                        )}
                      >
                        {notice.tag}
                      </span>
                      {notice.urgent && (
                        <span className="inline-flex items-center gap-1 font-mono-code text-xs font-bold text-accent-terracotta">
                          <AlertCircle className="h-3 w-3" />
                          URGENT
                        </span>
                      )}
                    </div>
                    <span className="font-mono-code text-xs text-muted">{notice.meta}</span>
                  </div>

                  <h3 className="mt-2 text-sm font-semibold text-foreground">
                    {notice.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{notice.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-4 border-t border-border pt-3 text-center">
              <p className="text-xs text-muted">
                Notices arrive directly to the Android app with push alerts so you never rely on forwarded WhatsApp screenshots.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Study Notes & Resources */}
        {activeTab === "resources" && (
          <div
            role="tabpanel"
            id="panel-resources"
            aria-labelledby="tab-resources"
            tabIndex={0}
            className="p-4 sm:p-6 focus-visible:outline-none"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                MCA 26 Curated Academic Vault
              </span>
              <span className="font-mono-code text-xs text-muted">
                4 Core Repositories
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {courseResources.map((res) => (
                <div
                  key={res.code}
                  className="rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-xs font-bold text-primary">
                      {res.code}
                    </span>
                    <span className="rounded bg-surface-muted px-2 py-0.5 font-mono-code text-xs text-muted">
                      {res.format}
                    </span>
                  </div>

                  <h3 className="mt-2 text-sm font-semibold text-foreground">
                    {res.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{res.units}</p>

                  <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5 text-xs">
                    <span className="text-primary font-medium">{res.downloads}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-muted hover:text-primary">
                      Available in App
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-border bg-surface-muted p-3 text-center text-xs text-muted">
              All PDF study materials are cached offline inside the Android app for zero-buffering exam preparation.
            </div>
          </div>
        )}

        {/* Terminal Bottom Status Bar */}
        <div className="flex flex-wrap items-center justify-between border-t border-border bg-surface-muted/80 px-4 py-2.5 text-xs text-muted sm:px-6">
          <div className="flex items-center gap-2">
            <span className="font-mono-code text-xs text-foreground font-semibold">
              Department of Computer Science
            </span>
            <span className="text-muted/60">/</span>
            <span className="font-mono-code text-xs">Aligarh Muslim University</span>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs">
            <span>Version: {siteConfig.appVersion}</span>
            <span className="hidden sm:inline text-primary font-semibold">
              Student Platform Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
