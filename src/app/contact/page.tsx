import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { developers } from "@/data/developers";
import { siteConfig } from "@/lib/site";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with the MCA 26 development team for questions, feedback, and project inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Get in Touch"
        description="Have questions about MCA 26, want to share feedback, or interested in contributing? Reach out to the development team."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-6 text-lg font-semibold text-foreground">
                Send a message
              </h2>
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <h2 className="mb-6 text-lg font-semibold text-foreground">
                Project links
              </h2>

              <div className="space-y-4">
                <a
                  href={siteConfig.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/30"
                >
                  <GithubIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted">View project repositories</p>
                  </div>
                </a>
                <a
                  href={siteConfig.linkedinOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/30"
                >
                  <LinkedinIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted">Connect with the team</p>
                  </div>
                </a>
              </div>

              <h3 className="mb-4 mt-10 text-sm font-semibold uppercase tracking-wider text-muted">
                Development Team
              </h3>
              <ul className="space-y-3">
                {developers.map((dev) => (
                  <li
                    key={dev.name}
                    className="rounded-xl border border-border bg-surface p-4"
                  >
                    <p className="font-medium text-foreground">{dev.name}</p>
                    <p className="text-sm text-muted">{dev.title}</p>
                    <div className="mt-2 flex gap-3">
                      {dev.github && (
                        <a
                          href={dev.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {dev.linkedin && (
                        <a
                          href={dev.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          LinkedIn
                        </a>
                      )}
                      {dev.portfolio && (
                        <a
                          href={dev.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          Portfolio
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                <p className="text-xs text-muted">
                  Phone numbers are not displayed publicly. Use the contact form
                  for project inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
