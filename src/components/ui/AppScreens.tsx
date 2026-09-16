"use client";

import Image from "next/image";

export const appPreviewImages = {
  attendance: "/app-preview/Attendance Preview.jpg",
  dailyTimetable: "/app-preview/Daily Class Timetable Preview.jpg",
  notices: "/app-preview/Notice Preview.jpg",
  vault: "/app-preview/Study Vault Preview.jpg",
  fullTimetable: "/app-preview/Timetable Preview.jpg",
} as const;

export type AppPreviewKey = keyof typeof appPreviewImages;

export function AttendanceAppScreen({ priority = false }: { priority?: boolean } = {}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        src={appPreviewImages.attendance}
        alt="AMU BATCH X 75% Attendance Tracker Screen (Attendance Preview)"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}

export function DailyTimetableAppScreen({ priority = false }: { priority?: boolean } = {}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        src={appPreviewImages.dailyTimetable}
        alt="AMU BATCH X Daily Class Timetable Screen (Daily Class Timetable Preview)"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}

export function FullTimetableAppScreen({ priority = false }: { priority?: boolean } = {}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        src={appPreviewImages.fullTimetable}
        alt="AMU BATCH X Weekly Timetable Grid Screen (Timetable Preview)"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}

export function TimetableAppScreen({
  selectedDay = "Mon",
  priority = false,
}: {
  selectedDay?: string;
  onSelectDay?: (day: string) => void;
  priority?: boolean;
} = {}) {
  // Toggle between Daily Timetable and Weekly Timetable
  const isWeekly = selectedDay === "Fri" || selectedDay === "grid" || selectedDay === "week";
  const imageSrc = isWeekly
    ? appPreviewImages.fullTimetable
    : appPreviewImages.dailyTimetable;

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        src={imageSrc}
        alt="AMU BATCH X Timetable Screen Preview"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}

export function NoticesAppScreen({ priority = false }: { priority?: boolean } = {}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        src={appPreviewImages.notices}
        alt="AMU BATCH X Verified Department Notice Feed (Notice Preview)"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}

export function VaultAppScreen({ priority = false }: { priority?: boolean } = {}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image
        src={appPreviewImages.vault}
        alt="AMU BATCH X Study Vault & PYQ Library (Study Vault Preview)"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}
