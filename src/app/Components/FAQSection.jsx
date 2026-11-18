"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does KidiWebTech provide?",
    answer:
      "KidiWebTech provides website design, website development, custom web application development, e-commerce website development, mobile app development, SEO services, local SEO, Google Ads management, and digital marketing solutions. We help businesses build their online presence and generate more opportunities.",
  },
  {
    question: "How much does website development cost in Hyderabad?",
    answer:
      "Website development costs depend on the design, features, number of pages, integrations, and project requirements. A basic business website generally costs less than a custom web application or e-commerce platform. Contact KidiWebTech with your requirements to receive a project estimate.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The development timeline depends on the project scope. A basic business website may take around 1–2 weeks, while larger custom websites and web applications may require several weeks or more. The timeline is confirmed after reviewing the project requirements.",
  },
  {
    question: "How long does SEO take to show results on Google?",
    answer:
      "SEO is a long-term process. Some improvements may appear within a few weeks, but meaningful organic growth commonly takes several months. Results depend on website quality, competition, technical SEO, content, backlinks, and the consistency of optimization.",
  },
  {
    question: "Does KidiWebTech provide local SEO services in Hyderabad?",
    answer:
      "Yes. KidiWebTech provides local SEO services to help businesses improve their visibility in location-based searches. Work may include Google Business Profile optimization, local keyword research, website optimization, local landing pages, and business listing improvements.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer:
      "SEO (Search Engine Optimization) improves website visibility in search engines. AEO (Answer Engine Optimization) helps content provide clear answers to user questions. GEO (Generative Engine Optimization) focuses on making useful, trustworthy content easier for AI-powered search experiences to understand and reference.",
  },
  {
    question: "Does KidiWebTech build websites using React and Next.js?",
    answer:
      "Yes. KidiWebTech works with modern technologies such as React.js and Next.js to develop responsive websites and web applications. The technology is selected according to your project requirements, performance needs, and business goals.",
  },
  {
    question: "Can KidiWebTech develop e-commerce websites?",
    answer:
      "Yes. We can develop e-commerce websites with product listings, product details, shopping carts, checkout flows, payment gateway integration, and order management. Features and integrations are planned according to your business requirements.",
  },
  {
    question: "Does KidiWebTech provide website maintenance and support?",
    answer:
      "Website maintenance and support can be discussed based on your project requirements. Support may include website updates, bug fixes, content changes, performance checks, security updates, and technical assistance.",
  },
  {
    question: "How can I get started with KidiWebTech?",
    answer:
      "You can get started by contacting KidiWebTech through the contact page. Share your business details, project requirements, preferred features, and budget. Our team can review your requirements and discuss the next steps.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section
        className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        aria-labelledby="faq-heading"
      >
        {/* Background decoration */}
        <div
          className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
              Frequently Asked Questions
            </span>

            <h2
              id="faq-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Everything You Need to Know About{" "}
              <span className="text-blue-600">KidiWebTech</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Find answers to common questions about website development, SEO,
              digital marketing, pricing, and our services in Hyderabad.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14">
            {/* Left Card */}
            <div className="rounded-3xl bg-gray-950 p-7 text-white shadow-xl sm:p-9">
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold">
                ?
              </div>

              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                Have a question about your next project?
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                Whether you need a business website, custom web application, SEO
                strategy, or digital marketing support, let's discuss your
                requirements.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-500 sm:w-auto"
                aria-label="Contact KidiWebTech about your project"
              >
                Talk to Our Team
                <span aria-hidden="true">→</span>
              </Link>

              <div className="mt-9 border-t border-white/15 pt-6">
                <p className="text-sm font-semibold text-white">KidiWebTech</p>

                <p className="mt-2 text-sm text-gray-400">
                  Website Development & Digital Growth Solutions
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 bg-blue-50/50 shadow-md"
                        : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-sm"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span
                          className={`text-sm font-bold leading-6 sm:text-base ${
                            isOpen ? "text-blue-700" : "text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </h3>

                    <div id={`faq-answer-${index}`} hidden={!isOpen}>
                      <div className="border-t border-blue-100 px-5 pb-5 pt-4 sm:px-6">
                        <p className="text-sm leading-7 text-gray-600 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
