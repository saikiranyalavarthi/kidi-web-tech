// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

// // const serviceLinks = [
// //   {
// //     name: "Pay Per Click Advertising",
// //     href: "/services/digital-marketing-company-hyderabad",
// //   },
// //   {
// //     name: "Search Engine Optimization",
// //     href: "/services/seo-services-hyderabad",
// //   },
// //   {
// //     name: "Social Media Marketing",
// //     href: "/services/social-media-company-hyderabad",
// //   },
// //   { name: "Web Designing", href: "/services/web-design-company-hyderabad" },
// //   {
// //     name: "Web Development",
// //     href: "/services/web-development-company-hyderabad",
// //   },
// //   { name: "Web Hosting", href: "/services/web-hosting-company-hyderabad" },
// // ];

// const serviceLinks = [
//   {
//     name: "Pay Per Click Advertising",
//     href: "/services/ppc-services-hyderabad",
//   },
//   {
//     name: "Search Engine Optimization",
//     href: "/services/seo-services-hyderabad",
//   },
//   {
//     name: "Local SEO Services",
//     href: "/services/local-seo-services-hyderabad",
//   },
//   {
//     name: "Technical SEO",
//     href: "/services/technical-seo-services",
//   },
//   {
//     name: "Social Media Marketing",
//     href: "/services/social-media-company-hyderabad",
//   },
//   {
//     name: "Instagram Marketing",
//     href: "/services/instagram-marketing",
//   },
//   {
//     name: "Google Ads Management",
//     href: "/services/google-ads-services",
//   },
//   {
//     name: "YouTube Marketing",
//     href: "/services/youtube-marketing-services",
//   },
//   {
//     name: "Video Marketing Services",
//     href: "/services/video-marketing-services",
//   },
//   {
//     name: "Web Designing",
//     href: "/services/web-design-company-hyderabad",
//   },
//   {
//     name: "UI/UX Design Services",
//     href: "/services/ui-ux-design-company",
//   },
//   {
//     name: "Web Development",
//     href: "/services/web-development-company-hyderabad",
//   },
//   {
//     name: "E-commerce Website Development",
//     href: "/services/ecommerce-website-development",
//   },
//   {
//     name: "Next.js Development",
//     href: "/services/nextjs-development",
//   },
//   {
//     name: "Landing Page Design",
//     href: "/services/landing-page-design",
//   },
//   {
//     name: "Web Hosting",
//     href: "/services/web-hosting-company-hyderabad",
//   },
//   {
//     name: "Cloud Hosting",
//     href: "/services/cloud-hosting",
//   },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           href="/"
//           className="text-2xl md:text-3xl font-extrabold gradient-text"
//         >
//           KIDIWEBTECH
//         </Link>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white p-3 min-h-[48px]"
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isOpen}
//           aria-controls="mobile-menu"
//         >
//           <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
//           {["Home", "About", "Projects", "Blogs"].map((item) => (
//             <li key={item}>
//               <Link
//                 href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                 className="gradient-text hover:opacity-80 transition"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}

//           {/* SERVICES */}
//           <li className="relative group">
//             <button className="flex items-center gap-1 gradient-text">
//               Services <ChevronDown size={16} />
//             </button>

//             <div
//               className="
//               absolute left-0 top-full mt-3 w-64
//               bg-black border border-white/10
//               shadow-xl
//               opacity-0 invisible
//               group-hover:opacity-100 group-hover:visible
//               transition
//             "
//             >
//               {serviceLinks.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="block px-5 py-3 text-sm gradient-text hover:bg-white/5 transition"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </li>

//           {/* WHATSAPP BUTTON */}
//           <li>
//             <a
//               href="https://wa.me/919390627367"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 flex items-center gap-2
//                 px-4 py-2 rounded-full
//                 bg-green-500 text-black font-semibold
//                 hover:bg-green-400 transition
//               "
//             >
//               <MessageCircle size={18} />
//               9390627367
//             </a>
//           </li>

//           {/* CTA */}
//           <li>
//             <Link
//               href="/contact"
//               className="
//                 px-6 py-2 rounded-full
//                 bg-gradient-to-r from-yellow-400 to-orange-500
//                 text-black font-semibold
//                 hover:opacity-90 transition
//               "
//             >
//               Get in Touch
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-4">
//           {["Home", "About", "Projects", "Blogs"].map((item) => (
//             <Link
//               key={item}
//               href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//               onClick={() => setIsOpen(false)}
//               className="block gradient-text"
//             >
//               {item}
//             </Link>
//           ))}

//           <details>
//             <summary className="flex items-center gap-1 cursor-pointer gradient-text">
//               Services <ChevronDown size={16} />
//             </summary>
//             <div className="mt-2 pl-4 space-y-2">
//               {serviceLinks.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="block gradient-text"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </details>

