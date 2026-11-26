"use client";

import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
  {
    category: "Web Development",
    question: "What services does KidiWebTech provide?",
    answer:
      "KidiWebTech is a digital solutions agency offering website design and development, React and Next.js development, WordPress development, eCommerce websites, mobile app development, UI/UX design, SEO services, digital marketing and AI automation for businesses.",
  },
  {
    category: "Web Development",
    question: "Which is the best website development company in Hyderabad?",
    answer:
      "When choosing a website development company in Hyderabad, compare its portfolio, development technologies, mobile responsiveness, SEO capabilities, pricing and ongoing support. KidiWebTech provides custom website design and development solutions for startups, small businesses and established companies.",
  },
  {
    category: "Web Development",
    question: "Do you develop SEO-friendly websites?",
    answer:
      "Yes. KidiWebTech builds SEO-friendly websites with responsive layouts, optimized page structure, semantic HTML, metadata, clean URLs, internal linking, image optimization, sitemap configuration and structured data where appropriate.",
  },
  {
    category: "Web Development",
    question: "Which technologies do you use for website development?",
    answer:
      "Our website development technology stack includes React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB and WordPress. The technology selection depends on the project's requirements, performance needs and scalability.",
  },
  {
    category: "SEO",
    question: "What SEO services do you offer in Hyderabad?",
    answer:
      "KidiWebTech offers SEO services including technical SEO, on-page SEO, off-page SEO, local SEO, keyword research, content optimization, website audits, internal linking, Google Business Profile optimization and SEO performance monitoring.",
  },
  {
    category: "SEO",
    question: "How can SEO help my business get more Google traffic?",
    answer:
      "SEO helps businesses improve their visibility in relevant Google search results. A strong SEO strategy combines keyword research, useful content, technical improvements, local search optimization and quality backlinks to attract relevant visitors and potential customers.",
  },
  {
    category: "AEO",
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "Answer Engine Optimization, or AEO, is the process of organizing and optimizing website content so answer engines can understand and use it to respond to user questions. It includes clear answers, descriptive headings, structured content, relevant FAQs and accurate information.",
  },
  {
    category: "GEO",
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization, or GEO, focuses on improving how a business and its content are understood, referenced and potentially cited by AI-powered search experiences. It involves helpful content, clear entity information, trustworthy sources, consistent business details and structured website data.",
  },
  {
    category: "AEO & GEO",
    question:
      "Can my website appear in ChatGPT, Google AI Overviews and other AI search results?",
    answer:
      "Your website can be optimized to improve its eligibility for discovery in AI-powered search experiences. This includes publishing useful and original content, implementing relevant structured data, building topical authority and maintaining accurate business information. However, no agency can guarantee inclusion or citations in AI-generated answers.",
  },
  {
    category: "Local SEO",
    question: "Do you provide local SEO services for businesses in Hyderabad?",
    answer:
      "Yes. Local SEO strategies can include Google Business Profile optimization, location-specific landing pages, local keyword research, business information consistency, local content and review management guidance to improve visibility for relevant searches in Hyderabad.",
  },
  {
    category: "Pricing",
    question: "How much does website development cost in Hyderabad?",
    answer:
      "Website development costs depend on the design, number of pages, functionality, integrations and technology requirements. KidiWebTech provides project-based quotations after understanding your business goals and website requirements.",
  },
  {
    category: "Support",
    question: "How can I contact KidiWebTech for a website or SEO project?",
    answer:
      "You can contact KidiWebTech through the website contact page to discuss website development, mobile applications, SEO, digital marketing or AI automation requirements. Share your project details so the team can understand your needs and discuss the next steps.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="faq-heading"
    >
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Frequently Asked Questions
          </span>

          <h2
            id="faq-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl"
          >
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Find answers about website development, SEO, digital marketing, AEO
            and AI search optimization. Have another question?{" "}
            <a
              href="/contact"
              className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
            >
              Contact our team
            </a>
            .
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/30 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="flex-1">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                      {faq.category}
                    </span>

                    <span className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  className="border-t border-gray-100"
                >
                  <div className="px-5 py-5 sm:px-6">
                    <p className="text-sm leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-7 text-center sm:p-9">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Mail size={21} />
          </div>

          <h3 className="mt-4 text-xl font-bold text-gray-950">
            Still have questions?
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-500">
            Let's discuss your website, SEO or digital growth requirements.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contact KidiWebTech
          </a>
        </div>
      </div>
    </section>
  );
}
