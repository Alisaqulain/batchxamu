import { cn } from "@/lib/utils";
import type { FeatureStatus } from "@/types";

const statusConfig: Record<
  FeatureStatus,
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className: "bg-primary-light text-primary-deep border-primary-bright/30",
  },
  available: {
    label: "Available",
    className: "bg-primary-light text-primary-deep border-primary-bright/30",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-accent-red-light text-accent-red border-accent-coral/50",
  },
  planned: {
    label: "Planned",
    className: "bg-slate-100 text-slate-600 border-slate-200",
  },
};

interface StatusBadgeProps {
  status: FeatureStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
