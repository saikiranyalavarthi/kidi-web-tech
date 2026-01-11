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

const serviceLinks = [
  { name: "Pay Per Click Advertising", href: "/services/digital-marketing-company-hyderabad" },
  { name: "Search Engine Optimization", href: "/services/seo-services-hyderabad" },
  { name: "Social Media Marketing", href: "/services/social-media-company-hyderabad" },
  { name: "Web Designing", href: "/services/web-design-company-hyderabad" },
  { name: "Web Development", href: "/services/web-development-company-hyderabad" },
  { name: "Web Hosting", href: "/services/web-hosting-company-hyderabad" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4 gradient-text">
            KIDIWEBTECH
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Digital Marketing & Development Agency based in Hyderabad. We help
            businesses grow with SEO, Ads, Websites, and Mobile Applications
            built for scale and performance.
          </p>

          <div className="flex gap-5 text-lg text-gray-400">
            <a href="https://www.facebook.com/profile.php?id=61585391203839" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/kidi.webtech/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 gradient-text">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-yellow-400 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* SERVICES (NEW – AUTO FROM serviceLinks) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 gradient-text">
            Services
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="hover:text-yellow-400 transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 gradient-text">
            Get in Touch
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 text-yellow-400" />
              <a href="mailto:info@kidiwebtech.com" className="hover:text-yellow-400 transition">
                info@kidiwebtech.com
              </a>
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-yellow-400" />
              <a href="tel:+919390627367" className="hover:text-yellow-400 transition">
                +91 93906 27367
              </a>
            </li>

            <li className="flex gap-3">
              <FaWhatsapp className="mt-1 text-yellow-400" />
              <a href="https://wa.me/919390627367" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                Chat on WhatsApp
              </a>
            </li>

            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <span>Hyderabad, Telangana, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 pt-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {year} <span className="gradient-text font-semibold">KIDIWEBTECH</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
