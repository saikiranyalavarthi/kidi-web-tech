"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const points = [
  "Web Design & Development",
  "SEO",
  "Google Map Optimization",
  "Google Adwords",
  "Social Media Marketing",
  "Expert Team",
  "Online Reputation Management",
  "Increased Visibility",
];

export default function ExperienceSection() {
  return (
    <section className="bg-black py-8 px-6 md:px-20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-8">

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
            With <span className="gradient-text">10+ years</span> of experience,
            <br />
            we deliver services at an{" "}
            <span className="gradient-text">advanced level</span>.
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            <span className="gradient-text font-semibold">KIDIWEBTECH</span> is a
            results-driven Digital Marketing Agency offering SEO, Google Ads,
            Social Media Marketing, Reputation Management, and Web Development —
            trusted by businesses across India.
          </p>

          {/* POINTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <div key={i} className="relative group">

                {/* GRADIENT BORDER */}
                <div className="
                  absolute inset-0 rounded-xl
                  bg-gradient-to-r from-yellow-400 to-orange-500
                  opacity-70
                " />

                {/* POINT CARD */}
                <div className="
                  relative bg-black rounded-xl
                  m-[1px]
                  px-4 py-3
                  flex items-center gap-3
                ">
                  <CheckCircle className="text-yellow-400" size={18} />
                  <span className="text-gray-300 text-sm md:text-base">
                    {point}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 relative">

          {/* GRADIENT BORDER */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />

          {/* IMAGE CARD */}
          <div className="
            relative bg-black rounded-3xl
            m-[1.5px]
            overflow-hidden
          ">
            <Image
              src="/assets/image12.jpg"
              alt="Digital Marketing Strategy"
              width={600}
              height={420}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
