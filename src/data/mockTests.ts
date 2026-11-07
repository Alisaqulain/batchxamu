import type { FeatureStatus } from "@/types";

export interface MockTestItem {
  id: string;
  subject: string;
  questions: number;
  duration: string;
  tier: "free" | "premium";
  status: FeatureStatus;
}

export const mockTestCards: MockTestItem[] = [
  {
    id: "ds",
    subject: "Data Structures",
    questions: 20,
    duration: "30 min",
    tier: "free",
    status: "planned",
  },
  {
    id: "os",
    subject: "Operating Systems",
    questions: 50,
    duration: "60 min",
    tier: "premium",
    status: "planned",
  },
  {
    id: "dbms",
    subject: "DBMS",
    questions: 25,
    duration: "35 min",
    tier: "free",
    status: "planned",
  },
  {
    id: "cn",
    subject: "Computer Networks",
    questions: 40,
    duration: "45 min",
    tier: "premium",
    status: "planned",
  },
];

export const mockTestFreeFeatures = [
  "Subject tests",
  "MCQs",
  "Practice questions",
  "Previous year questions",
  "Your score per test",
];

export const mockTestPremiumFeatures = [
  "Full-length timed tests",
  "Detailed solutions",
  "Topic-wise breakdown of your score",
  "Comparison with your batch",
  "Larger question bank",
];
