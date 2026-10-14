// export default function sitemap() {
//   const baseUrl = "https://www.kidiwebtech.com";

//   const blogSlugs = [
//     "content-marketing-strategies",
//     "branding-design-trends",
//     "email-marketing-conversion",
//     "marketing-performance-tracking",
//     "seo-traffic-growth",
//     "ppc-advertising-strategy",
//     "social-media-brand-growth",
//     "web-development-trends-2025",
//     "business-mobile-app-benefits",
//   ];

//   const blogUrls = blogSlugs.map((slug) => ({
//     url: `${baseUrl}/blogs/${slug}`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//     priority: 0.8,
//   }));

//   return [
//     /* CORE PAGES */
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "daily",
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/blogs`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },

//     /* SERVICES */
//     {
//       url: `${baseUrl}/services/web-design`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/services/seo`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/services/web-development`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/services/web-hosting`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },

//     /* BLOGS */
//     ...blogUrls,
//   ];
// }

// export default function sitemap() {
//   const baseUrl = "https://www.kidiwebtech.com";

//   // Existing blog URLs
//   const blogSlugs = [
//     "content-marketing-strategies",
//     "branding-design-trends",
//     "email-marketing-conversion",
//     "marketing-performance-tracking",
//     "seo-traffic-growth",
//     "ppc-advertising-strategy",
//     "social-media-brand-growth",
//     "web-development-trends-2025",
//     "business-mobile-app-benefits",
//   ];

//   const blogUrls = blogSlugs.map((slug) => ({
//     url: `${baseUrl}/blogs/${slug}`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//     priority: 0.8,
//   }));

//   // New blog posts
//   const newBlogUrls = [
//     {
//       url: `${baseUrl}/blog/ca-domain-registration-eligibility-rules-you-need-to-know`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/blog/virtual-dedicated-server-explained-resources-control-and-cost`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//   ];

//   return [
//     // CORE PAGES
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "daily",
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/blogs`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },

//     // SERVICES
//     {
//       url: `${baseUrl}/services/web-design`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/services/seo`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/services/web-development`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/services/web-hosting`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },

//     // EXISTING BLOGS
//     ...blogUrls,

//     // NEW BLOG POSTS
//     ...newBlogUrls,
//   ];
// }

export default function sitemap() {
  const baseUrl = "https://www.kidiwebtech.com";

  // =========================================================
  // EXISTING BLOG URLs
  // =========================================================

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

  // =========================================================
  // NEW BLOG POSTS
  // =========================================================

  const newBlogSlugs = [
    "ca-domain-registration-eligibility-rules-you-need-to-know",
    "virtual-dedicated-server-explained-resources-control-and-cost",

    // New 2026 blogs
    "how-digital-marketing-helps-small-businesses-grow-in-2026",
    "how-ai-is-changing-website-development-for-modern-businesses",
    "how-a-professional-website-helps-small-businesses-grow-in-2026",
    "how-local-seo-helps-small-businesses-get-more-customers-in-2026",
    "why-every-business-needs-a-professional-website-in-2026",
    "how-to-improve-website-speed-10-proven-ways",
  ];

  const newBlogUrls = newBlogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // =========================================================
  // RETURN SITEMAP
  // =========================================================

  return [
    // =======================================================
    // CORE PAGES
    // =======================================================

    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blog`,
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

    // =======================================================
    // EXISTING SERVICES
    // =======================================================

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
      priority: 0.8,
    },

    // =======================================================
    // SEO SERVICES
    // =======================================================

    {
      url: `${baseUrl}/seo-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/technical-seo-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/ecommerce-seo-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/enterprise-seo-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/seo-services-hyderabad`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/local-seo-services-hyderabad`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/gmb-optimization-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // =======================================================
    // WEBSITE DEVELOPMENT / WEB DESIGN
    // =======================================================

    {
      url: `${baseUrl}/website-development-services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/web-design-company-hitech-city`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/web-design-company-madhapur`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/not-found`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },

    // =======================================================
    // EXISTING BLOGS
    // =======================================================

    ...blogUrls,

    // =======================================================
    // NEW BLOG POSTS
    // =======================================================

    ...newBlogUrls,
  ];
}
