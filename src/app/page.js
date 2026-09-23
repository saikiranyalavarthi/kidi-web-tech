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
import Herotrain from "./Components/Herotrain";
import Banner from "./Components/Banner";


/* =========================================================
   SEO METADATA
========================================================= */
export const metadata = {
  title: "Web Development & SEO Company in Hyderabad",

  description:
    "KidiWebTech is a web development and SEO company in Hyderabad, Telangana. We create fast, responsive websites and provide SEO, local SEO, Google Ads and digital marketing services to help businesses grow online.",

  keywords: [
    "web development company in Hyderabad",
    "website development company Hyderabad",
    "website design company Hyderabad",
    "SEO company in Hyderabad",
    "SEO services in Hyderabad",
    "digital marketing company Hyderabad",
    "Google Ads agency Hyderabad",
    "Next.js development company Hyderabad",
    "React.js development company Hyderabad",
    "custom website development Hyderabad",
    "local SEO services Hyderabad",
    "business website development Hyderabad",
    "website redesign Hyderabad",
    "KidiWebTech",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kidiwebtech.com/",
    siteName: "KidiWebTech",

    title: "Web Development & SEO Company in Hyderabad",

    description:
      "KidiWebTech provides web development, website design, SEO, local SEO, Google Ads and digital marketing services for businesses in Hyderabad and across Telangana.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KidiWebTech Web Development and SEO Company in Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Development & SEO Company in Hyderabad",

    description:
      "Professional web development, SEO, Google Ads and digital marketing services in Hyderabad.",

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
      {/* =====================================================
          HERO VIDEO / INTRO
      ===================================================== */}

      <Herotrain />

      {/* =====================================================
          MAIN HERO
      ===================================================== */}
      <Banner />

      <Herosection />

      {/* =====================================================
          INTRO SEO CONTENT
          Keep this visible on the page.
      ===================================================== */}

      <section aria-labelledby="about-kidiwebtech" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Web Development & SEO Company in Hyderabad
            </p>

            <h1
              id="about-kidiwebwebtech"
              className="text-3xl font-bold leading-tight text-blue-600 md:text-5xl"
            >
              Web Development and SEO Services in Hyderabad
            </h1>

            <p className="mt-6 text-base leading-8 text-black md:text-lg">
              KidiWebTech is a web development and SEO company based in
              Hyderabad, Telangana. We help businesses build a stronger online
              presence with modern website development, responsive website
              design, search engine optimization, local SEO, Google Ads and
              digital marketing services.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              Our websites are designed with performance, mobile responsiveness,
              user experience and search engine visibility in mind. From
              business websites and website redesigns to Next.js and React.js
              development, we create digital solutions based on each
              business&apos;s goals and customers.
            </p>
          </div>
        </div>
      </section>
      {/* =====================================================
          TRUSTED BRANDS
      ===================================================== */}
  
      <TrustedBySection />

      {/* =====================================================
          SERVICES
      ===================================================== */}

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
              SEO Services for Businesses in Hyderabad
            </h2>

            <p className="mt-5 text-base leading-8 text-black md:text-lg">
              Our SEO services help businesses improve their organic search
              visibility and attract relevant visitors from Google. We work on
              technical SEO, on-page optimization, content structure, internal
              linking, local search optimization and other website improvements
              that support long-term organic growth.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              For businesses targeting customers in Hyderabad and Telangana,
              local SEO can help improve visibility for location-based searches.
              We optimize relevant website content and local signals while
              keeping the content useful and natural for customers.
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
          WEB DEVELOPMENT SEO CONTENT
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
              Website Development Company in Hyderabad
            </h2>

            <p className="mt-5 text-base leading-8 text-black md:text-lg">
              KidiWebTech develops modern business websites focused on speed,
              responsive design, usability and search visibility. We work with
              modern technologies including Next.js and React.js to build
              websites that provide a strong experience across desktop, tablet
              and mobile devices.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              Whether you need a new business website, a custom web application,
              a website redesign or improvements to an existing website, our
              development process focuses on creating a clear structure for both
              users and search engines.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/web-development"
                className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Web Development
              </Link>

              <Link
                href="/website-design"
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Website Design
              </Link>

              <Link
                href="/nextjs-development"
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Next.js Development
              </Link>

              <Link
                href="/reactjs-development"
                className="rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                React.js Development
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <IndustriesSection />

      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <CaseStudiesSection />

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <ProcessSection />

      {/* =====================================================
          DELIVERED WEBSITES
      ===================================================== */}

      <DeliveredWebsites />

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <TestimonialsSection />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section aria-labelledby="faq-heading" id="faq">
        <FAQSection />
      </section>

      {/* =====================================================
          FINAL SEO / LOCATION CONTENT
      ===================================================== */}

      <section aria-labelledby="location-heading" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <h2
              id="location-heading"
              className="text-3xl font-bold leading-tight text-blue-600 md:text-4xl"
            >
              Digital Services for Businesses in Hyderabad and Telangana
            </h2>

            <p className="mt-5 text-base leading-8 text-black md:text-lg">
              KidiWebTech serves businesses in Hyderabad and across Telangana
              with website development, SEO, local SEO, digital marketing and
              online advertising solutions. Our goal is to combine strong
              website experiences with search-friendly content and digital
              marketing strategies that help businesses connect with their
              target customers.
            </p>

            <p className="mt-4 text-base leading-8 text-black md:text-lg">
              If you are looking for a web development company, website design
              agency or SEO company in Hyderabad, KidiWebTech can help you plan,
              build and improve your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / CTA
      ===================================================== */}

      <ContactPage />
    </div>
  );
}
