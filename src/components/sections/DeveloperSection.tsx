import { developers } from "@/data/developers";
import { DeveloperCard } from "./DeveloperCard";

export function DeveloperSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Team
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Built by students who understand the problem.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {developers.map((developer) => (
            <DeveloperCard key={developer.name} developer={developer} />
          ))}
        </div>
      </div>
    </section>
  );
}
