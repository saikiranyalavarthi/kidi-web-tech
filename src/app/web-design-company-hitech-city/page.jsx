import Link from "next/link";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  title: "Web Design Company in Hitech City, Hyderabad",

  description:
    "KidiWebTech is a web design and website development company in Hitech City, Hyderabad. We build responsive, fast and SEO-friendly business, ecommerce and custom websites for startups and businesses.",

  keywords: [
    "web design company Hitech City",
    "web design company in Hitech City",
    "website development company Hitech City",
    "website designers Hitech City",
    "web development Hitech City",
    "website design Hitech City Hyderabad",
    "web development company Hyderabad",
    "website development Hyderabad",
    "ecommerce website development Hitech City",
    "WordPress development Hitech City",
    "SEO friendly website development Hitech City",
    "business website design Hitech City",
    "KidiWebTech Hitech City",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/web-design-company-hitech-city",
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

    url: "https://www.kidiwebtech.com/web-design-company-hitech-city",

    siteName: "KidiWebTech",

    title: "Web Design Company in Hitech City, Hyderabad | KidiWebTech",

    description:
      "Professional web design and website development services in Hitech City, Hyderabad. KidiWebTech creates responsive, fast and SEO-friendly websites.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KidiWebTech Web Design Company in Hitech City Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Design Company in Hitech City, Hyderabad",

    description:
      "Responsive website design, ecommerce development and SEO-friendly websites for businesses in Hitech City, Hyderabad.",

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
      name: "Web Design Company Hitech City",
      item: "https://www.kidiwebtech.com/web-design-company-hitech-city",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id": "https://www.kidiwebtech.com/web-design-company-hitech-city#service",

  name: "Web Design and Website Development Services in Hitech City",

  serviceType: [
    "Web Design",
    "Website Development",
    "Ecommerce Website Development",
    "Responsive Web Design",
    "SEO-Friendly Website Development",
    "WordPress Development",
    "Shopify Development",
  ],

  description:
    "Professional web design and website development services for businesses in Hitech City, Hyderabad.",

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

    name: "Hitech City, Hyderabad, Telangana, India",
  },

  url: "https://www.kidiwebtech.com/web-design-company-hitech-city",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "How much does website design cost in Hitech City?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Website design costs depend on the number of pages, functionality, design requirements, integrations and business goals. KidiWebTech provides website solutions based on individual project requirements.",
      },
    },

    {
      "@type": "Question",

      name: "Which web design services does KidiWebTech provide in Hitech City?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "KidiWebTech provides business website design, corporate website development, ecommerce development, WordPress development, Shopify development, landing page design, website redesign and SEO-friendly website development.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide SEO services with website development?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. KidiWebTech provides technical SEO, on-page SEO, local SEO and digital marketing services, and websites can be developed with an SEO-friendly structure.",
      },
    },

    {
      "@type": "Question",

      name: "Can you redesign an existing website?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. KidiWebTech can redesign existing websites to improve their user experience, mobile responsiveness, performance, content structure and conversion potential.",
      },
    },
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function WebDesignHitechCity() {
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
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>Web Design Company Hitech City</span>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Web Design & Development in Hitech City
          </p>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Web Design Company in Hitech City, Hyderabad
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
            KidiWebTech provides professional web design and website development
            services in Hitech City, Hyderabad. We create responsive, fast and
            SEO-friendly websites for startups, IT companies, ecommerce
            businesses and growing brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
            >
              Get Free Quote
            </Link>

            <Link
              href="/portfolio"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              View Portfolio
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
              Website Development Company in Hitech City
            </h2>

            <p className="leading-8 text-gray-600">
              KidiWebTech helps businesses in Hitech City and Hyderabad
              establish a professional online presence through modern website
              design and development. We create websites that are responsive,
              easy to navigate, performance-focused and structured with search
              visibility in mind.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our website development solutions are suitable for startups,
              technology companies, professional services, ecommerce businesses,
              healthcare providers, educational organizations and local
              businesses. Each website is developed around the business goals,
              target audience and functionality required for the project.
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
            Web Design Services in Hitech City
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Business Website Design",
                description:
                  "Professional websites for businesses that need a clear online presence and an easy way for customers to learn about their services.",
              },

              {
                title: "Corporate Website Development",
                description:
                  "Modern corporate websites designed to communicate company services, expertise and brand information.",
              },

              {
                title: "Ecommerce Website Development",
                description:
                  "Responsive ecommerce websites designed to present products and provide a smooth online shopping experience.",
              },

              {
                title: "WordPress Development",
                description:
                  "WordPress websites for businesses that need a manageable content system and flexible website structure.",
              },

              {
                title: "Shopify Development",
                description:
                  "Shopify store development for businesses looking to establish or improve their ecommerce presence.",
              },

              {
                title: "Landing Page Design",
                description:
                  "Focused landing pages for products, services, campaigns and lead-generation activities.",
              },

              {
                title: "Website Redesign",
                description:
                  "Modern redesign solutions for outdated websites with improvements to layout, usability and responsiveness.",
              },

              {
                title: "Custom Web Applications",
                description:
                  "Custom web applications developed around specific business processes and requirements.",
              },

              {
                title: "SEO-Friendly Websites",
                description:
                  "Websites developed with clear page structure, responsive layouts, performance and search visibility in mind.",
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
              Modern Web Development for Hitech City Businesses
            </h2>

            <p className="leading-8 text-gray-600">
              Modern businesses need websites that work well across desktop,
              tablet and mobile devices. KidiWebTech focuses on responsive
              layouts, clean navigation, website performance and a structure
              that makes it easier for visitors and search engines to understand
              the website.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Depending on project requirements, we can work with modern
              technologies such as Next.js and React.js for business websites
              and custom web applications.
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
          WHY CHOOSE KIDIWEBTECH
      ===================================================== */}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Why Choose KidiWebTech?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Responsive website design",
              "SEO-friendly website structure",
              "Fast-loading pages",
              "Mobile-first user experience",
              "Modern UI and UX",
              "Custom development solutions",
              "Conversion-focused layouts",
              "Support for Hyderabad businesses",
            ].map((item) => (
              <div key={item} className="rounded-lg border bg-white p-5">
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HITECH CITY LOCAL SEO CONTENT
      ===================================================== */}

      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Website Design Services for Businesses in Hitech City
            </h2>

            <p className="leading-8 text-gray-700">
              Hitech City is an important technology and business area of
              Hyderabad, with software companies, startups, professional
              services, restaurants, healthcare providers, real estate
              businesses and other organizations serving customers locally and
              nationally.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              A professional website can help businesses in Hitech City
              communicate their services, establish credibility and make it
              easier for potential customers to contact them. KidiWebTech
              develops websites for businesses looking to improve their digital
              presence in Hitech City and throughout Hyderabad.
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
              SEO-Friendly Web Design in Hitech City
            </h2>

            <p className="leading-8 text-gray-600">
              A website should not only look professional; its content and
              structure should also make sense to search engines and visitors.
              Our development approach considers headings, page structure,
              internal links, responsive design, performance and useful website
              content.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              If you also need ongoing search engine optimization, you can
              explore our{" "}
              <Link
                href="/seo-services-hyderabad"
                className="font-semibold text-blue-700 underline"
              >
                SEO services in Hyderabad
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                How much does website design cost in Hitech City?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Website design costs depend on the number of pages,
                functionality, design requirements, integrations and business
                objectives. We provide project-specific pricing based on the
                required scope.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Which web design services do you provide?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                We provide business website design, corporate websites,
                ecommerce development, WordPress, Shopify, landing pages,
                website redesign and custom web development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide SEO services?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. KidiWebTech provides technical SEO, on-page SEO, local SEO
                and digital marketing services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you redesign my existing website?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. We can redesign existing websites to improve their design,
                mobile responsiveness, performance, usability and conversion
                potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL LINKS
      ===================================================== */}

      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-2xl font-bold">Related Services</h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/seo-services-hyderabad"
              className="rounded-lg border bg-white px-5 py-3 hover:bg-gray-50"
            >
              SEO Services Hyderabad
            </Link>

            <Link
              href="/digital-marketing-company-hyderabad"
              className="rounded-lg border bg-white px-5 py-3 hover:bg-gray-50"
            >
              Digital Marketing Hyderabad
            </Link>

            <Link
              href="/web-design-company-gachibowli"
              className="rounded-lg border bg-white px-5 py-3 hover:bg-gray-50"
            >
              Web Design Gachibowli
            </Link>

            <Link
              href="/web-design-company-banjara-hills"
              className="rounded-lg border bg-white px-5 py-3 hover:bg-gray-50"
            >
              Web Design Banjara Hills
            </Link>

            <Link
              href="/website-design-company-hyderabad"
              className="rounded-lg border bg-white px-5 py-3 hover:bg-gray-50"
            >
              Website Design Hyderabad
            </Link>

            <Link
              href="/web-development"
              className="rounded-lg border bg-white px-5 py-3 hover:bg-gray-50"
            >
              Web Development
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need a Website for Your Hitech City Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Talk to KidiWebTech about website design, website development,
            ecommerce or SEO requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 hover:bg-gray-100"
          >
            Contact KidiWebTech
          </Link>
        </div>
      </section>
    </main>
  );
}
