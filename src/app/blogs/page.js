"use client";
import Image from "next/image";

const blogPosts = [
  {
    title: "Content Marketing Strategies That Drive Engagement",
    image: "/assets/blog1.jpg",
    summary:
      "Content marketing builds trust and drives traffic. Learn how to create value-driven content that aligns with your audience's needs and enhances brand visibility.",
  },
  {
    title: "Branding & Design Trends for Modern Businesses",
    image: "/assets/blog2.jpg",
    summary:
      "Great design communicates trust. Discover how modern branding influences customer perception and elevates your business in competitive markets.",
  },
  {
    title: "Mastering Email Marketing for Higher Conversion",
    image: "/assets/blog3.jpg",
    summary:
      "Email marketing remains powerful. This guide explores segmentation, automation, and personalized campaigns to drive ROI effectively.",
  },
  {
    title: "Performance Tracking: Measuring What Matters",
    image: "/assets/blog4.jpg",
    summary:
      "Tracking performance helps optimize campaigns. Learn about KPIs, analytics tools, and how data can drive better decisions.",
  },
  {
    title: "Boosting Traffic with Search Engine Optimization (SEO)",
    image: "/assets/blog5.jpg",
    summary:
      "SEO helps you rank higher on Google. We discuss on-page SEO, technical fixes, backlinks, and how to stay updated with Google's algorithm.",
  },
  {
    title: "Pay-Per-Click Advertising: Maximize Your Budget",
    image: "/assets/blog6.jpg",
    summary:
      "PPC offers instant visibility. Discover how to target the right keywords, craft compelling ad copy, and reduce your cost-per-click.",
  },
  {
    title: "Social Media Management for Brand Growth",
    image: "/assets/blog7.jpg",
    summary:
      "Social media builds community and trust. Learn platform-specific strategies and how to keep followers engaged consistently.",
  },
  {
    title: "Web Development Trends to Watch in 2025",
    image: "/assets/blog8.jpg",
    summary:
      "Web development evolves fast. Explore modern frameworks, responsive design, and what it takes to build fast and secure websites.",
  },
  {
    title: "Why Your Business Needs a Mobile App Today",
    image: "/assets/blog9.jpg",
    summary:
      "Mobile apps increase engagement and loyalty. Understand how to plan, design, and scale a user-friendly app for your business.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700 dark:text-white">
        Our Blogs & Insights
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {post.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
