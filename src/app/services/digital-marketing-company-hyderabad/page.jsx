import Image from "next/image";

/* ================= SEO METADATA ================= */

export const metadata = {
  title: "PPC Advertising Services in Hyderabad | Google Ads Company – KIDIWEBTECH",
  description:
    "KIDIWEBTECH is a leading PPC advertising company in Hyderabad providing Google Ads, Pay Per Click advertising, and ROI-driven paid marketing services for businesses.",
  keywords: [
    "PPC company Hyderabad",
    "PPC advertising services",
    "Google Ads services Hyderabad",
    "Pay Per Click advertising",
    "digital marketing agency Hyderabad",
    "PPC management company",
    "Google Ads agency",
    "paid advertising services",
  ],
  alternates: {
    canonical: "https://kidiwebtech.com/services/ppc",
  },
};

/* ================= PAGE ================= */

export default function PPCPage() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      {/* HERO */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          PPC Advertising Services in <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          ROI-focused Pay Per Click advertising and Google Ads management
          designed to generate high-quality leads and measurable business growth.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-2 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image13.jpg"
                alt="PPC advertising services and Google Ads management in Hyderabad"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Professional PPC <span className="gradient-text">Advertising Services</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Pay Per Click (PPC) advertising is one of the most effective digital
              marketing strategies for businesses looking for immediate traffic
              and fast lead generation. PPC campaigns place your brand at the
              top of Google search results, ensuring maximum visibility to
              high-intent users.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As a trusted <strong className="gradient-text">PPC company in Hyderabad</strong>,
              KIDIWEBTECH delivers data-driven Google Ads campaigns focused on
              conversions, cost efficiency, and sustainable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto pb-28 space-y-12 text-gray-400">

        {/* WHY US */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose KIDIWEBTECH for PPC Advertising?
          </h2>
          <p>
            KIDIWEBTECH is a results-oriented PPC advertising agency helping
            businesses achieve consistent growth through Google Ads, YouTube
            advertising, and paid digital marketing campaigns. Our approach
            focuses on keyword intent, ad relevance, landing page optimization,
            and conversion tracking.
          </p>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our PPC Management Process
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>In-depth Keyword Research & Competitor Analysis</li>
            <li>High-Converting Google Ads Copy Creation</li>
            <li>Advanced Audience Targeting & Remarketing</li>
            <li>Landing Page Optimization for Conversions</li>
            <li>Conversion Tracking & Performance Reporting</li>
            <li>Continuous Bid & Campaign Optimization</li>
          </ul>
        </div>

        {/* PPC VS SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            PPC Advertising vs SEO – Which Is Better?
          </h2>
          <p>
            PPC advertising delivers immediate traffic and leads, while SEO
            focuses on long-term organic growth. PPC is ideal for quick results,
            product launches, and competitive markets, whereas SEO builds
            authority and sustainable visibility over time. Businesses that
            combine PPC and SEO often achieve the best digital marketing results.
          </p>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            PPC Advertising for Different Industries
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>PPC Advertising for Real Estate Businesses</li>
            <li>Google Ads for E-commerce & Online Stores</li>
            <li>PPC Campaigns for Local Service Providers</li>
            <li>Lead Generation Ads for B2B Companies</li>
            <li>Paid Advertising for Startups & SMEs</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            PPC Advertising – Frequently Asked Questions
          </h2>

          <p><strong>How much does PPC advertising cost?</strong><br />
            PPC costs depend on competition, keywords, and targeting. You control
            your budget and only pay when users click on your ads.
          </p>

          <p className="mt-4"><strong>How long does it take to see PPC results?</strong><br />
            PPC campaigns can start generating traffic and leads within hours of
            launch, making it one of the fastest digital marketing channels.
          </p>

          <p className="mt-4"><strong>Is Google Ads suitable for small businesses?</strong><br />
            Yes. With proper keyword targeting and budget optimization, Google
            Ads can deliver excellent ROI for small and local businesses.
          </p>
        </div>

        <p className="pt-6">
          If you’re looking for a reliable <strong className="gradient-text">Google Ads agency in Hyderabad</strong>,
          KIDIWEBTECH delivers scalable PPC advertising solutions that transform
          ad spend into real business growth.
        </p>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Scale with <span className="gradient-text">PPC Advertising?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Get a customized Google Ads and PPC strategy designed to increase
          traffic, leads, and ROI.
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-yellow-400 to-orange-500
            text-black font-semibold text-lg
            hover:opacity-90 transition"
        >
          Get a Free PPC Consultation →
        </a>
      </section>

    </div>
  );
}
