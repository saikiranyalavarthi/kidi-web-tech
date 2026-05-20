"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "SEO Growth for Security Company",
    category: "SEO Optimization",
    image: "/case-studies/security-seo.jpg",
    results: [
      "+320% Organic Traffic",
      "+180 Leads Generated",
      "Top 3 Google Rankings",
    ],
    link: "/case-studies/security-company-seo",
  },
  {
    title: "Website Design for Pharmacy",
    category: "Web Development",
    image: "/case-studies/pharmacy-website.jpg",
    results: [
      "+65% Faster Loading",
      "+40% Conversion Increase",
      "Modern Responsive UI",
    ],
    link: "/case-studies/pharmacy-web-design",
  },
  {
    title: "Google Ads for Hospital",
    category: "Google Ads",
    image: "/case-studies/hospital-ads.jpg",
    results: ["+220% ROI", "+500 Appointments", "Reduced CPC by 35%"],
    link: "/case-studies/hospital-google-ads",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 text-blue-600 text-sm tracking-wide mb-5 bg-blue-50">
            CASE STUDIES
          </span>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
            Real Results That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Grow Businesses
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover how KIDIWEBTECH helps businesses generate more traffic,
            leads, and revenue through SEO, Web Development & Google Ads.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl overflow-hidden
                border border-gray-200
                bg-white
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/10 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs tracking-wide shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* RESULTS */}
                <div className="space-y-3 mb-8">
                  {item.results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <Link
                  href={item.link}
                  className="
                    inline-flex items-center gap-2
                    text-blue-600 font-semibold
                    hover:gap-4
                    transition-all duration-300
                  "
                >
                  View Case Study
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute inset-0 border border-blue-500/30 rounded-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-full
              bg-gradient-to-r from-blue-600 to-cyan-500
              text-white font-bold text-lg
              hover:scale-105 transition-all duration-300
              shadow-xl
            "
          >
            Get Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
