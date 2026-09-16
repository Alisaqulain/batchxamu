"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { useRouter } from "next/navigation";
import {
  registerUploadedApkAction,
  uploadApkAction,
  VersionActionResult,
} from "@/app/actions/admin-versions";
import {
  Upload,
  FileCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
  HardDrive,
  Info,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { AppVersion, getSupabaseBrowserClient, STORAGE_BUCKET_APK } from "@/lib/supabase";
import { formatBytes } from "@/lib/app-version";

interface Props {
  latestVersion: AppVersion;
}

export function AdminApkUploadForm({ latestVersion }: Props) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStage, setUploadStage] = useState<string>("");

  // Suggested values based on latest release
  const nextVersionCode = (latestVersion.version_code || 11) + 1;
  const currentVer = latestVersion.latest_version || "1.0.8";
  const verParts = currentVer.split(".").map((p) => parseInt(p, 10));
  const nextVer = !isNaN(verParts[2])
    ? `${verParts[0]}.${verParts[1]}.${verParts[2] + 1}`
    : `${currentVer}.1`;

  const [version, setVersion] = useState(nextVer);
  const [versionCode, setVersionCode] = useState(nextVersionCode.toString());
  const [minVersion, setMinVersion] = useState(latestVersion.minimum_supported_version || currentVer);
  const [updateTitle, setUpdateTitle] = useState("");
  const [description, setDescription] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);
  const [state, setState] = useState<VersionActionResult>({ success: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ success: false });
    setFileError(null);

    if (!selectedFile) {
      setFileError("Please select a valid .apk file to upload.");
      return;
    }

    const vCode = parseInt(versionCode, 10);
    if (isNaN(vCode) || vCode <= 0) {
      setState({ success: false, error: "Version code must be a valid positive integer." });
      return;
    }

    setIsUploading(true);
    setUploadStage("Preparing direct upload to Supabase Cloud Storage...");

    try {
      const supabase = getSupabaseBrowserClient();
      const safeVersion = version.replace(/[^a-zA-Z0-9.-]/g, "_");
      const safeFileName = selectedFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const storagePath = `${safeVersion}/${safeFileName}`;

      setUploadStage("Streaming APK binary to Supabase Storage (100MB max)...");
      const { error: uploadErr } = await supabase.storage
        .from(STORAGE_BUCKET_APK)
        .upload(storagePath, selectedFile, {
          contentType: "application/vnd.android.package-archive",
          upsert: true,
        });

      if (uploadErr) {
        console.warn("Direct storage upload failed, attempting server action fallback:", uploadErr);
        setUploadStage("Direct upload failed, attempting server upload fallback...");

        const formData = new FormData();
        formData.append("version", version);
        formData.append("versionCode", versionCode);
        formData.append("minVersion", minVersion);
        formData.append("updateTitle", updateTitle);
        formData.append("description", description);
        formData.append("forceUpdate", forceUpdate ? "true" : "false");
        formData.append("apkFile", selectedFile);

        const res = await uploadApkAction({ success: false }, formData);
        setState(res);
        if (res.success) {
          router.refresh();
        }
        return;
      }

      setUploadStage("Resolving public CDN URL...");
      const { data: urlData } = supabase.storage
        .from(STORAGE_BUCKET_APK)
        .getPublicUrl(storagePath);

      const downloadUrl = urlData.publicUrl;
      const formattedSize = formatBytes(selectedFile.size);

      setUploadStage("Registering version metadata in database...");
      const regRes = await registerUploadedApkAction({
        version,
        versionCode: vCode,
        minVersion,
        updateTitle,
        description,
        forceUpdate,
        downloadUrl,
        apkFileName: selectedFile.name,
        apkFileSize: formattedSize,
      });

      setState(regRes);
      if (regRes.success) {
        router.refresh();
      }
    } catch (err: any) {
      console.error("APK upload error:", err);
      setState({
        success: false,
        error:
          err.message ||
          "Failed to upload APK. Please check your network connection and retry.",
      });
    } finally {
      setIsUploading(false);
      setUploadStage("");
    }
  };

  const handleFile = (file: File) => {
    setFileError(null);
    if (!file.name.toLowerCase().endsWith(".apk")) {
      setFileError("Invalid file type. Only Android APK binaries (.apk) are supported.");
      setSelectedFile(null);
      return;
    }
    const maxBytes = 100 * 1024 * 1024; // 100MB
    if (file.size > maxBytes) {
      setFileError(`File is too large (${(file.size / (1024 * 1024)).toFixed(1)} MB). Max limit is 100MB.`);
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-mono-code text-xs">
      {/* Uploading Status Banner */}
      {isUploading && uploadStage && (
        <div
          role="status"
          className="flex items-center gap-3 rounded-xl border border-primary/40 bg-primary-light/50 p-4 text-foreground"
        >
          <Loader2 className="h-5 w-5 animate-spin text-primary shrink-0" />
          <div>
            <div className="font-bold text-primary">Artifact Ingestion in Progress</div>
            <div className="text-[11px] text-muted mt-0.5">{uploadStage}</div>
          </div>
        </div>
      )}

      {/* State Feedback */}
      {state.error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800"
        >
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
          <div>
            <div className="font-bold">Upload Rejected</div>
            <div className="mt-0.5 leading-relaxed">{state.error}</div>
          </div>
        </div>
      )}

      {state.success && (
        <div
          role="alert"
          className="flex items-start justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
            <div>
              <div className="font-bold">Release Published Successfully!</div>
              <div className="mt-0.5 text-[11px] leading-relaxed">
                Version {version} (Build {versionCode}) is now live in Supabase Storage and registered in the database.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => router.push("/admin/apks")}
            className="inline-flex items-center gap-1 rounded-lg bg-emerald-700 px-3 py-1.5 font-bold text-white hover:bg-emerald-800 transition-colors"
          >
            <span>Manage APKs</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* APK Binary Dropzone */}
      <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs">
        <label className="block font-bold uppercase tracking-wider text-foreground text-xs">
          1. APK Binary Package (.apk)
        </label>
        <p className="mt-1 text-[11px] text-muted">
          Upload compiled release APK. File will be validated and hosted on Supabase Storage (<span className="text-foreground">app-releases</span> bucket).
        </p>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`mt-3 flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-primary bg-primary-light/40"
              : selectedFile
              ? "border-emerald-300 bg-emerald-50/30"
              : "border-border hover:border-primary/50 hover:bg-surface-muted/60"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            name="apkFile"
            accept=".apk,application/vnd.android.package-archive"
            onChange={onFileInputChange}
            className="hidden"
          />

          {selectedFile ? (
            <div className="space-y-2">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <FileCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">{selectedFile.name}</div>
                <div className="text-[11px] text-muted mt-0.5">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Ready for distribution
                </div>
              </div>
              <span className="inline-block text-[10px] text-primary underline mt-1">
                Click to replace file
              </span>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-surface-muted border border-border text-muted">
                <Upload className="h-5 w-5" />
              </div>
              <div className="text-foreground font-semibold">
                Drag and drop your .apk file here, or click to browse
              </div>
              <div className="text-[11px] text-muted">
                Maximum file size: 100 MB. Only official Android .apk packages accepted.
              </div>
            </div>
          )}
        </div>

        {fileError && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{fileError}</span>
          </div>
        )}
      </div>

      {/* Version Metadata Inputs */}
      <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <label className="block font-bold uppercase tracking-wider text-foreground text-xs">
            2. Version & Release Metadata
          </label>
          <div className="flex items-center gap-1.5 text-[11px] text-muted">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Current Active: v{latestVersion.latest_version} (Code {latestVersion.version_code})</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="version" className="block text-[11px] font-semibold text-muted uppercase">
              Semantic Version *
            </label>
            <input
              id="version"
              name="version"
              type="text"
              required
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              placeholder="e.g. 1.0.9"
              className="mt-1.5 w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="versionCode" className="block text-[11px] font-semibold text-muted uppercase">
              Version Code (Integer) *
            </label>
            <input
              id="versionCode"
              name="versionCode"
              type="number"
              required
              value={versionCode}
              onChange={(e) => setVersionCode(e.target.value)}
              placeholder="e.g. 12"
              className="mt-1.5 w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="minVersion" className="block text-[11px] font-semibold text-muted uppercase">
              Minimum Supported Version *
            </label>
            <input
              id="minVersion"
              name="minVersion"
              type="text"
              required
              value={minVersion}
              onChange={(e) => setMinVersion(e.target.value)}
              placeholder="e.g. 1.0.8"
              className="mt-1.5 w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="updateTitle" className="block text-[11px] font-semibold text-muted uppercase">
            Release Title / Headline
          </label>
          <input
            id="updateTitle"
            name="updateTitle"
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
            placeholder="e.g. Attendance Sync Engine & New Timetable Grid"
            className="mt-1.5 w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-[11px] font-semibold text-muted uppercase">
            Changelog / Release Notes
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="• Fixed notification delivery for rescheduled lectures&#10;• Added fast timetable caching&#10;• Optimized background sync"
            className="mt-1.5 w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 leading-relaxed resize-y"
          />
        </div>

        {/* Force Update Checkbox */}
        <div className="flex items-start gap-3 rounded-xl border border-border bg-surface-muted/50 p-3.5">
          <input
            id="forceUpdate"
            name="forceUpdate"
            type="checkbox"
            checked={forceUpdate}
            onChange={(e) => setForceUpdate(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
          />
          <div className="text-[11px]">
            <label htmlFor="forceUpdate" className="font-bold text-foreground cursor-pointer">
              Enforce Mandatory Update (Force Update)
            </label>
            <p className="text-muted mt-0.5">
              When enabled, older clients below this version code will be blocked until they install this update.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Action */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="rounded-xl border border-border bg-surface px-4 py-2.5 font-semibold text-muted hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isUploading || !selectedFile}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-bold text-white shadow-xs hover:bg-primary-hover disabled:opacity-50 transition-all cursor-pointer"
        >
          {isUploading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>{uploadStage || "Uploading & Registering APK..."}</span>
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              <span>Publish APK to Supabase</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
