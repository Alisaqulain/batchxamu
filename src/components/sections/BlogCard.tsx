import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="ledger-card flex h-full flex-col justify-between border border-border bg-surface p-6 sm:p-7 transition-all hover:border-primary/40">
      <div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded border border-primary/20 bg-primary-light px-2 py-0.5 font-mono-code text-[10px] font-bold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-mono-code text-[11px] text-muted">
            {post.readTime}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-foreground transition-colors hover:text-primary">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="mt-2.5 text-xs leading-relaxed text-muted line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4 text-xs font-mono-code">
        <span className="text-muted">{formatDate(post.date)}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
        >
          <span>Read</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
