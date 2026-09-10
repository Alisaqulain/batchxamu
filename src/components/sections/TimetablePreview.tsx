import { timetableSample } from "@/data/features";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TimetablePreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm lg:order-2">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Weekly Timetable
              </span>
              <span className="rounded-full bg-primary-light px-2.5 py-0.5 text-[10px] font-bold text-primary">
                Sample UI
              </span>
            </div>
            <div className="space-y-5">
              {timetableSample.map((day) => (
                <div key={day.day}>
                  <h4 className="mb-2 font-bold text-primary">{day.day}</h4>
                  <div className="space-y-2">
                    {day.classes.map((cls) => (
                      <div
                        key={`${day.day}-${cls.time}`}
                        className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/30"
                      >
                        <span className="text-sm font-mono font-semibold text-muted">
                          {cls.time}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {cls.subject}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:order-1">
            <SectionHeader
              align="left"
              label="Timetable"
              title="Your day, organized."
              description="See classes and schedules in a clean weekly view — no more hunting through chat groups."
              className="mb-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
