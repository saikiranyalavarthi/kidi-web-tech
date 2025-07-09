"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-indigo-800 via-purple-700 to-blue-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: About */}
        <div>
          <h2 className=" mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-2xl">
            KIDIWEBTECH
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Digital Marketing & Development Agency based in Hyderabad. We help
            your business grow with SEO, Ads, Websites, and Mobile Applications
            designed for visibility and scale.
          </p>
          <div className="flex gap-4 text-xl mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services/KIDIWEBTECH" },
              { label: "Projects", href: "/projects" },
              { label: "Blogs", href: "/blogs" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-gray-300 hover:underline transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1" />
              <a
                href="mailto:info@kidiwebtech.com"
                className="underline hover:text-white"
              >
                info@kidiwebtech.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1" />
              <a
                href="tel:+919390627367"
                className="underline hover:text-white"
              >
                +91 93906 27367
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaWhatsapp className="mt-1" />
              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                SATTAVA MAGNUS 301, Sabza Colony, Brindavan Colony,
                <br />
                Toli Chowki, Hyderabad, Telangana
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
          <p>
            © {year}{" "}
            <span className="text-orange-400 font-semibold">KIDIWEBTECH</span>.
            All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/services/web-design" className="hover:underline">
              Web Designing
            </Link>
            <Link href="/services/web-development" className="hover:underline">
              Web Development
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
