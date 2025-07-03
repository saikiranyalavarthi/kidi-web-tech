"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg p-6 text-white flex justify-between items-center">
        <div className="text-2xl font-bold">KIDIWEBTECH</div>

        <div className="flex items-center space-x-4 text-base">
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

          {/* Get in Touch Button */}
          <Link
            href="/contact"
            className="bg-white text-indigo-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
