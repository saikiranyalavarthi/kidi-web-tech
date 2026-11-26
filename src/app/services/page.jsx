"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  Palette,
  ShoppingCart,
  Search,
  Megaphone,
  Smartphone,
  Layers,
  Bot,
  Workflow,
  PenTool,
  MonitorSmartphone,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Build a professional online presence with fast, responsive and SEO-friendly websites designed to turn visitors into customers.",
    icon: Code2,
    tags: ["React.js", "Next.js", "Responsive Design"],
    href: "/web-development-company",
  },
  {
    number: "02",
    title: "WordPress Development",
    description:
      "Custom WordPress websites with flexible layouts, easy content management, powerful functionality and scalable design.",
    icon: Globe,
    tags: ["WordPress", "Elementor", "Custom Themes"],
    href: "/wordpress-development",
  },
  {
    number: "03",
    title: "Shopify Development",
    description:
      "Launch and grow your online store with customized Shopify storefronts, product pages and shopping experiences.",
    icon: ShoppingCart,
    tags: ["Shopify", "Store Setup", "Integrations"],
    href: "/shopify-development",
  },
  {
    number: "04",
    title: "E-Commerce Development",
    description:
      "Create online shopping platforms with product management, payment integration, order management and responsive experiences.",
    icon: ShoppingCart,
    tags: ["Online Stores", "Payments", "Admin Panel"],
    href: "/ecommerce-development",
  },
  {
    number: "05",
    title: "SEO Services",
    description:
      "Improve organic search visibility through technical SEO, on-page optimization, local SEO and helpful content strategies.",
    icon: Search,
    tags: ["Technical SEO", "Local SEO", "Content SEO"],
    href: "/seo-services",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "Reach your target audience with strategic digital campaigns, social media marketing, paid advertising and lead generation.",
    icon: Megaphone,
    tags: ["Social Media", "Google Ads", "Lead Generation"],
    href: "/digital-marketing",
  },
  {
    number: "07",
    title: "Mobile App Development",
    description:
      "Build user-friendly Android and cross-platform mobile applications with modern interfaces and reliable functionality.",
    icon: Smartphone,
    tags: ["React Native", "Android", "App Development"],
    href: "/mobile-app-development",
  },
  {
    number: "08",
    title: "UI/UX Design",
    description:
      "Create intuitive digital experiences with user-focused interfaces, modern layouts, prototypes and design systems.",
    icon: Palette,
    tags: ["User Experience", "Wireframes", "Prototyping"],
    href: "/ui-ux-design",
  },
  {
    number: "09",
    title: "Custom Software Development",
    description:
      "Develop business-specific software, dashboards, portals and management systems to streamline your operations.",
    icon: Layers,
    tags: ["Custom Software", "Dashboards", "APIs"],
    href: "/custom-software-development",
  },
  {
    number: "10",
    title: "AI & Business Automation",
    description:
      "Integrate AI-powered tools, intelligent chatbots and automated workflows to reduce repetitive work and improve efficiency.",
    icon: Bot,
    tags: ["AI Integration", "Chatbots", "Automation"],
    href: "/ai-automation",
  },
  {
    number: "11",
    title: "Graphic & Logo Design",
    description:
      "Build a recognizable brand identity through professional logo design, creative graphics and consistent visual branding.",
    icon: PenTool,
    tags: ["Logo Design", "Brand Identity", "Creative Design"],
    href: "/graphic-design",
  },
  {
    number: "12",
    title: "Web Application Development",
    description:
      "Develop interactive web applications, customer portals and scalable digital platforms tailored to your business requirements.",
    icon: MonitorSmartphone,
    tags: ["Web Apps", "React", "API Integration"],
    href: "/web-application-development",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and project requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We prepare the strategy, structure, user experience and visual direction.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build, test and optimize your digital solution using suitable technologies.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We launch your project and help you improve and grow your digital presence.",
  },
];

