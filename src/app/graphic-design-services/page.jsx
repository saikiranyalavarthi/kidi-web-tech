
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  PenTool,
  Image,
  Layers,
  Instagram,
  Megaphone,
  FileImage,
  Package,
  Brush,
  Type,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Monitor,
  ShoppingBag,
  Shapes,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    desc: "Build a memorable brand identity with professional visual elements that communicate your business values and personality.",
    tags: ["Brand Identity", "Color Palette", "Brand Guidelines"],
  },
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "Create distinctive and professional logos that help your business establish a recognizable visual identity.",
    tags: ["Business Logos", "Logo Redesign", "Brand Marks"],
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    desc: "Design engaging social media creatives that maintain brand consistency and communicate your message effectively.",
    tags: ["Instagram Posts", "Social Creatives", "Carousels"],
  },
  {
    icon: Megaphone,
    title: "Advertising & Marketing Design",
    desc: "Create attractive advertising materials for digital campaigns, promotions, product launches and business marketing.",
    tags: ["Ad Creatives", "Campaign Designs", "Promotional Banners"],
  },
  {
    icon: Package,
    title: "Packaging Design",
    desc: "Design product packaging and labels that present your products professionally and create a consistent brand experience.",
    tags: ["Product Packaging", "Labels", "Box Design"],
  },
  {
    icon: FileImage,
    title: "Brochure & Print Design",
    desc: "Communicate your business offerings through professionally designed brochures, flyers, catalogs and marketing materials.",
    tags: ["Brochures", "Flyers", "Company Profiles"],
  },
  {
    icon: Monitor,
    title: "Website & Banner Graphics",
    desc: "Create visually appealing web banners, website graphics and digital promotional materials for your online presence.",
    tags: ["Website Banners", "Hero Graphics", "Web Graphics"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Product Design",
    desc: "Present products effectively with product creatives, promotional graphics and marketplace listing designs.",
    tags: ["Product Images", "Marketplace Graphics", "Promotional Designs"],
  },
  {
    icon: Type,
    title: "Presentation Design",
    desc: "Turn information into clear and professional presentations for business meetings, proposals and marketing pitches.",
    tags: ["Pitch Decks", "Business Presentations", "Company Profiles"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    desc: "We learn about your business, target audience, brand personality and design requirements.",
  },
  {
    number: "02",
    title: "Concept",
    desc: "We explore creative directions, visual references and concepts that match your brand.",
  },
  {
    number: "03",
    title: "Create",
    desc: "We develop polished graphic designs with attention to typography, colors and composition.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "We provide the agreed final design files in suitable formats for digital or print use.",
  },
];

const benefits = [
  {
    icon: Shapes,
    title: "Creative visual identity",
    desc: "Build a consistent and recognizable look across your business communication.",
  },
  {
    icon: Lightbulb,
    title: "Purpose-driven design",
    desc: "Create visuals that communicate your message clearly and effectively.",
  },
  {
    icon: Layers,
    title: "Brand consistency",
    desc: "Maintain consistent colors, typography and design styles across platforms.",
  },
  {
    icon: Brush,
    title: "Professional presentation",
    desc: "Present your business, products and services with polished visual materials.",
  },
];

const faqs = [
  {
    q: "What graphic design services do you provide?",
    a: "We provide logo design, brand identity, social media creatives, advertising banners, brochures, flyers, packaging design, website graphics and presentation design.",
  },
  {
    q: "Do you provide logo design for new businesses?",
    a: "Yes. We can create logo concepts and visual identity elements for startups, small businesses and established brands based on their requirements.",
  },
  {
    q: "Can you design social media posts?",
    a: "Yes. We create social media designs for platforms such as Instagram, Facebook and LinkedIn, including promotional posts, carousels and campaign creatives.",
  },
  {
    q: "Do you provide print-ready graphic designs?",
    a: "Yes. We can prepare print-ready artwork for brochures, flyers, catalogs, packaging and other print materials based on the printer's specifications.",
  },
  {
    q: "Can you redesign my existing brand?",
    a: "Yes. We can refresh your existing logo, colors, typography and marketing visuals while considering your current brand identity.",
  },
  {
    q: "Which file formats will I receive?",
    a: "Final formats depend on the project. Common deliverables include PNG, JPG, PDF and other agreed formats. Editable source files can be discussed as part of the project scope.",
  },
];

export default function GraphicDesignServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111827]">

      {/* HERO SECTION */}
      <section className="relative px-5 pb-20 pt-28 sm:px-8 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={16} />
              Creative Graphic Design Agency
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Creative Graphic Design.
              <span className="mt-2 block bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Powerful Brand Identity.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Make your brand stand out with professional graphic design
              services. From logo design and brand identity to social media
              creatives, marketing materials and packaging, we create
              visuals that communicate your business message.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Start Your Design Project <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-4 text-sm font-bold text-gray-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                Let's Talk
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Creative Concepts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Brand Consistency
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Professional Designs
              </span>
            </div>
          </motion.div>

          {/* HERO DESIGN VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="rounded-[30px] border border-gray-200 bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.10)] sm:p-7">

              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="text-sm font-bold">Creative Design Studio</p>
                  <p className="mt-1 text-xs text-gray-400">Branding Workspace</p>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="grid grid-cols-[60px_1fr] gap-4 py-6">
                <div className="space-y-3">
                  {[Palette, PenTool, Type, Image, Layers].map((Icon, i) => (
                    <div
                      key={i}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        i === 0
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon size={19} />
                    </div>
                  ))}
                </div>

                <div className="min-w-0 rounded-2xl bg-[#F4F7FF] p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700">
                      Brand Concept
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold text-blue-700">
                      Creative
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white">
                        <Sparkles size={23} />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold tracking-wide text-gray-900">
                          YOUR BRAND
                        </p>
                        <p className="text-[10px] text-gray-400">
                          CREATIVE IDENTITY
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="h-3 w-4/5 rounded-full bg-gray-800" />
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200" />
                      <div className="mt-2 h-2 w-3/4 rounded-full bg-gray-200" />
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-2">
                      <div className="h-12 rounded-lg bg-blue-600" />
                      <div className="h-12 rounded-lg bg-cyan-500" />
                      <div className="h-12 rounded-lg bg-violet-500" />
                      <div className="h-12 rounded-lg bg-gray-900" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex h-20 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                      <Palette size={28} />
                    </div>
                    <div className="flex h-20 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-400 text-white">
                      <Brush size={28} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                <div>
                  <p className="text-xs text-gray-400">Design direction</p>
                  <p className="mt-1 text-sm font-bold">
                    Creative. Clear. Memorable.
                  </p>
                </div>
                <Palette className="text-blue-600" size={25} />
              </div>
            </div>

            <div className="absolute -right-4 top-20 -z-10 h-36 w-36 rounded-full bg-cyan-200/60 blur-3xl" />
            <div className="absolute -bottom-8 -left-5 -z-10 h-36 w-36 rounded-full bg-blue-200/70 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-gray-100 bg-gray-50 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Design That Builds Brands
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Your brand deserves more than just good-looking graphics.
            </h2>
          </div>

          <p className="text-base leading-8 text-gray-600">
            Strong graphic design helps businesses communicate their identity,
            connect with their audience and present products and services
            professionally. At KidiWebTech, we create visual assets that
            support your brand across digital platforms and print media,
            keeping your communication clear and consistent.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Graphic Design Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Complete graphic design solutions
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              From branding and marketing creatives to digital and print
              materials, we help your business communicate visually.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.09)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <service.icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-500">
                  {service.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3"
                >
                  Discuss Your Project <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN CATEGORIES */}
      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Creative Possibilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Designs for every business touchpoint
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Maintain a consistent visual identity wherever your customers
              discover and interact with your brand.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              ["Logo & Branding", "Build a recognizable business identity"],
              ["Social Media", "Engaging content for social platforms"],
              ["Digital Advertising", "Promotional and campaign creatives"],
              ["Print Materials", "Brochures, flyers and catalogs"],
              ["Packaging", "Product labels and packaging concepts"],
              ["Website Graphics", "Banners and website visual assets"],
              ["Presentations", "Professional business pitch decks"],
              ["Marketing Materials", "Visuals for business promotion"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-lg sm:p-6"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Creative Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              From concept to creative delivery
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              A structured design process to turn your business requirements
              into professional visual communication.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="relative border-t border-gray-200 pt-7"
              >
                <span className="text-4xl font-extrabold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Choose KidiWebTech
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Design with creativity and purpose
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              We focus on visual clarity, brand consistency and professional
              presentation to support your business communication.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <item.icon size={23} />
                </div>

                <h3 className="mt-6 font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              FAQs
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Graphic design questions
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Find answers to common questions about our branding,
              graphic design and marketing creative services.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600"
            >
              Ask us a question <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 p-5 open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {faq.q}
                  <ChevronDown
                    size={19}
                    className="shrink-0 text-blue-600 transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 pr-6 text-sm leading-7 text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-7 py-10 text-center text-white shadow-xl shadow-blue-500/15 sm:flex-row sm:px-12 sm:text-left">

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to build a stronger brand?
            </h2>

            <p className="mt-2 text-sm leading-6 text-blue-50">
              Let's create professional designs that make your business stand out.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
          >
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
