// "use client";

// import {
//   FaFacebookF,
//   FaWhatsapp,
//   FaYoutube,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaPhoneAlt,
// } from "react-icons/fa";

// export default function FloatingSocialButtons() {
//   return (
//     <div className="fixed top-1/2 right-4 z-50 -translate-y-1/2 flex flex-col gap-3">

//       {/* Instagram */}
//       <a
//         href="https://www.instagram.com/kidi.webtech/"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="KIDIWEBTECH Instagram"
//         className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition"
//       >
//         <FaInstagram className="text-white text-lg" />
//       </a>

//       {/* Facebook */}
//       <a
//         href="https://www.facebook.com/profile.php?id=61585391203839"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="KIDIWEBTECH Facebook"
//         className="bg-[#1877F2] p-3 rounded-full hover:scale-110 transition"
//       >
//         <FaFacebookF className="text-white text-lg" />
//       </a>

//       {/* YouTube */}
//       <a
//         href="https://www.youtube.com/@KIDIWEBTECH"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="KIDIWEBTECH YouTube"
//         className="bg-[#FF0000] p-3 rounded-full hover:scale-110 transition"
//       >
//         <FaYoutube className="text-white text-lg" />
//       </a>

//       {/* LinkedIn */}
//       <a
//         href="https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="KIDIWEBTECH LinkedIn"
//         className="bg-[#0A66C2] p-3 rounded-full hover:scale-110 transition"
//       >
//         <FaLinkedinIn className="text-white text-lg" />
//       </a>

//       {/* Twitter / X */}
//       <a
//         href="https://x.com/kidiwebtech"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="KIDIWEBTECH Twitter X"
//         className="bg-black p-3 rounded-full hover:scale-110 transition border border-white/20"
//       >
//         <FaTwitter className="text-white text-lg" />
//       </a>

//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/919390627367"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="WhatsApp KIDIWEBTECH"
//         className="bg-[#25D366] p-3 rounded-full hover:scale-110 transition"
//       >
//         <FaWhatsapp className="text-white text-lg" />
//       </a>

//       {/* Call Button */}
//       <a
//         href="tel:+919390627367"
//         aria-label="Call KIDIWEBTECH"
//         className="bg-[#0f172a] p-3 rounded-full hover:scale-110 transition border border-white/20"
//       >
//         <FaPhoneAlt className="text-white text-lg" />
//       </a>

//     </div>
//   );
// }

"use client";

import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.instagram.com/kidi.webtech/",
    label: "KIDIWEBTECH Instagram",
    title: "Follow us on Instagram",
    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61585391203839",
    label: "KIDIWEBTECH Facebook",
    title: "Follow us on Facebook",
    bg: "bg-[#1877F2]",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.youtube.com/@KIDIWEBTECH",
    label: "KIDIWEBTECH YouTube",
    title: "Subscribe on YouTube",
    bg: "bg-[#FF0000]",
    icon: <FaYoutube />,
  },
  {
    href: "https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/",
    label: "KIDIWEBTECH LinkedIn",
    title: "Connect on LinkedIn",
    bg: "bg-[#0A66C2]",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://x.com/kidiwebtech",
    label: "KIDIWEBTECH Twitter X",
    title: "Follow on Twitter (X)",
    bg: "bg-black border border-white/20",
    icon: <FaTwitter />,
  },
  {
    href: "https://wa.me/919390627367?text=Hi%20I%20want%20digital%20marketing%20services",
    label: "WhatsApp KIDIWEBTECH",
    title: "Chat with us on WhatsApp",
    bg: "bg-[#25D366]",
    icon: <FaWhatsapp />,
  },
];

export default function FloatingSocialButtons() {
  return (
    <div
      className="fixed top-1/2 right-4 z-50 -translate-y-1/2 flex flex-col gap-3"
      role="navigation"
      aria-label="Social media links"
    >
      {/* SOCIAL ICONS */}
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={item.label}
          title={item.title}
          className={`${item.bg} p-3 rounded-full transition transform hover:scale-110 focus:scale-110 focus:outline-none`}
        >
          <span className="text-white text-lg">{item.icon}</span>
        </a>
      ))}

      {/* CALL BUTTON */}
      <a
        href="tel:+919390627367"
        aria-label="Call KIDIWEBTECH"
        title="Call Now"
        className="bg-[#0f172a] p-3 rounded-full hover:scale-110 transition border border-white/20"
      >
        <FaPhoneAlt className="text-white text-lg" />
      </a>
    </div>
  );
}
