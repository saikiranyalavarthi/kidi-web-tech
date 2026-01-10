"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Web Development{" "}
          <span className="gradient-text">Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Scalable, secure, and high-performance websites & web applications
          built for growth.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">Web Development</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image18.jpg"
                alt="Web Development Company in Hyderabad"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Web Development Company in{" "}
              <span className="gradient-text">Hyderabad</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Web development focuses on functionality, performance, and
              scalability — ensuring your website works flawlessly across all
              devices.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> builds
              everything from fast static websites to complex web applications
              using modern, secure technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether you’re launching a startup or scaling an enterprise
              product, we deliver clean code and future-ready solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-center mb-14">
          Our <span className="gradient-text">Development Process</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Project Planning & Scope Definition",
            "UI/UX & Architecture Design",
            "Frontend & Backend Development",
            "Testing & Quality Assurance",
            "Deployment & Security Setup",
            "Maintenance & Performance Optimization",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl p-6 hover:border-indigo-400 transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item}</h4>
              <p className="text-gray-400 text-sm">
                Structured workflows that ensure quality, speed, and scalability.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <p className="text-gray-400 text-lg leading-relaxed max-w-5xl mx-auto">
          A good website isn’t just code — it’s a business asset. At{" "}
          <strong className="gradient-text">KIDIWEBTECH</strong>, we combine
          strategy, design, and development to create web solutions that perform
          exceptionally. From SEO optimization and fast load speeds to secure
          backend architecture and responsive layouts, we build websites that
          scale with your business.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Need a <span className="gradient-text">Powerful Web Solution?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s build a fast, secure, and scalable website tailored to your goals.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="
              inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-500
              text-white font-semibold text-lg
              hover:opacity-90 transition
            "
          >
            Request a Web Development Proposal →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="
              inline-block px-10 py-4 rounded-full
              border border-indigo-400 text-indigo-400
              hover:bg-indigo-400 hover:text-black
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
