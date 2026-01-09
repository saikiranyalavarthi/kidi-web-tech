"use client";

import Image from "next/image";
import Head from "next/head";

export default function Projects() {
  const projects = [
    {
      title: "Vet & Meet Pet Consultation App",
      image: "/assets/image6.jpg",
      description:
        "A modern pet consultation app where pet owners can book online vet consultations via WhatsApp, integrated with a booking calendar and payment gateway.",
    },
    {
      title: "Pet Shop Ecommerce Website",
      image: "/assets/image7.jpg",
      description:
        "A fast-loading eCommerce site for pet food, accessories, and medicine using WooCommerce and custom WordPress themes.",
    },
    {
      title: "News Website",
      image: "/assets/image10.jpg",
      description:
        "A dynamic Telugu-language news website built with ReactJS and WordPress REST API, featuring category navigation, sliders, and ticker components.",
    },
    {
      title: "IT Solutions Company Site",
      image: "/assets/image8.jpg",
      description:
        "A sleek website for a tech company showcasing IT Infrastructure, SAP Services, Staffing, and Immigration Solutions using Next.js and Tailwind CSS.",
    },
    {
      title: "Coworking Space Booking App",
      image: "/assets/image9.jpg",
      description:
        "Mobile-first app and website for hourly/daily coworking space booking with seat selection, map view, and testimonials.",
    },
    {
      title: "Portfolio Website",
      image: "/assets/image11.jpg",
      description:
        "A personal portfolio showcasing skills, projects, blog, and contact information built with Next.js, Tailwind CSS, and Framer Motion.",
    },
  ];

  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      <Head>
        <title>KIDIWEBTECH | Projects & Case Studies</title>
        <meta
          name="description"
          content="Explore KIDIWEBTECH projects including web development, mobile apps, SEO solutions, and digital platforms built for performance and growth."
        />
        <meta
          name="keywords"
          content="Web Development Projects, App Development Portfolio, SEO Case Studies, ReactJS Developers India, WordPress Experts"
        />
        <link rel="canonical" href="https://kidiwebtech.com/projects" />
      </Head>

      {/* HERO */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Our <span className="gradient-text">Work & Projects</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We craft scalable digital products across industries — from apps and
          platforms to SEO-driven business websites.
        </p>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-24 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {projects.map((proj, index) => (
            <div key={index} className="relative group">

              {/* GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60 group-hover:opacity-90 transition" />

              {/* CARD */}
              <div className="relative bg-black rounded-2xl m-[1.5px] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">

                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-bold gradient-text mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 md:px-20 pb-28 space-y-12 text-gray-400 max-w-6xl mx-auto">

        {[
          {
            title: "App Development Projects",
            text:
              "Our mobile app development projects include healthcare, business, and booking apps with real-time notifications, payments, and chat integrations. We specialize in scalable cross-platform solutions built for performance.",
          },
          {
            title: "News Platforms & Content Sites",
            text:
              "We build high-performance news platforms using React.js and WordPress REST API with category navigation, sliders, breaking news tickers, and SEO optimization.",
          },
          {
            title: "Coworking Space Systems",
            text:
              "Our coworking booking platforms include seat selection, map views, reviews, and flexible pricing — ideal for shared workspaces and commercial rentals.",
          },
          {
            title: "SEO & Digital Marketing Projects",
            text:
              "Our SEO campaigns focus on measurable growth, technical optimization, local SEO, and Google Ads to increase traffic and conversions.",
          },
          {
            title: "Real Estate Websites & Funnels",
            text:
              "We create conversion-focused real estate websites with property filters, WhatsApp integration, multilingual pages, and lead funnels.",
          },
          {
            title: "Industrial & Mechanical Platforms",
            text:
              "B2B platforms designed for manufacturing and mechanical industries with product catalogs, brochure downloads, and inquiry capture.",
          },
          {
            title: "IT Consulting & SAP Services Websites",
            text:
              "Enterprise websites built for IT consulting, SAP services, staffing, and infrastructure companies using Next.js and Tailwind CSS.",
          },
          {
            title: "Personal Portfolio Websites",
            text:
              "High-quality portfolio websites for developers and creatives featuring animations, project showcases, blogs, and contact forms.",
          },
          {
            title: "Digital Growth India Program",
            text:
              "Our Digital Growth India initiative helps local businesses go online quickly with SEO landing pages, WhatsApp automation, and maps listings.",
          },
        ].map((item, i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold gradient-text mb-3">
              {item.title}
            </h2>
            <p className="leading-relaxed">{item.text}</p>
          </div>
        ))}

      </section>

    </div>
  );
}
