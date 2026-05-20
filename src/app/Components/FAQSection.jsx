"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What services does KIDIWEBTECH provide?",
      answer:
        "We provide SEO services, website development, app development, Google Ads, branding, ecommerce solutions, and digital marketing strategies for businesses.",
    },

    {
      question: "Why choose KIDIWEBTECH?",
      answer:
        "KIDIWEBTECH focuses on result-driven SEO, modern website development, and performance marketing strategies that help businesses generate more traffic, leads, and sales.",
    },

    {
      question: "Do you provide website development services?",
      answer:
        "Yes. We build responsive business websites, ecommerce platforms, landing pages, and custom web applications using modern technologies.",
    },

    {
      question: "Do you provide app development services?",
      answer:
        "Yes. We develop Android, iOS, and Flutter mobile applications for startups, businesses, and enterprises.",
    },

    {
      question: "Do you provide SEO services in Hyderabad?",
      answer:
        "Yes. We provide local SEO, on-page SEO, technical SEO, keyword optimization, and Google ranking strategies for businesses in Hyderabad.",
    },

    {
      question: "How can digital marketing help my business?",
      answer:
        "Digital marketing helps businesses increase online visibility, improve Google rankings, generate quality leads, and grow customer engagement.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* TOP */}

        <div className="text-center">
          {/* BADGE */}

          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-blue-50
              border border-blue-100
              text-[#2563EB]
              font-semibold
              shadow-sm
            "
          >
            ❓ Frequently Asked Questions
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-8
              text-4xl sm:text-5xl md:text-6xl
              font-black
              leading-[1.05]
              tracking-tight
              text-[#0F172A]
            "
          >
            Everything You Need To Know
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              text-lg md:text-xl
              leading-8
              text-gray-600
              max-w-3xl
              mx-auto
            "
          >
            Learn more about our SEO, website development, app development,
            Google Ads, branding, and digital marketing services.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="mt-20 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-100
                rounded-[32px]
                overflow-hidden
                shadow-sm
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)]
                hover:border-blue-100
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
                  p-7 md:p-8
                "
              >
                <h3
                  className="
                    text-lg md:text-2xl
                    font-black
                    leading-snug
                    text-[#0F172A]
                  "
                >
                  {faq.question}
                </h3>

                {/* ICON */}

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
                    shadow-lg
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
                <div className="px-7 md:px-8 pb-7 md:pb-8">
                  <p
                    className="
                      text-gray-600
                      leading-8
                      text-base md:text-lg
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}

        <div
          className="
            mt-24
            bg-gradient-to-r
            from-[#2563EB]
            to-[#06B6D4]
            rounded-[40px]
            p-10 md:p-14
            text-center
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.18)]
            relative overflow-hidden
          "
        >
          {/* GLOW */}

          <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-white/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[4px] text-white/70 text-sm">
              NEED HELP?
            </p>

            <h3
              className="
                mt-5
                text-4xl md:text-5xl
                font-black
                leading-tight
              "
            >
              Ready To Grow Your Business Online?
            </h3>

            <p
              className="
                mt-6
                text-lg md:text-xl
                leading-8
                text-white/90
                max-w-3xl
                mx-auto
              "
            >
              Contact KIDIWEBTECH for SEO, websites, app development, Google
              Ads, branding, and digital marketing solutions tailored for your
              business growth.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full
                  bg-white
                  text-[#2563EB]
                  font-bold
                  hover:scale-105
                  transition duration-300
                  shadow-xl
                "
              >
                Get Free Consultation
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
                  transition duration-300
                "
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
