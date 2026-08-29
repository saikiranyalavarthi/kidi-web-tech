// import Link from "next/link";

// export const metadata = {
//   title:
//     "Web Design Company Banjara Hills | Website Development Company Banjara Hills",
//   description:
//     "KidiWebTech provides professional website design, web development, ecommerce development, SEO and digital marketing services in Banjara Hills Hyderabad.",
// };

// export default function WebDesignBanjaraHills() {
//   return (
//     <main className="bg-white">
//       {/* Hero */}
//       <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <h1 className="text-5xl font-bold mb-6">
//             Web Design Company in Banjara Hills
//           </h1>

//           <p className="text-xl max-w-3xl">
//             KidiWebTech helps businesses in Banjara Hills build stunning,
//             high-performance websites that attract customers, generate leads,
//             and grow revenue online.
//           </p>

//           <div className="mt-8">
//             <Link
//               href="/contact"
//               className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold"
//             >
//               Request a Free Quote
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-6">
//             Professional Website Development Services
//           </h2>

//           <p className="text-gray-600 leading-8">
//             Our team specializes in designing responsive websites that help
//             local businesses, startups, healthcare clinics, restaurants,
//             educational institutions and corporate brands establish a strong
//             digital presence.
//           </p>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Our Web Design Services
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               "Business Website Design",
//               "Corporate Website Development",
//               "WordPress Website Development",
//               "Shopify Store Development",
//               "Ecommerce Website Design",
//               "Landing Page Design",
//               "Custom Web Applications",
//               "Website Maintenance",
//               "SEO-Friendly Website Development",
//             ].map((service) => (
//               <div key={service} className="bg-white rounded-xl p-6 shadow-lg">
//                 <h3 className="font-semibold text-lg">{service}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-10">
//             Why Businesses Choose KidiWebTech
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               "Modern UI/UX Design",
//               "Mobile Responsive Websites",
//               "SEO Optimized Structure",
//               "Fast Loading Pages",
//               "Affordable Pricing",
//               "Local Hyderabad Support",
//               "Custom Development Solutions",
//               "Conversion Focused Design",
//             ].map((item) => (
//               <div key={item} className="border p-5 rounded-lg">
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Local SEO */}
//       <section className="bg-purple-50 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-6">
//             Serving Businesses Across Banjara Hills
//           </h2>

//           <p className="text-gray-700 leading-8">
//             We work with premium brands, retail stores, healthcare providers,
//             restaurants, law firms, consultants, educational institutions and
//             startups throughout Banjara Hills and surrounding areas.
//           </p>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-10">
//             Benefits of Our Website Solutions
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "More Leads",
//               "Better Online Visibility",
//               "Improved Customer Trust",
//               "Higher Conversion Rates",
//               "Faster Website Speed",
//               "SEO-Friendly Architecture",
//             ].map((benefit) => (
//               <div key={benefit} className="bg-gray-50 p-6 rounded-lg">
//                 {benefit}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-10">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-8">
//             <div>
//               <h3 className="font-semibold text-xl">
//                 How long does website development take?
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Most websites are completed within 1 to 4 weeks depending on
//                 project requirements.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-xl">
//                 Do you provide SEO services?
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Yes. We offer Local SEO, Technical SEO and Digital Marketing
//                 services.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-xl">
//                 Can you redesign my existing website?
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Absolutely. We redesign outdated websites with modern UI and
//                 improved performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Internal Links */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4">
//           <Link href="/seo-services-hyderabad">SEO Services Hyderabad</Link>

//           <Link href="/digital-marketing-company-hyderabad">
//             Digital Marketing Hyderabad
//           </Link>

//           <Link href="/web-design-company-kukatpally">
//             Web Design Kukatpally
//           </Link>

