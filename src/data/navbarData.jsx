import {
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Factory,
  Truck,
  Plane,
  Landmark,
  Rocket,
  Layers,
  TrendingUp,
  Code2,
  BookOpen,
  Search,
  Megaphone,
  Palette,
  Figma,
  Smartphone,
} from "lucide-react";

/* =========================================
   SERVICES MENU
========================================= */

export const servicesMenu = [
  {
    name: "SEO Services",
    href: "/seo-services",
    description: "Improve Google rankings and organic traffic.",
    icon: Search,
    sub: [
      { name: "SEO Services", href: "/seo-services" },
      { name: "Technical SEO", href: "/technical-seo-services" },
      { name: "Ecommerce SEO", href: "/ecommerce-seo-services" },
      { name: "Enterprise SEO", href: "/enterprise-seo-services" },
      { name: "SEO Services Hyderabad", href: "/seo-services-hyderabad" },
      { name: "Local SEO Hyderabad", href: "/local-seo-services-hyderabad" },
      {
        name: "Google My Business Optimization",
        href: "/gmb-optimization-services",
      },
      { name: "SEO Services India", href: "/seo-services-india" },
    ],
  },

  {
    name: "Web Development",
    href: "/web-development-company",
    description: "Professional websites and web applications.",
    icon: Code2,
    sub: [
      { name: "Website Development", href: "/website-development-services" },
      {
        name: "Custom Web Development",
        href: "/custom-web-development-services",
      },
      {
        name: "Ecommerce Development",
        href: "/ecommerce-development-services",
      },
      {
        name: "Landing Page Development",
        href: "/landing-page-development-services",
      },
      { name: "Website Maintenance", href: "/website-maintenance-services" },
      {
        name: "Web Development Company Hyderabad",
        href: "/services/web-development-company-hyderabad",
      },
      {
        name: "Website Design Company Hyderabad",
        href: "/services/website-design-company-hyderabad",
      },
      {
        name: "WordPress Development Hyderabad",
        href: "/services/wordpress-development-company-hyderabad",
      },
      {
        name: "React JS Development Hyderabad",
        href: "/services/react-js-development-services-hyderabad",
      },
      {
        name: "Next.js Development Hyderabad",
        href: "/services/nextjs-development-services-hyderabad",
      },
      {
        name: "Mobile App Development Hyderabad",
        href: "/services/mobile-app-development-hyderabad",
      },
      {
        name: "Web Design Hitech City",
        href: "/web-design-company-hitech-city",
      },
      { name: "Web Design Madhapur", href: "/web-design-company-madhapur" },
      { name: "Web Design Kukatpally", href: "/web-design-company-kukatpally" },
      {
        name: "Web Design Banjara Hills",
        href: "/web-design-company-banjara-hills",
      },
      {
        name: "Web Design Secunderabad",
        href: "/web-design-company-secunderabad",
      },
      {
        name: "Web Development Company India",
        href: "/web-development-company-india",
      },
      {
        name: "Website Design Company India",
        href: "/website-design-company-india",
      },
      {
        name: "Offshore Web Development",
        href: "/offshore-web-development-services",
      },
      {
        name: "Website Development Agency",
        href: "/website-development-agency",
      },
    ],
  },

  {
    name: "Logo Design",
    href: "/logo-design-services",
    description: "Creative logos and professional brand identity.",
    icon: Palette,
  },

  {
    name: "UI/UX Design",
    href: "/ui-ux-design-services",
    description: "Modern, user-friendly website and app experiences.",
    icon: Figma,
  },

  {
    name: "Google Ads & PPC",
    href: "/google-ads-agency",
    description: "Generate leads through paid advertising campaigns.",
    icon: Megaphone,
    sub: [
      { name: "Google Ads Services", href: "/google-ads-agency" },
      { name: "PPC Management", href: "/ppc-management-services" },
      { name: "Search Ads Services", href: "/search-ads-services" },
    ],
  },
];

/* =========================================
   MAIN NAVIGATION
========================================= */

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/digital-marketing-company",
    sub: servicesMenu,
  },
  {
    name: "Industries",
    href: "/industries",
    sub: [
      {
        name: "Real Estate",
        href: "/industries/real-estate-digital-marketing-services",
      },
      {
        name: "Healthcare",
        href: "/industries/healthcare-digital-marketing-services",
      },
      { name: "Ecommerce", href: "/industries/ecommerce-marketing-services" },
      { name: "Education", href: "/industries/education-marketing-services" },
      {
        name: "Startups",
        href: "/industries/startup-digital-marketing-services",
      },
      {
        name: "Hospitality",
        href: "/industries/hospitality-digital-marketing-services",
      },
      {
        name: "Fintech",
        href: "/industries/fintech-digital-marketing-services",
      },
      { name: "SaaS", href: "/industries/saas-marketing-services" },
    ],
  },
  { name: "Projects", href: "/projects" },
  {
    name: "Corporate Training",
    href: "/corporate-training",
    sub: [
      { name: "All Training Programs", href: "/corporate-training" },
      {
        name: "IT Audit / SOX Training",
        href: "/corporate-training/it-audit-sox-training",
      },
      {
        name: "DevOps with Azure",
        href: "/corporate-training/devops-with-azure",
      },
      {
        name: "IT Technical Certifications",
        href: "/corporate-training/it-technical-certifications",
      },
      {
        name: "Website Development Training",
        href: "/corporate-training/website-development-training",
      },
      {
        name: "Digital Marketing Training",
        href: "/corporate-training/digital-marketing-training",
      },
      {
        name: "CV, Resume & Interview Preparation",
        href: "/corporate-training/cv-resume-interview-preparation",
      },
    ],
  },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

/* =========================================
   INDUSTRY CARDS
========================================= */

export const industryCards = [
  {
    name: "Real Estate",
    href: "/industries/real-estate-digital-marketing-services",
    icon: Building2,
  },
  {
    name: "Retail & Ecommerce",
    href: "/industries/ecommerce-marketing-services",
    icon: ShoppingCart,
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare-digital-marketing-services",
    icon: HeartPulse,
  },
  {
    name: "Education",
    href: "/industries/education-marketing-services",
    icon: GraduationCap,
  },
  {
    name: "Manufacturing",
    href: "/industries",
    icon: Factory,
  },
  {
    name: "Logistics",
    href: "/industries",
    icon: Truck,
  },
  {
    name: "Travel & Hospitality",
    href: "/industries/hospitality-digital-marketing-services",
    icon: Plane,
  },
  {
    name: "Fintech",
    href: "/industries/fintech-digital-marketing-services",
    icon: Landmark,
  },
  {
    name: "Startups",
    href: "/industries/startup-digital-marketing-services",
    icon: Rocket,
  },
  {
    name: "SaaS",
    href: "/industries/saas-marketing-services",
    icon: Layers,
  },
];

/* =========================================
   MENU ICONS
========================================= */

export const menuIcons = {
  Services: TrendingUp,
  Industries: Building2,
  "Corporate Training": BookOpen,
};

/* =========================================
   MENU DESCRIPTIONS
========================================= */

export const menuDescriptions = {
  Services: "Digital services to build, promote and grow your business.",
  Industries: "Marketing and technology solutions for different industries.",
  "Corporate Training":
    "Professional training programs for teams and individuals.",
};
