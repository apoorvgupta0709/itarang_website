"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ERickshawBattery } from "@/data/products";

interface SpecTableProps {
  battery: ERickshawBattery;
}

interface SpecSection {
  title: string;
  rows: { label: string; value: string }[];
}

function buildSections(b: ERickshawBattery): SpecSection[] {
  return [
    {
      title: "Electrical Characteristics",
      rows: [
        { label: "Nominal Voltage", value: b.electrical.nominalVoltage },
        { label: "Nominal Capacity", value: b.electrical.nominalCapacity },
        { label: "Energy", value: b.electrical.energy },
        { label: "Cell Type", value: b.electrical.cellType },
        { label: "Cell Configuration", value: b.electrical.cellConfiguration },
        { label: "Charge Cut-off Voltage", value: b.electrical.chargeVoltage },
        { label: "Discharge Cut-off Voltage", value: b.electrical.dischargeVoltage },
        { label: "Max Charge Current", value: b.electrical.maxChargeCurrent },
        { label: "Max Discharge Current", value: b.electrical.maxDischargeCurrent },
        { label: "Standard Charge Current", value: b.electrical.standardChargeCurrent },
        { label: "Internal Impedance", value: b.electrical.impedance },
        { label: "Self-Discharge", value: b.electrical.selfDischarge },
        { label: "Cycle Life", value: b.electrical.cycleLife },
      ],
    },
    {
      title: "Mechanical Characteristics",
      rows: [
        { label: "Length", value: b.mechanical.length },
        { label: "Width", value: b.mechanical.width },
        { label: "Height", value: b.mechanical.height },
        { label: "Weight", value: b.mechanical.weight },
        { label: "Casing Material", value: b.mechanical.casingMaterial },
        { label: "Terminal Type", value: b.mechanical.terminalType },
        { label: "IP Rating", value: b.mechanical.ipRating },
      ],
    },
    {
      title: "Operating Conditions",
      rows: [
        { label: "Charging Temperature", value: b.operating.chargingTemp },
        { label: "Discharging Temperature", value: b.operating.dischargingTemp },
        { label: "Storage Temperature", value: b.operating.storageTemp },
        { label: "Humidity", value: b.operating.humidity },
        { label: "Charging Time", value: b.operating.chargingTime },
        { label: "Charge Method", value: b.operating.chargeMethod },
      ],
    },
    {
      title: "Performance",
      rows: [
        { label: "Range per Charge", value: b.range },
        { label: "Warranty", value: b.warranty },
        { label: "Price", value: `₹${b.price.toLocaleString("en-IN")}` },
      ],
    },
  ];
}

export default function SpecTable({ battery }: SpecTableProps) {
  const sections = buildSections(battery);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={battery.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-sans">{battery.label}</h3>
            <p className="text-sm text-gray-500 font-sans mt-1">
              {battery.electrical.cellType} — {battery.electrical.energy}
            </p>
          </div>
          {battery.badge && (
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-500 text-white">
              {battery.badge}
            </span>
          )}
        </div>

        {/* Spec sections */}
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-gray-200/60 overflow-hidden">
            {/* Section header */}
            <div className="px-5 py-3 bg-brand-600 border-b border-brand-700">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                {section.title}
              </h4>
            </div>

            {/* Rows */}
            {section.rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-5 py-3 ${
                  i % 2 === 0 ? "bg-white" : "bg-brand-50/40"
                } ${i < section.rows.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <span className="text-sm text-gray-600 font-sans">{row.label}</span>
                <span className="text-sm font-semibold text-gray-900 font-sans text-right max-w-[55%]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
