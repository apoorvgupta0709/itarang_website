import type { Metadata } from "next";
import Link from "next/link";
import { Battery, ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import ProductHero from "@/components/products/ProductHero";

export const metadata: Metadata = {
  title: "Products | iTarang",
  description:
    "Browse iTarang's range of LiFePO4 lithium batteries for e-rickshaws, e-autos, and commercial EVs across India.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductHero
        title="Our Products"
        subtitle="LiFePO4 lithium batteries engineered for Indian commercial EVs. Every battery ships with IoT telemetry and smart BMS built in."
        breadcrumb={[{ label: "Products", href: "/products" }]}
      />

      {/* Category grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, i) => (
              <FadeInOnScroll key={category.slug} delay={i * 0.1}>
                <Link
                  href={`/products/${category.slug}`}
                  className="group block rounded-2xl border border-gray-200/60 bg-white overflow-hidden hover:shadow-xl hover:shadow-brand-500/5 hover:border-brand-200/50 transition-all"
                >
                  {/* Card header */}
                  <div className="relative h-48 bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,27,154,0.3),transparent_70%)]" />
                    <Battery className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 font-sans group-hover:text-brand-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed font-sans">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-500 group-hover:gap-2.5 transition-all font-sans">
                      View Range
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
