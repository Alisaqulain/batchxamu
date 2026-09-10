import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { coreFeatures } from "@/data/features";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { AppBenefitsSection } from "@/components/sections/AppBenefitsSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export const metadata = createMetadata({
  title: "For Students",
  description:
    "MCA 26 helps Computer Science students track attendance, access timetables, receive notices, and manage academic resources.",
  path: "/students",
});

export default function StudentsPage() {
  return (
    <>
      <PageHeader
        label="For Students"
        title="Academic life, simplified."
        description="One app for attendance, classes, notices, notes, assignments and exams — built for how students actually study."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-display text-2xl font-semibold">Available now</h2>
            <StatusBadge status="live" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coreFeatures.map((feature, i) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                status={feature.status}
                accent={i % 5 === 0 ? "coral" : "green"}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <DownloadButton size="lg" />
          </div>
        </div>
      </section>

      <AppBenefitsSection />
      <DownloadSection />
    </>
  );
}
