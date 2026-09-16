import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  showText?: boolean;
  size?: "nav" | "footer" | "hero";
  className?: string;
}

const sizeMap = {
  nav: 38,
  footer: 46,
  hero: 64,
};

export function Logo({
  showText = true,
  size = "nav",
  className,
}: LogoProps) {
  const imgSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex shrink-0 items-center gap-2.5", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} official application icon`}
        width={imgSize}
        height={imgSize}
        className="rounded-xl border border-border/80 transition-transform duration-200 group-hover:scale-[1.03] object-cover"
        priority={size === "nav"}
      />
      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
            AMU BATCH X
          </span>
          <span className="font-mono-code text-xs font-medium text-muted tracking-tight">
            DoCS · Aligarh
          </span>
        </div>
      )}
    </Link>
  );
}
