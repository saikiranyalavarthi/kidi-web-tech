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
    "/Clients/logo7.webp",
    "/Clients/logo8.svg",
    "/Clients/logo9.jpeg",
    "/Clients/logo10.jpeg",
    "/Clients/logo11.jpeg",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full bg-cyan-100/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ================= TOP CONTENT ================= */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 font-semibold text-[#2563EB] shadow-sm">
            ⭐ Trusted By Businesses Across India
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-[#2563EB] sm:text-5xl md:text-6xl">
            Trusted Website Design, Web Development & SEO Company
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700 md:text-xl">
            KIDIWEBTECH helps startups, local businesses, and enterprises build
            professional websites, improve Google rankings, and grow online with
            modern website design, custom web development, and SEO services.
          </p>
        </div>

        {/* ================= CLIENT LOGOS ================= */}

        <div className="relative mt-20 overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

          {/* Moving Track */}
          <div className="logo-track flex w-max gap-6">
            {/* First Set */}
            {brands.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="group flex h-28 w-44 flex-shrink-0 items-center justify-center rounded-[24px] border border-gray-100 bg-white px-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={logo}
                    alt={`KIDIWebTech client logo ${index + 1}`}
                    fill
                    sizes="176px"
                    priority={index < 5}
                    className="object-contain opacity-90 transition duration-500 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate Set */}
            {brands.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="group flex h-28 w-44 flex-shrink-0 items-center justify-center rounded-[24px] border border-gray-100 bg-white px-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={logo}
                    alt={`KIDIWebTech client logo ${index + 1}`}
                    fill
                    sizes="176px"
                    className="object-contain opacity-90 transition duration-500 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}

        <div className="relative mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] p-10 text-white shadow-[0_30px_80px_rgba(37,99,235,0.18)] md:p-14">
          {/* Glow */}
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-[120px]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="text-sm uppercase tracking-[4px] text-white/70">
                WEBSITE DESIGN & SEO EXPERTS
              </p>

              <h3 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                Build High-Converting Websites That Drive Business Growth
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                We create modern, responsive, and SEO-friendly websites that
                help businesses attract more customers, improve online
                visibility, and generate quality leads through organic search.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-[#2563EB] shadow-xl transition duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-5">
              {[
                "Website Design",
                "Web Development",
                "SEO Services",
                "React Development",
                "Next.js Development",
                "Website Redesign",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/20 bg-white/10 px-5 py-5 text-center font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/20"
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
