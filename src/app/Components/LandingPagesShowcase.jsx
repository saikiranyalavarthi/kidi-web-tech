"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react";

const landingPages = [
  {
    number: "01",
    title: "AI Visibility Landing Page",
    description:
      "A modern landing page for AI visibility platforms, helping brands understand how they appear across ChatGPT, Google, Claude and other AI search engines.",
    tags: [
      "Navbar",
      "Hero with Dashboard",
      "AI Answers",
      "Features",
      "Visibility Stats",
      "Testimonials",
      "Pricing",
      "FAQ",
      "CTA",
      "Footer",
    ],
    image: "/templates/ai-visibility.png",
    preview: "/templates/ai-visibility",
    code: "/contact",
  },
  {
    number: "02",
    title: "Product Landing Page",
    description:
      "A premium SaaS product landing page with an interactive hero, product showcase, customer reviews, feature sections and conversion-focused pricing.",
    tags: [
      "Navbar",
      "Hero Section",
      "Product Showcase",
      "Logo Cloud",
      "Features",
      "How It Works",
      "Testimonials",
      "Pricing",
      "CTA",
      "Footer",
    ],
    image: "/templates/product-landing.png",
    preview: "/templates/product-landing",
    code: "/contact",
  },
  {
    number: "03",
    title: "Digital Agency Landing Page",
    description:
      "A creative agency website featuring service showcases, project galleries, client testimonials and strong lead-generation sections.",
    tags: [
      "Navbar",
      "Hero Animation",
      "Services",
      "Portfolio",
      "Our Process",
      "Clients",
      "Testimonials",
      "Contact",
    ],
    image: "/templates/digital-agency.png",
    preview: "/templates/digital-agency",
    code: "/contact",
  },
  {
    number: "04",
    title: "Startup Landing Page",
    description:
      "A clean and conversion-focused startup landing page with product benefits, customer logos, pricing plans and a modern responsive layout.",
    tags: [
      "Navbar",
      "Hero",
      "Logo Cloud",
      "Benefits",
      "Product Features",
      "Pricing",
      "FAQ",
      "Footer",
    ],
    image: "/templates/startup-landing.png",
    preview: "/templates/startup",
    code: "/contact",
  },
  {
    number: "05",
    title: "AI SaaS Landing Page",
    description:
      "A next-generation AI product website with feature demonstrations, workflow previews, interactive dashboard sections and pricing.",
    tags: [
      "Navbar",
      "AI Hero",
      "Dashboard",
      "AI Features",
      "Integrations",
      "Workflow",
      "Pricing",
      "FAQ",
    ],
    image: "/templates/ai-saas.png",
    preview: "/templates/ai-saas",
    code: "/contact",
  },
];

function LandingPageItem({ page, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="grid grid-cols-1 items-center gap-8 border-b border-gray-100 py-10 first:pt-5 last:border-0 lg:grid-cols-12 lg:gap-12 lg:py-4"
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col lg:col-span-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
            Landing Page
          </span>

          <span className="text-xs text-gray-400">{page.number} / 05</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
          {page.title}
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
          {page.description}
        </p>

        {/* Feature Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {page.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-gray-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {/* <a
            href={page.preview}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-xs font-semibold text-gray-900 shadow-sm transition-all hover:border-blue-600 hover:text-blue-600"
          >
            <ExternalLink size={14} />
            Live Preview
          </a> */}

          <a
            href={page.code}
            className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-blue-600"
          >
            <Code2 size={14} />
            Get the Code
          </a>
        </div>
      </div>

      {/* RIGHT PREVIEW IMAGE */}
      <div className="lg:col-span-7">
        <a
          href={page.preview}
          className="group relative block overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
        >
          <div className="relative aspect-[1.55/1] overflow-hidden">
            <img
              src={page.image}
              alt={`${page.title} website design preview`}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/25">
              {/* <span className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-gray-950 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View Landing Page
                <ArrowUpRight size={15} />
              </span> */}
            </div>
          </div>
        </a>
      </div>
    </motion.article>
  );
}

export default function LandingPagesShowcase() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="rounded-md border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
              Landing Pages
            </span>

            <span className="text-xs text-gray-400">5+ Templates</span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Full landing pages for React,
            <span className="block text-blue-600">
              Next.js, and modern web apps.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500">
            Complete landing pages for Next.js, React, and modern web
            applications. Explore professionally designed sections, responsive
            layouts and conversion-focused experiences.
          </p>
        </motion.div>

        {/* LANDING PAGE LIST */}
        <div>
          {landingPages.map((page, index) => (
            <LandingPageItem key={page.number} page={page} index={index} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-7 sm:flex-row sm:items-center sm:p-10"
        >
          <div>
            <div className="mb-3 flex items-center gap-2 text-blue-600">
              <Sparkles size={17} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Custom Website Development
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-950">
              Need a landing page for your business?
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              Let's create a website that looks professional and converts.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Start Your Project
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
