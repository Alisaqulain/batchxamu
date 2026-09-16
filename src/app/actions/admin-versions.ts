"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseServerClient, STORAGE_BUCKET_APK } from "@/lib/supabase";
import { verifyAdminSession } from "./admin-auth";
import { formatBytes } from "@/lib/app-version";

export interface VersionActionResult {
  success: boolean;
  error?: string;
  data?: any;
}

export interface RegisterApkParams {
  version: string;
  versionCode: number;
  minVersion?: string;
  updateTitle?: string;
  description?: string;
  forceUpdate?: boolean;
  downloadUrl: string;
  apkFileName: string;
  apkFileSize: string;
}

export async function registerUploadedApkAction(
  params: RegisterApkParams
): Promise<VersionActionResult> {
  const session = await verifyAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized. Please log in again." };
  }

  const {
    version,
    versionCode,
    minVersion,
    updateTitle,
    description,
    forceUpdate,
    downloadUrl,
    apkFileName,
    apkFileSize,
  } = params;

  if (!version || !version.trim()) {
    return { success: false, error: "Semantic version string is required." };
  }

  if (!versionCode || versionCode <= 0) {
    return { success: false, error: "Version code must be a valid positive integer." };
  }

  if (!downloadUrl) {
    return { success: false, error: "Download URL must be provided." };
  }

  const supabase = getSupabaseServerClient();

  // Check for duplicate version conflict
  const { data: existingVersion } = await supabase
    .from("app_versions")
    .select("id")
    .eq("latest_version", version.trim())
    .maybeSingle();

  if (existingVersion) {
    return {
      success: false,
      error: `Version ${version.trim()} already exists in database. Edit the release or use a higher version.`,
    };
  }

  try {
    const { error: dbError } = await supabase.from("app_versions").insert({
      latest_version: version.trim(),
      version_code: versionCode,
      latest_version_code: versionCode,
      minimum_supported_version: minVersion?.trim() || version.trim(),
      force_update: !!forceUpdate,
      update_title: updateTitle?.trim() || `AMU BATCH X v${version.trim()} Release`,
      update_description: description?.trim() || "Regular stability and performance updates.",
      download_url: downloadUrl,
      apk_file_name: apkFileName || `batch-x-v${version.trim()}.apk`,
      apk_file_size: apkFileSize || "Unknown size",
    });

    if (dbError) {
      console.error("Database insert error:", dbError);
      return { success: false, error: `Database registration failed: ${dbError.message}` };
    }

    await supabase.from("admin_activity_logs").insert({
      admin_email: session.admin_email || "admin@amubatchx.app",
      action: "Uploaded New APK",
      details: `Released v${version.trim()} (Code ${versionCode}) - ${apkFileSize}`,
    });

    revalidatePath("/");
    revalidatePath("/download");
    revalidatePath("/admin");
    revalidatePath("/admin/apks");
    revalidatePath("/admin/versions");

    return {
      success: true,
      data: { version: version.trim(), versionCode, downloadUrl },
    };
  } catch (err: any) {
    console.error("Error registering uploaded APK:", err);
    return { success: false, error: err.message || "Failed to register uploaded APK." };
  }
}

export async function registerReplacedApkAction(params: {
  id: string;
  downloadUrl: string;
  apkFileName: string;
  apkFileSize: string;
}): Promise<VersionActionResult> {
  const session = await verifyAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized session." };
  }

  const supabase = getSupabaseServerClient();
  const { error: updateError } = await supabase
    .from("app_versions")
    .update({
      download_url: params.downloadUrl,
      apk_file_name: params.apkFileName,
      apk_file_size: params.apkFileSize,
      updated_at: new Date().toISOString(),
    })
    .eq("id", params.id);

  if (updateError) {
    return { success: false, error: updateError.message };
  }

  await supabase.from("admin_activity_logs").insert({
    admin_email: session.admin_email || "admin@amubatchx.app",
    action: "Replaced APK Binary",
    details: `Updated package file for release ID ${params.id} (${params.apkFileSize})`,
  });

  revalidatePath("/");
  revalidatePath("/download");
  revalidatePath("/admin");
  revalidatePath("/admin/apks");
  revalidatePath("/admin/versions");

  return { success: true };
}

