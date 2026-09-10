import {
  teacherCapabilities,
  teacherDashboardCards,
  teacherWorkflow,
} from "@/data/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function TeacherSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Teachers"
          title="Connecting the classroom."
          description="Planned teacher tools to manage classes, attendance, notices and updates — with instant student notifications."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <StatusBadge status="coming-soon" />
              <span className="text-sm text-muted">Not yet available</span>
            </div>
            <ul className="space-y-3">
              {teacherCapabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-muted before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">
                Class update workflow
              </p>
              <div className="flex flex-col items-center gap-1">
                {teacherWorkflow.map((step, i) => {
                  const isAlert =
                    step.includes("Cancel") || step.includes("Reschedule");
                  const isEnd = step === "Student App";
                  return (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "rounded-xl px-4 py-2 text-sm font-semibold",
                          isAlert
                            ? "border border-accent-coral/50 bg-accent-red-light text-accent-red"
                            : isEnd
                              ? "bg-primary text-white"
                              : "border border-border bg-background text-foreground"
                        )}
                      >
                        {step}
                      </div>
                      {i < teacherWorkflow.length - 1 && (
                        <ChevronDown
                          className={cn(
                            "my-0.5 h-4 w-4",
                            isAlert ? "text-accent-red" : "text-primary/40"
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Teacher Dashboard Preview
              </span>
              <StatusBadge status="coming-soon" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {teacherDashboardCards.map((title) => (
                <div
                  key={title}
                  className="rounded-xl border border-dashed border-border bg-background p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">{title}</span>
                    <StatusBadge status="coming-soon" />
                  </div>
                  <div className="h-2 w-full rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
