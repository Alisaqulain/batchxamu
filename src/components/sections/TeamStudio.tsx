import Image from "next/image";
import { developers } from "@/data/developers";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Globe, ArrowRight, Code2, Terminal } from "lucide-react";
import Link from "next/link";

export function TeamStudio() {
  return (
    <section id="team" className="scroll-mt-20 border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="border-b border-border pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary-light px-2.5 py-1 font-mono-code text-xs font-semibold text-primary">
              <Terminal className="h-3.5 w-3.5" />
              <span>STUDENT ENGINEERING TEAM</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built by MCA students who face the problem daily.
            </h2>
            <p className="mt-2 text-base text-muted">
              We sit in the same lectures, code in the same Unix laboratories, and experience the same timetable uncertainties. AMU BATCH X is an engineering response to campus fragmentation.
            </p>
            <div className="mt-4">
              <Link
                href="/developers"
                className="inline-flex items-center gap-1.5 font-mono-code text-xs font-semibold text-primary hover:underline"
              >
                <span>View full engineering details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Developers Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="ledger-card flex flex-col justify-between border border-border bg-surface p-6"
            >
              <div>
                <div className="flex items-center gap-4">
                  {dev.avatar ? (
                    <Image
                      src={dev.avatar}
                      alt={`${dev.name} profile photo`}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-xl border border-border object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-light font-mono-code text-lg font-bold text-primary">
                      {dev.initials}
                    </div>
                  )}

                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {dev.name}
                    </h3>
                    <p className="font-mono-code text-xs font-semibold text-primary">
                      {dev.title}
                    </p>
                    <span className="inline-block mt-0.5 font-mono-code text-xs text-muted">
                      Department of Computer Science
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {dev.bio}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <div className="flex flex-wrap gap-2">
                  {dev.github && (
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 font-mono-code text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary"
                      aria-label={`${dev.name} on GitHub`}
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {dev.linkedin && (
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 font-mono-code text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary"
                      aria-label={`${dev.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {dev.portfolio && (
                    <a
                      href={dev.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 font-mono-code text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary"
                      aria-label={`${dev.name} portfolio`}
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Portfolio</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Open Contribution Callout */}
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Student Collaboration
                </span>
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                Want to contribute notes, mock tests, or code?
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                The platform thrives on student contributions. Whether you have semester question papers, verified lab notes, or feature suggestions, reach out through the contact portal.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-muted px-4 py-2 font-mono-code text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-primary-light/40 transition-colors"
              >
                <span>Get in touch with the team</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
