import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "coral";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-sm border border-primary-deep/40",
  secondary:
    "bg-surface text-foreground border border-border hover:border-primary/40 hover:bg-surface-muted shadow-sm",
  outline:
    "border border-primary/50 text-primary bg-transparent hover:bg-primary-light/60",
  ghost: "text-muted hover:text-foreground hover:bg-surface-muted",
  coral:
    "bg-accent-red-light text-accent-terracotta border border-accent-coral/40 hover:bg-accent-coral/20",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-[38px] px-3.5 py-1.5 text-xs sm:text-sm rounded-lg",
  md: "min-h-[42px] px-4.5 py-2 text-sm rounded-lg",
  lg: "min-h-[46px] px-5.5 py-2.5 text-base rounded-xl",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
