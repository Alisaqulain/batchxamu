import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { developers } from "@/data/developers";
import { MapPin, ExternalLink } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact the Team",
  description:
    "Get in touch with the AMU BATCH X student development team for questions, feedback, contributions, or project inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact & Feedback"
        title="Direct communication with the student team."
        description="Have questions about the timetable, suggestions for new features, or notes to share with the batch? Reach out to the development team."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="ledger-card border border-border bg-surface p-6 sm:p-8">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Inquiry Portal
                </span>
                <h2 className="font-display text-xl font-bold text-foreground mt-1 mb-6">
                  Send a Note to the Developers
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Channels & Developer Roster */}
            <div className="lg:col-span-5 space-y-6">
              {/* Campus Location Card */}
              <div className="ledger-card border border-border bg-surface p-6">
                <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                  <MapPin className="h-4 w-4 text-accent-terracotta" />
                  <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-foreground">
                    Campus Department Address
                  </h3>
                </div>
                <p className="font-semibold text-sm text-foreground">
                  Department of Computer Science
                </p>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Faculty of Science, Aligarh Muslim University (AMU), Aligarh, Uttar Pradesh 202002, India.
                </p>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between font-mono-code text-xs">
                  <span className="text-muted">Email:</span>
                  <a href="mailto:contact@amubatchx.app" className="text-primary font-bold hover:underline">
                    contact@amubatchx.app
                  </a>
                </div>
              </div>

              {/* Developer Team Links */}
              <div className="ledger-card border border-border bg-surface p-6">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                  Student Engineers
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-4">
                  Connect Directly
                </h3>

                <ul className="space-y-3">
                  {developers.map((dev) => (
                    <li
                      key={dev.name}
                      className="rounded-xl border border-border bg-surface-muted p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-xs text-foreground">{dev.name}</p>
                          <p className="font-mono-code text-[11px] text-primary">{dev.title}</p>
                        </div>
                      </div>

                      <div className="mt-2.5 flex flex-wrap gap-3 text-xs font-mono-code">
                        {dev.github && (
                          <a
                            href={dev.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <span>GitHub</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {dev.linkedin && (
                          <a
                            href={dev.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <span>LinkedIn</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {dev.portfolio && (
                          <a
                            href={dev.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <span>Portfolio</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
