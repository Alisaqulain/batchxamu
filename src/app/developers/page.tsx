import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { developers } from "@/data/developers";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Globe, GitBranch, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Engineering Team",
  description:
    "Meet the student developers behind AMU BATCH X at the Department of Computer Science, Aligarh Muslim University: Ali Saqulain, Sameer Ahmad, and Okasha Ansari.",
  path: "/developers",
});

const techStack = [
  { tech: "Next.js & React 19", role: "Web Portal, SEO & App Distribution Engine" },
  { tech: "Tailwind CSS v4", role: "High-contrast collegiate design system & responsive layout" },
  { tech: "Android Native / Kotlin", role: "Mobile application with offline SQLite and priority push alerts" },
  { tech: "TypeScript 5", role: "End-to-end type safety across data schemas and UI models" },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        label="Engineering"
        title="Built by students who sit in the same classrooms."
        description="AMU BATCH X was created by MCA students at the Department of Computer Science to solve real daily campus coordination challenges."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Engineering Mission Statement */}
          <div className="ledger-card border border-border bg-surface p-6 sm:p-10 mb-12">
            <div className="max-w-3xl">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Student Engineering Philosophy
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground mt-2 sm:text-3xl">
                Software built from genuine campus necessity.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                We did not build this platform as a generic coding exercise. Every semester, students scrambled across WhatsApp groups to find out where an afternoon lab had been shifted, or tried to calculate whether they were short of the 75 percent attendance threshold before mid-semester exams. We decided to solve this directly by building a purpose-driven platform for our department.
              </p>
            </div>

            {/* Architecture Stack */}
            <div className="mt-8 border-t border-border pt-6">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                Core Technology Stack
              </span>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {techStack.map((st) => (
                  <div key={st.tech} className="rounded-lg border border-border bg-surface-muted p-3">
                    <span className="font-mono-code text-xs font-bold text-foreground block">{st.tech}</span>
                    <span className="text-[11px] text-muted mt-0.5 block">{st.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Developer Profiles */}
          <div className="space-y-6">
            <div className="border-b border-border pb-3">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Core Development Team
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1">
                Student Architects & Engineers
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {developers.map((dev) => (
                <article
                  key={dev.name}
                  className="ledger-card flex flex-col justify-between border border-border bg-surface p-6 sm:p-7"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      {dev.avatar ? (
                        <Image
                          src={dev.avatar}
                          alt={`${dev.name} profile photo`}
                          width={68}
                          height={68}
                          className="h-16 w-16 rounded-xl border border-border object-cover"
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-light font-mono-code text-lg font-bold text-primary">
                          {dev.initials}
                        </div>
                      )}

                      <div>
                        <h4 className="font-display text-lg font-bold text-foreground">
                          {dev.name}
                        </h4>
                        <p className="font-mono-code text-xs font-semibold text-primary">
                          {dev.title}
                        </p>
                        <span className="font-mono-code text-[11px] text-muted block mt-0.5">
                          MCA 2026 Batch
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
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
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 font-mono-code text-[11px] font-semibold text-foreground hover:border-primary/40 hover:bg-primary-light hover:text-primary transition-colors"
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
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 font-mono-code text-[11px] font-semibold text-foreground hover:border-primary/40 hover:bg-primary-light hover:text-primary transition-colors"
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
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 font-mono-code text-[11px] font-semibold text-foreground hover:border-primary/40 hover:bg-primary-light hover:text-primary transition-colors"
                        >
                          <Globe className="h-3.5 w-3.5" />
                          <span>Portfolio</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Open Collaboration Callout */}
          <div className="mt-14 rounded-2xl border border-border bg-surface-muted p-6 sm:p-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-primary" />
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Open Student Collaboration
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mt-2">
                Contribute code, lecture notes, or mock questions.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                We welcome pull requests, verified syllabus notes, solved semester question papers, and bug reports from across the Department of Computer Science.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={siteConfig.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 font-mono-code text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-surface-muted transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Visit GitHub Repository</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-white px-4 py-2 font-mono-code text-xs font-semibold hover:bg-primary-hover transition-colors shadow-xs"
              >
                <span>Submit Feedback</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
