import type { MetadataRoute } from "next";

const BASE_URL = "https://www.itarang.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/for-investors", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/for-nbfcs", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/business-model", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/competitive", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/regulatory", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/roadmap", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog/informal-financing", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/blog/battery-passport", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/fleet-reports", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
