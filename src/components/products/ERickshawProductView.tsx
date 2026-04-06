"use client";

import { useState } from "react";
import { eRickshawBatteries } from "@/data/products";
import VariantSelector from "./VariantSelector";
import SpecTable from "./SpecTable";
import { Battery } from "lucide-react";

export default function ERickshawProductView() {
  const [selectedId, setSelectedId] = useState(eRickshawBatteries[0].id);
  const selected = eRickshawBatteries.find((b) => b.id === selectedId) ?? eRickshawBatteries[0];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Product visual + variant selector side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
          {/* Left: Battery visual */}
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-50 via-white to-surface-cream border border-gray-200/60 overflow-hidden aspect-[4/3] lg:aspect-square max-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-500/10 mb-4">
                <Battery className="h-12 w-12 text-brand-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 font-sans">{selected.label}</p>
              <p className="text-lg text-brand-500 font-semibold mt-1 font-sans">{selected.electrical.energy}</p>
              <p className="text-sm text-gray-400 mt-2 font-sans">{selected.electrical.cellType}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-accent-sky" />
          </div>

          {/* Right: Variant selector + price + CTA */}
          <div className="flex flex-col justify-center space-y-8">
            <VariantSelector
              variants={eRickshawBatteries}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />

            {/* Quick summary */}
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Price</p>
                <p className="text-3xl font-bold text-gray-900">₹{selected.price.toLocaleString("en-IN")}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Range</p>
                <p className="text-lg font-semibold text-gray-900 font-sans">{selected.range}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Weight</p>
                <p className="text-lg font-semibold text-gray-900 font-sans">{selected.mechanical.weight}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <a
                href="/contact"
                className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-brand-500 text-white font-semibold shadow-lg shadow-brand-500/25 hover:bg-brand-600 transition-colors font-sans cursor-pointer"
              >
                Get a Quote
              </a>
              <a
                href={`https://wa.me/919876543210?text=Hi, I'm interested in the ${selected.label} battery`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-brand-500 text-brand-500 font-semibold hover:bg-brand-50 transition-colors font-sans cursor-pointer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Full-width specifications table */}
        <div className="max-w-4xl mx-auto">
          <SpecTable battery={selected} />
        </div>
      </div>
    </section>
  );
}
