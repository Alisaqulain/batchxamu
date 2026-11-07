import type { NavLink } from "@/types";

export interface NavDropdownItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
  /** Show the latest app version (from the database) as the badge. */
  versionBadge?: boolean;
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
    description: "The app and how to get it",
    items: [
      {
        title: "Features",
        href: "/features",
        description: "Attendance, timetable, notices and notes",
        iconName: "Layers",
      },
      {
        title: "Screenshots",
        href: "/#screenshots",
        description: "Screens from the Android app",
        iconName: "Smartphone",
      },
      {
        title: "App preview",
        href: "/#capabilities",
        description: "Try each feature on the phone preview",
        iconName: "Sparkles",
      },
      {
        title: "Download",
        href: "/download",
        description: "Get the Android APK",
        versionBadge: true,
        iconName: "Download",
      },
      {
        title: "Release notes",
        href: "/download#changelog",
        description: "What changed in the latest version",
        iconName: "History",
      },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    description: "Programs, guides and practice",
    items: [
      {
        title: "Programs",
        href: "/programs",
        description: "MCA, M.Sc., B.Sc. (Hons.) and Ph.D.",
        iconName: "GraduationCap",
      },
      {
        title: "For students",
        href: "/students",
        description: "Attendance rules, labs and exams",
        iconName: "BookOpen",
      },
      {
        title: "For teachers",
        href: "/teachers",
        description: "Planned tools for class changes and attendance",
        iconName: "Users",
      },
      {
        title: "Mock tests",
        href: "/mock-tests",
        description: "Past papers and practice tests (planned)",
        iconName: "CheckSquare",
      },
      {
        title: "Roadmap",
        href: "/#department",
        description: "Which programs are supported and what's next",
        iconName: "Building2",
      },
    ],
  },
  {
    id: "community",
    label: "Community",
    description: "The team behind the app",
    items: [
      {
        title: "About",
        href: "/about",
        description: "Why we built AMU BATCH X",
        iconName: "Info",
      },
      {
        title: "Developers",
        href: "/developers",
        description: "Who builds the app",
        iconName: "Code2",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Notes from the team",
        iconName: "Newspaper",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Questions, bugs and feedback",
        iconName: "Mail",
      },
    ],
  },
  {
    id: "more",
    label: "Legal",
    description: "Privacy and terms",
    items: [
      {
        title: "Privacy Policy",
        href: "/privacy",
        description: "What data the app stores",
        iconName: "ShieldCheck",
      },
      {
        title: "Terms",
        href: "/terms",
        description: "Rules for using the app and website",
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
  { label: "Features", href: "/features" },
  { label: "Programs", href: "/programs" },
  { label: "For students", href: "/students" },
  { label: "For teachers", href: "/teachers" },
  { label: "Mock tests", href: "/mock-tests" },
  { label: "Download", href: "/download" },
];

export const footerCommunityLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Developers", href: "/developers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];
