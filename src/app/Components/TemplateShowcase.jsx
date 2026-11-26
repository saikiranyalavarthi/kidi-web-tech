"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const templateGroups = [
  {
    title: "Website Design & Development Templates",
    description:
      "Modern, responsive website templates designed for businesses, agencies and creative studios.",
    templates: [
      {
        name: "Business Website",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=90",
        preview: "/templates/business-website",
        category: "Business",
      },
      {
        name: "Creative Agency",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=90",
        preview: "/templates/creative-agency",
        category: "Agency",
      },
      {
        name: "Portfolio Website",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&q=90",
        preview: "/templates/portfolio",
        category: "Portfolio",
      },
    ],
  },
  {
    title: "Digital Marketing Agency Templates",
    description:
      "Professional agency website designs with service sections, pricing layouts and lead generation pages.",
    templates: [
      {
        name: "Digital Agency",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=90",
        preview: "/templates/digital-agency",
        category: "Marketing",
      },
      {
        name: "SEO Agency",
        image:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1000&q=90",
        preview: "/templates/seo-agency",
        category: "SEO",
      },
      {
        name: "Marketing Studio",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&q=90",
        preview: "/templates/marketing-studio",
        category: "Studio",
      },
    ],
  },
  {
    title: "Modern SaaS & Technology Templates",
    description:
      "Clean SaaS landing pages, software product websites and AI startup templates.",
    templates: [
      {
        name: "SaaS Landing Page",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=90",
        preview: "/templates/saas-landing",
        category: "SaaS",
      },
      {
        name: "AI Startup Website",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=90",
        preview: "/templates/ai-startup",
        category: "AI",
      },
      {
        name: "Software Dashboard",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1000&q=90",
        preview: "/templates/software-dashboard",
        category: "Software",
      },
    ],
  },
];

const extraTemplates = [
  {
    name: "E-Commerce Website",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=90",
    preview: "/templates/ecommerce",
    category: "E-Commerce",
  },
  {
    name: "Real Estate Website",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=90",
    preview: "/templates/real-estate",
    category: "Real Estate",
  },
  {
    name: "Mobile App Landing",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=90",
    preview: "/templates/mobile-app",
    category: "Mobile App",
  },
];

function TemplateCard({ template, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group min-w-0"
    >
      <Link
        href={template.preview}
        className="relative block aspect-[1.35/1] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-900/10"
      >
        <Image
          src={template.image}
          alt={`${template.name} website template preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
          <span className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ExternalLink size={14} />
            Preview Template
          </span>
        </div>
      </Link>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {template.name}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{template.category}</p>
        </div>

        <Link
          href={template.preview}
          aria-label={`View ${template.name}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function TemplateShowcase() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Our Digital Creations
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Explore Our
            <span className="text-blue-600"> Website Designs.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500 sm:text-lg">
            Discover modern website concepts, creative layouts and digital
            experiences built to help brands stand out online.
          </p>
        </motion.div>

        {/* Template Groups */}
        <div className="space-y-20">
          {templateGroups.map((group, groupIndex) => (
            <div key={group.title}>
              {/* Group Header */}
              <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div className="max-w-xl">
                  <h3 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {group.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-row gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-xs font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    <ExternalLink size={14} />
                    Live Preview
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Get a Website
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Preview Images */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.templates.map((template, index) => (
                  <TemplateCard
                    key={template.name}
                    template={template}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {extraTemplates.map((template, index) => (
              <TemplateCard
                key={template.name}
                template={template}
                index={index}
              />
            ))}
          </motion.div>
        )}

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            {showMore ? "Show Less" : "Show More Templates"}
            <ArrowRight
              size={16}
              className={`transition-transform ${
                showMore ? "-rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* UI Blocks CTA */}
        <div className="mt-32 border-t border-gray-100 pt-20">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
              UI Blocks
            </span>
            <span className="text-xs text-gray-400">Ready-made components</span>
          </div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Ready-made UI blocks for
            <span className="text-blue-600"> modern websites.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Explore beautifully designed hero sections, pricing tables,
            navigation bars, service cards and responsive footers for modern
            React and Next.js websites.
          </p>

          <Link
            href="/ui-components"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Explore UI Components
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
