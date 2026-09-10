import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { MockTestSection } from "@/components/sections/MockTestSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export const metadata = createMetadata({
  title: "Mock Tests",
  description:
    "Prepare smarter with MCA 26 mock tests — free practice resources and premium features coming soon.",
  path: "/mock-tests",
});

export default function MockTestsPage() {
  return (
    <>
      <PageHeader
        label="Mock Tests"
        title="Prepare smarter."
        description="Free subject tests and MCQs planned alongside premium full-length mocks with analytics."
      />
      <MockTestSection />
      <DownloadSection />
    </>
  );
}
