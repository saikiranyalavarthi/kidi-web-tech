"use client";

import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      icon: "🚀",
      title: "SEO Services",
      desc: "Improve Google search visibility, attract relevant organic traffic, and generate qualified enquiries with technical SEO, on-page optimization, and content strategies.",
      link: "/seo-services-hyderabad",
    },

    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop",
      icon: "💻",
      title: "Website Development",
      desc: "Get a fast, responsive, SEO-friendly business website or custom web application built to showcase your services and convert visitors into potential customers.",
      link: "/website-development-services",
    },

    {
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      icon: "📱",
      title: "Mobile App Development",
      desc: "Build Android and iOS mobile applications with intuitive experiences, reliable functionality, and scalable solutions for startups and established businesses.",
      link: "/services/mobile-app-development-hyderabad",
    },

    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop",
      icon: "📈",
      title: "Google Ads & PPC Management",
      desc: "Reach customers actively searching for your services through targeted Google Ads campaigns designed to increase relevant enquiries and support measurable business growth.",
      link: "/ppc-management-services",
    },

    {
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop",
      icon: "🎯",
      title: "Social Media Marketing",
      desc: "Strengthen your brand presence, connect with your target audience, and promote your products and services through strategic social media campaigns.",
      link: "/seo-services-india",
    },

    {
      image:
        "https://images.unsplash.com/photo-1677693972403-db681288b5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      icon: "🛒",
      title: "Ecommerce Website Development",
      desc: "Launch an online store with mobile-friendly shopping, product pages, streamlined checkout, and a user experience designed to support more sales.",
      link: "/ecommerce-development-services",
    },
  ];

  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-[#f5f9ff]">

      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-200/30 blur-[120px] rounded-full"></div>
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
            🚀 Our Services
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
            Website Development, SEO & Digital Marketing That Generate Leads
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
            KidiWebTech helps businesses strengthen their online presence
            through professional website development, search engine
            optimization, mobile app development, Google Ads, and digital
            marketing. Based in Hyderabad, India, we work with businesses across
            India and international markets, including the USA, UK, UAE, and
            Saudi Arabia. Our goal is to help you attract relevant visitors,
            generate qualified enquiries, and grow your business online.
          </p>
        </div>

        {/* SERVICES */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                border border-gray-100
                rounded-[32px]
                p-8
                shadow-sm
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >

              {/* SERVICE IMAGE - ADDED */}

              <div className="relative w-full h-48 overflow-hidden rounded-2xl mb-6">
                <img
                  src={service.image}
                  alt={service.title}
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

              {/* EXISTING ICON */}

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
                {service.icon}
              </div>

              <h3
                className="
                  mt-7
                  text-2xl
                  font-black
                  text-[#0F172A]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-8
                "
              >
                {service.desc}
              </p>

              <Link
                href={service.link}
                className="
                  inline-flex items-center
                  mt-7
                  text-[#2563EB]
                  font-bold
                  hover:gap-3
                  transition-all duration-300
                "
              >
                Explore Service →
              </Link>

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

        {/* CTA */}

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
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[4px] text-white/70 text-sm">
                GROW YOUR BUSINESS
              </p>

              <h3
                className="
                  mt-5
                  text-4xl md:text-5xl
                  font-black
                  leading-tight
                "
              >
                Ready to Get More Customers Online?
              </h3>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-white/90
                "
              >
                Tell us about your business goals. We will help you explore the
                right website, SEO, and digital marketing solutions for your
                target audience and budget.
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
                Get a Free Quote →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                "SEO Optimization",
                "Website Design",
                "App Development",
                "Google Ads",
                "Social Media",
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
