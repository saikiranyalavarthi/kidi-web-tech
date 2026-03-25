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
          Best Web Development Company in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Custom, scalable, and high-performance web development solutions
          designed to accelerate your digital growth.
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
              alt="Professional web development company in Hyderabad"
              width={600}
              height={420}
              className="rounded-3xl object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Leading{" "}
              <span className="gradient-text">Website Development Experts</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> is a
              trusted web development company in Hyderabad delivering custom
              websites and web applications tailored to your business goals.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our development approach focuses on speed, security, scalability,
              and SEO-friendly architecture to ensure long-term digital success.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-14 text-gray-400">
        {/* WHAT IS WEB DEVELOPMENT */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Web Development and Why It Matters?
          </h2>
          <p>
            Web development is the process of building dynamic, interactive, and
            functional websites or web applications. A professionally developed
            website ensures fast performance, secure data handling, mobile
            responsiveness, and higher search engine rankings.
          </p>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Development Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom Website Development</li>
            <li>Business & Corporate Website Development</li>
            <li>E-commerce Website Development</li>
            <li>Web Application Development</li>
            <li>Frontend & Backend Development</li>
            <li>API Integration & Database Solutions</li>
            <li>CMS Development (WordPress & Custom CMS)</li>
            <li>Website Maintenance & Technical Support</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Development for Different Industries
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate & Property Websites</li>
            <li>Healthcare & Clinic Web Applications</li>
            <li>E-commerce & Online Stores</li>
            <li>Education & Training Platforms</li>
            <li>IT & SaaS Company Websites</li>
            <li>Startup & Enterprise Solutions</li>
          </ul>
        </div>

        {/* LOCAL SEO TARGETING */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Website Developers in Hyderabad
          </h2>
          <p>
            As a Hyderabad-based web development company, we understand local
            business requirements and search trends. Our websites are optimized
            to rank for keywords like{" "}
            <strong>"web development company in Hyderabad"</strong>,
            <strong> "website developers near me"</strong>, and
            <strong> "custom web development services"</strong>.
          </p>
        </div>

        {/* DEVELOPMENT PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Development Process
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Requirement Analysis & Planning</li>
            <li>UI/UX Design & Wireframing</li>
            <li>Frontend & Backend Development</li>
            <li>Testing & Quality Assurance</li>
            <li>Deployment & Optimization</li>
            <li>Ongoing Support & Maintenance</li>
          </ul>
        </div>

        {/* INTERNAL LINKING */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Integrated with SEO & Web Designing
          </h2>
          <p>
            Our web development services are aligned with{" "}
            <Link href="/services/seo" className="underline">
              SEO strategies
            </Link>{" "}
            and{" "}
            <Link href="/services/web-design" className="underline">
              professional web designing
            </Link>{" "}
            to ensure your website ranks higher and converts better.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Development – Frequently Asked Questions
          </h2>

          <p>
            <strong>How much does web development cost in Hyderabad?</strong>
            <br />
            The cost depends on features, integrations, and complexity. We offer
            affordable solutions for startups, SMEs, and enterprises.
          </p>

          <p className="mt-4">
            <strong>How long does it take to develop a website?</strong>
            <br />A standard business website takes 3–6 weeks, while complex web
            applications may take longer.
          </p>

          <p className="mt-4">
            <strong>
              Will my website be SEO-friendly and mobile responsive?
            </strong>
            <br />
            Yes. All our websites are built with clean code, fast loading speed,
            and fully responsive layouts.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Need a{" "}
          <span className="gradient-text">
            Reliable Web Development Partner?
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s build a powerful, scalable, and future-ready website for your
          business.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-500
              text-white font-semibold text-lg hover:opacity-90 transition"
          >
            Get Free Consultation →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="inline-block px-10 py-4 rounded-full
              border border-indigo-400 text-indigo-400
              hover:bg-indigo-400 hover:text-black transition"
          >
            WhatsApp Us
          </Link>
        </div>
      </section>
    </div>
  );
}
