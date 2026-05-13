"use client";

import Image from "next/image";

export default function TrustedBySection() {
  const brands = [
    "/Clients/logo1.png",
     "/Clients/logo2.png",
 "/Clients/logo3.png",
    "/clients/logo4.png",
  "/clients/logo5.jpg",
    "/clients/logo6.jpg",
  ];

  return (
    <section className="relative py-24 md:py-28 px-6 overflow-hidden bg-white">
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
            ⭐ Trusted By Businesses Across India
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
            Trusted Digital Marketing & Website Development Company
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
            services, website development, mobile app development, Google Ads
            management, branding, and social media marketing solutions across
            India.
          </p>
        </div>

        {/* BRAND LOGOS */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-20">
          {brands.map((logo, index) => (
            <div
              key={index}
              className="
                group
                bg-gradient-to-b
                from-[#f8fbff]
                to-white
                border border-gray-100
                rounded-[28px]
                h-32
                flex items-center justify-center
                shadow-sm
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              <Image
                src={logo}
                alt={`Trusted Client ${index + 1}`}
                width={130}
                height={60}
                className="
                  object-contain
                  opacity-70
                  grayscale
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  transition duration-500
                "
              />
            </div>
          ))}
        </div>

        {/* STATS SECTION */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">
          {[
            {
              value: "150+",
              label: "Projects Delivered",
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
              label: "Support Available",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-b
                from-[#f8fbff]
                to-white
                border border-gray-100
                rounded-[32px]
                p-8
                text-center
                shadow-sm
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              <h3
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  text-[#2563EB]
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-4
                  text-gray-600
                  text-lg
                "
              >
                {item.label}
              </p>
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
            p-10 md:p-14
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.20)]
          "
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}

            <div>
              <h3
                className="
                  text-4xl md:text-5xl
                  font-black
                  leading-tight
                "
              >
                Helping Businesses Build Powerful Digital Presence
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
                social media marketing, branding, and performance marketing
                solutions to help businesses increase visibility, traffic, and
                online growth.
              </p>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">
              {[
                "SEO Services",
                "Website Development",
                "App Development",
                "Google Ads",
                "Social Media",
                "Branding",
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
