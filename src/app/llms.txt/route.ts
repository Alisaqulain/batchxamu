import { siteConfig } from "@/lib/site";
import { getLatestRelease } from "@/lib/app-version";
import { developers } from "@/data/developers";
import { blogPosts } from "@/data/blog";
import { formatVersion } from "@/lib/utils";

// Same cache window as the pages; admin release actions purge it too.
export const revalidate = 60;

export async function GET() {
  const release = await getLatestRelease();
  const url = siteConfig.url;

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.disclaimer}

## App

- Platform: Android (APK). An iOS version is in development and not available yet.
- Latest version: ${formatVersion(release.version)}
- Download page: ${url}/download
- Direct download (always the latest APK): ${url}/api/download
- Latest version as JSON: ${url}/api/version
- Price: free, no ads, no third-party trackers

## What the app does

- Class timetable with rooms and labs
- Attendance tracking against AMU's 75% requirement
- Department notices with push notifications
- Notes, lab programs and previous year question papers
- Exam dates and assignment deadlines
- Offline access to timetable, attendance and saved notes

## Planned (not available yet)

- Teacher tools for attendance, class changes and notices
- Mock tests
- Support for more programs in the department

## Team

${developers.map((d) => `- ${d.name}, ${d.title}${d.github ? ` (${d.github})` : ""}`).join("\n")}

## Pages

- [Home](${url}/)
- [Features](${url}/features)
- [Download](${url}/download)
- [About](${url}/about)
- [Programs](${url}/programs)
- [For students](${url}/students)
- [For teachers](${url}/teachers)
- [Mock tests](${url}/mock-tests)
- [Developers](${url}/developers)
- [Blog](${url}/blog)
- [Contact](${url}/contact)
- [Privacy policy](${url}/privacy)
- [Terms](${url}/terms)

## Blog

${blogPosts.map((p) => `- [${p.title}](${url}/blog/${p.slug}): ${p.excerpt}`).join("\n")}

## Contact

- Email: ${siteConfig.supportEmail}
- GitHub: ${siteConfig.githubOrg}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
