import Link from "next/link";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  title: "Web Design Company in Hitech City, Hyderabad | KidiWebTech",

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
    "Shopify development Hyderabad",
    "SEO friendly website development Hitech City",
    "business website design Hitech City",
    "responsive web design Hitech City",
    "custom web development Hitech City",
    "website redesign Hitech City",
    "landing page design Hyderabad",
    "web design agency near Hitech City",
    "best web design company Hitech City",
    "affordable website design Hitech City",
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
    "Custom Web Development",
    "Website Redesign",
    "Landing Page Design",
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

    {
      "@type": "Question",

      name: "How long does it take to design and develop a website?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "A typical business website takes 2 to 4 weeks, while ecommerce or custom web applications can take 4 to 8 weeks depending on scope, features and content readiness.",
      },
    },

    {
      "@type": "Question",

      name: "Do you build responsive websites?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Every website we develop is responsive and mobile-friendly, ensuring a consistent experience across desktop, tablet and mobile devices.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide website maintenance and support?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. We provide ongoing website maintenance, security updates, backups, performance monitoring and content updates based on your requirements.",
      },
    },

    {
      "@type": "Question",

      name: "Which technologies do you use for website development?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "We work with modern technologies including Next.js, React.js, WordPress, WooCommerce, Shopify, HTML, CSS, JavaScript, PHP and custom web application frameworks.",
      },
    },
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function WebDesignHitechCity() {
  return (
    <main className="bg-white text-black">
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
        className="mx-auto max-w-7xl px-6 pt-6 text-sm text-black"
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

      <section className="border-b border-gray-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Web Design &amp; Development in Hitech City
          </p>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-blue-700 md:text-6xl">
            Web Design Company in Hitech City, Hyderabad
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-black md:text-xl">
            KidiWebTech provides professional web design and website development
            services in Hitech City, Hyderabad. We create responsive, fast and
            SEO-friendly websites for startups, IT companies, ecommerce
            businesses and growing brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Get Free Quote
            </Link>

            <Link
              href="/portfolio"
              className="rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
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
            <h2 className="mb-6 text-3xl font-bold text-blue-700 md:text-4xl">
              Website Development Company in Hitech City
            </h2>

            <p className="leading-8 text-black">
              KidiWebTech helps businesses in Hitech City and Hyderabad
              establish a professional online presence through modern website
              design and development. We create websites that are responsive,
              easy to navigate, performance-focused and structured with search
              visibility in mind.
            </p>

            <p className="mt-5 leading-8 text-black">
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

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-700 md:text-4xl">
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
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-blue-700">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-black">
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

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-blue-700 md:text-4xl">
              Modern Web Development for Hitech City Businesses
            </h2>

            <p className="leading-8 text-black">
              Modern businesses need websites that work well across desktop,
              tablet and mobile devices. KidiWebTech focuses on responsive
              layouts, clean navigation, website performance and a structure
              that makes it easier for visitors and search engines to understand
              the website.
            </p>

            <p className="mt-5 leading-8 text-black">
              Depending on project requirements, we can work with modern
              technologies such as Next.js and React.js for business websites
              and custom web applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nextjs-development"
                className="rounded-lg border border-blue-700 px-5 py-3 font-medium text-blue-700 hover:bg-blue-50"
              >
                Next.js Development
              </Link>

              <Link
                href="/reactjs-development"
                className="rounded-lg border border-blue-700 px-5 py-3 font-medium text-blue-700 hover:bg-blue-50"
              >
                React.js Development
              </Link>

              <Link
                href="/website-design"
                className="rounded-lg border border-blue-700 px-5 py-3 font-medium text-blue-700 hover:bg-blue-50"
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

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-blue-700 md:text-4xl">
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
              <div
                key={item}
                className="rounded-lg border border-blue-700 bg-white p-5"
              >
                <span className="font-medium text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HITECH CITY LOCAL SEO CONTENT
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-blue-700 md:text-4xl">
              Website Design Services for Businesses in Hitech City
            </h2>

            <p className="leading-8 text-black">
              Hitech City is an important technology and business area of
              Hyderabad, with software companies, startups, professional
              services, restaurants, healthcare providers, real estate
              businesses and other organizations serving customers locally and
              nationally.
            </p>

            <p className="mt-5 leading-8 text-black">
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

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-blue-700 md:text-4xl">
              SEO-Friendly Web Design in Hitech City
            </h2>

            <p className="leading-8 text-black">
              A website should not only look professional; its content and
              structure should also make sense to search engines and visitors.
              Our development approach considers headings, page structure,
              internal links, responsive design, performance and useful website
              content.
            </p>

            <p className="mt-5 leading-8 text-black">
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
          LONG SEO CONTENT
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-blue-700 md:text-4xl">
            Complete Web Design and Website Development Guide for Hitech City
            Businesses
          </h2>

          <p className="leading-8 text-black">
            Choosing the right web design company in Hitech City is one of the
            most important decisions for any business. Your website is often the
            first point of contact between your brand and potential customers.
            Whether you run a startup in Hitech City, an IT services company in
            Madhapur, a restaurant in Gachibowli, a healthcare clinic in
            Kondapur, or an ecommerce brand serving customers across India, a
            professional website helps you build trust, generate leads and grow
            revenue.
          </p>

          <p className="mt-5 leading-8 text-black">
            KidiWebTech is a web design and website development company in
            Hitech City, Hyderabad. We help businesses create modern, responsive
            and SEO-friendly websites that are designed to perform. Our team
            works with startups, small businesses, enterprises, ecommerce brands
            and custom web application projects.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Why Your Business Needs a Professional Website in Hitech City
          </h2>

          <p className="leading-8 text-black">
            Hitech City is one of the most competitive business hubs in
            Hyderabad. Thousands of companies operate in and around Hitech City,
            Madhapur, Gachibowli, Kondapur, Jubilee Hills and Banjara Hills.
            Customers, clients and partners search online before choosing a
            business. If your website is outdated, slow or not mobile-friendly,
            you are likely losing opportunities to competitors.
          </p>

          <p className="mt-5 leading-8 text-black">
            A professional website helps you:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-black">
            <li>Build credibility and trust with customers</li>
            <li>Generate leads and inquiries 24/7</li>
            <li>Showcase your services, products and portfolio</li>
            <li>Rank higher on Google with SEO-friendly structure</li>
            <li>Provide a great experience on mobile and desktop</li>
            <li>Reduce dependency on marketplaces and third-party platforms</li>
            <li>Support sales, marketing and branding efforts</li>
          </ul>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Web Design Services We Offer in Hitech City
          </h2>

          <p className="leading-8 text-black">
            We provide end-to-end web design and development services for
            businesses in Hitech City and Hyderabad. Our services include
            business website design, corporate website development, ecommerce
            website development, WordPress development, Shopify development,
            landing page design, website redesign, custom web applications and
            SEO-friendly website development.
          </p>

          <p className="mt-5 leading-8 text-black">
            Every project starts with understanding your business, target
            audience, competitors and goals. We then create a website structure,
            design mockups and development plan that aligns with your
            objectives. After development, we test the website across devices,
            optimize performance and launch it with SEO best practices.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Responsive Web Design for Mobile-First Users
          </h2>

          <p className="leading-8 text-black">
            Most users in India browse websites on mobile devices. A responsive
            website automatically adjusts its layout, images and content for
            different screen sizes. This improves user experience, reduces
            bounce rates and helps with search engine rankings.
          </p>

          <p className="mt-5 leading-8 text-black">
            Our responsive web design services ensure your website looks and
            works perfectly on smartphones, tablets, laptops and desktops. We
            follow mobile-first design principles, use flexible grids and
            optimize touch interactions for a smooth browsing experience.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Ecommerce Website Development in Hitech City
          </h2>

          <p className="leading-8 text-black">
            If you sell products online, an ecommerce website can help you reach
            customers beyond Hyderabad. We build ecommerce websites with product
            catalogs, shopping carts, secure payment gateways, order management,
            shipping integration and customer accounts.
          </p>

          <p className="mt-5 leading-8 text-black">
            Our ecommerce development services include WooCommerce development,
            Shopify store development and custom ecommerce solutions. We focus
            on user experience, product presentation, checkout optimization and
            mobile responsiveness to increase conversions.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            WordPress Development in Hitech City
          </h2>

          <p className="leading-8 text-black">
            WordPress is one of the most popular content management systems in
            the world. It powers blogs, business websites, news portals and
            ecommerce stores. We provide WordPress development services for
            businesses that need a flexible, easy-to-manage website.
          </p>

          <p className="mt-5 leading-8 text-black">
            Our WordPress services include theme customization, plugin
            integration, WooCommerce setup, speed optimization, security
            hardening and ongoing maintenance. We build WordPress websites that
            are fast, secure and SEO-friendly.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Shopify Development for D2C Brands
          </h2>

          <p className="leading-8 text-black">
            Shopify is a leading ecommerce platform for D2C brands, retail
            businesses and startups. We help businesses in Hitech City and
            Hyderabad build Shopify stores with custom themes, product pages,
            payment integration, shipping setup and marketing integrations.
          </p>

          <p className="mt-5 leading-8 text-black">
            Whether you are launching a new online store or migrating from
            another platform, our Shopify development services can help you
            create a professional ecommerce presence.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Local SEO for Hitech City Businesses
          </h2>

          <p className="leading-8 text-black">
            Local SEO helps your business appear in Google searches when people
            search for services near Hitech City, Madhapur, Gachibowli, Kondapur
            or Hyderabad. We optimize your website and Google Business Profile
            for local keywords, location pages and customer reviews.
          </p>

          <p className="mt-5 leading-8 text-black">
            Our local SEO services include Google Business Profile optimization,
            local keyword research, citation building, review management and
            location-specific landing pages. This helps you attract customers
            who are actively searching for your services in your area.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Website Speed Optimization and Performance
          </h2>

          <p className="leading-8 text-black">
            Website speed affects user experience, conversion rates and search
            rankings. A slow website can frustrate visitors and increase bounce
            rates. We optimize images, minify code, enable caching, use CDNs and
            improve server response times to make your website faster.
          </p>

          <p className="mt-5 leading-8 text-black">
            Our performance optimization services help your website load quickly
            on mobile and desktop devices. This improves user satisfaction and
            supports SEO efforts.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Website Security and Maintenance
          </h2>

          <p className="leading-8 text-black">
            Website security is critical for protecting your business and
            customer data. We implement SSL certificates, secure authentication,
            regular backups, malware scanning and security updates. Our
            maintenance services keep your website updated, secure and running
            smoothly.
          </p>

          <p className="mt-5 leading-8 text-black">
            We offer ongoing website maintenance plans that include updates,
            backups, performance monitoring, bug fixes and content updates. This
            ensures your website remains reliable and secure over time.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Conversion Rate Optimization for Websites
          </h2>

          <p className="leading-8 text-black">
            A beautiful website is not enough if it does not convert visitors
            into leads or customers. We design websites with clear calls to
            action, simple forms, trust signals and user-friendly navigation. We
            also test and optimize landing pages to improve conversion rates.
          </p>

          <p className="mt-5 leading-8 text-black">
            Our CRO services include A/B testing, heatmap analysis, form
            optimization and content improvements. This helps you get more value
            from your existing traffic.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Industries We Serve in Hitech City and Hyderabad
          </h2>

          <p className="leading-8 text-black">
            We work with businesses across multiple industries, including
            information technology, SaaS, real estate, healthcare, education,
            ecommerce, retail, hospitality, professional services, finance,
            manufacturing and local businesses.
          </p>

          <p className="mt-5 leading-8 text-black">
            Whether you need a corporate website, an ecommerce store, a
            healthcare website, a real estate portal or a custom web
            application, our team can help you build the right solution.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Why Choose KidiWebTech as Your Web Design Partner
          </h2>

          <p className="leading-8 text-black">
            KidiWebTech is a professional web design and development company
            serving businesses in Hitech City, Hyderabad and across India. We
            combine creative design, clean development and SEO best practices to
            deliver websites that perform.
          </p>

          <p className="mt-5 leading-8 text-black">
            Our team focuses on understanding your business goals, delivering
            projects on time and providing ongoing support. We believe in
            transparent communication, quality work and measurable results.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-blue-700 md:text-4xl">
            Web Design Keywords and Services in Hitech City
          </h2>

          <p className="leading-8 text-black">
            Businesses searching for web design services in Hitech City often
            look for terms such as web design company in Hitech City, website
            development company Hitech City, website designers Hitech City, web
            development Hitech City, ecommerce website development Hitech City,
            WordPress development Hitech City, Shopify development Hyderabad,
            SEO-friendly website development Hitech City, responsive web design
            Hitech City, custom web development Hitech City, website redesign
            Hitech City and landing page design Hyderabad.
          </p>

          <p className="mt-5 leading-8 text-black">
            KidiWebTech provides all these services with a focus on quality,
            performance and search visibility. If you are looking for a reliable
            web design company in Hitech City, we can help you build a website
            that supports your business growth.
          </p>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-700 md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                How much does website design cost in Hitech City?
              </h3>

              <p className="mt-2 leading-7 text-black">
                Website design costs depend on the number of pages,
                functionality, design requirements, integrations and business
                objectives. We provide project-specific pricing based on the
                required scope.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Which web design services do you provide?
              </h3>

              <p className="mt-2 leading-7 text-black">
                We provide business website design, corporate websites,
                ecommerce development, WordPress, Shopify, landing pages,
                website redesign and custom web development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Do you provide SEO services?
              </h3>

              <p className="mt-2 leading-7 text-black">
                Yes. KidiWebTech provides technical SEO, on-page SEO, local SEO
                and digital marketing services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Can you redesign my existing website?
              </h3>

              <p className="mt-2 leading-7 text-black">
                Yes. We can redesign existing websites to improve their design,
                mobile responsiveness, performance, usability and conversion
                potential.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                How long does it take to design and develop a website?
              </h3>

              <p className="mt-2 leading-7 text-black">
                A typical business website takes 2 to 4 weeks, while ecommerce
                or custom web applications can take 4 to 8 weeks depending on
                scope, features and content readiness.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Do you build responsive websites?
              </h3>

              <p className="mt-2 leading-7 text-black">
                Yes. Every website we develop is responsive and mobile-friendly,
                ensuring a consistent experience across desktop, tablet and
                mobile devices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Do you provide website maintenance and support?
              </h3>

              <p className="mt-2 leading-7 text-black">
                Yes. We provide ongoing website maintenance, security updates,
                backups, performance monitoring and content updates based on
                your requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Which technologies do you use for website development?
              </h3>

              <p className="mt-2 leading-7 text-black">
                We work with modern technologies including Next.js, React.js,
                WordPress, WooCommerce, Shopify, HTML, CSS, JavaScript, PHP and
                custom web application frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL LINKS
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-blue-700">
            Related Services
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/seo-services-hyderabad"
              className="rounded-lg border border-blue-700 bg-white px-5 py-3 text-blue-700 hover:bg-blue-50"
            >
              SEO Services Hyderabad
            </Link>

            <Link
              href="/digital-marketing-company-hyderabad"
              className="rounded-lg border border-blue-700 bg-white px-5 py-3 text-blue-700 hover:bg-blue-50"
            >
              Digital Marketing Hyderabad
            </Link>

            <Link
              href="/web-design-company-gachibowli"
              className="rounded-lg border border-blue-700 bg-white px-5 py-3 text-blue-700 hover:bg-blue-50"
            >
              Web Design Gachibowli
            </Link>

            <Link
              href="/web-design-company-banjara-hills"
              className="rounded-lg border border-blue-700 bg-white px-5 py-3 text-blue-700 hover:bg-blue-50"
            >
              Web Design Banjara Hills
            </Link>

            <Link
              href="/website-design-company-hyderabad"
              className="rounded-lg border border-blue-700 bg-white px-5 py-3 text-blue-700 hover:bg-blue-50"
            >
              Website Design Hyderabad
            </Link>

            <Link
              href="/web-development"
              className="rounded-lg border border-blue-700 bg-white px-5 py-3 text-blue-700 hover:bg-blue-50"
            >
              Web Development
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 md:text-4xl">
            Need a Website for Your Hitech City Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-black">
            Talk to KidiWebTech about website design, website development,
            ecommerce or SEO requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Contact KidiWebTech
          </Link>
        </div>
      </section>
    </main>
  );
}
