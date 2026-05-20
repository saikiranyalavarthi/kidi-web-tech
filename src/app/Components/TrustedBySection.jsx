"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrustedBySection() {
  const brands = [
    "/Clients/logo1.png",
    "/Clients/logo2.png",
    "/Clients/logo3.png",
    "/Clients/logo4.png",
    "/Clients/logo5.jpg",
    "/Clients/logo6.jpg",
  ];

  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-white">
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-100/40 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-100/40 blur-[120px] rounded-full"></div>
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
            ⭐ Trusted By Businesses Across India
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
            Trusted SEO & Web Development Company
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
            KIDIWEBTECH helps startups and businesses grow online through SEO,
            website development, Google Ads, branding, and digital marketing
            solutions designed to increase traffic, leads, and sales.
          </p>
        </div>

        {/* CLIENT LOGOS */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-20">
          {brands.map((logo, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-gray-100
                rounded-[28px]
                h-28
                flex items-center justify-center
                shadow-sm
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >
              <Image
                src={logo}
                alt={`Trusted Client ${index + 1}`}
                width={120}
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

        {/* STATS */}

      

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
            overflow-hidden
            relative
          "
        >
          {/* INNER GLOW */}

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}

            <div>
              <p className="uppercase tracking-[4px] text-white/70 text-sm">
                DIGITAL GROWTH PARTNER
              </p>

              <h3
                className="
                  mt-5
                  text-4xl md:text-5xl
                  font-black
                  leading-tight
                "
              >
                Helping Businesses Build Powerful Online Presence
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
                We help businesses generate more traffic, leads, and sales
                through SEO, website development, Google Ads, branding, and
                digital marketing strategies.
              </p>

              {/* BUTTON */}

              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  mt-8
                  px-8 py-4 rounded-full
                  bg-white
                  text-[#2563EB]
                  font-bold
                  hover:scale-105
                  transition duration-300
                  shadow-xl
                "
              >
                Get Free Consultation
              </Link>
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
