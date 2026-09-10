import { attendanceSample } from "@/data/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { cn } from "@/lib/utils";

export function AttendancePreview() {
  return (
    <section className="border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              label="Attendance"
              title="Know your attendance at a glance."
              description="Quickly check attendance without searching through multiple sources."
              className="mb-0"
            />
            <div className="mt-8 hidden lg:block">
              <DownloadButton />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Attendance Overview
              </span>
              <span className="rounded-full bg-primary-light px-2.5 py-0.5 text-[10px] font-bold text-primary">
                Sample UI
              </span>
            </div>
            <div className="space-y-4">
              {attendanceSample.map((row) => {
                const healthy = row.percentage >= 85;
                return (
                  <div
                    key={row.subject}
                    className="rounded-xl border border-border bg-background p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{row.subject}</h4>
                      <span
                        className={cn(
                          "text-xl font-bold",
                          healthy ? "text-primary" : "text-accent-red"
                        )}
                      >
                        {row.percentage}%
                      </span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          healthy ? "bg-primary-bright" : "bg-accent-coral"
                        )}
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
