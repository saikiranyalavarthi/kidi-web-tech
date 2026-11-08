"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function PassionSection() {
  return (
    <section className="bg-black py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Success with{" "}
            <span className="gradient-text">passion-driven</span> service{" "}
            <span className="text-yellow-400">🏅</span>
          </h2>

          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            At <span className="gradient-text font-semibold">KIDIWEBTECH</span>,
            we live and breathe our clients’ success. We craft strategies that
            drive traffic, generate leads, and convert visitors into loyal
            customers  whether you’re a startup or an established brand.
          </p>

          {/* BULLET POINTS */}
          <ul className="space-y-4 mb-10">
            {[
              "Get the results you crave and boost your ROI",
              "Turn your website into a sales machine that never sleeps",
              "Unleash your marketing potential and conquer your market",
              "Fuel your business growth with leads and sales",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="text-yellow-400 w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* STATS */}
     
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 relative">
          {/* GRADIENT BORDER */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />

          {/* IMAGE CARD */}
          <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
            <Image
              src="/assets/image3.jpg"
              alt="Digital Growth Dashboard"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
} 