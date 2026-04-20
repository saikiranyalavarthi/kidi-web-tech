import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function EducationMarketing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Education Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Education digital marketing services for schools, colleges, and edtech platforms including SEO, Google Ads, and student lead generation.",
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Education Marketing Services | Student Lead Generation & Admissions
          Growth
        </title>

        <meta
          name="description"
          content="Grow your school, college or edtech platform with SEO, Google Ads and social media marketing. Get more student admissions and leads."
        />

        <meta
          name="keywords"
          content="education marketing services, student lead generation, school marketing, college marketing, edtech marketing India, admissions marketing"
        />

        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/education-marketing"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Education Marketing Services" />
        <meta
          property="og:description"
          content="Increase admissions with result-driven education marketing strategies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= SCHEMA ================= */}
      <Script
        id="education-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Education <span className="gradient-text">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Increase student admissions, build brand trust, and grow your
          institution with performance-driven education marketing strategies.
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
          <span className="gradient-text">Education Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "SEO for Schools & Colleges",
              desc: "Rank your institution on Google and attract organic student inquiries.",
            },
            {
              title: "Google Ads for Admissions",
              desc: "Generate instant student leads with targeted ad campaigns.",
            },
            {
              title: "Social Media Marketing",
              desc: "Engage students on Instagram, Facebook, and YouTube.",
            },
            {
              title: "Landing Page Design",
              desc: "High-converting admission pages to capture student leads.",
            },
            {
              title: "Lead Nurturing Automation",
              desc: "Convert inquiries into admissions with automation workflows.",
            },
            {
              title: "Local SEO",
              desc: "Rank for 'schools near me' and 'colleges in your city'.",
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
          Why Choose <span className="gradient-text">Our Strategy</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Increase student admissions",
            "Target the right audience",
            "Improve brand visibility",
            "Generate qualified leads",
            "Cost-effective campaigns",
            "Scalable growth",
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
            Education Marketing That Drives Admissions
          </h2>

          <p className="mb-4">
            In the competitive education sector, attracting the right students
            requires a strong digital presence. Our education marketing services
            help schools, colleges, and edtech platforms connect with students
            actively searching for courses and programs.
          </p>

          <p className="mb-4">
            We use SEO, paid advertising, and social media marketing to drive
            high-quality student leads and increase admission rates.
          </p>

          <p>
            Whether you are promoting academic programs or online courses, our
            strategies ensure maximum visibility and consistent enrollment
            growth.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Increase <span className="gradient-text">Admissions?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build a strategy that attracts and converts more students.
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
