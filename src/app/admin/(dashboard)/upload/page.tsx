import { getLatestAppVersion } from "@/lib/app-version";
import { AdminApkUploadForm } from "@/components/admin/AdminApkUploadForm";
import { Upload, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const revalidate = 0;

export default async function AdminUploadPage() {
  const latestVersion = await getLatestAppVersion();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between border-b border-border/80 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-primary font-semibold tracking-wider uppercase">
            <Upload className="h-3.5 w-3.5" />
            <span>Artifact Ingestion Pipeline</span>
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground mt-1">
            Upload & Publish New APK
          </h1>
          <p className="font-mono-code text-xs text-muted mt-1">
            Upload a compiled Android package directly to Supabase Storage and register the update.
          </p>
        </div>

        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 font-mono-code text-xs text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      {/* Upload Form Component */}
      <AdminApkUploadForm latestVersion={latestVersion} />
    </div>
  );
}
