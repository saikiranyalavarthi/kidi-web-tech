"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

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
    title: "Corporate Website",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Startup Landing Page",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Consulting Firm Website",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "IT Company Website",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Website",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fashion Store",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Electronics Shop",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Grocery Store",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Jewelry Store",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Education Website",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Online Learning Platform",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Coaching Institute Website",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "University Website",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Kids School Website",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare Website",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dental Clinic Website",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Hospital Website",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Medical Lab Website",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Physiotherapy Clinic Website",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Portfolio Website",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Photographer Portfolio",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Designer Portfolio",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Developer Portfolio",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Architect Portfolio",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
];

function WebsiteCard({ item }) {
  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.045)]"
    >
      <div className="relative h-[190px] overflow-hidden sm:h-[210px]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

        <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-gray-900 backdrop-blur-md">
          {item.category}
        </span>

        <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ExternalLink size={15} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
          <p className="mt-1 text-[11px] text-gray-500">
            Responsive website design
          </p>
        </div>

        <ArrowUpRight
          size={17}
          className="shrink-0 text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
        />
      </div>
    </motion.article>
  );
}

function ScrollColumn({ items, direction = "up", duration = 35 }) {
  const repeated = [...items, ...items];

  return (
    <div className="relative h-[530px] overflow-hidden">
      <motion.div
        animate={{
          y: direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-5"
      >
        {repeated.map((item, index) => (
          <WebsiteCard key={`${item.title}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function DeliveredWebsites() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWebsites = useMemo(
    () =>
      activeCategory === "All"
        ? websites
        : websites.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const columns = useMemo(
    () =>
      [
        filteredWebsites.filter((_, i) => i % 3 === 0),
        filteredWebsites.filter((_, i) => i % 3 === 1),
        filteredWebsites.filter((_, i) => i % 3 === 2),
      ].map((items) => (items.length ? items : filteredWebsites)),
    [filteredWebsites],
  );

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/70 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-100/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
            <Sparkles size={14} />
            OUR CREATIVE WORK
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Websites We Have
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Delivered
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Explore website design concepts for businesses, online stores,
            education, healthcare and creative portfolios.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SCROLLING WEBSITE COLUMNS */}
        <div
          className="relative grid grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={(e) => {
            e.currentTarget
              .querySelectorAll(".website-scroll")
              .forEach((element) => {
                element.style.animationPlayState = "paused";
              });
          }}
          onMouseLeave={(e) => {
            e.currentTarget
              .querySelectorAll(".website-scroll")
              .forEach((element) => {
                element.style.animationPlayState = "running";
              });
          }}
        >
          {/* TOP FADE */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white to-transparent" />

          {/* BOTTOM FADE */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white to-transparent" />

          {columns.map((items, index) => (
            <div key={`${activeCategory}-${index}`}>
              <ScrollColumn
                items={items}
                direction={index === 1 ? "down" : "up"}
                duration={index === 1 ? 42 : 35 + index * 4}
              />
            </div>
          ))}
        </div>

     
       
      </div>
    </section>
  );
}
