// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const services = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     icon: "🚀",
//     title: "SEO Services",
//     desc: "Improve Google search visibility, attract relevant organic traffic, and generate qualified enquiries with technical SEO, on-page optimization, and content strategies.",
//     link: "/seo-services-hyderabad",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop",
//     icon: "💻",
//     title: "Website Development",
//     desc: "Get a fast, responsive, SEO-friendly business website or custom web application built to showcase your services and convert visitors into potential customers.",
//     link: "/website-development-services",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     icon: "📱",
//     title: "Mobile App Development",
//     desc: "Build Android and iOS mobile applications with intuitive experiences, reliable functionality, and scalable solutions for startups and established businesses.",
//     link: "/services/mobile-app-development-hyderabad",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop",
//     icon: "📈",
//     title: "Google Ads & PPC Management",
//     desc: "Reach customers actively searching for your services through targeted Google Ads campaigns designed to increase relevant enquiries and support measurable business growth.",
//     link: "/ppc-management-services",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop",
//     icon: "🎯",
//     title: "Social Media Marketing",
//     desc: "Strengthen your brand presence, connect with your target audience, and promote your products and services through strategic social media campaigns.",
//     link: "/seo-services-india",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1677693972403-db681288b5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     icon: "🛒",
//     title: "Ecommerce Website Development",
//     desc: "Launch an online store with mobile-friendly shopping, product pages, streamlined checkout, and a user experience designed to support more sales.",
//     link: "/ecommerce-development-services",
//   },
// ];
// const features = [
//   "SEO Optimization",
//   "Website Design",
//   "App Development",
//   "Google Ads",
//   "Social Media",
//   "Lead Generation",
// ];

// export default function ServicesSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f9ff] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
//       {/* Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 -top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-[100px] sm:h-[350px] sm:w-[350px]" />
//         <div className="absolute -bottom-20 -right-32 h-64 w-64 rounded-full bg-cyan-200/30 blur-[100px] sm:h-[350px] sm:w-[350px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mx-auto max-w-4xl text-center">
//           <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-sm sm:px-5">
//             🚀 Our Services
//           </div>

//           <h2 className="mx-auto mt-5 max-w-4xl text-[30px] font-black leading-[1.15] tracking-tight text-[#0F172A] sm:mt-7 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
//             Website Development, SEO & Digital Marketing That Generate Leads
//           </h2>

//           <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
//             KidiWebTech helps businesses strengthen their online presence
//             through professional website development, search engine
//             optimization, mobile app development, Google Ads, and digital
//             marketing. Based in Hyderabad, India, we work with businesses across
//             India and international markets, including the USA, UK, UAE, and
//             Saudi Arabia. Our goal is to help you attract relevant visitors,
//             generate qualified enquiries, and grow your business online.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
//           {services.map((service, index) => (
//             <article
//               key={service.title}
//               className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)] sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-8"
//             >
//               {/* Image */}
//               <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl sm:h-48 lg:mb-6">
//                 <Image
//                   src={service.image}
//                   alt={`${service.title} by KidiWebTech`}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/50 to-transparent" />
//               </div>

//               {/* Icon */}
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 sm:rounded-3xl sm:text-3xl">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="mt-5 text-xl font-black leading-snug text-[#0F172A] sm:mt-6 sm:text-2xl">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 flex-grow text-[14px] leading-7 text-gray-600 sm:mt-4 sm:text-[15px] sm:leading-8">
//                 {service.desc}
//               </p>

//               {/* Link */}
//               <Link
//                 href={service.link}
//                 className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-bold text-[#2563EB] transition-all duration-300 hover:gap-3 sm:mt-7 sm:text-base"
//               >
//                 Explore Service
//                 <span aria-hidden="true">→</span>
//               </Link>

//               {/* Bottom hover line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />
//             </article>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-12 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#2563EB] to-[#06B6D4] p-6 text-white shadow-[0_25px_70px_rgba(37,99,235,0.20)] sm:mt-16 sm:rounded-[32px] sm:p-9 md:p-12 lg:mt-24 lg:rounded-[40px] lg:p-14">
//           <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
//             {/* CTA Content */}
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[3px] text-white/80 sm:text-sm sm:tracking-[4px]">
//                 GROW YOUR BUSINESS
//               </p>

//               <h3 className="mt-4 text-3xl font-black leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
//                 Ready to Get More Customers Online?
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
//                 Tell us about your business goals. We will help you explore the
//                 right website, SEO, and digital marketing solutions for your
//                 target audience and budget.
//               </p>

//               <Link
//                 href="/contact"
//                 className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#2563EB] shadow-lg transition-all duration-300 hover:scale-105 sm:mt-8 sm:w-fit sm:px-8 sm:text-base"
//               >
//                 Get a Free Quote
//                 <span aria-hidden="true">→</span>
//               </Link>
//             </div>

//             {/* Features */}
//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               {features.map((item) => (
//                 <div
//                   key={item}
//                   className="flex min-h-[62px] items-center justify-center rounded-xl border border-white/15 bg-white/10 px-2 py-3 text-center text-xs font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:min-h-[75px] sm:rounded-2xl sm:px-4 sm:text-sm md:text-base"
//                 >
//                   <span className="mr-1.5 text-white">✓</span>
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Search,
  Code2,
  Smartphone,
  Megaphone,
  Share2,
  ShoppingCart,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "SEO Services",
    tag: "Organic Growth",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1000&q=85",
    desc: "Improve Google search visibility, attract relevant organic traffic, and generate qualified enquiries with technical SEO, on-page optimization, and content strategies.",
    link: "/seo-services-hyderabad",
  },
  {
    number: "02",
    title: "Website Development",
    tag: "Web Solutions",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=85",
    desc: "Get a fast, responsive, SEO-friendly business website or custom web application built to showcase your services and convert visitors into potential customers.",
    link: "/website-development-services",
  },
  {
    number: "03",
    title: "Mobile App Development",
    tag: "Mobile Technology",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=85",
    desc: "Build Android and iOS mobile applications with intuitive experiences, reliable functionality, and scalable solutions for startups and established businesses.",
    link: "/services/mobile-app-development-hyderabad",
  },
  {
    number: "04",
    title: "Google Ads & PPC Management",
    tag: "Paid Advertising",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85",
    desc: "Reach customers actively searching for your services through targeted Google Ads campaigns designed to increase relevant enquiries and support measurable business growth.",
    link: "/ppc-management-services",
  },
  {
    number: "05",
    title: "Social Media Marketing",
    tag: "Brand Engagement",
    icon: Share2,
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1000&q=85",
    desc: "Strengthen your brand presence, connect with your target audience, and promote your products and services through strategic social media campaigns.",
    link: "/seo-services-india",
  },
  {
    number: "06",
    title: "Ecommerce Website Development",
    tag: "Online Business",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1677693972403-db681288b5da?w=1000&q=85",
    desc: "Launch an online store with mobile-friendly shopping, product pages, streamlined checkout, and a user experience designed to support more sales.",
    link: "/ecommerce-development-services",
  },
];

