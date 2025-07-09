"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SEOPage() {
  const title = "Best SEO Services in Hyderabad | KIDIWEBTECH";
  const description =
    "Rank higher on Google with KIDIWEBTECH, Hyderabad's top SEO agency. We offer on-page, off-page, local SEO, technical audits, and white-hat strategies for business growth.";
  const keywords = [
    "SEO Services Hyderabad",
    "Best SEO Company in Hyderabad",
    "KIDIWEBTECH SEO Agency",
    "Digital Marketing Hyderabad",
    "On-Page SEO Services",
    "Local SEO Experts Hyderabad",
    "Top SEO Company India",
    "SEO Optimization Services",
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 🔥 Gradient Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Search Engine Optimization (SEO) Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> SEO Services
        </nav>
      </div>

      {/* ✅ Main SEO Content */}
      <main className="bg-gradient-to-b from-white via-slate-50 to-white text-gray-800 px-4 md:px-16 py-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row gap-10 items-center"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
              Best SEO Services in Hyderabad
            </h2>
            <p className="text-lg mb-4">
              At <strong>KIDIWEBTECH</strong>, we elevate your digital presence
              through our SEO strategies tailored to drive traffic, increase
              visibility, and boost your revenue. Our transparent, white-hat
              approach delivers long-term results across on-page, off-page, and
              local SEO.
            </p>
            <Link
              href="/contact"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Get SEO Consultation
            </Link>
          </div>

          <div className="flex-1">
            <Image
              src="/assets/image14.jpg"
              alt="SEO Services Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </motion.div>

        {/* SEO Services List */}
        <section className="mt-12 space-y-5 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our SEO Services Include
          </h2>
          <ul className="list-disc pl-6">
            <li>Comprehensive Keyword Research & Competitor Analysis</li>
            <li>On-Page Optimization & Content Structuring</li>
            <li>Technical SEO and Site Audit</li>
            <li>Link Building and Authority Growth</li>
            <li>Local SEO with Google My Business Optimization</li>
            <li>Monthly Analytics & Reporting</li>
          </ul>

          <p>
            As a leading <strong>SEO company in Hyderabad</strong>, we craft
            search strategies that align with your business goals and help you
            dominate Google rankings ethically and effectively. With
            KIDIWEBTECH's advanced SEO techniques, your website doesn't just get
            traffic — it gets the right audience at the right time.
          </p>

          <p>
            At <strong>KIDIWEBTECH</strong>, we don't just boost your rankings —
            we deliver measurable results through conversion-focused SEO. Our
            strategy blends keyword science, performance audits, and content
            excellence to ensure your business stands out. From technical health
            to link authority, we handle every SEO factor with precision. As
            Hyderabad’s trusted digital growth partner, we help you gain
            visibility, attract qualified traffic, and turn visitors into loyal
            customers. We follow only ethical, white-hat practices backed by
            data and Google guidelines.
          </p>
        </section>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded hover:bg-indigo-700 transition"
          >
            Request a Free SEO Audit
          </Link>
        </div>
      </main>
    </>
  );
}
