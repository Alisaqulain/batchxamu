import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar, Download } from "lucide-react";
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
        <h2 key={index} className="font-display text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3">
          {text}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line) => line.replace(/^- /, ""));
      return (
        <ul key={index} className="my-4 space-y-2 list-disc pl-5 text-sm text-muted leading-relaxed">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="my-4 text-sm sm:text-base text-muted leading-relaxed">
        {block}
      </p>
    );
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

      <article className="border-b border-border bg-background py-10 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono-code text-xs font-semibold text-muted transition-colors hover:text-primary mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to All Articles</span>
          </Link>

          {/* Article Header */}
          <header className="border-b border-border pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-primary/20 bg-primary-light px-2.5 py-0.5 font-mono-code text-xs font-bold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
              {post.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted font-medium">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 font-mono-code text-xs text-muted border-t border-border/60 pt-4">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-primary" />
                <span>{post.author}</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-accent-terracotta" />
                <span>{formatDate(post.date)}</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="py-8 prose-blog">
            {renderContent(post.content)}
          </div>

          {/* Footer Author Box */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8 flex items-center justify-between">
            <div>
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-primary">
                Published by
              </span>
              <h4 className="font-display text-base font-bold text-foreground mt-0.5">
                MCA 2026 Student Engineering Team
              </h4>
              <p className="text-xs text-muted mt-1">
                Department of Computer Science, Aligarh Muslim University.
              </p>
            </div>
            <Link
              href="/download"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-primary text-white px-4 py-2 font-mono-code text-xs font-bold hover:bg-primary-hover transition-colors shadow-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Get Android App</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
