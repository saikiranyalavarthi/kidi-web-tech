import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

/* ================= SEO METADATA ================= */

export const metadata: Metadata = {
  title:
    "Best Web Designing Company in Hyderabad | Website Design Services – KIDIWEBTECH",
  description:
    "KIDIWEBTECH is a leading web designing company in Hyderabad offering responsive, SEO-friendly, UI/UX-focused and high-converting website design services for businesses.",
  keywords: [
    "web designing company in hyderabad",
    "best website design company hyderabad",
    "responsive web design services",
    "ui ux designers hyderabad",
    "custom web development company",
    "business website design hyderabad",
    "seo friendly website design",
    "professional web designers in hyderabad",
  ],
  alternates: {
    canonical: "https://kidiwebtech.com/services/web-design",
  },
  openGraph: {
    title: "Top Web Designing Company in Hyderabad",
    description:
      "Professional responsive and SEO-friendly website design services for startups, SMEs and enterprises.",
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
            provider: {
              "@type": "Organization",
              name: "KIDIWEBTECH",
              url: "https://kidiwebtech.com",
            },
            areaServed: {
              "@type": "Place",
              name: "Hyderabad, Telangana, India",
            },
            description:
              "Professional website designing company in Hyderabad delivering responsive, SEO-friendly and high-converting websites.",
          }),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Best Web Designing Company in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We create high-performance, responsive, and SEO-friendly websites
          that convert visitors into customers and accelerate business growth.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">›</span>
          <span>Web Designing</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-rose-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image16.jpg"
                alt="Professional website designing company in Hyderabad"
                width={600}
                height={420}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Professional <span className="gradient-text">Website Design Services</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Your website is your digital storefront. A slow, outdated, or
              poorly designed website can drive customers away. At KIDIWEBTECH,
              we design modern, user-friendly, and conversion-focused websites
              tailored to your business goals.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our websites are built with performance, security, SEO, and
              mobile responsiveness in mind — ensuring maximum visibility and
              user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-14 text-gray-400">

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Professional Web Designing Matters
          </h2>
          <p>
            A professionally designed website improves brand credibility,
            enhances user experience (UX), supports search engine rankings,
            and increases lead generation. Businesses with optimized websites
            achieve higher engagement, lower bounce rates, and improved
            conversions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Designing Services Include
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom Website Design & Development</li>
            <li>Responsive & Mobile-Optimized Layouts</li>
            <li>UI/UX Focused Design Strategy</li>
            <li>SEO-Friendly Website Architecture</li>
            <li>E-commerce Website Design</li>
            <li>Landing Page Design for Lead Generation</li>
            <li>Website Redesign & Revamp Services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Website Design for Different Industries
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate Website Design</li>
            <li>Healthcare & Clinic Websites</li>
            <li>E-commerce & Online Store Design</li>
            <li>Corporate & IT Company Websites</li>
            <li>Education & Training Institute Websites</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Design Integrated with SEO & PPC
          </h2>
          <p>
            A well-designed website works best when combined with{" "}
            <Link href="/services/seo" className="underline">
              SEO services
            </Link>{" "}
            and{" "}
            <Link href="/services/ppc" className="underline">
              PPC advertising
            </Link>
            . We design conversion-optimized landing pages that improve
            ad performance and organic rankings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Custom Website vs Template-Based Design
          </h2>
          <p>
            Custom websites offer better branding, flexibility, and performance
            compared to pre-built templates. A tailored design ensures your
            business stands out from competitors and delivers superior
            long-term results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Designing – Frequently Asked Questions
          </h2>

          <p>
            <strong>How much does website design cost in Hyderabad?</strong><br />
            Website design pricing depends on features, pages, functionality,
            and integrations. We provide affordable packages for startups and enterprises.
          </p>

          <p className="mt-4">
            <strong>How long does it take to design a website?</strong><br />
            A standard business website takes 2–4 weeks. E-commerce or custom
            projects may require additional time.
          </p>

          <p className="mt-4">
            <strong>Will my website be mobile-friendly?</strong><br />
            Yes. All websites we design are fully responsive and optimized
            for mobile, tablet, and desktop devices.
          </p>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Build a <span className="gradient-text">High-Performance Website?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s design a professional website that strengthens your brand and
          drives measurable business growth.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-purple-500 to-rose-500
              text-white font-semibold text-lg
              hover:opacity-90 transition"
          >
            Get a Free Website Quote →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="inline-block px-10 py-4 rounded-full
              border border-rose-400 text-rose-400
              hover:bg-rose-400 hover:text-black transition"
          >
            WhatsApp Us
          </Link>
        </div>
      </section>

    </div>
  );
}