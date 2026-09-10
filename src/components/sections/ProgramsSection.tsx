import { programs } from "@/data/programs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProgramCard } from "./ProgramCard";
import { DownloadButton } from "@/components/ui/DownloadButton";

interface ProgramsSectionProps {
  showHeader?: boolean;
}

export function ProgramsSection({ showHeader = true }: ProgramsSectionProps) {
  return (
    <section className="border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            label="Programs"
            title="One platform. Multiple programs."
            description="Designed for the Department of Computer Science community — expanding across undergraduate, postgraduate and doctoral programs."
          />
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <DownloadButton size="lg" />
        </div>
      </div>
    </section>
  );
}
