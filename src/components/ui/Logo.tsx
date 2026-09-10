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
  nav: 52,
  footer: 64,
  hero: 80,
};

export function Logo({
  showText = false,
  size = "nav",
  className,
}: LogoProps) {
  const imgSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex shrink-0 items-center gap-3", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={imgSize}
        height={imgSize}
        className="rounded-2xl transition-transform duration-200 group-hover:scale-[1.03]"
        priority={size === "nav"}
      />
      {showText && (
        <span className="text-lg font-bold tracking-tight text-foreground">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
