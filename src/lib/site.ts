export const siteConfig = {
  name: "AMU BATCH X",
  appName: "MCA 26",
  fullName: "AMU BATCH X — Department of Computer Science Student Platform",
  tagline: "Your Department. Your Academic Life. One App.",
  description:
    "Discover AMU BATCH X, a digital academic platform designed to simplify student life with attendance, timetable, notices, notes, assignments, exams, mock tests and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://amubatchx.app",
  androidDownloadUrl:
    process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL ||
    process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL ||
    "",
  appVersion: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
  githubOrg: "https://github.com/Alisaqulain",
  linkedinOrg: "https://www.linkedin.com/in/ali-saqulain-7404a8287",
  keywords: [
    "Department of Computer Science app",
    "Computer Science student app",
    "AMU BATCH X",
    "AMU Computer Science",
    "student academic platform",
    "attendance app for students",
    "computer science academic app",
  ],
  copyright: "© 2026 AMU BATCH X. Built by the student development team.",
  disclaimer:
    "Designed for the Department of Computer Science community. Not an official university-operated product unless formally authorized.",
};
