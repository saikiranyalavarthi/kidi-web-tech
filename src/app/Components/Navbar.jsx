"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  Monitor,
  Code2,
  Palette,
  PenTool,
  Globe,
  ShoppingBag,
  ShoppingCart,
  Search,
  Megaphone,
  Smartphone,
  Settings,
  Figma,
  Store,
  Bot,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },

  {
    name: "Services",
    href: "/digital-marketing-company",
    sub: [
      {
        name: "Graphic Design",
        href: "/graphic-design-services",
        icon: Palette,
      },
      {
        name: "Logo Design",
        href: "/logo-design-services",
        icon: PenTool,
      },

      {
        name: "Digital Marketing",
        href: "/digital-marketing-services",
        icon: Megaphone,
      },

      {
        name: "UI/UX Design",
        href: "/ui-ux-design-services",
        icon: Figma,
      },

      {
        name: "AI Automation",
        href: "/ai-automation",
        icon: Bot,
      },
    ],
  },

  // 🔹 MARKETING SERVICES
  {
    name: "Digital Marketing",
    href: "/digital-marketing-company",
    sub: [
      // 🔥 CORE SEO (GLOBAL)

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
  //   {
  //   name: "Case Studies",
  //   href: "/case-studies",
  // },

  {
    name: "Corporate Training",
    href: "/corporate-training",
    sub: [
      {
        name: "All Training Programs",
        href: "/corporate-training",
      },
      {
        name: "IT Audit / SOX Training",
        href: "/corporate-training/it-audit-sox-training",
      },
      {
        name: "DevOps with Azure Training",
        href: "/corporate-training/devops-with-azure",
      },

      {
        name: "IT Technical Certifications",
        href: "/corporate-training/it-technical-certifications",
      },
    ],
  },
  { name: "Blogs", href: "/blog" },

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
              alt="KIDIWEBTECH"
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

          {/* <Link
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
          </Link> */}
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

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// import {
//   ChevronDown,
//   Menu,
//   X,
//   MessageCircle,
//   Building2,
//   ShoppingCart,
//   HeartPulse,
//   GraduationCap,
//   Factory,
//   Truck,
//   Plane,
//   Landmark,
//   Rocket,
//   Layers,
//   Search,
//   Code2,
//   Globe,
//   Smartphone,
//   BookOpen,
//   Cloud,
//   BriefcaseBusiness,
//   TrendingUp,
// } from "lucide-react";

// /* =========================================================
//    NAVIGATION DATA
// ========================================================= */

// const navItems = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "About Us",
//     href: "/about",
//   },

//   // DIGITAL MARKETING
//   {
//     name: "Digital Marketing",
//     href: "/digital-marketing-company",
//     sub: [
//       {
//         name: "SEO Services",
//         href: "/seo-services",
//       },
//       {
//         name: "Technical SEO",
//         href: "/technical-seo-services",
//       },
//       {
//         name: "Ecommerce SEO",
//         href: "/ecommerce-seo-services",
//       },
//       {
//         name: "Enterprise SEO",
//         href: "/enterprise-seo-services",
//       },
//       {
//         name: "SEO Services Hyderabad",
//         href: "/seo-services-hyderabad",
//       },
//       {
//         name: "Local SEO Hyderabad",
//         href: "/local-seo-services-hyderabad",
//       },
//       {
//         name: "Google My Business Optimization",
//         href: "/gmb-optimization-services",
//       },
//       {
//         name: "SEO Services India",
//         href: "/seo-services-india",
//       },
//       {
//         name: "Google Ads Services",
//         href: "/google-ads-agency",
//       },
//       {
//         name: "PPC Management Services",
//         href: "/ppc-management-services",
//       },
//       {
//         name: "Search Ads",
//         href: "/search-ads-services",
//       },
//     ],
//   },

//   // DEVELOPMENT & DESIGN
//   {
//     name: "Development & Design",
//     href: "/web-development-company",
//     sub: [
//       {
//         name: "Website Development",
//         href: "/website-development-services",
//       },
//       {
//         name: "Custom Web Development",
//         href: "/custom-web-development-services",
//       },
//       {
//         name: "Ecommerce Website Development",
//         href: "/ecommerce-development-services",
//       },
//       {
//         name: "Landing Page Development",
//         href: "/landing-page-development-services",
//       },
//       {
//         name: "Website Maintenance Services",
//         href: "/website-maintenance-services",
//       },
//       {
//         name: "Web Design Company Hitech City",
//         href: "/web-design-company-hitech-city",
//       },
//       {
//         name: "Web Design Company Madhapur",
//         href: "/web-design-company-madhapur",
//       },
//       {
//         name: "Web Design Company Kukatpally",
//         href: "/web-design-company-kukatpally",
//       },
//       {
//         name: "Web Design Company Banjara Hills",
//         href: "/web-design-company-banjara-hills",
//       },
//       {
//         name: "Web Design Company Secunderabad",
//         href: "/web-design-company-secunderabad",
//       },
//       {
//         name: "Web Development Company Hyderabad",
//         href: "/services/web-development-company-hyderabad",
//       },
//       {
//         name: "Website Design Company Hyderabad",
//         href: "/services/website-design-company-hyderabad",
//       },
//       {
//         name: "WordPress Development Company Hyderabad",
//         href: "/services/wordpress-development-company-hyderabad",
//       },
//       {
//         name: "React JS Development Services Hyderabad",
//         href: "/services/react-js-development-services-hyderabad",
//       },
//       {
//         name: "Next.js Development Services Hyderabad",
//         href: "/services/nextjs-development-services-hyderabad",
//       },
//       {
//         name: "Mobile App Development Hyderabad",
//         href: "/services/mobile-app-development-hyderabad",
//       },
//       {
//         name: "Web Development Company India",
//         href: "/web-development-company-india",
//       },
//       {
//         name: "Website Design Company India",
//         href: "/website-design-company-india",
//       },
//       {
//         name: "Offshore Web Development",
//         href: "/offshore-web-development-services",
//       },
//       {
//         name: "Website Development Agency",
//         href: "/website-development-agency",
//       },
//     ],
//   },

//   // INDUSTRIES
//   {
//     name: "Industries",
//     href: "/industries",
//     sub: [
//       {
//         name: "Real Estate Digital Marketing",
//         href: "/industries/real-estate-digital-marketing-services",
//       },
//       {
//         name: "Healthcare Digital Marketing",
//         href: "/industries/healthcare-digital-marketing-services",
//       },
//       {
//         name: "Ecommerce Marketing Services",
//         href: "/industries/ecommerce-marketing-services",
//       },
//       {
//         name: "Education Marketing Services",
//         href: "/industries/education-marketing-services",
//       },
//       {
//         name: "Startup Digital Marketing",
//         href: "/industries/startup-digital-marketing-services",
//       },
//       {
//         name: "Hospitality Marketing",
//         href: "/industries/hospitality-digital-marketing-services",
//       },
//       {
//         name: "Finance & Fintech Marketing",
//         href: "/industries/fintech-digital-marketing-services",
//       },
//       {
//         name: "SaaS Marketing",
//         href: "/industries/saas-marketing-services",
//       },
//     ],
//   },

//   // PROJECTS
//   {
//     name: "Projects",
//     href: "/projects",
//   },

//   // CORPORATE TRAINING
//   {
//     name: "Corporate Training",
//     href: "/corporate-training",
//     sub: [
//       {
//         name: "All Training Programs",
//         href: "/corporate-training",
//       },
//       {
//         name: "IT Audit / SOX Training",
//         href: "/corporate-training/it-audit-sox-training",
//       },
//       {
//         name: "DevOps with Azure Training",
//         href: "/corporate-training/devops-with-azure",
//       },
//       {
//         name: "IT Technical Certifications",
//         href: "/corporate-training/it-technical-certifications",
//       },
//       {
//         name: "Website Development Training",
//         href: "/corporate-training/website-development-training",
//       },
//       {
//         name: "Digital Marketing Training",
//         href: "/corporate-training/digital-marketing-training",
//       },
//       {
//         name: "CV, Resume & Interview Preparation",
//         href: "/corporate-training/cv-resume-interview-preparation",
//       },
//     ],
//   },
//   // BLOGS
//   {
//     name: "Blogs",
//     href: "/blog",
//   },

//   // CONTACT
//   {
//     name: "Contact",
//     href: "/contact",
//   },
// ];

// /* =========================================================
//    INDUSTRY CARDS
// ========================================================= */

// const industryCards = [
//   {
//     name: "Real Estate",
//     href: "/industries/real-estate-digital-marketing-services",
//     icon: Building2,
//   },
//   {
//     name: "Retail & E-commerce",
//     href: "/industries/ecommerce-marketing-services",
//     icon: ShoppingCart,
//   },
//   {
//     name: "Healthcare",
//     href: "/industries/healthcare-digital-marketing-services",
//     icon: HeartPulse,
//   },
//   {
//     name: "Education",
//     href: "/industries/education-marketing-services",
//     icon: GraduationCap,
//   },
//   {
//     name: "Manufacturing",
//     href: "/industries",
//     icon: Factory,
//   },
//   {
//     name: "Logistics & Supply Chain",
//     href: "/industries",
//     icon: Truck,
//   },
//   {
//     name: "Travel & Tourism",
//     href: "/industries/hospitality-digital-marketing-services",
//     icon: Plane,
//   },
//   {
//     name: "Banking & Financial Services",
//     href: "/industries/fintech-digital-marketing-services",
//     icon: Landmark,
//   },
//   {
//     name: "Startups & SMEs",
//     href: "/industries/startup-digital-marketing-services",
//     icon: Rocket,
//   },
//   {
//     name: "Enterprise & Corporate",
//     href: "/industries/saas-marketing-services",
//     icon: Layers,
//   },
// ];

// /* =========================================================
//    MENU ICONS
// ========================================================= */

// const menuIcons = {
//   "Digital Marketing": TrendingUp,
//   "Development & Design": Code2,
//   "Corporate Training": BookOpen,
// };

// /* =========================================================
//    NAVBAR COMPONENT
// ========================================================= */

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const headerRef = useRef(null);

//   /* CLOSE MENU ON OUTSIDE CLICK AND ESCAPE */

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (headerRef.current && !headerRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };

//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setActiveDropdown(null);
//         setMobileOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   /* TOGGLE DROPDOWN */

//   const toggleDropdown = (name) => {
//     setActiveDropdown((current) => (current === name ? null : name));
//   };

//   const activeItem = navItems.find((item) => item.name === activeDropdown);

//   const isIndustries = activeDropdown === "Industries";

//   const ActiveIcon = menuIcons[activeDropdown] || Globe;

//   /* =========================================================
//      RENDER
//   ========================================================= */

//   return (
//     <header
//       ref={headerRef}
//       className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100"
//     >
//       {/* MAIN NAVBAR */}
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* LOGO */}
//         <Link
//           href="/"
//           onClick={() => {
//             setActiveDropdown(null);
//             setMobileOpen(false);
//           }}
//           aria-label="KidiWebTech Home"
//           className="shrink-0"
//         >
//           <img
//             src="/kidiwebtech-logo.png"
//             alt="KidiWebTech"
//             className="w-14 h-14 object-contain"
//           />
//         </Link>

//         {/* MOBILE BUTTON */}
//         <button
//           type="button"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label={
//             mobileOpen ? "Close navigation menu" : "Open navigation menu"
//           }
//           aria-expanded={mobileOpen}
//           className="md:hidden w-12 h-12 rounded-2xl bg-[#f8fbff] border border-gray-100 flex items-center justify-center text-[#0F172A]"
//         >
//           {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* DESKTOP NAVIGATION */}
//         <div className="hidden md:flex items-center gap-8">
//           <ul className="flex gap-7 items-center text-sm font-semibold">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 {item.sub ? (
//                   <button
//                     type="button"
//                     onClick={() => toggleDropdown(item.name)}
//                     aria-expanded={activeDropdown === item.name}
//                     className={`flex items-center gap-2 transition duration-300 ${
//                       activeDropdown === item.name
//                         ? "text-blue-600"
//                         : "text-[#0F172A] hover:text-blue-600"
//                     }`}
//                   >
//                     {item.name}

//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-300 ${
//                         activeDropdown === item.name ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     onClick={() => setActiveDropdown(null)}
//                     className="text-[#0F172A] hover:text-blue-600 transition duration-300"
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* DESKTOP CTA */}
//           {/*
//         <Link
//           href="/contact"
//           className="ml-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold shadow-lg hover:scale-105 transition duration-300"
//         >
//           Get Free Audit
//         </Link>
//         */}
//         </div>
//       </div>

