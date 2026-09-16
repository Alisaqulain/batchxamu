"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Upload, HardDrive, History } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    label: "Upload APK",
    href: "/admin/upload",
    icon: Upload,
    exact: false,
  },
  {
    label: "Manage APKs",
    href: "/admin/apks",
    icon: HardDrive,
    exact: false,
  },
  {
    label: "Release History",
    href: "/admin/versions",
    icon: History,
    exact: false,
  },
];

export function AdminNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 overflow-x-auto py-1 font-mono-code text-xs scrollbar-none" aria-label="Admin Navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = item.exact
          ? pathname === item.href
          : pathname === item.href || pathname.startsWith(item.href + "/");

        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-1.5 font-medium transition-colors ${
              isActive
                ? "bg-primary text-white shadow-2xs font-bold"
                : "text-muted hover:text-foreground hover:bg-surface"
            }`}
          >
            <Icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-muted"}`} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