const features = [
  "SEO Optimization",
  "Website Design",
  "App Development",
  "Google Ads",
  "Social Media",
  "Lead Generation",
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f9ff] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-[100px] sm:h-[350px] sm:w-[350px]" />

        <div className="absolute -bottom-20 -right-32 h-64 w-64 rounded-full bg-cyan-200/30 blur-[100px] sm:h-[350px] sm:w-[350px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#2563EB] shadow-sm sm:px-5">
            <Sparkles size={16} />
            Our Services
          </div>

          <h2 className="mx-auto mt-5 text-[30px] font-black leading-[1.15] tracking-tight text-[#0F172A] sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.05]">
            Website Development, SEO & Digital Marketing That Generate Leads
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            KidiWebTech helps businesses strengthen their online presence
            through professional website development, search engine
            optimization, mobile app development, Google Ads, and digital
            marketing. Based in Hyderabad, India, we work with businesses across
            India and international markets, including the USA, UK, UAE, and
            Saudi Arabia. Our goal is to help you attract relevant visitors,
            generate qualified enquiries, and grow your business online.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_70px_rgba(37,99,235,0.13)] sm:rounded-[28px] lg:rounded-[32px]"
              >
                {/* IMAGE */}
                <div className="relative h-52 w-full overflow-hidden sm:h-48 lg:h-52">
                  <Image
                    src={service.image}
                    alt={`${service.title} by KidiWebTech`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-[#07111F]/10 to-transparent" />

                  {/* NUMBER */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-sm font-black text-white shadow-lg backdrop-blur-md">
                    {service.number}
                  </div>

                  {/* SERVICE TAG */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      {service.tag}
                    </span>
                  </div>

                  {/* TOP ARROW */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-lg transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                  {/* PREMIUM ICON */}
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-lg shadow-blue-500/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-blue-500/30 sm:h-16 sm:w-16 sm:rounded-3xl">
                    <ServiceIcon
                      size={30}
                      strokeWidth={1.8}
                      className="transition-transform duration-500 group-hover:rotate-6 sm:h-9 sm:w-9"
                    />

                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-cyan-300" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-black leading-snug text-[#0F172A] sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
                    {service.desc}
                  </p>

                  {/* EXPLORE LINK */}
                  <Link
                    href={service.link}
                    className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-bold text-[#2563EB] transition-all duration-300 hover:gap-4 sm:mt-6 sm:text-base"
                  >
                    Explore Service
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>

                  {/* BOTTOM HOVER LINE */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA SECTION */}
        <div className="relative mt-12 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#2563EB] to-[#06B6D4] p-6 text-white shadow-[0_25px_70px_rgba(37,99,235,0.20)] sm:mt-16 sm:rounded-[32px] sm:p-9 md:p-12 lg:mt-24 lg:rounded-[40px] lg:p-14">
          {/* GLOW */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[100px] sm:h-[320px] sm:w-[320px]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-white/80 sm:text-sm sm:tracking-[4px]">
                GROW YOUR BUSINESS
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
                Ready to Get More Customers Online?
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                Tell us about your business goals. We will help you explore the
                right website, SEO, and digital marketing solutions for your
                target audience and budget.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#2563EB] shadow-lg transition-all duration-300 hover:scale-105 sm:mt-8 sm:w-fit sm:px-8 sm:text-base"
              >
                Get a Free Quote
                <ArrowUpRight size={19} />
              </Link>
            </div>

            {/* RIGHT FEATURES */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[62px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-2 py-3 text-center text-xs font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:min-h-[75px] sm:rounded-2xl sm:px-4 sm:text-sm md:text-base"
                >
                  <Check size={17} className="shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
