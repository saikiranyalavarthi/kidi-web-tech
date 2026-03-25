"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SocialMediaMarketingPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Best Social Media Marketing Services in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          ROI-focused Social Media Marketing (SMM) strategies that increase
          brand awareness, engagement, and high-quality lead generation.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span>Social Media Marketing</span>
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
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image15.jpg"
                alt="Social media marketing agency in Hyderabad providing SMM services"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Leading{" "}
              <span className="gradient-text">SMM Agency in Hyderabad</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> is a
              trusted social media marketing company helping businesses grow on
              Instagram, Facebook, LinkedIn, and YouTube through creative,
              strategic, and performance-driven campaigns.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We combine organic social media growth with paid advertising to
              convert followers into loyal customers and measurable revenue.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-14 text-gray-400">
        {/* WHAT IS SMM */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Social Media Marketing (SMM)?
          </h2>
          <p>
            Social Media Marketing (SMM) is the process of promoting your
            business using platforms like Instagram, Facebook, LinkedIn,
            YouTube, and Twitter. A professional SMM strategy increases brand
            visibility, builds audience trust, and drives consistent inquiries
            through both organic engagement and paid social advertising.
          </p>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Social Media Marketing Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Social Media Account Setup & Optimization</li>
            <li>Content Calendar Planning & Creative Design</li>
            <li>Instagram & Facebook Management</li>
            <li>LinkedIn Marketing for B2B Businesses</li>
            <li>YouTube Marketing & Video Promotion</li>
            <li>Paid Social Media Advertising (Meta Ads, LinkedIn Ads)</li>
            <li>Influencer Collaboration & Brand Campaigns</li>
            <li>Analytics Tracking & Performance Reporting</li>
          </ul>
        </div>

        {/* LOCAL TARGETING */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Social Media Marketing for Hyderabad Businesses
          </h2>
          <p>
            Our Hyderabad-focused SMM strategies help local businesses reach
            nearby customers, increase brand recognition, and generate direct
            inquiries. We create geo-targeted ad campaigns and localized content
            that connects with your regional audience effectively.
          </p>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            SMM for Different Industries
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate Social Media Marketing</li>
            <li>Healthcare & Clinic Social Media Promotion</li>
            <li>E-commerce & Product-Based Businesses</li>
            <li>Education & Training Institutes</li>
            <li>Restaurants & Local Service Providers</li>
            <li>Startups & IT Companies</li>
          </ul>
        </div>

        {/* ORGANIC VS PAID */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Organic Social Media vs Paid Advertising
          </h2>
          <p>
            Organic social media builds long-term brand credibility and audience
            loyalty, while paid social ads provide instant reach and faster lead
            generation. A combined strategy delivers sustainable growth and
            improved return on investment (ROI).
          </p>
        </div>

        {/* INTERNAL LINKING */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Integrating SMM with SEO & PPC
          </h2>
          <p>
            Social media marketing works best when integrated with{" "}
            <Link href="/services/seo" className="underline">
              SEO services
            </Link>{" "}
            and{" "}
            <Link href="/services/ppc" className="underline">
              PPC advertising
            </Link>
            . Together, these strategies maximize visibility, traffic,
            engagement, and conversions.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose KIDIWEBTECH for Social Media Marketing?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Creative & Trend-Based Content Strategy</li>
            <li>Data-Driven Campaign Optimization</li>
            <li>Transparent Reporting & ROI Tracking</li>
            <li>Industry-Specific Marketing Plans</li>
            <li>Dedicated Social Media Experts</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Social Media Marketing – Frequently Asked Questions
          </h2>

          <p>
            <strong>
              Which social media platform is best for my business?
            </strong>
            <br />
            It depends on your industry and target audience. B2B companies
            benefit from LinkedIn, while B2C brands often perform well on
            Instagram and Facebook.
          </p>

          <p className="mt-4">
            <strong>How long does SMM take to show results?</strong>
            <br />
            Organic growth typically takes 2–3 months, while paid campaigns can
            generate results within weeks.
          </p>

          <p className="mt-4">
            <strong>Do you provide monthly performance reports?</strong>
            <br />
            Yes. We provide detailed analytics reports covering engagement,
            reach, conversions, and ROI.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to{" "}
          <span className="gradient-text">Grow Your Brand Online?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let KIDIWEBTECH turn your social media presence into a powerful
          revenue-generating marketing channel.
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
