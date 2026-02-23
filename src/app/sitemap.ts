import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bsdeveloper.com.br";

  return [
    {
      url: baseUrl,
      lastModified: '2025-01-29',
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: '2025-01-29',
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: '2025-01-29',
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
