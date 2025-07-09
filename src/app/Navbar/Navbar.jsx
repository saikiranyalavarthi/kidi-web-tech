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
  { name: "KIDIWEBTECH", href: "/services/KIDIWEBTECH" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg px-6 py-4 text-white z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-2xl">
            KIDIWEBTECH
          </span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-base relative">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>

          {/* Services Dropdown (Fixed) */}
          <div className="relative">
            <button
              onClick={() => setShowServices((prev) => !prev)}
              className="flex items-center hover:underline"
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>

            {showServices && (
              <div
                className="absolute top-8 left-0 w-64 bg-white text-gray-900 rounded-md shadow-lg z-40"
                onMouseLeave={() => setShowServices(false)}
              >
                {serviceLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-300"
                    onClick={() => setShowServices(false)} // close dropdown on click
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
          <Link
            href="/contact"
            className="bg-white text-indigo-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-2">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>

          {/* Mobile Services Dropdown using <details> */}
          <div>
            <details className="group">
              <summary className="cursor-pointer list-none flex items-center">
                Services <ChevronDown size={16} className="ml-1" />
              </summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                {serviceLinks.map((link, i) => (
                  <Link key={i} href={link.href} onClick={toggleMenu}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          <Link href="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/blogs" onClick={toggleMenu}>
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="bg-white text-indigo-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition text-center"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
