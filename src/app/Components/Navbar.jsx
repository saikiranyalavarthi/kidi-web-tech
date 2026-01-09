"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { name: "Pay Per Click Advertising", href: "/services/ppc" },
  { name: "Search Engine Optimization", href: "/services/SEOPage" },
  { name: "Social Media Marketing", href: "/services/social-media" },
  { name: "Web Designing", href: "/services/web-design" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Web Hosting", href: "/services/web-hosting" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold gradient-text">
          KIDIWEBTECH
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">

          {["Home", "About", "Projects", "Blogs"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="gradient-text hover:opacity-80 transition"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* SERVICES */}
          <li className="relative group">
            <button className="flex items-center gap-1 gradient-text">
              Services <ChevronDown size={16} />
            </button>

            <div className="
              absolute left-0 top-full mt-3 w-64
              bg-black border border-white/10
              shadow-xl
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition
            ">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-3 text-sm gradient-text hover:bg-white/5 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>

          {/* CTA */}
          <li>
            <Link
              href="/contact"
              className="
                px-6 py-2 rounded-full
                bg-gradient-to-r from-yellow-400 to-orange-500
                text-black font-semibold
                hover:opacity-90 transition
              "
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-4">
          {["Home", "About", "Projects", "Blogs"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block gradient-text"
            >
              {item}
            </Link>
          ))}

          <details>
            <summary className="flex items-center gap-1 cursor-pointer gradient-text">
              Services <ChevronDown size={16} />
            </summary>
            <div className="mt-2 pl-4 space-y-2">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block gradient-text"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="
              inline-block mt-4 px-6 py-2 rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black font-semibold
            "
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
