interface PageHeaderProps {
  title: string;
  description: string;
  label?: string;
}

export function PageHeader({ title, description, label }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface grain">
      <div className="pointer-events-none absolute inset-0 arch-grid" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary-bright to-accent-terracotta sm:w-1.5" />

      <div className="relative z-[1] mx-auto max-w-[1536px] px-4 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16 lg:py-20">
        {label && (
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary-light px-2.5 py-1 font-mono-code text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright animate-pulse" />
            <span>{label}</span>
          </div>
        )}
        <h1 className="animate-rise font-display max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="animate-rise animate-rise-delay-1 mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
