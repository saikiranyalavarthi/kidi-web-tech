// pages/about.jsx

import Head from "next/head";
import Image from "next/image";
import React from "react";
import ExperienceSection from "../Components/ExperienceSection";

export default function About() {
  return (
    <div className="font-sans">
      <Head>
        <title>
          About KIDIWEBTECH | Digital Marketing & Web Development Experts
        </title>
        <meta
          name="description"
          content="KIDIWEBTECH is a leading digital marketing company in Hyderabad, India. We offer expert SEO, PPC, Web Development, App Development, and Marketing solutions customized to your business goals."
        />
        <meta
          name="keywords"
          content="About KIDIWEBTECH, Digital Marketing Agency, SEO Company Hyderabad, Web Design India, App Developers Hyderabad, Best SEO Experts, WordPress Development, Digital Agency Hyderabad, PPC Advertising, Google Marketing Experts"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kidiwebtech.com/about" />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="About KIDIWEBTECH | Digital Experts"
        />
        <meta
          property="og:description"
          content="Discover KIDIWEBTECH – India's trusted SEO & digital marketing agency, specializing in web design, app development, and ROI-driven digital solutions."
        />
        <meta
          property="og:image"
          content="https://kidiwebtech.com/assets/image5.jpg"
        />
        <meta property="og:url" content="https://kidiwebtech.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About KIDIWEBTECH | SEO & Web Dev Agency"
        />
        <meta
          name="twitter:description"
          content="We help startups and brands grow online with SEO, websites, apps, and digital strategies."
        />
        <meta
          name="twitter:image"
          content="https://kidiwebtech.com/assets/image5.jpg"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-28 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          At KIDIWEBTECH, we create powerful digital solutions that help
          businesses grow and compete with confidence. From SEO to Web & App
          Development, our strategies are tailored to your growth.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 items-center gap-12 bg-white">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            KIDIWEBTECH is a full-service digital marketing company in India,
            committed to helping businesses thrive in the online world. From SEO
            and PPC to website development and branding — we build digital
            ecosystems that drive measurable results.
          </p>

          <p className="text-gray-700 mb-4">
            We understand that the digital landscape is constantly evolving, and
            what worked yesterday may not work today. That’s why we stay ahead
            of the curve by adapting our strategies to the latest trends and
            technologies.
          </p>

          <p className="text-gray-700 mb-4">
            In the digital world, data is king. We use advanced analytics and
            real-time insights to optimize every campaign, ensuring alignment
            with your business objectives. Our strategies are rooted in
            creativity, innovation, and deep market understanding.
          </p>

          <p className="text-gray-700 mb-4">
            We know one-size-fits-all solutions don’t work in marketing. We
            craft customized digital strategies based on your industry, target
            audience, and business goals — delivering maximum ROI.
          </p>

          <p className="text-gray-700">
            Whether it’s increasing brand awareness, driving traffic, or
            generating leads, our ultimate goal is to deliver results that move
            your business forward.
          </p>
        </div>

        <Image
          src="/assets/image5.jpg"
          alt="About KIDIWEBTECH"
          width={600}
          height={700}
          className="rounded-2xl shadow-lg ml-30"
        />
      </section>

      {/* Stats + Experience */}
      <ExperienceSection />

      {/* Mission */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          To empower businesses of all sizes with tailored digital solutions
          that drive growth and visibility.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At KIDIWEBTECH, we believe technology should unlock opportunities. Our
          mission is to simplify digital transformation through strategy,
          creativity, and results-driven execution.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Team",
              desc1:
                "Experienced professionals in SEO, development, and marketing.",
              desc2:
                "We stay up to date with the latest tools to give your brand a competitive edge.",
              color: "indigo",
            },
            {
              title: "Client-Centric",
              desc1: "We focus on your business goals and long-term success.",
              desc2:
                "Every project is personalized. We listen, plan, and execute precisely.",
              color: "purple",
            },
            {
              title: "SEO-Optimized",
              desc1:
                "Every solution we build is optimized for search visibility.",
              desc2:
                "From keyword research to technical SEO, we ensure your brand ranks.",
              color: "blue",
            },
            {
              title: "Reliable Delivery",
              desc1:
                "We adhere to deadlines and deliver quality work — no surprises.",
              desc2:
                "Our process is transparent and timely to keep your project on track.",
              color: "pink",
            },
            {
              title: "Innovation Driven",
              desc1:
                "We push boundaries with creative and functional solutions.",
              desc2:
                "Your digital presence is powered by design, tech, and usability.",
              color: "green",
            },
            {
              title: "24/7 Support",
              desc1:
                "We're here for you — before, during, and after your project.",
              desc2: "Get fast support and improvements whenever needed.",
              color: "yellow",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-${item.color}-300 transition`}
            >
              <h3 className={`text-xl font-bold text-${item.color}-600 mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm mb-2">{item.desc1}</p>
              <p className="text-gray-700 text-sm">{item.desc2}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
