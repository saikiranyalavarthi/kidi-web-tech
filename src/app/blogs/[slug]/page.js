import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =========================
   BLOG DATA (LOCAL ONLY)
========================= */
const blogs = {
  "content-marketing-strategies": {
    title: "Content Marketing Strategies That Drive Engagement",
    description: "Proven content marketing strategies to boost engagement.",
    image: "/assets/blog1.webp",
    date: "2025-01-15",
    author: "KidiWebTech Content Team",
    content: `<p>Content marketing builds trust and long-term engagement.</p>`,
  },

  "branding-design-trends": {
    title: "Branding & Design Trends for Modern Businesses",
    description: "Latest branding and UI/UX design trends.",
    image: "/assets/blog2.webp",
    date: "2025-01-16",
    author: "KidiWebTech Design Team",
    content: `<p>Strong branding creates lasting impressions.</p>`,
  },

  "email-marketing-conversion": {
    title: "Mastering Email Marketing for Higher Conversion",
    description: "Email marketing strategies that increase conversions.",
    image: "/assets/blog3.webp",
    date: "2025-01-17",
    author: "KidiWebTech Marketing Team",
    content: `<p>Email marketing delivers one of the highest ROIs.</p>`,
  },

  "marketing-performance-tracking": {
    title: "Performance Tracking: Measuring What Matters",
    description: "Track KPIs and marketing performance.",
    image: "/assets/blog4.webp",
    date: "2025-01-18",
    author: "KidiWebTech Analytics Team",
    content: `<p>Data-driven marketing improves results.</p>`,
  },

  "seo-traffic-growth": {
    title: "Boosting Traffic with Search Engine Optimization (SEO)",
    description: "SEO strategies to grow organic traffic.",
    image: "/assets/blog5.webp",
    date: "2025-01-19",
    author: "KidiWebTech SEO Team",
    content: `<p>SEO drives sustainable long-term traffic.</p>`,
  },

  "ppc-advertising-strategy": {
    title: "Pay-Per-Click Advertising: Maximize Your Budget",
    description: "PPC strategies to improve ROI.",
    image: "/assets/blog6.webp",
    date: "2025-01-20",
    author: "KidiWebTech Ads Team",
    content: `<p>PPC gives instant online visibility.</p>`,
  },

  "social-media-brand-growth": {
    title: "Social Media Management for Brand Growth",
    description: "Grow your brand using social media.",
    image: "/assets/blog7.webp",
    date: "2025-01-21",
    author: "KidiWebTech Social Team",
    content: `<p>Social media builds brand loyalty.</p>`,
  },

  "web-development-trends-2025": {
    title: "Web Development Trends to Watch in 2025",
    description: "Modern web development trends.",
    image: "/assets/blog8.webp",
    date: "2025-01-22",
    author: "KidiWebTech Dev Team",
    content: `<p>Performance and security matter more than ever.</p>`,
  },

  "business-mobile-app-benefits": {
    title: "Why Your Business Needs a Mobile App Today",
    description: "Benefits of mobile apps for businesses.",
    image: "/assets/blog9.webp",
    date: "2025-01-23",
    author: "KidiWebTech App Team",
    content: `<p>Mobile apps increase engagement and retention.</p>`,
  },
};


/* =========================
   SEO METADATA (FIXED)
========================= */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs[slug];
  if (!blog) return {};

  const url = `https://www.kidiwebtech.com/blogs/${slug}`;

  return {
    title: `${blog.title} | KidiWebTech`,
    description: blog.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url,
      siteName: "KidiWebTech",
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

/* =========================
   PAGE COMPONENT
========================= */
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs[slug];
  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-black py-20 px-6">
      <article className="max-w-4xl mx-auto">

        {/* BREADCRUMB */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/">Home</Link> ›{" "}
          <Link href="/blogs">Blogs</Link> ›{" "}
          <span className="text-gray-300">{blog.title}</span>
        </nav>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {blog.title}
        </h1>

        {/* META INFO */}
        <p className="text-gray-400 mb-8">
          {blog.date} · By <strong>{blog.author}</strong>
        </p>

        {/* FEATURED IMAGE */}
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={450}
          priority
          className="rounded-xl mb-10"
        />

        {/* CONTENT */}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* CTA */}
        <div className="mt-14 p-6 rounded-xl bg-white/5 border border-white/10">
          <p className="text-lg text-white font-semibold mb-3">
            Want better rankings and traffic?
          </p>
          <Link
            href="/contact"
            className="inline-block text-yellow-400 font-semibold hover:underline"
          >
            Get a Free SEO Consultation →
          </Link>
        </div>

      </article>
    </main>
  );
}