export async function uploadApkAction(
  _prevState: VersionActionResult,
  formData: FormData
): Promise<VersionActionResult> {
  const session = await verifyAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized. Please log in again." };
  }

  const version = (formData.get("version") as string)?.trim();
  const versionCodeStr = (formData.get("versionCode") as string)?.trim();
  const minVersion = (formData.get("minVersion") as string)?.trim();
  const updateTitle = (formData.get("updateTitle") as string)?.trim();
  const description = (formData.get("description") as string)?.trim();
  const forceUpdate =
    formData.get("forceUpdate") === "on" || formData.get("forceUpdate") === "true";
  const apkFile = formData.get("apkFile") as File | null;

  if (!version) {
    return { success: false, error: "Version string (e.g. 1.0.9) is required." };
  }

  const versionCode = parseInt(versionCodeStr, 10);
  if (isNaN(versionCode) || versionCode <= 0) {
    return { success: false, error: "Version code must be a valid positive integer." };
  }

  if (!apkFile || apkFile.size === 0) {
    return { success: false, error: "An APK binary file must be selected." };
  }

  if (!apkFile.name.toLowerCase().endsWith(".apk")) {
    return { success: false, error: "Only .apk files are permitted." };
  }

  // Max 100MB limit
  const maxBytes = 100 * 1024 * 1024;
  if (apkFile.size > maxBytes) {
    return {
      success: false,
      error: `File size (${formatBytes(apkFile.size)}) exceeds the maximum allowed 100MB limit.`,
    };
  }

  const supabase = getSupabaseServerClient();

  // Check for duplicate version conflict
  const { data: existingVersion } = await supabase
    .from("app_versions")
    .select("id")
    .eq("latest_version", version)
    .maybeSingle();

  if (existingVersion) {
    return {
      success: false,
      error: `Version ${version} already exists in the database. Edit the release or use a higher version.`,
    };
  }

  try {
    // Generate safe storage path: e.g. 1.0.9/batch-x-1.0.9.apk
    const safeVersion = version.replace(/[^a-zA-Z0-9.-]/g, "_");
    const safeFileName = apkFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const storagePath = `${safeVersion}/${safeFileName}`;

    const arrayBuffer = await apkFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload binary to Supabase Storage bucket app-releases
    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET_APK)
      .upload(storagePath, buffer, {
        contentType: "application/vnd.android.package-archive",
        upsert: true,
      });

    if (uploadError) {
      console.error("Supabase Storage upload error:", uploadError);
      return {
        success: false,
        error: `Storage upload failed: ${uploadError.message}`,
      };
    }

    // Retrieve public download URL
    const { data: urlData } = supabase.storage
      .from(STORAGE_BUCKET_APK)
      .getPublicUrl(storagePath);

    const downloadUrl = urlData.publicUrl;
    const formattedSize = formatBytes(apkFile.size);

    // Insert new version row into public.app_versions
    const { error: dbError } = await supabase.from("app_versions").insert({
      latest_version: version,
      version_code: versionCode,
      latest_version_code: versionCode,
      minimum_supported_version: minVersion || version,
      force_update: forceUpdate,
      update_title: updateTitle || `AMU BATCH X v${version} Release`,
      update_description: description || "Regular stability and performance updates.",
      download_url: downloadUrl,
      apk_file_name: apkFile.name,
      apk_file_size: formattedSize,
    });

    if (dbError) {
      console.error("Database insert error:", dbError);
      return {
        success: false,
        error: `Database registration failed: ${dbError.message}`,
      };
    }

    // Record activity in admin_activity_logs
    await supabase.from("admin_activity_logs").insert({
      admin_email: session.admin_email || "admin@amubatchx.app",
      action: "Uploaded New APK",
      details: `Released v${version} (Code ${versionCode}) - ${formattedSize}`,
    });

    revalidatePath("/");
    revalidatePath("/download");
    revalidatePath("/admin");
    revalidatePath("/admin/apks");
    revalidatePath("/admin/versions");

    return {
      success: true,
      data: { version, versionCode, downloadUrl },
    };
  } catch (err: any) {
    console.error("Failed to process APK upload:", err);
    return {
      success: false,
      error: err.message || "An unexpected error occurred during APK upload.",
    };
  }
}

export async function updateVersionAction(
  id: string,
  updates: {
    latest_version?: string;
    version_code?: number;
    minimum_supported_version?: string;
    force_update?: boolean;
    update_title?: string;
    update_description?: string;
  }
): Promise<VersionActionResult> {
  const session = await verifyAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized session." };
  }

  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("app_versions")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  await supabase.from("admin_activity_logs").insert({
    admin_email: session.admin_email || "admin@amubatchx.app",
    action: "Updated Version Metadata",
    details: `Updated metadata for release ID ${id}`,
  });

  revalidatePath("/");
  revalidatePath("/download");
  revalidatePath("/admin");
  revalidatePath("/admin/apks");
  revalidatePath("/admin/versions");

  return { success: true };
}

