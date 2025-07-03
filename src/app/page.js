import React from "react";
import Head from "next/head";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

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
        <title>KIDIWEBTECH - Digital Growth Partner</title>
        <meta
          name="description"
          content="Digital Marketing, App & Web Development Agency"
        />
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-center py-60 px-4 mt-2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse">
          Your Partner in Digital Success
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
          Grow your business with our expert digital marketing, web and app
          development services.
        </p>
      </header>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Cards */}
          {[
            {
              title: "Digital Marketing",
              color: "indigo",
              img: "/assets/image1.jpg",
              desc: "Boost your visibility with SEO, Google Ads, and social media strategies to reach the right audience.",
            },
            {
              title: "App Development",
              color: "purple",
              img: "/assets/image2.jpg",
              desc: "We build fast, secure iOS and Android apps using modern technologies.",
            },
            {
              title: "Website Development",
              color: "blue",
              img: "/assets/image3.jpg",
              desc: "SEO-optimized websites built with Next.js and Tailwind CSS for speed and UX.",
            },
            {
              title: "WordPress Development",
              color: "indigo",
              img: "/assets/image4.jpg",
              desc: "Custom themes and plugins for powerful, manageable WordPress websites.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-${item.color}-300 transition-shadow duration-300 p-4 text-center`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3
                className={`text-xl font-semibold text-${item.color}-700 mb-2`}
              >
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 items-center gap-12 bg-white">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            KIDIWEBTECH is a leading digital agency passionate about helping
            businesses thrive online. We provide top-tier services in digital
            marketing, web development, app development, and WordPress
            solutions.
          </p>
          <p className="text-gray-700">
            Founded with a mission to deliver result-oriented strategies, we
            blend creativity and technology to drive measurable results and
            customer satisfaction. Our team is dedicated to building long-term
            client relationships based on trust and performance.
          </p>
        </div>
        <Image
          src="/assets/image5.jpg"
          alt="About KIDIWEBTECH"
          width={600}
          height={700}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Mission Section */}
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

      <section className="bg-[#f7f5ff] py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success with <span className="text-purple-600">passion-driven</span>{" "}
            service!{" "}
            <span role="img" aria-label="medal">
              🏅
            </span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            At KIDIWEBTECH, we live and breathe our clients’ success. We craft
            strategies that drive traffic and attract new clients. Whether
            you're a startup or an established brand, we’re here to help you
            grow.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "Get the results you crave and boost your ROI!",
              "Turn your website into a sales machine that never sleeps.",
              "Unleash your marketing potential and conquer your market.",
              "Fuel your business growth with leads and sales!",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start text-gray-700 text-sm"
              >
                <CheckCircle className="text-purple-600 w-5 h-5 mr-2 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-3xl font-bold text-purple-700">250+</h3>
              <p className="text-gray-600 text-sm mt-1">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-700">125+</h3>
              <p className="text-gray-600 text-sm mt-1">Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-700">25</h3>
              <p className="text-gray-600 text-sm mt-1">Experts</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <Image
            src="/assets/image3.jpg" // Replace with your real image in /public/assets/
            alt="Digital Growth Dashboard"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          We'd love to hear from you! Whether you're starting a new project,
          looking to improve your current website, or just want to explore ideas
          — let's connect and build something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
