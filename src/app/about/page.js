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
    <div className="bg-black text-white font-sans min-h-screen">
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
      <section className="py-20 px-6 text-center">
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-4">
          Digital Marketing Agency · Hyderabad
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          About KidiWebTech –{" "}
          <span className="text-teal-400">Digital Marketing</span> Experts
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          We help startups, small businesses, and enterprises in Hyderabad grow
          online with SEO, web development, and data-driven digital marketing
          strategies that deliver real, measurable results.
        </p>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="border-y border-gray-800 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Clients Served", value: "150+" },
            { label: "Years of Experience", value: "5+" },
            { label: "Projects Delivered", value: "300+" },
            { label: "Cities Across India", value: "10+" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-teal-400">{value}</p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto space-y-12 text-gray-300 leading-relaxed">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
            <p className="mb-4">
              KidiWebTech is a leading digital marketing agency in Hyderabad,
              Telangana, specializing in SEO services, website development,
              Google Ads, and social media marketing. We help businesses build a
              strong online presence and achieve long-term growth.
            </p>
            <p>
              As a trusted web development company in India, we create fast,
              responsive, and SEO-friendly websites that rank higher on Google
              and convert visitors into customers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to help businesses in Hyderabad and across India
              grow online using powerful digital marketing strategies. We aim to
              build long-term partnerships and deliver consistent, measurable
              results.
            </p>
            <p>
              We don't just build websites — we create digital assets that
              generate revenue through strategic SEO, paid ads, and conversion
              optimization.
            </p>
          </div>
        </div>

        {/* Services */}
        {/* Services */}
        <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-teal-400 uppercase tracking-widest text-sm">
                Our Services
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Digital Marketing & Web Development Services
              </h2>

              <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                Helping businesses across Hyderabad improve rankings, generate
                quality leads and increase online revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "SEO Services Hyderabad",
                  href: "/seo-services-hyderabad",
                  desc: "Improve Google rankings and increase organic traffic.",
                },
                {
                  title: "Local SEO Hyderabad",
                  href: "/local-seo-services-hyderabad",
                  desc: "Rank higher in local searches and Google Maps.",
                },
                {
                  title: "Website Development",
                  href: "/web-development-company-hyderabad",
                  desc: "Professional websites designed for conversions.",
                },
                {
                  title: "Google Ads Hyderabad",
                  href: "/google-ads-agency-hyderabad",
                  desc: "Generate leads using ROI-focused ad campaigns.",
                },
                {
                  title: "Web Design Hitech City",
                  href: "/web-design-company-hitech-city",
                  desc: "Modern websites for startups and IT companies.",
                },
                {
                  title: "Web Design Madhapur",
                  href: "/web-design-company-madhapur",
                  desc: "Custom website design services in Madhapur.",
                },
                {
                  title: "Web Design Kukatpally",
                  href: "/web-design-company-kukatpally",
                  desc: "SEO-friendly websites for local businesses.",
                },
                {
                  title: "Web Design Secunderabad",
                  href: "/web-design-company-secunderabad",
                  desc: "Responsive websites built for growth.",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-gray-900 border border-gray-800 hover:border-teal-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-teal-400">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7">
                    {service.desc}
                  </p>

                  <span className="inline-block mt-4 text-teal-400 text-sm">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Choose KidiWebTech?
          </h2>
          <ul className="space-y-3">
            {[
              "Performance-driven approach focused on real business results",
              "SEO-first strategy integrated into every website we build",
              "Experienced team with 5+ years in digital marketing",
              "Transparent reporting and regular performance updates",
              "Custom solutions tailored to your industry and goals",
            ].map((point) => (
              <li key={point} className="flex gap-3 items-start">
                <span className="text-teal-400 mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
<section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-white mb-12">
      Areas We Serve In Hyderabad
    </h2>

    <div className="grid md:grid-cols-3 gap-5">

      {[
        "/web-design-company-hitech-city",
        "/web-design-company-madhapur",
        "/web-design-company-kukatpally",
        "/web-design-company-banjara-hills",
        "/web-design-company-secunderabad",
        "/seo-services-hyderabad"
      ].map((link) => (
        <Link
          key={link}
          href={link}
          className="bg-gray-900 border border-gray-800 hover:border-teal-500 p-5 rounded-xl text-center"
        >
          {link.replaceAll("/", "").replaceAll("-", " ")}
        </Link>
      ))}

    </div>

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
