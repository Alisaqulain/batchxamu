import type { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "mca",
    name: "MCA",
    programType: "Postgraduate",
    description:
      "Master of Computer Applications: the primary program currently supported by MCA 26.",
    resources: [
      "Attendance & timetable",
      "Notes & assignments",
      "Faculty directory",
      "Exam schedules",
    ],
    status: "live",
  },
  {
    id: "msc-cs",
    name: "M.Sc. Computer Science",
    programType: "Postgraduate",
    description:
      "Planned expansion to support M.Sc. Computer Science students with shared department resources.",
    resources: [
      "Academic resources",
      "Student community",
      "Department notices",
      "Shared faculty directory",
    ],
    status: "coming-soon",
  },
  {
    id: "bsc-cs",
    name: "B.Sc. Computer Science",
    programType: "Undergraduate",
    description:
      "Future support for undergraduate Computer Science programs within the department platform.",
    resources: [
      "Academic resources",
      "Student community",
      "Course materials",
      "Department integration",
    ],
    status: "coming-soon",
  },
  {
    id: "future",
    name: "Future Programs",
    programType: "Expandable",
    description:
      "The platform architecture is designed to onboard additional Computer Science programs as the department grows.",
    resources: [
      "Multi-course architecture",
      "Shared infrastructure",
      "Program-specific modules",
      "Department-wide analytics",
    ],
    status: "planned",
  },
];
