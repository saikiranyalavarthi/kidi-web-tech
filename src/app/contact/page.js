"use client";

import { useState } from "react";

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
    const whatsappMessage = `
Hi KIDIWEBTECH,
Name: ${name}
Email: ${email}
Service: ${service}
Message: ${message}
    `;

    const whatsappLink = `https://wa.me/919390627367?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="gradient-text">KIDIWEBTECH</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Let’s discuss your project. Get expert help for SEO, website,
          app development, and digital marketing.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto text-center">
        <p className="text-gray-400 mb-6 text-lg">
          Looking for a reliable <strong className="gradient-text">SEO company in India</strong>,
          expert <strong className="gradient-text">web developers</strong>, or a
          result-driven <strong className="gradient-text">digital marketing agency</strong>?
          You’re in the right place.
        </p>

        <p className="text-gray-400">
          Fill out the form below or message us directly on WhatsApp for a fast response.
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-2xl mx-auto bg-[#0b0b0b] p-8 rounded-2xl border border-white/10 shadow-xl">
          <form onSubmit={handleSubmit} className="grid gap-6">

            {/* Name */}
            <div>
              <label className="block mb-1 text-sm text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block mb-1 text-sm text-gray-400">
                Required Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Website Development</option>
                <option>App Development</option>
                <option>SEO Services</option>
                <option>Digital Marketing</option>
                <option>WordPress Development</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-full font-semibold text-lg
                bg-gradient-to-r from-green-400 to-green-600
                text-black hover:opacity-90 transition
              "
            >
              Send Message via WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <section className="py-10 px-6 text-center border-t border-white/10">
        <p className="text-gray-400 text-sm max-w-4xl mx-auto">
          KIDIWEBTECH delivers professional solutions in SEO optimization,
          mobile app development, responsive web design, and WordPress services.
          Partner with us to scale your digital presence.
        </p>
      </section>
    </div>
  );
}
