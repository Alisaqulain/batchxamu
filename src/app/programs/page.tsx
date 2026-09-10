import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { DepartmentSection } from "@/components/sections/DepartmentSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export const metadata = createMetadata({
  title: "Programs",
  description:
    "MCA 26 is designed for the Department of Computer Science — supporting B.Sc., MCA, M.Sc. and Ph.D. programs.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        label="Programs"
        title="One platform. Multiple programs."
        description="Built for the Department of Computer Science community — expanding across undergraduate, postgraduate and doctoral programs."
      />
      <DepartmentSection />
      <ProgramsSection showHeader={false} />
      <DownloadSection />
    </>
  );
}
