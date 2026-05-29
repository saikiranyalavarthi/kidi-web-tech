// pages/about.jsx

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function About() {
  // ── SCHEMA: FAQPage ──────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does KidiWebTech provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KidiWebTech provides SEO services, web development, Google Ads management, and social media marketing in Hyderabad.",
        },
      },
      {
        "@type": "Question",
        name: "Where is KidiWebTech located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KidiWebTech is based in Hyderabad, Telangana, India.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose KidiWebTech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on performance-driven marketing, SEO-first strategy, and high-converting website development to help businesses grow online.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer Google Ads management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, KidiWebTech offers Google Ads management services to help businesses in Hyderabad run high-ROI paid search campaigns.",
        },
      },
    ],
  };

  // ── SCHEMA: Organization ─────────────────────────────────────────
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KidiWebTech",
    url: "https://www.kidiwebtech.com",
    logo: "https://www.kidiwebtech.com/logo.png",
    description:
      "KidiWebTech is a digital marketing agency in Hyderabad offering SEO, web development, Google Ads, and social media marketing.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/kidiwebtech",
      "https://twitter.com/kidiwebtech",
      "https://www.facebook.com/kidiwebtech",
    ],
  };

  // ── SCHEMA: BreadcrumbList ───────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.kidiwebtech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.kidiwebtech.com/about",
      },
    ],
  };

  const faqs = [
    {
      q: "What services does KidiWebTech provide?",
      a: "We offer SEO services, website development, Google Ads management, and social media marketing.",
    },
    {
      q: "Where are you located?",
      a: "We are based in Hyderabad, Telangana, India.",
    },
    {
      q: "Do you offer SEO services?",
      a: "Yes, we provide complete SEO services including on-page, off-page, and technical SEO to improve rankings and organic traffic.",
    },
    {
      q: "Do you manage Google Ads?",
      a: "Yes, we run and optimize Google Ads campaigns to maximize ROI for businesses across Hyderabad and India.",
    },
  ];

  return (
    <div className="bg-white text-blue-700 font-sans min-h-screen">
      {/* ── SEO HEAD ─────────────────────────────────────────────── */}
      <Head>
        {/* Primary */}
        <title>
          About KidiWebTech | Best Digital Marketing Agency in Hyderabad
        </title>
        <meta
          name="description"
          content="KidiWebTech is a leading digital marketing agency in Hyderabad offering SEO services, web development, Google Ads management, and social media marketing to help businesses grow online."
        />
        <meta
          name="keywords"
          content="digital marketing agency Hyderabad, SEO services Hyderabad, web development company India, Google Ads agency Hyderabad, social media marketing Hyderabad"
        />

        {/* Indexing */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.kidiwebtech.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kidiwebtech.com/about" />
        <meta
          property="og:title"
          content="About KidiWebTech | Best Digital Marketing Agency in Hyderabad"
        />
        <meta
          property="og:description"
          content="Discover how KidiWebTech helps businesses grow online with SEO, web development, and digital marketing in Hyderabad."
        />
        <meta
          property="og:image"
          content="https://www.kidiwebtech.com/og-about.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="KidiWebTech" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kidiwebtech" />
        <meta
          name="twitter:title"
          content="About KidiWebTech | Digital Marketing Agency Hyderabad"
        />
        <meta
          name="twitter:description"
          content="KidiWebTech – SEO, web development, and Google Ads experts in Hyderabad."
        />
        <meta
          name="twitter:image"
          content="https://www.kidiwebtech.com/og-about.jpg"
        />

        {/* Geo targeting */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />

        {/* Author */}
        <meta name="author" content="KidiWebTech" />
      </Head>

      {/* ── STRUCTURED DATA ──────────────────────────────────────── */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── BREADCRUMB (visible) ──────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="px-6 pt-6 text-sm text-gray-500">
        <ol className="flex gap-2 max-w-6xl mx-auto">
          <li>
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
          </li>
          <li className="text-gray-700">/</li>
          <li className="text-gray-400" aria-current="page">
            About
          </li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            Hyderabad SEO & Web Development Experts
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            About
            <span className="block text-blue-600">KidiWebTech</span>
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            KidiWebTech is a leading SEO company, website development company
            and digital marketing agency in Hyderabad helping businesses
            increase visibility, generate leads and grow revenue online.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/portfolio"
              className="border border-blue-200 hover:border-blue-600 px-8 py-4 rounded-xl text-blue-700"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-6">
          ```
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                value: "150+",
                label: "Happy Clients",
              },
              {
                value: "300+",
                label: "Projects Completed",
              },
              {
                value: "5+",
                label: "Years Experience",
              },
              {
                value: "100%",
                label: "Client Satisfaction",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {item.value}
                </h3>

                <p className="text-slate-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          ```
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          ```
          {/* Who We Are */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Who We Are
            </h2>

            <p className="text-slate-600 leading-8 mb-4">
              KidiWebTech is a leading SEO company and web development agency in
              Hyderabad helping businesses improve their online visibility,
              attract more customers and increase revenue.
            </p>

            <p className="text-slate-600 leading-8">
              We specialize in Website Development, SEO Services, Google Ads
              Management, Ecommerce Development, Local SEO and Digital Marketing
              solutions tailored for startups, small businesses and enterprises.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-cyan-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-8 mb-4">
              Our mission is to help businesses across Hyderabad establish a
              strong digital presence through SEO-driven marketing and
              conversion-focused websites.
            </p>

            <p className="text-slate-600 leading-8">
              We focus on delivering measurable growth through Local SEO, Search
              Engine Optimization, Website Design, Google Ads Campaigns and
              strategic digital marketing.
            </p>
          </div>
          ```
        </div>

        {/* Why Choose Us */}

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose KidiWebTech?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-2">SEO Experts</h3>
              <p className="text-blue-100">
                Proven SEO strategies that improve rankings.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Custom Websites</h3>
              <p className="text-blue-100">
                Fast, responsive and conversion-focused websites.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Google Ads</h3>
              <p className="text-blue-100">
                High-converting ad campaigns for business growth.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Local SEO</h3>
              <p className="text-blue-100">
                Dominate local search results in Hyderabad.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        {/* Services */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            ```
            <div className="text-center mb-16">
              <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
                Our Services
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                SEO, Web Development & Digital Marketing Services
              </h2>

              <p className="text-slate-600 mt-6 max-w-3xl mx-auto">
                Helping businesses across Hyderabad improve search rankings,
                generate quality leads and increase revenue through strategic
                digital marketing solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "SEO Services Hyderabad",
                  href: "/seo-services-hyderabad",
                  desc: "Improve Google rankings and organic visibility.",
                },
                {
                  title: "Local SEO Hyderabad",
                  href: "/local-seo-services-hyderabad",
                  desc: "Dominate local search results and Google Maps.",
                },
                {
                  title: "Website Development",
                  href: "/website-development-services",
                  desc: "Fast, responsive and SEO-friendly websites.",
                },
                {
                  title: "Google Ads Hyderabad",
                  href: "/google-ads-agency",
                  desc: "Generate leads with high-converting campaigns.",
                },
                {
                  title: "Web Design Hitech City",
                  href: "/web-design-company-hitech-city",
                  desc: "Professional websites for startups and IT companies.",
                },
                {
                  title: "Web Design Madhapur",
                  href: "/web-design-company-madhapur",
                  desc: "Custom website design for growing businesses.",
                },
                {
                  title: "Web Design Kukatpally",
                  href: "/web-design-company-kukatpally",
                  desc: "Modern business websites that convert.",
                },
                {
                  title: "Web Design Secunderabad",
                  href: "/web-design-company-secunderabad",
                  desc: "SEO-focused websites designed for growth.",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white border border-blue-100 hover:border-blue-500 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-slate-900 font-bold text-xl mb-3 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-7">
                    {service.desc}
                  </p>

                  <span className="inline-block mt-5 text-blue-600 font-medium">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
            ```
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            ```
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900">
                Why Choose KidiWebTech?
              </h2>

              <p className="text-slate-600 mt-4">
                Trusted SEO and Website Development Company in Hyderabad
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                "SEO Experts",
                "Custom Websites",
                "Google Ads Specialists",
                "Local SEO Experts",
                "24/7 Support",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-blue-50 rounded-2xl p-6 text-center"
                >
                  <h3 className="font-bold text-slate-900">{item}</h3>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            ```
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
              Areas We Serve In Hyderabad
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                "Hitech City",
                "Madhapur",
                "Kukatpally",
                "Banjara Hills",
                "Secunderabad",
                "Hyderabad SEO Services",
              ].map((area) => (
                <div
                  key={area}
                  className="bg-white border border-blue-100 hover:border-blue-500 p-5 rounded-2xl text-center shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
            ```
          </div>
      </section>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">{q}</h3>
                <p className="text-gray-400 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-gray-400 mb-8">
          Talk to our digital marketing experts in Hyderabad today.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
        >
          Get a Free Consultation
        </Link>
      </section>
    </div>
  );
}
