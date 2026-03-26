export interface TeamMember {
  name: string;
  role: string;
  description: string;
  responsibilities: string[];
  image?: string;
}

export interface KeyHire {
  role: string;
  description: string;
}

export interface Advisor {
  title: string;
  expertise: string;
}

// NOTE: Replace placeholder names with actual founder names and photos
export const founders: TeamMember[] = [
  {
    name: "Founder",
    role: "CEO / Co-founder",
    description: "Vision & strategy leader driving iTarang's growth in EV battery financing.",
    responsibilities: [
      "Vision & Fundraising Strategy",
      "NBFC & Dealer Partnerships",
      "Regulatory Compliance Lead",
    ],
  },
  {
    name: "Founder",
    role: "CTO / Co-founder",
    description: "Technology architect building the intelligence platform for battery lifecycle management.",
    responsibilities: [
      "IoT Platform Architecture",
      "Risk Engine & Data Pipeline",
      "Security & Privacy (DPDP)",
    ],
  },
];

export const keyHires: KeyHire[] = [
  { role: "Head of Partnerships", description: "Driving NBFC integrations and expanding dealer/OEM alliances." },
  { role: "Credit & Risk Head", description: "Designing underwriting models, scorecards, and managing portfolio NPA." },
  { role: "City Ops Lead (x2)", description: "Executing ground operations: dealer onboarding, device installs, and logistics." },
];

export const advisors: Advisor[] = [
  { title: "NBFC Veteran", expertise: "Lending Strategy" },
  { title: "EV Industry Expert", expertise: "Market Dynamics" },
  { title: "Fintech Investor", expertise: "Growth & Scale" },
];
