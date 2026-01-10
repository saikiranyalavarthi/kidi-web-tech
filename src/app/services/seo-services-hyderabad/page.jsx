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
          Search Engine Optimization{" "}
          <span className="gradient-text">(SEO)</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Ethical, data-driven SEO strategies that increase rankings, traffic,
          and revenue.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">SEO Services</span>
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
                alt="SEO Services"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best <span className="gradient-text">SEO Services</span> in Hyderabad
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> helps
              businesses rank higher on Google using white-hat, conversion-focused SEO.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From technical audits to local SEO, we build long-term growth engines —
              not short-term tricks.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Want to <span className="gradient-text">Rank Higher?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Get a free SEO audit tailored to your business.
        </p>

        <Link
          href="/contact"
          className="
            inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-yellow-400 to-orange-500
            text-black font-semibold text-lg
            hover:opacity-90 transition
          "
        >
          Request Free SEO Audit →
        </Link>
      </section>
    </div>
  );
}
