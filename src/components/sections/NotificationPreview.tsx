import { notificationSample } from "@/data/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function NotificationPreview() {
  return (
    <section className="border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Notifications"
          title="Real-time updates that matter."
          description="Notices, class changes and assignments delivered when you need them."
        />

        <div className="mx-auto max-w-lg space-y-3">
          {notificationSample.map((item) => (
            <div
              key={item.message}
              className={cn(
                "rounded-2xl border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                item.accent === "coral"
                  ? "border-accent-coral/40"
                  : "border-primary/20"
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full",
                    item.accent === "coral" ? "bg-accent-red" : "bg-primary-bright"
                  )}
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">
                    {item.type}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">Sample notification UI</p>
      </div>
    </section>
  );
}
