"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, Weight, Ruler, RefreshCcw, FlaskConical, Clock, Thermometer, Navigation, ShieldCheck, Tag } from "lucide-react";
import type { ERickshawBattery } from "@/data/products";

interface SpecTableProps {
  battery: ERickshawBattery;
}

export default function SpecTable({ battery }: SpecTableProps) {
  const specs = [
    { icon: Zap, label: "Voltage", value: `${battery.voltage}V` },
    { icon: Zap, label: "Capacity", value: `${battery.capacity}AH` },
    { icon: Zap, label: "Energy", value: battery.energy },
    { icon: FlaskConical, label: "Chemistry", value: battery.chemistry },
    { icon: Weight, label: "Weight", value: battery.weight },
    { icon: Ruler, label: "Dimensions", value: battery.dimensions },
    { icon: RefreshCcw, label: "Cycle Life", value: `${battery.cycleLife.toLocaleString()}+ cycles` },
    { icon: Clock, label: "Charging Time", value: battery.chargingTime },
    { icon: Thermometer, label: "Operating Temp", value: battery.operatingTemp },
    { icon: Navigation, label: "Range per Charge", value: battery.range },
    { icon: ShieldCheck, label: "Warranty", value: battery.warranty },
    { icon: Tag, label: "Price", value: `₹${battery.price.toLocaleString("en-IN")}` },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={battery.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-sans">{battery.label}</h3>
            <p className="text-sm text-gray-500 font-sans mt-1">
              {battery.chemistry} — {battery.energy}
            </p>
          </div>
          {battery.badge && (
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-500 text-white">
              {battery.badge}
            </span>
          )}
        </div>

        {/* Spec grid */}
        <div className="rounded-2xl border border-gray-200/60 overflow-hidden">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  i % 2 === 0 ? "bg-white" : "bg-brand-50/40"
                } ${i < specs.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-brand-400" />
                  <span className="text-sm text-gray-600 font-sans">{spec.label}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 font-sans">{spec.value}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
