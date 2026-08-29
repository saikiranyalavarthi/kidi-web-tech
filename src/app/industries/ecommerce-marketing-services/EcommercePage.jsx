import Link from "next/link";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  title:
    "Ecommerce Marketing Services in India | Ecommerce SEO & Digital Marketing",

  description:
    "KidiWebTech provides ecommerce marketing services in India including ecommerce SEO, Google Ads, Google Shopping, Meta Ads, conversion optimization, content marketing and WhatsApp marketing.",

  keywords: [
    "ecommerce marketing services India",
    "ecommerce marketing agency India",
    "ecommerce SEO services India",
    "ecommerce digital marketing agency India",
    "ecommerce SEO agency India",
    "Google Ads for ecommerce India",
    "Google Shopping Ads India",
    "Meta Ads for ecommerce India",
    "ecommerce social media marketing India",
    "ecommerce conversion rate optimization",
    "ecommerce content marketing India",
    "WhatsApp marketing ecommerce India",
    "Amazon marketing services India",
    "Flipkart marketing services India",
    "D2C marketing agency India",
    "KidiWebTech",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/ecommerce-marketing-services-india",
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

    url: "https://www.kidiwebtech.com/ecommerce-marketing-services-india",

    siteName: "KidiWebTech",

    title: "Ecommerce Marketing Services in India | KidiWebTech",

    description:
      "Grow your ecommerce business with SEO, Google Ads, Shopping Ads, Meta Ads, CRO, content marketing and retention strategies from KidiWebTech.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Marketing Services in India - KidiWebTech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ecommerce Marketing Services in India | KidiWebTech",

    description:
      "Ecommerce SEO, Google Ads, Meta Ads, CRO, content marketing and digital marketing services for Indian ecommerce brands.",

    images: ["https://www.kidiwebtech.com/og-image.jpg"],
  },
};

