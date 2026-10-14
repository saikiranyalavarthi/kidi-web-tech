"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] py-24 md:py-32 px-6">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-300/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-300/20 blur-[140px] rounded-full"></div>

        <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-purple-300/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}

          <div>
            <div
              className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                bg-white
                shadow-md
                border border-blue-100
              "
            >
              <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>

              <span className="text-sm font-semibold text-[#2563EB]">
                ABOUT KIDIWEBTECH
              </span>
            </div>

            <h2
              className="
                mt-8
                text-4xl sm:text-5xl md:text-6xl
                font-black
                leading-[1.05]
                tracking-tight
                text-[#0F172A]
                max-w-3xl
              "
            >
              We Build Powerful Digital Experiences That Grow Brands Online
              Faster.
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-gray-600
                max-w-2xl
              "
            >
              KIDIWEBTECH is a leading digital marketing agency in Hyderabad
              specializing in SEO services, website development, mobile app
              development, branding, Google Ads management, social media
              marketing, and ecommerce solutions for businesses across India.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-gray-600
                max-w-2xl
              "
            >
              We help startups, brands, and enterprises increase Google
              rankings, generate quality leads, improve online visibility, and
              build high-converting digital products using modern technologies
              and performance marketing strategies.
            </p>

            {/* FEATURE LIST */}

            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {[
                "SEO Optimization",
                "Website Development",
                "Mobile App Development",
                "Performance Marketing",
                "Google Ads Services",
                "Social Media Marketing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-4
                    bg-white/80
                    backdrop-blur-xl
                    rounded-2xl
                    px-5 py-4
                    border border-white
                    shadow-md
                    hover:scale-[1.03]
                    transition
                  "
                >
                  <div
                    className="
                      w-12 h-12
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#2563EB]
                      to-[#06B6D4]
                      flex items-center justify-center
                      text-white text-lg
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
                  text-white font-semibold
                  shadow-[0_15px_40px_rgba(37,99,235,0.35)]
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
                  text-[#0F172A]
                  font-semibold
                  border border-gray-200
                  shadow-sm
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
            {/* FLOATING CARD */}

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
              {/* TOP CARD */}

              <div
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#06B6D4]
                  rounded-[30px]
                  p-8
                  text-white
                "
              >
                <p className="text-sm uppercase tracking-widest text-white/80">
                  Digital Growth Agency
                </p>

                <h3 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
                  10X Business Growth Through SEO & Modern Development
                </h3>

                <p className="mt-6 text-white/90 leading-8">
                  Helping brands scale online with website development, mobile
                  apps, SEO services, Google Ads, and digital marketing
                  solutions.
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
                    value: "5+",
                    label: "Years Experience",
                  },
                  {
                    value: "24/7",
                    label: "Support Available",
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
                        text-4xl
                        md:text-5xl
                        font-black
                        text-[#2563EB]
                      "
                    >
                      {item.value}
                    </h4>

                    <p className="mt-3 text-gray-600 text-sm md:text-base">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING MINI CARDS */}

            <div
              className="
                hidden md:flex
                absolute -top-8 -left-8
                bg-white
                shadow-xl
                rounded-2xl
                px-6 py-4
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
                <h5 className="font-bold text-[#0F172A]">SEO Services</h5>

                <p className="text-sm text-gray-500">Rank Higher On Google</p>
              </div>
            </div>

            <div
              className="
                hidden md:flex
                absolute -bottom-8 right-0
                bg-white
                shadow-xl
                rounded-2xl
                px-6 py-4
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
                <h5 className="font-bold text-[#0F172A]">Web Development</h5>

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
