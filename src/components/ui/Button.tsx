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
    "bg-[#22C55E] text-white hover:bg-[#166534] shadow-md border border-[#14532D]/20",
  secondary:
    "bg-white text-[#0F172A] border-2 border-[#E2E8F0] hover:border-[#166534]/40 hover:bg-[#F8FAFC]",
  outline:
    "border-2 border-[#166534]/50 text-[#166534] bg-white hover:bg-[#DCFCE7]",
  ghost: "text-[#64748B] hover:text-[#166534] hover:bg-[#DCFCE7]/60",
  coral:
    "bg-[#FEE2E2] text-[#EF4444] border border-[#FCA5A5] hover:bg-[#FCA5A5]/40",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-3.5 py-2 text-xs sm:text-sm",
  md: "min-h-[44px] px-5 py-2.5 text-sm",
  lg: "min-h-[48px] px-6 py-3 text-base",
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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534]/40 focus-visible:ring-offset-2",
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
