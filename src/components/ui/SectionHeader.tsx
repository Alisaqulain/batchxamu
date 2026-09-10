import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  highlight?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  highlight,
}: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : null;

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className="text-primary">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
