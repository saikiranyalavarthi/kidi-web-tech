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
    summary: "Proven content marketing strategies to boost engagement and trust.",
  },
  "branding-design-trends": {
    title: "Branding & Design Trends for Modern Businesses",
    image: "/assets/blog2.webp",
    summary: "Latest branding and UI/UX design trends for modern brands.",
  },
  "email-marketing-conversion": {
    title: "Mastering Email Marketing for Higher Conversion",
    image: "/assets/blog3.webp",
    summary: "Email marketing strategies that increase conversions.",
  },
  "marketing-performance-tracking": {
    title: "Performance Tracking: Measuring What Matters",
    image: "/assets/blog4.webp",
    summary: "How to track KPIs and marketing performance effectively.",
  },
  "seo-traffic-growth": {
    title: "Boosting Traffic with Search Engine Optimization (SEO)",
    image: "/assets/blog5.webp",
    summary: "SEO strategies to grow organic traffic.",
  },
  "ppc-advertising-strategy": {
    title: "Pay-Per-Click Advertising: Maximize Your Budget",
    image: "/assets/blog6.webp",
    summary: "PPC strategies to improve ROI and reduce CPC.",
  },
  "social-media-brand-growth": {
    title: "Social Media Management for Brand Growth",
    image: "/assets/blog7.webp",
    summary: "Grow your brand using social media marketing.",
  },
  "web-development-trends-2025": {
    title: "Web Development Trends to Watch in 2025",
    image: "/assets/blog8.webp",
    summary: "Modern frameworks and performance trends in web development.",
  },
  "business-mobile-app-benefits": {
    title: "Why Your Business Needs a Mobile App Today",
    image: "/assets/blog9.webp",
    summary: "Benefits of having a mobile app for your business.",
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
