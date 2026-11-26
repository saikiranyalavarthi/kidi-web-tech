
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  PenTool,
  Shapes,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Layers,
  Lightbulb,
  Eye,
  Building2,
  Type,
  Fingerprint,
  RefreshCw,
  FileImage,
  BriefcaseBusiness,
  Package,
} from "lucide-react";

const services = [
  {
    icon: Shapes,
    title: "Business Logo Design",
    desc: "Create a professional logo that represents your business identity, communicates your values and makes your brand recognizable.",
    tags: ["Corporate Logos", "Startup Logos", "Business Identity"],
  },
  {
    icon: Type,
    title: "Wordmark Logo Design",
    desc: "Build a distinctive brand identity using custom typography, lettering and carefully designed wordmarks.",
    tags: ["Typography", "Custom Lettering", "Brand Names"],
  },
  {
    icon: Fingerprint,
    title: "Symbol & Icon Logo Design",
    desc: "Create memorable symbols and graphic marks that help customers identify and recognize your brand.",
    tags: ["Brand Symbols", "Icon Logos", "Minimal Marks"],
  },
  {
    icon: Building2,
    title: "Corporate Logo Design",
    desc: "Develop clean and professional logos for companies, organizations and growing businesses.",
    tags: ["Company Logos", "Professional Branding", "Corporate Identity"],
  },
  {
    icon: RefreshCw,
    title: "Logo Redesign & Refresh",
    desc: "Modernize your existing logo while maintaining important brand recognition and visual consistency.",
    tags: ["Logo Redesign", "Brand Refresh", "Modern Identity"],
  },
  {
    icon: Layers,
    title: "Complete Brand Identity",
    desc: "Build a consistent visual identity with logo variations, colors, typography and brand guidelines.",
    tags: ["Brand Guidelines", "Color Systems", "Logo Variations"],
  },
];

const logoTypes = [
  {
    name: "Wordmark",
    desc: "Typography-based logos using your brand name.",
    icon: Type,
  },
  {
    name: "Lettermark",
    desc: "Initial-based logos with distinctive lettering.",
    icon: PenTool,
  },
  {
    name: "Symbol Logo",
    desc: "Recognizable graphic symbols and brand marks.",
    icon: Shapes,
  },
  {
    name: "Combination Mark",
    desc: "A combination of typography and a graphic symbol.",
    icon: Layers,
  },
  {
    name: "Emblem Logo",
    desc: "Text and symbols arranged within a unified shape.",
    icon: Fingerprint,
  },
  {
    name: "Abstract Logo",
    desc: "Original geometric and conceptual brand symbols.",
    icon: Sparkles,
  },
];

const process = [
  {
    number: "01",
    title: "Brand Discovery",
    desc: "Understand your business, target audience, industry and brand personality.",
  },
  {
    number: "02",
    title: "Creative Concepts",
    desc: "Explore visual directions, logo styles, colors and typography.",
  },
  {
    number: "03",
    title: "Logo Development",
    desc: "Refine the selected direction into a polished and versatile logo.",
  },
  {
    number: "04",
    title: "Final Delivery",
    desc: "Deliver the agreed logo variations and file formats for your brand.",
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Memorable brand identity",
    desc: "Create a recognizable visual identity that helps customers remember your business.",
  },
  {
    icon: Lightbulb,
    title: "Creative concepts",
    desc: "Explore thoughtful design directions that reflect your brand personality.",
  },
  {
    icon: Layers,
    title: "Consistent branding",
    desc: "Maintain a unified visual identity across websites, social media and print.",
  },
  {
    icon: FileImage,
    title: "Versatile logo files",
    desc: "Prepare logo variations and formats for different business applications.",
  },
];

