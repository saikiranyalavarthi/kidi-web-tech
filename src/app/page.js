"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimatedServices from "./Components/AnimatedServices";
import ServicesSection from "./Components/ServicesSection";
import ExperienceSection from "./Components/ExperienceSection";
import ServiceCategories from "./Components/ServiceCategories";
import WeDiffer from "./Components/WeDiffer";
import StatsSection from "./Components/StatsSection";

export default function Home() {
  const services = [
    {
      title: "Digital Marketing",
      textClass: "text-indigo-700",
      shadowClass: "hover:shadow-indigo-300",
      img: "/assets/image1.jpg",
      desc: "Boost your visibility with SEO, Google Ads, and social media strategies to reach the right audience.",
    },
    {
      title: "App Development",
      textClass: "text-purple-700",
      shadowClass: "hover:shadow-purple-300",
      img: "/assets/image2.jpg",
      desc: "We build fast, secure iOS and Android apps using modern technologies.",
    },
    {
      title: "Website Development",
      textClass: "text-blue-700",
      shadowClass: "hover:shadow-blue-300",
      img: "/assets/image3.jpg",
      desc: "SEO-optimized websites built with Next.js and Tailwind CSS for speed and UX.",
    },
    {
      title: "WordPress Development",
      textClass: "text-indigo-700",
      shadowClass: "hover:shadow-indigo-300",
      img: "/assets/image4.jpg",
      desc: "Custom themes and plugins for powerful, manageable WordPress websites.",
    },
  ];

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
        "Mobile-first app and website for hourly/daily coworking space booking. Includes seat selection, map view, and testimonials.",
    },
    {
      title: "Portfolio Website",
      image: "/assets/image11.jpg",
      description:
        "A personal portfolio showcasing a developer&apos;s skills, past projects, blog, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion animations.",
    },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>
          KIDIWEBTECH | Digital Marketing & Web Development Company India
        </title>
        <meta
          name="description"
          content="KIDIWEBTECH offers expert digital marketing, app & web development, and WordPress solutions. Grow your business online with a trusted technology partner."
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO, Web Development, App Development, WordPress Development, India, KIDIWEBTECH"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kidiwebtech.com/" />
        <meta
          property="og:title"
          content="KIDIWEBTECH | Digital Growth Partner"
        />
        <meta
          property="og:description"
          content="We provide high-quality digital marketing and web solutions including SEO, app development, and website design."
        />
        <meta property="og:image" content="/assets/image1.jpg" />
        <meta property="og:url" content="https://kidiwebtech.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <header className="text-blue-600 py-20 px-6 md:px-20 mt-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse">
              Your Partner in Digital Success
            </h1>
            <p className="text-xl sm:text-2xl mb-6 max-w-xl">
              Grow your business with our expert digital marketing, web and app
              development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
              >
                Contact Us
              </a>
              <a
                href="/services/KIDIWEBTECH"
                className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/assets/side1.jpg"
              alt="Image 1"
              width={500}
              height={400}
              className="rounded-xl w-full shadow-lg relative z-10"
            />
            <Image
              src="/assets/side2.jpg"
              alt="Image 2"
              width={500}
              height={400}
              className="rounded-xl w-4/5 absolute top-10 left-10 z-0 opacity-80 shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg ${item.shadowClass} transition-shadow duration-300 p-4 text-center`}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className={`text-xl font-semibold ${item.textClass} mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <ServiceCategories />
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
      <main>
        <ExperienceSection />
      </main>
      {/* Projects */}
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
            <Image
              src={proj.image}
              alt={proj.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-700 text-sm">{proj.description}</p>
          </div>
        ))}
      </section>
      <WeDiffer />
      {/* Success Section */}
      <section className="bg-[#f7f5ff] py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success with <span className="text-purple-600">passion-driven</span>{" "}
            service!{" "}
            <span role="img" aria-label="medal">
              🏅
            </span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            At KIDIWEBTECH, we live and breathe our clients&apos; success. We
            craft strategies that drive traffic and attract new clients. Whether
            you&apos;re a startup or an established brand, we&apos;re here to
            help you grow.
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

        <div className="lg:w-1/2">
          <Image
            src="/assets/image3.jpg"
            alt="Digital Growth Dashboard"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
      <main className=" bg-white text-black">
        <ServicesSection />
      </main>
      <StatsSection />
      {/* Contact CTA */}
      <section className="py-4 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          We&apos;d love to hear from you! Whether you&apos;re starting a new
          project, looking to improve your current website, or just want to
          explore ideas — let&apos;s connect and build something amazing
          together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* <AnimatedServices /> */}

      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-[16px] leading-relaxed">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Expert Digital Marketing Services to Grow Your Business
          </h2>

          <p>
            At <strong>KIDIWEBTECH</strong>, we are a top-rated digital
            marketing agency based in Hyderabad, delivering powerful online
            marketing strategies to clients across India. Whether you&apos;re a
            small business, e-commerce brand, doctor, or real estate agent, we
            provide tailored solutions to help you rank higher on Google,
            generate qualified leads, and grow revenue with the best digital
            marketing services near you.
          </p>

          <p>
            Our expert team specializes in{" "}
            <strong>SEO (Search Engine Optimization)</strong>, Google Ads,
            social media marketing, PPC advertising, and content marketing. As
            one of the <em>best digital marketing companies in Hyderabad</em>,
            we use performance-driven strategies backed by data to bring you
            real results. If you&apos;re searching for a reliable{" "}
            <strong>digital marketing agency near me</strong>, KIDIWEBTECH is
            your trusted partner.
          </p>

          <p>
            We&apos;ve successfully delivered 250+ digital marketing projects
            for industries like healthcare, technology, real estate, and
            eCommerce. Whether it&apos;s a full-fledged{" "}
            <strong>digital advertising campaign</strong>,{" "}
            <strong>lead generation strategy</strong>, or{" "}
            <strong>local SEO</strong> services, we ensure that every marketing
            campaign delivers a high return on investment.
          </p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            Why Choose Our Digital Marketing Company?
          </h3>

          <ul className="list-disc pl-6 space-y-3">
            <li>Google Certified Digital Marketers and SEO Experts</li>
            <li>Customized Digital Marketing Plans for Your Business Goals</li>
            <li>Affordable SEO Packages & Transparent Reporting</li>
            <li>
              High-converting Landing Pages & Conversion-focused Campaigns
            </li>
            <li>
              Proven Results in Real Estate, Healthcare, Education, eCommerce,
              and SaaS
            </li>
          </ul>

          <p>
            As a leading{" "}
            <strong>SEO and Digital Marketing company in Hyderabad</strong>, we
            focus on the long-term success of your brand. Our content strategies
            include advanced keyword research, optimized blog writing, backlinks
            building, technical SEO audits, and video marketing.
          </p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            All-in-One Digital Growth Services
          </h3>

          <p>
            We offer a full spectrum of online marketing services including:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>SEO Services:</strong> On-page, Off-page, Technical SEO,
              Local SEO
            </li>
            <li>
              <strong>Google Ads (PPC):</strong> Pay-per-click, remarketing, and
              conversion optimization
            </li>
            <li>
              <strong>Social Media Marketing:</strong> Facebook, Instagram,
              LinkedIn & YouTube campaigns
            </li>
            <li>
              <strong>Content Marketing:</strong> Blogs, email campaigns,
              copywriting
            </li>
            <li>
              <strong>Lead Generation:</strong> Real estate, dental, eCommerce,
              and B2B
            </li>
            <li>
              <strong>Digital Strategy:</strong> Analytics setup, CRM,
              automation & funnel building
            </li>
          </ul>

          <p>
            Looking for <em>freelance digital marketing experts</em>,{" "}
            <em>marketing agencies near me</em>, or a{" "}
            <strong>creative digital marketing company</strong> to scale your
            brand online? You&apos;ve come to the right place.
          </p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            Industries We Serve
          </h3>
          <p>
            From B2B startups to D2C brands, we&apos;ve helped businesses
            across:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Real Estate Lead Generation</li>
            <li>Healthcare & Doctor Booking Apps</li>
            <li>Education & Coaching Institutes</li>
            <li>eCommerce and Shopify Stores</li>
            <li>Automobile & Mechanical Parts</li>
            <li>IT Solutions & SaaS Products</li>
          </ul>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            Let&apos;s Build Your Digital Future
          </h3>
          <p>
            At KIDIWEBTECH, we go beyond just ranking on Google. We create
            end-to-end <strong>digital marketing strategies</strong> that
            convert visitors into loyal customers. If you&apos;re looking for a{" "}
            <strong>digital marketing consultant</strong> or a full-service{" "}
            <strong>digital agency in Hyderabad</strong>, let&apos;s talk!
          </p>

          <p className="mt-6 text-center">
            <a
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Get Free Consultation →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
