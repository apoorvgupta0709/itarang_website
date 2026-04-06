"use client";

import { cn } from "@/lib/utils";
import type { ERickshawBattery } from "@/data/products";

interface VariantSelectorProps {
  variants: ERickshawBattery[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function VariantSelector({ variants, selectedId, onSelect }: VariantSelectorProps) {
  // Group variants by voltage
  const voltageGroups = variants.reduce<Record<number, ERickshawBattery[]>>((acc, v) => {
    if (!acc[v.voltage]) acc[v.voltage] = [];
    acc[v.voltage].push(v);
    return acc;
  }, {});

  const voltages = Object.keys(voltageGroups).map(Number).sort((a, b) => a - b);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider font-sans">
        Select Variant
      </h3>
      <div className="space-y-3">
        {voltages.map((voltage) => (
          <div key={voltage} className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider w-10 shrink-0 font-mono">
              {voltage}V
            </span>
            <div className="flex flex-wrap gap-2">
              {voltageGroups[voltage].map((variant) => {
                const isSelected = variant.id === selectedId;
                return (
                  <button
                    key={variant.id}
                    onClick={() => onSelect(variant.id)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-sans cursor-pointer",
                      isSelected
                        ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30"
                        : "bg-gray-500 text-white hover:bg-gray-600"
                    )}
                  >
                    {variant.label}
                    {variant.badge && isSelected && (
                      <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider opacity-80">
                        — {variant.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
