// pages/about.jsx
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="font-sans">
      <Head>
        <title>
          About KIDIWEBTECH | Digital Marketing & Web Development Experts
        </title>
        <meta
          name="description"
          content="KIDIWEBTECH is a results-driven digital agency in India offering SEO, marketing, app, and web development. Learn more about our team, mission, and values."
        />
        <meta
          name="keywords"
          content="About KIDIWEBTECH, Digital Agency India, SEO Experts, Web Development Team, App Development Company, Digital Marketing, Digital Marketing Agency, Digital Marketing Experts in India, Online Marketing Solutions, SEO Services Near Me, App Developers India, Web Design Company, Best Digital Agency in Hyderabad"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kidiwebtech.com/about" />

        {/* Open Graph / Social Sharing Tags */}
        <meta
          property="og:title"
          content="About KIDIWEBTECH | Digital Experts"
        />
        <meta
          property="og:description"
          content="Get to know KIDIWEBTECH — your trusted partner in SEO, digital marketing, web development, and more."
        />
        <meta
          property="og:image"
          content="https://kidiwebtech.com/assets/image5.jpg"
        />
        <meta property="og:url" content="https://kidiwebtech.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
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

      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-28 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          At KIDIWEBTECH, we create powerful digital solutions that help
          businesses grow and compete with confidence. From SEO to web, app, and
          WordPress development, we turn ideas into high-performing platforms.
          Whether you&apos;re a startup or a scaling brand, our strategies are
          tailored to meet your unique goals.
        </p>
      </section>

      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 items-center gap-12 bg-white">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            KIDIWEBTECH is a full-service digital agency committed to
            transforming ideas into reality. From startups to enterprises, we
            help businesses establish a powerful digital presence.
          </p>
          <p className="text-gray-700 mb-4">
            Our services span across digital marketing, app development, website
            creation, and WordPress customization. We focus on delivering
            ROI-driven strategies tailored to your goals.
          </p>
          <p className="text-gray-700">
            With a client-first approach, we craft experiences that resonate
            with users and convert traffic into revenue. Your success is our
            priority.
          </p>
          <p className="text-gray-700 mt-6">
            We specialize in keyword-rich content strategies, Google search
            optimization, targeted ads, responsive websites, and scalable apps.
            Whether you're looking for a digital marketing agency in Hyderabad
            or a complete web and SEO solution in India — we’re your trusted
            partner.
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

      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          To empower businesses of all sizes with tailored digital solutions
          that drive growth and visibility.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At KIDIWEBTECH, we believe that technology should be used to unlock
          opportunities. Our mission is to simplify digital transformation
          through strategic creativity, transparency, and cutting-edge tools.
        </p>
      </section>

      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-indigo-300 transition">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Expert Team
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Experienced professionals in SEO, development, and marketing.
            </p>
            <p className="text-gray-700 text-sm">
              We stay up to date with the latest tech trends and tools to give
              your brand a competitive edge.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-purple-300 transition">
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              Client-Centric
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              We focus on your business goals and long-term success.
            </p>
            <p className="text-gray-700 text-sm">
              Every project is personalized. We listen, plan, and execute with
              precision based on your needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-blue-300 transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              SEO-Optimized
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Every solution we build is optimized for search visibility and
              performance.
            </p>
            <p className="text-gray-700 text-sm">
              From keyword research to technical SEO, we ensure your site ranks
              and attracts organic traffic.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-pink-300 transition">
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              Reliable Delivery
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              We adhere to deadlines and deliver quality work — no surprises,
              just results.
            </p>
            <p className="text-gray-700 text-sm">
              Our process is transparent and timely to ensure your project stays
              on track.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-green-300 transition">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Innovation Driven
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              We love pushing boundaries with creative and functional solutions.
            </p>
            <p className="text-gray-700 text-sm">
              Your digital presence is powered by smart design, tech, and
              usability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-yellow-300 transition">
            <h3 className="text-xl font-bold text-yellow-600 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              We&apos;re always here for you — before, during, and after your
              project.
            </p>
            <p className="text-gray-700 text-sm">
              Get fast support and updates whenever you need help or
              improvements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
