import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export const metadata = createMetadata({
  title: "Developers",
  description:
    "Meet the student development team building MCA 26 for the Department of Computer Science.",
  path: "/developers",
});

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        label="Team"
        title="Built by students who understand the problem."
        description="A student-led team building a digital platform for the Department of Computer Science."
      />
      <DeveloperSection />
      <DownloadSection />
    </>
  );
}
