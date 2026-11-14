"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Search,
  Smartphone,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Design",
    description: "Smart, modern and creative AI-generated website designs.",
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "On-time delivery with premium quality website development.",
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "SEO-friendly websites built for higher Google rankings.",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "100% responsive websites across all mobile devices.",
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Secure, fast and reliable modern web solutions.",
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We are always here to support your business growth.",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
];

export default function AiDeliverySection() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[240px] w-[240px] rounded-full bg-pink-100 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[240px] w-[240px] rounded-full bg-purple-100 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-black text-gray-900 md:text-5xl">
            We Use AI To Deliver{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Premium AI-powered website development services with modern UI/UX,
            SEO optimization, and lightning-fast performance.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
              >
                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50" />
                </div>

                {/* ICON */}
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} transition-all duration-500 group-hover:scale-110`}
                >
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>

                {/* CONTENT */}
                <div className="relative mt-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
