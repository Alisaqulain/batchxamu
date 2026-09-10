import type { FutureFeature } from "@/types";

export const futurePlatformFeatures: FutureFeature[] = [
  {
    id: "teacher-interface",
    title: "Teacher Interface",
    description:
      "Teachers will have direct control over academic updates through a dedicated dashboard.",
    status: "coming-soon",
    items: [
      "Manage classes",
      "Manage attendance",
      "Add, cancel, and reschedule classes",
      "Publish notices",
      "Upload notes and share assignments",
      "Send important updates to students",
    ],
    workflow:
      "Teacher Dashboard → Cancel Class → Select Reason → Students Receive Notification",
  },
  {
    id: "alumni-network",
    title: "Alumni & Senior Network",
    description:
      "A mentorship ecosystem connecting juniors with experienced seniors and alumni.",
    status: "planned",
    items: [
      "Ask career, internship, and placement questions",
      "Get project and higher studies guidance",
      "Connect with experienced alumni profiles",
      "Optional paid mentoring sessions (planned monetization)",
    ],
  },
  {
    id: "department-platform",
    title: "Department-Wide Platform",
    description:
      "Designed as a scalable multi-course platform for the entire Department of Computer Science.",
    status: "planned",
    items: [
      "MCA",
      "M.Sc. Computer Science",
      "B.Sc. Computer Science",
      "Future Programs",
    ],
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description:
      "A dedicated mock-test ecosystem with free practice and premium full-length tests.",
    status: "planned",
    items: [
      "Free: Subject tests, MCQs, practice & previous-year questions",
      "Premium: Full-length mocks, detailed solutions, analytics, rankings",
      "Personalized recommendations based on performance",
    ],
  },
  {
    id: "public-website",
    title: "Public Website",
    description:
      "This website is part of the platform strategy — for downloads, marketing, SEO, and student resources.",
    status: "live",
    items: [
      "App downloads and announcements",
      "SEO-friendly blog and project information",
      "Student resources and backlinks",
    ],
  },
  {
    id: "referral-program",
    title: "Referral Program",
    description:
      "A planned referral system to reward students who help grow the platform community.",
    status: "planned",
    items: [
      "Student shares referral code → new student registers → referral verified",
      "Rewards: Premium mock-test access, mentoring credits, discounts, platform points",
    ],
  },
];

export const mockTestTiers = [
  {
    title: "Free Tests",
    status: "planned" as const,
    items: [
      "Subject tests",
      "MCQs & practice questions",
      "Previous-year questions",
    ],
  },
  {
    title: "Premium Tests",
    status: "planned" as const,
    items: [
      "Full-length mock tests",
      "Detailed solutions",
      "Advanced analytics",
      "Rankings & performance comparison",
      "Personalized recommendations",
    ],
  },
];

export const alumniHelpAreas = [
  "Career decisions",
  "Internships & placements",
  "Projects & technical skills",
  "Higher studies",
  "Industry experience",
];

export const alumniProfileFields = [
  "Name",
  "Graduation year",
  "Company & job role",
  "Skills & experience",
  "Areas of interest",
];
