"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SocialMediaMarketingPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================ */}
      <section className="py-18 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Social Media Marketing{" "}
          <span className="gradient-text">(SMM)</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Build brand authority, drive engagement, and generate leads through
          powerful social media strategies.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">Social Media Marketing</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-12 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image15.jpg"
                alt="Social Media Marketing Services"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best <span className="gradient-text">Social Media Marketing</span>{" "}
              Company in Hyderabad
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> helps
              businesses grow on platforms like Instagram, Facebook, LinkedIn,
              and YouTube using data-driven and creative strategies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We don’t just post content — we build communities, spark
              conversations, and convert followers into loyal customers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-12 px-6 md:px-20 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-center mb-14">
          Our <span className="gradient-text">SMM Services</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Social Media Account Setup & Branding",
            "Content Strategy & Creative Campaigns",
            "Post Scheduling & Optimization",
            "Audience Engagement & Community Management",
            "Paid Ads (Meta, Instagram, LinkedIn)",
            "Analytics, Reports & Strategy Improvement",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl p-6 hover:border-yellow-400 transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item}</h4>
              <p className="text-gray-400 text-sm">
                Performance-focused execution designed to grow reach and
                conversions.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-18 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to <span className="gradient-text">Grow on Social Media?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Partner with KIDIWEBTECH and turn your social presence into a
          revenue-generating asset.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="
              inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black font-semibold text-lg
              hover:opacity-90 transition
            "
          >
            Get Free Consultation →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="
              inline-block px-10 py-4 rounded-full
              border border-yellow-400 text-yellow-400
              hover:bg-yellow-400 hover:text-black
              transition
            "
          >
            WhatsApp Us
          </Link>
        </div>
      </section>
    </div>
  );
}
