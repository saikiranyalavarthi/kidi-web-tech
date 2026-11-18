import Link from "next/link";

import Herosection from "./Components/Herosection";
import TrustedBySection from "./Components/TrustedBySection";
import ServicesSection from "./Components/ServicesSection";
import IndustriesSection from "./Components/IndustriesSection";
import ProcessSection from "./Components/ProcessSection";
import DeliveredWebsites from "./Components/DeliveredWebsites";
import TestimonialsSection from "./Components/TestimonialsSection";
import FAQSection from "./Components/FAQSection";
import ContactPage from "./contact/page";
import CaseStudiesSection from "./Components/CaseStudiesSection";
import FestivalBanner from "./Components/FestivalBanner";

/* =========================================================
   HOMEPAGE SEO METADATA
========================================================= */

export const metadata = {
  title: "Website Development & SEO Agency in Hyderabad | KidiWebTech",

  description:
    "KidiWebTech is a Hyderabad-based website development and digital marketing company offering website design, Next.js development, React development, SEO, local SEO and digital marketing services.",

  keywords: [
    "KidiWebTech",
    "website development company in Hyderabad",
    "web development company Hyderabad",
    "website design company Hyderabad",
    "SEO services Hyderabad",
    "digital marketing agency Hyderabad",
    "website development services",
    "custom website development",
    "business website development",
    "ecommerce website development",
    "Next.js development company",
    "React.js development company",
    "SEO agency",
    "local SEO services",
    "technical SEO services",
    "Google Ads management",
    "lead generation services",
    "website development company India",
    "digital marketing agency India",
    "website design company UAE",
    "SEO services UAE",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kidiwebtech.com/",
    siteName: "KidiWebTech",
    title: "Website Development & SEO Agency in Hyderabad | KidiWebTech",
    description:
      "Website development, SEO and digital marketing solutions for businesses in Hyderabad, across India and the UAE.",
    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KidiWebTech Website Development and SEO Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development & SEO Agency | KidiWebTech",
    description:
      "Website design, web development, SEO and digital marketing services by KidiWebTech.",
    images: ["https://www.kidiwebtech.com/og-image.jpg"],
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
};

/* =========================================================
   HOMEPAGE
========================================================= */

export default function Home() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <Herosection />

      {/* FESTIVAL BANNER */}
      <FestivalBanner />

      {/* =====================================================
          INTRO SEO CONTENT
      ===================================================== */}

      <section aria-labelledby="about-kidiwebtech" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Website Development, SEO & Digital Marketing
            </p>

            <h2
              id="about-kidiwebtech"
              className="text-3xl font-bold leading-tight text-blue-600 md:text-5xl"
            >
              Website Development, SEO & Digital Marketing That Generate Leads
            </h2>

            <p className="mt-6 text-base leading-8 text-black md:text-lg">
              KidiWebTech is a website development and digital marketing company
              based in Hyderabad, India. We help businesses attract potential
              customers and generate enquiries through professional website
              design, custom web development, search engine optimization (SEO),
              local SEO, Google Ads and digital marketing services.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              Our websites are built around clear calls to action, mobile
              usability, performance and search visibility. We develop business
              websites, eCommerce stores and custom Next.js and React.js
              applications for companies across India and businesses targeting
              international markets, including the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <TrustedBySection />

      {/* SERVICES */}
      <section aria-labelledby="services-heading" id="services">
        <ServicesSection />
      </section>

      {/* =====================================================
          SEO SERVICES CONTENT
      ===================================================== */}

      <section
        aria-labelledby="seo-services-heading"
        className="w-full bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <h2
              id="seo-services-heading"
              className="text-3xl font-bold leading-tight text-blue-600 md:text-4xl"
            >
              SEO Services That Help Turn Search Traffic Into Leads
            </h2>

            <p className="mt-5 text-base leading-8 text-black md:text-lg">
              Our SEO services help businesses improve organic visibility, reach
              people actively searching for their products or services, and
              increase qualified enquiries. Our work can include technical SEO,
              on-page optimization, keyword mapping, useful content, internal
              linking, local search optimization and conversion improvements.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              For businesses serving Hyderabad and other Indian cities, local
              SEO can help improve visibility in relevant location-based
              searches. We can also help plan Google Ads campaigns around your
              services, target audience, landing pages and lead goals.
              International campaigns should be tailored to the relevant market
              and customer intent.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/seo-services"
                className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Explore SEO Services
              </Link>

              <Link
                href="/local-seo"
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Local SEO Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WEB DEVELOPMENT CONTENT
      ===================================================== */}

      <section
        aria-labelledby="web-development-heading"
        className="w-full bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <h2
              id="web-development-heading"
              className="text-3xl font-bold leading-tight text-blue-600 md:text-4xl"
            >
              Website Development Designed to Convert Visitors Into Enquiries
            </h2>

            <p className="mt-5 text-base leading-8 text-black md:text-lg">
              KidiWebTech builds modern business websites focused on speed,
              responsive design, usability, search visibility and clear
              conversion paths. We develop websites and web applications using
              technologies such as Next.js and React.js, with layouts designed
              for desktop, tablet and mobile devices.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              Whether you need a business website, custom web application,
              eCommerce store, website redesign or ongoing improvements, we
              start by understanding your services, audience and business goals.
              We then plan the page structure and enquiry journey so potential
              customers can understand your offer and contact your team.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/web-development"
                className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Website Development Services
              </Link>

              <Link
                href="/website-design"
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Website Design Services
              </Link>

              <Link
                href="/services/nextjs-development-services-hyderabad"
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Next.js Development
              </Link>

              <Link
                href="/services/react-js-development-services-hyderabad"
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                React.js Development
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* CASE STUDIES */}
      <CaseStudiesSection />

      {/* OUR PROCESS */}
      <ProcessSection />

      {/* DELIVERED WEBSITES */}
      <DeliveredWebsites />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <FAQSection />

      {/* =====================================================
          LOCATION SEO CONTENT
      ===================================================== */}

      <section aria-labelledby="location-heading" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <h2
              id="location-heading"
              className="text-3xl font-bold leading-tight text-blue-600 md:text-4xl"
            >
              Website Development & Digital Marketing for India and UAE
              Businesses
            </h2>

            <p className="mt-5 text-base leading-8 text-black md:text-lg">
              Based in Hyderabad, KidiWebTech provides website development,
              website design, SEO, local SEO, digital marketing and online
              advertising services. We work with businesses that want to
              strengthen their online presence, improve search visibility and
              create a clearer path from website visits to customer enquiries
              across relevant markets in India.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              If you are comparing website development companies, SEO agencies
              or digital marketing partners, share your services, target
              locations and lead goals with KidiWebTech. We can help you
              identify suitable website improvements and digital marketing
              options for your business. For international campaigns, website
              content and landing pages can be tailored to the markets you want
              to reach, including the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactPage />
    </div>
  );
}
