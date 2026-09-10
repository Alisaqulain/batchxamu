import { coreFeatures } from "@/data/features";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "./FeatureCard";
import { DownloadButton } from "@/components/ui/DownloadButton";

interface FeatureGridProps {
  showHeader?: boolean;
}

export function FeatureGrid({ showHeader = true }: FeatureGridProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            label="Features"
            title="Core features students rely on."
            description="Built for daily academic life in the Department of Computer Science."
          />
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreFeatures.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              status={feature.status}
              accent={i % 4 === 0 ? "coral" : "green"}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <DownloadButton size="lg" />
        </div>
      </div>
    </section>
  );
}
