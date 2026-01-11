"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const projects = [
    {
      title: "HipHip – Video Consultation Platform",
      image: "/projects/hiphipwebsite.jpg",
      tag: "Healthcare / App",
      description:
        "A WhatsApp-integrated pet consultation platform enabling instant vet bookings, calendar scheduling, and secure online payments with a mobile-first experience.",
    },
    {
      title: "MatsyaAqatech – Aquaculture Website",
      image: "/projects/crabwebsite.jpg",
      tag: "eCommerce / Industry",
      description:
        "A fast-loading aquaculture business website showcasing seafood solutions, export services, and product catalogs with SEO-focused architecture.",
    },
    {
      title: "D4 Interactive – Digital Marketing Website",
      image: "/projects/d4.jpg",
      tag: "Marketing / Agency",
      description:
        "A conversion-driven digital marketing website designed to generate high-quality leads with service funnels, landing pages, and performance tracking.",
    },
    {
      title: "Gurudeep – Educational Company",
      image: "/projects/Guredeepwebsite.jpg",
      tag: "Education / Corporate",
      description:
        "A professional education and training platform highlighting courses, corporate programs, admissions workflow, and lead capture integrations.",
    },
    {
      title: "Shiva Hotel Residency",
      image: "/projects/hotel.jpg",
      tag: "Hospitality",
      description:
        "A premium hotel website with room showcases, booking CTA, Google Maps integration, WhatsApp support, and mobile-first UX.",
    },
    {
      title: "VFX Coach – Training Institute",
      image: "/projects/vfxcoachwebsite.jpg",
      tag: "Creative / Training",
      description:
        "A modern institute website for VFX & animation coaching with course modules, student showcases, and inquiry funnels.",
    },
    {
      title: "DoorstepHub – Service Platform",
      image: "/projects/dhub.jpg",
      tag: "Local Services",
      description:
        "A service marketplace platform connecting users with doorstep services using location-based listings and WhatsApp automation.",
    },
    {
      title: "Mechanical Auto Parts Platform",
      image: "/projects/autoparts.jpg",
      tag: "Manufacturing / B2B",
      description:
        "An industrial auto-parts catalog website featuring categorized products, inquiry forms, and downloadable brochures for B2B clients.",
    },
    {
      title: "Academic Journals Website",
      image: "/projects/journels.jpg",
      tag: "Research / Publishing",
      description:
        "A scholarly journal publishing platform with submission guidelines, article listings, indexing support, and SEO optimization.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">

      <Head>
        <title>KIDIWEBTECH | Projects & Case Studies</title>
        <meta
          name="description"
          content="Explore KIDIWEBTECH projects across web development, mobile apps, SEO, and business platforms built for scale and growth."
        />
        <link rel="canonical" href="https://kidiwebtech.com/projects" />
      </Head>

      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our <span className="gradient-text">Projects & Case Studies</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-3xl mx-auto text-lg"
        >
          We design and develop high-impact digital products that help businesses
          grow, convert users, and scale confidently.
        </motion.p>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >

              {/* GLOW BORDER */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 blur-xl group-hover:opacity-70 transition" />

              {/* CARD */}
              <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10">

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={400}
                    height={260}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 text-yellow-400">
                    {proj.tag}
                  </span>

                  <h3 className="text-lg font-bold gradient-text">
                    {proj.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center px-6">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl font-bold mb-6"
        >
          Want a project like this?
        </motion.h3>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08 }}
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg"
        >
          Start Your Project
        </motion.a>
      </section>

    </div>
  );
}
