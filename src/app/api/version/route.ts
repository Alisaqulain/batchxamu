import { NextResponse } from "next/server";
import { getLatestAppVersion, resolveDownloadSource } from "@/lib/app-version";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const latest = await getLatestAppVersion();
    const resolved = resolveDownloadSource(latest);

    return NextResponse.json(
      {
        success: true,
        version: resolved.version,
        versionCode: resolved.versionCode,
        downloadUrl: resolved.downloadUrl,
        sourceType: resolved.sourceType,
        sourceLabel: resolved.sourceLabel,
        fileName: resolved.fileName,
        fileSize: resolved.fileSize,
        forceUpdate: latest.force_update,
        updateTitle: latest.update_title,
        updateDescription: latest.update_description,
        minimumSupportedVersion: latest.minimum_supported_version,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
        },
      }
    );
  } catch (error: any) {
    console.error("Error in /api/version route:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch latest version",
      },
      { status: 500 }
    );
  }
}
