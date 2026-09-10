import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { getAllBlogSlugs, getBlogPost } from "@/data/blog";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.date,
  });
}

function renderContent(content: string) {
  const blocks = content.split("\n\n");
  return blocks.map((block, index) => {
    if (block.startsWith("**") && block.endsWith("**")) {
      const text = block.slice(2, -2);
      return (
        <h2 key={index} className="font-display text-xl font-semibold text-foreground">
          {text}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line) => line.replace(/^- /, ""));
      return (
        <ul key={index}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p key={index}>{block}</p>;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="border-b border-border bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to blog
            </Link>

            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" aria-hidden="true" />
                {post.author}
              </span>
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose-blog">{renderContent(post.content)}</div>
        </div>
      </article>
    </>
  );
}
