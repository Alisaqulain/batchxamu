import Link from "next/link";
import { Home, Download, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center border-b border-border bg-background px-4 py-16 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary-light text-primary">
          <FileQuestion className="h-7 w-7" />
        </div>
        <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-accent-terracotta">
          Error 404 // Page Not Found
        </span>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Lecture Hall or Document Not Found
        </h1>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">
          The requested syllabus ledger, academic link, or classroom route does not exist in the BATCH X directory.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-mono-code text-xs font-bold text-white shadow-xs hover:bg-primary-hover transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Return to App Home</span>
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 font-mono-code text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-surface-muted transition-colors"
          >
            <Download className="h-4 w-4 text-primary" />
            <span>Download Android APK</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
