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

/* =========================
   SEO OPTIMIZED SERVICES
========================= */
const serviceLinks = [
  {
    name: "Digital Marketing Company Hyderabad",
    href: "/services/digital-marketing-company-hyderabad",
  },
  {
    name: "SEO Services in Hyderabad",
    href: "/services/seo-services-hyderabad",
  },
  {
    name: "Social Media Marketing Hyderabad",
    href: "/services/social-media-company-hyderabad",
  },
  {
    name: "Web Design Company Hyderabad",
    href: "/services/web-design-company-hyderabad",
  },
  {
    name: "Website Development Company Hyderabad",
    href: "/services/web-development-company-hyderabad",
  },
  {
    name: "Web Hosting Services Hyderabad",
    href: "/services/web-hosting-company-hyderabad",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 gradient-text">
            KIDIWEBTECH
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            KidiWebTech is a leading digital marketing agency in Hyderabad
            offering SEO services, Google Ads management, social media
            marketing, website development, and web hosting solutions to help
            businesses grow online and generate high-quality leads.
          </p>

          <div className="flex gap-5 text-lg text-gray-400">
            <a
              href="https://www.facebook.com/profile.php?id=61585391203839"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit KidiWebTech Facebook page"
              className="hover:text-yellow-400 transition"
            >
              <FaFacebookF />
              <span className="sr-only">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/kidi.webtech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit KidiWebTech Instagram profile"
              className="hover:text-yellow-400 transition"
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit KidiWebTech LinkedIn profile"
              className="hover:text-yellow-400 transition"
            >
              <FaLinkedinIn />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 gradient-text">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-yellow-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-yellow-400 transition"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4 gradient-text">Services</h3>

          <ul className="space-y-3 text-sm text-gray-300">
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

          {/* SEO INTERNAL LINKS */}
         <div className="mt-6 text-sm text-gray-300">
  <Link
    href="/services/seo-services-hyderabad"
    className="text-yellow-400 hover:text-yellow-300 underline font-medium mr-3"
  >
    SEO Services in Hyderabad
  </Link>

  <Link
    href="/services/google-ads"
    className="text-yellow-400 hover:text-yellow-300 underline font-medium mr-3"
  >
    Google Ads Management
  </Link>

  <Link
    href="/services/social-media-company-hyderabad"
    className="text-yellow-400 hover:text-yellow-300 underline font-medium"
  >
    Social Media Marketing
  </Link>
</div>
</div>
        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 gradient-text">
            Get in Touch
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 text-yellow-400" />
              <a
                href="mailto:info@kidiwebtech.com"
                className="hover:text-yellow-400 transition"
              >
                info@kidiwebtech.com
              </a>
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-yellow-400" />
              <a
                href="tel:+919390627367"
                className="hover:text-yellow-400 transition"
              >
                +91 93906 27367
              </a>
            </li>

            <li className="flex gap-3">
              <FaWhatsapp className="mt-1 text-yellow-400" />
              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Chat on WhatsApp
              </a>
            </li>

            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <span>
                Hyderabad, Telangana, India – Digital Marketing Agency
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 pt-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {year}{" "}
            <span className="gradient-text font-semibold">KIDIWEBTECH</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
