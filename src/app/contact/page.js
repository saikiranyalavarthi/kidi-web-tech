"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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

  // 🔹 WHATSAPP SUBMIT
  const handleWhatsApp = (e) => {
    e.preventDefault();

    const { name, email, mobile, service, message } = formData;

    if (typeof window !== "undefined" && window.gtag) {
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
  };

  // 🔹 EMAIL SUBMIT
  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "contact",
        event_label: formData.service,
      });
    }

    emailjs
      .send(
        "service_34id8vu",      // 🔁 replace
        "template_kxkmb1l",     // 🔁 replace
        formData,
        "O2InmkBfQvNlqeo2j"       // 🔁 replace
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            mobile: "",
            service: "Website Development",
            message: "",
          });
        },
        (error) => {
          alert("❌ Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="text-green-400">KIDIWEBTECH</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Website Development, App Development, SEO & Digital Marketing Services
        </p>
      </section>

      {/* FORM */}
      <section className="py-2 px-6 md:px-20">
        <div className="max-w-2xl mx-auto bg-[#0b0b0b] p-2 rounded-2xl border border-white/10 shadow-xl">

          <form className="grid gap-6">
            {/* Name */}
            <div>
              <label className="text-gray-400 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-400 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-gray-400 text-sm">Mobile</label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded"
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-gray-400 text-sm">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded"
              >
                <option>Website Development</option>
                <option>App Development</option>
                <option>SEO Services</option>
                <option>Digital Marketing</option>
                <option>WordPress Development</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-400 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded"
              />
            </div>

            {/* Buttons */}
            <button
              onClick={handleWhatsApp}
              className="w-full py-3 rounded-full bg-green-500 text-black font-semibold  hover:cursor-pointer"
            >
              Send via WhatsApp →
            </button>

            <button
              onClick={handleEmailSubmit}
              className="w-full py-3 rounded-full bg-yellow-400 text-black font-semibold hover:cursor-pointer"
            >
              Submit via Email →
            </button>
          </form>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © KIDIWEBTECH – Digital Solutions Company
      </footer>
    </div>
  );
}
