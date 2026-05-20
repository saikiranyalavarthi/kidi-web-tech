"use client";

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-100/40 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-100/40 blur-[120px] rounded-full"></div>
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
            ⭐ Client Testimonials
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
            Businesses Trust KIDIWEBTECH
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
            We help businesses grow online through SEO, websites, Google Ads,
            branding, app development, and digital marketing strategies that
            generate real business results.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            {
              name: "Rahul Sharma",
              role: "Startup Founder",
              review:
                "KIDIWEBTECH helped us improve our Google rankings and generate more business leads through SEO and website development.",
            },

            {
              name: "Priya Reddy",
              role: "Business Owner",
              review:
                "Professional digital marketing team with strong Google Ads and branding strategies that helped our business grow faster.",
            },

            {
              name: "Arjun Verma",
              role: "Ecommerce Brand",
              review:
                "Their ecommerce website development and SEO services improved our online sales and customer engagement.",
            },

            {
              name: "Sneha Kapoor",
              role: "Healthcare Company",
              review:
                "Modern website design and SEO optimization helped our healthcare business increase online visibility.",
            },

            {
              name: "Karthik Rao",
              role: "Restaurant Owner",
              review:
                "Excellent local SEO and social media marketing services that increased our restaurant visibility and orders.",
            },

            {
              name: "Amit Singh",
              role: "Tech Startup",
              review:
                "Amazing app development and branding services with excellent support and modern UI/UX design.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                border border-gray-100
                rounded-[36px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >
              {/* STARS */}

              <div className="flex items-center gap-1 text-xl">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              {/* REVIEW */}

              <p
                className="
                  mt-7
                  text-gray-600
                  leading-8
                  text-base
                "
              >
                “{item.review}”
              </p>

              {/* USER */}

              <div className="flex items-center gap-4 mt-10">
                {/* AVATAR */}

                <div
                  className="
                    w-16 h-16
                    rounded-full
                    bg-gradient-to-r
                    from-[#2563EB]
                    to-[#06B6D4]
                    flex items-center justify-center
                    text-white
                    text-2xl
                    font-black
                    shadow-lg
                  "
                >
                  {item.name.charAt(0)}
                </div>

                {/* INFO */}

                <div>
                  <h4
                    className="
                      text-xl
                      font-black
                      text-[#0F172A]
                    "
                  >
                    {item.name}
                  </h4>

                  <p className="text-gray-500">{item.role}</p>
                </div>
              </div>

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

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              value: "100+",
              label: "Happy Clients",
            },

            {
              value: "150+",
              label: "Projects Delivered",
            },

            {
              value: "98%",
              label: "Client Satisfaction",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-b
                from-[#f8fbff]
                to-white
                border border-gray-100
                rounded-[36px]
                p-10
                text-center
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.08)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >
              <h3
                className="
                  text-5xl md:text-6xl
                  font-black
                  text-[#2563EB]
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-4
                  text-lg
                  text-gray-600
                "
              >
                {item.label}
              </p>
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
                  max-w-2xl
                "
              >
                We create SEO, websites, Google Ads, and digital marketing
                strategies designed to generate more traffic, leads, and sales.
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
