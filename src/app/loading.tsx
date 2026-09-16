export default function Loading() {
  return (
    <div className="mx-auto max-w-[1536px] px-4 py-12 sm:px-8 lg:px-12 xl:px-16 animate-pulse">
      {/* Top Masthead Skeleton */}
      <div className="space-y-4 max-w-3xl">
        <div className="h-6 w-48 rounded-full bg-surface-muted" />
        <div className="h-10 w-3/4 rounded-xl bg-surface-muted" />
        <div className="h-5 w-1/2 rounded-lg bg-surface-muted" />
      </div>

      {/* Grid Skeleton */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-border bg-surface p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-lg bg-surface-muted" />
              <div className="h-5 w-16 rounded bg-surface-muted" />
            </div>
            <div className="h-6 w-3/4 rounded bg-surface-muted" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-surface-muted" />
              <div className="h-4 w-5/6 rounded bg-surface-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
