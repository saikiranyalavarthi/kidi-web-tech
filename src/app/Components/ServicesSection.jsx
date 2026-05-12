"use client";

import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-white to-[#f5f9ff]">
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* TOP CONTENT */}

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
            🚀 Our Services
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
            Digital Marketing, Website Development & App Development Services
          </h2>

          <p
            className="
              mt-8
              text-lg md:text-xl
              leading-8
              text-gray-600
            "
          >
            KIDIWEBTECH is a leading digital marketing agency in Hyderabad
            providing SEO services, website development, app development, social
            media marketing, Google Ads management, ecommerce solutions, and
            branding services for startups, businesses, and enterprises across
            India.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: "🚀",
              title: "SEO Services Hyderabad",
              desc: "Improve Google rankings, organic traffic, and lead generation with advanced SEO optimization strategies.",
              link: "/seo-services-hyderabad",
            },

            {
              icon: "💻",
              title: "Website Development Company",
              desc: "Responsive business websites, ecommerce websites, landing pages, and custom web applications.",
              link: "/website-development-company-hyderabad",
            },

            {
              icon: "📱",
              title: "Mobile App Development",
              desc: "Android, iOS, and Flutter mobile app development services for startups and enterprises.",
              link: "/app-development-company-india",
            },

            {
              icon: "📈",
              title: "Performance Marketing",
              desc: "Google Ads management and social media advertising focused on ROI and business growth.",
              link: "/performance-marketing",
            },

            {
              icon: "🎯",
              title: "Social Media Marketing",
              desc: "Social media marketing agency services to grow your brand visibility and customer engagement.",
              link: "/social-media-marketing",
            },

            {
              icon: "🛒",
              title: "Ecommerce Development",
              desc: "Modern ecommerce website and app development solutions with high-converting user experiences.",
              link: "/ecommerce-development",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white/80
                backdrop-blur-xl
                border border-gray-100
                rounded-[32px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]
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
                {service.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-2xl
                  font-black
                  leading-snug
                  text-[#0F172A]
                "
              >
                {service.title}
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
                {service.desc}
              </p>

              {/* LINK */}

              <Link
                href={service.link}
                className="
                  inline-flex items-center
                  mt-8
                  text-[#2563EB]
                  font-bold
                  hover:gap-3
                  transition-all
                "
              >
                Explore Service →
              </Link>

              {/* HOVER BORDER */}

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

        {/* BOTTOM CONTENT */}

        <div
          className="
            mt-24
            bg-gradient-to-r
            from-[#2563EB]
            to-[#06B6D4]
            rounded-[40px]
            p-10 md:p-16
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.25)]
          "
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}

            <div>
              <h3
                className="
                  text-4xl md:text-5xl
                  font-black
                  leading-tight
                "
              >
                Looking For The Best Digital Marketing Agency In Hyderabad?
              </h3>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                We help businesses grow online with SEO services, website
                development, mobile app development, social media marketing,
                Google Ads management, and performance marketing solutions
                across India.
              </p>
            </div>

            {/* RIGHT */}

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
                    transition
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
