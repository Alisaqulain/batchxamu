import type { NavLink } from "@/types";

export interface NavDropdownItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface NavDropdownCategory {
  id: string;
  label: string;
  description: string;
  items: NavDropdownItem[];
}

export const navDropdownCategories: NavDropdownCategory[] = [
  {
    id: "platform",
    label: "Platform",
    description: "Mobile application systems, technical architecture, and distribution",
    items: [
      {
        title: "Technical Capabilities",
        href: "/features",
        description: "Deep dive into attendance engine, timetables, and offline SQLite cache",
        badge: "Specs",
        iconName: "Layers",
      },
      {
        title: "App Screen Showcase",
        href: "/#screenshots",
        description: "Interactive 3D view of authentic Android screenshots",
        iconName: "Smartphone",
      },
      {
        title: "Capabilities Atlas",
        href: "/#capabilities",
        description: "The four pillars solving daily academic friction in Computer Science",
        iconName: "Sparkles",
      },
      {
        title: "Download App Hub",
        href: "/download",
        description: "Official Android APK package and iOS development status",
        badge: "v1.0.8",
        iconName: "Download",
      },
      {
        title: "Release Changelog",
        href: "/download#changelog",
        description: "Release history, security patches, and version updates",
        iconName: "History",
      },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    description: "Curriculum structures, student guides, and exam archives",
    items: [
      {
        title: "Academic Programs",
        href: "/programs",
        description: "MCA, M.Sc. CS, B.Sc. Hons, and research doctoral coursework",
        iconName: "GraduationCap",
      },
      {
        title: "Student Academic Guide",
        href: "/students",
        description: "Surviving the 75% attendance rule, lab protocols, and exam hall tickets",
        iconName: "BookOpen",
      },
      {
        title: "Faculty & Instructors",
        href: "/teachers",
        description: "Department coordinators, lab supervisors, and office hours",
        iconName: "Users",
      },
      {
        title: "Mock Tests & PYQs",
        href: "/mock-tests",
        description: "Previous semester examination papers and timed practice tests",
        badge: "Practice",
        iconName: "CheckSquare",
      },
      {
        title: "Department Architecture",
        href: "/#department",
        description: "Classrooms CS-01 to CS-04, Unix Lab 2, and systems infra",
        iconName: "Building2",
      },
    ],
  },
  {
    id: "community",
    label: "Community",
    description: "Student development team, documentation, and communication channels",
    items: [
      {
        title: "About AMU BATCH X",
        href: "/about",
        description: "Why we built this platform for the Department of Computer Science",
        iconName: "Info",
      },
      {
        title: "Engineering Team",
        href: "/developers",
        description: "Student developers, contributors, and open-source GitHub repo",
        iconName: "Code2",
      },
      {
        title: "Academic Blog",
        href: "/blog",
        description: "Student articles, study guides, and campus computing updates",
        iconName: "Newspaper",
      },
      {
        title: "Contact & Feedback",
        href: "/contact",
        description: "Direct feedback channel to the student development team",
        iconName: "Mail",
      },
    ],
  },
  {
    id: "more",
    label: "Legal & Policies",
    description: "Privacy policies, operational rules, and student conduct",
    items: [
      {
        title: "Privacy Policy",
        href: "/privacy",
        description: "Local device storage, zero trackers, and complete student privacy",
        iconName: "ShieldCheck",
      },
      {
        title: "Terms & Conditions",
        href: "/terms",
        description: "Platform usage rules and student code of conduct",
        iconName: "FileText",
      },
    ],
  },
];

export const centerNavLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Programs", href: "/programs" },
  { label: "Students", href: "/students" },
  { label: "Teachers", href: "/teachers" },
  { label: "Mock Tests", href: "/mock-tests" },
  { label: "Developers", href: "/developers" },
  { label: "Blog", href: "/blog" },
];

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  ...centerNavLinks,
  { label: "About", href: "/about" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
];

export const footerPlatformLinks: NavLink[] = [
  { label: "Core Features", href: "/features" },
  { label: "Academic Programs", href: "/programs" },
  { label: "Student Survival Guide", href: "/students" },
  { label: "Teacher Dispatch Platform", href: "/teachers" },
  { label: "CS Mock Tests", href: "/mock-tests" },
  { label: "Download App (Android & iOS)", href: "/download" },
];

export const footerCommunityLinks: NavLink[] = [
  { label: "About AMU BATCH X", href: "/about" },
  { label: "Engineering Team", href: "/developers" },
  { label: "Technical Blog", href: "/blog" },
  { label: "Contact & Feedback", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];