//           <Link href="/web-design-company-madhapur">Web Design Madhapur</Link>
//         </div>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  title: "Web Design Company in Banjara Hills, Hyderabad",

  description:
    "KidiWebTech is a web design and website development company in Banjara Hills, Hyderabad. We create responsive, fast and SEO-friendly business, ecommerce and custom websites.",

  keywords: [
    "web design company Banjara Hills",
    "web design company in Banjara Hills",
    "website development company Banjara Hills",
    "website design Banjara Hills",
    "web development Banjara Hills",
    "website development Hyderabad",
    "web design company Hyderabad",
    "SEO friendly website development Banjara Hills",
    "ecommerce website development Banjara Hills",
    "business website design Banjara Hills",
    "KidiWebTech Banjara Hills",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/web-design-company-banjara-hills",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kidiwebtech.com/web-design-company-banjara-hills",
    siteName: "KidiWebTech",

    title: "Web Design Company in Banjara Hills, Hyderabad | KidiWebTech",

    description:
      "Professional web design and website development services in Banjara Hills, Hyderabad. Build a fast, responsive and SEO-friendly website with KidiWebTech.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KidiWebTech Web Design Company in Banjara Hills Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Design Company in Banjara Hills, Hyderabad",

    description:
      "Responsive website design, ecommerce development and SEO-friendly websites for businesses in Banjara Hills, Hyderabad.",

    images: ["https://www.kidiwebtech.com/og-image.jpg"],
  },
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.kidiwebtech.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Web Design Company Banjara Hills",
      item: "https://www.kidiwebtech.com/web-design-company-banjara-hills",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id": "https://www.kidiwebtech.com/web-design-company-banjara-hills#service",

  name: "Web Design and Website Development Services in Banjara Hills",

  serviceType: [
    "Web Design",
    "Website Development",
    "Ecommerce Website Development",
    "Responsive Web Design",
    "SEO-Friendly Website Development",
  ],

  description:
    "Professional web design and website development services for businesses in Banjara Hills, Hyderabad.",

  provider: {
    "@type": "ProfessionalService",
    name: "KidiWebTech",
    url: "https://www.kidiwebtech.com/",
    telephone: "+91-9390627367",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  },

  areaServed: {
    "@type": "Place",
    name: "Banjara Hills, Hyderabad, Telangana, India",
  },

  url: "https://www.kidiwebtech.com/web-design-company-banjara-hills",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Which web design services do you provide in Banjara Hills?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "KidiWebTech provides business website design, corporate website development, ecommerce websites, landing pages, custom web applications, responsive web design and SEO-friendly website development in Banjara Hills, Hyderabad.",
      },
    },

    {
      "@type": "Question",
      name: "How long does it take to develop a website?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "Most business websites can be completed within 1 to 4 weeks depending on the number of pages, features, content and project requirements.",
      },
    },

    {
      "@type": "Question",
      name: "Do you provide SEO along with website development?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. KidiWebTech can build websites with an SEO-friendly structure and also provides technical SEO, on-page SEO and local SEO services.",
      },
    },

    {
      "@type": "Question",
      name: "Can you redesign an existing website?",

      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can redesign outdated websites with modern UI, responsive layouts, improved performance and an SEO-friendly website structure.",
      },
    },
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function WebDesignBanjaraHills() {
  return (
    <main className="bg-white text-gray-900">
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-6 pt-6 text-sm text-gray-500"
      >
        <Link href="/" className="hover:text-purple-700">
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>Web Design Company Banjara Hills</span>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-100">
            Web Design & Development in Banjara Hills
          </p>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Web Design Company in Banjara Hills, Hyderabad
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-purple-50 md:text-xl">
            KidiWebTech creates modern, responsive and SEO-friendly websites for
            businesses in Banjara Hills and across Hyderabad. We design websites
            that combine strong user experience, performance, mobile
            responsiveness and conversion-focused layouts.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 transition hover:bg-gray-100"
            >
              Request a Free Quote
            </Link>

            <Link
              href="/web-development"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-purple-700"
            >
              Explore Web Development
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Professional Website Design Services in Banjara Hills
            </h2>

            <p className="leading-8 text-gray-600">
              A professional website is often the first interaction customers
              have with a business. KidiWebTech provides website design and
              development services for businesses in Banjara Hills, Hyderabad,
              with a focus on clear navigation, responsive design, performance
              and search engine visibility.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              We work with startups, local businesses, professional services,
              restaurants, healthcare businesses, educational institutions,
              ecommerce businesses and established companies that need a new
              website or want to improve an existing online presence.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Web Design and Development Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Business Website Design",
                description:
                  "Professional websites designed to present your business clearly and generate enquiries from potential customers.",
              },
              {
                title: "Corporate Website Development",
                description:
                  "Modern corporate websites with responsive layouts, structured content and scalable development.",
              },
              {
                title: "Ecommerce Website Development",
                description:
                  "Online stores designed to showcase products, improve customer experience and support online sales.",
              },
              {
                title: "Landing Page Design",
                description:
                  "Conversion-focused landing pages for advertising campaigns, products, services and lead generation.",
              },
              {
                title: "Custom Web Applications",
                description:
                  "Custom web solutions built around specific business workflows and requirements.",
              },
              {
                title: "SEO-Friendly Website Development",
                description:
                  "Websites developed with clean structure, responsive design, performance and search visibility in mind.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Modern Website Development for Hyderabad Businesses
            </h2>

            <p className="leading-8 text-gray-600">
              Depending on the project requirements, KidiWebTech can develop
              websites using modern web technologies such as Next.js and
              React.js. Our development approach focuses on responsive layouts,
              fast-loading pages, maintainable code and a website structure that
              is easy for users and search engines to understand.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nextjs-development"
                className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-100"
              >
                Next.js Development
              </Link>

              <Link
                href="/reactjs-development"
                className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-100"
              >
                React.js Development
              </Link>

              <Link
                href="/website-design"
                className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-100"
              >
                Website Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY KIDIWEBTECH
      ===================================================== */}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Why Choose KidiWebTech for Web Design?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Responsive website design for mobile, tablet and desktop",
              "SEO-friendly website structure",
              "Fast-loading and performance-focused pages",
              "Modern UI and user experience",
              "Conversion-focused website layouts",
              "Custom website development",
              "Website redesign and improvements",
              "Support for businesses in Hyderabad and Telangana",
            ].map((item) => (
              <div key={item} className="rounded-lg border bg-white p-5">
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BANJARA HILLS LOCAL CONTENT
      ===================================================== */}

      <section className="bg-purple-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Web Design Services for Businesses in Banjara Hills
            </h2>

            <p className="leading-8 text-gray-700">
              Banjara Hills is one of Hyderabad's established commercial and
              residential areas, with businesses across retail, hospitality,
              healthcare, professional services, restaurants, education and
              other industries. A well-designed website can help these
              businesses communicate their services, build credibility and make
              it easier for potential customers to get in touch.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              KidiWebTech provides website design and development solutions for
              businesses located in Banjara Hills and nearby parts of Hyderabad.
              We also work with businesses targeting customers throughout
              Telangana and India.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO SECTION
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              SEO-Friendly Website Development in Banjara Hills
            </h2>

            <p className="leading-8 text-gray-600">
              Website design and SEO work together. A visually attractive
              website also needs a clear structure that search engines can
              understand. Our development approach considers page structure,
              headings, internal links, responsive design, performance and
              useful content.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Businesses that need ongoing search engine optimization can also
              use our{" "}
              <Link
                href="/seo-services-hyderabad"
                className="font-semibold text-purple-700 underline"
              >
                SEO services in Hyderabad
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Benefits of a Professional Business Website
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Build customer trust",
              "Generate more enquiries",
              "Improve online visibility",
              "Provide a better mobile experience",
              "Improve website performance",
              "Create a stronger brand presence",
            ].map((benefit) => (
              <div key={benefit} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                Which web design services do you provide in Banjara Hills?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                KidiWebTech provides business website design, corporate
                websites, ecommerce websites, landing pages, custom web
                applications, responsive web design and SEO-friendly website
                development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How long does it take to develop a website?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Most business websites can be completed within 1 to 4 weeks
                depending on the pages, features, content and project
                requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide SEO with website development?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. We can build websites with an SEO-friendly structure and
                provide technical SEO, on-page SEO and local SEO services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you redesign my existing website?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. We can redesign outdated websites with a modern interface,
                responsive layouts, improved performance and a better content
                structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL LINKS
      ===================================================== */}

      <section className="border-t py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-2xl font-bold">Explore Our Services</h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/seo-services-hyderabad"
              className="rounded-lg border px-5 py-3 hover:bg-gray-100"
            >
              SEO Services Hyderabad
            </Link>

            <Link
              href="/digital-marketing-company-hyderabad"
              className="rounded-lg border px-5 py-3 hover:bg-gray-100"
            >
              Digital Marketing Hyderabad
            </Link>

            <Link
              href="/web-design-company-kukatpally"
              className="rounded-lg border px-5 py-3 hover:bg-gray-100"
            >
              Web Design Kukatpally
            </Link>

            <Link
              href="/web-design-company-madhapur"
              className="rounded-lg border px-5 py-3 hover:bg-gray-100"
            >
              Web Design Madhapur
            </Link>

            <Link
              href="/web-development"
              className="rounded-lg border px-5 py-3 hover:bg-gray-100"
            >
              Web Development
            </Link>

            <Link
              href="/website-design"
              className="rounded-lg border px-5 py-3 hover:bg-gray-100"
            >
              Website Design
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need a Website for Your Banjara Hills Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-purple-100">
            Talk to KidiWebTech about your website design, development or SEO
            requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-purple-700 hover:bg-gray-100"
          >
            Contact KidiWebTech
          </Link>
        </div>
      </section>
    </main>
  );
}
