"use client";

import Head from "next/head";
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
// import CinemaIntro from "./Components/CinemaIntro";

// COMPONENTS


export default function Home() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
       {/* <CinemaIntro /> */}
      <Head>
        {/* PRIMARY SEO */}
        <title>
          SEO Services & Web Development Company in Hyderabad | KIDIWEBTECH
        </title>

        <meta
          name="description"
          content="KIDIWEBTECH provides SEO services, Google Ads, web development, and digital marketing solutions in Hyderabad to help businesses generate more leads and sales."
        />

        <meta
          name="keywords"
          content="SEO Services Hyderabad, Web Development Company Hyderabad, Google Ads Agency Hyderabad, Digital Marketing Company Hyderabad, Website Development Hyderabad, KIDIWEBTECH"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://kidiwebtech.com/" />

        {/* OPEN GRAPH */}
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="KIDIWEBTECH" />

        <meta
          property="og:title"
          content="SEO Services & Web Development Company in Hyderabad | KIDIWEBTECH"
        />

        <meta
          property="og:description"
          content="Grow your business with SEO, Google Ads, Web Development & Digital Marketing services from KIDIWEBTECH Hyderabad."
        />

        <meta property="og:url" content="https://kidiwebtech.com/" />

        <meta
          property="og:image"
          content="https://kidiwebtech.com/og-image.jpg"
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="SEO Services & Web Development Company in Hyderabad | KIDIWEBTECH"
        />

        <meta
          name="twitter:description"
          content="Professional SEO, Web Development, Google Ads & Digital Marketing services in Hyderabad."
        />

        <meta
          name="twitter:image"
          content="https://kidiwebtech.com/og-image.jpg"
        />

        {/* MOBILE OPTIMIZATION */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#000000" />

        {/* LOCAL BUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KIDIWEBTECH",
              image: "https://kidiwebtech.com/logo.png",
              url: "https://kidiwebtech.com",
              telephone: "+91-9290934388",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
                "https://www.facebook.com/",
              ],
              description:
                "KIDIWEBTECH is a Hyderabad-based SEO and web development company helping businesses grow through digital marketing, Google Ads, and high-converting websites.",
            }),
          }}
        />
      </Head>

<Herotrain/>
      {/* HERO SECTION */}
      <Herosection />

      {/* TRUSTED BRANDS */}
      <TrustedBySection />

      {/* SERVICES */}
      <ServicesSection />

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* CASE STUDIES */}
      <CaseStudiesSection />

      {/* PROCESS */}
      <ProcessSection />

      {/* DELIVERED WEBSITES */}
      <DeliveredWebsites />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CONTACT / CTA */}
      <ContactPage />
    </div>
  );
}
