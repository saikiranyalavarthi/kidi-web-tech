"use client";

import Head from "next/head";

import ServicesSection1 from "./Components/ServicesSection1";
import ExperienceSection from "./Components/ExperienceSection";
import WeDiffer from "./Components/WeDiffer";
import PassionSection from "./Components/PassionSection";
import StatsSection from "./Components/StatsSection";
import ScrollingText from "./Components/ScrollingText";
import HeroSlider from "./Components/HeroSlider";


export default function Home() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      <Head>
        <title>KIDIWEBTECH | Digital Marketing & Web Development Company India</title>
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
      </Head>

      {/* HERO */}
   <HeroSlider/>

      {/* SERVICES */}
      <ServicesSection1 />

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* WHY WE DIFFER */}
      <WeDiffer />

      {/* PASSION SECTION */}
      <PassionSection />

      {/* STATS */}
      <StatsSection />
      <ScrollingText />


      {/* FINAL CTA */}
      <section className="py-12 px-6 text-center bg-black border-t border-white/10">
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
      </section>

    </div>
  );
}
