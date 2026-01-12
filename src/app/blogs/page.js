import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Digital Marketing & Web Development Blogs | KidiWebTech",
  description:
    "Read expert blogs on SEO, digital marketing, web development, PPC, social media, and mobile apps to grow your business online.",
};<a href="https://medium.com/@kidiwebtech3482/b02f2652a77a" target="_blank">
Read our Medium article on SEO & Next.js
</a>


const blogPosts = [
  {
    title: "Content Marketing Strategies That Drive Engagement",
    slug: "content-marketing-strategies",
    image: "/assets/blog1.webp",
    summary:
      "Learn how value-driven content builds trust, increases engagement, and strengthens brand authority across digital channels.",
  },
  {
    title: "Branding & Design Trends for Modern Businesses",
    slug: "branding-design-trends",
    image: "/assets/blog2.webp",
    summary:
      "Discover how modern branding, UI/UX design, and visual consistency influence customer trust and perception.",
  },
  {
    title: "Mastering Email Marketing for Higher Conversion",
    slug: "email-marketing-conversion",
    image: "/assets/blog3.webp",
    summary:
      "Explore segmentation, automation, and personalization techniques that turn email campaigns into revenue engines.",
  },
  {
    title: "Performance Tracking: Measuring What Matters",
    slug: "marketing-performance-tracking",
    image: "/assets/blog4.webp",
    summary:
      "Understand KPIs, analytics tools, and how data-driven insights help optimize marketing performance.",
  },
  {
    title: "Boosting Traffic with Search Engine Optimization (SEO)",
    slug: "seo-traffic-growth",
    image: "/assets/blog5.webp",
    summary:
      "From on-page SEO to technical optimization, learn how to improve rankings and stay ahead of Google updates.",
  },
  {
    title: "Pay-Per-Click Advertising: Maximize Your Budget",
    slug: "ppc-advertising-strategy",
    image: "/assets/blog6.webp",
    summary:
      "Learn how to reduce CPC, improve ad quality, and drive instant traffic with optimized PPC campaigns.",
  },
  {
    title: "Social Media Management for Brand Growth",
    slug: "social-media-brand-growth",
    image: "/assets/blog7.webp",
    summary:
      "Build communities, increase engagement, and grow brand loyalty with platform-specific strategies.",
  },
  {
    title: "Web Development Trends to Watch in 2025",
    slug: "web-development-trends-2025",
    image: "/assets/blog8.webp",
    summary:
      "Explore modern frameworks, performance optimization, and secure development practices for future-ready websites.",
  },
  {
    title: "Why Your Business Needs a Mobile App Today",
    slug: "business-mobile-app-benefits",
    image: "/assets/blog9.webp",
    summary:
      "Discover how mobile apps increase customer engagement, retention, and long-term brand value.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-6">

      {/* SEO HEADER */}
      <header className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Digital Marketing & <span className="gradient-text">SEO Blogs</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Expert blogs on SEO, digital marketing, website development, app development,
          and online growth strategies.
        </p>
      </header>
      <div className="text-center mb-20">
        <Link
          href="https://medium.com/@kidiwebtech3482/how-seo-optimized-websites-built-with-next-js-improve-business-growth-d5e8a73ce9ab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-yellow-300 font-semibold hover:underline"
        >
          👉 Read our featured Medium article on SEO & Next.js
        </Link>
      </div>
      {/* BLOG LIST */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <article key={post.slug} className="relative group">

            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60 group-hover:opacity-90 transition" />

            <Link
              href={`/blogs/${post.slug}`}
              className="relative block bg-black rounded-2xl m-[1.5px] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2"
              aria-label={`Read blog: ${post.title}`}
            >
              {/* Blog Image */}
              <Image
                src={post.image}
                alt={`${post.title} | KidiWebTech Digital Marketing Blog`}
                width={400}
                height={250}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-52 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold gradient-text mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.summary}
                </p>

                {/* INTERNAL BACKLINK (SEO BOOST) */}
                <span className="text-yellow-300 text-sm font-semibold">
                  Read more →
                </span>
              </div>
            </Link>

          </article>
        ))}
      </section>

      {/* BLOG SCHEMA (STRONGER) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "KidiWebTech Blog",
            description:
              "SEO, Digital Marketing, Web Development and App Development Blogs",
            publisher: {
              "@type": "Organization",
              name: "KidiWebTech",
              url: "https://www.kidiwebtech.com",
            },
          }),
        }}
      />
    </main>
  );
}
