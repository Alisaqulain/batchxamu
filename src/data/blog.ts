import type { BlogPost } from "@/types";

const author = "AMU BATCH X Team";

export const blogPosts: BlogPost[] = [
  {
    slug: "why-students-need-centralized-academic-platform",
    title: "Why We Put Timetables, Notices and Attendance in One App",
    excerpt:
      "Class updates in one WhatsApp group, notices in another, attendance in your head. Here is what that costs students and what we did about it.",
    date: "2026-01-28",
    readTime: "4 min read",
    author,
    tags: ["Academics", "Student Life", "AMU BATCH X"],
    content: `
Most semesters go the same way. A room change is posted in one group, an assignment deadline in another, and attendance is something you only think about when it's already a problem.

**What goes wrong**

Nobody is doing anything wrong here. The information just lives in too many places. Students who keep up do it by checking several chats, asking friends and following up with class representatives. Students who don't, miss things.

**What we wanted instead**

One place to check in the morning:

- Today's classes and rooms
- Notices from the department
- Your attendance, and how many classes you can still miss
- Notes and past papers, sorted by subject
- Exam dates and assignment deadlines

**What AMU BATCH X does today**

The Android app covers all of the above, and keeps your timetable, attendance and saved notes on the phone so they work without internet. Teacher tools and support for more programs are planned, and we label them as planned until they ship.
    `.trim(),
  },
  {
    slug: "department-wide-digital-platform",
    title: "From One Batch to the Whole Department",
    excerpt:
      "AMU BATCH X started with one MCA batch. Here is how we are making it work for other programs in the Department of Computer Science.",
    date: "2026-02-10",
    readTime: "4 min read",
    author,
    tags: ["Department", "Programs", "Roadmap"],
    content: `
An app that only works for one batch doesn't help much in a department where everyone shares the same faculty, labs and notice board.

**Different programs, shared basics**

The Department of Computer Science at AMU runs B.Sc. (Hons.), MCA, M.Sc. and Ph.D. programs. Notices and the faculty directory are the same for everyone. Timetables, subjects and exams are not.

**How we are approaching it**

Shared things like notices are built once. Program-specific things like the timetable and subject list are set up per program, so adding a new program doesn't mean rebuilding the app.

**A note on what this is**

AMU BATCH X is a student project. It is not an official Aligarh Muslim University app, and the department's own notices are always the final word.
    `.trim(),
  },
  {
    slug: "mca-student-app-to-department-ecosystem",
    title: "How AMU BATCH X Started",
    excerpt:
      "The app began as a side project for our own MCA batch. A short history, and what we are working on next.",
    date: "2026-03-05",
    readTime: "4 min read",
    author,
    tags: ["AMU BATCH X", "Development", "Roadmap"],
    content: `
AMU BATCH X started as a small app for our own MCA batch, originally under the name MCA 26. Notices were easy to miss, attendance was hard to keep track of, and notes were spread across chats and drives.

**The first version**

We started with what we used every day:

- Timetable and rooms
- Attendance, including labs
- Department notices
- Notes, assignments and exam dates
- Faculty directory and holiday calendar
- Offline access for all of the above

**Who builds it**

Ali Saqulain works on the web platform and backend. Sameer Ahmad works on the Android app.

**What's next**

Teacher tools for attendance and class updates, mock tests, and support for more programs. Each one is marked as planned on the site until it is actually available.

**Feedback**

If something is wrong or missing, tell us through the contact page. Most of the features in the app came from students asking for them.
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
