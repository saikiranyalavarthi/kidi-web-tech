import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Web Designing Company in Hyderabad | KIDIWEBTECH",
  description:
    "KIDIWEBTECH offers modern, responsive, and conversion-focused web design services in Hyderabad. Build fast, SEO-optimized, and stunning websites.",
  keywords: [
    "Web Designing Hyderabad",
    "Website Design Company Hyderabad",
    "Responsive Web Design",
    "UI UX Designers Hyderabad",
    "KIDIWEBTECH Website Design",
    "Custom Web Design Services",
  ],
  alternates: {
    canonical: "https://kidiwebtech.com/services/web-design",
  },
};

export default function WebDesigningPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Web Designing{" "}
          <span className="gradient-text">Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          High-converting, fast, and visually stunning websites built for growth.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">Web Designing</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-rose-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image16.jpg"
                alt="Web Designing Company in Hyderabad"
                width={600}
                height={420}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Web Designing Company in{" "}
              <span className="gradient-text">Hyderabad</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Your website is your brand’s first impression. If it doesn’t
              engage users in seconds, you lose customers.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> designs
              websites that are visually appealing, user-friendly, fast-loading,
              and optimized for search engines.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From landing pages to full-scale business websites, we focus on
              performance, clarity, and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-center mb-14">
          What We <span className="gradient-text">Offer</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Custom Website Design",
            "Responsive & Mobile-Friendly Layouts",
            "UI/UX Focused Design",
            "SEO-Friendly Structure",
            "Fast Loading Performance",
            "Landing Pages & Business Websites",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-6 hover:border-rose-400 transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item}</h4>
              <p className="text-gray-400 text-sm">
                Designed to improve engagement, trust, and conversions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Need a <span className="gradient-text">High-Impact Website?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s design a website that represents your brand and drives real
          business results.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="
              inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-purple-500 to-rose-500
              text-white font-semibold text-lg
              hover:opacity-90 transition
            "
          >
            Get a Free Website Quote →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="
              inline-block px-10 py-4 rounded-full
              border border-rose-400 text-rose-400
              hover:bg-rose-400 hover:text-black
              transition
            "
          >
            WhatsApp Us
          </Link>
        </div>
      </section>
    </div>
  );
}
