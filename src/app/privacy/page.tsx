import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the MCA 26 academic platform and website.",
  path: "/privacy",
});

const sections = [
  {
    title: "Information We Collect",
    content:
      "The MCA 26 mobile application may collect academic information necessary for platform functionality, such as attendance records, class schedules, and user account details. This website collects information you voluntarily provide through the contact form (name, email, subject, message).",
  },
  {
    title: "How We Use Information",
    content:
      "Information collected through the app is used to provide academic services to enrolled students. Contact form data, when backend integration is enabled, will be used solely to respond to your inquiries.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell personal information. Academic data is shared only as necessary for platform functionality within the Department of Computer Science academic context.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable technical measures to protect user data. However, no method of electronic storage is completely secure.",
  },
  {
    title: "Third-Party Services",
    content:
      "The website may link to external services such as GitHub and LinkedIn. These services have their own privacy policies.",
  },
  {
    title: "Contact",
    content:
      "For privacy-related questions, use the contact page on this website to reach the MCA 26 development team.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        description="Last updated: March 2026. This policy describes how MCA 26 handles information on the website and mobile application."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{section.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
