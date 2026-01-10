"use client";

import Head from "next/head";
import Image from "next/image";

export default function PPCPage() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      <Head>
        <title>Pay Per Click (PPC) Advertising Services | KIDIWEBTECH Hyderabad</title>
        <meta
          name="description"
          content="Boost your brand with Google Ads & PPC Campaigns from KIDIWEBTECH, a trusted PPC company in Hyderabad delivering measurable ROI."
        />
        <meta
          name="keywords"
          content="PPC Company Hyderabad, Google Ads Services, Pay Per Click Advertising, Digital Marketing Agency Hyderabad"
        />
        <link rel="canonical" href="https://kidiwebtech.com/services/ppc" />
      </Head>

      {/* HERO */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Pay Per Click <span className="gradient-text">Advertising</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          High-performance Google Ads & PPC campaigns designed to generate
          traffic, leads, and measurable growth.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <span className="mx-2">›</span>
          <span className="text-gray-400">PPC Advertising</span>
        </nav>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image13.jpg"
                alt="PPC Marketing Services"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              PPC <span className="gradient-text">Services</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Pay-Per-Click (PPC) advertising is one of the fastest ways to put
              your business in front of the right audience. You only pay when
              someone clicks — making PPC one of the most measurable and
              ROI-focused digital marketing strategies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As a <strong className="gradient-text">Google-certified PPC company in Hyderabad</strong>,
              KIDIWEBTECH builds data-driven ad campaigns focused on conversions,
              not just clicks. From Google Search to YouTube and display ads,
              we help brands dominate paid search results.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto pb-28 space-y-10 text-gray-400">

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose KIDIWEBTECH for PPC?
          </h2>
          <p>
            At KIDIWEBTECH, every click matters. Our experts perform deep keyword
            research, write high-converting ad copy, and continuously optimize
            campaigns to maximize ROI. Whether you're targeting local customers
            in Hyderabad or a global audience, our strategies are precision-built
            for results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our PPC Process Includes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keyword Research & Competitor Analysis</li>
            <li>Ad Copywriting & Creative Design</li>
            <li>Audience Targeting & Segmentation</li>
            <li>Landing Page Optimization</li>
            <li>Conversion Tracking & Analytics</li>
            <li>Ongoing Campaign Optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-extrabold gradient-text mb-4">
            Our Core PPC Services
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Ads Campaign Management</li>
            <li>YouTube Video Advertising</li>
            <li>Display Advertising</li>
            <li>Social Media Paid Campaigns</li>
          </ul>
        </div>

        <p className="pt-4">
          Whether you’re launching a new product or scaling your digital
          presence, <strong className="gradient-text">KIDIWEBTECH</strong> delivers
          high-converting PPC campaigns that turn ad spend into real business
          growth.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to <span className="gradient-text">Scale with PPC?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Get a customized PPC strategy designed to drive leads, sales, and ROI.
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
          Get a Free PPC Consultation →
        </a>
      </section>

    </div>
  );
}
