// pages/index.jsx
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>
          KIDIWEBTECH | Digital Marketing & Web & App Development Company India
        </title>
        <meta
          name="description"
          content="KIDIWEBTECH is your trusted partner for digital marketing, app development, and website solutions in India. Boost your business growth with SEO, ads, and modern tech."
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO Services, Web Development, App Development, WordPress Development, India"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kidiwebtech.com/" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content="KIDIWEBTECH - Digital Growth Partner"
        />
        <meta
          property="og:description"
          content="Grow your business with SEO, Web, App & WordPress development services by KIDIWEBTECH."
        />
        <meta
          property="og:image"
          content="https://kidiwebtech.com/assets/image1.jpg"
        />
        <meta property="og:url" content="https://kidiwebtech.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KIDIWEBTECH - Digital Growth Partner"
        />
        <meta
          name="twitter:description"
          content="India's leading digital marketing and development agency. Contact us for SEO, ads, websites, and apps."
        />
        <meta
          name="twitter:image"
          content="https://kidiwebtech.com/assets/image1.jpg"
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
            <Image
              src="/assets/image1.jpg"
              alt="Digital Marketing"
              width={400}
              height={300}
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
            <Image
              src="/assets/image2.jpg"
              alt="App Development"
              width={400}
              height={300}
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
            <Image
              src="/assets/image3.jpg"
              alt="Website Development"
              width={400}
              height={300}
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
            <Image
              src="/assets/image4.jpg"
              alt="WordPress Development"
              width={400}
              height={300}
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
            href="https://wa.me/919390627367"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}
