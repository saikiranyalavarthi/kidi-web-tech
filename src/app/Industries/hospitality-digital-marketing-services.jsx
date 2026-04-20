import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function HospitalityMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Hospitality Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Hospitality digital marketing services for hotels, resorts, restaurants and travel businesses including SEO, ads and booking optimization.",
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Hospitality Digital Marketing Services | Increase Bookings & Revenue
        </title>

        <meta
          name="description"
          content="Grow your hotel, resort or restaurant with SEO, Google Ads, social media marketing and booking optimization. Increase reservations and revenue."
        />

        <meta
          name="keywords"
          content="hospitality marketing services, hotel digital marketing, restaurant marketing, resort marketing, travel marketing India, increase hotel bookings"
        />

        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/hospitality-digital-marketing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Hospitality Digital Marketing Services"
        />
        <meta
          property="og:description"
          content="Boost hotel bookings and restaurant sales with expert marketing strategies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= SCHEMA ================= */}
      <Script
        id="hospitality-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Hospitality Digital{" "}
          <span className="gradient-text">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Increase bookings, attract more guests, and grow your hospitality
          business with performance-driven digital marketing strategies.
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
          <span className="gradient-text">Hospitality Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Hotel SEO",
              desc: "Rank your hotel or resort on Google and attract organic bookings.",
            },
            {
              title: "Google Ads for Bookings",
              desc: "Run targeted ads to increase direct reservations.",
            },
            {
              title: "Social Media Marketing",
              desc: "Promote your property on Instagram, Facebook & travel platforms.",
            },
            {
              title: "Booking Engine Optimization",
              desc: "Improve your website to increase direct bookings.",
            },
            {
              title: "Online Reputation Management",
              desc: "Boost reviews and ratings on Google & travel platforms.",
            },
            {
              title: "Local SEO",
              desc: "Rank for 'hotels near me' and location-based searches.",
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
          <span className="gradient-text">Our Hospitality Strategy</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Increase direct bookings",
            "Reduce OTA dependency",
            "Improve online visibility",
            "Better guest engagement",
            "Higher ROI campaigns",
            "Long-term brand growth",
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
            Hospitality Marketing That Drives Bookings
          </h2>

          <p className="mb-4">
            The hospitality industry is highly competitive, and digital
            marketing plays a crucial role in attracting guests and increasing
            bookings. Our strategies are designed to help hotels, resorts, and
            restaurants stand out online.
          </p>

          <p className="mb-4">
            We combine SEO, paid ads, and social media marketing to reach
            travelers actively searching for accommodations and dining options.
          </p>

          <p>
            Whether you run a boutique hotel or a large resort, our marketing
            solutions help you maximize occupancy rates and grow revenue.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Increase <span className="gradient-text">Bookings?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build a strategy that brings more guests to your business.
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
