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
    const whatsappMessage = `Hi KIDIWEBTECH,%0AName: ${name}%0AEmail: ${email}%0AService: ${service}%0AMessage: ${message}`;
    const whatsappLink = `https://wa.me/919390627367?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          We’re here to help your business grow. Reach out to us today!
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
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Send via WhatsApp Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
