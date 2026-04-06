export interface BatterySKU {
  id: string;
  name: string;
  voltage: number;
  capacity: number;
  energy: string;
  weight: string;
  dimensions: string;
  cycleLife: number;
  bmsFeatures: string[];
  compatibleVehicles: string[];
  price: number;
  warranty: string;
  badge?: string;
}

export const batteryProducts: BatterySKU[] = [
  {
    id: "it-48v-100ah",
    name: "iTarang 48V 100Ah",
    voltage: 48,
    capacity: 100,
    energy: "4.8 kWh",
    weight: "28 kg",
    dimensions: "340 × 225 × 280 mm",
    cycleLife: 2000,
    bmsFeatures: ["Overcharge Protection", "Short Circuit Protection", "Temperature Monitoring", "Cell Balancing", "IoT Telemetry Ready"],
    compatibleVehicles: ["E-Rickshaw (Passenger)", "E-Rickshaw (Cargo)"],
    price: 42000,
    warranty: "3 Years / 2000 Cycles",
  },
  {
    id: "it-48v-130ah",
    name: "iTarang 48V 130Ah",
    voltage: 48,
    capacity: 130,
    energy: "6.2 kWh",
    weight: "35 kg",
    dimensions: "380 × 250 × 300 mm",
    cycleLife: 2000,
    bmsFeatures: ["Overcharge Protection", "Short Circuit Protection", "Temperature Monitoring", "Cell Balancing", "IoT Telemetry Ready"],
    compatibleVehicles: ["E-Rickshaw (Passenger)", "E-Rickshaw (Cargo)", "E-Auto"],
    price: 49000,
    warranty: "3 Years / 2000 Cycles",
    badge: "Best Seller",
  },
  {
    id: "it-60v-100ah",
    name: "iTarang 60V 100Ah",
    voltage: 60,
    capacity: 100,
    energy: "6.0 kWh",
    weight: "33 kg",
    dimensions: "390 × 250 × 310 mm",
    cycleLife: 2000,
    bmsFeatures: ["Overcharge Protection", "Short Circuit Protection", "Temperature Monitoring", "Cell Balancing", "IoT Telemetry Ready", "GPS Tracking"],
    compatibleVehicles: ["E-Auto", "E-Loader"],
    price: 55000,
    warranty: "3 Years / 2000 Cycles",
  },
  {
    id: "it-60v-130ah",
    name: "iTarang 60V 130Ah",
    voltage: 60,
    capacity: 130,
    energy: "7.8 kWh",
    weight: "40 kg",
    dimensions: "420 × 270 × 320 mm",
    cycleLife: 2000,
    bmsFeatures: ["Overcharge Protection", "Short Circuit Protection", "Temperature Monitoring", "Cell Balancing", "IoT Telemetry Ready", "GPS Tracking"],
    compatibleVehicles: ["E-Auto", "E-Loader", "E-Cart"],
    price: 62000,
    warranty: "3 Years / 2000 Cycles",
    badge: "High Range",
  },
  {
    id: "it-72v-100ah",
    name: "iTarang 72V 100Ah",
    voltage: 72,
    capacity: 100,
    energy: "7.2 kWh",
    weight: "38 kg",
    dimensions: "430 × 270 × 330 mm",
    cycleLife: 2000,
    bmsFeatures: ["Overcharge Protection", "Short Circuit Protection", "Temperature Monitoring", "Cell Balancing", "IoT Telemetry Ready", "GPS Tracking", "Remote Immobilisation"],
    compatibleVehicles: ["E-Auto", "E-Loader", "E-Cart", "L5 Category"],
    price: 72000,
    warranty: "3 Years / 2000 Cycles",
    badge: "Premium",
  },
];

/* ──────────────────────────────────────────────
   Product Categories
   ────────────────────────────────────────────── */

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "e-rickshaw-lithium-battery",
    name: "E-Rickshaw Lithium Battery",
    description: "LiFePO4 batteries engineered for Indian e-rickshaws — longer lifespan, faster charging, and lower maintenance compared to lead-acid.",
    icon: "battery",
  },
];

/* ──────────────────────────────────────────────
   E-Rickshaw Battery Variants (12 SKUs)
   ────────────────────────────────────────────── */

export interface ERickshawBattery {
  id: string;
  label: string;
  badge?: string;
  price: number;

  /* Electrical Characteristics */
  electrical: {
    nominalVoltage: string;
    nominalCapacity: string;
    energy: string;
    cellType: string;
    cellConfiguration: string;
    chargeVoltage: string;
    dischargeVoltage: string;
    maxChargeCurrent: string;
    maxDischargeCurrent: string;
    standardChargeCurrent: string;
    impedance: string;
    selfDischarge: string;
    cycleLife: string;
  };

