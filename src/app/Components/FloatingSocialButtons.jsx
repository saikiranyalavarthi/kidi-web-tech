"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WHATSAPP */}

      <a
        href="https://wa.me/919390627367?text=Hi%20I%20want%20digital%20marketing%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp KIDIWEBTECH"
        className="
          group
          relative
          w-16 h-16
          rounded-full
          bg-gradient-to-r
          from-[#25D366]
          to-[#1ebe5d]
          flex items-center justify-center
          shadow-[0_20px_50px_rgba(37,211,102,0.35)]
          hover:scale-110
          transition duration-300
        "
      >
        {/* PING */}

        <span
          className="
            absolute inset-0
            rounded-full
            bg-[#25D366]
            animate-ping
            opacity-20
          "
        ></span>

        {/* ICON */}

        <FaWhatsapp className="relative text-white text-3xl" />
      </a>

      {/* CALL BUTTON */}

      <a
        href="tel:+919390627367"
        aria-label="Call KIDIWEBTECH"
        className="
          group
          relative
          w-16 h-16
          rounded-full
          bg-gradient-to-r
          from-[#2563EB]
          to-[#06B6D4]
          flex items-center justify-center
          shadow-[0_20px_50px_rgba(37,99,235,0.35)]
          hover:scale-110
          transition duration-300
        "
      >
        {/* PING */}

        <span
          className="
            absolute inset-0
            rounded-full
            bg-[#2563EB]
            animate-ping
            opacity-20
          "
        ></span>

        {/* ICON */}

        <FaPhoneAlt className="relative text-white text-2xl" />
      </a>
    </div>
  );
}
