import type { FeatureStatus } from "@/types";

export interface RoadmapPhase {
  id: string;
  title: string;
  status: FeatureStatus;
  items: string[];
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "current",
    title: "Current",
    status: "live",
    items: [
      "Academic Information",
      "Attendance",
      "Timetable",
      "Notices",
      "Notes",
      "Assignments",
      "Exams",
    ],
  },
  {
    id: "next",
    title: "Next",
    status: "coming-soon",
    items: [
      "Teacher Interface",
      "Advanced Notifications",
      "Mock Tests",
      "Department-wide expansion",
    ],
  },
  {
    id: "future",
    title: "Future",
    status: "planned",
    items: [
      "Advanced academic tools",
      "Premium learning features",
      "Referral program",
      "More department services",
    ],
  },
];

export const referralCard = {
  title: "Referral Program",
  description: "Invite classmates and unlock future rewards.",
  status: "planned" as const,
};

export const appBenefits = [
  { title: "Less searching", description: "One place for daily academic info." },
  { title: "Faster updates", description: "Notices and changes reach you quickly." },
  { title: "Better organization", description: "Notes, assignments and schedules together." },
  { title: "Academic visibility", description: "Track attendance and exam dates easily." },
  { title: "Easy access", description: "Important info available on your phone." },
  { title: "Mobile-first", description: "Built for how students actually study." },
];
