"use client";

import { useState, useTransition, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { AppVersion } from "@/lib/supabase";
import {
  updateVersionAction,
  replaceApkAction,
  registerReplacedApkAction,
  deleteVersionAction,
} from "@/app/actions/admin-versions";
import { getSupabaseBrowserClient, STORAGE_BUCKET_APK } from "@/lib/supabase";
import { formatBytes } from "@/lib/app-version";
import {
  Download,
  Edit2,
  RefreshCw,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  X,
  Loader2,
  AlertCircle,
  FileCheck,
  Upload,
  HardDrive,
  ShieldAlert,
} from "lucide-react";

interface Props {
  versions: AppVersion[];
}

export function AdminApkTable({ versions }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Active Modals state
  const [editItem, setEditItem] = useState<AppVersion | null>(null);
  const [replaceItem, setReplaceItem] = useState<AppVersion | null>(null);
  const [deleteItem, setDeleteItem] = useState<AppVersion | null>(null);

  // Notifications
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Edit form state
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editMinVersion, setEditMinVersion] = useState("");
  const [editForceUpdate, setEditForceUpdate] = useState(false);

  // Replace form state
  const [replacementFile, setReplacementFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openEditModal = (ver: AppVersion) => {
    setEditItem(ver);
    setEditTitle(ver.update_title || "");
    setEditDescription(ver.update_description || "");
    setEditMinVersion(ver.minimum_supported_version || "1.0.8");
    setEditForceUpdate(ver.force_update);
    setFeedback(null);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;

    startTransition(async () => {
      const res = await updateVersionAction(editItem.id, {
        update_title: editTitle,
        update_description: editDescription,
        minimum_supported_version: editMinVersion,
        force_update: editForceUpdate,
      });

      if (res.success) {
        setFeedback({
          type: "success",
          message: `Successfully updated metadata for v${editItem.latest_version}.`,
        });
        setEditItem(null);
        router.refresh();
      } else {
        setFeedback({
          type: "error",
          message: res.error || "Failed to update version.",
        });
      }
    });
  };

  const openReplaceModal = (ver: AppVersion) => {
    setReplaceItem(ver);
    setReplacementFile(null);
    setFileError(null);
    setFeedback(null);
  };

  const handleReplacementFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.name.toLowerCase().endsWith(".apk")) {
        setFileError("Invalid format: File must be an Android .apk package.");
        setReplacementFile(null);
        return;
      }
      if (file.size > 100 * 1024 * 1024) {
        setFileError("File exceeds the maximum 100MB limit.");
        setReplacementFile(null);
        return;
      }
      setReplacementFile(file);
    }
  };

  const handleReplaceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replaceItem || !replacementFile) return;

    startTransition(async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const safeVersion = replaceItem.latest_version.replace(/[^a-zA-Z0-9.-]/g, "_");
        const safeFileName = replacementFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const storagePath = `${safeVersion}/${safeFileName}`;

        const { error: uploadErr } = await supabase.storage
          .from(STORAGE_BUCKET_APK)
          .upload(storagePath, replacementFile, {
            contentType: "application/vnd.android.package-archive",
            upsert: true,
          });

        if (uploadErr) {
          // Fallback to server action
          console.warn("Direct replace upload failed, attempting server fallback:", uploadErr);
          const formData = new FormData();
          formData.append("apkFile", replacementFile);
          const res = await replaceApkAction(replaceItem.id, formData);
          if (res.success) {
            setFeedback({
              type: "success",
              message: `Successfully replaced APK binary for v${replaceItem.latest_version}.`,
            });
            setReplaceItem(null);
            setReplacementFile(null);
            router.refresh();
          } else {
            setFeedback({
              type: "error",
              message: res.error || "Failed to replace APK.",
            });
          }
          return;
        }

        const { data: urlData } = supabase.storage
          .from(STORAGE_BUCKET_APK)
          .getPublicUrl(storagePath);

        const formattedSize = formatBytes(replacementFile.size);
        const res = await registerReplacedApkAction({
          id: replaceItem.id,
          downloadUrl: urlData.publicUrl,
          apkFileName: replacementFile.name,
          apkFileSize: formattedSize,
        });

        if (res.success) {
          setFeedback({
            type: "success",
            message: `Successfully replaced APK binary for v${replaceItem.latest_version} (${formattedSize}).`,
          });
          setReplaceItem(null);
          setReplacementFile(null);
          router.refresh();
        } else {
          setFeedback({
            type: "error",
            message: res.error || "Failed to update version record.",
          });
        }
      } catch (err: any) {
        console.error("Error replacing APK:", err);
        setFeedback({
          type: "error",
          message: err.message || "Failed to replace APK package.",
        });
      }
    });
  };

  const openDeleteModal = (ver: AppVersion) => {
    setDeleteItem(ver);
    setFeedback(null);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteItem) return;

    startTransition(async () => {
      const res = await deleteVersionAction(deleteItem.id);
      if (res.success) {
        setFeedback({
          type: "success",
          message: `Release v${deleteItem.latest_version} has been removed.`,
        });
        setDeleteItem(null);
        router.refresh();
      } else {
        setFeedback({
          type: "error",
          message: res.error || "Failed to delete release.",
        });
      }
    });
  };

  return (
    <div className="space-y-4 font-mono-code text-xs">
      {/* Toast Feedback */}
      {feedback && (
        <div
          role="alert"
          className={`flex items-start justify-between gap-3 rounded-xl p-4 border ${
            feedback.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          <div className="flex items-center gap-2.5">
            {feedback.type === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button
            onClick={() => setFeedback(null)}
            className="text-muted hover:text-foreground p-1"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* APKs Data Table */}
      <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-2xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-surface-muted/60 text-[11px] text-muted uppercase tracking-wider">
              <th className="py-3 px-4">Version / Build</th>
              <th className="py-3 px-4">APK Package</th>
              <th className="py-3 px-4">Binary Size</th>
              <th className="py-3 px-4">Min Version</th>
              <th className="py-3 px-4">Force Update</th>
              <th className="py-3 px-4">Published</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {versions.map((ver, idx) => {
              const isCurrent = idx === 0;

              return (
                <tr key={ver.id} className="hover:bg-surface-muted/40 transition-colors">
                  {/* Version */}
                  <td className="py-3.5 px-4 font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <span>v{ver.latest_version}</span>
                      {isCurrent && (
                        <span className="rounded-full border border-primary/30 bg-primary-light px-2 py-0.5 text-[9px] font-bold text-primary">
                          LIVE
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-muted font-normal">
                      Build Code: {ver.version_code || "N/A"}
                    </div>
                  </td>

                  {/* APK File Name */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2 max-w-[200px]">
                      <HardDrive className="h-3.5 w-3.5 text-muted shrink-0" />
                      <span className="truncate text-foreground font-semibold" title={ver.apk_file_name || "batch-x.apk"}>
                        {ver.apk_file_name || "batch-x.apk"}
                      </span>
                    </div>
                  </td>

                  {/* Size */}
                  <td className="py-3.5 px-4 text-muted">
                    {ver.apk_file_size || "N/A"}
                  </td>

                  {/* Min version */}
                  <td className="py-3.5 px-4 text-muted">
                    v{ver.minimum_supported_version || "1.0.8"}
                  </td>

                  {/* Force Update */}
                  <td className="py-3.5 px-4">
                    {ver.force_update ? (
                      <span className="inline-flex items-center gap-1 font-bold text-red-600">
                        <AlertTriangle className="h-3 w-3" />
                        Required
                      </span>
                    ) : (
                      <span className="text-muted font-medium">Optional</span>
                    )}
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-4 text-muted text-[11px] whitespace-nowrap">
                    {new Date(ver.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5">
                      {ver.download_url && (
                        <a
                          href={ver.download_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg border border-border bg-surface text-muted hover:text-primary hover:border-primary transition-colors"
                          title="Download APK"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() => openEditModal(ver)}
                        className="p-1.5 rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
                        title="Edit Metadata"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => openReplaceModal(ver)}
                        className="p-1.5 rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
                        title="Replace Binary"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => openDeleteModal(ver)}
                        disabled={versions.length <= 1}
                        className="p-1.5 rounded-lg border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                        title={
                          versions.length <= 1
                            ? "Cannot delete only remaining release"
                            : "Delete Release"
                        }
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* EDIT METADATA MODAL */}
      {editItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Edit Release v{editItem.latest_version}
                </h3>
                <span className="text-[11px] text-muted">Build Code: {editItem.version_code}</span>
              </div>
              <button
                onClick={() => setEditItem(null)}
                className="text-muted hover:text-foreground p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-muted uppercase">
                  Release Title
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="e.g. Attendance & Routine Fixes"
                  className="mt-1 w-full rounded-xl border border-border bg-surface-muted px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-muted uppercase">
                  Minimum Supported Version
                </label>
                <input
                  type="text"
                  required
                  value={editMinVersion}
                  onChange={(e) => setEditMinVersion(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-surface-muted px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-muted uppercase">
                  Release Notes / Changelog
                </label>
                <textarea
                  rows={4}
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-surface-muted px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 leading-relaxed"
                />
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-border bg-surface-muted/50 p-3">
                <input
                  id="modalForceUpdate"
                  type="checkbox"
                  checked={editForceUpdate}
                  onChange={(e) => setEditForceUpdate(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                />
                <label htmlFor="modalForceUpdate" className="text-[11px] text-foreground cursor-pointer font-medium">
                  Enforce mandatory update for all prior versions
                </label>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setEditItem(null)}
                  className="rounded-xl border border-border bg-surface px-4 py-2 text-muted hover:text-foreground cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-bold text-white hover:bg-primary-hover disabled:opacity-50 cursor-pointer"
                >
                  {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* REPLACE APK BINARY MODAL */}
      {replaceItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Replace APK Binary
                </h3>
                <span className="text-[11px] text-muted">
                  For release v{replaceItem.latest_version} (Code {replaceItem.version_code})
                </span>
              </div>
              <button
                onClick={() => setReplaceItem(null)}
                className="text-muted hover:text-foreground p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleReplaceSubmit} className="space-y-4">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-900 text-[11px]">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    This replaces the physical file in Supabase Storage. Clients downloading v{replaceItem.latest_version} will receive the new package immediately.
                  </div>
                </div>
              </div>

              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-surface-muted/50 transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".apk,application/vnd.android.package-archive"
                  onChange={handleReplacementFileChange}
                  className="hidden"
                />

                {replacementFile ? (
                  <div className="space-y-1">
                    <FileCheck className="h-8 w-8 text-emerald-600 mx-auto" />
                    <div className="font-bold text-foreground">{replacementFile.name}</div>
                    <div className="text-[10px] text-muted">
                      {(replacementFile.size / (1024 * 1024)).toFixed(2)} MB
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <Upload className="h-6 w-6 text-muted mx-auto" />
                    <div className="font-semibold text-foreground">Select Replacement .apk</div>
                    <div className="text-[10px] text-muted">Max 100MB</div>
                  </div>
                )}
              </div>

              {fileError && (
                <div className="flex items-center gap-1.5 text-xs text-red-600">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{fileError}</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setReplaceItem(null)}
                  className="rounded-xl border border-border bg-surface px-4 py-2 text-muted hover:text-foreground cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending || !replacementFile}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-bold text-white hover:bg-primary-hover disabled:opacity-50 cursor-pointer"
                >
                  {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                  <span>Upload & Replace</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-red-200 bg-surface p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3 text-red-600">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">
                  Confirm Release Deletion
                </h3>
                <span className="text-[11px] text-muted">Permanent Operation</span>
              </div>
            </div>

            <p className="text-muted leading-relaxed text-xs">
              Are you sure you want to delete release <span className="font-bold text-foreground">v{deleteItem.latest_version}</span> (Build {deleteItem.version_code})?
              The binary file in storage and its database record will be permanently erased.
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-border">
              <button
                type="button"
                onClick={() => setDeleteItem(null)}
                className="rounded-xl border border-border bg-surface px-4 py-2 text-muted hover:text-foreground cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isPending}
                onClick={handleDeleteConfirm}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700 disabled:opacity-50 cursor-pointer"
              >
                {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                <span>Confirm Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
