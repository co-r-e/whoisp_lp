import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/ja", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
