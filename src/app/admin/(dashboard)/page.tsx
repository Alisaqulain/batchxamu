import Link from "next/link";
import {
  getLatestAppVersion,
  getAllAppVersions,
  getRecentActivityLogs,
} from "@/lib/app-version";
import {
  Upload,
  HardDrive,
  History,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Download,
  ArrowUpRight,
  Sparkles,
  Layers,
  FileCode,
} from "lucide-react";

export const revalidate = 0; // Dynamic admin dashboard

export default async function AdminDashboardPage() {
  const [latest, allVersions, logs] = await Promise.all([
    getLatestAppVersion(),
    getAllAppVersions(),
    getRecentActivityLogs(6),
  ]);

  const hasDownloadUrl = !!latest.download_url;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/80 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-primary font-semibold tracking-wider uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Telemetry & Release Control</span>
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground mt-1">
            System Operations Dashboard
          </h1>
          <p className="font-mono-code text-xs text-muted mt-1">
            Official distribution node for AMU BATCH X Android application releases.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/admin/upload"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 font-mono-code text-xs font-bold text-white shadow-xs hover:bg-primary-hover transition-colors"
          >
            <Upload className="h-3.5 w-3.5" />
            <span>Upload New APK</span>
          </Link>
          <Link
            href="/download"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 font-mono-code text-xs text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
          >
            <span>Public Page</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Primary Active Release Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary-light/50 via-surface to-surface p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-[11px]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-bold text-primary">
                <CheckCircle2 className="h-3 w-3" />
                ACTIVE PUBLIC RELEASE
              </span>
              <span className="text-muted">·</span>
              <span className="text-muted">Target Code: {latest.version_code || "11"}</span>
              <span className="text-muted">·</span>
              <span className="text-muted">Min OS: v{latest.minimum_supported_version}</span>
            </div>

            <div className="flex items-baseline gap-3">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                v{latest.latest_version}
              </h2>
              <span className="font-mono-code text-xs text-muted">
                {latest.update_title || "Official Production Build"}
              </span>
            </div>

            <p className="font-mono-code text-xs text-muted max-w-2xl leading-relaxed">
              {latest.update_description || "Latest verified build distributed to Department of Computer Science students."}
            </p>
          </div>

          {/* Action & Binary Status */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 font-mono-code text-xs">
            {hasDownloadUrl ? (
              <a
                href={latest.download_url!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground hover:bg-surface-muted hover:border-primary/40 transition-colors"
              >
                <Download className="h-4 w-4 text-primary" />
                <div className="text-left">
                  <div className="text-[11px] font-bold">Download Binary</div>
                  <div className="text-[10px] text-muted">{latest.apk_file_size || "Direct Link"}</div>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-amber-800 text-xs">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
                <span>No direct download URL attached</span>
              </div>
            )}

            <Link
              href="/admin/apks"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3.5 py-2.5 font-medium text-foreground hover:bg-surface-muted transition-colors"
            >
              <HardDrive className="h-3.5 w-3.5 text-muted" />
              <span>Manage Binary</span>
            </Link>
          </div>
        </div>

        {/* Binary Details Sub-strip */}
        <div className="mt-5 pt-4 border-t border-border/70 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-code text-xs">
          <div>
            <span className="text-[10px] text-muted uppercase tracking-wider block">APK Filename</span>
            <span className="font-semibold text-foreground truncate block">
              {latest.apk_file_name || "batch-x.apk"}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-muted uppercase tracking-wider block">Binary Size</span>
            <span className="font-semibold text-foreground block">
              {latest.apk_file_size || "N/A"}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-muted uppercase tracking-wider block">Force Update</span>
            <span className={`inline-flex items-center gap-1 font-bold ${latest.force_update ? "text-red-600" : "text-primary"}`}>
              {latest.force_update ? "REQUIRED (ENFORCED)" : "OPTIONAL (DEFAULT)"}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-muted uppercase tracking-wider block">Release Date</span>
            <span className="text-muted block">
              {new Date(latest.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted">
            <span className="font-mono-code text-[11px] uppercase tracking-wider">Active Version</span>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div className="font-display text-2xl font-bold text-foreground mt-2">
            v{latest.latest_version}
          </div>
          <div className="font-mono-code text-[11px] text-muted mt-1">
            Build code: {latest.version_code || "11"}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted">
            <span className="font-mono-code text-[11px] uppercase tracking-wider">Total Releases</span>
            <Layers className="h-4 w-4 text-primary" />
          </div>
          <div className="font-display text-2xl font-bold text-foreground mt-2">
            {allVersions.length}
          </div>
          <div className="font-mono-code text-[11px] text-muted mt-1">
            Tracked in Supabase DB
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted">
            <span className="font-mono-code text-[11px] uppercase tracking-wider">Storage Node</span>
            <HardDrive className="h-4 w-4 text-primary" />
          </div>
          <div className="font-display text-2xl font-bold text-foreground mt-2">
            app-releases
          </div>
          <div className="font-mono-code text-[11px] text-primary font-medium mt-1">
            Supabase Object Storage
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted">
            <span className="font-mono-code text-[11px] uppercase tracking-wider">Update Policy</span>
            <AlertTriangle className="h-4 w-4 text-muted" />
          </div>
          <div className="font-display text-2xl font-bold text-foreground mt-2">
            {latest.force_update ? "Enforced" : "Optional"}
          </div>
          <div className="font-mono-code text-[11px] text-muted mt-1">
            Min supported: v{latest.minimum_supported_version}
          </div>
        </div>
      </div>

      {/* Grid: Quick Actions & Recent Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Operations Actions */}
        <div className="space-y-3 lg:col-span-1">
          <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-muted">
            Operational Shortcuts
          </div>

          <div className="space-y-2.5">
            <Link
              href="/admin/upload"
              className="flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 hover:border-primary hover:bg-surface-muted transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Upload className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono-code text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                    Upload New APK
                  </div>
                  <div className="font-mono-code text-[11px] text-muted">
                    Publish new binary to app-releases
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
            </Link>

            <Link
              href="/admin/apks"
              className="flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 hover:border-primary hover:bg-surface-muted transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-muted border border-border text-muted">
                  <HardDrive className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono-code text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                    Manage APK Files
                  </div>
                  <div className="font-mono-code text-[11px] text-muted">
                    Replace binaries, edit metadata or delete
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
            </Link>

            <Link
              href="/admin/versions"
              className="flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 hover:border-primary hover:bg-surface-muted transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-muted border border-border text-muted">
                  <History className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono-code text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                    Release Version History
                  </div>
                  <div className="font-mono-code text-[11px] text-muted">
                    Full build logs and forced update toggles
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
            </Link>

            <a
              href="https://supabase.com/dashboard/project/isibtuxbqrcnrootuikw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-surface p-3.5 hover:border-primary hover:bg-surface-muted transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-muted border border-border text-muted">
                  <FileCode className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono-code text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                    Supabase Console
                  </div>
                  <div className="font-mono-code text-[11px] text-muted">
                    Direct DB tables, logs, and storage explorer
                  </div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Recent Activity Audit Log */}
        <div className="space-y-3 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-muted">
              Recent Administrative Activity
            </div>
            <span className="font-mono-code text-[11px] text-muted">
              Audit log stream
            </span>
          </div>

          <div className="rounded-xl border border-border bg-surface divide-y divide-border overflow-hidden shadow-2xs">
            {logs.length === 0 ? (
              <div className="p-6 text-center font-mono-code text-xs text-muted">
                No recorded admin activities yet.
              </div>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="p-3.5 flex items-start gap-3 hover:bg-surface-muted/50 transition-colors">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-3 w-3" />
                  </div>
                  <div className="flex-1 min-w-0 font-mono-code text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="font-bold text-foreground">
                        {log.action}
                      </span>
                      <span className="text-[10px] text-muted">
                        {new Date(log.created_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    {log.details && (
                      <p className="text-[11px] text-muted mt-0.5 truncate">
                        {log.details}
                      </p>
                    )}
                    <span className="text-[10px] text-primary/80 mt-1 block">
                      by {log.admin_email}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
