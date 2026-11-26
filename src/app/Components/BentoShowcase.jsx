"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Globe2,
  Code2,
  Lock,
  Github,
  Zap,
  Star,
  CalendarDays,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function BentoShowcase() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[190px_190px_190px_190px]">
          {/* INTRO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center p-5 md:p-8 lg:col-span-5 lg:row-span-1"
          >
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
              <Sparkles size={14} />
              BUILD SMARTER WITH KIDIWEBTECH
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Create, launch, and grow with your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                digital partner.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
              From websites and mobile apps to AI-powered business solutions,
              everything you need to build a stronger digital presence.
            </p>

            <a
              href="/contact"
              className="mt-6 flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start Your Project
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* MAIN WEBSITE PREVIEW */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-[#101010] p-5 text-white shadow-xl shadow-black/10 md:col-span-2 lg:col-span-7 lg:row-span-2 lg:col-start-6 lg:row-start-1"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-sm font-bold">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                  <Code2 size={15} />
                </div>
                KidiWebTech
              </div>

              <div className="hidden items-center gap-6 text-[10px] text-gray-400 sm:flex">
                <span>Services</span>
                <span>Solutions</span>
                <span>Projects</span>
                <span>About</span>
              </div>

              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3 py-2 text-[10px] font-semibold text-white"
              >
                Get Started
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 py-7 sm:py-9">
              <div>
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-blue-400">
                  Digital Growth Platform
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Build the next
                  <br />
                  <span className="text-blue-400">big thing.</span>
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-6 text-gray-400">
                  Innovative digital experiences engineered for modern
                  businesses.
                </p>

                <div className="mt-5 flex gap-2">
                  <span className="rounded-md bg-blue-600 px-3 py-2 text-[9px] font-semibold">
                    Explore Services
                  </span>
                  <span className="rounded-md border border-white/20 px-3 py-2 text-[9px]">
                    Our Work
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full rounded-xl border border-white/10 bg-white p-2 shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85"
                    alt="Business analytics dashboard website preview"
                    className="h-36 w-full rounded-lg object-cover sm:h-48"
                  />
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="h-7 rounded bg-gray-100" />
                    <div className="h-7 rounded bg-blue-100" />
                    <div className="h-7 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />
          </motion.div>

          {/* SIGNUP CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-black/5 lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:row-start-2"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-gray-950">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                <Code2 size={17} />
              </div>
              KidiWebTech
            </div>

            <h3 className="mt-7 text-xl font-bold text-gray-950">
              Let's build your digital presence.
            </h3>

            <p className="mt-2 text-xs leading-6 text-gray-500">
              Tell us about your business and project.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-[10px] font-semibold text-gray-600">
                  Your Name
                </label>
                <div className="mt-1 rounded-lg border border-gray-200 px-3 py-3 text-xs text-gray-400">
                  Enter your name
                </div>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-gray-600">
                  Email Address
                </label>
                <div className="mt-1 rounded-lg border border-gray-200 px-3 py-3 text-xs text-gray-400">
                  hello@example.com
                </div>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-gray-600">
                  Service Required
                </label>
                <div className="mt-1 rounded-lg border border-gray-200 px-3 py-3 text-xs text-gray-400">
                  Select a service
                </div>
              </div>

              <a
                href="/contact"
                className="flex items-center justify-center rounded-full bg-blue-600 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                Start a Conversation
              </a>
            </div>

            <p className="mt-5 text-center text-[10px] text-gray-400">
              We usually respond within one business day.
            </p>
          </motion.div>

          {/* HOSTING CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-black/5 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-2"
          >
            <div className="relative z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Globe2 size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-950">
                Hosting Beyond Limits
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-6 text-gray-500">
                Fast, secure and reliable web experiences built for businesses
                that want to scale.
              </p>
            </div>

            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full border-[30px] border-blue-100/70 bg-gradient-to-br from-blue-500 to-black shadow-2xl">
              <div className="absolute inset-4 rounded-full border border-white/30" />
            </div>
          </motion.div>

          {/* GLOBAL CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl bg-[#111111] p-6 text-white shadow-xl lg:col-span-2 lg:row-span-1 lg:col-start-7 lg:row-start-3"
          >
            <div className="relative z-10">
              <Globe2 size={22} className="text-blue-400" />
              <h3 className="mt-4 text-base font-bold">Grow Beyond Borders</h3>
              <p className="mt-2 text-xs leading-5 text-gray-400">
                Digital solutions for businesses everywhere.
              </p>
            </div>

            <div className="absolute -bottom-14 -right-8 h-36 w-36 rounded-full border-[15px] border-blue-500/20 bg-blue-600/20 blur-[1px]" />
          </motion.div>

          {/* TESTIMONIAL CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex min-h-[190px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-black/5 lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-4"
          >
            <div>
              <div className="flex gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={13} fill="currentColor" />
                ))}
              </div>

              <p className="mt-4 text-sm font-medium leading-6 text-gray-800">
                "A great digital experience starts with the right technology and
                a team that understands your vision."
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                KW
              </div>
              <div>
                <p className="text-xs font-bold text-gray-950">KidiWebTech</p>
                <p className="text-[10px] text-gray-500">Digital Solutions</p>
              </div>
            </div>
          </motion.div>

          {/* AI IMAGE GENERATION CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative min-h-[350px] overflow-hidden rounded-2xl border border-gray-200 bg-[#111111] shadow-xl lg:col-span-5 lg:row-span-2 lg:col-start-8 lg:row-start-3"
          >
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=90"
              alt="AI technology and digital innovation"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/10" />

            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md">
              <Sparkles size={13} className="text-blue-300" />
              NEXT-GEN DIGITAL EXPERIENCES
            </div>

            <div className="absolute bottom-7 left-7 right-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                Innovation Meets Creativity
              </span>

              <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                Turn your ideas into digital experiences.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                Websites, AI automation and technology solutions designed to
                move your business forward.
              </p>

              <a
                href="/services"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-gray-950 transition hover:bg-blue-600 hover:text-white"
              >
                Discover Our Solutions
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
