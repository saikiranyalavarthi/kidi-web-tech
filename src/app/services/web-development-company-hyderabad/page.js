"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentClient() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Web Development Company in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We build fast, secure, and scalable websites and web applications
          designed to grow your business online.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <Image
              src="/assets/image18.jpg"
              alt="Web development company and website developers in Hyderabad"
              width={600}
              height={420}
              className="rounded-3xl object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Professional <span className="gradient-text">Web Development Services</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> is a leading
              website development company in Hyderabad delivering custom web
              solutions for startups, small businesses, and enterprises.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From business websites to advanced web applications, our web
              development services focus on performance, security, SEO readiness,
              and long-term scalability.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-12 text-gray-400">

        {/* WHAT IS WEB DEVELOPMENT */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Web Development?
          </h2>
          <p>
            Web development is the process of building and maintaining websites
            and web applications that function smoothly across all devices.
            Professional web development ensures your website loads fast, ranks
            well on search engines, and converts visitors into customers.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Development Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom Website Development</li>
            <li>Business & Corporate Website Development</li>
            <li>Web Application Development</li>
            <li>Frontend & Backend Development</li>
            <li>API Integration & Database Management</li>
            <li>Website Maintenance & Performance Optimization</li>
          </ul>
        </div>

        {/* LOCAL SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Development Services in Hyderabad
          </h2>
          <p>
            As a Hyderabad-based web development company, we understand local
            business needs and search intent. Our websites are optimized to rank
            for keywords like <strong>“web development company near me”</strong>{" "}
            and <strong>“website developers in Hyderabad”</strong>.
          </p>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Development Process
          </h2>
          <p>
            We follow a structured development process including planning,
            UI/UX design, development, testing, deployment, and ongoing support.
            This ensures high-quality, scalable, and secure web solutions.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Development – Frequently Asked Questions
          </h2>

          <p>
            <strong>How much does web development cost?</strong><br />
            Website development cost depends on features, design complexity, and
            functionality. We offer flexible pricing for startups and businesses.
          </p>

          <p className="mt-4">
            <strong>How long does it take to build a website?</strong><br />
            A standard business website usually takes 3–6 weeks.
          </p>

          <p className="mt-4">
            <strong>Will my website be SEO-friendly?</strong><br />
            Yes. All our websites are built with SEO-friendly structure, fast
            loading speed, and clean code.
          </p>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Need a <span className="gradient-text">Web Development Partner?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s build a powerful, secure, and scalable website for your business.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-500
              text-white font-semibold text-lg"
          >
            Get Free Consultation →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="inline-block px-10 py-4 rounded-full
              border border-indigo-400 text-indigo-400"
          >
            WhatsApp Us
          </Link>
        </div>
      </section>

    </div>
  );
}
