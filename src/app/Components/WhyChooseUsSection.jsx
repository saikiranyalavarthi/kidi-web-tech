"use client";

import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-8 md:py-8 px-6 overflow-hidden bg-white">
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-120px] w-[350px] h-[350px] bg-blue-100/50 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] bg-cyan-100/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* TOP */}

        <div className="text-center max-w-4xl mx-auto">
          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-blue-100
              text-[#2563EB]
              font-semibold
            "
          >
            ⭐ Why Choose KIDIWEBTECH
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
            We Create Digital Solutions That Help Businesses Grow Faster Online
          </h2>

          <p
            className="
              mt-8
              text-lg md:text-xl
              leading-8
              text-gray-600
            "
          >
            KIDIWEBTECH is a trusted digital marketing agency in Hyderabad
            delivering website development, app development, SEO services,
            social media marketing, Google Ads, branding, and performance
            marketing solutions across India.
          </p>
        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: "🚀",
              title: "SEO Optimized Solutions",
              desc: "We build SEO-friendly websites and digital strategies that improve Google rankings and organic traffic.",
            },

            {
              icon: "💻",
              title: "Modern Web Development",
              desc: "Responsive, fast-loading, and scalable business websites built with modern technologies.",
            },

            {
              icon: "📱",
              title: "Mobile App Development",
              desc: "Custom Android, iOS, and Flutter app development services for startups and enterprises.",
            },

            {
              icon: "📈",
              title: "Performance Marketing",
              desc: "High-converting Google Ads and social media campaigns focused on lead generation and ROI.",
            },

            {
              icon: "🎯",
              title: "Result Driven Strategy",
              desc: "We focus on measurable growth, traffic, engagement, and business conversions.",
            },

            {
              icon: "⚡",
              title: "Fast Support & Delivery",
              desc: "Quick project delivery with dedicated client support and transparent communication.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-gradient-to-b
                from-[#f8fbff]
                to-white
                rounded-[32px]
                p-8
                border border-gray-100
                shadow-sm
                hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              {/* ICON */}

              <div
                className="
                  w-16 h-16
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#06B6D4]
                  flex items-center justify-center
                  text-3xl
                  shadow-lg
                "
              >
                {item.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-2xl
                  font-black
                  text-[#0F172A]
                  leading-snug
                "
              >
                {item.title}
              </h3>

              {/* DESC */}

              <p
                className="
                  mt-5
                  text-gray-600
                  leading-8
                  text-base
                "
              >
                {item.desc}
              </p>

              {/* HOVER BAR */}

              <div
                className="
                  absolute bottom-0 left-0
                  w-0 group-hover:w-full
                  h-1
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#06B6D4]
                  rounded-full
                  transition-all duration-500
                "
              ></div>
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
            shadow-[0_30px_80px_rgba(37,99,235,0.25)]
          "
        >
          <h3
            className="
              text-4xl md:text-5xl
              font-black
              leading-tight
            "
          >
            Ready To Grow Your Business Online?
          </h3>

          <p
            className="
              mt-8
              text-lg md:text-xl
              leading-8
              text-white/90
              max-w-3xl
              mx-auto
            "
          >
            Let KIDIWEBTECH help you with SEO services, website development,
            mobile app development, Google Ads, branding, and digital marketing
            solutions across Hyderabad and India.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <Link
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
              Get Free Consultation
            </Link>

            <Link
              href="/services"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-full
                border border-white/30
                text-white
                font-semibold
                hover:bg-white/10
                transition
              "
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