const faqs = [
  {
    question: "What services does KidiWebTech offer?",
    answer:
      "KidiWebTech offers website design and development, WordPress development, Shopify and e-commerce development, SEO, digital marketing, mobile app development, UI/UX design, custom software, graphic design and AI automation.",
  },
  {
    question: "Does KidiWebTech provide website development in Hyderabad?",
    answer:
      "KidiWebTech provides website design and development solutions for businesses in Hyderabad and clients in other locations. Services include business websites, custom web applications, e-commerce websites and responsive website development.",
  },
  {
    question: "Do you provide SEO and digital marketing services?",
    answer:
      "Yes. SEO services include technical SEO, on-page SEO, local SEO and content optimization. Digital marketing services can include social media marketing, paid advertising and lead generation.",
  },
  {
    question: "Can I get website development and SEO together?",
    answer:
      "Yes. Website development and SEO can be planned together. This helps establish a search-friendly website structure, optimized page content, metadata, internal links and technical SEO foundations.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Project pricing depends on the selected service, project scope, functionality, integrations and delivery requirements. Contact KidiWebTech with your requirements to request a suitable quotation.",
  },
  {
    question: "How do I get started with KidiWebTech?",
    answer:
      "Contact KidiWebTech through the website contact page or WhatsApp. Share your business requirements, preferred services and project goals to discuss the next steps.",
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.09)] sm:p-7"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={23} />
        </div>

        <span className="text-xs font-bold tracking-widest text-gray-300">
          {service.number}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold tracking-tight text-gray-950">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-gray-500">
        {service.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-50 px-2.5 py-1.5 text-[10px] font-medium text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={service.href}
        className="mt-7 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-blue-600"
      >
        Explore Service
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </Link>
    </motion.article>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <Sparkles size={14} />
              Our Services
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight text-gray-950 sm:text-5xl lg:text-7xl">
              Digital solutions
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                built for business growth.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              KidiWebTech helps businesses build a stronger digital presence
              through website development, SEO, digital marketing, mobile
              applications, AI solutions and custom software.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>

              <a
                href="#all-services"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-4 text-sm font-bold text-gray-800 transition hover:border-blue-300 hover:text-blue-600"
              >
                Explore Services
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* TRUST STRIP */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 sm:grid-cols-4">
            {[
              "Modern Technologies",
              "Responsive Design",
              "SEO-Friendly Structure",
              "Business-Focused Solutions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-blue-600" />
                <span className="text-xs font-semibold text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="all-services"
        className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Everything you need to
              <span className="block text-blue-600">grow digitally.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Explore our digital services designed to help businesses improve
              their online presence, reach customers and operate more
              efficiently.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Why KidiWebTech
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              More than services.
              <span className="block text-blue-600">
                A digital growth partner.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
              We combine creative design, modern development and digital
              strategy to help businesses create meaningful online experiences.
              Our approach focuses on your goals, your customers and the
              technology your business needs.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              Talk to Our Team
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Performance Focus",
                text: "Responsive, efficient digital experiences.",
              },
              {
                icon: Search,
                title: "SEO Foundations",
                text: "Search-friendly structures and content.",
              },
              {
                icon: Palette,
                title: "Creative Design",
                text: "User-focused interfaces and branding.",
              },
              {
                icon: Workflow,
                title: "Smart Technology",
                text: "Modern tools, integrations and automation.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 font-bold text-gray-950">{item.title}</h3>

                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Process
            </span>

            <h2 className="mt-4 text-3xl font-black text-gray-950 sm:text-4xl">
              From idea to launch.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              A clear and collaborative process to turn your requirements into a
              digital solution.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className="text-3xl font-black text-blue-100">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              FAQs
            </span>

            <h2 className="mt-4 text-3xl font-black text-gray-950 sm:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Helpful answers about our services and project process.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-gray-900">
                  {faq.question}

                  <span className="text-xl text-blue-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
