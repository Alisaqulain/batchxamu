import type { Feature } from "@/types";

export const beforeItems = [
  "WhatsApp",
  "PDF files",
  "Different notices",
  "Screenshots",
  "Messages",
  "Manual attendance checking",
  "Scattered resources",
];

export const afterItems = [
  "One App",
  "Attendance",
  "Timetable",
  "Notices",
  "Notes",
  "Assignments",
  "Exams",
  "Notifications",
  "Mock Tests",
];

export const coreFeatures: Feature[] = [
  { id: "attendance", title: "Attendance", description: "Track theory and lab attendance at a glance.", icon: "ClipboardCheck", status: "live" },
  { id: "timetable", title: "Timetable", description: "Your weekly schedule, organized by day.", icon: "Calendar", status: "live" },
  { id: "notices", title: "Notices", description: "Department and class announcements in one feed.", icon: "Bell", status: "live" },
  { id: "assignments", title: "Assignments", description: "Deadlines and submissions, easy to follow.", icon: "FileText", status: "live" },
  { id: "notes", title: "Notes", description: "Study material and PDFs in one library.", icon: "BookOpen", status: "live" },
  { id: "exams", title: "Exams", description: "Exam schedules and important dates.", icon: "GraduationCap", status: "live" },
  { id: "faculty", title: "Faculty", description: "Faculty directory when you need it.", icon: "Users", status: "live" },
  { id: "holidays", title: "Holidays", description: "Academic calendar and holiday list.", icon: "Palmtree", status: "live" },
  { id: "lab", title: "Lab Attendance", description: "Separate tracking for lab sessions.", icon: "FlaskConical", status: "live" },
  { id: "notifications", title: "Notifications", description: "Timely push updates on your device.", icon: "Smartphone", status: "live" },
  { id: "offline", title: "Offline Access", description: "Essential info when connectivity is limited.", icon: "WifiOff", status: "live" },
  { id: "dark", title: "Dark Mode", description: "Comfortable viewing day or night.", icon: "Moon", status: "live" },
];

export const stickyFeatures = [
  { id: "attendance", title: "Attendance", description: "See where you stand without digging through messages.", icon: "ClipboardCheck" },
  { id: "timetable", title: "Timetable", description: "Know what's next in your academic day.", icon: "Calendar" },
  { id: "notices", title: "Notices", description: "Never miss an important department update.", icon: "Bell" },
  { id: "notes", title: "Notes", description: "Centralized study resources for every subject.", icon: "BookOpen" },
  { id: "assignments", title: "Assignments", description: "Track what's due and what's submitted.", icon: "FileText" },
  { id: "exams", title: "Exams", description: "Exam dates and schedules in one view.", icon: "GraduationCap" },
];

export const attendanceSample = [
  { subject: "Data Structures", percentage: 90 },
  { subject: "Operating Systems", percentage: 80 },
  { subject: "Database Systems", percentage: 92 },
];

export const timetableSample = [
  {
    day: "Monday",
    classes: [
      { time: "09:00", subject: "Data Structures" },
      { time: "11:00", subject: "Database Systems" },
      { time: "14:00", subject: "Operating Systems" },
    ],
  },
  {
    day: "Tuesday",
    classes: [{ time: "09:00", subject: "Computer Networks" }],
  },
];

export const notificationSample = [
  { type: "New Notice", message: "Mid-Semester Examination Schedule", accent: "green" as const },
  { type: "Class Update", message: "Today's 2 PM class has been rescheduled.", accent: "coral" as const },
  { type: "Assignment", message: "New assignment uploaded.", accent: "green" as const },
];

export const teacherCapabilities = [
  "Manage classes",
  "Add, cancel, and reschedule classes",
  "Manage attendance",
  "Upload notes",
  "Publish notices",
  "Share assignments",
  "Send class updates",
  "Notify students instantly",
];

export const teacherWorkflow = [
  "Teacher Dashboard",
  "Class Management",
  "Cancel / Reschedule",
  "Reason",
  "Confirm",
  "Student Notification",
  "Student App",
];

export const teacherDashboardCards = [
  "Today's Classes",
  "Attendance",
  "Notices",
  "Assignments",
  "Study Material",
  "Class Management",
];
