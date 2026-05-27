// app/projects/page.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "AIFA Solutions Website",
      image: "/image6.jpg",
      link: "https://www.aifa.co.in/",
      category: "AI Film And Animation Company",
      tools: ["React JS", "Tailwind CSS", "Node JS", "MongoDB"],
      description:
        "Modern business website with responsive UI and premium user experience.",
    },

    {
      title: "Arka Aqua Tech",
      image: "/image7.jpg",
      link: "https://www.arkaquatech.com/",
      category: "Aquaculture Company",
      tools: ["Next JS", "Tailwind CSS", "MongoDB"],
      description:
        "Professional aquaculture platform with modern layouts.",
    },

    {
      title: "Gurudeep AI Academy",
      image: "/image8.jpg",
      link: "https://www.gurudeepaiacademy.com/",
      category: "Educational Platform",
      tools: ["React JS", "Tailwind CSS", "Node JS"],
      description:
        "Educational platform with responsive design and smooth animations.",
    },

    {
      title: "Epoque Group",
      image: "/image9.jpg",
      link: "https://epoquegroup.in/",
      category: "Business Group",
      tools: ["Next JS", "Tailwind CSS"],
      description:
        "Elegant corporate website for enterprise branding.",
    },

    {
      title: "HipHip Videos",
      image: "/image10.jpg",
      link: "https://hiphipvideos.com/",
      category: "Video Platform",
      tools: ["React JS", "Node JS", "MongoDB"],
      description:
        "Creative media platform with modern responsive layouts.",
    },

    {
      title: "Suvira Services",
      image: "/image11.jpg",
      link: "https://www.suviraservices.com/",
      category: "Security Services",
      tools: ["React JS", "Tailwind CSS"],
      description:
        "Professional security services website with SEO-friendly design.",
    },

    {
      title: "ROBO Security Services",
      image: "/image12.jpg",
      link: "https://www.robosecurityservices.com/",
      category: "Security Agency",
      tools: ["Next JS", "Tailwind CSS", "Node JS"],
      description:
        "Modern security company website with responsive UI.",
    },

    {
      title: "Matsya Aqua Tech",
      image: "/image13.jpg",
      link: "https://www.matsyaaquatech.in/",
      category: "Aquaculture Industry",
      tools: ["React JS", "MongoDB"],
      description:
        "Business website for aquaculture products and solutions.",
    },

    {
      title: "VFX Coach",
      image: "/image14.jpg",
      link: "https://www.vfxcoach.com/",
      category: "VFX Training Institute",
      tools: ["Next JS", "Tailwind CSS", "Node JS", "MongoDB"],
      description:
        "Creative VFX institute website with cinematic sections.",
    },
  ];

  return (
    <div className="bg-white text-[#0F172A] overflow-hidden min-h-screen">

      {/* ================= HERO SECTION ================= */}

      <section className="relative py-28 px-6 text-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

        {/* BLUR CIRCLES */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Projects Showcase
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9"
          >
            Modern websites, scalable web applications, SEO-friendly platforms,
            and premium digital experiences built using latest technologies.
          </motion.p>

        </div>

      </section>

      {/* ================= PROJECT GRID ================= */}

      <section className="py-20 px-6 md:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {projects.map((proj, index) => (

            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* CARD */}
              <div
                className="relative bg-white rounded-3xl overflow-hidden
                border border-blue-100 shadow-lg
                hover:shadow-2xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* CATEGORY */}
                  <span
                    className="absolute top-4 left-4 
                    bg-gradient-to-r from-[#2563EB] to-[#06B6D4]
                    text-white text-xs font-semibold
                    px-4 py-2 rounded-full shadow-lg"
                  >
                    {proj.category}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  <h2
                    className="text-2xl font-extrabold mb-4
                    bg-gradient-to-r from-[#2563EB] to-[#06B6D4]
                    bg-clip-text text-transparent"
                  >
                    {proj.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-7 mb-6">
                    {proj.description}
                  </p>

                  {/* TOOLS */}
                  <div className="flex flex-wrap gap-3 mb-7">

                    {proj.tools.map((tool, i) => (

                      <span
                        key={i}
                        className="bg-blue-50 border border-blue-200
                        text-blue-700 text-xs px-4 py-2 rounded-full
                        hover:bg-gradient-to-r hover:from-[#2563EB]
                        hover:to-[#06B6D4]
                        hover:text-white hover:border-transparent
                        transition-all duration-300 cursor-pointer"
                      >
                        {tool}
                      </span>

                    ))}

                  </div>

                  {/* BUTTON */}
                  <Link
                    href={proj.link}
                    target="_blank"
                    className="inline-flex items-center gap-2
                    bg-gradient-to-r from-[#2563EB] to-[#06B6D4]
                    text-white px-6 py-3 rounded-full
                    font-semibold shadow-lg
                    hover:scale-105 hover:shadow-blue-300
                    transition-all duration-300"
                  >
                    Visit Website
                    <ExternalLink size={18} />
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="py-28 px-6 text-center bg-gradient-to-r from-blue-50 to-cyan-50">

        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          Want a Website Like This?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-8"
        >
          We build modern websites, SEO-friendly platforms, and digital
          solutions that help businesses grow online.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >

          <Link
            href="/contact"
            className="inline-flex items-center gap-3
            bg-gradient-to-r from-[#2563EB] to-[#06B6D4]
            text-white px-10 py-4 rounded-full
            text-lg font-semibold shadow-xl
            hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ExternalLink size={20} />
          </Link>

        </motion.div>

      </section>

    </div>
  );
}