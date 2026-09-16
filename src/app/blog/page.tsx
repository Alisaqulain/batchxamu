import { createMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/sections/BlogCard";

export const metadata = createMetadata({
  title: "Engineering Blog & Insights",
  description:
    "Practical articles about digital academic platforms, student life, and building AMU BATCH X, written for students and developers.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Editorial & Engineering"
        title="Insights, platform strategy, and development notes."
        description="Essays and technical documentation on centralizing student life, academic infrastructure, and building AMU BATCH X."
      />

      <section className="py-14 sm:py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16">
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
