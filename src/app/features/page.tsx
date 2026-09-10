import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StickyFeatures } from "@/components/sections/StickyFeatures";
import { AttendancePreview } from "@/components/sections/AttendancePreview";
import { TimetablePreview } from "@/components/sections/TimetablePreview";
import { NotificationPreview } from "@/components/sections/NotificationPreview";
import { DownloadSection } from "@/components/sections/DownloadSection";

export const metadata = createMetadata({
  title: "Features",
  description:
    "Explore MCA 26 features — attendance, timetable, notices, notes, assignments, exams, notifications and more.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        label="Features"
        title="Everything in one app."
        description="Core features designed for daily academic life in the Department of Computer Science."
      />
      <FeatureGrid showHeader={false} />
      <StickyFeatures />
      <AttendancePreview />
      <TimetablePreview />
      <NotificationPreview />
      <DownloadSection />
    </>
  );
}
