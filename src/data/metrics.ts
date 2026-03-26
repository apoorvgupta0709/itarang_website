// SINGLE SOURCE OF TRUTH — All numbers aligned to pre-seed deck (March 2026)
// NEVER hardcode metrics elsewhere. Always import from this file.

export const deckMetrics = {
  // Slide 2 + 4: Market Opportunity
  newEV3WheelersByFY27: "1.2 Million",
  currentInstalledBase: "30 Lakh+",
  informalFinancingPercent: 90,
  informalInterestRates: "30–60%",
  annualReplacementTAM: "₹11,250 Cr",
  batteryReplacementCycle: "2–3 Years",
  batteriesForRecyclingPerYear: "2.5–3 Lakh",
  lithiumPricingVolatility: "+10% YoY",

  // Slide 12: Traction (CRITICAL - must match deck exactly)
  pilotBatteries: 150,
  pilotBatteriesDisplay: "150+",
  recoveryRate: 98,
  recoveryRateDisplay: "98%",
  nbfcLOIs: 2,
  dealersOnboarded: 20,
  dealersOnboardedDisplay: "20+",

  // Slide 8: Unit Economics
  ltvMin: 11600,
  ltvMax: 15600,
  cacPlusCogs: 2450,
  grossMarginPercent: "65–70%",
  typicalBatteryLoanAmount: 49000,
  typicalInterestRate: 17.5,
  typicalTenureMonths: 18,
  riskAdjustedReturnImprovement: "30–40%",

  // Slide 7: Revenue Streams
  underwritingFeeMin: 1500,
  underwritingFeeMax: 2500,
  telemetrySaaSMin: 200,
  telemetrySaaSMax: 300,
  collectionFee: "1–2%",
  lifecycleRecoveryMin: 3000,
  lifecycleRecoveryMax: 8000,

  // Slide 15: The Ask
  raiseAmount: "₹8 Crore",
  raiseType: "Pre-Seed (Equity)",

  // Slide 16: 12-month milestones
  targetBUM: "3,000+",
  targetNBFCIntegrations: 2,
  targetCitiesLive: 3,
  targetAUMFacilitated: "₹15 Cr+",
  targetNPA: "<2%",

  // GTM Phases (Slide 11)
  phase1: { months: "0–12", cities: 3, dealers: 20, nbfcs: 2, bum: "~3,000" },
  phase2: { months: "12–24", cities: 15, dealers: 100, nbfcs: 5, bum: "~25,000" },
  phase3: { months: "24–36", cities: 90, bum: ">1M Data Points" },

  // Use of Funds (Slide 15)
  allocation: {
    techMVP: { percent: 40, amount: "₹3.2 Cr", label: "Tech / MVP" },
    team: { percent: 25, amount: "₹2.0 Cr", label: "Team" },
    workingCapital: { percent: 20, amount: "₹1.6 Cr", label: "Working Capital" },
    gtm: { percent: 10, amount: "₹0.8 Cr", label: "GTM & Expansion" },
    regulatory: { percent: 5, amount: "₹0.4 Cr", label: "Regulatory / Ops" },
  },
} as const;

export const heroCounters = [
  { value: 150, suffix: "+", label: "Pilot Batteries Live Monitored", prefix: "" },
  { value: 98, suffix: "%", label: "Recovery Rate", prefix: "" },
  { value: 2, suffix: "", label: "NBFC LOIs in Pipeline", prefix: "" },
  { value: 20, suffix: "+", label: "Dealers Onboarded", prefix: "" },
  { value: 11250, suffix: " Cr", label: "Annual Replacement TAM", prefix: "₹" },
] as const;
