"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

const credits = [
  {
    label: "Web Development",
    icon: Code2,
    color: "bg-blue-600",
  },
  {
    label: "Digital Marketing",
    icon: Globe,
    color: "bg-black",
  },
  {
    label: "UI/UX Design",
    icon: Layers,
    color: "bg-violet-600",
  },
  {
    label: "AI & Automation",
    icon: Sparkles,
    color: "bg-cyan-600",
  },
  {
    label: "Business Growth",
    icon: Zap,
    color: "bg-blue-500",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 90,
    rotateX: -70,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

function AnimatedWord({ children, className = "" }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex justify-center overflow-hidden ${className}`}
    >
      {children.split("").map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={letterAnimation}
          className="inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function BrandHero() {
  return (
    <section className="relative flex min-h-[750px] items-center overflow-hidden bg-[#EEEEEE] px-5 py-16 sm:px-8 lg:min-h-[850px] lg:px-12">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px]">
        {/* TOP INFORMATION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-gray-700 sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Digital Solutions Studio
          </span>

          <span className="hidden h-4 w-px bg-gray-400 sm:block" />

          <span className="rounded-md border border-gray-400/70 px-3 py-1.5">
            Hyderabad, India
          </span>

          <span className="hidden h-4 w-px bg-gray-400 sm:block" />

          <span>Web • AI • Digital Growth</span>
        </motion.div>

        {/* MAIN BRAND TYPOGRAPHY */}
        <div className="relative text-center">
          <AnimatedWord className="text-[clamp(3.3rem,13vw,12rem)] font-black leading-[0.83] tracking-[-0.085em] text-[#111111]">
            KIDIWEB
          </AnimatedWord>

          <div className="mt-3 flex items-center justify-center gap-2 sm:mt-5">
            <AnimatedWord className="text-[clamp(3.3rem,13vw,12rem)] font-black leading-[0.83] tracking-[-0.085em] text-[#111111]">
              TECH
            </AnimatedWord>

            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mb-1 inline-flex h-3 w-3 rounded-full bg-blue-600 sm:h-5 sm:w-5"
            />
          </div>

          {/* BLUE UNDERLINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1.5 rounded-full bg-blue-600 sm:mt-10"
          />
        </div>

        {/* SUBTITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-center"
        >
          <h1 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Build Smarter. Automate Better. Grow Faster.
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            We create powerful digital experiences through website development,
            mobile applications, AI solutions, SEO and digital marketing.
          </p>

          <a
            href="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20"
          >
            Start Your Project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* BOTTOM TECHNOLOGY CREDITS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 border-t border-gray-300/80 pt-8 sm:mt-20 lg:gap-x-9"
        >
          {credits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                whileHover={{ y: -5 }}
                className="group flex items-center gap-2.5"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-12 ${item.color}`}
                >
                  <Icon size={16} />
                </div>

                <span className="text-xs font-semibold text-gray-800 underline decoration-gray-400 underline-offset-4 transition-colors group-hover:text-blue-600 sm:text-sm">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM LABEL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500"
        >
          <span>Creative Technology</span>
          <span className="text-blue-600">✦</span>
          <span>Digital Innovation</span>
          <span className="text-blue-600">✦</span>
          <span>Business Growth</span>
        </motion.div>
      </div>
    </section>
  );
}
