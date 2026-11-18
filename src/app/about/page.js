import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.kidiwebtech.com";

const services = [
  {
    title: "SEO Services in Hyderabad",
    href: "/seo-services-hyderabad",
    desc: "Improve organic visibility with technical SEO, on-page optimization, content strategy and link building.",
    icon: "📈",
  },
  {
    title: "Local SEO Services",
    href: "/local-seo-services-hyderabad",
    desc: "Help nearby customers discover your business through local search and Google Maps optimization.",
    icon: "📍",
  },
  {
    title: "Website Development",
    href: "/website-development-services",
    desc: "Build responsive, user-friendly and search-engine-friendly business websites.",
    icon: "💻",
  },
  {
    title: "Google Ads Management",
    href: "/google-ads-agency",
    desc: "Plan, launch and optimize paid search campaigns around your business goals.",
    icon: "🎯",
  },
  {
    title: "Web Design in Hitech City",
    href: "/web-design-company-hitech-city",
    desc: "Create professional website experiences for businesses in Hitech City.",
    icon: "🎨",
  },
  {
    title: "Web Design in Madhapur",
    href: "/web-design-company-madhapur",
    desc: "Design modern websites that communicate your brand and services clearly.",
    icon: "✨",
  },
  {
    title: "Web Design in Kukatpally",
    href: "/web-design-company-kukatpally",
    desc: "Develop responsive websites for businesses serving Kukatpally and nearby areas.",
    icon: "🌐",
  },
  {
    title: "Web Design in Secunderabad",
    href: "/web-design-company-secunderabad",
    desc: "Create professional digital experiences for businesses in Secunderabad.",
    icon: "🚀",
  },
];