//       {/* UNIVERSAL FULL WIDTH MEGA MENU */}
//       <div
//         className={`absolute left-0 top-full w-full bg-[#f8f7f2] border-t border-gray-200 shadow-2xl transition-all duration-300 ${
//           activeDropdown
//             ? "visible opacity-100 translate-y-0"
//             : "invisible opacity-0 -translate-y-3 pointer-events-none"
//         }`}
//       >
//         <div className="mx-auto max-w-7xl px-6 py-10">
//           {/* MEGA MENU HEADING */}
//           <div className="mb-8">
//             <div className="flex items-center gap-3">
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f1ec] text-emerald-800">
//                 {isIndustries ? (
//                   <Building2 size={23} />
//                 ) : (
//                   <ActiveIcon size={23} />
//                 )}
//               </span>

//               <div>
//                 <h2 className="mt-1 text-2xl font-bold text-slate-800 md:text-3xl">
//                   {isIndustries
//                     ? "One technology partner. Multiple industries."
//                     : `${activeDropdown} Services`}
//                 </h2>
//               </div>
//             </div>
//           </div>

//           {/* INDUSTRIES MEGA MENU */}
//           {isIndustries ? (
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//               {industryCards.map((industry) => {
//                 const Icon = industry.icon;

//                 return (
//                   <Link
//                     key={industry.name}
//                     href={industry.href}
//                     onClick={() => setActiveDropdown(null)}
//                     className="group flex min-h-[100px] items-center gap-4 rounded-2xl border border-[#e8e5dc] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
//                   >
//                     <span className="text-sm font-semibold leading-6 text-slate-700 transition-colors group-hover:text-emerald-800">
//                       {industry.name}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </div>
//           ) : (
//             /* ALL OTHER MEGA MENUS */
//             <div
//               className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${
//                 activeDropdown === "Development & Design"
//                   ? "lg:grid-cols-4 max-h-[290px] overflow-y-auto pr-2"
//                   : "lg:grid-cols-4"
//               }`}
//             >
//               {activeItem?.sub?.map((sub, index) => (
//                 <Link
//                   key={`${sub.href}-${index}`}
//                   href={sub.href}
//                   onClick={() => setActiveDropdown(null)}
//                   className="group flex min-h-[75px] items-center justify-between gap-3 rounded-2xl border border-[#e8e5dc] bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
//                 >
//                   <span className="text-sm font-semibold leading-5 text-slate-700 transition-colors group-hover:text-blue-700">
//                     {sub.name}
//                   </span>

