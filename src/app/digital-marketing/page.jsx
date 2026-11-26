"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Target,
  TrendingUp,
  Megaphone,
  Share2,
  MousePointerClick,
  MapPin,
  PenTool,
  BarChart3,
  Globe,
  Users,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Instagram,
  Lightbulb,
  Rocket,
  ChartNoAxesCombined,
  Mail,
  Facebook,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve your Google search visibility with keyword research, technical SEO, on-page optimization and quality content.",
    features: ["Technical SEO", "On-Page SEO", "Keyword Research"],
    href: "/seo-services",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build your brand and connect with potential customers through strategic social media campaigns.",
    features: ["Instagram Marketing", "Facebook Marketing", "Content Strategy"],
    href: "/social-media-marketing",
  },
  {
    icon: Target,
    title: "Google Ads & PPC",
    description:
      "Reach people actively searching for your products and services through targeted paid advertising.",
    features: ["Google Search Ads", "Display Advertising", "Remarketing"],
    href: "/google-ads-services",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description:
      "Attract and educate your audience through valuable blogs, website content and marketing materials.",
    features: ["Blog Writing", "Website Content", "Content Strategy"],
    href: "/content-marketing",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Help nearby customers discover your business through local search optimization and Google Business Profile.",
    features: ["Google Business Profile", "Local Keywords", "Local Citations"],
    href: "/local-seo-services",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description:
      "Attract relevant enquiries using conversion-focused landing pages, paid campaigns and marketing funnels.",
    features: ["Landing Pages", "Lead Campaigns", "Conversion Optimization"],
    href: "/lead-generation-services",
  },
  {
    icon: Megaphone,
    title: "Online Brand Promotion",
    description:
      "Build a consistent online identity through coordinated digital campaigns and brand communication.",
    features: ["Brand Awareness", "Campaign Planning", "Online Promotion"],
    href: "/contact",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Measure your marketing activities through website analytics, campaign tracking and performance reports.",
    features: ["Google Analytics", "Campaign Tracking", "Performance Reports"],
    href: "/contact",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Improve Online Visibility",
    text: "Make it easier for potential customers to discover your business through search engines and digital platforms.",
  },
  {
    icon: Users,
    title: "Reach Your Target Audience",
    text: "Connect with relevant audiences based on their interests, location, needs and online behaviour.",
  },
  {
    icon: TrendingUp,
    title: "Create Growth Opportunities",
    text: "Use the right digital channels to support customer engagement, enquiries and business development.",
  },
  {
    icon: BarChart3,
    title: "Measure Marketing Performance",
    text: "Understand campaign performance with tracking, analytics and regular reporting.",
  },
];

const process = [
  {
    number: "01",
    title: "Business Analysis",
    description:
      "We understand your business, target audience, competitors and marketing objectives.",
  },
  {
    number: "02",
    title: "Marketing Strategy",
    description:
      "We prepare a suitable digital marketing strategy based on your goals, industry and budget.",
  },
  {
    number: "03",
    title: "Campaign Execution",
    description:
      "We implement SEO, social media, advertising and content marketing activities.",
  },
  {
    number: "04",
    title: "Monitoring & Optimization",
    description:
      "We monitor results, analyze performance and make improvements to campaigns.",
  },
];

const industries = [
  "Real Estate",
  "Healthcare",
  "Education",
  "E-commerce",
  "IT & Software",
  "Manufacturing",
  "Hospitality",
  "Professional Services",
];

