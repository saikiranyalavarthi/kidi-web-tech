"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Code2,
  Search,
  Layers,
  Sparkles,
  Smartphone,
  Megaphone,
} from "lucide-react";

const previews = [
  { icon: Code2, title: "Web Development", color: "bg-blue-50 text-blue-600" },
  { icon: Search, title: "SEO Growth", color: "bg-purple-50 text-purple-600" },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    color: "bg-orange-50 text-orange-600",
  },
  { icon: Smartphone, title: "Mobile Apps", color: "bg-cyan-50 text-cyan-600" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-100/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1500px] items-center px-6 py-20 lg:min-h-[740px] lg:grid-cols-[48%_52%] lg:px-10 xl:px-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-[660px]"
        >
          {/* Announcement */}
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 py-2 pl-3 pr-4 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Sparkles size={17} />
            </span>

            <span>Creative Digital Solutions</span>

            <span className="h-5 w-px bg-gray-300" />

            <span className="hidden sm:inline">Explore What We Do</span>

            <ArrowRight size={16} />
          </Link>

          {/* Heading */}
          <h1 className="text-[43px] font-bold leading-[1.09] tracking-[-2px] text-[#171717] sm:text-6xl lg:text-[58px] xl:text-[65px]">
            We Build Digital
            <span className="block">Experiences That</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Grow Businesses.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[600px] text-base leading-8 text-gray-500 sm:text-lg">
            Transform your business with innovative website development,
            powerful SEO, creative design and digital marketing solutions. We
            turn your ideas into impactful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/30"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600"
            >
              Explore Our Work
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Trust Section */}
          <div className="mt-12 border-t border-gray-100 pt-7">
            <p className="text-sm font-medium text-gray-500">
              Digital solutions for ambitious businesses
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-4">
              {previews.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-600"
                  >
                    <span className={`rounded-lg p-2 ${item.color}`}>
                      <Icon size={17} />
                    </span>
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL COLLAGE */}
        <div className="relative mt-16 h-[540px] w-full lg:mt-0 lg:h-[650px]">
          {/* Main website preview */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-[8%] top-[12%] z-10 w-[82%] overflow-hidden rounded-[24px] border border-gray-200 bg-white p-2 shadow-[0_20px_80px_rgba(0,0,0,0.10)]"
          >
            <div className="rounded-[18px] border border-gray-100 bg-[#fafafa] p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-blue-600" />
                  <span className="font-bold text-gray-900">Your Brand</span>
                </div>

                <div className="flex gap-2">
                  <div className="h-2 w-9 rounded bg-gray-200" />
                  <div className="h-2 w-9 rounded bg-gray-200" />
                  <div className="h-2 w-9 rounded bg-gray-200" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-8">
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                    Digital Excellence
                  </span>

                  <h3 className="mt-3 text-xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                    Build Your
                    <span className="block text-blue-600">Online Future.</span>
                  </h3>

                  <p className="mt-3 text-[10px] leading-5 text-gray-500 sm:text-xs">
                    Modern websites built for growth, performance and
                    conversions.
                  </p>

                  <div className="mt-5 h-8 w-24 rounded-lg bg-blue-600 sm:h-10 sm:w-32" />
                </div>

                <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100">
                  <div className="absolute h-32 w-32 rounded-full bg-blue-500/30 blur-2xl" />
                  <div className="relative flex h-28 w-28 rotate-[-10deg] items-center justify-center rounded-3xl border border-white/80 bg-white/70 shadow-xl backdrop-blur-xl">
                    <Globe size={65} className="text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {["Design", "Development", "Growth"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-gray-100 bg-white p-3 text-center"
                  >
                    <div className="mx-auto mb-2 h-5 w-5 rounded-md bg-blue-100" />
                    <span className="text-[9px] font-semibold text-gray-600 sm:text-xs">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Top floating card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-[-2%] top-[2%] z-20 hidden w-[210px] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <Search size={19} />
              </span>
              <div>
                <p className="text-xs font-bold text-gray-900">SEO Growth</p>
                <p className="text-[10px] text-gray-400">Search visibility</p>
              </div>
            </div>

            <div className="mt-5 flex h-12 items-end gap-1.5">
              {[25, 40, 30, 55, 45, 75, 65, 95].map((height, i) => (
                <div
                  key={i}
                  style={{ height: `${height}%` }}
                  className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400"
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom floating card */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-[7%] left-[-2%] z-20 w-[220px] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:w-[250px]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-900">
                  Digital Services
                </p>
                <p className="mt-1 text-[10px] text-gray-400">
                  All under one roof
                </p>
              </div>
              <Layers className="text-blue-600" size={22} />
            </div>

            <div className="mt-4 space-y-3">
              {previews.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-3">
                    <span className={`rounded-lg p-2 ${item.color}`}>
                      <Icon size={14} />
                    </span>
                    <span className="text-xs font-medium text-gray-700">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Decorative gradient */}
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-blue-100/70 blur-[90px]" />
        </div>
      </div>
    </section>
  );
}
