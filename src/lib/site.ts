export const siteConfig = {
  name: "AMU BATCH X",
  fullName: "AMU BATCH X | Student App for AMU Computer Science",
  tagline: "Timetable, attendance and notices in one app.",
  description:
    "AMU BATCH X is a free Android app built by students for the Department of Computer Science at Aligarh Muslim University, with class timetables, attendance tracking, department notices, notes and exam information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.amubatchx.app",
  supportEmail: "contact@amubatchx.app",
  // Release data comes from the `app_versions` table (see src/lib/app-version.ts).
  // These values are only used when the database can't be reached.
  releasesUrl: "https://github.com/sameerahmad005/Batch-26/releases/latest",
  androidDownloadUrl:
    process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL ||
    process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL ||
    "https://github.com/sameerahmad005/Batch-26/releases/latest",
  fallbackAppVersion: process.env.NEXT_PUBLIC_APP_VERSION || "",
  githubOrg: "https://github.com/sameerahmad005/Batch-X",
  linkedinOrg: "https://www.linkedin.com/in/ali-saqulain-7404a8287",
  keywords: [
    "AMU BATCH X",
    "Batch X",
    "AMU Computer Science",
    "Aligarh Muslim University",
    "AMU student app",
    "AMU attendance tracker",
    "AMU timetable app",
    "MCA AMU",
  ],
  copyright: "© 2026 AMU BATCH X",
  disclaimer:
    "A student project for the Department of Computer Science. Not an official Aligarh Muslim University app.",
};
