import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function StartupMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Startup Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Startup digital marketing services including SEO, performance marketing, social media, and growth strategies to scale startups fast.",
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Startup Digital Marketing Services | Grow Your Startup Faster
        </title>

        <meta
          name="description"
          content="Accelerate your startup growth with SEO, performance marketing, and social media strategies. Get leads, users, and revenue faster."
        />

        <meta
          name="keywords"
          content="startup marketing services, digital marketing for startups, growth marketing agency India, startup SEO, performance marketing startup"
        />

        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/startup-digital-marketing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Startup Digital Marketing Services"
        />
        <meta
          property="og:description"
          content="Scale your startup with high-performance digital marketing strategies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= SCHEMA ================= */}
      <Script
        id="startup-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Startup Digital{" "}
          <span className="gradient-text">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Scale faster, acquire users, and grow revenue with data-driven
          marketing strategies designed specifically for startups.
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
          Our <span className="gradient-text">Startup Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Startup SEO",
              desc: "Build organic visibility and attract users through search engines.",
            },
            {
              title: "Performance Marketing",
              desc: "Run ROI-driven campaigns on Google, Meta, and other platforms.",
            },
            {
              title: "Social Media Growth",
              desc: "Build brand awareness and engage your target audience.",
            },
            {
              title: "Landing Page Optimization",
              desc: "Convert visitors into users with high-converting landing pages.",
            },
            {
              title: "Growth Hacking Strategies",
              desc: "Experiment, analyze, and scale what works for rapid growth.",
            },
            {
              title: "App & SaaS Marketing",
              desc: "Drive installs, signups, and recurring users for your product.",
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
          Why Choose <span className="gradient-text">Our Startup Strategy</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Fast user acquisition",
            "Data-driven decisions",
            "Low customer acquisition cost",
            "Scalable growth models",
            "High ROI campaigns",
            "Startup-focused approach",
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
            Marketing That Helps Startups Scale
          </h2>

          <p className="mb-4">
            Startups need speed, innovation, and cost-effective strategies to
            succeed in a competitive market. Our startup digital marketing
            services focus on rapid experimentation, performance tracking, and
            scalable growth.
          </p>

          <p className="mb-4">
            We combine SEO, paid ads, and social media marketing to help
            startups acquire users, validate ideas, and grow revenue
            efficiently.
          </p>

          <p>
            Whether you are launching a new product or scaling your business,
            our marketing solutions are designed to deliver measurable results
            and long-term success.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Scale Your <span className="gradient-text">Startup?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build a growth strategy that drives users and revenue.
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
