export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** "1.2.0" -> "v1.2.0". Falls back to "Latest" when no version is known. */
export function formatVersion(version?: string | null): string {
  const v = version?.trim().replace(/^v/i, "");
  return v ? `v${v}` : "Latest";
}
