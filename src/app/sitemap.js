export default function sitemap() {
  const baseUrl = "https://www.kidiwebtech.com";

  const blogSlugs = [
    "content-marketing-strategies",
    "branding-design-trends",
    "email-marketing-conversion",
    "marketing-performance-tracking",
    "seo-traffic-growth",
    "ppc-advertising-strategy",
    "social-media-brand-growth",
    "web-development-trends-2025",
    "business-mobile-app-benefits",
  ];

  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    /* CORE PAGES */
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* SERVICES */
    {
      url: `${baseUrl}/services/web-design`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-hosting`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* BLOGS */
    ...blogUrls,
  ];
}
