"use client";

import Image from "next/image";

const services = [
  {
    title: "Digital Marketing",
    img: "/assets/image1.jpg",
    desc: "Boost your visibility with SEO, Google Ads, and social media strategies to reach the right audience.",
  },
  {
    title: "App Development",
    img: "/assets/image2.jpg",
    desc: "We build fast, secure iOS and Android apps using modern technologies.",
  },
  {
    title: "Website Development",
    img: "/assets/image3.jpg",
    desc: "SEO-optimized websites built with Next.js and Tailwind CSS for speed and UX.",
  },
  {
    title: "Social Media",
    img: "/assets/image4.jpg",
    desc: "Custom themes and plugins for powerful, manageable WordPress websites.",
  },
];

export default function ServicesSection1() {
  return (
    <section className="bg-black py-28 px-6 md:px-20">

      {/* SECTION TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 gradient-text">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((item, i) => (
          <div key={i} className="relative group">

            {/* GRADIENT BORDER ONLY */}
            <div className="
              absolute inset-0 rounded-3xl
              bg-gradient-to-r from-yellow-400 to-orange-500
              opacity-80
              transition-opacity duration-300
              group-hover:opacity-100
            " />

            {/* CARD (PURE BLACK) */}
            <div className="
              relative bg-black rounded-3xl
              m-[1.5px]
              overflow-hidden
              transition-transform duration-300
              group-hover:-translate-y-2
              group-hover:shadow-[0_20px_40px_rgba(255,165,0,0.25)]
            ">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-3xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
