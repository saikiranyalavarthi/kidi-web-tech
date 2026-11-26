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

import AboutSection from "./Components/AboutSection";
import TemplateShowcase from "./Components/TemplateShowcase";
import BentoShowcase from "./Components/BentoShowcase";
import LandingPagesShowcase from "./Components/LandingPagesShowcase";
import AIAgentSection from "./Components/AIAgentSection";
import BrandHero from "./Components/BrandHero";

import KidiFeaturesSection from "./Components/KidiFeaturesSection";

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

      <TrustedBySection />
      <BentoShowcase />
      <ServicesSection />

      <TemplateShowcase />
      <LandingPagesShowcase />
      <DeliveredWebsites />
      <AIAgentSection />
      <BrandHero />

      <KidiFeaturesSection />

      <CaseStudiesSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      <FAQSection />

      {/* CONTACT SECTION */}
      <ContactPage />
    </div>
  );
}
