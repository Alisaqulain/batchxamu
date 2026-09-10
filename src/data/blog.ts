import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-better-student-experience",
    title: "Building a Better Student Experience",
    excerpt:
      "University life involves juggling classes, assignments, notices, and career planning. A well-designed digital platform can reduce friction and help students stay focused on learning.",
    date: "2026-01-15",
    readTime: "5 min read",
    author: "MCA 26 Team",
    tags: ["Student Life", "Digital Platform", "Academics"],
    content: `
University students today navigate a complex academic environment. Between attending lectures, completing assignments, tracking attendance, and preparing for exams, information often arrives through multiple disconnected channels — WhatsApp groups, notice boards, word of mouth, and scattered PDF files.

A centralized digital platform addresses this fragmentation directly. When students can open one application and see their timetable, latest notices, attendance status, and study materials, they spend less time searching and more time learning.

**Reducing information overload**

Instead of scrolling through dozens of chat messages to find an important announcement, students receive structured notices with clear categories. Academic updates, exam schedules, and holiday notifications are organized and searchable.

**Building consistent habits**

When attendance tracking, assignment deadlines, and class schedules live in one place, students develop reliable routines. They check one source of truth each morning rather than piecing together information from several groups.

**Supporting offline access**

Connectivity is not always guaranteed on campus. Platforms that cache essential information — timetables, downloaded notes, recent notices — ensure students are not left without critical data when networks are slow or unavailable.

**Looking ahead**

The goal is not to replace human connection but to handle the administrative overhead that currently consumes student attention. With that foundation in place, platforms can extend into mentorship, career guidance, and collaborative learning — areas where MCA 26 is actively being developed.
    `.trim(),
  },
  {
    slug: "why-students-need-centralized-academic-platform",
    title: "Why Students Need a Centralized Academic Platform",
    excerpt:
      "Scattered academic information creates stress and missed deadlines. Here is why departments benefit from bringing resources, communication, and tracking into one system.",
    date: "2026-01-28",
    readTime: "6 min read",
    author: "MCA 26 Team",
    tags: ["Academics", "Platform Design", "Department"],
    content: `
Every semester, students face the same recurring challenges: a timetable change announced in one group, an assignment deadline shared in another, and attendance concerns discussed informally after class. This decentralization is not a failure of any individual — it is a structural problem that digital tools can solve.

**The cost of fragmentation**

When academic information lives in multiple places, some students inevitably miss updates. Those who catch everything often do so through constant vigilance — checking multiple apps, asking classmates, and following up with representatives. This creates unequal access to information.

**What centralization provides**

A centralized platform offers a single entry point for:

- Class schedules and room changes
- Official notices from the department
- Attendance records students can verify
- Notes and study materials organized by subject
- Exam dates and assignment tracking

**Benefits for the department**

Departments gain visibility into what information reaches students and can ensure consistency. Rather than relying on a chain of forwards, announcements go directly to enrolled students through the platform.

**MCA 26's approach**

MCA 26 was built starting from the student experience in the MCA program, with the architecture designed to expand across the Department of Computer Science. The current app focuses on core academic features; future modules will add teacher tools and multi-program support.
    `.trim(),
  },
  {
    slug: "department-wide-digital-platform",
    title: "From One Program to a Department Platform",
    excerpt:
      "MCA 26 started with MCA students, but the architecture is designed to serve the entire Department of Computer Science across undergraduate, postgraduate and doctoral programs.",
    date: "2026-02-10",
    readTime: "5 min read",
    author: "MCA 26 Team",
    tags: ["Department", "Platform", "Programs"],
    content: `
Department-level platforms need to work for more than one program. A timetable system that only serves one batch leaves other students behind. A notice system that only reaches one course creates information gaps across the department.

**Why department-wide architecture matters**

The Department of Computer Science runs multiple programs — from B.Sc. (Hons.) Computer Science and Applications through MCA and M.Sc. Computer Science to Ph.D. Computer Science. Students across these programs share faculty, facilities, and department announcements, but their daily academic needs differ.

**Building for expansion**

MCA 26 currently focuses on features MCA students use every day. The platform architecture, however, is designed to onboard additional programs without rebuilding from scratch. Shared infrastructure handles department notices and faculty directories; program-specific modules handle curriculum differences.

**Honest positioning**

MCA 26 is designed for the Department of Computer Science community. It is a student-developed project and should not be presented as an official university-operated platform unless formally authorized.

**What's next**

Teacher interfaces, mock tests, and broader program support are on the roadmap — each clearly labeled so users know what is live today and what is coming.
    `.trim(),
  },
  {
    slug: "future-of-digital-university-platforms",
    title: "The Future of Digital University Platforms",
    excerpt:
      "University platforms are evolving from simple notice boards to integrated ecosystems. What comes next for department-level academic technology?",
    date: "2026-02-22",
    readTime: "7 min read",
    author: "MCA 26 Team",
    tags: ["Future", "University Tech", "Platform"],
    content: `
Digital tools in higher education have moved through distinct phases. Early systems focused on administrative records. Later, learning management systems brought course content online. The next phase integrates daily student life — attendance, communication, resources, and career development — into cohesive platforms.

**From apps to ecosystems**

Single-purpose apps solve one problem well but create silos. The direction is toward platforms that serve multiple stakeholders: students access resources, teachers manage classes, and departments maintain a unified digital presence.

**Multi-program scalability**

Departments often run several programs — MCA, M.Sc., B.Sc., and more. A scalable platform architecture allows shared infrastructure (faculty directories, department notices) while supporting program-specific modules (curriculum, assessments, communities).

**Assessment and preparation**

Mock tests and practice platforms represent another growth area. Free practice resources combined with premium analytics can help students prepare systematically without relying solely on external coaching.

**Public web presence**

The website itself becomes part of the platform strategy — handling app distribution, SEO, blog content, and project visibility. This public layer supports discovery while the mobile app handles daily academic workflows.

**Building thoughtfully**

MCA 26 is being developed with this long-term vision while maintaining honesty about what is live today versus what is planned. Sustainable platform growth depends on solving real student problems first, then expanding based on demonstrated need.
    `.trim(),
  },
  {
    slug: "mca-student-app-to-department-ecosystem",
    title: "From MCA Student App to Department Digital Ecosystem",
    excerpt:
      "MCA 26 started as a student-focused academic app for the MCA program. Here is how the project is evolving toward a full department platform.",
    date: "2026-03-05",
    readTime: "6 min read",
    author: "MCA 26 Team",
    tags: ["MCA 26", "Development", "Roadmap"],
    content: `
MCA 26 began with a practical observation: MCA students needed a better way to access academic information. Notices were easy to miss, attendance was hard to track, and study materials were scattered across chat groups and drives.

**Starting with the student experience**

The first version focused on features students use daily:

- Timetable and class schedules
- Attendance tracking including lab sessions
- Department notices and announcements
- Notes, assignments, and exam information
- Faculty directory and holiday calendar
- Offline access for essential data

These features form the foundation — they must work reliably before the platform expands.

**The development team**

MCA 26 is built by students who understand these challenges firsthand. Ali Saqulain leads full-stack development of the academic portal, Sameer Ahmad focuses on app development and student experience, and Okasha Ansari contributes to platform development.

**What comes next**

The roadmap includes teacher dashboards for class and attendance management, mock test modules, multi-program support, and a referral program. Each feature is being designed with clear status labels so users know what is available now and what is coming.

**This website**

You are reading part of the platform strategy. This public website handles marketing, SEO, app downloads, blog content, and project information — extending MCA 26's reach beyond the mobile app.

**Get involved**

Students can download the app, explore features, and share feedback through the contact page. The platform grows best when built in conversation with the community it serves.
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
