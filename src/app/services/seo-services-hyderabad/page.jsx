"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SEOClient() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Best SEO Services in <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Result-driven Search Engine Optimization services that improve Google rankings,
          increase organic traffic, and generate long-term business growth.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <span className="mx-2">›</span>
          <span>SEO Services</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image14.jpg"
                alt="SEO company in Hyderabad providing search engine optimization services"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Leading <span className="gradient-text">SEO Company in Hyderabad</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> is a trusted SEO agency
              helping startups, SMEs, and enterprises achieve higher search engine rankings
              through ethical white-hat SEO strategies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We combine technical SEO, on-page optimization, content marketing,
              and authority link building to deliver sustainable organic growth.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= CORE SEO CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-14 text-gray-400">

        {/* WHAT IS SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Search Engine Optimization (SEO)?
          </h2>
          <p>
            Search Engine Optimization (SEO) is the process of improving your
            website’s visibility on search engines like Google. By optimizing
            website structure, content, speed, and backlinks, SEO helps businesses
            attract organic traffic without paying for advertisements.
          </p>
        </div>

        {/* OUR SEO SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Complete SEO Services Include
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive SEO Audit & Competitor Analysis</li>
            <li>On-Page SEO & Content Optimization</li>
            <li>Technical SEO & Core Web Vitals Improvement</li>
            <li>Local SEO & Google Business Profile Optimization</li>
            <li>Keyword Research & SEO Content Strategy</li>
            <li>High-Quality Link Building & Authority Growth</li>
            <li>E-commerce SEO & Product Optimization</li>
          </ul>
        </div>

        {/* LOCAL SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Local SEO Services in Hyderabad
          </h2>
          <p>
            Our local SEO services help businesses rank for searches like
            “SEO company near me” and “best SEO services in Hyderabad”.
            We optimize location-based keywords, create local citations,
            and improve Google Maps visibility to drive nearby customers.
          </p>
        </div>

        {/* INDUSTRY SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            SEO for Different Industries
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate SEO</li>
            <li>Healthcare & Clinic SEO</li>
            <li>E-commerce SEO</li>
            <li>Education & Training Institutes SEO</li>
            <li>IT & SaaS SEO</li>
            <li>Local Service Business SEO</li>
          </ul>
        </div>

        {/* SEO PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our SEO Process
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keyword Research & Market Analysis</li>
            <li>Technical Website Optimization</li>
            <li>On-Page Optimization & Content Enhancement</li>
            <li>Authority Link Building</li>
            <li>Performance Monitoring & Reporting</li>
          </ul>
        </div>

        {/* SEO VS PPC */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            SEO vs <Link href="/services/ppc" className="underline">PPC Advertising</Link>
          </h2>
          <p>
            SEO delivers sustainable long-term organic growth, while PPC
            provides instant visibility through paid ads. Businesses that
            combine SEO and PPC strategies often achieve maximum digital success.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose KIDIWEBTECH for SEO?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>100% White-Hat SEO Practices</li>
            <li>Transparent Monthly Reporting</li>
            <li>Data-Driven Strategy</li>
            <li>Dedicated SEO Experts</li>
            <li>Long-Term Ranking Stability</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            SEO Services – Frequently Asked Questions
          </h2>

          <p>
            <strong>How long does SEO take?</strong><br />
            SEO typically takes 3–6 months depending on competition,
            website age, and industry.
          </p>

          <p className="mt-4">
            <strong>Is SEO better than Google Ads?</strong><br />
            SEO is better for long-term growth, while Google Ads is ideal
            for immediate visibility. Both strategies work best together.
          </p>

          <p className="mt-4">
            <strong>Do you guarantee #1 ranking?</strong><br />
            No ethical SEO company can guarantee rankings. We guarantee
            transparent strategy, measurable growth, and compliance with
            Google guidelines.
          </p>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Want to <span className="gradient-text">Rank Higher on Google?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Get a free SEO audit and personalized growth strategy for your business.
        </p>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-yellow-400 to-orange-500
            text-black font-semibold text-lg
            hover:opacity-90 transition"
        >
          Request Free SEO Audit →
        </Link>
      </section>

    </div>
  );
}