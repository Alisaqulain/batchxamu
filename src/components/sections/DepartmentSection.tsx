import { departmentHierarchy } from "@/data/programs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function DepartmentSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Department"
          title="Built for the entire Department."
          description="MCA 26 is growing into a digital platform for the Department of Computer Science — not just one course or batch."
        />

        <div className="mx-auto max-w-md">
          {departmentHierarchy.map((item, i) => (
            <div key={`${item.label}-${i}`} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-full rounded-xl px-5 py-3 text-center text-sm font-semibold",
                  item.level === 0
                    ? "bg-primary text-white"
                    : item.level === 1
                      ? "border border-primary/30 bg-primary-light text-primary"
                      : "border border-border bg-surface text-foreground"
                )}
              >
                {item.label}
              </div>
              {i < departmentHierarchy.length - 1 && (
                <ChevronDown className="my-1 h-4 w-4 text-primary/40" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          {siteConfig.disclaimer}
        </p>
      </div>
    </section>
  );
}
