import { NextResponse } from "next/server";
import { getLatestAppVersion, resolveDownloadSource } from "@/lib/app-version";

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

    return NextResponse.redirect(
      "https://github.com/sameerahmad005/Batch-26/releases/download/v1.0.8/v1.0.8.apk",
      307
    );
  } catch (error) {
    console.error("Error in /api/download redirect route:", error);
    return NextResponse.redirect(
      "https://github.com/sameerahmad005/Batch-26/releases/download/v1.0.8/v1.0.8.apk",
      307
    );
  }
}
