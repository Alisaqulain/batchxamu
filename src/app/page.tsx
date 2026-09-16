import { Hero } from "@/components/sections/Hero";
import { AppScreenshotGallery } from "@/components/sections/AppScreenshotGallery";
import { CoreCapabilitiesAtlas } from "@/components/sections/CoreCapabilitiesAtlas";
import { FragmentationLedger } from "@/components/sections/FragmentationLedger";
import { FacultyDispatchLoop } from "@/components/sections/FacultyDispatchLoop";
import { DepartmentArchitecture } from "@/components/sections/DepartmentArchitecture";
import { TeamStudio } from "@/components/sections/TeamStudio";
import { ReleaseTerminal } from "@/components/sections/ReleaseTerminal";
import { getLatestAppVersion } from "@/lib/app-version";

export const revalidate = 60; // Refresh cache every 60s for public home

export default async function HomePage() {
  const latest = await getLatestAppVersion();

  return (
    <>
      {/* 01. APP: Identity, Value, Dominant Download & 3D Stage */}
      <Hero latestVersion={latest.latest_version} />

      {/* 02. EXPERIENCE: Authentic App Screenshots Gallery */}
      <AppScreenshotGallery />

      {/* 03. FEATURES: 4 Core Modules & Offline Utilities */}
      <CoreCapabilitiesAtlas />

      {/* 04. DETAILS: Campus Reality, Faculty Dispatch Loop, Architecture & Engineering Team */}
      <FragmentationLedger />
      <FacultyDispatchLoop />
      <DepartmentArchitecture />
      <TeamStudio />

      {/* 05. INSTALL: Distribution Terminal & Installation Station */}
      <ReleaseTerminal latest={latest} />
    </>
  );
}

