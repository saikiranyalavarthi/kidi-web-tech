"use client";

import Link from "next/link";

export default function Herosection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f9ff] pt-32 pb-24 px-6">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-200/40 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-200/40 blur-[140px] rounded-full"></div>

        <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-purple-200/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <div>
            {/* BADGE */}

            <div
              className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                bg-white
                border border-blue-100
                shadow-md
              "
            >
              <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>

              <span className="text-sm font-semibold text-[#2563EB]">
                #1 Digital Marketing Agency In Hyderabad
              </span>
            </div>

            {/* HEADING */}

            <h1
              className="
                mt-8
                text-5xl sm:text-6xl md:text-7xl
                font-black
                leading-[1]
                tracking-tight
                text-[#0F172A]
                max-w-4xl
              "
            >
              Grow Your Business With Powerful Digital Marketing & Website
              Development
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                text-lg md:text-xl
                leading-9
                text-gray-600
                max-w-2xl
              "
            >
              KIDIWEBTECH is a leading digital marketing agency in Hyderabad
              offering SEO services, website development, mobile app
              development, Google Ads management, branding, social media
              marketing, and performance marketing solutions for startups and
              businesses across India.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-full
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#06B6D4]
                  text-white
                  font-bold
                  shadow-[0_20px_40px_rgba(37,99,235,0.25)]
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
                  bg-white
                  border border-gray-200
                  text-[#0F172A]
                  font-semibold
                  hover:bg-gray-50
                  transition
                "
              >
                Explore Services
              </Link>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
              {[
                {
                  value: "150+",
                  label: "Projects",
                },

                {
                  value: "100+",
                  label: "Clients",
                },

                {
                  value: "10X",
                  label: "Growth",
                },

                {
                  value: "24/7",
                  label: "Support",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3
                    className="
                      text-4xl
                      font-black
                      text-[#2563EB]
                    "
                  >
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="relative">
            {/* MAIN CARD */}

            <div
              className="
                relative
                bg-white/80
                backdrop-blur-2xl
                border border-white
                rounded-[40px]
                p-8 md:p-10
                shadow-[0_30px_80px_rgba(15,23,42,0.12)]
              "
            >
              {/* TOP GRADIENT BOX */}

              <div
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#06B6D4]
                  rounded-[32px]
                  p-8
                  text-white
                "
              >
                <p className="uppercase tracking-[4px] text-white/80 text-sm">
                  Digital Growth Agency
                </p>

                <h2
                  className="
                    mt-6
                    text-4xl md:text-5xl
                    font-black
                    leading-tight
                  "
                >
                  Build. Rank. Grow.
                </h2>

                <p className="mt-6 text-white/90 leading-8">
                  We help brands scale online with SEO services, website
                  development, app development, and digital marketing
                  strategies.
                </p>
              </div>

              {/* SERVICES */}

              <div className="grid grid-cols-2 gap-5 mt-8">
                {[
                  "SEO Services",
                  "Website Development",
                  "App Development",
                  "Google Ads",
                  "Branding",
                  "Social Media",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#f8fbff]
                      rounded-2xl
                      p-5
                      border border-gray-100
                      text-center
                      font-semibold
                      text-[#0F172A]
                      hover:shadow-lg
                      transition
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING CARD 1 */}

            <div
              className="
                hidden md:flex
                absolute -top-8 -left-8
                bg-white
                rounded-2xl
                px-6 py-4
                shadow-2xl
                items-center gap-4
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-blue-100
                  flex items-center justify-center
                  text-2xl
                "
              >
                🚀
              </div>

              <div>
                <h4 className="font-bold text-[#0F172A]">SEO Services</h4>

                <p className="text-sm text-gray-500">Rank Higher On Google</p>
              </div>
            </div>

            {/* FLOATING CARD 2 */}

            <div
              className="
                hidden md:flex
                absolute -bottom-8 right-0
                bg-white
                rounded-2xl
                px-6 py-4
                shadow-2xl
                items-center gap-4
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-cyan-100
                  flex items-center justify-center
                  text-2xl
                "
              >
                💻
              </div>

              <div>
                <h4 className="font-bold text-[#0F172A]">Web Development</h4>

                <p className="text-sm text-gray-500">
                  Responsive Business Websites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
