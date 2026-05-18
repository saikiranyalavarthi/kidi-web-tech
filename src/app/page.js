"use client";

import Head from "next/head";

import ServicesSection1 from "./Components/ServicesSection1";
import ExperienceSection from "./Components/ExperienceSection";
import WeDiffer from "./Components/WeDiffer";
import PassionSection from "./Components/PassionSection";
import StatsSection from "./Components/StatsSection";
import ScrollingText from "./Components/ScrollingText";
// import HeroSlider from "./Components/HeroSlider";

import ContactPage from "./contact/page";
import AboutSection from "./Components/AboutSection";
import WhyChooseUsSection from "./Components/WhyChooseUsSection";
import ServicesSection from "./Components/ServicesSection";
import Herosection from "./Components/Herosection";
import TrustedBySection from "./Components/TrustedBySection";
import ProcessSection from "./Components/ProcessSection";
import SEOContentSection from "./Components/SEOContentSection";
import PortfolioSection from "./Components/Portfoliosection";
import IndustriesSection from "./Components/IndustriesSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import FAQSection from "./Components/FAQSection";
import AIHeroSection from "./Components/AIHeroSection";
import AIServicesSection from "./Components/AIServicesSection";
import DeliveredWebsites from "./Components/DeliveredWebsites";
import AiIndustriesSection from "./Components/AiIndustriesSection";
import AiDeliverySection from "./Components/AiDeliverySection";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      <Head>
        {/* BASIC SEO */}
        <title>
          KIDIWEBTECH | Digital Marketing & Web Development Company India
        </title>
        <meta
          name="description"
          content="KIDIWEBTECH is a digital growth partner offering SEO, Google Ads, Web & App Development services to scale your business online."
        />
        <meta
          name="keywords"
          content="Digital Marketing Agency India, SEO Services, Web Development, App Development, KIDIWEBTECH"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kidiwebtech.com/" />

        {/* OPEN GRAPH / WHATSAPP / FACEBOOK */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDIWEBTECH" />
        <meta
          property="og:title"
          content="KIDIWEBTECH | Digital Marketing & Web Development Company India"
        />
        <meta
          property="og:description"
          content="We help businesses grow with SEO, Google Ads, Websites, and Mobile App Development."
        />
        <meta property="og:url" content="https://kidiwebtech.com/" />
        <meta
          property="og:image"
          content="https://kidiwebtech.com/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* TWITTER / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KIDIWEBTECH | Digital Marketing & Web Development Company India"
        />
        <meta
          name="twitter:description"
          content="Professional SEO, Web Development, App Development & Digital Marketing services in India."
        />
        <meta
          name="twitter:image"
          content="https://kidiwebtech.com/og-image.jpg"
        />
      </Head>

      {/* HERO */}
      {/* <HeroSlider /> */}
      {/* <Herosection /> */}
      <AIHeroSection/>
      <AIServicesSection/>
      <DeliveredWebsites/>
      <AiIndustriesSection/>
      <AiDeliverySection/>
      <TrustedBySection/>
      <AboutSection />
          {/* <ServicesSection /> */}
             {/* < SEOContentSection/> */}
      {/* <WhyChooseUsSection /> */}
 <ProcessSection/>
  
{/* <StatsSection /> */}

{/* <PortfolioSection/> */}
{/* <IndustriesSection/> */}

<TestimonialsSection/>
      {/* EXPERIENCE */}
      {/* <ExperienceSection /> */}


      {/* <WeDiffer /> */}

      {/* PASSION SECTION */}
      {/* <PassionSection /> */}

      {/* STATS */}
      
      {/* <ScrollingText /> */}

<FAQSection/>
      {/* FINAL CTA */}
      {/* <section className="py-12 px-6 text-center bg-black border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
          Ready to <span className="gradient-text">Grow Your Business?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s discuss how we can help you attract more customers, increase
          conversions, and build a powerful digital presence.
        </p>

        <a
          href="/contact"
          className="
            inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-yellow-400 to-orange-500
            text-black font-semibold text-lg
            hover:opacity-90 transition
          "
        >
          Get Free Consultation →
        </a>
      </section> */}
      <ContactPage />
    </div>
  );
}














// FAQ
// Blogs
// CTA

