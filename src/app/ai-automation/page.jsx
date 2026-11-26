"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Workflow,
  MessageSquare,
  Database,
  Mail,
  Users,
  ShoppingCart,
  FileText,
  Zap,
  CheckCircle2,
  Sparkles,
  Clock,
  TrendingUp,
  ShieldCheck,
  Phone,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    desc: "Build intelligent AI chatbots that answer customer questions, qualify leads and provide instant support around the clock.",
    tags: ["Website Chatbots", "AI Assistants", "Customer Support"],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Automate repetitive business tasks, connect your tools and create streamlined workflows that save time.",
    tags: ["Workflow Automation", "Task Automation", "Integrations"],
  },
  {
    icon: Users,
    title: "AI Lead Management",
    desc: "Capture leads, qualify prospects, assign enquiries and automate follow-ups to improve your sales process.",
    tags: ["Lead Capture", "Lead Qualification", "Follow-ups"],
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Automation",
    desc: "Send automated notifications, reminders, follow-ups and customer communication through connected platforms.",
    tags: ["WhatsApp", "Email Campaigns", "Notifications"],
  },
  {
    icon: Database,
    title: "CRM Automation",
    desc: "Connect your CRM with your business workflows to automate data entry, lead updates and sales activities.",
    tags: ["CRM Integration", "Data Sync", "Sales Workflows"],
  },
  {
    icon: FileText,
    title: "AI Document Processing",
    desc: "Extract information from documents, organize business data and automate repetitive document-related tasks.",
    tags: ["Data Extraction", "Document Workflows", "Reports"],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save valuable time",
    desc: "Reduce repetitive manual work with automated business processes.",
  },
  {
    icon: TrendingUp,
    title: "Improve productivity",
    desc: "Help your team focus on important tasks instead of routine operations.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce manual errors",
    desc: "Create consistent workflows with structured automation.",
  },
  {
    icon: Zap,
    title: "Respond faster",
    desc: "Automate customer communication and lead follow-ups.",
  },
];

const process = [
  [
    "01",
    "Understand",
    "We understand your business operations, challenges and automation requirements.",
  ],
  [
    "02",
    "Plan",
    "We identify automation opportunities and design the right workflow for your business.",
  ],
  [
    "03",
    "Develop",
    "We build and integrate AI tools, chatbots, APIs and automated workflows.",
  ],
  [
    "04",
    "Launch",
    "We test, deploy and help you improve your automation system.",
  ],
];

const faqs = [
  {
    q: "What is AI automation?",
    a: "AI automation combines artificial intelligence with software workflows to automate repetitive tasks, understand information and support business operations.",
  },
  {
    q: "Can you automate WhatsApp enquiries?",
    a: "Yes. We can develop WhatsApp automation workflows for customer enquiries, notifications, lead capture and follow-ups using supported integrations and APIs.",
  },
  {
    q: "Can AI automation integrate with my existing website or CRM?",
    a: "Yes. Depending on the available APIs and platform capabilities, we can connect automation workflows with your website, CRM, database and other business tools.",
  },
  {
    q: "Is AI automation suitable for small businesses?",
    a: "Yes. Small businesses can start with focused solutions such as enquiry automation, appointment reminders, lead management and customer support workflows.",
  },
  {
    q: "How much does AI automation cost?",
    a: "Pricing depends on workflow complexity, integrations, AI usage and development requirements. Contact our team for a solution based on your business needs.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We can provide maintenance, workflow improvements, integration support and monitoring based on the selected service agreement.",
  },
];

export default function AIAutomationPage() {
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
              Intelligent AI Automation Solutions
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Automate Your Business.
              <span className="mt-2 block bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Work Smarter with AI.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Transform the way your business operates with AI chatbots,
              intelligent workflows and business automation solutions. Save
              time, simplify operations and create better customer experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-4 text-sm font-bold text-gray-800 transition hover:border-blue-500 hover:text-blue-600"
              >
                <Phone size={17} /> Talk to Our Team
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" /> Custom
                Workflows
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" /> Smart
                Integrations
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />{" "}
                Business-Focused AI
              </span>
            </div>
          </motion.div>

          {/* AUTOMATION VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="rounded-[32px] border border-gray-200 bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.10)] sm:p-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="text-sm font-bold">AI Workflow System</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Business automation overview
                  </p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Active
                </span>
              </div>

              <div className="space-y-4 py-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "New Customer Enquiry",
                    sub: "Website / WhatsApp",
                  },
                  {
                    icon: Bot,
                    title: "AI Lead Qualification",
                    sub: "Understand customer requirements",
                  },
                  {
                    icon: Database,
                    title: "CRM Data Update",
                    sub: "Save customer information",
                  },
                  {
                    icon: Mail,
                    title: "Automated Follow-up",
                    sub: "Send a personalized response",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="relative flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-gray-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">{item.sub}</p>
                    </div>
                    <CheckCircle2
                      className="shrink-0 text-green-500"
                      size={20}
                    />
                    {i !== 3 && (
                      <div className="absolute -bottom-4 left-9 z-10 h-4 w-px bg-blue-300" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-100">
                      Connected workflow
                    </p>
                    <p className="mt-1 text-xl font-bold">
                      One connected system.
                    </p>
                  </div>
                  <Workflow size={35} />
                </div>
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
              AI-Powered Business Growth
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Make everyday business operations more intelligent.
            </h2>
          </div>
          <p className="text-base leading-8 text-gray-600">
            Manual processes can slow down your team and make it harder to
            manage growing customer demands. KidiWebTech builds practical AI
            automation solutions that connect your business tools, simplify
            workflows and help your team work more efficiently.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our AI Services
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              AI automation solutions for modern businesses
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              From customer communication to internal operations, automate the
              workflows that matter most to your business.
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
                  Enquire Now <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why AI Automation
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Less manual work. More room to grow.
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              Build efficient business processes with automation designed around
              your actual operational needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
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

      {/* INDUSTRIES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Industries
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Automation across different industries
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              Design workflows around the way your industry operates.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              ["Real Estate", "Lead enquiries and property follow-ups"],
              ["E-Commerce", "Order updates and customer support"],
              ["Healthcare", "Appointment and reminder workflows"],
              ["Education", "Student enquiries and communication"],
              ["Finance", "Document and data workflows"],
              ["Travel", "Booking enquiries and notifications"],
              ["Professional Services", "Client onboarding and follow-ups"],
              ["Small Businesses", "Everyday task automation"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-lg sm:p-6"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{desc}</p>
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
              Our Process
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              From idea to intelligent automation
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              A clear process to build automation around your business goals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, desc]) => (
              <div
                key={number}
                className="relative border-t border-white/20 pt-7"
              >
                <span className="text-4xl font-extrabold text-cyan-400">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{desc}</p>
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
              Frequently asked questions
            </h2>
            <p className="mt-5 leading-7 text-gray-500">
              Learn more about AI automation, integrations and how we can help
              simplify your business operations.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600"
            >
              Have another question? Contact us <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
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
    </main>
  );
}
