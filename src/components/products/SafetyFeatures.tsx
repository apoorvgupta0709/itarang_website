import { ShieldCheck, Zap, Flame, Thermometer } from "lucide-react";
import { safetyFeatures } from "@/data/products";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionHeading from "@/components/shared/SectionHeading";

const icons = [ShieldCheck, Zap, Flame, Thermometer];

export default function SafetyFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Safety"
          title="Built-in Protection"
          subtitle="Every battery includes 4 layers of safety engineering — from cell chemistry to smart BMS."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((feature, i) => {
            const Icon = icons[i];
            return (
              <FadeInOnScroll key={feature.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-gray-200/60 bg-gradient-to-br from-brand-50/50 to-blue-50/30 p-6 hover:shadow-lg hover:shadow-brand-500/5 hover:border-brand-200/50 transition-all h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 mb-4 group-hover:bg-brand-500/15 transition-colors">
                    <Icon className="h-6 w-6 text-brand-500" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
