"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  "/Clients/logo1.png",
  "/Clients/logo2.png",
  "/Clients/logo3.png",
  "/Clients/logo4.png",
  "/Clients/logo5.jpg",
  "/Clients/logo6.jpg",
  "/Clients/logo7.webp",

  "/Clients/logo9.jpeg",
  "/Clients/logo10.jpeg",
  "/Clients/logo11.jpeg",
];

const technologies = [
  // Search & Marketing
  { name: "Google", slug: "google" },
  { name: "Google Analytics", slug: "googleanalytics" },
  { name: "Google Ads", slug: "googleads" },
  { name: "Meta", slug: "meta" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Semrush", slug: "semrush" },

  // CMS & Ecommerce
  { name: "WordPress", slug: "wordpress" },
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },

  // Frontend Development
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Angular", slug: "angular" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Sass", slug: "sass" },

  // Backend & Database
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "MySQL", slug: "mysql" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Firebase", slug: "firebase" },
  { name: "Supabase", slug: "supabase" },

  // Mobile Development
  { name: "React Native", slug: "react" },
  { name: "Expo", slug: "expo" },
  { name: "Flutter", slug: "flutter" },
  { name: "Android", slug: "android" },

  // UI/UX & Creative Design
  { name: "Figma", slug: "figma" },

  { name: "Framer", slug: "framer" },

  // Cloud & Deployment

  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Vercel", slug: "vercel" },
  { name: "Netlify", slug: "netlify" },
  { name: "Docker", slug: "docker" },
  { name: "GitHub", slug: "github" },
  { name: "Git", slug: "git" },

  // AI & Automation

  { name: "Google Gemini", slug: "googlegemini" },
];

export default function TrustedBySection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-4 sm:px-6 md:py-4">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[350px] w-[350px] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-100/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ================= CLIENT SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mx-auto mb-8 max-w-5xl text-center text-base font-medium text-neutral-500 md:mb-10 md:text-lg">
            Trusted by businesses and brands working with us
          </h2>

          {/* Client Logos */}
          <div className="flex flex-wrap items-center justify-center gap-y-8">
            {clients.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.12,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group flex h-20 w-1/2 items-center justify-center px-3 sm:h-24 sm:w-1/3 sm:px-5 lg:w-1/4 xl:w-1/5"
              >
                <Image
                  src={logo}
                  alt={`KidiWebTech client ${index + 1}`}
                  width={220}
                  height={80}
                  loading="lazy"
                  sizes="(max-width: 640px) 140px, (max-width: 1280px) 180px, 220px"
                  className="h-auto max-h-[42px] w-auto max-w-[150px] object-contain opacity-80 transition-all duration-500 group-hover:opacity-100 sm:max-h-[48px] sm:max-w-[185px] lg:max-h-[55px] lg:max-w-[210px]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= TECHNOLOGY SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-gray-100 pt-14 md:mt-4 md:pt-4"
        >
          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Technology Ecosystem
            </span>

            <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl md:text-4xl">
              Powered by Modern Technologies
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4B5563] sm:text-base md:text-lg">
              We work with leading platforms, creative tools and modern
              technologies to build scalable, secure and high-performance
              digital solutions.
            </p>
          </div>

          {/* Technology Logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-9 sm:gap-x-10 md:gap-x-12 lg:gap-x-14">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.12,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group flex min-w-[80px] flex-col items-center gap-3 sm:min-w-[95px]"
              >
                {/* Brand Logo */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-100 md:h-16 md:w-16">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    alt={`${tech.name} logo`}
                    title={tech.name}
                    loading="lazy"
                    className="h-8 w-8 object-contain opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 md:h-9 md:w-9"
                  />
                </div>

                {/* Brand Name */}
                <span className="text-center text-xs font-semibold text-gray-600 transition-colors duration-300 group-hover:text-blue-600 sm:text-sm">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
