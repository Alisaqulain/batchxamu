import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using the MCA 26 academic platform and website.",
  path: "/terms",
});

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing the MCA 26 website or mobile application, you agree to these terms. If you do not agree, please do not use the platform.",
  },
  {
    title: "Platform Purpose",
    content:
      "MCA 26 is an academic platform designed for students, teachers, and stakeholders in the Department of Computer Science. It is a student-developed project and does not claim official university endorsement unless formally approved.",
  },
  {
    title: "User Responsibilities",
    content:
      "Users must provide accurate information, use the platform for legitimate academic purposes, and respect the privacy and rights of other users. Misuse of the platform may result in restricted access.",
  },
  {
    title: "Content Accuracy",
    content:
      "While we strive to maintain accurate academic information, users should verify critical details (exam dates, deadlines) through official department channels. Feature availability may change as the platform evolves.",
  },
  {
    title: "Intellectual Property",
    content:
      "Platform code, design, and content are owned by the MCA 26 development team unless otherwise stated. Study materials uploaded through the platform belong to their respective creators.",
  },
  {
    title: "Planned Features",
    content:
      "Features marked as 'Coming Soon' or 'Planned' are not yet available. We do not guarantee timelines for future functionality including paid features and teacher dashboards.",
  },
  {
    title: "Limitation of Liability",
    content:
      "MCA 26 is provided as-is without warranties. The development team is not liable for damages arising from platform use, including missed academic deadlines or incorrect information.",
  },
  {
    title: "Changes to Terms",
    content:
      "These terms may be updated periodically. Continued use of the platform after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Terms & Conditions"
        description="Last updated: March 2026. Please read these terms before using the MCA 26 platform."
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
