"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import {
  Bot,
  ArrowRight,
  Search,
  Globe,
  Zap,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";

export default function AIWebsiteHero() {
  return (
    <>
      {/* SEO TAGS */}
      <Head>
        <title>
          Best Website Design Company in Hyderabad | AI Website Development
        </title>

        <meta
          name="description"
          content="Kidi Web Tech provides AI-powered website design, SEO optimization, eCommerce development, landing pages, and modern business websites in Hyderabad."
        />

        <meta
          name="keywords"
          content="
          website design company Hyderabad,
          AI website development Hyderabad,
          SEO services Hyderabad,
          ecommerce website Hyderabad,
          business website developers Hyderabad,
          web development company Hyderabad,
          React developers Hyderabad,
          Next.js developers Hyderabad,
          SEO optimized websites,
          mobile friendly websites
          "
        />
      </Head>

      {/* MAIN SECTION */}
      <section className="relative overflow-hidden bg-white py-20 text-gray-900">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* GRADIENT CIRCLES */}
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-100 blur-3xl" />

          <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-purple-100 blur-3xl" />

          {/* GRID */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:45px_45px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-20 px-6 lg:flex-row lg:px-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* BADGE */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-2 shadow-md">
              <Bot className="h-4 w-4 text-pink-500" />

              <span className="text-sm font-semibold text-gray-700">
                AI Powered Web Solutions
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              We Build Modern Websites
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                That Grow Your Business
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              AI-powered website design company in Hyderabad creating
              SEO-optimized, mobile-friendly, lightning-fast websites for
              startups, businesses, healthcare, education, and eCommerce brands.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.25)] transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="rounded-2xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-100">
                View Our Work
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                {
                  icon: <Zap className="h-4 w-4 text-purple-500" />,
                  text: "AI Design",
                },
                {
                  icon: <Search className="h-4 w-4 text-green-500" />,
                  text: "SEO Friendly",
                },
                {
                  icon: <MonitorSmartphone className="h-4 w-4 text-pink-500" />,
                  text: "Mobile Ready",
                },
                {
                  icon: <Globe className="h-4 w-4 text-cyan-500" />,
                  text: "Fast Loading",
                },
                {
                  icon: <ShieldCheck className="h-4 w-4 text-blue-500" />,
                  text: "24/7 Support",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {item.icon}

                  <span className="font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* SEO CONTENT */}
            <div className="mt-12 rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-black text-gray-900">
                Best Website Design Company in Hyderabad
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                Kidi Web Tech creates AI-powered business websites using
                Next.js, React.js, Tailwind CSS, and modern UI/UX technologies.
                Our websites are SEO optimized, mobile responsive, and designed
                to improve Google rankings and business growth.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                We specialize in eCommerce websites, healthcare websites,
                education websites, landing pages, portfolio websites, and
                custom web applications for businesses across Hyderabad.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            {/* MAIN CARD */}
            <div className="relative rounded-[35px] border border-gray-200 bg-white p-8 shadow-[0_20px_80px_rgba(124,58,237,0.15)]">
              {/* CARD 1 */}
              <div className="absolute left-[-50px] top-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
                <p className="mb-3 text-sm font-semibold text-gray-600">
                  Modern Website Design
                </p>

                <div className="space-y-2">
                  <div className="h-3 w-28 rounded-full bg-purple-500" />

                  <div className="h-3 w-20 rounded-full bg-pink-500" />

                  <div className="h-16 w-28 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500" />
                </div>
              </div>

              {/* CARD 2 */}
              <div className="absolute right-[-40px] top-[-20px] rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
                <p className="mb-4 text-sm font-semibold text-gray-600">
                  SEO Score
                </p>

                <div className="flex h-28 w-28 items-center justify-center rounded-full border-[8px] border-green-200">
                  <div className="text-center">
                    <h2 className="text-3xl font-black text-green-500">98%</h2>

                    <p className="text-xs text-gray-500">Excellent</p>
                  </div>
                </div>
              </div>

              {/* GRAPH */}
              <div className="absolute bottom-[-35px] left-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
                <div className="flex items-end gap-2">
                  {[40, 60, 50, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      style={{ height }}
                      className="w-4 rounded-full bg-gradient-to-t from-pink-500 to-purple-600"
                    />
                  ))}
                </div>
              </div>

              {/* ROBOT */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                alt="AI Website Design Hyderabad"
                className="relative z-10 h-[430px] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
