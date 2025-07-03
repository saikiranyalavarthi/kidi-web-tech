// pages/index.jsx
import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>KIDIWEBTECH - Digital Growth Partner</title>
        <meta
          name="description"
          content="Digital Marketing, App & Web Development Agency"
        />
      </Head>

      <header className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-center py-60 px-4 mt-2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse">
          Your Partner in Digital Success
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
          Grow your business with our expert digital marketing, web and app
          development services.
        </p>
      </header>

      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Digital Marketing */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-indigo-300 transition-shadow duration-300 p-4 text-center">
            <img
              src="/assets/image1.jpg"
              alt="Digital Marketing"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Digital Marketing
            </h3>
            <p className="text-gray-700 text-sm">
              Boost your visibility with SEO, Google Ads, and social media
              strategies to reach the right audience at the right time.
            </p>
          </div>

          {/* Card 2: App Development */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-purple-300 transition-shadow duration-300 p-4 text-center">
            <img
              src="/assets/image2.jpg"
              alt="App Development"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              App Development
            </h3>
            <p className="text-gray-700 text-sm">
              We build powerful iOS and Android apps that are fast, secure, and
              scalable using modern technologies.
            </p>
          </div>

          {/* Card 3: Website Development */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-blue-300 transition-shadow duration-300 p-4 text-center">
            <img
              src="/assets/image3.jpg"
              alt="Website Development"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Website Development
            </h3>
            <p className="text-gray-700 text-sm">
              SEO-optimized websites built with Next.js and Tailwind CSS,
              designed for speed and user experience.
            </p>
          </div>

          {/* Card 4: WordPress Development */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-indigo-300 transition-shadow duration-300 p-4 text-center">
            <img
              src="/assets/image4.jpg"
              alt="WordPress Development"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              WordPress Development
            </h3>
            <p className="text-gray-700 text-sm">
              From themes to plugins, we build flexible WordPress solutions for
              easy content management and growth.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 text-center">
        <p>© 2025 KIDIWEBTECH. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="mailto:info@kidiwebtech.com" className="underline">
            Email
          </a>
          <a
            href="https://wa.me/919999999999"
            className="underline"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}
