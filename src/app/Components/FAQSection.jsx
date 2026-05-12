"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What services does KIDIWEBTECH provide?",
      answer:
        "KIDIWEBTECH provides SEO services, website development, mobile app development, Google Ads management, social media marketing, branding, ecommerce solutions, and performance marketing services across Hyderabad and India.",
    },

    {
      question:
        "Why choose KIDIWEBTECH as a digital marketing agency in Hyderabad?",
      answer:
        "KIDIWEBTECH focuses on result-driven SEO strategies, modern website development, app development, and digital marketing solutions that help businesses improve Google rankings, traffic, leads, and online growth.",
    },

    {
      question: "Do you provide website development services?",
      answer:
        "Yes. We provide responsive website development, ecommerce website development, custom web applications, landing pages, and business websites using modern technologies and SEO optimization.",
    },

    {
      question: "Do you provide mobile app development services?",
      answer:
        "Yes. We provide Android app development, iOS app development, Flutter app development, and custom mobile application solutions for startups and enterprises.",
    },

    {
      question: "Do you provide SEO services in Hyderabad?",
      answer:
        "Yes. Our SEO services include on-page SEO, technical SEO, local SEO, keyword optimization, backlink strategies, content optimization, and Google ranking improvements.",
    },

    {
      question: "How can digital marketing help my business?",
      answer:
        "Digital marketing helps businesses increase online visibility, improve search engine rankings, generate quality leads, grow customer engagement, and increase conversions through SEO, Google Ads, and social media marketing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* TOP CONTENT */}

        <div className="text-center">
          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-blue-100
              text-[#2563EB]
              font-semibold
            "
          >
            ❓ Frequently Asked Questions
          </div>

          <h2
            className="
              mt-8
              text-4xl sm:text-5xl md:text-6xl
              font-black
              leading-tight
              tracking-tight
              text-[#0F172A]
            "
          >
            Everything You Need To Know About Our Digital Services
          </h2>

          <p
            className="
              mt-8
              text-lg md:text-xl
              leading-9
              text-gray-600
              max-w-3xl
              mx-auto
            "
          >
            KIDIWEBTECH is a trusted digital marketing agency in Hyderabad
            providing SEO services, website development, app development, Google
            Ads management, branding, social media marketing, and ecommerce
            development solutions for businesses across India.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="mt-20 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white/80
                backdrop-blur-xl
                border border-gray-100
                rounded-[32px]
                overflow-hidden
                shadow-sm
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.10)]
                transition duration-500
              "
            >
              {/* QUESTION */}

              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="
                  w-full
                  flex items-center justify-between
                  gap-6
                  text-left
                  p-8
                "
              >
                <h3
                  className="
                    text-xl md:text-2xl
                    font-black
                    leading-snug
                    text-[#0F172A]
                  "
                >
                  {faq.question}
                </h3>

                <div
                  className="
                    shrink-0
                    w-12 h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#2563EB]
                    to-[#06B6D4]
                    flex items-center justify-center
                    text-white
                    text-2xl
                    font-bold
                  "
                >
                  {openIndex === index ? "−" : "+"}
                </div>
              </button>

              {/* ANSWER */}

              <div
                className={`
                  overflow-hidden transition-all duration-500
                  ${
                    openIndex === index
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-8 pb-8">
                  <p
                    className="
                      text-gray-600
                      leading-9
                      text-lg
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div
          className="
            mt-24
            bg-gradient-to-r
            from-[#2563EB]
            to-[#06B6D4]
            rounded-[40px]
            p-10 md:p-16
            text-center
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.20)]
          "
        >
          <h3
            className="
              text-4xl md:text-5xl
              font-black
              leading-tight
            "
          >
            Need More Information About Our Services?
          </h3>

          <p
            className="
              mt-8
              text-lg md:text-xl
              leading-9
              text-white/90
              max-w-3xl
              mx-auto
            "
          >
            Contact KIDIWEBTECH for SEO services, website development, app
            development, Google Ads, branding, and digital marketing solutions
            tailored for your business growth.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-full
                bg-white
                text-[#2563EB]
                font-bold
                hover:scale-105
                transition
              "
            >
              Contact Us
            </a>

            <a
              href="/services"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-full
                border border-white/20
                text-white
                font-semibold
                hover:bg-white/10
                transition
              "
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
