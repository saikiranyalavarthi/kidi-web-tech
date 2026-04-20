import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function SaasMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SaaS Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "SaaS marketing services including SEO, performance marketing, content marketing, and user acquisition strategies to scale SaaS products.",
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* ================= SEO ================= */}
      <Head>
        <title>SaaS Marketing Services | Grow Your SaaS Product & Users</title>

        <meta
          name="description"
          content="Scale your SaaS business with SEO, paid ads, content marketing, and conversion optimization. Increase users, MRR, and retention."
        />

        <meta
          name="keywords"
          content="saas marketing services, saas growth marketing, saas seo agency India, b2b saas marketing, saas lead generation, increase MRR"
        />

        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/saas-marketing"
        />

        {/* Open Graph */}
        <meta property="og:title" content="SaaS Marketing Services" />
        <meta
          property="og:description"
          content="Grow your SaaS product with data-driven marketing strategies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= SCHEMA ================= */}
      <Script
        id="saas-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          SaaS <span className="gradient-text">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Acquire users, increase MRR, and scale your SaaS product with
          performance-driven marketing strategies.
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
          Our <span className="gradient-text">SaaS Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "SaaS SEO",
              desc: "Rank your SaaS product on Google and attract organic users.",
            },
            {
              title: "Performance Marketing",
              desc: "Run ROI-driven campaigns on Google, LinkedIn, and Meta.",
            },
            {
              title: "Content Marketing",
              desc: "Build authority with blogs, case studies, and product content.",
            },
            {
              title: "Landing Page Optimization",
              desc: "Increase conversions with high-performing landing pages.",
            },
            {
              title: "Funnel Optimization",
              desc: "Optimize user journey from signup to paid conversion.",
            },
            {
              title: "Email & Retention Marketing",
              desc: "Improve user retention and lifetime value (LTV).",
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
          Why Choose <span className="gradient-text">Our SaaS Strategy</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Increase user acquisition",
            "Boost monthly recurring revenue (MRR)",
            "Lower customer acquisition cost (CAC)",
            "Improve retention & LTV",
            "Data-driven growth strategies",
            "Scalable marketing systems",
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
            SaaS Marketing That Drives Growth & Revenue
          </h2>

          <p className="mb-4">
            SaaS businesses require a unique marketing approach focused on user
            acquisition, retention, and long-term revenue growth. Our SaaS
            marketing strategies are designed to help you scale efficiently.
          </p>

          <p className="mb-4">
            We combine SEO, paid ads, and content marketing to attract users,
            nurture leads, and convert them into paying customers.
          </p>

          <p>
            Whether you are a startup SaaS product or an established platform,
            our solutions help you grow your user base, increase MRR, and
            achieve sustainable success.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Scale Your{" "}
          <span className="gradient-text">SaaS Product?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build a strategy that drives users and recurring revenue.
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
