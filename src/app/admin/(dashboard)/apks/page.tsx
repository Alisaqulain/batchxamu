import { getAllAppVersions } from "@/lib/app-version";
import { AdminApkTable } from "@/components/admin/AdminApkTable";
import { HardDrive, Upload, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const revalidate = 0;

export default async function AdminApksPage() {
  const versions = await getAllAppVersions();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/80 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-primary font-semibold tracking-wider uppercase">
            <HardDrive className="h-3.5 w-3.5" />
            <span>Binary Asset Storage Control</span>
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground mt-1">
            Manage APK Files
          </h1>
          <p className="font-mono-code text-xs text-muted mt-1">
            Manage, replace, or delete Android packages and configure update enforcement.
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
            href="/admin"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 font-mono-code text-xs text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>

      {/* APKs Table */}
      <AdminApkTable versions={versions} />
    </div>
  );
}
