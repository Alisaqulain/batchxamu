interface PageHeaderProps {
  title: string;
  description: string;
  label?: string;
}

export function PageHeader({ title, description, label }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface grain">
      <div className="pointer-events-none absolute inset-0 mesh-grid" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary-bright to-accent-coral sm:w-1.5" />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        {label && (
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
            {label}
          </p>
        )}
        <h1 className="animate-rise font-display max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="animate-rise animate-rise-delay-1 mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
