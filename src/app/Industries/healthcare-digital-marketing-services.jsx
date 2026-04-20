import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function HealthcareMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Healthcare Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Healthcare digital marketing services including SEO, Google Ads, social media marketing, and patient lead generation for hospitals, clinics, and doctors.",
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Healthcare Digital Marketing Services | Grow Your Clinic & Hospital
        </title>

        <meta
          name="description"
          content="Boost your healthcare business with SEO, Google Ads, and social media marketing. Get more patient appointments and grow your clinic or hospital."
        />

        <meta
          name="keywords"
          content="healthcare marketing, hospital marketing services, doctor marketing, clinic SEO, healthcare ads India, patient lead generation"
        />

        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/healthcare-digital-marketing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Healthcare Digital Marketing Services"
        />
        <meta
          property="og:description"
          content="Increase patient appointments with expert healthcare marketing strategies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= SCHEMA ================= */}
      <Script
        id="healthcare-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Healthcare Digital{" "}
          <span className="gradient-text">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Attract more patients, build trust, and grow your clinic or hospital
          with result-driven healthcare digital marketing strategies.
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
          <span className="gradient-text">Healthcare Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Healthcare SEO",
              desc: "Rank your hospital or clinic on Google and get organic patient leads.",
            },
            {
              title: "Google Ads for Clinics",
              desc: "Run targeted ads to generate instant appointment bookings.",
            },
            {
              title: "Social Media Marketing",
              desc: "Build trust and awareness on Facebook & Instagram.",
            },
            {
              title: "Website & Landing Pages",
              desc: "High-converting pages designed for patient inquiries.",
            },
            {
              title: "Online Reputation Management",
              desc: "Improve reviews and build credibility for your practice.",
            },
            {
              title: "Local SEO for Doctors",
              desc: "Appear in 'near me' searches and Google Maps results.",
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
          <span className="gradient-text">Our Healthcare Strategy</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Increase patient appointments",
            "Build trust and credibility",
            "Target local patients",
            "Improve Google rankings",
            "Cost-effective marketing",
            "Long-term growth strategy",
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
            Healthcare Marketing That Builds Patient Trust
          </h2>

          <p className="mb-4">
            Healthcare marketing requires trust, credibility, and precision
            targeting. Our strategies are designed to connect hospitals,
            clinics, and doctors with patients actively searching for medical
            services.
          </p>

          <p className="mb-4">
            We combine SEO, paid advertising, and social media marketing to
            ensure your healthcare brand reaches the right audience and converts
            them into long-term patients.
          </p>

          <p>
            Whether you are a multi-specialty hospital or a local clinic, our
            marketing solutions help you grow sustainably and stand out in a
            competitive healthcare market.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Grow Your{" "}
          <span className="gradient-text">Healthcare Practice?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s create a strategy that brings you more patients consistently.
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
