import { cn } from "@/lib/utils";
import type { FeatureStatus } from "@/types";

const statusConfig: Record<
  FeatureStatus,
  { label: string; className: string; dotClass: string }
> = {
  live: {
    label: "Live in v1.0",
    className: "bg-primary-light text-primary border-primary/25",
    dotClass: "bg-primary-bright",
  },
  available: {
    label: "Available",
    className: "bg-primary-light text-primary border-primary/25",
    dotClass: "bg-primary",
  },
  "coming-soon": {
    label: "In Development",
    className: "bg-accent-red-light text-accent-terracotta border-accent-coral/30",
    dotClass: "bg-accent-terracotta",
  },
  planned: {
    label: "Roadmap",
    className: "bg-surface-muted text-muted border-border",
    dotClass: "bg-muted-light",
  },
};

interface StatusBadgeProps {
  status: FeatureStatus;
  className?: string;
  showDot?: boolean;
}

export function StatusBadge({ status, className, showDot = true }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.planned;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono-code text-[11px] font-medium tracking-tight",
        config.className,
        className
      )}
    >
      {showDot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", config.dotClass)}
          aria-hidden="true"
        />
      )}
      <span>{config.label}</span>
    </span>
  );
}