//           {/* MOBILE WHATSAPP */}
//           <a
//             href="https://wa.me/919390627367"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               flex items-center gap-2
//               mt-4 px-4 py-2 rounded-full
//               bg-green-500 text-black font-semibold
//             "
//           >
//             <MessageCircle size={18} />
//             WhatsApp: 9390627367
//           </a>

//           <Link
//             href="/contact"
//             onClick={() => setIsOpen(false)}
//             className="
//               inline-block mt-4 px-6 py-2 rounded-full
//               bg-gradient-to-r from-yellow-400 to-orange-500
//               text-black font-semibold
//             "
//           >
//             Get in Touch
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },

  // 🔹 MARKETING SERVICES
  {
    name: "Digital Marketing",
    href: "/digital-marketing-company",
    sub: [
      // 🔥 CORE SEO (GLOBAL)
      { name: "SEO Services", href: "/seo-services" },
      { name: "Technical SEO", href: "/technical-seo-services" },
      { name: "Ecommerce SEO", href: "/ecommerce-seo-services" },
      { name: "Enterprise SEO", href: "/enterprise-seo-services" },

      // 📍 LOCAL SEO (CITY TARGET)
      { name: "SEO Services Hyderabad", href: "/seo-services-hyderabad" },
      { name: "Local SEO Hyderabad", href: "/local-seo-services-hyderabad" },
      {
        name: "Google My Business Optimization",
        href: "/gmb-optimization-services",
      },

      // 🇮🇳 INDIA TARGETING
      { name: "SEO Services India", href: "/seo-services-india" },
      {
        name: "Digital Marketing Company India",
        href: "/digital-marketing-company-india",
      },

      // 🌍 GLOBAL TARGETING
      { name: "International SEO", href: "/international-seo-services" },
      {
        name: "Global Digital Marketing",
        href: "/global-digital-marketing-agency",
      },

      // 💰 PAID MARKETING
      { name: "Google Ads Services", href: "/google-ads-agency" },
      { name: "PPC Management Services", href: "/ppc-management-services" },
      { name: "Search Ads", href: "/search-ads-services" },
      // { name: "Display Advertising", href: "/display-advertising-services" },
      // { name: "YouTube Ads", href: "/youtube-ads-services" },

      // 📱 SOCIAL MEDIA
      //   {
      //     name: "Social Media Marketing",
      //     href: "/social-media-marketing-services",
      //   },
      //   { name: "Instagram Marketing", href: "/instagram-marketing-services" },
      //   { name: "Facebook Marketing", href: "/facebook-marketing-services" },
      //   { name: "LinkedIn Marketing", href: "/linkedin-marketing-services" },

      //   // 📈 GROWTH
      //   { name: "Lead Generation Services", href: "/lead-generation-services" },
      //   {
      //     name: "Conversion Rate Optimization",
      //     href: "/conversion-rate-optimization-services",
      //   },

      //   // ✍️ CONTENT
      //   { name: "Content Marketing", href: "/content-marketing-services" },
    ],
  },

  {
    name: "Development & Design",
    href: "/web-development-company",
    sub: [
      // 🌐 CORE DEVELOPMENT (GLOBAL)
      { name: "Website Development", href: "/website-development-services" },
      {
        name: "Custom Web Development",
        href: "/custom-web-development-services",
      },
      {
        name: "Ecommerce Website Development",
        href: "/ecommerce-development-services",
      },
      {
        name: "Landing Page Development",
        href: "/landing-page-development-services",
      },
      {
        name: "Website Maintenance Services",
        href: "/website-maintenance-services",
      },
      {
        name: "Web Design Company Hitech City",
        href: "/web-design-company-hitech-city",
      },
      {
        name: "Web Design Company Madhapur",
        href: "/web-design-company-madhapur",
      },
      {
        name: "Web Design Company Kukatpally",
        href: "/web-design-company-kukatpally",
      },
      {
        name: "Web Design Company Banjara Hills",
        href: "/web-design-company-banjara-hills",
      },
      {
        name: "Web Design Company Secunderabad",
        href: "/web-design-company-secunderabad",
      },
      // 📍 LOCAL (HYDERABAD TARGET)
      {
        name: "Web Development Company Hyderabad",
        href: "/services/web-development-company-hyderabad",
      },
      {
        name: "Website Design Company Hyderabad",
        href: "/services/website-design-company-hyderabad",
      },

      {
        name: "Web Development Company Hyderabad",
        href: "/services/web-development-company-hyderabad",
      },
      {
        name: "Website Design Company Hyderabad",
        href: "/services//website-design-company-hyderabad",
      },
      {
        name: "WordPress Development Company Hyderabad",
        href: "/services/wordpress-development-company-hyderabad",
      },

      {
        name: "React JS Development Services Hyderabad",
        href: "/services/react-js-development-services-hyderabad",
      },
      {
        name: "Next.js Development Services Hyderabad",
        href: "/services/nextjs-development-services-hyderabad",
      },
      {
        name: "Mobile App Development Hyderabad",
        href: "/services/mobile-app-development-hyderabad",
      },

      // 🇮🇳 INDIA TARGETING
      {
        name: "Web Development Company India",
        href: "/web-development-company-india",
      },
      {
        name: "Website Design Company India",
        href: "/website-design-company-india",
      },

      // 🌍 GLOBAL TARGETING
      {
        name: "Offshore Web Development",
        href: "/offshore-web-development-services",
      },
      {
        name: "Website Development Agency",
        href: "/website-development-agency",
      },

      // 🎨 UI/UX DESIGN
      // { name: "UI UX Design Services", href: "/ui-ux-design-services" },
      // { name: "Website Redesign Services", href: "/website-redesign-services" },
      // {
      //   name: "Mobile App UI UX Design",
      //   href: "/mobile-app-ui-ux-design-services",
      // },
      // { name: "Figma UI UX Design", href: "/figma-ui-ux-design-services" },

      // // ☁️ HOSTING & INFRA
      // { name: "Web Hosting Services", href: "/web-hosting-services" },
      // { name: "Cloud Hosting Services", href: "/cloud-hosting-services" },
      // {
      //   name: "Domain Registration & SSL",
      //   href: "/domain-registration-ssl-services",
      // },
    ],
  },
  // 🔹 ADVANCED SERVICES
  // 🔹 AI SERVICES (HIGH-DEMAND + FUTURE SEO)
  // {
  //   name: "AI Services",
  //   href: "/ai-development-company",
  //   sub: [
  //     // 🤖 CORE AI (GLOBAL)
  //     { name: "AI Development Services", href: "/ai-development-services" },
  //     {
  //       name: "Generative AI Solutions",
  //       href: "/generative-ai-development-services",
  //     },
  //     {
  //       name: "AI Chatbot Development",
  //       href: "/ai-chatbot-development-services",
  //     },
  //     {
  //       name: "Business Process Automation",
  //       href: "/business-automation-services",
  //     },
  //     { name: "AI Marketing Solutions", href: "/ai-marketing-solutions" },

  //     // 📍 LOCAL (HYDERABAD)
  //     {
  //       name: "AI Development Company Hyderabad",
  //       href: "/ai-development-company-hyderabad",
  //     },
  //     {
  //       name: "AI Chatbot Services Hyderabad",
  //       href: "/ai-chatbot-services-hyderabad",
  //     },

  //     // 🇮🇳 INDIA
  //     {
  //       name: "AI Development Company India",
  //       href: "/ai-development-company-india",
  //     },
  //     {
  //       name: "AI Automation Services India",
  //       href: "/ai-automation-services-india",
  //     },

  //     // 🌍 GLOBAL
  //     { name: "AI Consulting Services", href: "/ai-consulting-services" },
  //     { name: "AI Solutions Company", href: "/ai-solutions-company" },

  //     // 🎥 CREATIVE + AI COMBO (VERY TRENDING 🔥)
  //     { name: "Video Marketing Services", href: "/video-marketing-services" },
  //     {
  //       name: "Short Video Marketing",
  //       href: "/short-video-marketing-services",
  //     },
  //     { name: "VFX & Animation Services", href: "/vfx-animation-services" },
  //     { name: "Motion Graphics Services", href: "/motion-graphics-services" },
  //   ],
  // },

  // 🔹 INDUSTRIES (HIGH SEO TRAFFIC PAGES 💰)
  {
    name: "Industries",
    href: "/industries",
    sub: [
      {
        name: "Real Estate Digital Marketing",
        href: "/industries/real-estate-digital-marketing-services",
      },
      {
        name: "Healthcare Digital Marketing",
        href: "/industries/healthcare-digital-marketing-services",
      },
      {
        name: "Ecommerce Marketing Services",
        href: "/industries/ecommerce-marketing-services",
      },
      {
        name: "Education Marketing Services",
        href: "/industries/education-marketing-services",
      },
      {
        name: "Startup Digital Marketing",
        href: "/industries/startup-digital-marketing-services",
      },

      // 🔥 EXTRA HIGH-SEARCH INDUSTRIES
      {
        name: "Hospitality Marketing",
        href: "/industries/hospitality-digital-marketing-services",
      },
      {
        name: "Finance & Fintech Marketing",
        href: "/industries/fintech-digital-marketing-services",
      },
      {
        name: "SaaS Marketing",
        href: "/industries/saas-marketing-services",
      },
    ],
  },

  // // 🔹 RESOURCES (CONVERSION + TRUST BUILDING)
  // {
  //   name: "Resources",
  //   href: "/resources",
  //   sub: [
  //     { name: "Case Studies", href: "/case-studies" },
  //     { name: "Portfolio", href: "/portfolio" },
  //     { name: "Free SEO Audit", href: "/free-seo-audit" },
  //     { name: "Pricing Plans", href: "/pricing-plans" },
  //     { name: "FAQs", href: "/faqs" },

  //     // 🔥 SEO BLOG (VERY IMPORTANT 🚨)
  //     { name: "Digital Marketing Blog", href: "/blog" },
  //     { name: "SEO Guides", href: "/seo-guides" },
  //     { name: "AI Marketing Insights", href: "/ai-marketing-blog" },
  //   ],
  // },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/90
        backdrop-blur-xl
        border-b border-gray-100
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-4
          flex justify-between items-center
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            text-1xl md:text-1xl
            font-black
            tracking-tight
          "
        >
          <div className="flex items-center gap-3">
            <img
              src="/kidiwebtech-logo.png"
              alt="KIDIWEBTECH Logo"
              className="w-14 h-14 object-contain"
            />
          </div>
        </Link>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            md:hidden
            w-12 h-12
            rounded-2xl
            bg-[#f8fbff]
            border border-gray-100
            flex items-center justify-center
            text-[#0F172A]
          "
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center text-sm font-semibold">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.sub ? (
                  <>
                    {/* MENU BUTTON */}

                    <button
                      className="
                        flex items-center gap-1
                        text-[#0F172A]
                        hover:text-[#2563EB]
                        transition duration-300
                      "
                    >
                      {item.name}

                      <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN */}

                    <div
                      className="
                        absolute left-0 top-full mt-4
                        w-[320px]
                        bg-white
                        border border-gray-100
                        rounded-3xl
                        shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                        opacity-0 invisible
                        group-hover:opacity-100
                        group-hover:visible
                        transition-all duration-300
                        overflow-hidden
                        z-50
                      "
                    >
                      <div className="max-h-[420px] overflow-y-auto">
                        {item.sub.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="
                              block px-6 py-4
                              text-sm
                              text-gray-700
                              hover:bg-[#f8fbff]
                              hover:text-[#2563EB]
                              transition duration-300
                              border-b border-gray-50 last:border-none
                            "
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="
                      text-[#0F172A]
                      hover:text-[#2563EB]
                      transition duration-300
                    "
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}

          <Link
            href="/contact"
            className="
              ml-2
              px-6 py-3
              rounded-full
              bg-gradient-to-r
              from-[#2563EB]
              to-[#06B6D4]
              text-white
              font-bold
              shadow-[0_15px_40px_rgba(37,99,235,0.20)]
              hover:scale-105
              transition duration-300
            "
          >
            Get Free Audit
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div
          className="
            md:hidden
            bg-white
            border-t border-gray-100
            px-6 py-6
            space-y-5
            max-h-screen
            overflow-y-auto
          "
        >
          {navItems.map((item) => (
            <div key={item.name}>
              {item.sub ? (
                <details
                  className="
                    bg-[#f8fbff]
                    border border-gray-100
                    rounded-2xl
                    overflow-hidden
                  "
                >
                  <summary
                    className="
                      cursor-pointer
                      px-5 py-4
                      font-semibold
                      text-[#0F172A]
                      flex items-center justify-between
                    "
                  >
                    {item.name}
                  </summary>

                  <div className="px-5 pb-4 space-y-3">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="
                          block
                          text-sm
                          text-gray-600
                          hover:text-[#2563EB]
                          transition
                        "
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    block
                    px-5 py-4
                    rounded-2xl
                    bg-[#f8fbff]
                    border border-gray-100
                    text-[#0F172A]
                    font-semibold
                    hover:text-[#2563EB]
                    transition
                  "
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* MOBILE CTA */}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="
              flex items-center justify-center
              mt-6
              w-full h-14
              rounded-2xl
              bg-gradient-to-r
              from-[#2563EB]
              to-[#06B6D4]
              text-white
              font-bold
              shadow-xl
            "
          >
            Get Free Consultation
          </Link>

          {/* MOBILE WHATSAPP */}

          <a
            href="https://wa.me/919390627367"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2
              w-full h-14
              rounded-2xl
              bg-green-500
              text-black
              font-bold
            "
          >
            <MessageCircle size={20} />
            WhatsApp Chat
          </a>
        </div>
      )}
    </header>
  );
}
