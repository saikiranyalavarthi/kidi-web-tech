"use client";

import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section className="relative py-8 md:py-8 px-6 overflow-hidden bg-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-100/40 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-100/40 blur-[120px] rounded-full"></div>
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
            💼 Our Portfolio
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
            Creative Digital Projects Designed For Business Growth
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
            KIDIWEBTECH is a leading digital marketing agency in Hyderabad
            delivering website development, app development, SEO services,
            ecommerce solutions, branding, Google Ads management, and social
            media marketing projects for startups and businesses across India.
          </p>
        </div>

        {/* PORTFOLIO GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {[
            {
              title: "Business Website Development",
              category: "Website Development",
              desc: "Modern responsive business website designed for SEO optimization and lead generation.",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "Mobile App Development",
              category: "App Development",
              desc: "Custom Android and iOS mobile application with modern UI/UX and scalable performance.",
              image:
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "SEO Growth Campaign",
              category: "SEO Services",
              desc: "Performance-driven SEO strategy improving Google rankings, traffic, and online visibility.",
              image:
                "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "Ecommerce Website Design",
              category: "Ecommerce Development",
              desc: "High-converting ecommerce website with optimized user experience and online payment integration.",
              image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "Social Media Marketing",
              category: "Digital Marketing",
              desc: "Creative social media campaigns increasing engagement, brand visibility, and customer reach.",
              image:
                "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "Google Ads Campaign",
              category: "Performance Marketing",
              desc: "High-ROI Google Ads campaigns generating quality leads and business growth.",
              image:
                "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                bg-white
                border border-gray-100
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              {/* IMAGE */}

              <div className="relative overflow-hidden h-[260px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    to-transparent
                  "
                ></div>

                {/* CATEGORY */}

                <div
                  className="
                    absolute top-5 left-5
                    px-4 py-2
                    rounded-full
                    bg-white/20
                    backdrop-blur-xl
                    text-white
                    text-sm
                    font-semibold
                  "
                >
                  {project.category}
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-8">
                <h3
                  className="
                    text-2xl
                    font-black
                    text-[#0F172A]
                    leading-snug
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-gray-600
                    leading-8
                  "
                >
                  {project.desc}
                </p>

               
              </div>

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
                Build Powerful Digital Experiences With KIDIWEBTECH
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
                development, branding, ecommerce solutions, Google Ads, and
                social media marketing, we help businesses create impactful
                digital experiences.
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
