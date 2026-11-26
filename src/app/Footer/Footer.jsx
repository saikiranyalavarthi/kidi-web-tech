"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const services = [
  "SEO Services",
  "Website Development",
  "Google Ads",
  "Social Media Marketing",
  "App Development",
  "Branding",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white border-t border-gray-100">
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-100/40 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-100/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* TOP CTA */}

       
<div className="mb-20 flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-7 py-7 text-white shadow-lg shadow-blue-500/15 sm:flex-row md:px-10">

  <h2 className="text-lg font-bold sm:text-xl">
    Ready to grow your business with KidiWebTech?
  </h2>

  <div className="flex shrink-0 flex-wrap gap-3">
    <Link
      href="/contact"
      className="rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-600 transition hover:scale-105"
    >
      Get Free Consultation →
    </Link>

    <a
      href="https://wa.me/919390627367"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
    >
      WhatsApp Us
    </a>
  </div>

</div>


        {/* MAIN GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* BRAND */}

          <div>
            <h3
              className="
                text-3xl
                font-black
                tracking-tight
              "
            >
              <div className="flex items-center gap-3">
                <img
                  src="/kidiwebtech-logo.png"
                  alt="KIDIWEBTECH"
                  className="w-18 h-18 object-contain"
                />
              </div>
            </h3>

            <p
              className="
                mt-6
                text-gray-600
                leading-8
              "
            >
              KIDIWEBTECH helps businesses grow online through SEO, website
              development, Google Ads, branding, and digital marketing
              strategies.
            </p>

            {/* SOCIALS */}

            <div className="flex gap-4 mt-8">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/profile.php?id=61585391203839",
                },

                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/kidiwebtech/",
                },

                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/",
                },

                {
                  icon: <FaTwitter />,
                  link: "https://x.com/kidiwebtech",
                },
                {
                  icon: <FaYoutube />,
                  link: "https://www.youtube.com/@KIDIWEBTECH",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-white
                    border border-gray-100
                    flex items-center justify-center
                    text-[#2563EB]
                    shadow-sm
                    hover:bg-[#2563EB]
                    hover:text-white
                    hover:-translate-y-1
                    transition duration-300
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-black text-[#0F172A]">Quick Links</h3>

            <ul className="space-y-4 mt-8">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/seo-services" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#2563EB] transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* SERVICES */}

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-black text-[#0F172A]">Services</h3>

            <ul className="space-y-4 mt-8">
              {[
                {
                  name: "SEO Services",
                  href: "/technical-seo-services",
                },
                {
                  name: "Website Development",
                  href: "/website-development-services",
                },
                {
                  name: "Google Ads",
                  href: "/google-ads-agency",
                },
                {
                  name: "GMB Optimization Services",
                  href: "/gmb-optimization-services",
                },
                {
                  name: "App Development",
                  href: "/services/mobile-app-development-hyderabad",
                },
                {
                  name: "Search Ads Services",
                  href: "/search-ads-services",
                },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-[#2563EB] transition duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT */}

          <div>
            <h3 className="text-2xl font-black text-[#0F172A]">Contact</h3>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-blue-50
                    flex items-center justify-center
                    text-[#2563EB]
                  "
                >
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>

                  <a
                    href="mailto:info@kidiwebtech.com"
                    className="text-gray-700 hover:text-[#2563EB]"
                  >
                    info@kidiwebtech.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-blue-50
                    flex items-center justify-center
                    text-[#2563EB]
                  "
                >
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>

                  <a
                    href="tel:+919390627367"
                    className="text-gray-700 hover:text-[#2563EB]"
                  >
                    +91 93906 27367
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-blue-50
                    flex items-center justify-center
                    text-[#2563EB]
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>

                  <p className="text-gray-700">
                    {" "}
                    Kakatiya Hills, Guttala_Begumpet, Madhapur, Hyderabad,
                    Telangana 500081
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-16
            pt-8
            border-t border-gray-100
            flex flex-col md:flex-row
            justify-between items-center
            gap-4
          "
        >
          <p className="text-gray-500 text-sm">
            © {year} KIDIWEBTECH. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
