import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AppShowcase } from "@/components/sections/AppShowcase";

export const metadata = createMetadata({
  title: "Download App",
  description:
    "Download MCA 26 — the Department of Computer Science digital academic platform for Android.",
  path: "/download",
});

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        label="Download"
        title="Your department. In your pocket."
        description="Download the MCA 26 app and keep attendance, timetables, notices and study resources in one place."
      />
      <AppShowcase />
      <DownloadSection />
      <FinalCTA />
    </>
  );
}
