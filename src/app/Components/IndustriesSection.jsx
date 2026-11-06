"use client";

import Link from "next/link";

export default function IndustriesSection() {
  const industries = [
    {
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop",
      icon: "🏥",
      title: "Healthcare & Hospitals",
      desc: "Healthcare website development, local SEO, and digital marketing to help hospitals, clinics, and healthcare providers improve online visibility and attract patient enquiries.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&auto=format&fit=crop",
      icon: "🏢",
      title: "Real Estate & Property",
      desc: "Real estate website development, property listing platforms, SEO, and lead-generation solutions to help builders, developers, and property consultants attract potential buyers.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&auto=format&fit=crop",
      icon: "🛒",
      title: "Ecommerce & Retail",
      desc: "Ecommerce website development, online store design, product SEO, and digital marketing strategies to improve shopping experiences and support online sales.",
    },

    {
      image:
        "https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      icon: "🎓",
      title: "Education & eLearning",
      desc: "Website design, SEO, and digital platforms for schools, colleges, coaching institutes, and online education businesses looking to reach more students.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop",
      icon: "🍴",
      title: "Restaurants & Hospitality",
      desc: "Restaurant website development, local SEO, and online marketing to help restaurants, hotels, and hospitality businesses improve local discovery and customer enquiries.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&auto=format&fit=crop",
      icon: "🚀",
      title: "Startups & Small Businesses",
      desc: "Affordable business website development, custom web applications, branding, and digital marketing solutions to help startups and small businesses grow online.",
    },
  ];

  return (
    <section className="relative py-8 md:py-8 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOP */}

        <div className="text-center max-w-4xl mx-auto">
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
            🏢 Industries We Serve
          </div>

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
            Website Development & Digital Marketing for Every Industry
          </h2>

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
            KidiWebTech provides industry-focused website development, search
            engine optimization (SEO), and digital marketing services to help
            businesses attract relevant visitors and generate qualified
            enquiries. Based in Hyderabad, India, we support businesses across
            India and international markets, including the USA, UK, UAE, and
            Saudi Arabia, with digital solutions tailored to their goals,
            audiences, and services.
          </p>
        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                border border-gray-100
                rounded-[36px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >
              {/* INDUSTRY IMAGE - ADDED */}

              <div className="relative w-full h-48 overflow-hidden rounded-2xl mb-6">
                <img
                  src={industry.image}
                  alt={`${industry.title} industry`}
                  loading="lazy"
                  className="
                    w-full h-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/40 to-transparent"></div>
              </div>

              {/* ICON */}

              <div
                className="
                  w-16 h-16
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#2563EB]
                  to-[#06B6D4]
                  flex items-center justify-center
                  text-3xl
                  shadow-lg
                "
              >
                {industry.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-7
                  text-2xl
                  font-black
                  text-[#0F172A]
                "
              >
                {industry.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-8
                "
              >
                {industry.desc}
              </p>

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
          "
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <div>
              <p className="uppercase tracking-[4px] text-white/70 text-sm">
                INDUSTRY-SPECIFIC DIGITAL SOLUTIONS
              </p>

              <h3
                className="
                  mt-5
                  text-4xl md:text-5xl
                  font-black
                  leading-tight
                "
              >
                Turn Your Website Into a Source of Business Leads
              </h3>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                Tell us about your industry, target audience, and business
                goals. We can help you choose the right website, SEO, and
                digital marketing solutions to improve online visibility and
                attract potential customers in your target market.
              </p>

              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  mt-8
                  px-8 py-4
                  rounded-full
                  bg-white
                  text-[#2563EB]
                  font-bold
                  shadow-lg
                  hover:scale-105
                  transition duration-300
                "
              >
                Discuss Your Project →
              </Link>
            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-5">
              {[
                "Healthcare",
                "Real Estate",
                "Ecommerce",
                "Education",
                "Restaurants",
                "Startups",
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
