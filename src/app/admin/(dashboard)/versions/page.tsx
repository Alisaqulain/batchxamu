import { getAllAppVersions } from "@/lib/app-version";
import { History, Download, AlertTriangle, CheckCircle2, Upload, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const revalidate = 0;

export default async function AdminVersionsPage() {
  const versions = await getAllAppVersions();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/80 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-primary font-semibold tracking-wider uppercase">
            <History className="h-3.5 w-3.5" />
            <span>Changelogs & Distribution History</span>
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground mt-1">
            App Release History
          </h1>
          <p className="font-mono-code text-xs text-muted mt-1">
            Audit log of all registered versions, minimum support policies, and release changelogs.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/admin/upload"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 font-mono-code text-xs font-bold text-white shadow-xs hover:bg-primary-hover transition-colors"
          >
            <Upload className="h-3.5 w-3.5" />
            <span>New Release</span>
          </Link>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 font-mono-code text-xs text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>

      {/* Release Cards Timeline */}
      <div className="space-y-4">
        {versions.map((ver, idx) => {
          const isLatest = idx === 0;

          return (
            <div
              key={ver.id}
              className={`rounded-2xl border bg-surface p-5 sm:p-6 transition-all ${
                isLatest
                  ? "border-primary/40 shadow-sm"
                  : "border-border shadow-2xs"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px]">
                    <span className="font-bold text-foreground text-lg">
                      v{ver.latest_version}
                    </span>
                    <span className="text-muted">· Build Code: {ver.version_code || "N/A"}</span>
                    {isLatest && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary-light px-2.5 py-0.5 text-[10px] font-bold text-primary">
                        <CheckCircle2 className="h-3 w-3" />
                        LATEST PUBLIC RELEASE
                      </span>
                    )}
                  </div>

                  {ver.update_title && (
                    <h2 className="font-display text-base font-semibold text-foreground mt-1">
                      {ver.update_title}
                    </h2>
                  )}
                </div>

                <div className="flex items-center gap-2 font-mono-code text-xs">
                  {ver.download_url && (
                    <a
                      href={ver.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-1.5 text-foreground hover:border-primary/40 hover:bg-surface-muted transition-colors"
                    >
                      <Download className="h-3.5 w-3.5 text-primary" />
                      <span>{ver.apk_file_size || "APK"}</span>
                    </a>
                  )}
                  <Link
                    href="/admin/apks"
                    className="inline-flex items-center rounded-xl border border-border bg-surface px-3 py-1.5 text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
                  >
                    Manage
                  </Link>
                </div>
              </div>

              {/* Changelog body */}
              <div className="mt-4 rounded-xl border border-border/80 bg-surface-muted/40 p-4 font-mono-code text-xs">
                <div className="text-[10px] uppercase tracking-wider text-muted font-bold mb-1.5">
                  Changelog & Release Notes
                </div>
                {ver.update_description ? (
                  <p className="whitespace-pre-line text-foreground/90 leading-relaxed">
                    {ver.update_description}
                  </p>
                ) : (
                  <span className="italic text-muted">No release notes provided for this build.</span>
                )}
              </div>

              {/* Metadata strip */}
              <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 font-mono-code text-[11px] text-muted">
                <div className="flex flex-wrap items-center gap-4">
                  <span>
                    Minimum Supported OS: <strong className="text-foreground">v{ver.minimum_supported_version || "1.0.8"}</strong>
                  </span>
                  <span>
                    Policy:{" "}
                    {ver.force_update ? (
                      <span className="font-bold text-red-600 inline-flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Mandatory Upgrade
                      </span>
                    ) : (
                      <span className="text-foreground font-medium">Optional</span>
                    )}
                  </span>
                  {ver.apk_file_name && (
                    <span>
                      Package: <span className="text-foreground">{ver.apk_file_name}</span>
                    </span>
                  )}
                </div>

                <span>
                  Released:{" "}
                  {new Date(ver.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
