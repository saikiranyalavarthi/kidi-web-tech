
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const templateGroups = [
  {
    title: "Website Design & Development Templates",
    description:
      "Modern, responsive website design concepts for businesses, agencies and creative brands.",
    templates: [
      {
        name: "Business Website",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=90",
        category: "Business",
      },
      {
        name: "Creative Agency",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=90",
        category: "Agency",
      },
      {
        name: "Portfolio Website",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&q=90",
        category: "Portfolio",
      },
    ],
  },
  {
    title: "Digital Marketing Agency Templates",
    description:
      "Creative website design concepts for digital marketing agencies, SEO companies and creative studios.",
    templates: [
      {
        name: "Digital Agency",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=90",
        category: "Marketing",
      },
      {
        name: "SEO Agency",
        image:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1000&q=90",
        category: "SEO",
      },
      {
        name: "Marketing Studio",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&q=90",
        category: "Studio",
      },
    ],
  },
  {
    title: "Modern SaaS & Technology Templates",
    description:
      "Modern design concepts for SaaS platforms, software products and AI technology businesses.",
    templates: [
      {
        name: "SaaS Landing Page",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=90",
        category: "SaaS",
      },
      {
        name: "AI Startup Website",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=90",
        category: "AI",
      },
      {
        name: "Software Dashboard",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1000&q=90",
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
    category: "E-Commerce",
  },
  {
    name: "Real Estate Website",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=90",
    category: "Real Estate",
  },
  {
    name: "Mobile App Landing",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=90",
    category: "Mobile App",
  },
];

function TemplateCard({ template, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group min-w-0"
    >
      {/* Image Preview - No Template Page Link */}
      <div className="relative aspect-[1.35/1] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-900/10">
        <Image
          src={template.image}
          alt={`${template.name} website design example`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm">
            {template.category}
          </span>
        </div>
      </div>

      {/* Template Information */}
      <div className="mt-4">
        <h3 className="text-base font-bold text-gray-950 transition group-hover:text-blue-600">
          {template.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Website Design Concept
        </p>
      </div>
    </motion.div>
  );
}

export default function TemplateShowcase() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
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
            Explore website design concepts for different industries.
            From business websites to modern SaaS platforms, discover
            creative digital design inspiration for your next project.
          </p>
        </motion.div>

        {/* Template Groups */}
        <div className="space-y-16">
          {templateGroups.map((group, groupIndex) => (
            <div key={group.title}>

              {/* Group Header */}
              <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div className="max-w-xl">
                  <h3 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {group.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:self-auto"
                >
                  Get a Website
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Design Images */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="mt-16"
          >
            <div className="mb-7">
              <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                More Website Design Concepts
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-500">
                Explore more website design ideas for online businesses
                and digital products.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {extraTemplates.map((template, index) => (
                <TemplateCard
                  key={template.name}
                  template={template}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Show More Button */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            {showMore ? "Show Less" : "Show More Templates"}

            <ArrowRight
              size={16}
              className={`transition-transform ${
                showMore
                  ? "-rotate-90"
                  : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-slate-950 px-6 py-10 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Need a Professional Website for Your Business?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Let's create a modern, responsive website that represents
            your brand and supports your business goals.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Start Your Website Project
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
