"use client";

import { useState } from "react";
import Head from "next/head";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const whatsappMessage = `Hi KIDIWEBTECH,%0AName: ${name}%0AEmail: ${email}%0AService: ${service}%0AMessage: ${message}`;
    const whatsappLink = `https://wa.me/919390627367?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="font-sans">
      <Head>
        <title>Contact KIDIWEBTECH | SEO, Web & App Development in India</title>
        <meta
          name="description"
          content="Reach out to KIDIWEBTECH for expert digital solutions in SEO, app development, web design, and WordPress services. We’re here to help your business grow online."
        />
        <meta
          name="keywords"
          content="Contact KIDIWEBTECH, SEO Company India, App Development Company, Web Development Services, WordPress Experts, WhatsApp Contact Digital Marketing"
        />
        <link rel="canonical" href="https://kidiwebtech.com/contact" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          We’re here to help your business grow with expert digital solutions.
          Get in touch with our team for SEO, website & app development,
          WordPress customization, or marketing support.
        </p>
      </section>

      {/* Intro Content for SEO */}
      <section className="px-6 md:px-20 py-10 bg-white text-gray-700 max-w-4xl mx-auto text-center">
        <p className="mb-6">
          Whether you're looking for a trusted{" "}
          <strong>SEO company in India</strong>, need help with{" "}
          <strong>website development</strong>, or want to launch a custom{" "}
          <strong>mobile app</strong>, KIDIWEBTECH is here to support your
          digital journey. Our <strong>WordPress developers</strong> and{" "}
          <strong>digital marketing team</strong> are ready to assist you with
          personalized strategies and 24/7 service.
        </p>
        <p>
          Contact us via the form below or send us a message directly on{" "}
          <strong>WhatsApp</strong> — fast, easy, and effective.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                What Service Do You Need?
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Website Development">Website Development</option>
                <option value="App Development">App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="WordPress Development">
                  WordPress Development
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* WhatsApp Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Send via WhatsApp Message
            </button>
          </form>
        </div>
      </section>

      {/* SEO Note Section */}
      <section className="py-10 px-6 md:px-20 text-center text-gray-600 text-sm">
        <p>
          Looking to grow online? KIDIWEBTECH provides expert-level solutions in{" "}
          <strong>SEO optimization</strong>,{" "}
          <strong>mobile app development</strong>,{" "}
          <strong>responsive web design</strong>, and{" "}
          <strong>WordPress maintenance</strong>. We're your one-stop solution
          for digital growth in India.
        </p>
      </section>
    </div>
  );
}