const faqs = [
  {
    q: "What services does KidiWebTech provide?",
    a: "KidiWebTech provides website development, website design, SEO services, local SEO, Google Ads management and digital marketing solutions.",
  },
  {
    q: "Where is KidiWebTech located?",
    a: "KidiWebTech is based in Hyderabad, Telangana, India.",
  },
  {
    q: "Does KidiWebTech provide SEO services in Hyderabad?",
    a: "Yes. KidiWebTech provides SEO services including technical SEO, on-page SEO, off-page SEO and local SEO strategies for businesses.",
  },
  {
    q: "Does KidiWebTech develop business websites?",
    a: "Yes. KidiWebTech develops responsive business websites designed to communicate services, improve user experience and support business goals.",
  },
  {
    q: "Do you manage Google Ads campaigns?",
    a: "Yes. KidiWebTech offers Google Ads campaign setup, management and optimization services.",
  },
  {
    q: "Does KidiWebTech work with businesses outside Hyderabad?",
    a: "KidiWebTech is based in Hyderabad and can work with businesses in other locations. Contact the team to discuss your project requirements.",
  },
  {
    q: "How can I contact KidiWebTech?",
    a: "You can contact KidiWebTech through the website contact page or WhatsApp to discuss your website development and digital marketing requirements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "KidiWebTech",
  url: SITE_URL,
  logo: `${SITE_URL}/kidiwebtech-logo.png`,
  description:
    "KidiWebTech is a Hyderabad-based digital agency providing website development, SEO, Google Ads management and digital marketing services.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9390627367",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/about`,
    },
  ],
};

export default function About() {
  return (
    <>
      <Head>
        <title>
          About KidiWebTech | Website Development & SEO Agency Hyderabad
        </title>

        <meta
          name="description"
          content="Discover KidiWebTech, a Hyderabad-based digital agency offering website development, SEO services, local SEO, Google Ads management and digital marketing."
        />

        <meta
          name="keywords"
          content="About KidiWebTech, digital marketing agency Hyderabad, SEO company Hyderabad, website development company Hyderabad, web design Hyderabad"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link rel="canonical" href={`${SITE_URL}/about`} />

        <meta
          property="og:title"
          content="About KidiWebTech | Digital Agency in Hyderabad"
        />

        <meta
          property="og:description"
          content="Learn about KidiWebTech and our website development, SEO and digital marketing services for businesses."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/about`} />

        <meta property="og:image" content={`${SITE_URL}/og-about.jpg`} />

        <meta property="og:site_name" content="KidiWebTech" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About KidiWebTech | Digital Agency in Hyderabad"
        />
        <meta
          name="twitter:description"
          content="Website development, SEO and digital marketing solutions by KidiWebTech."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-about.jpg`} />

        <meta name="author" content="KidiWebTech" />
      </Head>

      {/* STRUCTURED DATA */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema),
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-white text-slate-800">
        {/* BREADCRUMB */}
        <nav
          aria-label="Breadcrumb"
          className="px-6 pt-6 text-sm text-gray-500"
        >
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition hover:text-blue-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-slate-700" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-28">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <span className="mb-6 inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              Digital Solutions for Growing Businesses
            </span>

            <h1 className="mb-7 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-7xl">
              About
              <span className="block text-blue-600">KidiWebTech</span>
            </h1>

            <p className="mx-auto max-w-4xl text-base leading-8 text-slate-600 md:text-xl">
              KidiWebTech is a digital agency based in Hyderabad, Telangana,
              India. We help businesses build their online presence through
              website development, search engine optimization, Google Ads and
              digital marketing solutions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/projects"
                className="rounded-xl border border-blue-200 bg-white px-8 py-4 font-semibold text-blue-700 transition hover:border-blue-600 hover:bg-blue-50"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Helping Businesses Build a Strong Digital Presence
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                KidiWebTech works with businesses looking to improve their
                digital presence, communicate their services and connect with
                potential customers online.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Our services bring together website design, custom website
                development, search engine optimization, local SEO, Google Ads
                and digital marketing. We focus on practical digital solutions
                based on each project&apos;s goals and requirements.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-800"
              >
                Discuss Your Project <span>→</span>
              </Link>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12">
              <div className="grid grid-cols-2 gap-5">
                {[
                  ["💻", "Website Development"],
                  ["📈", "SEO Services"],
                  ["🎯", "Google Ads"],
                  ["🌐", "Digital Marketing"],
                ].map(([icon, title]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="text-3xl">{icon}</span>
                    <h3 className="mt-4 text-sm font-bold text-slate-800 md:text-base">
                      {title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION AND APPROACH */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Our Purpose
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Our Mission & Approach
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                We focus on building useful digital experiences and helping
                businesses make informed decisions about their online growth.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition hover:shadow-xl md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                  🎯
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Our mission is to help businesses establish a clear and
                  effective digital presence through professional websites,
                  search visibility and digital marketing solutions.
                </p>
              </article>

              <article className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-sm transition hover:shadow-xl md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
                  🚀
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Our Approach
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  We begin by understanding business requirements, identifying
                  project goals and selecting suitable technologies and
                  marketing strategies. We focus on usability, responsiveness
                  and measurable project objectives.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Why KidiWebTech
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Digital Solutions Focused on Your Business Goals
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🔍",
                  title: "SEO-Focused Strategy",
                  desc: "Build search-friendly websites and improve organic visibility through structured SEO practices.",
                },
                {
                  icon: "📱",
                  title: "Responsive Websites",
                  desc: "Create website experiences that work across mobile phones, tablets and desktop screens.",
                },
                {
                  icon: "⚙️",
                  title: "Development Solutions",
                  desc: "Develop websites around your business requirements, content and project functionality.",
                },
                {
                  icon: "📊",
                  title: "Digital Marketing",
                  desc: "Use SEO and paid advertising strategies to reach relevant audiences online.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/15"
                >
                  <span className="text-4xl">{item.icon}</span>

                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-blue-50">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gradient-to-b from-white to-blue-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                What We Do
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Our Website Development, SEO & Digital Marketing Services
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Explore our services for website development, online visibility
                and digital marketing. Each solution can be discussed according
                to your business needs.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl"
                >
                  <span className="text-4xl">{service.icon}</span>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.desc}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3"
                  >
                    Learn More <span>→</span>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Our Services <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* WORKING PROCESS */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                How We Work
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Our Project Approach
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Understand",
                  desc: "We discuss your business, audience and project requirements.",
                },
                {
                  number: "02",
                  title: "Plan",
                  desc: "We define the project scope, structure and suitable strategy.",
                },
                {
                  number: "03",
                  title: "Develop",
                  desc: "We create and refine the website or digital marketing solution.",
                },
                {
                  number: "04",
                  title: "Launch",
                  desc: "We prepare the project for launch and discuss ongoing improvements.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm"
                >
                  <span className="text-4xl font-extrabold text-blue-200">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS WE SERVE */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Our Location
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Based in Hyderabad, Telangana
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                KidiWebTech is based in Hyderabad and works with businesses
                looking for website development, SEO and digital marketing
                solutions.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Hitech City",
                "Madhapur",
                "Kukatpally",
                "Banjara Hills",
                "Secunderabad",
                "Hyderabad",
              ].map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-blue-100 bg-white p-6 text-center font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600"
                >
                  📍 {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                FAQ
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-slate-600">
                Find answers about KidiWebTech and our digital services.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <article
                  key={faq.q}
                  className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 transition hover:border-blue-300"
                >
                  <h3 className="text-lg font-bold text-slate-900">{faq.q}</h3>

                  <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-20 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
              Let&apos;s Work Together
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Ready to Grow Your Business Online?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-50">
              Tell us about your business goals. Let&apos;s discuss a website
              development or digital marketing solution for your project.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Contact KidiWebTech
              </Link>

              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/50 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
