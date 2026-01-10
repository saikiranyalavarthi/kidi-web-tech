"use client";

import Image from "next/image";

const blogPosts = [
  {
    title: "Content Marketing Strategies That Drive Engagement",
    image: "/assets/blog1.jpg",
    summary:
      "Learn how value-driven content builds trust, increases engagement, and strengthens brand authority across digital channels.",
  },
  {
    title: "Branding & Design Trends for Modern Businesses",
    image: "/assets/blog2.jpg",
    summary:
      "Discover how modern branding, UI/UX design, and visual consistency influence customer trust and perception.",
  },
  {
    title: "Mastering Email Marketing for Higher Conversion",
    image: "/assets/blog3.jpg",
    summary:
      "Explore segmentation, automation, and personalization techniques that turn email campaigns into revenue engines.",
  },
  {
    title: "Performance Tracking: Measuring What Matters",
    image: "/assets/blog4.jpg",
    summary:
      "Understand KPIs, analytics tools, and how data-driven insights help optimize marketing performance.",
  },
  {
    title: "Boosting Traffic with Search Engine Optimization (SEO)",
    image: "/assets/blog5.jpg",
    summary:
      "From on-page SEO to technical optimization, learn how to improve rankings and stay ahead of Google updates.",
  },
  {
    title: "Pay-Per-Click Advertising: Maximize Your Budget",
    image: "/assets/blog6.jpg",
    summary:
      "Learn how to reduce CPC, improve ad quality, and drive instant traffic with optimized PPC campaigns.",
  },
  {
    title: "Social Media Management for Brand Growth",
    image: "/assets/blog7.jpg",
    summary:
      "Build communities, increase engagement, and grow brand loyalty with platform-specific strategies.",
  },
  {
    title: "Web Development Trends to Watch in 2025",
    image: "/assets/blog8.jpg",
    summary:
      "Explore modern frameworks, performance optimization, and secure development practices for future-ready websites.",
  },
  {
    title: "Why Your Business Needs a Mobile App Today",
    image: "/assets/blog9.jpg",
    summary:
      "Discover how mobile apps increase customer engagement, retention, and long-term brand value.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-6">

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Our <span className="gradient-text">Blogs & Insights</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Expert insights, strategies, and trends to help your business grow
          digitally with confidence.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="relative group">

            {/* GRADIENT BORDER */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60 group-hover:opacity-90 transition" />

            {/* CARD */}
            <div className="relative bg-black rounded-2xl m-[1.5px] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">

              {/* IMAGE */}
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-xl font-bold gradient-text mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.summary}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
