import type { MetadataRoute } from "next";
import { absoluteUrl, profile } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/projects"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/experience"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/stories"), changeFrequency: "weekly", priority: 0.8 },
    {
      url: absoluteUrl("/publications"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const storyRoutes: MetadataRoute.Sitemap = profile.stories.map((story) => ({
    url: absoluteUrl(`/stories/${story.slug}`),
    lastModified: story.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...storyRoutes];
}
