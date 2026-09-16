"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useDownloadModal } from "@/components/ui/DownloadModal";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "secondary" | "light";
  fullWidth?: boolean;
  compact?: boolean;
  directHref?: boolean;
  onClick?: () => void;
}

const sizeStyles = {
  sm: "min-h-[38px] px-3.5 py-1.5 text-xs sm:text-sm rounded-lg",
  md: "min-h-[42px] px-4.5 py-2 text-sm rounded-lg",
  lg: "min-h-[46px] px-5.5 py-2.5 text-base rounded-xl",
};

export function DownloadButton({
  size = "md",
  className,
  variant = "primary",
  fullWidth,
  compact,
  directHref = false,
  onClick,
}: DownloadButtonProps) {
  const { openDownloadModal } = useDownloadModal();
  const url = siteConfig.androidDownloadUrl;
  const href = url || "/download";
  const label = compact ? "Download" : "Download App";

  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    sizeStyles[size],
    variant === "light" &&
      "bg-white text-primary-deep shadow-sm hover:bg-primary-light border border-border hover:border-primary/40",
    variant === "secondary" &&
      "border border-primary/40 bg-surface text-primary hover:bg-primary-light/60 shadow-sm",
    variant === "primary" &&
      "bg-primary text-white shadow-sm hover:bg-primary-hover border border-primary-deep/40",
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </>
  );

  if (directHref) {
    return (
      <a
        href="/api/download"
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={(e) => {
        onClick?.();
        openDownloadModal(e.currentTarget);
      }}
      aria-label={`${label} platform selector`}
    >
      {content}
    </button>
  );
}
