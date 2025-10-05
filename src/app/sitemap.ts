import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";
export const revalidate = false;

const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/ja", priority: 0.8 },
];

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
