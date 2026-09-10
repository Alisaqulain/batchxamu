import type { Program } from "@/data/programs";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded-md bg-primary-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          {program.level}
        </span>
        <StatusBadge status={program.status} />
      </div>
      <h3 className="text-lg font-bold leading-snug text-foreground">
        {program.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{program.focus}</p>
    </article>
  );
}
