"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ArrowUpRight, Sparkles, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/seo-services" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const services = [
  { name: "SEO Services", href: "/technical-seo-services" },
  { name: "Website Development", href: "/website-development-services" },
  { name: "Google Ads", href: "/google-ads-agency" },
  { name: "GMB Optimization", href: "/gmb-optimization-services" },
  {
    name: "App Development",
    href: "/services/mobile-app-development-hyderabad",
  },
  { name: "Search Ads Services", href: "/search-ads-services" },
];

const socials = [
  {
    icon: <FaFacebookF />,
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61585391203839",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/kidiwebtech/",
  },
  {
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/",
  },
  {
    icon: <FaTwitter />,
    name: "X",
    link: "https://x.com/kidiwebtech",
  },
  {
    icon: <FaYoutube />,
    name: "YouTube",
    link: "https://www.youtube.com/@KIDIWEBTECH",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="kidi-footer relative overflow-hidden border-t border-gray-200 bg-white text-gray-900">
      {/* ANIMATED BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="kidi-glow kidi-glow-one absolute -left-40 top-0 h-[450px] w-[450px] rounded-full" />

        <div className="kidi-glow kidi-glow-two absolute -right-40 top-[30%] h-[500px] w-[500px] rounded-full" />

        <div className="kidi-glow kidi-glow-three absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full" />

        <div className="kidi-footer-grid absolute inset-0 opacity-[0.45]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="kidi-footer-cta relative mb-20 overflow-hidden rounded-[28px] border border-gray-200 p-7 shadow-xl shadow-gray-200/50 sm:p-10 lg:p-12"
        >
          <div className="kidi-cta-shine pointer-events-none absolute inset-0" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700">
                <Sparkles size={14} />
                Let's Create Something Great
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Ready to grow your business with{" "}
                <span className="text-gray-400">KidiWebTech?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                From website development to digital marketing, we help
                businesses build a stronger digital presence and move forward
                with confidence.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-gray-800"
              >
                Get Free Consultation
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
              >
                WhatsApp Us
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center">
              <img
                src="/kidiwebtech-logo.png"
                alt="KidiWebTech Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-gray-600">
              KIDIWEBTECH helps businesses grow online through SEO, website
              development, Google Ads, branding and digital marketing
              strategies. We create digital experiences that help brands move
              forward.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.08 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="flex items-center gap-3 text-lg font-bold tracking-wide text-gray-950">
              <span className="h-5 w-1 rounded-full bg-black" />
              Quick Links
            </h3>

            <ul className="mt-8 space-y-5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition duration-300 hover:translate-x-1 hover:text-black"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-400 transition group-hover:bg-black" />
                    {item.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="flex items-center gap-3 text-lg font-bold tracking-wide text-gray-950">
              <span className="h-5 w-1 rounded-full bg-black" />
              Our Services
            </h3>

            <ul className="mt-8 space-y-5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition duration-300 hover:translate-x-1 hover:text-black"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-400 transition group-hover:bg-black" />
                    {service.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="flex items-center gap-3 text-lg font-bold tracking-wide text-gray-950">
              <span className="h-5 w-1 rounded-full bg-black" />
              Contact Us
            </h3>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:info@kidiwebtech.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-800 transition group-hover:bg-black group-hover:text-white">
                  <FaEnvelope size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    Email Address
                  </p>
                  <p className="mt-2 break-all text-sm text-gray-700 transition group-hover:text-black">
                    info@kidiwebtech.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919390627367"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-800 transition group-hover:bg-black group-hover:text-white">
                  <FaPhoneAlt size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    Phone Number
                  </p>
                  <p className="mt-2 text-sm text-gray-700 transition group-hover:text-black">
                    +91 93906 27367
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-800">
                  <FaMapMarkerAlt size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    Our Location
                  </p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">
                    Kakatiya Hills, Guttala Begumpet, Madhapur, Hyderabad,
                    Telangana 500081
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LARGE ANIMATED WORDMARK */}
        <div className="relative mt-12 overflow-hidden py-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-[80%] rounded-full bg-gray-200/70 blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.65em] text-gray-400 sm:text-xs">
              Creative Digital Experiences
            </p>

            <h2 className="kidi-footer-wordmark select-none whitespace-nowrap text-center text-[clamp(2.6rem,12.2vw,11rem)] font-black leading-none tracking-[-0.09em]">
              KIDIWEBTECH
            </h2>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gray-300 sm:w-20" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-500 sm:text-xs">
                Build Better. Grow Faster.
              </p>
              <span className="h-px w-10 bg-gray-300 sm:w-20" />
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-gray-200 py-8 text-center md:flex-row md:text-left">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {year} <span className="font-bold text-black">KIDIWEBTECH</span>.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 sm:text-sm">
            <Link
              href="/privacy-policy"
              className="transition hover:text-black"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-black"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 transition hover:text-black"
            >
              Let's Talk
              <MoveUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
