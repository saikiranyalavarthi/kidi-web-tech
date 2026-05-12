"use client";

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-100/40 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-100/40 blur-[120px] rounded-full"></div>
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
            ⚡ Our Working Process
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
            Strategic Digital Process For Business Growth
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
            KIDIWEBTECH follows a performance-driven process combining SEO
            services, website development, app development, Google Ads,
            branding, and digital marketing strategies to help businesses
            increase traffic, improve Google rankings, and generate quality
            leads across Hyderabad and India.
          </p>
        </div>

        {/* PROCESS GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-24">
          {[
            {
              number: "01",
              title: "Strategy",
              desc: "We analyze your business goals, competitors, and target audience to create a powerful digital growth strategy.",
              icon: "🚀",
            },

            {
              number: "02",
              title: "Design",
              desc: "Our creative team designs modern UI/UX experiences for websites, apps, and digital branding solutions.",
              icon: "🎨",
            },

            {
              number: "03",
              title: "Development",
              desc: "We build responsive websites, ecommerce platforms, and mobile applications using modern technologies.",
              icon: "💻",
            },

            {
              number: "04",
              title: "Marketing",
              desc: "Our digital marketing experts run SEO campaigns, Google Ads, and social media marketing strategies.",
              icon: "📈",
            },

            {
              number: "05",
              title: "Growth",
              desc: "We optimize performance, improve conversions, and help businesses scale faster online.",
              icon: "⚡",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                relative
                group
                bg-gradient-to-b
                from-[#f8fbff]
                to-white
                border border-gray-100
                rounded-[32px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              {/* NUMBER */}

              <div
                className="
                  absolute top-6 right-6
                  text-5xl
                  font-black
                  text-blue-100
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
                  mt-8
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
                  mt-5
                  text-gray-600
                  leading-8
                  text-base
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
                Complete Digital Marketing & Development Solutions
              </h3>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                From SEO services and website development to mobile app
                development, social media marketing, branding, and Google Ads
                management, KIDIWEBTECH helps businesses build a strong digital
                presence and achieve long-term online growth.
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