//                   <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
//                     <ChevronDown size={17} className="-rotate-90" />
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* BOTTOM LINK */}
//           {/* <div className="mt-8 flex justify-end">
//             <Link
//               href={activeItem?.href || "/"}
//               onClick={() => setActiveDropdown(null)}
//               className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-600 transition"
//             >
//               Explore All {activeDropdown}
//               <span aria-hidden="true">→</span>
//             </Link>
//           </div> */}
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-5 max-h-[85vh] overflow-y-auto">
//           {navItems.map((item) => (
//             <div key={item.name}>
//               {item.sub ? (
//                 <details className="bg-[#f8fbff] border border-gray-100 rounded-2xl overflow-hidden">
//                   <summary className="cursor-pointer px-5 py-4 font-semibold text-[#0F172A] flex items-center justify-between">
//                     {item.name}
//                     <ChevronDown size={18} />
//                   </summary>

//                   <div className="px-5 pb-4 space-y-3">
//                     {item.sub.map((sub, index) => (
//                       <Link
//                         key={`${sub.href}-${index}`}
//                         href={sub.href}
//                         onClick={() => setMobileOpen(false)}
//                         className="block text-sm text-gray-600 hover:text-[#2563EB] transition"
//                       >
//                         {sub.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </details>
//               ) : (
//                 <Link
//                   href={item.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-4 rounded-2xl bg-[#f8fbff] border border-gray-100 text-[#0F172A] font-semibold hover:text-[#2563EB] transition"
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* MOBILE CTA */}
//           <Link
//             href="/contact"
//             onClick={() => setMobileOpen(false)}
//             className="flex items-center justify-center mt-6 w-full h-14 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold shadow-xl"
//           >
//             Get Free Consultation
//           </Link>

//           {/* MOBILE WHATSAPP */}
//           <a
//             href="https://wa.me/919390627367"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 w-full h-14 rounded-2xl bg-green-500 text-white font-bold"
//           >
//             <MessageCircle size={20} />
//             WhatsApp Chat
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }
