"use client";

export default function ProcessSection() {
  return (
    <section className="relative py-8 md:py-8 px-6 overflow-hidden bg-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-100/40 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-100/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* TOP CONTENT */}

        <div className="text-center max-w-4xl mx-auto">
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
            ⚡ Our Working Process
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
            Simple Process. Powerful Results.
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
            We combine strategy, design, development, SEO, and digital marketing
            to help businesses generate more traffic, leads, and long-term
            online growth.
          </p>
        </div>

        {/* PROCESS GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-20">
          {[
            {
              number: "01",
              title: "Strategy",
              desc: "We understand your business goals, audience, and competitors.",
              icon: "🚀",
            },

            {
              number: "02",
              title: "Design",
              desc: "Modern UI/UX designs focused on engagement and conversions.",
              icon: "🎨",
            },

            {
              number: "03",
              title: "Development",
              desc: "Fast, responsive websites and apps built with modern technologies.",
              icon: "💻",
            },

            {
              number: "04",
              title: "Marketing",
              desc: "SEO, Google Ads, and digital campaigns that drive real results.",
              icon: "📈",
            },

            {
              number: "05",
              title: "Growth",
              desc: "Continuous optimization to improve leads, sales, and business growth.",
              icon: "⚡",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                relative
                group
                bg-white
                border border-gray-100
                rounded-[32px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_60px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >
              {/* NUMBER */}

              <div
                className="
                  absolute top-6 right-6
                  text-5xl
                  font-black
                  text-blue-50
                "
              >
                {item.number}
              </div>

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
                  mt-7
                  text-2xl
                  font-black
                  text-[#0F172A]
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-8
                "
              >
                {item.desc}
              </p>

              {/* HOVER LINE */}

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

        {/* CTA SECTION */}

        <div
          className="
            mt-24
            bg-gradient-to-r
            from-[#2563EB]
            to-[#06B6D4]
            rounded-[40px]
            p-10 md:p-14
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.18)]
            relative overflow-hidden
          "
        >
          {/* GLOW */}

          <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-white/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}

            <div>
              <p className="uppercase tracking-[4px] text-white/70 text-sm">
                BUSINESS GROWTH PROCESS
              </p>

              <h3
                className="
                  mt-5
                  text-4xl md:text-5xl
                  font-black
                  leading-tight
                "
              >
                Helping Businesses Scale Faster Online
              </h3>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-white/90
                  max-w-2xl
                "
              >
                From SEO and websites to Google Ads and branding, we create
                growth-focused digital solutions tailored for your business.
              </p>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">
              {[
                "SEO Services",
                "Web Development",
                "App Development",
                "Google Ads",
                "Branding",
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
