// pages/index.jsx
import React from "react";
import Head from "next/head";

export default function Home() {
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
      title: "News Website ",
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
        "Mobile-first app and website for hourly/daily coworking space booking. Includes seat selection, map view, and testimonials.",
    },
    {
      title: "Portfolio Website",
      image: "/assets/image11.jpg",
      description:
        "A personal portfolio showcasing a developer's skills, past projects, blog, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion animations.",
    },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>KIDIWEBTECH - Projects</title>
        <meta
          name="description"
          content="Explore our recent projects from pet apps to IT company websites."
        />
      </Head>

      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Our Work & Projects
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We craft digital experiences across industries. From React apps to
          WordPress-powered platforms, check out our highlights.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 pb-20">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-700 text-sm">{proj.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
