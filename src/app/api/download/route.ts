import { NextResponse } from "next/server";
import { getLatestAppVersion, resolveDownloadSource } from "@/lib/app-version";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const latestVersion = await getLatestAppVersion();
    const resolved = resolveDownloadSource(latestVersion);

    if (resolved.downloadUrl) {
      return NextResponse.redirect(resolved.downloadUrl, {
        status: 307,
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "X-Release-Version": resolved.version,
          "X-Release-Source": resolved.sourceType,
        },
      });
    }

    return NextResponse.redirect(siteConfig.releasesUrl, 307);
  } catch (error) {
    console.error("Error in /api/download redirect route:", error);
    return NextResponse.redirect(siteConfig.releasesUrl, 307);
  }
}