  /* Mechanical Characteristics */
  mechanical: {
    length: string;
    width: string;
    height: string;
    weight: string;
    casingMaterial: string;
    terminalType: string;
    ipRating: string;
  };

  /* Operating Conditions */
  operating: {
    chargingTemp: string;
    dischargingTemp: string;
    storageTemp: string;
    humidity: string;
    chargingTime: string;
    chargeMethod: string;
  };

  /* Computed / display helpers */
  range: string;
  warranty: string;
}

/* ── helper to derive cells-in-series count from nominal voltage ── */
const cellsInSeries = (v: number) => Math.round(v / 3.2);

/* ── factory for generating consistent specs per variant ── */
function makeVariant(
  id: string,
  label: string,
  voltage: number,
  capacity: number,
  energyKwh: string,
  dims: { l: string; w: string; h: string },
  weight: string,
  maxChargeCurrent: string,
  maxDischargeCurrent: string,
  stdChargeCurrent: string,
  impedance: string,
  chargingTime: string,
  range: string,
  badge?: string,
): ERickshawBattery {
  const cells = cellsInSeries(voltage);
  return {
    id,
    label,
    badge,
    price: 0, // prices set below
    electrical: {
      nominalVoltage: `${voltage}V`,
      nominalCapacity: `${capacity}AH`,
      energy: energyKwh,
      cellType: "LiFePO4 (Lithium Iron Phosphate)",
      cellConfiguration: `${cells}S (${cells} cells in series)`,
      chargeVoltage: `${(cells * 3.65).toFixed(1)}V`,
      dischargeVoltage: `${(cells * 2.5).toFixed(1)}V`,
      maxChargeCurrent,
      maxDischargeCurrent,
      standardChargeCurrent: stdChargeCurrent,
      impedance,
      selfDischarge: "≤ 3% / month",
      cycleLife: "2,000+ cycles (80% DOD)",
    },
    mechanical: {
      length: dims.l,
      width: dims.w,
      height: dims.h,
      weight,
      casingMaterial: "ABS + PC (flame retardant V-0)",
      terminalType: "M8 Copper Bolts",
      ipRating: "IP56",
    },
    operating: {
      chargingTemp: "0°C to 45°C",
      dischargingTemp: "-20°C to 60°C",
      storageTemp: "-20°C to 45°C (recommended 25°C)",
      humidity: "15% – 85% RH (non-condensing)",
      chargingTime,
      chargeMethod: "CC/CV (Constant Current / Constant Voltage)",
    },
    range,
    warranty: "3 Years / 2,000 Cycles",
  };
}

