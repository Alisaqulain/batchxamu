import { Hero } from "@/components/sections/Hero";
import { WhyAppSection } from "@/components/sections/WhyAppSection";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StickyFeatures } from "@/components/sections/StickyFeatures";
import { AttendancePreview } from "@/components/sections/AttendancePreview";
import { TimetablePreview } from "@/components/sections/TimetablePreview";
import { NotificationPreview } from "@/components/sections/NotificationPreview";
import { TeacherSection } from "@/components/sections/TeacherSection";
import { MockTestSection } from "@/components/sections/MockTestSection";
import { DepartmentSection } from "@/components/sections/DepartmentSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AppBenefitsSection } from "@/components/sections/AppBenefitsSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyAppSection />
      <AppShowcase />
      <FeatureGrid />
      <StickyFeatures />
      <AttendancePreview />
      <TimetablePreview />
      <NotificationPreview />
      <TeacherSection />
      <MockTestSection />
      <DepartmentSection />
      <ProgramsSection />
      <AppBenefitsSection />
      <RoadmapSection />
      <DeveloperSection />
      <DownloadSection />
      <FinalCTA />
    </>
  );
}
