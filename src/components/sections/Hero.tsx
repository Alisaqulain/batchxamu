import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface grain">
      <div className="pointer-events-none absolute inset-0 mesh-grid" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary-bright to-accent-coral sm:w-1.5" />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="animate-rise font-display text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-foreground min-[480px]:text-4xl sm:text-5xl lg:text-[3.4rem]">
              Your{" "}
              <span className="relative inline-block text-primary">
                Department.
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-primary-bright/25" />
              </span>
              <br />
              Your{" "}
              <span className="text-primary">Academic Life.</span>
              <br />
              <span className="text-foreground">One App.</span>
            </h1>

            <p className="animate-rise animate-rise-delay-1 mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              Attendance, timetable, notices, notes, assignments and exams —
              organised for Computer Science students in one clean mobile
              experience.
            </p>

            <div className="animate-rise animate-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <DownloadButton size="lg" fullWidth className="sm:w-auto" />
              <Button
                href="/features"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <p className="animate-rise animate-rise-delay-3 mt-6 text-sm text-muted">
              Built for students. Designed for the department.
            </p>
          </div>

          <div className="animate-rise animate-rise-delay-2 mx-auto w-full max-w-md lg:max-w-none">
            <PhoneMockup variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
