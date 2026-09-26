import type { MetadataRoute } from "next";

const baseUrl = "https://www.wisdomprimary.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/gallery", priority: 0.8 },
    { path: "/members", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
