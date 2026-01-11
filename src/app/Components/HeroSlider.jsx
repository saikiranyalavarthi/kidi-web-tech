"use client";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black px-6">

      <div className="max-w-5xl text-center">

        {/* EYEBROW / BADGE */}
        <p className="mb-4 inline-block px-4 py-1 rounded-full text-sm font-medium
          bg-white/5 border border-white/10 text-gray-300">
          🚀 Digital Growth Partner for Modern Businesses
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          Grow Your Business{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Digitally
          </span>
        </h1>

        {/* SUPPORTING HEADING */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
          Strategy • Technology • Performance
        </h2>

        {/* SUB TEXT */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          We help brands scale online with high-performance websites,
          SEO-driven visibility, paid advertising, and social media strategies
          that convert visitors into customers.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-5 flex-wrap mb-12">
          <a
            href="/contact"
            className="
              px-8 py-3 rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black font-semibold
              hover:opacity-90 transition
            "
          >
            Get Started
          </a>

          <a
            href="services/seo-services-hyderabad"
            className="
              px-8 py-3 rounded-full
              border border-white/20
              text-white
              hover:border-yellow-400 hover:text-yellow-400
              transition
            "
          >
            Our Services
          </a>
        </div>

        {/* TRUST STRIP */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✔ SEO & Google Ads</span>
          <span>✔ High-Conversion Websites</span>
          <span>✔ Social Media Growth</span>
          <span>✔ Trusted by 100+ Clients</span>
        </div>

      </div>
    </section>
  );
}
