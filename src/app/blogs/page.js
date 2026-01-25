import Image from "next/image";
import Link from "next/link";

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: "SEO & Digital Marketing Blogs in Hyderabad | KidiWebTech",
  description:
    "Read expert SEO, digital marketing, web development, PPC, and social media blogs by KidiWebTech to grow your business online.",
  alternates: {
    canonical: "https://www.kidiwebtech.com/blogs",
  },
};

/* =========================
   BLOG DATA (ALL 9)
========================= */
const blogs = {
  "content-marketing-strategies": {
    title: "Content Marketing Strategies That Drive Engagement",
    image: "/assets/blog1.webp",
    summary:
      "This blog explains powerful content marketing strategies that help businesses attract the right audience, build trust, improve SEO rankings, and increase long-term customer engagement through valuable and consistent content.",
    purpose:
      "To educate businesses on how content marketing helps generate leads, build authority, and support SEO growth.",
    seoIntent:
      "Ranks for content marketing strategies, content marketing for business growth, SEO content tips.",
  },

  "branding-design-trends": {
    title: "Branding & Design Trends for Modern Businesses",
    image: "/assets/blog2.webp",
    summary:
      "Explore the latest branding and UI/UX design trends that modern businesses use to create strong brand identity, improve user experience, and increase customer trust in digital platforms.",
    purpose:
      "To help businesses understand the importance of branding and design in building credibility and standing out online.",
    seoIntent:
      "Ranks for branding trends, UI UX design trends, brand identity for businesses.",
  },

  "email-marketing-conversion": {
    title: "Mastering Email Marketing for Higher Conversion",
    image: "/assets/blog3.webp",
    summary:
      "This blog covers proven email marketing techniques including personalization, automation, and segmentation that help businesses increase open rates, improve conversions, and build long-term customer relationships.",
    purpose:
      "To guide businesses in using email marketing as a high-ROI digital marketing channel.",
    seoIntent:
      "Ranks for email marketing strategies, email marketing conversion tips, email automation.",
  },

  "marketing-performance-tracking": {
    title: "Performance Tracking: Measuring What Matters",
    image: "/assets/blog4.webp",
    summary:
      "Learn how to track the right marketing KPIs, analyze campaign performance, and use data-driven insights to improve ROI and make smarter digital marketing decisions.",
    purpose:
      "To help businesses understand analytics, performance tracking, and data-driven marketing strategies.",
    seoIntent:
      "Ranks for marketing KPIs, performance tracking, digital marketing analytics.",
  },

  "seo-traffic-growth": {
    title: "Boosting Traffic with Search Engine Optimization (SEO)",
    image: "/assets/blog5.webp",
    summary:
      "A complete guide to SEO strategies including on-page SEO, technical SEO, and content optimization to help businesses increase organic traffic and rank higher on Google.",
    purpose:
      "To educate businesses on how SEO drives long-term traffic and sustainable online growth.",
    seoIntent:
      "Ranks for SEO strategies, increase website traffic, SEO for business growth.",
  },

  "ppc-advertising-strategy": {
    title: "Pay-Per-Click Advertising: Maximize Your Budget",
    image: "/assets/blog6.webp",
    summary:
      "This blog explains how to plan and optimize PPC advertising campaigns to reduce cost per click, improve ad quality score, and maximize return on investment.",
    purpose:
      "To help businesses run profitable Google Ads and paid advertising campaigns.",
    seoIntent:
      "Ranks for PPC advertising strategies, Google Ads optimization, paid marketing tips.",
  },

  "social-media-brand-growth": {
    title: "Social Media Management for Brand Growth",
    image: "/assets/blog7.webp",
    summary:
      "Discover effective social media strategies that help businesses grow brand awareness, increase engagement, and build loyal online communities across platforms.",
    purpose:
      "To guide businesses in using social media marketing for brand visibility and customer engagement.",
    seoIntent:
      "Ranks for social media marketing strategies, brand growth on social media.",
  },

  "web-development-trends-2025": {
    title: "Web Development Trends to Watch in 2025",
    image: "/assets/blog8.webp",
    summary:
      "An overview of modern web development trends including performance optimization, security, responsive design, and modern frameworks shaping websites in 2025.",
    purpose:
      "To help businesses understand how modern web technologies improve performance and user experience.",
    seoIntent:
      "Ranks for web development trends 2025, modern website development, web performance.",
  },

  "business-mobile-app-benefits": {
    title: "Why Your Business Needs a Mobile App Today",
    image: "/assets/blog9.webp",
    summary:
      "This blog explains how mobile apps help businesses improve customer engagement, increase retention, enable direct communication, and support long-term digital growth.",
    purpose:
      "To educate businesses on the benefits of having a mobile app in today’s digital world.",
    seoIntent:
      "Ranks for mobile app benefits for business, business mobile app development.",
  },
};


/* =========================
   PAGE COMPONENT
========================= */
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-6">

      {/* HEADER */}
      <header className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          SEO & Digital Marketing Blogs by{" "}
          <span className="gradient-text">KidiWebTech</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Expert blogs on SEO, digital marketing, and online growth strategies.
        </p>
      </header>

      {/* BLOG LIST */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {Object.entries(blogs).map(([slug, blog]) => (
          <article key={slug} className="relative group">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60" />

            <Link
              href={`/blogs/${slug}`}
              className="relative block bg-black rounded-2xl m-[1.5px] overflow-hidden transition-transform group-hover:-translate-y-2"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold gradient-text mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-400 text-sm">
                  {blog.summary}
                </p>
              </div>
            </Link>

          </article>
        ))}
      </section>

    </main>
  );
}
