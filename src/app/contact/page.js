"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, service, message } = formData;

    // ✅ GA4 EVENT: FORM SUBMIT
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "contact",
        event_label: service,
      });

      // ✅ GA4 EVENT: WHATSAPP CLICK (LEAD)
      window.gtag("event", "whatsapp_click", {
        event_category: "contact",
        event_label: service,
        value: 1,
      });
    }

    const whatsappMessage = `
Hi KIDIWEBTECH,
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Service: ${service}
Message: ${message}
    `;

    const whatsappLink = `https://wa.me/919390627367?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      service: "Website Development",
      message: "",
    });
  };

  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">

      {/* HERO */}
      <section className="py-18 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="text-green-400">KIDIWEBTECH</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Get fast support for Website Development, SEO, Apps & Digital Marketing.
        </p>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto text-center">
        <p className="text-gray-400 mb-6 text-lg">
          Fill the form or message us directly on WhatsApp for a faster response.
        </p>
      </section>

      {/* FORM */}
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
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block mb-1 text-sm text-gray-400">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full px-4 py-2 rounded bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-lg
              bg-gradient-to-r from-green-400 to-green-600
              text-black hover:opacity-90 transition"
            >
              Send Message via WhatsApp →
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-10 px-6 text-center border-t border-white/10">
        <p className="text-gray-400 text-sm max-w-4xl mx-auto">
          KIDIWEBTECH – Professional Website Development, SEO & Digital Marketing Services.
        </p>
      </section>

    </div>
  );
}
