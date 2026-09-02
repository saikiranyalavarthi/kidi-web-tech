"use client";

import { useState } from "react";

import {
  Phone,
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

  // HANDLE CHANGE

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WHATSAPP

  const handleWhatsApp = () => {
    const { name, email, mobile, service, message } = formData;

    const whatsappMessage = `
🚀 New Business Inquiry

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

  // EMAIL SUBMIT

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
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
    <main className="relative bg-white overflow-hidden">
      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-blue-100/50 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-cyan-100/50 blur-[140px] rounded-full"></div>
      </div>

      {/* HERO */}

      <section className="relative py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* BADGE */}

          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-blue-50
              border border-blue-100
              text-[#2563EB]
              font-semibold
              shadow-sm
            "
          >
            <Sparkles size={18} />

            <span>Professional Digital Solutions</span>
          </div>

          {/* HEADING */}

          <h1
            className="
              mt-8
              text-4xl sm:text-5xl md:text-7xl
              font-black
              leading-[1.05]
              tracking-tight
              text-[#0F172A]
            "
          >
            Let’s Build Your
            <span className="block bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-lg md:text-xl
              leading-8
              text-gray-600
            "
          >
            We create SEO strategies, high-converting websites, ecommerce
            platforms, and digital marketing solutions that help businesses
            generate more traffic, leads, and sales.
          </p>
        </div>
      </section>

      {/* STATS */}

      <section className="relative px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ["150+", "Projects Delivered"],
            ["100+", "Happy Clients"],
            ["24/7", "Support"],
            ["5+", "Years Experience"],
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                border border-gray-100
                rounded-[32px]
                p-7
                text-center
                shadow-sm
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)]
                hover:-translate-y-2
                hover:border-blue-100
                transition duration-500
              "
            >
              <h3
                className="
                  text-4xl md:text-5xl
                  font-black
                  text-[#2563EB]
                "
              >
                {item[0]}
              </h3>

              <p className="mt-3 text-gray-500">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section className="relative py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}

          <div>
            {/* BADGE */}

            <div
              className="
                inline-flex items-center gap-2
                px-5 py-2 rounded-full
                bg-blue-50
                border border-blue-100
                text-[#2563EB]
                font-semibold
                shadow-sm
              "
            >
              📞 Contact Our Team
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-8
                text-4xl md:text-5xl
                font-black
                leading-tight
                text-[#0F172A]
              "
            >
              Let’s Create Something Amazing Together
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-gray-600
              "
            >
              Looking for SEO, website development, ecommerce solutions, or
              digital marketing services? Our team creates modern solutions
              tailored for your business growth.
            </p>

            {/* FEATURES */}

            <div className="space-y-5 mt-10">
              {[
                {
                  icon: <CheckCircle2 className="text-[#2563EB]" />,
                  title: "Custom Website Development",
                  text: "Modern, fast, and SEO-friendly business websites.",
                },

                {
                  icon: <Globe className="text-[#2563EB]" />,
                  title: "SEO & Digital Marketing",
                  text: "Increase traffic, leads, and online visibility.",
                },

                {
                  icon: <Phone className="text-[#2563EB]" />,
                  title: "Dedicated Support",
                  text: "Quick communication and expert assistance.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex gap-4
                    bg-white
                    border border-gray-100
                    p-6
                    rounded-[28px]
                    shadow-sm
                    hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)]
                    hover:-translate-y-1
                    hover:border-blue-100
                    transition duration-500
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-blue-50
                      flex items-center justify-center
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}

          <div className="relative">
            {/* GLOW */}

            <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-40 rounded-[40px]" />

            <div
              className="
                relative
                bg-white
                border border-gray-100
                rounded-[40px]
                p-8 md:p-10
                shadow-[0_30px_80px_rgba(37,99,235,0.10)]
              "
            >
              {/* TITLE */}

              <div className="mb-8">
                <h3 className="text-3xl font-black text-[#0F172A] mb-3">
                  Start Your Project
                </h3>

                <p className="text-gray-600">
                  Fill out the form and let’s discuss your business goals.
                </p>
              </div>

              {/* FORM */}

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
                    className="
                      w-full h-14 px-5
                      rounded-2xl
                      bg-[#f8fbff]
                      border border-gray-100
                      focus:border-[#2563EB]
                      outline-none
                    "
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
                    placeholder="Enter your email"
                    className="
                      w-full h-14 px-5
                      rounded-2xl
                      bg-[#f8fbff]
                      border border-gray-100
                      focus:border-[#2563EB]
                      outline-none
                    "
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
                    placeholder="Enter mobile number"
                    className="
                      w-full h-14 px-5
                      rounded-2xl
                      bg-[#f8fbff]
                      border border-gray-100
                      focus:border-[#2563EB]
                      outline-none
                    "
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
                    className="
                      w-full h-14 px-5
                      rounded-2xl
                      bg-[#f8fbff]
                      border border-gray-100
                      focus:border-[#2563EB]
                      outline-none
                    "
                  >
                    <option>Website Development</option>
                    <option>SEO Services</option>
                    <option>Google Ads</option>
                    <option>Branding</option>
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
                    placeholder="Tell us about your project..."
                    className="
                      w-full px-5 py-4
                      rounded-2xl
                      bg-[#f8fbff]
                      border border-gray-100
                      focus:border-[#2563EB]
                      outline-none
                      resize-none
                    "
                  />
                </div>

                {/* BUTTONS */}

                <div className="space-y-4 pt-2">
                  {/* WHATSAPP */}

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="
                      group
                      w-full h-14
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#2563EB]
                      to-[#06B6D4]
                      text-white
                      font-black
                      flex items-center justify-center gap-3
                      hover:scale-[1.02]
                      transition duration-300
                      shadow-xl
                    "
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
                    className="
                      group
                      w-full h-14
                      rounded-2xl
                      bg-[#0F172A]
                      hover:bg-black
                      text-white
                      font-black
                      flex items-center justify-center gap-3
                      hover:scale-[1.02]
                      transition duration-300
                    "
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

      {/* FOOTER */}

      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h3 className="text-2xl font-black text-[#0F172A]">KIDIWEBTECH</h3>

            <p className="text-gray-500 mt-2">SEO & Web Development Company</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <span>SEO Services</span>
            <span>Web Development</span>
            <span>Google Ads</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
