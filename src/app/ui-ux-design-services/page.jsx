"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Layout,
  Smartphone,
  Monitor,
  MousePointer2,
  Layers,
  Figma,
  Users,
  Search,
  Workflow,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  PenTool,
  Component,
  Eye,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website UI/UX Design",
    desc: "Create modern, user-friendly website experiences with intuitive layouts, clear navigation and conversion-focused interfaces.",
    tags: ["Website Design", "Landing Pages", "Responsive UI"],
  },
  {
    icon: Smartphone,
    title: "Mobile App UI/UX Design",
    desc: "Design engaging mobile app experiences with easy navigation, consistent components and user-focused interactions.",
    tags: ["Android Apps", "iOS Apps", "Mobile Prototypes"],
  },
  {
    icon: Monitor,
    title: "Dashboard & SaaS Design",
    desc: "Build clean and functional dashboards, admin panels and SaaS interfaces that make complex workflows easier to use.",
    tags: ["Admin Panels", "SaaS UI", "Data Dashboards"],
  },
  {
    icon: Search,
    title: "UX Research & Strategy",
    desc: "Understand user needs, identify usability challenges and plan experiences around real customer expectations.",
    tags: ["User Research", "User Flows", "UX Strategy"],
  },
  {
    icon: PenTool,
    title: "Wireframing & Prototyping",
    desc: "Turn ideas into structured wireframes and interactive prototypes before moving into final interface development.",
    tags: ["Wireframes", "Prototypes", "User Journeys"],
  },
  {
    icon: Component,
    title: "Design Systems",
    desc: "Create reusable design components, typography systems, color palettes and consistent interface guidelines.",
    tags: ["UI Components", "Style Guides", "Design Libraries"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand your business, audience, competitors and project requirements.",
  },
  {
    number: "02",
    title: "Structure",
    desc: "Plan user journeys, information architecture and wireframes.",
  },
  {
    number: "03",
    title: "Design",
    desc: "Create polished interfaces, responsive layouts and interactive prototypes.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "Prepare developer-ready design files and support the implementation process.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "User-focused experiences",
    desc: "Design interfaces around the needs and expectations of your target audience.",
  },
  {
    icon: MousePointer2,
    title: "Easy navigation",
    desc: "Make it simple for users to find information and complete important actions.",
  },
  {
    icon: Eye,
    title: "Consistent visual design",
    desc: "Maintain a professional appearance across pages, screens and devices.",
  },
  {
    icon: Layers,
    title: "Development-ready files",
    desc: "Organize reusable components and design specifications for smoother development.",
  },
];

const faqs = [
  {
    q: "What is UI/UX design?",
    a: "UI design focuses on the visual elements of a digital product, such as layouts, colors, typography and buttons. UX design focuses on how users interact with the product and how easy and useful the experience is.",
  },
  {
    q: "Do you provide both UI and UX design services?",
    a: "Yes. We can support the design process from user research, information architecture and wireframes to final visual interfaces and interactive prototypes.",
  },
  {
    q: "Do you design mobile apps and websites?",
    a: "Yes. We design responsive websites, mobile applications, SaaS platforms, dashboards, landing pages and other digital interfaces.",
  },
  {
    q: "Which tools do you use for UI/UX design?",
    a: "We can use Figma and other suitable design tools to create wireframes, prototypes, interface components and design systems.",
  },
  {
    q: "Will I receive the source design files?",
    a: "Deliverables can include the agreed design files, prototypes, reusable components and design specifications, depending on the project scope.",
  },
  {
    q: "Can you redesign my existing website or app?",
    a: "Yes. We can review your current interface, identify usability and visual design opportunities, and create an updated design based on your goals.",
  },
];

export default function UIUXDesignPage() {
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
              Creative UI/UX Design Solutions
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Design Better Experiences.
              <span className="mt-2 block bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Make Every Interaction Count.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              KidiWebTech creates modern UI/UX designs for websites, mobile apps
              and digital products. We combine thoughtful user experiences with
              clean visual design to make digital products easier and more
              enjoyable to use.
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
                User-Centered Design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Responsive Interfaces
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Modern Design Systems
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
                  <p className="mt-1 text-xs text-gray-400">UI/UX Workspace</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="grid grid-cols-[65px_1fr] gap-4 py-6">
                <div className="space-y-3">
                  {[Layout, Palette, Layers, Figma, Workflow].map((Icon, i) => (
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
                      Preview
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold text-blue-700">
                      Desktop UI
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-20 rounded-full bg-blue-600" />
                      <div className="flex gap-2">
                        <div className="h-2 w-7 rounded-full bg-gray-200" />
                        <div className="h-2 w-7 rounded-full bg-gray-200" />
                      </div>
                    </div>

                    <div className="mt-7 grid grid-cols-2 items-center gap-3">
                      <div>
                        <div className="h-3 w-full rounded-full bg-gray-800" />
                        <div className="mt-2 h-3 w-4/5 rounded-full bg-gray-800" />
                        <div className="mt-3 h-2 w-full rounded-full bg-gray-200" />
                        <div className="mt-2 h-2 w-4/5 rounded-full bg-gray-200" />
                        <div className="mt-4 h-7 w-20 rounded-lg bg-blue-600" />
                      </div>
                      <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
                        <Sparkles className="text-white" size={35} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-lg bg-blue-100" />
                    <div className="h-12 rounded-lg bg-cyan-100" />
                    <div className="h-12 rounded-lg bg-violet-100" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                <div>
                  <p className="text-xs text-gray-400">Design quality</p>
                  <p className="mt-1 text-sm font-bold">
                    Clean. Modern. Consistent.
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
              Design That Makes a Difference
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Great design starts with understanding your users.
            </h2>
          </div>

          <p className="text-base leading-8 text-gray-600">
            A successful digital product needs more than an attractive
            appearance. It needs clear navigation, meaningful interactions and a
            consistent experience across devices. Our UI/UX design approach
            brings together user needs, business goals and visual creativity to
            create interfaces that are both useful and engaging.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Design Services
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Complete UI/UX design services
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              From initial research and wireframes to polished interfaces and
              interactive prototypes, we design digital experiences around your
              goals.
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

                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>

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

      {/* UI VS UX */}
      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              UI + UX
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Two disciplines. One better experience.
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              Visual design and usability work together to create a successful
              digital product.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Palette size={27} />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold">UI Design</h3>
              <p className="mt-3 leading-7 text-gray-500">
                User Interface design focuses on how your digital product looks
                and communicates visually.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  "Colors and typography",
                  "Page layouts and visual hierarchy",
                  "Buttons and interface components",
                  "Responsive screen designs",
                  "Brand consistency",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-blue-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                <Users size={27} />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold">UX Design</h3>
              <p className="mt-3 leading-7 text-gray-500">
                User Experience design focuses on how people navigate,
                understand and interact with your digital product.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  "User research and requirements",
                  "Information architecture",
                  "User journeys and flows",
                  "Wireframes and prototypes",
                  "Usability improvements",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-cyan-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Design Process
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              From first idea to final design
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              A structured design process that keeps your project focused and
              your users at the center.
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

      {/* BENEFITS */}
      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Choose KidiWebTech
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Design with purpose and clarity
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              We focus on creating practical designs that support your users and
              business objectives.
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
              UI/UX design questions
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              Find answers to common questions about our website, mobile app and
              product design services.
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
              Have a digital product idea?
            </h2>
            <p className="mt-2 text-sm leading-6 text-blue-50">
              Let's turn your ideas into beautiful digital experiences.
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
