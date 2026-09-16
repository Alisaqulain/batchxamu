import { getSupabaseServerClient, AppVersion } from "@/lib/supabase";
import { siteConfig } from "@/lib/site";

export async function getLatestAppVersion(): Promise<AppVersion> {
  const fallback: AppVersion = {
    id: "fallback-v1",
    latest_version: siteConfig.appVersion || "1.0.8",
    minimum_supported_version: "1.0.8",
    force_update: false,
    update_title: "AMU BATCH X Android Application",
    update_description: "The official computer science student app for Aligarh Muslim University.",
    download_url: siteConfig.androidDownloadUrl || null,
    version_code: 11,
    latest_version_code: 11,
    apk_file_name: "batch-x.apk",
    apk_file_size: "24.2 MB",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("app_versions")
      .select("*")
      .order("version_code", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(1);

    if (error || !data || data.length === 0) {
      return fallback;
    }

    return data[0] as AppVersion;
  } catch (err) {
    console.error("Error fetching latest app version from Supabase:", err);
    return fallback;
  }
}

export async function getAllAppVersions(): Promise<AppVersion[]> {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("app_versions")
      .select("*")
      .order("version_code", { ascending: false })
      .order("created_at", { ascending: false });

    if (error || !data) {
      return [];
    }

    return data as AppVersion[];
  } catch (err) {
    console.error("Error fetching app versions from Supabase:", err);
    return [];
  }
}

export async function getRecentActivityLogs(limit: number = 10): Promise<import("@/lib/supabase").AdminActivityLog[]> {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("admin_activity_logs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error || !data) {
      return [];
    }

    return data as import("@/lib/supabase").AdminActivityLog[];
  } catch (err) {
    console.error("Error fetching activity logs:", err);
    return [];
  }
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export type DownloadSourceType = "github" | "supabase" | "direct";

export interface ResolvedDownload {
  sourceType: DownloadSourceType;
  sourceLabel: string;
  downloadUrl: string;
  version: string;
  versionCode: number;
  fileName: string;
  fileSize: string;
}

export function resolveDownloadSource(versionRecord?: AppVersion | null): ResolvedDownload {
  const defaultUrl =
    siteConfig.androidDownloadUrl ||
    "https://github.com/sameerahmad005/Batch-26/releases/download/v1.0.8/v1.0.8.apk";

  const rawUrl = versionRecord?.download_url || defaultUrl;
  const ver = versionRecord?.latest_version || siteConfig.appVersion || "1.0.8";
  const code = versionRecord?.version_code || 11;
  const fileName = versionRecord?.apk_file_name || `batch-x-v${ver}.apk`;
  const fileSize = versionRecord?.apk_file_size || "24.2 MB";

  let sourceType: DownloadSourceType = "direct";
  let sourceLabel = "Official Channel";

  if (rawUrl.includes("github.com")) {
    sourceType = "github";
    sourceLabel = "GitHub Release";
  } else if (rawUrl.includes("supabase.co") || rawUrl.includes("/storage/v1/object/")) {
    sourceType = "supabase";
    sourceLabel = "Supabase Cloud CDN";
  }

  return {
    sourceType,
    sourceLabel,
    downloadUrl: rawUrl,
    version: ver,
    versionCode: code,
    fileName,
    fileSize,
  };
}

