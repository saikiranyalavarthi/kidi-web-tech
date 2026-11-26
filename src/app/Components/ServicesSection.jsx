"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Search,
  Megaphone,
  ShoppingCart,
  Smartphone,
  Bot,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "We build modern, responsive and high-performing websites that turn visitors into customers.",
    href: "/website-development-services",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85",
    tag: "Web Development",
  },
  {
    number: "02",
    title: "Search Engine Optimization",
    description:
      "Grow your organic traffic with technical SEO, keyword strategy, local SEO and content optimization.",
    href: "/seo-services",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1000&q=85",
    tag: "SEO & Growth",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Reach the right audience through strategic campaigns, social media marketing and paid advertising.",
    href: "/google-ads-agency",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=85",
    tag: "Digital Marketing",
  },
  {
    number: "04",
    title: "E-Commerce Development",
    description:
      "Launch and scale your online store with powerful shopping experiences and secure integrations.",
    href: "/ecommerce-development-services",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=85",
    tag: "Online Stores",
  },
  {
    number: "05",
    title: "Mobile App Development",
    description:
      "Create intuitive Android and iOS applications designed to connect your business with customers.",
    href: "/services/mobile-app-development-hyderabad",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=85",
    tag: "Mobile Solutions",
  },
  {
    number: "06",
    title: "AI & Business Automation",
    description:
      "Automate repetitive workflows with AI-powered tools, intelligent chatbots and business integrations.",
    href: "/ai-automation",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=85",
    tag: "AI Solutions",
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

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Digital Solutions.
              <span className="block text-blue-600">Real Business Growth.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              From powerful websites to intelligent automation, we create
              digital experiences that help ambitious businesses move forward.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
          >
            Explore All Services
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-5 text-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_25px_65px_rgba(37,99,235,0.18)] sm:p-6"
                >
                  {/* Image */}
                  <div className="relative mb-7 h-48 overflow-hidden rounded-2xl bg-gray-800">
                    <Image
                      src={service.image}
                      alt={`${service.title} by KidiWebTech`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                      {service.tag}
                    </span>

                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={21} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-blue-400">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <span className="text-sm font-medium tracking-widest text-white/30">
                        / {service.number}
                      </span>
                    </div>

                    <h3 className="max-w-sm text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {service.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-white">
                      Discover Service
                      <ArrowUpRight
                        size={17}
                        className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:flex-row sm:p-9"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Let&apos;s build something powerful for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700"
          >
            Let&apos;s Talk
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
