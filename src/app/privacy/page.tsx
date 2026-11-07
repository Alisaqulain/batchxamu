import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ShieldCheck, Database, Lock, Bell, Cookie, FileCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How AMU BATCH X handles your data: no ads, no third-party trackers, and academic data stored on your phone.",
  path: "/privacy",
});

const privacyPrinciples = [
  {
    icon: Database,
    title: "1. Your data stays on your phone",
    subtitle: "Attendance, subjects and timetable",
    content:
      "Your attendance records, selected subjects and timetable are stored on your phone, not on our servers. If you clear the app's storage or uninstall it, that data is deleted.",
  },
  {
    icon: ShieldCheck,
    title: "2. No ads or trackers",
    subtitle: "Nothing is sold or shared",
    content:
      "The app has no advertising and no third-party analytics or tracking. We don't build profiles of students and we don't sell any data.",
  },
  {
    icon: Bell,
    title: "3. Push notifications",
    subtitle: "Only used to send notices",
    content:
      "To send you notices, the app registers a push notification token for your device. It is only used to deliver department notices and is not linked to your name or other personal details.",
  },
  {
    icon: Cookie,
    title: "4. Cookies on this website",
    subtitle: "No tracking cookies",
    content:
      "This website (www.amubatchx.app) does not use advertising or tracking cookies. It only uses your browser's local storage to remember that you dismissed the privacy banner.",
  },
  {
    icon: Lock,
    title: "5. Encrypted connections",
    subtitle: "HTTPS only",
    content:
      "Notes, past papers and notices are downloaded over encrypted HTTPS connections.",
  },
  {
    icon: FileCheck,
    title: "6. Who runs this and how to reach us",
    subtitle: "Contact",
    content:
      "AMU BATCH X is built and maintained by students of the Department of Computer Science, Aligarh Muslim University. It is not an official university service. For privacy questions, use the contact page or email contact@amubatchx.app.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Privacy"
        title="Privacy Policy"
        description="Last updated: March 2026. What data AMU BATCH X stores and why."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Key Guarantee Banner */}
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-primary-light/40 p-6 sm:p-8 mb-12 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">
                  The short version
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                  You don&apos;t need an account to see your timetable or track attendance, your attendance stays on your phone, and there are no ads or trackers.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Articles Grid */}
          <div className="mx-auto max-w-4xl space-y-6">
            {privacyPrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  data-reveal className="ledger-card border border-border bg-surface p-6 sm:p-8 transition-all hover:border-border-light"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary-light text-primary mt-1">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="font-mono-code text-xs font-semibold text-primary mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
