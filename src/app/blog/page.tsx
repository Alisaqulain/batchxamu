import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/sections/BlogCard";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Notes from the AMU BATCH X team on building a student app for the Department of Computer Science at Aligarh Muslim University.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Notes from the team"
        description="Why we built AMU BATCH X, how it works, and what we're working on next."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div data-reveal-stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
