"use client";

import Link from "next/link";
import { useState } from "react";

const videos = [
  "/videos/kidiwebtech-video.mp4",
  "/videos/kidiwebtech-express1.mp4",
  "/videos/kidiwebtech-express.mp4",
];

const services = [
  {
    icon: "✳",
    title: "Website Design",
    description: "Modern, responsive and conversion-focused business websites.",
  },
  {
    icon: "</>",
    title: "Web Development",
    description: "Custom React, Next.js and scalable web applications.",
  },
  {
    icon: "⌕",
    title: "SEO Services",
    description: "Technical SEO, local SEO and Google search optimization.",
  },
  {
    icon: "↗",
    title: "Digital Marketing",
    description: "Performance marketing, social media and lead generation.",
  },
];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] px-5 pt-24 pb-16 sm:px-8 lg:pt-28 lg:pb-20">
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#e9e8e1 1px, transparent 1px), linear-gradient(90deg, #e9e8e1 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -top-40 left-[-120px] h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-[130px]" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#2563EB] sm:text-xs">
                Web · Technology · Digital Growth
              </span>
            </div>

            {/* HEADING */}
            <h1 className="mt-7 max-w-[650px] text-[39px] font-extrabold leading-[1.12] tracking-tight text-[#20242D] sm:text-5xl lg:text-[53px]">
              Build Your Digital Presence.
              <span className="block text-[#2563EB]">Grow Your Business.</span>
              <span className="block">Go Beyond Limits.</span>
            </h1>

            {/* SUBHEADING */}
            <h2 className="mt-6 max-w-[560px] text-base font-semibold leading-7 text-[#20242D] sm:text-lg">
              Website Development, SEO & Digital Marketing Company in Hyderabad
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[570px] text-sm leading-[27px] text-[#64748B] sm:text-[15px]">
              KidiWebTech is a Hyderabad-based website development and digital
              marketing company helping businesses across India and worldwide.
              We provide professional website design, custom web development,
              React and Next.js development, e-commerce websites, SEO services
              and digital marketing solutions to build a powerful online
              presence and generate quality business leads.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#2563EB] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_25px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8]"
              >
                Get Free Consultation
                <span>↗</span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#2563EB]/30 bg-white px-6 py-4 text-sm font-bold text-[#20242D] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:bg-blue-50"
              >
                Explore Projects
                <span>→</span>
              </Link>
            </div>

            {/* TECHNOLOGY CAPABILITIES */}
            <div className="mt-8">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px] text-[#64748B]">
                Our Technology Capabilities
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Website Design",
                  "Web Development",
                  "React Development",
                  "Next.js",
                  "E-Commerce",
                  "SEO Services",
                  "Digital Marketing",
                  "Mobile Apps",
                  "Lead Generation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#E3E5DF] bg-white px-3 py-1.5 text-[10px] font-medium text-[#475569] transition hover:border-[#2563EB] hover:text-[#1D4ED8] sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E2E4DE] pt-5">
              <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                <span className="text-[#2563EB]">◎</span>
                Serving Hyderabad & Across India
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                <span className="text-[#2563EB]">✓</span>
                Creative & Business-Focused Solutions
              </div>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative mx-auto w-full max-w-[530px] lg:ml-auto">
            {/* MAIN DASHBOARD */}
            <div className="rounded-[25px] border border-[#E2E5DF] bg-white p-4 shadow-[0_25px_65px_rgba(20,40,35,0.10)] sm:p-5">
              {/* HEADER */}
              <div className="flex items-center justify-between gap-3 border-b border-[#E9ECE7] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20242D] text-xl font-black text-[#60A5FA]">
                    K
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold text-[#20242D] sm:text-sm">
                      KidiWebTech Digital Ecosystem
                    </h3>

                    <p className="mt-1 text-[9px] text-[#64748B] sm:text-[10px]">
                      Creative technology & growth solutions
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[8px] font-bold text-[#2563EB]">
                  DIGITAL POWERED
                </span>
              </div>

              {/* VIDEO */}
              <div className="relative mt-4 h-[205px] overflow-hidden rounded-2xl bg-[#111827] sm:h-[270px]">
                <video
                  key={currentVideo}
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onEnded={() =>
                    setCurrentVideo((prev) => (prev + 1) % videos.length)
                  }
                  onError={() =>
                    setCurrentVideo((prev) => (prev + 1) % videos.length)
                  }
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={videos[currentVideo]} type="video/mp4" />
                </video>

                {/* VIDEO OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#60A5FA]">
                    KIDIWEBTECH
                  </p>

                  <h3 className="mt-1 text-sm font-extrabold text-white sm:text-base">
                    Transform Your Digital Future
                  </h3>
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur">
                  ● INNOVATION
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-3 flex items-center gap-2 px-1">
                <span className="text-sm text-[#2563EB]">✓</span>

                <p className="text-[9px] text-[#64748B] sm:text-[10px]">
                  Discover technology that moves your business forward
                </p>
              </div>

              {/* SERVICE CARDS */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-[#E3E6DF] bg-[#FBFAF7] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg sm:p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#E9ECE6] bg-white text-sm font-bold text-[#2563EB] shadow-sm">
                      {service.icon}
                    </div>

                    <h3 className="mt-2 text-[11px] font-bold text-[#20242D] sm:text-xs">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[9px] leading-[17px] text-[#64748B] sm:text-[10px]">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* BOTTOM BAR */}
              <Link
                href="/services"
                className="mt-3 flex items-center justify-between rounded-xl border border-[#E3E6DF] bg-[#FBFAF7] px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <div>
                  <p className="text-[10px] font-bold text-[#20242D]">
                    Complete Digital Solutions
                  </p>

                  <p className="mt-1 text-[9px] text-[#64748B]">
                    From website creation to business growth
                  </p>
                </div>

                <span className="text-sm text-[#2563EB]">↗</span>
              </Link>
            </div>

            {/* FLOATING CARD 1 */}
            <div className="absolute -right-3 top-16 hidden items-center gap-3 rounded-xl border border-[#E8EBE6] bg-white px-4 py-3 shadow-xl sm:flex lg:-right-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-lg text-[#2563EB]">
                ↗
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#20242D]">
                  SEO & Growth
                </p>

                <p className="text-[9px] text-[#64748B]">
                  Rank. Reach. Convert.
                </p>
              </div>
            </div>

            {/* FLOATING CARD 2 */}
            <div className="absolute -bottom-4 left-[-15px] hidden items-center gap-3 rounded-xl border border-[#E8EBE6] bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-lg text-[#2563EB]">
                ◈
              </div>

              <div>
                <p className="text-[10px] font-bold text-[#20242D]">
                  Web Development
                </p>

                <p className="text-[9px] text-[#64748B]">
                  Design to Deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
