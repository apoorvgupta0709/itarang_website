import { createMetadata } from "@/lib/metadata";
import { batteryProducts } from "@/data/products";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import CTASection from "@/components/shared/CTASection";
import Badge from "@/components/ui/Badge";
import ProductCard from "@/components/products/ProductCard";
import EMICalculator from "@/components/products/EMICalculator";
import ComparisonToggle from "@/components/products/ComparisonToggle";
import { ShieldCheck, Thermometer, Cpu, Radio } from "lucide-react";

export const metadata = createMetadata({
  title: "Products",
  description:
    "High-performance lithium batteries with built-in IoT telemetry, BMS protection, and financing options for e-rickshaws and 3-wheelers.",
  path: "/products",
});

const trustFeatures = [
  { icon: ShieldCheck, label: "Overcharge Protection" },
  { icon: Thermometer, label: "Temperature Monitoring" },
  { icon: Cpu, label: "Cell Balancing" },
  { icon: Radio, label: "IoT Telemetry" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-700/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-6">Our Battery Range</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Smart Batteries for<br />India&apos;s EV Fleet
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-200">
            High-performance lithium batteries with built-in IoT telemetry, BMS protection, and financing options
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-gray-100 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Icon className="h-5 w-5 text-accent-green" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Battery SKUs"
            title="Choose Your Battery"
            subtitle="Every battery comes with IoT telemetry, smart BMS, and financing eligibility"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {batteryProducts.map((product, i) => (
              <FadeInOnScroll key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lithium vs Lead-Acid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Comparison"
            title="Lithium vs Lead-Acid"
            subtitle="Why smart lithium is the future of EV fleet batteries"
          />
          <FadeInOnScroll>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <ComparisonToggle />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Affordability"
            title="EMI Calculator"
            subtitle="See how affordable a smart lithium battery can be with iTarang financing"
          />
          <FadeInOnScroll>
            <EMICalculator />
          </FadeInOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need a Custom Solution?"
        subtitle="Talk to our team about bulk orders, custom configurations, and fleet-level financing"
        primaryCTA={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCTA={{ label: "View for NBFCs", href: "/for-nbfcs" }}
      />
    </>
  );
}
