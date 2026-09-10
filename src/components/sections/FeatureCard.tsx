import type { FeatureStatus } from "@/types";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  status: FeatureStatus;
  accent?: "green" | "neutral" | "coral";
}

const accentStyles = {
  green: "group-hover:border-primary/40 group-hover:bg-primary-light/20",
  neutral: "group-hover:border-border group-hover:shadow-md",
  coral: "group-hover:border-accent-coral/50 group-hover:bg-accent-red-light/20",
};

const iconStyles = {
  green: "bg-primary-light text-primary group-hover:bg-primary/10",
  neutral: "bg-slate-100 text-foreground group-hover:bg-slate-200/80",
  coral: "bg-accent-red-light text-accent-red group-hover:bg-accent-coral/30",
};

export function FeatureCard({
  title,
  description,
  icon,
  status,
  accent = "green",
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        accentStyles[accent]
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
            iconStyles[accent]
          )}
        >
          <FeatureIcon name={icon} />
        </div>
        <StatusBadge status={status} />
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
