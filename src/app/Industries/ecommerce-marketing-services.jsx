import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function EcommerceMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Ecommerce digital marketing services including SEO, Google Ads, social media marketing, and conversion optimization to increase online sales.",
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Ecommerce Marketing Services | Boost Sales & ROI for Your Online Store
        </title>

        <meta
          name="description"
          content="Grow your ecommerce business with SEO, Google Ads, social media marketing and CRO. Increase traffic, conversions and online sales."
        />

        <meta
          name="keywords"
          content="ecommerce marketing services, online store marketing, ecommerce SEO, ecommerce ads, Shopify marketing, increase online sales India"
        />

        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/ecommerce-marketing"
        />

        {/* OG */}
        <meta property="og:title" content="Ecommerce Marketing Services" />
        <meta
          property="og:description"
          content="Increase your online store sales with performance-driven ecommerce marketing strategies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= SCHEMA ================= */}
      <Script
        id="ecommerce-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Ecommerce <span className="gradient-text">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Drive traffic, boost conversions, and increase revenue with
          data-driven ecommerce marketing strategies designed for growth.
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
          Our{" "}
          <span className="gradient-text">Ecommerce Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Ecommerce SEO",
              desc: "Optimize product pages and categories to rank higher on Google.",
            },
            {
              title: "Google Shopping Ads",
              desc: "Promote your products directly in Google search results.",
            },
            {
              title: "Meta Ads (Facebook & Instagram)",
              desc: "Run high-converting campaigns to boost product sales.",
            },
            {
              title: "Conversion Rate Optimization (CRO)",
              desc: "Increase sales by improving your website’s conversion rate.",
            },
            {
              title: "Email Marketing Automation",
              desc: "Recover abandoned carts and build repeat customers.",
            },
            {
              title: "Marketplace Marketing",
              desc: "Sell more on Amazon, Flipkart, and other marketplaces.",
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
          Why Choose{" "}
          <span className="gradient-text">Our Ecommerce Strategy</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Increase online sales & revenue",
            "Lower cost per acquisition",
            "Better ROI tracking",
            "Data-driven decision making",
            "Targeted audience reach",
            "Scalable growth strategies",
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
            Ecommerce Marketing That Drives Sales
          </h2>

          <p className="mb-4">
            In today’s competitive ecommerce landscape, simply having an online
            store is not enough. You need a strong marketing strategy to attract
            customers, build trust, and convert visitors into buyers.
          </p>

          <p className="mb-4">
            Our ecommerce marketing services combine SEO, paid ads, social
            media, and conversion optimization to maximize your store’s
            performance and profitability.
          </p>

          <p>
            Whether you run a Shopify store, WooCommerce website, or marketplace
            business, we help you scale your sales and grow sustainably.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Boost Your{" "}
          <span className="gradient-text">Online Sales?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build a strategy that turns visitors into loyal customers.
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
