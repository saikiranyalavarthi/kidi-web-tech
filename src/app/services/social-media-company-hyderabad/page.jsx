"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SocialMediaMarketingPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-18 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Social Media Marketing Services in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Data-driven social media marketing strategies that build brand
          authority, increase engagement, and generate high-quality leads.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <span className="mx-2">›</span>
          <span>Social Media Marketing</span>
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
                alt="Social media marketing services and SMM company in Hyderabad"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best <span className="gradient-text">Social Media Marketing Company</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> is a trusted
              social media marketing agency in Hyderabad helping businesses grow
              on Instagram, Facebook, LinkedIn, and YouTube through creative and
              performance-driven strategies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We focus on content creation, audience engagement, paid social
              advertising, and analytics to convert followers into loyal
              customers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-12 text-gray-400">

        {/* WHAT IS SMM */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Social Media Marketing (SMM)?
          </h2>
          <p>
            Social Media Marketing (SMM) is the use of social media platforms to
            promote brands, engage audiences, and drive business growth. A
            professional SMM strategy increases brand visibility, builds trust,
            and generates consistent leads through organic and paid campaigns.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Social Media Marketing Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Social Media Account Setup & Branding</li>
            <li>Content Strategy & Creative Post Design</li>
            <li>Instagram, Facebook & LinkedIn Management</li>
            <li>Paid Social Media Advertising (Meta & LinkedIn Ads)</li>
            <li>Community Management & Engagement</li>
            <li>Analytics, Reporting & Strategy Optimization</li>
          </ul>
        </div>

        {/* LOCAL SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Social Media Marketing for Local Businesses in Hyderabad
          </h2>
          <p>
            Our local social media marketing services help businesses reach
            nearby customers, improve brand recognition, and generate inquiries.
            We create geo-targeted content and ads designed specifically for
            Hyderabad-based audiences.
          </p>
        </div>

        {/* SMM VS ADS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Social Media Marketing vs Paid Advertising
          </h2>
          <p>
            Organic social media marketing builds long-term brand trust and
            engagement, while paid social ads deliver faster reach and lead
            generation. A combined strategy ensures sustainable growth and
            better ROI.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Social Media Marketing – Frequently Asked Questions
          </h2>

          <p>
            <strong>Which social media platforms are best for business?</strong><br />
            Instagram, Facebook, LinkedIn, and YouTube are the most effective
            platforms depending on your business goals and audience.
          </p>

          <p className="mt-4">
            <strong>How long does social media marketing take to work?</strong><br />
            Organic growth typically takes 2–3 months, while paid campaigns can
            deliver faster results.
          </p>

          <p className="mt-4">
            <strong>Is social media marketing suitable for small businesses?</strong><br />
            Yes. Social media marketing is highly cost-effective and ideal for
            small and local businesses.
          </p>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-18 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to <span className="gradient-text">Grow on Social Media?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Partner with KIDIWEBTECH and turn your social media presence into a
          powerful revenue-generating channel.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black font-semibold text-lg
              hover:opacity-90 transition"
          >
            Get Free Consultation →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="inline-block px-10 py-4 rounded-full
              border border-yellow-400 text-yellow-400
              hover:bg-yellow-400 hover:text-black transition"
          >
            WhatsApp Us
          </Link>
        </div>
      </section>

    </div>
  );
}
