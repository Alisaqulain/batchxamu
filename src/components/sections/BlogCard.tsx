import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 1).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-primary-light px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted">
        <span>{formatDate(post.date)}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {post.readTime}
        </span>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
      >
        Read article
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
