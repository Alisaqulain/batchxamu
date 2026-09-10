import Image from "next/image";
import { Globe } from "lucide-react";
import type { Developer } from "@/types";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
  lead: "border-t-primary",
  core: "border-t-primary-bright",
  dev: "border-t-accent-coral",
};

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

interface DeveloperCardProps {
  developer: Developer;
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <article
      id={slugify(developer.name)}
      className={cn(
        "group scroll-mt-24 overflow-hidden rounded-2xl border border-border border-t-4 bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        accentMap[developer.accent] ?? "border-t-primary"
      )}
    >
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4">
          {developer.avatar ? (
            <Image
              src={developer.avatar}
              alt={`${developer.name} profile photo`}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-2xl border-2 border-primary-light object-cover"
            />
          ) : (
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-primary-light text-xl font-bold text-primary">
              {developer.initials}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-foreground">{developer.name}</h3>
            <p className="text-sm font-medium text-primary">{developer.role}</p>
          </div>
        </div>

        <p className="text-sm font-semibold text-foreground">{developer.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{developer.bio}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {developer.github && (
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-muted transition-all hover:border-primary/40 hover:bg-primary-light hover:text-primary"
              aria-label={`${developer.name} on GitHub`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {developer.linkedin && (
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-muted transition-all hover:border-primary/40 hover:bg-primary-light hover:text-primary"
              aria-label={`${developer.name} on LinkedIn`}
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          )}
          {developer.portfolio && (
            <a
              href={developer.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-muted transition-all hover:border-primary/40 hover:bg-primary-light hover:text-primary"
              aria-label={`${developer.name} portfolio`}
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              Portfolio
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
