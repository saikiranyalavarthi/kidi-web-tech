import Image from "next/image";
import Link from "next/link";

/* =========================
   SEO METADATA
========================= */

export const metadata = {
  title: "SEO & Digital Marketing Blogs | KIDIWEBTECH",
  description:
    "Read expert blogs on SEO, web development, digital marketing, Google ranking, branding, and business growth by KIDIWEBTECH.",
  alternates: {
    canonical: "https://www.kidiwebtech.com/blogs",
  },
};

/* =========================
   BLOG DATA
========================= */

const blogs = {
  "content-marketing-strategies": {
    title: "Content Marketing Strategies That Drive Engagement",
    image: "/assets/blog1.webp",
    summary:
      "Learn powerful content marketing strategies that improve SEO rankings and customer engagement.",
  },

  "branding-design-trends": {
    title: "Branding & Design Trends for Modern Businesses",
    image: "/assets/blog2.webp",
    summary:
      "Explore modern UI/UX and branding trends that help businesses stand out online.",
  },

  "email-marketing-conversion": {
    title: "Mastering Email Marketing for Higher Conversion",
    image: "/assets/blog3.webp",
    summary:
      "Discover email marketing strategies that increase conversions and customer retention.",
  },

  "marketing-performance-tracking": {
    title: "Performance Tracking: Measuring What Matters",
    image: "/assets/blog4.webp",
    summary:
      "Track marketing KPIs and optimize campaigns with analytics-driven insights.",
  },

  "seo-traffic-growth": {
    title: "Boosting Traffic with SEO",
    image: "/assets/blog5.webp",
    summary:
      "Complete SEO strategies to improve Google rankings and website traffic.",
  },

  "ppc-advertising-strategy": {
    title: "PPC Advertising: Maximize Your Budget",
    image: "/assets/blog6.webp",
    summary:
      "Optimize Google Ads campaigns and improve ROI with PPC strategies.",
  },

  "social-media-brand-growth": {
    title: "Social Media Management for Brand Growth",
    image: "/assets/blog7.webp",
    summary:
      "Grow brand awareness and engagement using social media marketing.",
  },

  "web-development-trends-2025": {
    title: "Web Development Trends in 2025",
    image: "/assets/blog8.webp",
    summary:
      "Discover latest web development technologies and performance trends.",
  },

  "business-mobile-app-benefits": {
    title: "Why Your Business Needs a Mobile App",
    image: "/assets/blog9.webp",
    summary:
      "Learn how mobile apps improve customer engagement and business growth.",
  },
};

/* =========================
   PAGE COMPONENT
========================= */

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative py-28 px-6 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

        {/* BLUR EFFECTS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-[#0F172A]">
            SEO & Digital Marketing Blogs by{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              KIDIWEBTECH
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-9 mt-8">
            Expert blogs on SEO, Google ranking, website development, digital
            marketing, branding, and business growth strategies.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}

      <section className="px-6 md:px-16 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {Object.entries(blogs).map(([slug, blog], index) => (
            <article key={slug} className="group relative">
              {/* GLOW */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* CARD */}
              <Link
                href={`/blogs/${slug}`}
                className="relative block bg-white rounded-3xl overflow-hidden
                border border-blue-100 shadow-lg
                hover:shadow-2xl transition-all duration-500
                hover:-translate-y-3"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <span
                    className="inline-block mb-4 text-xs font-semibold
                    px-4 py-2 rounded-full
                    bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    Digital Marketing
                  </span>

                  <h2
                    className="text-2xl font-extrabold mb-4
                    bg-gradient-to-r from-[#2563EB] to-[#06B6D4]
                    bg-clip-text text-transparent"
                  >
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-7">
                    {blog.summary}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-6">
                    <span
                      className="inline-flex items-center gap-2
                      bg-gradient-to-r from-[#2563EB] to-[#06B6D4]
                      text-white px-5 py-3 rounded-full
                      text-sm font-semibold shadow-lg
                      group-hover:scale-105 transition-all duration-300"
                    >
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
