"use client";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
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
        "A WhatsApp-integrated pet consultation platform enabling instant vet bookings, secure payments, and mobile-first UX.",
    },
    {
      title: "MatsyaAqatech – Aquaculture Website",
      image: "/projects/crabwebsite.jpg",
      tag: "eCommerce / Industry",
      description:
        "SEO-optimized aquaculture website with export-focused architecture and product catalog management.",
    },
    {
      title: "D4 Interactive – Digital Marketing Website",
      image: "/projects/d4.jpg",
      tag: "Marketing / Agency",
      description:
        "Conversion-focused agency website with service funnels, landing pages, and analytics integration.",
    },
    {
      title: "Gurudeep – Educational Company",
      image: "/projects/Guredeepwebsite.jpg",
      tag: "Education / Corporate",
      description:
        "Education platform with structured course modules and inquiry-driven lead funnels.",
    },
    {
      title: "Shiva Hotel Residency",
      image: "/projects/hotel.jpg",
      tag: "Hospitality",
      description:
        "Premium hotel website with booking CTAs, WhatsApp integration, and mobile-first design.",
    },
    {
      title: "VFX Coach – Training Institute",
      image: "/projects/vfxcoachwebsite.jpg",
      tag: "Creative / Training",
      description:
        "Modern institute website featuring course showcases and SEO-optimized landing pages.",
    },
  ];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "KidiWebTech Projects & Case Studies",
    url: "https://kidiwebtech.com/projects",
    description:
      "Portfolio of web development, SEO, and digital marketing projects delivered by KidiWebTech in Hyderabad and across India.",
  };

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= SEO ================= */}
      <Head>
        <title>
          KidiWebTech Projects | Web Development & SEO Case Studies in Hyderabad
        </title>

        <meta
          name="description"
          content="Explore KidiWebTech projects including website development, SEO campaigns, eCommerce platforms, and digital marketing case studies delivered in Hyderabad and across India."
        />

        <meta
          name="keywords"
          content="KidiWebTech projects, web development case studies Hyderabad, SEO portfolio, digital marketing projects India, website design portfolio"
        />

        <link rel="canonical" href="https://kidiwebtech.com/projects" />

        <meta
          property="og:title"
          content="KidiWebTech Portfolio – Projects & Case Studies"
        />
        <meta
          property="og:description"
          content="Discover high-performance websites, SEO campaigns, and digital marketing projects built for growth."
        />
        <meta property="og:url" content="https://kidiwebtech.com/projects" />
        <meta property="og:type" content="website" />
      </Head>

      {/* STRUCTURED DATA */}
      <Script
        id="case-study-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema),
        }}
      />

      {/* ================= HERO ================= */}
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
          We build SEO-friendly websites, scalable web applications, and
          performance-driven digital marketing campaigns that deliver measurable results.
        </motion.p>
      </section>

      {/* ================= PROJECT GRID ================= */}
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 blur-xl group-hover:opacity-70 transition" />

              <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10">
                <div className="overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={400}
                    height={260}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

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

      {/* ================= SEO CONTENT SECTION ================= */}
      <section className="py-16 px-6 md:px-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed">
          <h2 className="text-3xl font-extrabold text-white">
            Web Development & Digital Marketing Portfolio in Hyderabad
          </h2>

          <p>
            At KidiWebTech, we specialize in building high-performance websites
            and executing data-driven SEO and digital marketing campaigns.
            Our portfolio reflects expertise in 
            <Link href="/services/web-development" className="underline ml-1">
              web development
            </Link>,
            <Link href="/services/seo" className="underline ml-1">
              SEO services
            </Link>, and
            <Link href="/services/ppc" className="underline ml-1">
              Google Ads management
            </Link>.
          </p>

          <p>
            Each project is designed with search engine optimization,
            conversion strategy, mobile responsiveness, and performance
            optimization at its core.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-24 text-center px-6">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl font-bold mb-6"
        >
          Want a high-performing website or SEO campaign?
        </motion.h3>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08 }}
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg"
        >
          Start Your Project →
        </motion.a>
      </section>

    </div>
  );
}