const faqs = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is the promotion of products, services and brands through online channels such as search engines, social media, websites, email and paid advertising.",
  },
  {
    question: "What digital marketing services does KidiWebTech provide?",
    answer:
      "KidiWebTech provides SEO, social media marketing, Google Ads, PPC advertising, content marketing, local SEO, lead generation and digital campaign analytics.",
  },
  {
    question: "How much do digital marketing services cost in Hyderabad?",
    answer:
      "Pricing depends on your business goals, selected services, campaign requirements and advertising budget. Contact KidiWebTech to discuss a suitable package.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "Paid advertising can start attracting traffic after campaigns launch. SEO and organic content generally require consistent work over several months. Results depend on competition, industry and strategy.",
  },
  {
    question: "Is SEO part of digital marketing?",
    answer:
      "Yes. Search engine optimization is an important part of digital marketing. It improves organic visibility through technical improvements, relevant content and website optimization.",
  },
  {
    question: "Do you provide digital marketing for small businesses?",
    answer:
      "Yes. Digital marketing strategies can be planned for startups, small businesses and established companies based on their objectives and available budgets.",
  },
  {
    question: "Can digital marketing help generate business leads?",
    answer:
      "Yes. SEO, paid advertising, social media campaigns and conversion-focused landing pages can help attract potential customers and generate enquiries.",
  },
  {
    question:
      "Why choose KidiWebTech as a digital marketing agency in Hyderabad?",
    answer:
      "KidiWebTech brings together website development, SEO, online advertising and digital marketing services to help businesses build and improve their online presence.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate px-5 pb-20 pt-28 sm:px-8 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.11),transparent_48%)]" />
        <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={15} />
              Digital Marketing Agency in Hyderabad
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-[62px]">
              Grow Your Business With{" "}
              <span className="text-blue-600">Digital Marketing</span> That
              Works.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Build a powerful online presence, reach your ideal customers and
              create more business opportunities with strategic digital
              marketing services from KidiWebTech.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-600"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-600">
              {["SEO Strategy", "Paid Advertising", "Lead Generation"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-blue-600" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-100 via-cyan-50 to-white blur-xl" />

            <div className="relative rounded-[30px] border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-9">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Digital Growth Strategy
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    Your Online Presence
                  </h2>
                </div>

                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <ChartNoAxesCombined size={27} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  { icon: Search, name: "SEO", desc: "Organic visibility" },
                  {
                    icon: MousePointerClick,
                    name: "PPC Ads",
                    desc: "Paid campaigns",
                  },
                  {
                    icon: Instagram,
                    name: "Social Media",
                    desc: "Audience engagement",
                  },
                  {
                    icon: Rocket,
                    name: "Lead Generation",
                    desc: "Business enquiries",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <item.icon size={23} className="text-blue-600" />
                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                    <Lightbulb size={23} />
                  </div>
                  <div>
                    <p className="font-semibold">One Connected Strategy</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Strategy • Execution • Optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-slate-100 bg-slate-50 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              About Digital Marketing
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              Build a Strong Digital Presence for Your Business
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Customers use search engines, social media and online platforms to
              discover businesses, compare services and make purchasing
              decisions. A well-planned digital marketing strategy helps your
              business become visible where your customers spend their time.
            </p>

            <p>
              KidiWebTech is a digital marketing agency in Hyderabad offering
              SEO, social media marketing, Google Ads, content marketing and
              lead generation solutions. We understand your business
              requirements before recommending the right marketing activities.
            </p>

            <p>
              Our approach connects different digital channels to create a
              consistent online presence and support your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Our Expertise
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Complete Digital Marketing Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore our digital marketing solutions to improve brand
              visibility, reach your audience and support business growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <service.icon size={26} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2 size={14} className="text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
                >
                  Explore Service
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DIGITAL MARKETING */}
      <section className="bg-slate-950 px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              Why Digital Marketing
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Connect Your Business With the Right Customers
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Digital marketing provides different ways to introduce your
              business, communicate your value and connect with potential
              customers. The right combination of marketing channels depends on
              your audience, goals and industry.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Discuss Your Marketing Goals
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.08]"
              >
                <benefit.icon size={27} className="text-blue-400" />

                <h3 className="mt-5 font-bold">{benefit.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Our Working Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              How We Plan and Execute Digital Marketing
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A structured approach helps us understand your requirements,
              implement strategies and improve marketing performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-4xl font-black text-blue-100">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-blue-50/60 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Industries We Support
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Digital Marketing for Different Industries
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We help businesses plan their digital presence around their
              industry, target audience and marketing objectives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-blue-100 bg-white px-4 py-6 text-center font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Digital Marketing FAQs
            </h2>

            <p className="mt-4 text-slate-600">
              Find answers to common questions about digital marketing services
              in Hyderabad.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition open:border-blue-200 open:shadow-lg open:shadow-blue-900/5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900">
                  {faq.question}

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-blue-600 transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-blue-600 px-7 py-16 text-center text-white sm:px-12">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[45px] border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[45px] border-white/10" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
              Let's Grow Together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold sm:text-5xl">
              Ready to Grow Your Business Online?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Talk to KidiWebTech about your digital marketing goals. Let's
              create a strategy that fits your business requirements.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
