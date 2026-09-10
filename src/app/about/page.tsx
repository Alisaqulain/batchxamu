import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { DownloadSection } from "@/components/sections/DownloadSection";

export const metadata = createMetadata({
  title: "About",
  description:
    "MCA 26 is a digital academic platform designed for the Department of Computer Science community.",
  path: "/about",
});

const sections = [
  {
    title: "What is MCA 26?",
    content:
      "MCA 26 is a digital academic platform for the Department of Computer Science. It brings attendance, timetables, notices, notes, assignments, exams and more into one mobile app — with this website for downloads, features and updates.",
  },
  {
    title: "Why was it built?",
    content:
      "Students were checking multiple apps, chats and files for academic information. MCA 26 centralizes daily academic workflows so students spend less time searching and more time learning.",
  },
  {
    title: "Who is it for?",
    content:
      "Built for Computer Science students across the department. The platform is designed to grow from the current MCA focus to support B.Sc., M.Sc. and Ph.D. programs over time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="A platform for the Department of Computer Science."
        description="MCA 26 is growing into a digital platform for the entire department — not just one course or batch."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{section.content}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 rounded-xl border border-border bg-background p-4 text-sm text-muted">
            Designed for the Department of Computer Science community. Not an
            official university-operated product unless formally authorized.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold">Current status:</span>
            <StatusBadge status="live" />
            <span className="text-sm text-muted">Student app features available</span>
          </div>
        </div>
      </section>

      <DownloadSection />
      <FinalCTA />
    </>
  );
}
