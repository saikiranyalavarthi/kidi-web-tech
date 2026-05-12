"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "Website Development",
    message: "",
  });

  // =========================
  // HANDLE CHANGE
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // WHATSAPP
  // =========================

  const handleWhatsApp = () => {
    const { name, email, mobile, service, message } = formData;

    // GA4 EVENT
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        lead_type: "whatsapp",
        service,
        page_location: window.location.href,
      });
    }

    const whatsappMessage = `
🚀 New Website Inquiry

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
💼 Service: ${service}

📝 Message:
${message}
`;

    const whatsappURL = `https://wa.me/919390627367?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  // =========================
  // EMAIL SUBMIT
  // =========================

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        "service_34id8vu",
        "template_kxkmb1l",
        formData,
        "O2InmkBfQvNlqeo2j",
      );

      // GA4 EVENT
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit", {
          lead_type: "email",
          service: formData.service,
          page_location: window.location.href,
        });
      }

      alert("✅ Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "Website Development",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed To Send Message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-black overflow-hidden">
      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

      <section className="relative py-28 px-6 overflow-hidden">
        {/* BG EFFECT */}

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-3xl opacity-60" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles size={18} />

            <span className="text-sm font-medium">
              Professional Digital Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Build Your Brand
            <span className="block text-green-600">With KIDIWEBTECH</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
            We create high-performance websites, ecommerce platforms, SEO
            strategies, and digital marketing solutions that help businesses
            grow online.
          </p>
        </div>
      </section>

      {/* ================================= */}
      {/* STATS */}
      {/* ================================= */}

      <section className="py-12 px-6 border-y border-black/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ["150+", "Projects Completed"],
            ["100+", "Happy Clients"],
            ["24/7", "Support Available"],
            ["5+", "Years Experience"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-black/10 rounded-3xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-4xl font-black text-green-600 mb-2">
                {item[0]}
              </h3>

              <p className="text-gray-600 text-sm">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================= */}
      {/* CONTACT SECTION */}
      {/* ================================= */}

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT CONTENT */}

          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Let’s Create Something
              <span className="text-green-600"> Amazing Together</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Looking for website development, SEO optimization, ecommerce
              solutions, or digital marketing services? Our team delivers modern
              solutions tailored for your business.
            </p>

            {/* FEATURES */}

            <div className="space-y-5">
              {[
                {
                  icon: <CheckCircle2 className="text-green-600" />,
                  title: "Custom Website Development",
                  text: "Fast, responsive, and SEO-friendly websites.",
                },
                {
                  icon: <Globe className="text-green-600" />,
                  title: "SEO & Digital Marketing",
                  text: "Grow your traffic and improve online visibility.",
                },
                {
                  icon: <Phone className="text-green-600" />,
                  title: "Dedicated Support",
                  text: "Quick communication and ongoing support.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-gray-50 border border-black/10 p-6 rounded-3xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}

          <div className="relative">
            <div className="absolute inset-0 bg-green-100 blur-3xl opacity-50 rounded-[40px]" />

            <div className="relative bg-white border border-black/10 rounded-[40px] p-8 md:p-10 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-3">Contact Our Team</h3>

                <p className="text-gray-600">
                  Fill out the form and let’s discuss your project.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                {/* NAME */}

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-black/10 focus:border-green-600 outline-none"
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-black/10 focus:border-green-600 outline-none"
                  />
                </div>

                {/* MOBILE */}

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-black/10 focus:border-green-600 outline-none"
                  />
                </div>

                {/* SERVICE */}

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-black/10 focus:border-green-600 outline-none"
                  >
                    <option>Website Development</option>
                    <option>SEO Services</option>
                    <option>WordPress Development</option>
                    <option>Ecommerce Development</option>
                    <option>App Development</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Project Details
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-black/10 focus:border-green-600 outline-none resize-none"
                  />
                </div>

                {/* BUTTONS */}

                <div className="space-y-4 pt-2">
                  {/* WHATSAPP */}

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="group w-full h-14 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle size={20} />
                    Send via WhatsApp
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-all"
                    />
                  </button>

                  {/* EMAIL */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full h-14 rounded-2xl bg-black hover:bg-gray-900 text-white font-black flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {loading ? "Sending..." : "Submit via Email"}

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-all"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* FOOTER */}
      {/* ================================= */}

      <footer className="border-t border-black/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-black">KIDIWEBTECH</h3>

            <p className="text-gray-600 mt-2">
              Website Development & SEO Company
            </p>
          </div>

          <div className="flex gap-6 text-gray-600 text-sm">
            <span>Website Development</span>
            <span>SEO Services</span>
            <span>Digital Marketing</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
