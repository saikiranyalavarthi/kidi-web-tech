// pages/about.jsx

import Head from "next/head";
import ExperienceSection from "../Components/ExperienceSection";

export default function About() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      {/* SEO HEAD */}
      <Head>
        <title>About KidiWebTech | Digital Marketing & Web Development Agency India</title>

        <meta
          name="description"
          content="KidiWebTech is a results-driven digital marketing and web development agency in India helping businesses grow with SEO, Google Ads, social media marketing, and lead generation strategies."
        />

        <meta
          name="keywords"
          content="About KidiWebTech, Digital Marketing Agency India, SEO Company, Web Development Company, Google Ads Agency, Lead Generation Services"
        />

        <link rel="canonical" href="https://www.kidiwebtech.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About KidiWebTech – Digital Growth Experts" />
        <meta
          property="og:description"
          content="Learn how KidiWebTech helps businesses generate leads and grow online using SEO, Google Ads, and high-converting websites."
        />
        <meta property="og:url" content="https://www.kidiwebtech.com/about" />
        <meta property="og:type" content="website" />
      </Head>

      {/* HERO */}
      <section className="py-18 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          About <span className="gradient-text">KidiWebTech</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We help businesses grow online with result-driven digital marketing,
          SEO, Google Ads, and high-converting websites.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Who <span className="gradient-text">We Are</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <span className="gradient-text font-semibold">KidiWebTech</span> is a
              results-focused digital marketing and web development agency in
              India helping businesses generate leads, increase online
              visibility, and scale revenue through SEO, Google Ads, social
              media marketing, and high-performance websites.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              We work with startups, local businesses, and growing companies to
              build strong digital foundations that convert visitors into real
              customers.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our strategies are powered by data, creativity, and technology —
              ensuring measurable growth, better ROI, and long-term success.
            </p>
          </div>

          {/* YOUTUBE VIDEO (REPLACED IMAGE) */}
          <div className="relative">

            {/* GRADIENT BORDER */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />

            {/* VIDEO CARD */}
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KdV0x72Ay5U"
                title="About KidiWebTech - Digital Marketing & Web Development Agency"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <ExperienceSection />

      {/* MISSION */}
      <section className="py-12 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Our <span className="gradient-text">Mission</span>
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          To empower businesses of all sizes with scalable digital solutions that
          increase visibility, generate leads, and drive long-term growth through
          strategy, technology, and creativity.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 px-6 md:px-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-16">
          Why <span className="gradient-text">Choose Us</span>
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Expert Team",
              desc: "Experienced SEO specialists, developers, and marketers focused on results.",
            },
            {
              title: "Client-Centric Approach",
              desc: "Your business goals drive every strategy we create.",
            },
            {
              title: "SEO-First Strategy",
              desc: "Everything we build is optimized for search visibility and conversions.",
            },
            {
              title: "Reliable Delivery",
              desc: "On-time execution with transparent communication.",
            },
            {
              title: "Innovation Driven",
              desc: "We blend creativity, technology, and data for real impact.",
            },
            {
              title: "Ongoing Support",
              desc: "We support your business before, during, and after launch.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">

              {/* BORDER */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60" />

              {/* CARD */}
              <div className="relative bg-black rounded-2xl m-[1.5px] p-8">
                <h3 className="text-xl font-bold gradient-text mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