export async function replaceApkAction(
  id: string,
  formData: FormData
): Promise<VersionActionResult> {
  const session = await verifyAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized session." };
  }

  const apkFile = formData.get("apkFile") as File | null;
  if (!apkFile || apkFile.size === 0) {
    return { success: false, error: "Please select a replacement .apk file." };
  }

  if (!apkFile.name.toLowerCase().endsWith(".apk")) {
    return { success: false, error: "Only .apk files are supported." };
  }

  const supabase = getSupabaseServerClient();

  // Retrieve current version record
  const { data: versionRecord, error: fetchError } = await supabase
    .from("app_versions")
    .select("*")
    .eq("id", id)
    .single();

  if (fetchError || !versionRecord) {
    return { success: false, error: "Version record not found." };
  }

  try {
    const safeVersion = versionRecord.latest_version.replace(/[^a-zA-Z0-9.-]/g, "_");
    const safeFileName = apkFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const storagePath = `${safeVersion}/${safeFileName}`;

    const buffer = Buffer.from(await apkFile.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET_APK)
      .upload(storagePath, buffer, {
        contentType: "application/vnd.android.package-archive",
        upsert: true,
      });

    if (uploadError) {
      return { success: false, error: `Upload error: ${uploadError.message}` };
    }

    const { data: urlData } = supabase.storage
      .from(STORAGE_BUCKET_APK)
      .getPublicUrl(storagePath);

    const formattedSize = formatBytes(apkFile.size);

    const { error: updateError } = await supabase
      .from("app_versions")
      .update({
        download_url: urlData.publicUrl,
        apk_file_name: apkFile.name,
        apk_file_size: formattedSize,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (updateError) {
      return { success: false, error: updateError.message };
    }

    await supabase.from("admin_activity_logs").insert({
      admin_email: session.admin_email || "admin@amubatchx.app",
      action: "Replaced APK Binary",
      details: `Replaced binary for v${versionRecord.latest_version} with ${apkFile.name} (${formattedSize})`,
    });

    revalidatePath("/");
    revalidatePath("/download");
    revalidatePath("/admin");
    revalidatePath("/admin/apks");
    revalidatePath("/admin/versions");

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to replace APK file." };
  }
}

export async function deleteVersionAction(id: string): Promise<VersionActionResult> {
  const session = await verifyAdminSession();
  if (!session) {
    return { success: false, error: "Unauthorized session." };
  }

  const supabase = getSupabaseServerClient();

  // Check total versions count
  const { count } = await supabase
    .from("app_versions")
    .select("*", { count: "exact", head: true });

  if (count !== null && count <= 1) {
    return {
      success: false,
      error:
        "Cannot delete the only remaining release in the database. At least one release must exist.",
    };
  }

  // Retrieve version details to clean up storage if applicable
  const { data: record } = await supabase
    .from("app_versions")
    .select("*")
    .eq("id", id)
    .single();

  if (!record) {
    return { success: false, error: "Record not found." };
  }

  // Attempt to delete from Supabase storage if file is in app-releases
  if (record.download_url && record.download_url.includes(STORAGE_BUCKET_APK)) {
    try {
      const url = new URL(record.download_url);
      const parts = url.pathname.split(`/${STORAGE_BUCKET_APK}/`);
      if (parts.length > 1) {
        const filePath = decodeURIComponent(parts[1]);
        await supabase.storage.from(STORAGE_BUCKET_APK).remove([filePath]);
      }
    } catch (e) {
      console.warn("Could not parse storage path for deletion:", e);
    }
  }

  const { error: deleteError } = await supabase
    .from("app_versions")
    .delete()
    .eq("id", id);

  if (deleteError) {
    return { success: false, error: deleteError.message };
  }

  await supabase.from("admin_activity_logs").insert({
    admin_email: session.admin_email || "admin@amubatchx.app",
    action: "Deleted App Version",
    details: `Deleted release v${record.latest_version} (Code ${record.version_code})`,
  });

  revalidatePath("/");
  revalidatePath("/download");
  revalidatePath("/admin");
  revalidatePath("/admin/apks");
  revalidatePath("/admin/versions");

  return { success: true };
}
