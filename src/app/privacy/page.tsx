import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ShieldCheck, Database, Lock, Bell, Cookie, FileCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy & Student Data Sovereignty",
  description:
    "AMU BATCH X is built with complete student privacy: zero third-party tracking cookies, zero ad SDKs, and 100% on-device SQLite storage.",
  path: "/privacy",
});

const privacyPrinciples = [
  {
    icon: Database,
    title: "1. On-Device Local SQLite Storage",
    subtitle: "Your Academic Data Never Leaves Your Smartphone",
    content:
      "Unlike traditional cloud portals that log student movements, all attendance registers, safe bunk margin tallies, course selections, and lecture schedules in AMU BATCH X are stored strictly inside your phone's encrypted SQLite database. If you clear app storage or uninstall the application, your attendance history is deleted entirely.",
  },
  {
    icon: ShieldCheck,
    title: "2. Zero Commercial Trackers & Zero Advertising SDKs",
    subtitle: "Student Privacy by Principle",
    content:
      "AMU BATCH X is an academic operating platform created by students for students. It contains zero third-party telemetry, zero user behavior trackers, and zero commercial advertising networks. We do not profile student habits, sell telemetry data, or monetize academic interactions in any form.",
  },
  {
    icon: Bell,
    title: "3. Verified Notice Delivery & Push Tokens",
    subtitle: "Minimal Functional Communication",
    content:
      "To receive instant push notifications regarding exam schedule revisions, hall shifts (CS-01 to Unix Labs), and official circulars, the app securely registers a push device token with standard notification dispatch servers. This token is used exclusively for department broadcast dispatches and is never tied to your personal identity.",
  },
  {
    icon: Cookie,
    title: "4. Zero Cookie Tracking on Web",
    subtitle: "Cookie-Free Architecture",
    content:
      "This official website (www.amubatchx.app) does not set advertising, cross-site tracking, or profiling cookies. The only client-side storage utilized is browser localStorage for functional interface preferences (such as remembering that you acknowledged the student privacy banner).",
  },
  {
    icon: Lock,
    title: "5. Transport Layer Security (TLS 1.3)",
    subtitle: "Encrypted Network Communications",
    content:
      "All syllabus downloads, solved laboratory programs, previous year question papers, and official department circulars fetched from the student server pipeline are transmitted over modern TLS 1.3 encrypted connections with strict certificate validation.",
  },
  {
    icon: FileCheck,
    title: "6. Departmental Scope & Inquiries",
    subtitle: "Governance & Academic Context",
    content:
      "AMU BATCH X is developed and maintained by student software engineers within the Department of Computer Science, Faculty of Science, Aligarh Muslim University. For questions or privacy inquiries, contact the engineering team via our contact portal or directly at saqulainali110@gmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Data Protection & Privacy"
        title="Student Privacy & Data Sovereignty"
        description="Last updated: March 2026. How AMU BATCH X protects student autonomy through local storage, zero trackers, and complete transparency."
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
                  Our Core Privacy Guarantee to AMU Students
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                  We believe educational tools should never exploit student attention or harvest academic data. AMU BATCH X does not require account sign-ups to view timetables or calculate attendance margins, and your daily attendance data is kept 100% on your Android device.
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
                  className="ledger-card border border-border bg-surface p-6 sm:p-8 transition-all hover:border-border-light"
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
