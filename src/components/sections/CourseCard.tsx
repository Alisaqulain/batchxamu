import type { Course } from "@/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">{course.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary">{course.programType}</p>
        </div>
        <StatusBadge status={course.status} />
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {course.description}
      </p>
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted">
          Includes
        </p>
        <ul className="space-y-1.5">
          {course.resources.map((resource) => (
            <li
              key={resource}
              className="text-sm text-muted before:mr-2 before:font-bold before:text-primary before:content-['•']"
            >
              {resource}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