const faqs = [
  {
    q: "What is included in your logo design service?",
    a: "Logo design projects can include brand discovery, creative concepts, logo refinement, color selection, typography and agreed final logo files. Exact deliverables depend on the selected project scope.",
  },
  {
    q: "Can you design a logo for a new business?",
    a: "Yes. We create logo concepts for startups, small businesses, companies and new brands across different industries.",
  },
  {
    q: "Do you redesign existing logos?",
    a: "Yes. We can modernize an existing logo, improve its visual clarity and develop updated variations while considering your current brand recognition.",
  },
  {
    q: "Which types of logos do you design?",
    a: "We design wordmark, lettermark, symbol, combination mark, emblem and abstract logos based on your brand requirements.",
  },
  {
    q: "Which file formats will I receive?",
    a: "Depending on the project agreement, final deliverables may include PNG, JPG, PDF and vector formats such as SVG. Editable source files can also be discussed.",
  },
  {
    q: "How long does logo design take?",
    a: "The timeline depends on the project requirements, number of concepts, feedback and revisions. We will confirm the expected timeline before starting.",
  },
];

export default function LogoDesignServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111827]">

      {/* HERO */}
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
              Professional Logo Design Services
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Logo Design That
              <span className="mt-2 block bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Defines Your Brand.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Build a strong first impression with creative and professional
              logo design services. KidiWebTech creates distinctive brand
              identities that represent your business and help you stand out
              in a competitive market.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Get Your Logo Designed <ArrowRight size={18} />
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
                Custom Logo Concepts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Brand-Focused Design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Professional Deliverables
              </span>
            </div>
          </motion.div>

          {/* LOGO DESIGN PREVIEW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="rounded-[30px] border border-gray-200 bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.10)] sm:p-7">

              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="text-sm font-bold">Logo Design Studio</p>
                  <p className="mt-1 text-xs text-gray-400">Brand identity workspace</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  Creative Studio
                </span>
              </div>

              <div className="py-7">
                <div className="flex min-h-[230px] flex-col items-center justify-center rounded-2xl bg-[#F4F7FF] p-6">
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-xl shadow-blue-500/20"
                  >
                    <Sparkles size={46} />
                  </motion.div>

                  <h3 className="mt-5 text-2xl font-black tracking-[0.18em] text-gray-900">
                    BRAND
                  </h3>
                  <p className="mt-2 text-[10px] font-semibold tracking-[0.35em] text-gray-400">
                    YOUR IDENTITY STARTS HERE
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Shapes className="mx-auto text-blue-600" size={23} />
                  <p className="mt-2 text-xs font-semibold">Symbol</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Type className="mx-auto text-cyan-600" size={23} />
                  <p className="mt-2 text-xs font-semibold">Typography</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Palette className="mx-auto text-violet-600" size={23} />
                  <p className="mt-2 text-xs font-semibold">Colors</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-4">
                <div>
                  <p className="text-xs text-gray-400">Brand direction</p>
                  <p className="mt-1 text-sm font-bold">
                    Unique. Simple. Recognizable.
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
              Build a Recognizable Brand
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Your logo is the face of your business.
            </h2>
          </div>

          <p className="text-base leading-8 text-gray-600">
            A well-designed logo gives your business a recognizable visual
            identity. It helps communicate your brand personality across
            websites, social media, packaging, business cards and marketing
            materials. We focus on creating logos that are clear, versatile
            and aligned with your business goals.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Logo Design Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Logo solutions for every business
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              From startup logos to corporate brand identities, we create
              visual designs that reflect your business.
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
                  Discuss Your Logo <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF LOGOS */}
      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Logo Styles
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Different types of logo designs
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Choose a visual direction that fits your brand personality,
              industry and business identity.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {logoTypes.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <item.icon size={23} />
                </div>

                <h3 className="mt-5 font-bold">{item.name}</h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND BENEFITS */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Choose KidiWebTech
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              More than a logo. A stronger brand identity.
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              We approach logo design with creativity, consistency and
              attention to how your brand will be used.
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

      {/* PROCESS */}
      <section className="bg-[#0B1220] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Our Design Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              From brand idea to final logo
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              A clear creative process to develop a logo aligned with
              your business identity.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="relative border-t border-white/20 pt-7"
              >
                <span className="text-4xl font-extrabold text-cyan-400">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
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
              Logo design questions
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Learn more about our logo design, branding and creative
              identity services.
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
              Ready to create your brand identity?
            </h2>

            <p className="mt-2 text-sm leading-6 text-blue-50">
              Let's design a logo that makes your business memorable.
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