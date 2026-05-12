"use client";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-100/40 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-100/40 blur-[120px] rounded-full"></div>
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
            ⭐ Client Testimonials
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
            Trusted By Businesses Across Hyderabad & India
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
            helping startups, businesses, and enterprises grow online with SEO
            services, website development, app development, Google Ads
            management, branding, and social media marketing solutions.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {[
            {
              name: "Rahul Sharma",
              role: "Startup Founder",
              review:
                "KIDIWEBTECH transformed our online presence with professional website development and SEO services. Our Google rankings and leads improved significantly.",
            },

            {
              name: "Priya Reddy",
              role: "Business Owner",
              review:
                "Best digital marketing agency in Hyderabad. Their Google Ads and social media marketing strategies helped us generate quality customers.",
            },

            {
              name: "Arjun Verma",
              role: "Ecommerce Brand",
              review:
                "Their ecommerce website development and branding solutions gave our business a modern premium look and increased conversions.",
            },

            {
              name: "Sneha Kapoor",
              role: "Healthcare Company",
              review:
                "Professional SEO services and responsive website development. Highly recommended for businesses looking to grow online.",
            },

            {
              name: "Karthik Rao",
              role: "Restaurant Owner",
              review:
                "Their local SEO and social media marketing services helped our restaurant gain more visibility and online orders.",
            },

            {
              name: "Amit Singh",
              role: "Tech Startup",
              review:
                "Amazing mobile app development services with modern UI/UX design and scalable performance. Great support team.",
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
                border border-gray-100
                rounded-[36px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              {/* STARS */}

              <div className="flex items-center gap-1 text-2xl">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              {/* REVIEW */}

              <p
                className="
                  mt-8
                  text-gray-600
                  leading-8
                  text-base
                "
              >
                “{item.review}”
              </p>

              {/* USER */}

              <div className="flex items-center gap-4 mt-10">
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

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              value: "100+",
              label: "Happy Clients",
            },

            {
              value: "150+",
              label: "Projects Completed",
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
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
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
                  text-xl
                  text-gray-600
                "
              >
                {item.label}
              </p>
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
                Grow Your Business With KIDIWEBTECH
              </h3>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                We provide SEO services, website development, app development,
                branding, Google Ads management, and social media marketing
                solutions to help businesses grow online faster.
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
