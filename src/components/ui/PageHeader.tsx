interface PageHeaderProps {
  title: string;
  description: string;
  label?: string;
}

export function PageHeader({ title, description, label }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-primary-light/50 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-accent-red-light/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {label && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {label}
          </p>
        )}
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </section>
  );
}
