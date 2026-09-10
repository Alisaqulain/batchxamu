import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { img: 48, text: "text-sm", sub: "text-[10px]" },
  md: { img: 56, text: "text-base sm:text-lg", sub: "text-[10px] sm:text-xs" },
  lg: { img: 72, text: "text-xl", sub: "text-sm" },
};

export function Logo({
  showText = true,
  size = "md",
  className,
}: LogoProps) {
  const config = sizeMap[size];

  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center gap-3", className)}
    >
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={config.img}
        height={config.img}
        className="shrink-0 rounded-2xl transition-transform duration-200 group-hover:scale-105"
        priority
      />
      {showText && (
        <div className="min-w-0 leading-tight">
          <span
            className={cn(
              "block font-bold tracking-tight text-foreground",
              config.text
            )}
          >
            {siteConfig.name}
          </span>
          <span
            className={cn(
              "hidden font-medium text-muted sm:block",
              config.sub
            )}
          >
            Dept. of Computer Science
          </span>
        </div>
      )}
    </Link>
  );
}
