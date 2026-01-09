// pages/about.jsx

import Head from "next/head";
import Image from "next/image";
import ExperienceSection from "../Components/ExperienceSection";

export default function About() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      <Head>
        <title>About KIDIWEBTECH | Digital Marketing & Web Development Experts</title>
        <meta
          name="description"
          content="KIDIWEBTECH is a digital marketing and web development agency in India helping businesses grow with SEO, Google Ads, websites, and scalable digital strategies."
        />
        <meta
          name="keywords"
          content="About KIDIWEBTECH, Digital Marketing Agency India, SEO Company, Web Development, App Development"
        />
        <link rel="canonical" href="https://kidiwebtech.com/about" />
      </Head>

      {/* HERO */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          About <span className="gradient-text">KIDIWEBTECH</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We build high-performance digital experiences that help brands grow,
          compete, and win in the online world.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Who <span className="gradient-text">We Are</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <span className="gradient-text font-semibold">KIDIWEBTECH</span> is a
              full-service digital marketing and development agency focused on
              delivering measurable growth. From SEO and paid ads to websites and
              apps, we help businesses build a strong digital foundation.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              The digital landscape evolves fast — and so do we. Our team stays
              ahead of trends, algorithms, and technology shifts to ensure your
              brand always remains competitive.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Data drives every decision we make. From user behavior to
              conversion metrics, our strategies are powered by insights that
              turn traffic into revenue.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We don’t believe in one-size-fits-all marketing. Every solution is
              customized to your industry, audience, and growth goals.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image5.jpg"
                alt="About KIDIWEBTECH"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* MISSION */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Our <span className="gradient-text">Mission</span>
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          To empower businesses of all sizes with scalable digital solutions that
          increase visibility, generate leads, and drive long-term growth through
          technology, strategy, and creativity.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-16">
          Why <span className="gradient-text">Choose Us</span>
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Expert Team",
              desc:
                "SEO specialists, developers, and marketers focused on results.",
            },
            {
              title: "Client-Centric",
              desc:
                "Your goals drive every decision we make and execute.",
            },
            {
              title: "SEO-First Approach",
              desc:
                "Everything we build is optimized for visibility and ranking.",
            },
            {
              title: "Reliable Delivery",
              desc:
                "On-time execution with transparent communication.",
            },
            {
              title: "Innovation Driven",
              desc:
                "We blend creativity, tech, and usability for impact.",
            },
            {
              title: "24/7 Support",
              desc:
                "We support you before, during, and after launch.",
            },
          ].map((item, i) => (
            <div key={i} className="relative group">

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
