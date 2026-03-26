export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Platform Overview", href: "/solutions" },
      { label: "For NBFCs", href: "/for-nbfcs" },
      { label: "Products", href: "/products" },
      { label: "Business Model", href: "/business-model" },
    ],
  },
  { label: "For Investors", href: "/for-investors" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Regulatory", href: "/regulatory" },
      { label: "Competitive Edge", href: "/competitive" },
      { label: "Fleet Reports", href: "/fleet-reports" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
