"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SEOClient() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="py-18 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          SEO Services in <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Ethical, data-driven Search Engine Optimization services that improve
          Google rankings, organic traffic, and business revenue.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <span className="mx-2">›</span>
          <span>SEO Services</span>
        </nav>
      </section>

      {/* INTRO */}
      <section className="py-12 px-6 md:px-20 max-w-7xl mx-auto">
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
                alt="SEO services and search engine optimization company in Hyderabad"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best <span className="gradient-text">SEO Company</span> for Business Growth
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> is a trusted
              SEO company in Hyderabad helping businesses rank higher on Google
              through white-hat SEO strategies, technical optimization, and
              conversion-focused content.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From on-page SEO and technical audits to local SEO and link
              building, we focus on long-term organic growth — not risky shortcuts.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-12 text-gray-400">

        {/* WHAT IS SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Search Engine Optimization (SEO)?
          </h2>
          <p>
            Search Engine Optimization (SEO) is the process of improving your
            website’s visibility in search engines like Google. Professional SEO
            services help businesses attract organic traffic, increase brand
            credibility, and generate consistent leads without paying for ads.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our SEO Services Include
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>SEO Audit & Website Analysis</li>
            <li>On-Page SEO Optimization</li>
            <li>Technical SEO & Page Speed Optimization</li>
            <li>Local SEO & Google Business Profile Optimization</li>
            <li>Keyword Research & SEO Content Writing</li>
            <li>Link Building & Authority Growth</li>
          </ul>
        </div>

        {/* LOCAL SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Local SEO Services in Hyderabad
          </h2>
          <p>
            Our local SEO services help businesses rank for searches like
            “SEO company near me” and “SEO services in Hyderabad”. We optimize
            your Google Business Profile, build local citations, and target
            location-based keywords to drive nearby customers.
          </p>
        </div>

        {/* SEO VS ADS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            SEO vs Paid Ads – Which Is Better?
          </h2>
          <p>
            SEO delivers long-term organic traffic and sustainable growth,
            whereas paid ads provide instant visibility. Businesses that invest
            in SEO build lasting authority and reduce dependency on advertising
            spend over time.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            SEO Services – Frequently Asked Questions
          </h2>

          <p><strong>How long does SEO take to show results?</strong><br />
            SEO typically takes 3–6 months to show measurable improvements,
            depending on competition and website condition.
          </p>

          <p className="mt-4"><strong>Is SEO good for small businesses?</strong><br />
            Yes. SEO is one of the most cost-effective marketing strategies for
            small and local businesses.
          </p>

          <p className="mt-4"><strong>Do you follow Google guidelines?</strong><br />
            Absolutely. We use only white-hat SEO practices aligned with Google
            search guidelines.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Want to <span className="gradient-text">Rank Higher on Google?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Get a free SEO audit and personalized growth plan for your business.
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
