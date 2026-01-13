"use client";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black px-6 ">

      <div className="max-w-5xl text-center">

        {/* EYEBROW / BADGE */}
        <p className="mb-4 inline-block px-4 py-4 rounded-full text-sm font-medium
          bg-white/5 border border-white/10 text-gray-300">
          🚀 Digital Growth Partner for Any Business
        </p>

        {/* MAIN HEADING (SEO H1) */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          Get More{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Leads & Sales
          </span>{" "}
          for Your Business
        </h1>

        {/* SUPPORTING HEADING (H2 – SEO SAFE) */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
          Websites, SEO, Google Ads & Social Media That Actually Convert
        </h2>

        {/* SUB TEXT */}
        <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-3xl mx-auto">
          We help businesses grow online with high-converting websites,
          SEO-driven traffic, paid ads, and marketing strategies focused on
          real results — not just clicks.
        </p>

        {/* OFFER (VERY IMPORTANT FOR LEADS) */}
        <p className="text-yellow-400 font-semibold mb-10">
          🎁 Free 30-Minute Business Growth Consultation
        </p>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-5 flex-wrap mb-12">

          {/* PRIMARY CTA */}
          <a
            href="/contact"
            className="
              px-8 py-4 rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black font-semibold
              hover:opacity-90 transition
            "
          >
            Get Free Consultation
          </a>

          {/* WHATSAPP CTA (LEAD BOOSTER) */}
          <a
            href="https://wa.me/919390627367?text=Hi%2C%20I%20want%20a%20free%20consultation%20to%20grow%20my%20business."
            target="_blank"
            className="
              px-8 py-4 rounded-full
              border border-white/20
              text-white
              hover:border-green-400 hover:text-green-400
              transition
            "
          >
            Chat on WhatsApp
          </a>

        </div>

        {/* TRUST STRIP */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✔ 100+ Projects Delivered</span>
          <span>✔ SEO & Google Ads Experts</span>
          <span>✔ High-Conversion Websites</span>
          <span>✔ Trusted by Businesses Across India</span>
        </div>

      </div>
    </section>
  );
}