export const eRickshawBatteries: ERickshawBattery[] = [
  // ── 51V Series (16S) ──
  { ...makeVariant("er-51v-105ah", "51V 105AH", 51.2, 105, "5.376 kWh",
    { l: "520 mm", w: "230 mm", h: "260 mm" }, "32 kg",
    "50A", "100A", "20A", "≤ 25 mΩ", "3–4 hours", "70–90 km", "Popular"),
    price: 45000 },

  { ...makeVariant("er-51v-132ah", "51V 132AH", 51.2, 132, "6.758 kWh",
    { l: "520 mm", w: "260 mm", h: "280 mm" }, "38 kg",
    "60A", "120A", "25A", "≤ 22 mΩ", "4–5 hours", "90–110 km"),
    price: 52000 },

  { ...makeVariant("er-51v-153ah", "51V 153AH", 51.2, 153, "7.834 kWh",
    { l: "530 mm", w: "270 mm", h: "300 mm" }, "42 kg",
    "60A", "150A", "30A", "≤ 20 mΩ", "4–5 hours", "100–130 km"),
    price: 58000 },

  { ...makeVariant("er-51v-232ah", "51V 232AH", 51.2, 232, "11.878 kWh",
    { l: "580 mm", w: "300 mm", h: "320 mm" }, "58 kg",
    "80A", "200A", "40A", "≤ 15 mΩ", "5–7 hours", "140–180 km", "Max Range"),
    price: 78000 },

  // ── 61V Series (19S) ──
  { ...makeVariant("er-61v-105ah", "61V 105AH", 60.8, 105, "6.405 kWh",
    { l: "540 mm", w: "240 mm", h: "270 mm" }, "35 kg",
    "50A", "100A", "20A", "≤ 28 mΩ", "3–4 hours", "80–100 km"),
    price: 55000 },

  { ...makeVariant("er-61v-132ah", "61V 132AH", 60.8, 132, "8.052 kWh",
    { l: "540 mm", w: "270 mm", h: "290 mm" }, "42 kg",
    "60A", "120A", "25A", "≤ 24 mΩ", "4–5 hours", "100–120 km", "Best Seller"),
    price: 62000 },

  { ...makeVariant("er-61v-153ah", "61V 153AH", 60.8, 153, "9.333 kWh",
    { l: "560 mm", w: "280 mm", h: "310 mm" }, "48 kg",
    "60A", "150A", "30A", "≤ 22 mΩ", "4–6 hours", "120–150 km"),
    price: 70000 },

  { ...makeVariant("er-61v-232ah", "61V 232AH", 60.8, 232, "14.152 kWh",
    { l: "600 mm", w: "310 mm", h: "340 mm" }, "65 kg",
    "80A", "200A", "40A", "≤ 16 mΩ", "6–8 hours", "160–200 km", "Premium"),
    price: 95000 },

  // ── 64V Series (20S) ──
  { ...makeVariant("er-64v-105ah", "64V 105AH", 64.0, 105, "6.72 kWh",
    { l: "550 mm", w: "245 mm", h: "275 mm" }, "37 kg",
    "50A", "100A", "20A", "≤ 30 mΩ", "3–4 hours", "85–105 km"),
    price: 58000 },

  { ...makeVariant("er-64v-132ah", "64V 132AH", 64.0, 132, "8.448 kWh",
    { l: "550 mm", w: "275 mm", h: "295 mm" }, "44 kg",
    "60A", "120A", "25A", "≤ 25 mΩ", "4–5 hours", "105–130 km"),
    price: 66000 },

  // ── 72V Series (22S) ──
  { ...makeVariant("er-72v-232ah", "72V 232AH", 70.4, 232, "16.704 kWh",
    { l: "620 mm", w: "320 mm", h: "360 mm" }, "72 kg",
    "100A", "250A", "50A", "≤ 12 mΩ", "7–9 hours", "180–220 km", "Max Power"),
    price: 115000 },
];

export const safetyFeatures = [
  {
    title: "Over-charge / Over-discharge Protection",
    description: "Smart BMS prevents over-charging and deep discharge, extending battery life and preventing thermal events.",
  },
  {
    title: "Short Circuit Protection",
    description: "Designed to withstand short circuits without fire or thermal runaway. Built-in fuse and BMS cutoff.",
  },
  {
    title: "Acupuncture Resistance",
    description: "LiFePO4 cells handle puncture tests without thermal runaway — the safest lithium chemistry available.",
  },
  {
    title: "Thermal Shock Protection",
    description: "Maintains performance during extreme temperature fluctuations from -20°C to 60°C operating range.",
  },
];

export const keyAdvantages = [
  { title: "Attractive Cycle Life", description: "2,000+ cycles — 5x longer than lead-acid batteries" },
  { title: "Extended Safety", description: "LiFePO4 chemistry with zero thermal runaway risk" },
  { title: "Wide Temperature Range", description: "Operates reliably from -20°C to 60°C" },
  { title: "High Temperature Performance", description: "No capacity degradation up to 45°C ambient" },
  { title: "Zero Metal Contaminants", description: "No lead, no cadmium — fully RoHS compliant" },
  { title: "Steady Voltage Output", description: "Flat discharge curve delivers consistent power throughout the ride" },
  { title: "Minimal Self-Discharge", description: "Less than 3% per month — stays charged during idle periods" },
  { title: "Vibration & Shock Resistant", description: "Engineered for Indian roads with reinforced cell housing" },
];

export const leadAcidComparison = {
  headers: ["Feature", "iTarang Lithium", "Lead-Acid"],
  rows: [
    ["Cycle Life", "2,000+ cycles", "300–400 cycles"],
    ["Weight", "28–40 kg", "60–80 kg"],
    ["Charging Time", "3–4 hours", "8–10 hours"],
    ["Range per Charge", "80–120 km", "40–60 km"],
    ["Replacement Frequency", "Every 3–5 years", "Every 8–12 months"],
    ["Total Cost (3 Years)", "₹49,000 (one-time)", "₹45,000–60,000 (3–4 replacements)"],
    ["BMS & IoT", "Built-in smart BMS + telemetry", "None"],
    ["Warranty", "3 years", "6–12 months"],
    ["Environmental Impact", "Recyclable, EPR compliant", "Toxic lead, disposal issues"],
  ],
};
