"use client";

import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-[#f5f9ff]">
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* TOP */}

        <div className="text-center max-w-4xl mx-auto">
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
            🚀 Our Services
          </div>

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
            Digital Solutions That Grow Businesses
          </h2>

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
            We help businesses grow through SEO, website development, Google
            Ads, branding, app development, and performance marketing solutions.
          </p>
        </div>

        {/* SERVICES */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: "🚀",
              title: "SEO Services",
              desc: "Improve rankings, traffic, and lead generation with advanced SEO strategies.",
              link: "/seo-services-hyderabad",
            },

            {
              icon: "💻",
              title: "Website Development",
              desc: "Modern business websites and custom web applications built for growth.",
              link: "/website-development-services",
            },

            {
              icon: "📱",
              title: "App Development",
              desc: "Android, iOS, and Flutter mobile app development for startups and businesses.",
              link: "/services/mobile-app-development-hyderabad",
            },

            {
              icon: "📈",
              title: "Performance Marketing",
              desc: "ROI-focused Google Ads and paid campaigns to generate leads and sales.",
              link: "/ppc-management-services",
            },

            {
              icon: "🎯",
              title: "Social Media Marketing",
              desc: "Build your brand visibility and customer engagement across social platforms.",
              link: "/seo-services-india",
            },

            {
              icon: "🛒",
              title: "Ecommerce Development",
              desc: "High-converting ecommerce websites with modern shopping experiences.",
              link: "/ecommerce-development-services",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                border border-gray-100
                rounded-[32px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >
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
                {service.icon}
              </div>

              <h3
                className="
                  mt-7
                  text-2xl
                  font-black
                  text-[#0F172A]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-8
                "
              >
                {service.desc}
              </p>

              <Link
                href={service.link}
                className="
                  inline-flex items-center
                  mt-7
                  text-[#2563EB]
                  font-bold
                  hover:gap-3
                  transition-all duration-300
                "
              >
                Explore Service →
              </Link>

              <div
                className="
                  absolute bottom-0 left-0
                  w-0 group-hover:w-full
                  h-1
                  rounded-full
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#06B6D4]
                  transition-all duration-500
                "
              ></div>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div
          className="
            mt-24
            bg-gradient-to-r
            from-[#2563EB]
            to-[#06B6D4]
            rounded-[40px]
            p-10 md:p-14
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.20)]
          "
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[4px] text-white/70 text-sm">
                BUSINESS GROWTH
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
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                Let’s build powerful SEO, websites, and marketing strategies
                that generate real business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                "SEO Optimization",
                "Website Design",
                "App Development",
                "Google Ads",
                "Social Media",
                "Lead Generation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-2xl
                    px-5 py-5
                    border border-white/10
                    text-center
                    font-semibold
                    hover:bg-white/20
                    hover:-translate-y-1
                    transition duration-300
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
