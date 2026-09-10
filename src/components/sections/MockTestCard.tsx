import type { MockTestItem } from "@/data/mockTests";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Clock, FileQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

interface MockTestCardProps {
  test: MockTestItem;
}

export function MockTestCard({ test }: MockTestCardProps) {
  const isPremium = test.tier === "premium";

  return (
    <article
      className={cn(
        "group rounded-2xl border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        isPremium
          ? "border-accent-coral/40 hover:border-accent-coral"
          : "border-border hover:border-primary/40"
      )}
    >
      <div className="mb-4 flex items-start justify-between">
        <span
          className={cn(
            "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
            isPremium
              ? "bg-accent-red-light text-accent-red"
              : "bg-primary-light text-primary"
          )}
        >
          {isPremium ? "Premium" : "Free"}
        </span>
        <StatusBadge status={test.status} />
      </div>

      <h3 className="text-lg font-semibold text-foreground">{test.subject}</h3>

      <div className="mt-3 flex gap-4 text-sm text-muted">
        <span className="flex items-center gap-1">
          <FileQuestion className="h-3.5 w-3.5" aria-hidden="true" />
          {test.questions} Questions
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {test.duration}
        </span>
      </div>
    </article>
  );
}
