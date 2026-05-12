"use client";

export default function IndustriesSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
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
            🏢 Industries We Serve
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
            Digital Marketing & Development Solutions For Every Industry
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
            delivering SEO services, website development, app development,
            ecommerce solutions, branding, Google Ads management, and social
            media marketing services for businesses across multiple industries
            in India.
          </p>
        </div>

        {/* INDUSTRIES GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: "🏥",
              title: "Healthcare Industry",
              desc: "Healthcare website development, hospital management systems, SEO services, and digital marketing solutions for clinics and hospitals.",
            },

            {
              icon: "🏢",
              title: "Real Estate Industry",
              desc: "Real estate website development, lead generation campaigns, branding, and social media marketing solutions.",
            },

            {
              icon: "🛒",
              title: "Ecommerce Businesses",
              desc: "Ecommerce website development, online store optimization, Google Ads, and conversion-focused digital marketing.",
            },

            {
              icon: "🎓",
              title: "Education Industry",
              desc: "Educational website development, online learning platforms, SEO optimization, and digital branding services.",
            },

            {
              icon: "🍴",
              title: "Restaurants & Cafes",
              desc: "Restaurant website design, food delivery apps, local SEO services, and social media marketing campaigns.",
            },

            {
              icon: "🚀",
              title: "Startups & Enterprises",
              desc: "Custom web applications, mobile app development, branding, SEO services, and business growth strategies.",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white/80
                backdrop-blur-xl
                border border-gray-100
                rounded-[36px]
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
                {industry.icon}
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
                {industry.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  text-gray-600
                  leading-8
                  text-base
                "
              >
                {industry.desc}
              </p>

              {/* HOVER LINE */}

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

        {/* BOTTOM SECTION */}

        <div
          className="
            mt-24
            bg-gradient-to-r
            from-[#2563EB]
            to-[#06B6D4]
            rounded-[40px]
            p-10 md:p-16
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.20)]
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
                Helping Industries Build Strong Digital Presence Online
              </h3>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                KIDIWEBTECH provides SEO services, website development, app
                development, ecommerce solutions, branding, and digital
                marketing strategies tailored for different industries across
                Hyderabad and India.
              </p>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">
              {[
                "Healthcare",
                "Real Estate",
                "Ecommerce",
                "Education",
                "Restaurants",
                "Startups",
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
