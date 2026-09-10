import Link from "next/link";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "secondary" | "light";
  fullWidth?: boolean;
  compact?: boolean;
}

const sizeStyles = {
  sm: "min-h-[40px] px-3.5 py-2 text-xs sm:text-sm",
  md: "min-h-[44px] px-5 py-2.5 text-sm",
  lg: "min-h-[48px] px-6 py-3 text-base",
};

export function DownloadButton({
  size = "md",
  className,
  variant = "primary",
  fullWidth,
  compact,
}: DownloadButtonProps) {
  const url = siteConfig.androidDownloadUrl;
  const href = url || "/download";
  const label = compact ? "Download" : "Download App";

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    sizeStyles[size],
    variant === "light" &&
      "bg-white text-[#14532D] shadow-lg hover:bg-[#DCFCE7] border border-white/80",
    variant === "secondary" &&
      "border-2 border-[#166534] bg-[#DCFCE7] text-[#14532D] hover:bg-[#166534] hover:text-white",
    variant === "primary" &&
      "bg-[#22C55E] text-white shadow-md hover:bg-[#166534] hover:shadow-lg border border-[#14532D]/20",
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </>
  );

  if (url) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
