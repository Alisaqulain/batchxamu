import {
  mockTestCards,
  mockTestFreeFeatures,
  mockTestPremiumFeatures,
} from "@/data/mockTests";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MockTestCard } from "./MockTestCard";

export function MockTestSection() {
  return (
    <section className="border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Mock Tests"
          title="Prepare smarter."
          description="Free practice resources today. Premium full-length tests and analytics coming soon."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mockTestCards.map((test) => (
            <MockTestCard key={test.id} test={test} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/20 bg-primary-light/30 p-6">
            <h3 className="font-bold text-primary">Free</h3>
            <ul className="mt-4 space-y-2">
              {mockTestFreeFeatures.map((item) => (
                <li key={item} className="text-sm text-muted before:mr-2 before:text-primary before:content-['✓']">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent-coral/40 bg-accent-red-light/30 p-6">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-accent-red">Premium</h3>
              <span className="rounded-md bg-accent-red-light px-2 py-0.5 text-[10px] font-bold uppercase text-accent-red">
                Coming Soon
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {mockTestPremiumFeatures.map((item) => (
                <li key={item} className="text-sm text-muted before:mr-2 before:text-accent-red before:content-['✓']">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
