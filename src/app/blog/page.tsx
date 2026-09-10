import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/sections/BlogCard";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Articles about student platforms, academic technology, and the MCA 26 development journey.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Insights & Updates"
        description="Practical articles about digital academic platforms, student life, and building MCA 26 — written for students and developers."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
