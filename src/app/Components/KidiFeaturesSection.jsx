"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Layers3,
  ShoppingBag,
  Bot,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Modern Website Development",
    description:
      "High-performance business websites built with React, Next.js and modern web technologies. Responsive, SEO-friendly and designed to convert.",
    label: "Website Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
    size: "large",
    accent: "from-blue-500/30",
    icon: Code2,
    href: "/website-development-services",
  },
  {
    number: "02",
    title: "Complete Digital Solutions",
    description:
      "From digital strategy and branding to development and marketing, build your entire digital presence with one technology partner.",
    label: "Digital Solutions",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85",
    size: "large",
    accent: "from-purple-500/30",
    icon: Globe,
    href: "/services",
  },
  {
    number: "03",
    title: "Creative UI/UX Experiences",
    description:
      "Beautiful interfaces, interactive elements, dashboards and user experiences designed around your customers.",
    label: "UI / UX Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=85",
    size: "small",
    accent: "from-cyan-500/30",
    icon: Layers3,
    href: "/ui-ux-design-services",
  },
  {
    number: "04",
    title: "E-Commerce Websites",
    description:
      "Build online stores with modern product pages, shopping experiences, payment integration and scalable architecture.",
    label: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
    size: "small",
    accent: "from-orange-500/30",
    icon: ShoppingBag,
    href: "/ecommerce-development-services",
  },
  {
    number: "05",
    title: "AI & Business Automation",
    description:
      "Connect AI tools, automate repetitive tasks and create smarter workflows that help your business work efficiently.",
    label: "AI & Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85",
    size: "small",
    accent: "from-violet-500/30",
    icon: Bot,
    href: "/ai-automation",
  },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.a
      href={feature.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#17151C] p-1 transition-colors duration-300 hover:border-blue-500/30 ${
        feature.size === "large" ? "lg:col-span-6" : "lg:col-span-4"
      }`}
    >
      {/* IMAGE PREVIEW */}
      <div
        className={`relative overflow-hidden rounded-xl bg-[#222027] ${
          feature.size === "large"
            ? "h-[190px] sm:h-[220px]"
            : "h-[170px] sm:h-[185px]"
        }`}
      >
        <img
          src={feature.image}
          alt={`${feature.title} visual preview`}
          loading="lazy"
          className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
        />

        {/* Image Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.accent} via-transparent to-black/60`}
        />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 backdrop-blur-md">
          <Icon size={13} className="text-blue-300" />
          <span className="text-[10px] font-semibold text-white">
            {feature.label}
          </span>
        </div>

        {/* Preview Hover Label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black shadow-xl">
            Explore Solution
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="flex items-start justify-between gap-4 px-3 py-4 sm:px-4">
        <div className="min-w-0">
          <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">
            {feature.title}
          </h3>

          <p className="mt-2 max-w-xl text-xs leading-6 text-gray-400">
            {feature.description}
          </p>
        </div>

        <span className="mt-0.5 shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400">
          <ArrowUpRight size={17} />
        </span>
      </div>

      {/* Decorative Number */}
      <span className="pointer-events-none absolute right-5 top-5 text-[10px] font-bold tracking-widest text-white/40">
        {feature.number}
      </span>
    </motion.a>
  );
}

export default function KidiFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0C0A10] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-700/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              <Sparkles size={15} />
              What We Build
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Build the whole digital
              <br className="hidden sm:block" />
              <span className="text-gray-500">
                experience, not just a website.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
              From your first website to complete digital business solutions,
              KidiWebTech brings design, technology and intelligent automation
              together.
            </p>
          </div>

          <a
            href="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-white px-5 py-3 text-xs font-bold text-gray-950 transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Explore All Services
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-white/[0.08] bg-[#17151C] p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Let's Build Something
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Let's turn your business idea into a digital experience.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Start Your Project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
