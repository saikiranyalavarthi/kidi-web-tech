"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WebHostingPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Web Hosting{" "}
          <span className="gradient-text">Services</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Secure, fast, and reliable hosting solutions built for performance
          and scalability.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">Web Hosting</span>
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image17.jpg"
                alt="Web Hosting Services in Hyderabad"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Web Hosting Company in{" "}
              <span className="gradient-text">Hyderabad</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Web hosting makes your website accessible to the world. Without
              reliable hosting, even the best website can fail.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> provides
              secure and performance-driven hosting solutions including shared,
              cloud, and dedicated hosting.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From domain registration to server configuration, we handle
              everything so your website stays fast, safe, and online 24/7.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= HOSTING TYPES ================= */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-center mb-14">
          Hosting <span className="gradient-text">Solutions</span> We Offer
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Shared Web Hosting",
            "Dedicated Server Hosting",
            "Cloud Hosting Solutions",
            "WordPress & CMS Hosting",
            "Domain Registration & Management",
            "Custom Hosting Plans",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item}</h4>
              <p className="text-gray-400 text-sm">
                Optimized for speed, security, and high uptime performance.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <p className="text-gray-400 text-lg leading-relaxed max-w-5xl mx-auto">
          Our hosting solutions come with enterprise-grade security, automated
          backups, 99.99% uptime, and 24×7 expert support. Whether you’re running
          a small business website or a high-traffic application,{" "}
          <strong className="gradient-text">KIDIWEBTECH</strong> ensures your
          hosting environment is stable, scalable, and future-ready.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Need <span className="gradient-text">Reliable Hosting?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Get secure, high-performance hosting that grows with your business.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="
              inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-cyan-500 to-blue-500
              text-black font-semibold text-lg
              hover:opacity-90 transition
            "
          >
            Get a Hosting Plan →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="
              inline-block px-10 py-4 rounded-full
              border border-cyan-400 text-cyan-400
              hover:bg-cyan-400 hover:text-black
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
