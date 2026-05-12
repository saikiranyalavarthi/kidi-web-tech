"use client";

import Link from "next/link";

export default function SEOContentSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[380px] h-[380px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[380px] h-[380px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <div>
            <div
              className="
                inline-flex items-center gap-2
                px-5 py-2 rounded-full
                bg-blue-100
                text-[#2563EB]
                font-semibold
              "
            >
              🚀 SEO Growth Solutions
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
              Best Digital Marketing Agency In Hyderabad For Business Growth
            </h2>

            <p
              className="
                mt-8
                text-lg md:text-xl
                leading-9
                text-gray-600
              "
            >
              KIDIWEBTECH is a leading digital marketing agency in Hyderabad
              providing SEO services, website development, app development,
              Google Ads management, branding, social media marketing, ecommerce
              development, and performance marketing solutions for startups,
              businesses, and enterprises across India.
            </p>

            <p
              className="
                mt-6
                text-lg md:text-xl
                leading-9
                text-gray-600
              "
            >
              As a trusted website development company in Hyderabad and app
              development company in India, we create responsive websites,
              scalable mobile applications, ecommerce platforms, and
              SEO-optimized digital experiences that improve Google rankings,
              increase traffic, and generate more leads online.
            </p>

            <p
              className="
                mt-6
                text-lg md:text-xl
                leading-9
                text-gray-600
              "
            >
              Our expert team specializes in SEO optimization, custom website
              design, Android app development, Flutter app development, Google
              Ads campaigns, social media advertising, UI/UX design, and
              conversion-focused digital marketing strategies.
            </p>

            {/* FEATURE GRID */}

            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {[
                "SEO Services Hyderabad",
                "Website Development Company",
                "Mobile App Development",
                "Google Ads Services",
                "Social Media Marketing",
                "Performance Marketing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-4
                    bg-white
                    border border-gray-100
                    rounded-2xl
                    px-5 py-4
                    shadow-sm
                    hover:shadow-lg
                    transition
                  "
                >
                  <div
                    className="
                      w-12 h-12
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#2563EB]
                      to-[#06B6D4]
                      flex items-center justify-center
                      text-white
                      font-bold
                      shrink-0
                    "
                  >
                    ✓
                  </div>

                  <span className="font-semibold text-[#0F172A]">{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-14">
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
          </div>

          {/* RIGHT SIDE */}

          <div className="relative">
            {/* MAIN CARD */}

            <div
              className="
                relative
                bg-white/90
                backdrop-blur-2xl
                border border-white
                rounded-[40px]
                p-8 md:p-10
                shadow-[0_30px_80px_rgba(15,23,42,0.12)]
              "
            >
              {/* TOP BOX */}

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
                  SEO & DIGITAL GROWTH
                </p>

                <h3
                  className="
                    mt-6
                    text-4xl md:text-5xl
                    font-black
                    leading-tight
                  "
                >
                  Rank Higher. Generate Leads. Grow Faster.
                </h3>

                <p className="mt-6 text-white/90 leading-8">
                  We help brands scale online with SEO services, website
                  development, app development, Google Ads, and performance
                  marketing strategies.
                </p>
              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 gap-5 mt-8">
                {[
                  {
                    value: "150+",
                    label: "Projects Completed",
                  },

                  {
                    value: "100+",
                    label: "Happy Clients",
                  },

                  {
                    value: "10X",
                    label: "Business Growth",
                  },

                  {
                    value: "24/7",
                    label: "Client Support",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#f8fbff]
                      rounded-3xl
                      p-7
                      border border-gray-100
                      text-center
                      hover:shadow-lg
                      transition
                    "
                  >
                    <h4
                      className="
                        text-4xl md:text-5xl
                        font-black
                        text-[#2563EB]
                      "
                    >
                      {item.value}
                    </h4>

                    <p className="mt-3 text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING CARD */}

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

                <p className="text-sm text-gray-500">Improve Google Rankings</p>
              </div>
            </div>

            {/* FLOATING CARD */}

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
