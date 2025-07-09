"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg px-6 py-4 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            {/* <img
              src="/assets/logo.png" // make sure the image is inside /public/assets/
              alt="KIDIWEBTECH Logo"
              width={50}
              height={50}
            /> */}
            <span className="text-white font-semibold text-lg">
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
          <div className="hidden md:flex items-center space-x-4 text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
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
          <div className="md:hidden flex flex-col space-y-4 mt-4 px-2">
            <Link href="/" className="hover:underline" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="bg-white text-indigo-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition text-center"
              onClick={toggleMenu}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
