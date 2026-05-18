"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Search,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Modern, responsive and beautiful website designs that convert.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    desc: "Powerful online stores with secure payment gateway integration.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "Education Websites",
    desc: "Learning platforms, school websites, LMS and education portals.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Websites",
    desc: "Hospital, clinic and healthcare websites with appointment systems.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Rank higher on Google with our advanced SEO strategies.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android & iOS applications that grow your business.",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function AIServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-pink-100 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[280px] w-[280px] rounded-full bg-purple-100 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[4px] text-purple-500">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            We combine creativity with AI technology to deliver exceptional
            websites and digital solutions for businesses in Hyderabad.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.06]`}
                  />
                </div>

                {/* ICON */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3 className="mt-6 text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {service.desc}
                  </p>
                </div>

                {/* BORDER EFFECT */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e1b4b] p-10 text-center text-white shadow-[0_20px_80px_rgba(76,29,149,0.3)]"
        >
          <h2 className="text-3xl font-black md:text-4xl">
            Ready To Build Your Dream Website?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Get a modern AI-powered website with SEO optimization, mobile
            responsiveness, lightning-fast speed, and stunning UI/UX design.
          </p>

          <button className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}