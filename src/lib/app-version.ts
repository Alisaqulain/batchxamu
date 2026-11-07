import { cache } from "react";
import { getSupabaseServerClient, AppVersion } from "@/lib/supabase";
import { siteConfig } from "@/lib/site";

/**
 * Single source of truth for the released app version.
 * Reads the newest row of `app_versions`. Every page, component, API route
 * and SEO file must go through this function (or `getLatestRelease`).
 * Wrapped in React `cache()` so one request only queries the database once.
 */
export const getLatestAppVersion = cache(async (): Promise<AppVersion> => {
  const now = new Date().toISOString();
  const fallback: AppVersion = {
    id: "fallback",
    latest_version: siteConfig.fallbackAppVersion,
    minimum_supported_version: siteConfig.fallbackAppVersion,
    force_update: false,
    update_title: null,
    update_description: null,
    download_url: siteConfig.androidDownloadUrl,
    version_code: null,
    latest_version_code: null,
    apk_file_name: null,
    apk_file_size: null,
    created_at: now,
    updated_at: now,
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
      if (error) console.error("Error fetching latest app version:", error.message);
      return fallback;
    }

    return data[0] as AppVersion;
  } catch (err) {
    console.error("Error fetching latest app version from Supabase:", err);
    return fallback;
  }
});

/** Latest version record resolved into display/download info. */
export async function getLatestRelease(): Promise<ResolvedDownload> {
  return resolveDownloadSource(await getLatestAppVersion());
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
  const rawUrl = versionRecord?.download_url || siteConfig.androidDownloadUrl;
  const ver = versionRecord?.latest_version || siteConfig.fallbackAppVersion;
  const code = versionRecord?.version_code ?? 0;
  const fileName = versionRecord?.apk_file_name || `batch-x${ver ? `-v${ver}` : ""}.apk`;
  const fileSize = versionRecord?.apk_file_size || "";

  let sourceType: DownloadSourceType = "direct";
  let sourceLabel = "Direct download";

  if (rawUrl.includes("github.com")) {
    sourceType = "github";
    sourceLabel = "GitHub Release";
  } else if (rawUrl.includes("supabase.co") || rawUrl.includes("/storage/v1/object/")) {
    sourceType = "supabase";
    sourceLabel = "Official server";
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

