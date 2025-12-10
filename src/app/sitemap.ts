import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  return [
    {
      url: siteUrl,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
