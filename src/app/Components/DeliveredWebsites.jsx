"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Business",
  "E-Commerce",
  "Education",
  "Healthcare",
  "Portfolio",
];

const websites = [
  {
    title: "Business Website",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Website",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Education Website",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare Website",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Portfolio Website",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DeliveredWebsites() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWebsites =
    activeCategory === "All"
      ? websites
      : websites.filter((item) => item.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-pink-100 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-purple-100 blur-3xl" />
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
          <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
            Websites We Have{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Delivered
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Explore our modern AI-powered websites crafted for businesses,
            eCommerce brands, healthcare, education, and portfolios.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-purple-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* WEBSITES GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filteredWebsites.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* LIVE TAG */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-purple-600 backdrop-blur-md">
                  AI Website
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Modern responsive UI with SEO optimization and premium design.
                </p>

                {/* BUTTON */}
              
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e1b4b] p-10 text-center text-white shadow-[0_20px_80px_rgba(76,29,149,0.3)]"
        >
          <h2 className="text-3xl font-black md:text-4xl">
            Want A Premium Website Like This?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            We build AI-powered websites with modern UI/UX, SEO optimization,
            mobile responsiveness, and lightning-fast performance.
          </p>

          <button className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-105">
            Start Your Website
          </button>
        </motion.div>
      </div>
    </section>
  );
}
