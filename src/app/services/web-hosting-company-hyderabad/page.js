"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WebHostingPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Best Web Hosting Services in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Secure, high-speed, and scalable web hosting solutions designed for
          businesses, startups, and growing enterprises.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">Web Hosting</span>
        </nav>
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image17.jpg"
                alt="Web hosting company in Hyderabad providing secure hosting services"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Reliable <span className="gradient-text">Web Hosting Company</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> offers
              performance-driven web hosting services in Hyderabad designed to
              keep your website online, secure, and lightning-fast.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From shared hosting for startups to cloud and dedicated server
              solutions for enterprises, we provide hosting environments built
              for scalability and maximum uptime.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= HOSTING SERVICES ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto space-y-16 text-gray-400">

        <div>
          <h3 className="text-3xl font-extrabold text-center mb-12">
            Hosting <span className="gradient-text">Solutions</span> We Offer
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Shared Web Hosting",
              "Dedicated Server Hosting",
              "Cloud Hosting Solutions",
              "WordPress & CMS Hosting",
              "Domain Registration & SSL",
              "Custom Enterprise Hosting",
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
                <p className="text-sm">
                  Optimized for speed, security, daily backups, and 99.99% uptime performance.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WHY HOSTING MATTERS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Reliable Web Hosting Matters
          </h2>
          <p>
            Your hosting directly affects website speed, security, search engine
            rankings, and user experience. Slow servers and frequent downtime
            can negatively impact your business reputation and SEO performance.
          </p>
        </div>

        {/* LOCAL TARGETING */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Hosting Services for Hyderabad Businesses
          </h2>
          <p>
            As a Hyderabad-based hosting provider, we understand local business
            needs. Whether you're running a business website, e-commerce store,
            or web application, our hosting infrastructure ensures fast loading
            speeds and reliable uptime.
          </p>
        </div>

        {/* SECURITY FEATURES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Security & Performance Features
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Free SSL Certificate</li>
            <li>Daily Automated Backups</li>
            <li>Firewall & Malware Protection</li>
            <li>SSD-Based High-Speed Servers</li>
            <li>24×7 Technical Support</li>
            <li>Scalable Resources</li>
          </ul>
        </div>

        {/* INTEGRATION */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Integrated with Web Development & SEO
          </h2>
          <p>
            Our hosting works seamlessly with{" "}
            <Link href="/services/web-development" className="underline">
              web development services
            </Link>{" "}
            and{" "}
            <Link href="/services/seo" className="underline">
              SEO optimization
            </Link>
            , ensuring fast load times and improved search rankings.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Hosting – Frequently Asked Questions
          </h2>

          <p>
            <strong>Which hosting plan is best for small businesses?</strong><br />
            Shared hosting is ideal for startups and small websites, while cloud
            hosting offers better scalability for growing businesses.
          </p>

          <p className="mt-4">
            <strong>Do you provide domain registration?</strong><br />
            Yes. We offer domain registration, renewal, and management services.
          </p>

          <p className="mt-4">
            <strong>Is your hosting SEO-friendly?</strong><br />
            Yes. Our servers are optimized for speed and performance, which
            positively impacts search engine rankings.
          </p>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Need <span className="gradient-text">Fast & Secure Hosting?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Get reliable hosting infrastructure that keeps your website online
          and growing 24/7.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-cyan-500 to-blue-500
              text-black font-semibold text-lg
              hover:opacity-90 transition"
          >
            Get a Hosting Plan →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="inline-block px-10 py-4 rounded-full
              border border-cyan-400 text-cyan-400
              hover:bg-cyan-400 hover:text-black transition"
          >
            WhatsApp Us
          </Link>
        </div>
      </section>

    </div>
  );
}