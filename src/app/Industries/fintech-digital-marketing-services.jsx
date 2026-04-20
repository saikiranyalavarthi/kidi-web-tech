import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function FintechMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fintech Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Fintech digital marketing services including SEO, performance marketing, social media and lead generation for financial startups and companies.",
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Fintech Digital Marketing Services | Grow Your Financial Business
        </title>

        <meta
          name="description"
          content="Scale your fintech business with SEO, performance marketing, and lead generation strategies. Get more users, investors, and revenue."
        />

        <meta
          name="keywords"
          content="fintech marketing services, financial marketing agency India, fintech SEO, banking marketing, finance lead generation, fintech ads"
        />

        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/fintech-digital-marketing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Fintech Digital Marketing Services"
        />
        <meta
          property="og:description"
          content="Grow your fintech startup or financial business with performance-driven marketing strategies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= SCHEMA ================= */}
      <Script
        id="fintech-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Fintech Digital{" "}
          <span className="gradient-text">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Acquire users, build trust, and scale your financial business with
          data-driven fintech marketing strategies.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold"
        >
          Get Free Consultation
        </Link>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-extrabold text-center mb-16">
          Our <span className="gradient-text">Fintech Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Fintech SEO",
              desc: "Rank your financial platform on Google and attract organic users.",
            },
            {
              title: "Performance Marketing",
              desc: "Run ROI-driven campaigns across Google, Meta, and more.",
            },
            {
              title: "Lead Generation",
              desc: "Capture high-quality leads for financial products and services.",
            },
            {
              title: "Landing Page Optimization",
              desc: "Convert visitors into users with high-converting fintech pages.",
            },
            {
              title: "Content Marketing",
              desc: "Build authority with blogs, guides, and financial content.",
            },
            {
              title: "App Marketing",
              desc: "Increase installs and engagement for fintech apps.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60" />
              <div className="relative bg-black rounded-2xl m-[1.5px] p-8">
                <h3 className="text-xl font-bold gradient-text mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-16">
          Why Choose <span className="gradient-text">Our Fintech Strategy</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "High-quality user acquisition",
            "Trust & credibility building",
            "Lower cost per acquisition",
            "Regulation-aware strategies",
            "Scalable growth campaigns",
            "Data-driven insights",
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/10 rounded-xl">
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="py-20 px-6 md:px-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-gray-400 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Fintech Marketing That Builds Trust & Growth
          </h2>

          <p className="mb-4">
            Fintech businesses operate in a highly competitive and regulated
            environment where trust and credibility are essential. Our fintech
            marketing strategies focus on building brand authority while driving
            user acquisition.
          </p>

          <p className="mb-4">
            We combine SEO, paid advertising, and content marketing to help
            financial companies reach the right audience and convert them into
            loyal users.
          </p>

          <p>
            Whether you are a fintech startup or an established financial brand,
            our solutions are designed to deliver sustainable growth and
            measurable results.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Grow Your{" "}
          <span className="gradient-text">Fintech Business?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build a strategy that drives users and revenue.
        </p>

        <Link
          href="/contact"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-semibold"
        >
          Start Now
        </Link>
      </section>
    </div>
  );
}
