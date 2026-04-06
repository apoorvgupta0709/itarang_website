import {
  RefreshCcw,
  ShieldCheck,
  Thermometer,
  Flame,
  Leaf,
  Activity,
  BatteryCharging,
  Mountain,
} from "lucide-react";
import { keyAdvantages } from "@/data/products";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import SectionHeading from "@/components/shared/SectionHeading";

const icons = [RefreshCcw, ShieldCheck, Thermometer, Flame, Leaf, Activity, BatteryCharging, Mountain];

export default function KeyAdvantages() {
  return (
    <section className="py-16 md:py-24 bg-surface-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Advantages"
          title="Why LiFePO4?"
          subtitle="The safest and most durable lithium chemistry — purpose-built for commercial EV applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyAdvantages.map((advantage, i) => {
            const Icon = icons[i];
            return (
              <FadeInOnScroll key={advantage.title} delay={i * 0.06}>
                <div className="flex items-start gap-3.5 rounded-xl bg-white border border-gray-200/60 p-5 hover:shadow-md hover:border-brand-200/40 transition-all">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 shrink-0">
                    <Icon className="h-4.5 w-4.5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 font-sans">{advantage.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed font-sans">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