/* =========================================================
   BREADCRUMB SCHEMA
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
      name: "Ecommerce Marketing Services India",
      item: "https://www.kidiwebtech.com/ecommerce-marketing-services-india",
    },
  ],
};

/* =========================================================
   SERVICE SCHEMA
========================================================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://www.kidiwebtech.com/ecommerce-marketing-services-india#service",

  name: "Ecommerce Marketing Services in India",

  serviceType: [
    "Ecommerce Marketing",
    "Ecommerce SEO",
    "Google Ads",
    "Google Shopping Ads",
    "Meta Advertising",
    "Conversion Rate Optimization",
    "Social Media Marketing",
    "Content Marketing",
    "WhatsApp Marketing",
    "Marketplace Marketing",
  ],

  description:
    "Ecommerce marketing services in India covering SEO, paid advertising, Google Shopping, Meta Ads, conversion optimization, content marketing, retention marketing and marketplace marketing.",

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
    "@type": "Country",
    name: "India",
  },

  url: "https://www.kidiwebtech.com/ecommerce-marketing-services-india",
};

/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "What ecommerce marketing services does KidiWebTech provide?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "KidiWebTech provides ecommerce SEO, Google Ads, Google Shopping, Meta Ads, conversion rate optimization, social media marketing, content marketing, email and WhatsApp marketing, and marketplace marketing services.",
      },
    },

    {
      "@type": "Question",

      name: "How does ecommerce SEO help an online store?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Ecommerce SEO helps product and category pages become easier for search engines to discover and understand. It can improve organic visibility for relevant product, category and informational searches when supported by useful content and a technically sound website.",
      },
    },

    {
      "@type": "Question",

      name: "Do you manage Google Ads for ecommerce businesses?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. KidiWebTech provides Google Ads management for ecommerce businesses, including Search campaigns, Shopping campaigns and Performance Max campaigns, along with product feed and conversion tracking optimization.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide Meta Ads for ecommerce brands?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. We can develop Meta advertising strategies for ecommerce brands using Facebook and Instagram campaigns focused on awareness, consideration, remarketing and conversions.",
      },
    },

    {
      "@type": "Question",

      name: "How long does ecommerce SEO take to show results?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Ecommerce SEO is a long-term process. The time required depends on website authority, competition, technical condition, content quality, products, industry and the search terms being targeted. Rankings and organic traffic should be evaluated over time rather than based on a guaranteed timeframe.",
      },
    },

    {
      "@type": "Question",

      name: "Do you work with Shopify and WooCommerce stores?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Ecommerce marketing strategies can be implemented for Shopify, WooCommerce and other ecommerce platforms depending on the technical setup and business requirements.",
      },
    },
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function EcommercePage() {
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
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>Ecommerce Marketing Services India</span>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Ecommerce Marketing Agency in India
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Ecommerce Marketing Services in India
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
            KidiWebTech provides ecommerce marketing services for online stores
            and D2C brands across India. Our approach combines ecommerce SEO,
            Google Ads, Google Shopping, Meta Ads, conversion rate optimization,
            content marketing and customer retention strategies.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Get Free Ecommerce Strategy
            </Link>

            <Link
              href="/case-studies"
              className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition hover:border-blue-500"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ecommerce Marketing Agency for Indian Businesses
          </h2>

          <p className="leading-8 text-gray-700">
            Ecommerce marketing involves more than generating website traffic. A
            successful online store needs the right combination of organic
            search visibility, paid advertising, product presentation,
            conversion optimization and customer retention.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            KidiWebTech helps ecommerce businesses build a connected digital
            marketing strategy around their products, customers and business
            objectives. We work across search engines, paid advertising
            platforms, social media, content channels and ecommerce
            marketplaces.
          </p>
        </div>
      </section>

      {/* =====================================================
          CORE SERVICES
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-center text-3xl font-bold md:text-4xl">
            Ecommerce Marketing Services We Provide
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            Choose individual services or build a complete ecommerce marketing
            strategy based on your business requirements.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ecommerce SEO",
                description:
                  "Improve the organic visibility of product pages, category pages and ecommerce content through technical SEO, on-page optimization, internal linking and useful content.",
                href: "/seo-services-hyderabad",
              },

              {
                title: "Google Ads for Ecommerce",
                description:
                  "Manage Search, Shopping and Performance Max campaigns designed to connect your products with customers actively searching for relevant solutions.",
                href: "/google-ads-services",
              },

              {
                title: "Google Shopping Ads",
                description:
                  "Optimize product feeds, campaign structures and product information to improve the visibility of eligible products across Google Shopping surfaces.",
                href: "/google-shopping-ads",
              },

              {
                title: "Meta Ads for Ecommerce",
                description:
                  "Build Facebook and Instagram advertising campaigns for prospecting, remarketing, product promotion and conversion-focused campaigns.",
                href: "/social-media-marketing",
              },

              {
                title: "Conversion Rate Optimization",
                description:
                  "Improve product pages, navigation, checkout experiences, calls to action and customer journeys to make better use of existing website traffic.",
                href: "/conversion-rate-optimization",
              },

              {
                title: "Ecommerce Content Marketing",
                description:
                  "Create buying guides, product comparisons, educational articles and other content designed around customer search intent.",
                href: "/content-marketing",
              },

              {
                title: "WhatsApp Marketing",
                description:
                  "Use WhatsApp communication for customer updates, promotional campaigns, abandoned-cart journeys and retention activities where appropriate.",
                href: "/whatsapp-marketing",
              },

              {
                title: "Email Marketing",
                description:
                  "Build lifecycle email campaigns for welcome journeys, post-purchase communication, customer retention and win-back campaigns.",
                href: "/email-marketing",
              },

              {
                title: "Marketplace Marketing",
                description:
                  "Support product listing optimization and marketplace marketing strategies for platforms such as Amazon and Flipkart.",
                href: "/marketplace-marketing",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ECOMMERCE SEO
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ecommerce SEO Services in India
          </h2>

          <p className="leading-8 text-gray-700">
            Ecommerce SEO focuses on making product pages, category pages and
            supporting content accessible and understandable to search engines.
            Unlike a typical service website, ecommerce stores can contain
            hundreds or thousands of URLs, product variations and dynamically
            generated pages.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our ecommerce SEO approach can include technical audits, keyword
            research, product-page optimization, category-page optimization,
            internal linking, structured data, canonicalization, sitemap review
            and content strategy.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Technical SEO audit",
              "Product page optimization",
              "Category page optimization",
              "Keyword research and intent mapping",
              "Internal linking",
              "Canonical URL review",
              "XML sitemap review",
              "Structured data implementation",
              "Content strategy",
              "SEO performance reporting",
            ].map((item) => (
              <div key={item} className="rounded-lg border bg-white p-5">
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOGLE ADS
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Google Ads and Google Shopping for Ecommerce
          </h2>

          <p className="leading-8 text-gray-700">
            Paid search can help ecommerce businesses reach customers while they
            are actively searching for products. KidiWebTech can help structure
            ecommerce advertising campaigns around products, categories,
            customer intent and measurable conversion actions.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Google Shopping and Performance Max
          </h3>

          <p className="mt-4 leading-8 text-gray-700">
            Shopping campaigns can display eligible products with images, prices
            and other product information. Product feed quality is therefore an
            important part of ecommerce advertising. Product titles,
            descriptions, categories, identifiers, availability and pricing
            should be kept accurate and consistent.
          </p>

          <h3 className="mt-10 text-2xl font-bold">Search Ads for Ecommerce</h3>

          <p className="mt-4 leading-8 text-gray-700">
            Search campaigns can complement Shopping campaigns by targeting
            relevant branded, category and high-intent searches. Campaign
            structure, keyword selection, negative keywords, landing pages and
            conversion tracking should be reviewed regularly.
          </p>
        </div>
      </section>

      {/* =====================================================
          CRO
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ecommerce Conversion Rate Optimization
          </h2>

          <p className="leading-8 text-gray-700">
            Getting visitors to an ecommerce store is only one part of the
            customer journey. Conversion rate optimization focuses on reducing
            friction and making it easier for visitors to understand products,
            make decisions and complete purchases.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Product page layout and usability",
              "Product images and information",
              "Clear calls to action",
              "Trust and credibility elements",
              "Mobile shopping experience",
              "Navigation and category structure",
              "Cart and checkout experience",
              "Payment and delivery information",
              "A/B testing where appropriate",
              "Cart abandonment recovery",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL MEDIA
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Social Media Marketing for Ecommerce Brands
          </h2>

          <p className="leading-8 text-gray-700">
            Social platforms can help ecommerce brands introduce products,
            educate customers and bring existing audiences back to the store.
            Our ecommerce social media strategy can include content planning,
            paid campaigns, creative testing and remarketing.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Instagram",
                text: "Product content, Reels, campaigns and remarketing for relevant audiences.",
              },

              {
                title: "Facebook",
                text: "Paid campaigns, remarketing and product-focused advertising.",
              },

              {
                title: "YouTube",
                text: "Product demonstrations, educational videos, reviews and supporting video content.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RETENTION
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Email and WhatsApp Marketing for Ecommerce
          </h2>

          <p className="leading-8 text-gray-700">
            Retention marketing helps ecommerce businesses communicate with
            existing customers and subscribers. Depending on the business and
            customer journey, automated communication can support onboarding,
            order-related updates, post-purchase engagement, abandoned-cart
            recovery and win-back campaigns.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Welcome campaigns",
              "Abandoned cart communication",
              "Post-purchase communication",
              "Product recommendations",
              "Customer win-back campaigns",
              "Promotional campaigns",
              "Customer review requests",
              "Loyalty communication",
            ].map((item) => (
              <div key={item} className="rounded-lg border bg-white p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKETPLACE
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Amazon, Flipkart and Marketplace Marketing
          </h2>

          <p className="leading-8 text-gray-700">
            Many Indian ecommerce businesses sell through both their own
            websites and online marketplaces. A multi-channel strategy can help
            brands manage product visibility across their own store and
            marketplace channels.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Marketplace support can include product listing optimization,
            titles, descriptions, product content, advertising management and
            performance analysis.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENT MARKETING
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ecommerce Content Marketing and SEO Content
          </h2>

          <p className="leading-8 text-gray-700">
            Useful content can help ecommerce websites reach customers at
            different stages of the buying journey. Instead of creating content
            only around broad keywords, we focus on questions, comparisons,
            buying considerations and product-related searches relevant to the
            target audience.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Buying guides",
              "Product comparisons",
              "How-to articles",
              "Product education",
              "Category content",
              "Frequently asked questions",
              "Video content ideas",
              "Informational search topics",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY KIDIWEBTECH
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-center text-3xl font-bold md:text-4xl">
            Why Choose KidiWebTech for Ecommerce Marketing?
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            We combine website, SEO, paid advertising and conversion-focused
            strategies so your marketing channels work together rather than
            operating in isolation.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ecommerce-Focused Strategy",
                text: "Marketing activities are planned around products, customers, search intent and ecommerce business goals.",
              },

              {
                title: "SEO and Paid Marketing",
                text: "Combine long-term organic visibility with paid campaigns when appropriate for your business.",
              },

              {
                title: "Conversion Focus",
                text: "Improve the customer journey instead of focusing only on traffic and impressions.",
              },

              {
                title: "India Market Understanding",
                text: "Strategies can be adapted to Indian customers, ecommerce platforms and local buying behaviour.",
              },

              {
                title: "Data and Reporting",
                text: "Use analytics and conversion data to identify opportunities and make informed marketing decisions.",
              },

              {
                title: "Flexible Services",
                text: "Choose individual ecommerce marketing services or combine multiple channels into a broader strategy.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions About Ecommerce Marketing
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "What ecommerce marketing services does KidiWebTech provide?",

                a: "KidiWebTech provides ecommerce SEO, Google Ads, Google Shopping, Meta Ads, conversion rate optimization, social media marketing, content marketing, email and WhatsApp marketing, and marketplace marketing.",
              },

              {
                q: "How does ecommerce SEO help an online store?",

                a: "Ecommerce SEO helps search engines discover and understand product pages, category pages and supporting content. A strong technical foundation and useful content can improve organic search visibility over time.",
              },

              {
                q: "Do you manage Google Ads for ecommerce businesses?",

                a: "Yes. We can manage Search, Shopping and Performance Max campaigns and help with product feed optimization, campaign structure and conversion tracking.",
              },

              {
                q: "Do you provide Meta Ads for ecommerce brands?",

                a: "Yes. We can create Facebook and Instagram advertising strategies for prospecting, remarketing and conversion-focused campaigns.",
              },

              {
                q: "How long does ecommerce SEO take?",

                a: "Ecommerce SEO is a long-term process. Results depend on competition, website authority, technical condition, content quality, products and the search terms being targeted.",
              },

              {
                q: "Do you work with Shopify and WooCommerce?",

                a: "Yes. Ecommerce marketing strategies can be implemented for Shopify, WooCommerce and other ecommerce platforms depending on the website's technical setup and requirements.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-7">
                <h3 className="text-xl font-semibold">{faq.q}</h3>

                <p className="mt-3 leading-7 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL LINKS
      ===================================================== */}

      <section className="border-t px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold">
            Explore KidiWebTech Services
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/seo-services-hyderabad"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              SEO Services Hyderabad
            </Link>

            <Link
              href="/digital-marketing-company-hyderabad"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Digital Marketing Hyderabad
            </Link>

            <Link
              href="/website-design"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Website Design
            </Link>

            <Link
              href="/web-development"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Web Development
            </Link>

            <Link
              href="/case-studies"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Contact KidiWebTech
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Grow Your Ecommerce Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-50">
            Get a practical ecommerce marketing strategy based on your website,
            products, customers, competition and growth objectives.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Get Your Free Ecommerce Audit →
          </Link>
        </div>
      </section>
    </main>
  );
}
