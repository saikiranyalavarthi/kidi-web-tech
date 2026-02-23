// pages/about.jsx

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import ExperienceSection from "../Components/ExperienceSection";

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About KidiWebTech",
    url: "https://www.kidiwebtech.com/about",
    description:
      "KidiWebTech is a digital marketing and web development agency in Hyderabad helping businesses grow with SEO, Google Ads, social media marketing and high-converting websites.",
  };

  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>
          About KidiWebTech | Digital Marketing & Web Development Agency in Hyderabad
        </title>

        <meta
          name="description"
          content="Learn about KidiWebTech – a results-driven digital marketing agency in Hyderabad offering SEO, website development, Google Ads management, and social media marketing services."
        />

        <meta
          name="keywords"
          content="About KidiWebTech, Digital Marketing Agency Hyderabad, SEO Company in Hyderabad, Web Development Company India, Google Ads Agency Hyderabad"
        />

        <link rel="canonical" href="https://www.kidiwebtech.com/about" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About KidiWebTech – Digital Growth Experts in Hyderabad"
        />
        <meta
          property="og:description"
          content="Discover how KidiWebTech helps businesses grow through SEO, web development, Google Ads and performance marketing."
        />
        <meta
          property="og:url"
          content="https://www.kidiwebtech.com/about"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ABOUT PAGE SCHEMA */}
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          About <span className="gradient-text">KidiWebTech</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Your trusted digital marketing and web development partner in Hyderabad.
        </p>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Who <span className="gradient-text">We Are</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <span className="gradient-text font-semibold">KidiWebTech</span> is a
              Hyderabad-based digital marketing agency specializing in
              <Link href="/services/seo" className="underline ml-1">
                SEO services
              </Link>,
              <Link href="/services/web-development" className="underline ml-1">
                website development
              </Link>,
              <Link href="/services/ppc" className="underline ml-1">
                Google Ads management
              </Link>, and
              <Link href="/services/social-media-marketing" className="underline ml-1">
                social media marketing
              </Link>.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              We help startups, local businesses, and enterprises build strong
              digital foundations that increase search visibility, generate
              qualified leads, and drive measurable revenue growth.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our team combines technical expertise, creative strategy, and
              performance-driven marketing to deliver long-term business success.
            </p>
          </div>

          {/* VIDEO */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KdV0x72Ay5U"
                title="About KidiWebTech - Digital Marketing Agency"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <ExperienceSection />

      {/* ================= MISSION ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Our <span className="gradient-text">Mission</span>
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          To empower businesses with scalable digital solutions that increase
          search rankings, drive traffic, generate leads, and build sustainable growth.
        </p>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 px-6 md:px-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-16">
          Why <span className="gradient-text">Choose KidiWebTech</span>
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Performance-Driven Strategy",
              desc: "Every campaign is built to deliver measurable ROI and business growth.",
            },
            {
              title: "SEO-First Approach",
              desc: "All websites and marketing campaigns are optimized for search visibility.",
            },
            {
              title: "Transparent Communication",
              desc: "We provide clear reporting and honest strategy recommendations.",
            },
            {
              title: "Full-Service Expertise",
              desc: "From SEO to web development, we manage your entire digital presence.",
            },
            {
              title: "Local & National Reach",
              desc: "Helping businesses rank in Hyderabad and across India.",
            },
            {
              title: "Long-Term Partnerships",
              desc: "We focus on building relationships, not just delivering projects.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60" />
              <div className="relative bg-black rounded-2xl m-[1.5px] p-8">
                <h3 className="text-xl font-bold gradient-text mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}