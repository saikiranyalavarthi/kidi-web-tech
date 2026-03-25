import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/* ================= SEO METADATA ================= */

export const metadata = {
  title:
    "Best Web Designing Company in Hyderabad | Website Design Services – KIDIWEBTECH",
  description:
    "KIDIWEBTECH is a top web designing company in Hyderabad offering responsive, SEO-friendly, UI/UX-focused and high-converting website design services for businesses.",
  keywords: [
    "web designing company in hyderabad",
    "website design services hyderabad",
    "responsive web design company",
    "ui ux designers hyderabad",
    "seo friendly website design",
    "web development company hyderabad",
  ],
  alternates: {
    canonical: "https://kidiwebtech.com/services/web-design",
  },
  openGraph: {
    title: "Top Web Designing Company in Hyderabad",
    description:
      "Professional responsive and SEO-friendly website design services for businesses.",
    url: "https://kidiwebtech.com/services/web-design",
    siteName: "KIDIWEBTECH",
    type: "website",
  },
};

/* ================= PAGE ================= */

export default function WebDesigningPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= SCHEMA ================= */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Designing Services",
            areaServed: "Hyderabad, India",
          }),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Web Designing Company in Hyderabad – SEO-Friendly Website Design
          Services
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We are a leading web design company in Hyderabad offering modern,
          responsive, and SEO-optimized websites that help businesses increase
          traffic, generate leads, and boost conversions.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <span>Web Designing</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Image
            src="/assets/image16.jpg"
            alt="Web design company in Hyderabad offering SEO friendly website development"
            width={600}
            height={420}
            priority
            className="rounded-3xl"
          />

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Professional Website Design Services in Hyderabad
            </h2>

            <p className="text-gray-400 mb-4">
              At KIDIWEBTECH, we design high-performance websites tailored to
              your business needs. Our websites are built using modern
              technologies to ensure speed, responsiveness, and excellent user
              experience.
            </p>

            <p className="text-gray-400">
              Whether you need a business website, portfolio, or e-commerce
              platform, we create designs that convert visitors into customers
              and improve your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-14 text-gray-400">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Why Website Design is Important for Your Business
          </h2>
          <p>
            A professional website builds trust, improves brand visibility, and
            helps your business rank on Google. A well-designed website ensures
            better user experience, faster loading speed, and higher conversion
            rates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Our Web Design Services Include
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom Website Design & Development</li>
            <li>Responsive Mobile-Friendly Design</li>
            <li>UI/UX Optimized Layouts</li>
            <li>SEO-Friendly Website Structure</li>
            <li>E-commerce Website Development</li>
            <li>Landing Page Design for Lead Generation</li>
          </ul>
        </div>

        {/* INTERNAL LINKS */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Combine Web Design with SEO & Digital Marketing
          </h2>
          <p>
            Your website performs best when combined with{" "}
            <Link href="/services/seo" className="underline">
              SEO services in Hyderabad
            </Link>{" "}
            and{" "}
            <Link href="/services/ppc" className="underline">
              Google Ads (PPC)
            </Link>
            . This helps you rank higher on Google and generate consistent
            leads.
          </p>
        </div>

        {/* LOCAL SEO */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Website Design for Hyderabad Businesses
          </h2>
          <p>
            We specialize in designing websites for businesses in Hyderabad and
            across India. Our local SEO-focused design approach ensures your
            business reaches the right audience and attracts potential customers
            from your area.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Build Your Website?
        </h2>

        <p className="text-gray-400 mb-8">
          Get a high-converting, SEO-friendly website designed for your business
          growth.
        </p>

        <Link
          href="/contact"
          className="px-10 py-4 bg-purple-500 text-white rounded-full"
        >
          Get Free Website Quote
        </Link>
      </section>
    </div>
  );
}
