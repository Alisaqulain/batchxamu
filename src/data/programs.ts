import type { FeatureStatus } from "@/types";

export interface Program {
  id: string;
  name: string;
  level: "Undergraduate" | "Postgraduate" | "Doctoral";
  focus: string;
  status: FeatureStatus;
}

export const departmentHierarchy = [
  { label: "Department of Computer Science", level: 0 },
  { label: "Undergraduate", level: 1 },
  { label: "B.Sc. (Hons.) Computer Science and Applications", level: 2 },
  { label: "Postgraduate", level: 1 },
  { label: "Master in Computer Science and Applications (MCA)", level: 2 },
  { label: "M.Sc. Computer Science", level: 2 },
  { label: "Doctoral", level: 1 },
  { label: "Ph.D. Computer Science", level: 2 },
];

export const programs: Program[] = [
  {
    id: "bsc",
    name: "B.Sc. (Hons.) Computer Science and Applications",
    level: "Undergraduate",
    focus:
      "Strong computing foundations, programming and preparation for IT careers.",
    status: "planned",
  },
  {
    id: "mca",
    name: "Master in Computer Science and Applications (MCA)",
    level: "Postgraduate",
    focus:
      "Software development, applications and advanced computing.",
    status: "live",
  },
  {
    id: "msc",
    name: "M.Sc. Computer Science",
    level: "Postgraduate",
    focus:
      "Advanced computing with specialization pathways including AI & ML, Cyber Security and Digital Forensics.",
    status: "planned",
  },
  {
    id: "phd",
    name: "Ph.D. Computer Science",
    level: "Doctoral",
    focus: "Research, innovation and advanced computer science.",
    status: "planned",
  },
];
