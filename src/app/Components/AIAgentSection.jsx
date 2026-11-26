"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Sparkles, Zap } from "lucide-react";

// Colourful official-style technology brand icons
const technologies = [
 
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "Google", slug: "google", color: "4285F4" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "GitHub", slug: "github", color: "181717" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Firebase", slug: "firebase", color: "DD2C00" },
  { name: "WordPress", slug: "wordpress", color: "21759B" },
  { name: "Shopify", slug: "shopify", color: "7AB55C" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Vercel", slug: "vercel", color: "000000" },
];

const stats = [
  "Websites Delivered",
  "Digital Solutions",
  "Technologies",
  "Business Services",
];

const values = ["50+", "25+", "15+", "10+"];

export default function AIAgentSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start"
        >
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-blue-600">
            <Sparkles size={17} />
            AI-POWERED DIGITAL SOLUTIONS
            <span className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700">
              Smart Technology
            </span>
          </div>

          <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl xl:text-6xl">
            Build smarter.
            <br />
            Automate faster.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Grow with AI.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-500">
            Bring your business ideas to life with modern web technologies,
            AI-powered solutions and intelligent automation. KidiWebTech helps
            you build, connect and scale your digital business.
          </p>

          {/* FEATURES */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "AI Integration",
              "Web Development",
              "Business Automation",
              "Custom Software",
              "API Integration",
              "Digital Growth",
            ].map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Discuss Your Project
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-600"
            >
              Explore Services
            </a>
          </div>

          <p className="mt-7 text-xs text-gray-400">
            Web Development · AI · SaaS · Automation · Digital Growth
          </p>
        </motion.div>

        {/* RIGHT TECHNOLOGY ORBIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-[540px]"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-[12%] rounded-full bg-blue-100/60 blur-[65px]" />

          {/* ORBIT RINGS */}
          <div className="absolute inset-[8%] rounded-full border border-dashed border-blue-200" />
          <div className="absolute inset-[19%] rounded-full border border-gray-200" />
          <div className="absolute inset-[30%] rounded-full border border-blue-100" />

          {/* ROTATING BRAND ICONS */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            {technologies.map((tech, index) => {
              const angle = (index / technologies.length) * Math.PI * 2;

              const radius = 43;

              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;

              return (
                <div
                  key={tech.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 55,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.09)] transition-shadow hover:shadow-xl sm:h-14 sm:w-14"
                    title={tech.name}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                      alt={tech.name}
                      loading="lazy"
                      className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* CENTER CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex w-[58%] flex-col items-center justify-center rounded-[32px] border border-gray-200 bg-white p-5 text-center shadow-[0_20px_70px_rgba(37,99,235,0.12)] sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                <Bot size={25} />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                KidiWebTech
              </p>

              <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                Build with
                <span className="block text-blue-600">Technology.</span>
              </h3>

              {/* STATISTICS */}
              <div className="mt-5 w-full space-y-3 border-t border-gray-100 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-[10px] text-gray-500 sm:text-xs">
                      {stat}
                    </span>

                    <span className="text-sm font-bold text-blue-600 sm:text-base">
                      {values[index]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-[9px] font-semibold text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Innovation in Progress
              </div>
            </div>
          </div>

          {/* FLOATING AUTOMATION CARD */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-[18%] rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-xl sm:right-2"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Zap size={17} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-900">
                  Smart Automation
                </p>
                <p className="text-[9px] text-gray-400">Work smarter</p>
              </div>
            </div>
          </motion.div>

          {/* FLOATING DEVELOPMENT CARD */}
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[17%] left-0 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-xl sm:left-2"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <Code2 size={17} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-900">
                  Modern Development
                </p>
                <p className="text-[9px] text-gray-400">Built to scale</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
