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

const iconStyles = {
  green: "bg-primary-light text-primary group-hover:bg-primary group-hover:text-white",
  neutral: "bg-[#eef2ef] text-foreground group-hover:bg-foreground group-hover:text-white",
  coral: "bg-accent-red-light text-accent-red group-hover:bg-accent-red group-hover:text-white",
};

export function FeatureCard({
  title,
  description,
  icon,
  status,
  accent = "green",
}: FeatureCardProps) {
  return (
    <article className="surface-card group p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200",
            iconStyles[accent]
          )}
        >
          <FeatureIcon name={icon} />
        </div>
        <StatusBadge status={status} />
      </div>
      <h3 className="text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
