import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "secondary" | "light";
  fullWidth?: boolean;
}

const visibleStyles =
  "bg-primary-bright text-white shadow-lg ring-2 ring-primary/30 hover:bg-primary hover:shadow-xl border border-primary-deep/20";

export function DownloadButton({
  size = "md",
  className,
  variant = "primary",
  fullWidth,
}: DownloadButtonProps) {
  const url = siteConfig.androidDownloadUrl;

  const styles = cn(
    variant === "light"
      ? "bg-white text-primary shadow-lg ring-2 ring-white/50 hover:bg-primary-light"
      : variant === "secondary"
        ? "border-2 border-primary bg-primary-light text-primary hover:bg-primary hover:text-white"
        : visibleStyles,
    fullWidth && "w-full",
    className
  );

  if (url) {
    return (
      <Button href={url} external size={size} variant="primary" className={styles}>
        <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
        Download App
      </Button>
    );
  }

  return (
    <Button href="/download" size={size} variant="primary" className={styles}>
      <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
      Download App
    </Button>
  );
}
