import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { TeacherSection } from "@/components/sections/TeacherSection";

export const metadata = createMetadata({
  title: "Teacher Platform",
  description:
    "Planned MCA 26 teacher dashboard for class management, attendance, notices and student notifications.",
  path: "/teachers",
});

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        label="Coming Soon"
        title="Connecting the classroom."
        description="Teacher tools for managing classes, attendance, notices and updates — with instant student notifications."
      />
      <TeacherSection />
    </>
  );
}
