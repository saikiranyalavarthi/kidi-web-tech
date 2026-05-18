"use client";

import { motion } from "framer-motion";
import {
  Building2,
  UtensilsCrossed,
  Plane,
  Dumbbell,
  Sparkles,
  Car,
  Scale,
  BriefcaseBusiness,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    color: "text-rose-500",
    bg: "bg-rose-100",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    icon: Sparkles,
    title: "Beauty & Spa",
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    icon: Car,
    title: "Automobile",
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    icon: Scale,
    title: "Law Firms",
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    icon: BriefcaseBusiness,
    title: "And Many More",
    color: "text-gray-600",
    bg: "bg-gray-100",
  },
];

export default function AiIndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-pink-100 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-purple-100 blur-3xl" />
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
            We Build Websites For{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            AI-powered modern websites designed for businesses across multiple
            industries in Hyderabad and India.
          </p>
        </motion.div>

        {/* INDUSTRY GRID */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]"
              >
                {/* HOVER BG */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50" />
                </div>

                {/* ICON */}
                <div
                  className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${industry.bg} transition-all duration-500 group-hover:scale-110`}
                >
                  <Icon className={`h-8 w-8 ${industry.color}`} />
                </div>

                {/* TITLE */}
                <h3 className="relative mt-5 text-sm font-bold leading-snug text-gray-900">
                  {industry.title}
                </h3>

                {/* LINE EFFECT */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* BRAND TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[3px] text-purple-600">
            KIDI WEBTECH
          </p>
        </motion.div>
      </div>
    </section>
  );
}
