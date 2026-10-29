// // "use client";

// // import Link from "next/link";

// // export default function HeroSection() {
// //   return (
// //     <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f9ff] pt-6 pb-6 px-6">
// //       {/* BACKGROUND EFFECTS */}

// //       <div className="absolute inset-0 overflow-hidden">
// //         <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-200/40 blur-[140px] rounded-full"></div>

// //         <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-200/40 blur-[140px] rounded-full"></div>

// //         <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-purple-200/20 blur-[120px] rounded-full"></div>
// //       </div>

// //       <div className="relative max-w-7xl mx-auto">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           {/* LEFT CONTENT */}

// //           <div>
// //             {/* BADGE */}

// //             <div
// //               className="
// //                 inline-flex items-center gap-2
// //                 px-5 py-2
// //                 rounded-full
// //                 bg-white
// //                 border border-blue-100
// //                 shadow-md
// //               "
// //             >
// //               <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>

// //               <span className="text-sm font-semibold text-[#2563EB]">
// //                 Trusted Website Design & Development Company In Hyderabad
// //               </span>
// //             </div>

// //             {/* HEADING */}

// //             <h1
// //               className="
// //                 mt-8
// //                 text-4xl sm:text-5xl md:text-6xl
// //                 font-black
// //                 leading-[1.05]
// //                 tracking-tight
// //                 text-[#0F172A]
// //                 max-w-4xl
// //               "
// //             >
// //               Website Design, Web Development & SEO Services In Hyderabad
// //             </h1>

// //             {/* SUBTEXT */}

// //             <p
// //               className="
// //                 mt-6
// //                 text-lg md:text-xl
// //                 leading-8
// //                 text-gray-600
// //                 max-w-2xl
// //               "
// //             >
// //               KIDIWEBTECH specializes in professional website design, custom web
// //               development, and SEO services. We build fast, modern,
// //               mobile-friendly, and SEO-optimized websites that help businesses
// //               attract more customers, generate quality leads, and grow online.
// //             </p>

// //             {/* SOCIAL PROOF */}

// //             <div className="flex flex-wrap gap-5 mt-8 text-sm font-medium text-gray-600">
// //               <div className="flex items-center gap-2">
// //                 ⭐ <span>100+ Successful Projects</span>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 💻 <span>Web Development Experts</span>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 📍 <span>Hyderabad Based Company</span>
// //               </div>
// //             </div>

// //             {/* BUTTONS */}

// //             <div className="flex flex-wrap gap-5 mt-10">
// //               <Link
// //                 href="/contact"
// //                 className="
// //                   inline-flex items-center justify-center
// //                   px-8 py-4 rounded-full
// //                   bg-gradient-to-r
// //                   from-[#2563EB]
// //                   to-[#06B6D4]
// //                   text-white
// //                   font-bold
// //                   shadow-[0_20px_40px_rgba(37,99,235,0.25)]
// //                   hover:scale-105
// //                   transition duration-300
// //                 "
// //               >
// //                 Get Free Consultation
// //               </Link>

// //               <Link
// //                 href="/projects"
// //                 className="
// //                   inline-flex items-center justify-center
// //                   px-8 py-4 rounded-full
// //                   bg-white
// //                   border border-gray-200
// //                   text-[#0F172A]
// //                   font-semibold
// //                   hover:bg-gray-50
// //                   hover:border-blue-200
// //                   transition duration-300
// //                 "
// //               >
// //                 Explore Projects
// //               </Link>
// //             </div>

// //             {/* TRUSTED TEXT */}

// //             <div className="mt-12">
// //               <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-5">
// //                 Trusted Website Design & Development Company In Hyderabad
// //               </p>

// //               <div className="flex flex-wrap items-center gap-8 opacity-70">
// //                 <span className="text-lg font-bold text-gray-500">
// //                   Security
// //                 </span>

// //                 <span className="text-lg font-bold text-gray-500">
// //                   Healthcare
// //                 </span>

// //                 <span className="text-lg font-bold text-gray-500">Pharma</span>

// //                 <span className="text-lg font-bold text-gray-500">
// //                   Real Estate
// //                 </span>
// //               </div>
// //             </div>

// //             {/* STATS */}

// //             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
// //               {[
// //                 {
// //                   value: "150+",
// //                   label: "Projects",
// //                 },

// //                 {
// //                   value: "100+",
// //                   label: "Clients",
// //                 },

// //                 {
// //                   value: "10X",
// //                   label: "Growth",
// //                 },

// //                 {
// //                   value: "24/7",
// //                   label: "Support",
// //                 },
// //               ].map((item, index) => (
// //                 <div key={index}>
// //                   <h3
// //                     className="
// //                       text-3xl md:text-4xl
// //                       font-black
// //                       text-[#2563EB]
// //                     "
// //                   >
// //                     {item.value}
// //                   </h3>

// //                   <p className="mt-2 text-gray-500">{item.label}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* RIGHT CONTENT */}

// //           <div className="relative">
// //             {/* MAIN CARD */}

// //             <div
// //               className="
// //                 relative
// //                 bg-white/80
// //                 backdrop-blur-2xl
// //                 border border-white
// //                 rounded-[40px]
// //                 p-8 md:p-10
// //                 shadow-[0_30px_80px_rgba(15,23,42,0.12)]
// //               "
// //             >
// //               {/* TOP BOX */}

// //               <div
// //                 className="
// //                   bg-gradient-to-r
// //                   from-[#2563EB]
// //                   to-[#06B6D4]
// //                   rounded-[32px]
// //                   p-8
// //                   text-white
// //                 "
// //               >
// //                 <p className="uppercase tracking-[4px] text-white/80 text-sm">
// //                   Website Development
// //                 </p>

// //                 <h2
// //                   className="
// //                     mt-5
// //                     text-4xl md:text-5xl
// //                     font-black
// //                     leading-tight
// //                   "
// //                 >
// //                   Design. Develop. Grow.
// //                 </h2>

// //                 <p className="mt-5 text-white/90 leading-8">
// //                   Helping businesses grow online through professional website
// //                   design, custom web development, and SEO services that deliver
// //                   measurable results.
// //                 </p>
// //               </div>

// //               {/* SERVICES */}

// //               <div className="grid grid-cols-2 gap-5 mt-8">
// //                 {[
// //                   "Website Design",
// //                   "Web Development",
// //                   "SEO Services",
// //                   "React Development",
// //                   "Next.js Development",
// //                   "Website Redesign",
// //                 ].map((item, index) => (
// //                   <div
// //                     key={index}
// //                     className="
// //                       bg-[#f8fbff]
// //                       rounded-2xl
// //                       p-5
// //                       border border-gray-100
// //                       text-center
// //                       font-semibold
// //                       text-[#0F172A]
// //                       hover:shadow-lg
// //                       hover:-translate-y-1
// //                       hover:border-blue-200
// //                       transition duration-300
// //                     "
// //                   >
// //                     {item}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* FLOATING CARD 1 */}

// //             <div
// //               className="
// //                 hidden md:flex
// //                 absolute -top-6 -left-6
// //                 bg-white
// //                 rounded-2xl
// //                 px-5 py-3
// //                 shadow-2xl
// //                 items-center gap-4
// //               "
// //             >
// //               <div
// //                 className="
// //                   w-12 h-12
// //                   rounded-2xl
// //                   bg-blue-100
// //                   flex items-center justify-center
// //                   text-2xl
// //                 "
// //               >
// //                 🚀
// //               </div>

// //               <div>
// //                 <h4 className="font-bold text-[#0F172A]">SEO Services</h4>

// //                 <p className="text-sm text-gray-500">Rank Higher On Google</p>
// //               </div>
// //             </div>

// //             {/* FLOATING CARD 2 */}

// //             <div
// //               className="
// //                 hidden md:flex
// //                 absolute -bottom-6 right-0
// //                 bg-white
// //                 rounded-2xl
// //                 px-5 py-3
// //                 shadow-2xl
// //                 items-center gap-4
// //               "
// //             >
// //               <div
// //                 className="
// //                   w-12 h-12
// //                   rounded-2xl
// //                   bg-cyan-100
// //                   flex items-center justify-center
// //                   text-2xl
// //                 "
// //               >
// //                 💻
// //               </div>

// //               <div>
// //                 <h4 className="font-bold text-[#0F172A]">Web Development</h4>

// //                 <p className="text-sm text-gray-500">
// //                   Responsive Business Websites
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// //


"use client";

import Link from "next/link";

export default function HeroSection() {
  const stats = [
    { value: "150+", label: "Projects" },
    { value: "100+", label: "Clients" },
    { value: "10X", label: "Growth" },
    { value: "24/7", label: "Support" },
  ];

  const services = [
    "Website Design",
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "React Development",
    "Next.js Development",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f9ff] pt-6 pb-6 px-6">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-200/40 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-200/40 blur-[140px] rounded-full"></div>
        <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-purple-200/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>

              <span className="text-sm font-semibold text-[#2563EB]">
                Web Development Company in Hyderabad | Serving India, USA, UK,
                UAE & Saudi Arabia
              </span>
            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0F172A] max-w-4xl">
              Website Development, SEO & Digital Marketing Company for Growing
              Businesses
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-2xl">
              KidiWebTech is a web development and digital marketing company in
              Hyderabad, India. We provide professional website design, custom
              web development, React and Next.js development, SEO, and digital
              marketing services for businesses in Hyderabad, Bengaluru, Mumbai,
              Delhi, Chennai and Pune, and for international clients in the USA,
              UK, UAE and Saudi Arabia. Get fast, modern, mobile-friendly,
              SEO-ready websites built to support business growth.
            </p>

            {/* SOCIAL PROOF */}
            <div className="flex flex-wrap gap-5 mt-8 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                ⭐ <span>Website Development Services</span>
              </div>

              <div className="flex items-center gap-2">
                💻 <span>Modern Web Solutions</span>
              </div>

              <div className="flex items-center gap-2">
                📍{" "}
                <span>
                  Based in Hyderabad, Serving India, USA, UK, UAE & Saudi Arabia
                </span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold shadow-[0_20px_40px_rgba(37,99,235,0.25)] hover:scale-105 transition duration-300"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-gray-200 text-[#0F172A] font-semibold hover:bg-gray-50 hover:border-blue-200 transition duration-300"
              >
                Explore Projects
              </Link>
            </div>

            {/* INDUSTRIES */}
            <div className="mt-12">
              <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-5">
                Website Solutions for Growing Businesses
              </p>

              <div className="flex flex-wrap items-center gap-8 opacity-70">
                <span className="text-lg font-bold text-gray-500">
                  Security
                </span>

                <span className="text-lg font-bold text-gray-500">
                  Healthcare
                </span>

                <span className="text-lg font-bold text-gray-500">Pharma</span>

                <span className="text-lg font-bold text-gray-500">
                  Real Estate
                </span>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
              {stats.map((item, index) => (
                <div key={index}>
                  <h3 className="text-3xl md:text-4xl font-black text-[#2563EB]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* MAIN CARD */}
            <div className="relative bg-white/80 backdrop-blur-2xl border border-white rounded-[40px] p-8 md:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              {/* TOP BOX */}
              <div className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-[32px] p-8 text-white">
                <p className="uppercase tracking-[4px] text-white/80 text-sm">
                  Website Development Company
                </p>

                <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
                  Design. Develop. Grow.
                </h2>

                <p className="mt-5 text-white/90 leading-8">
                  Helping businesses in India, the USA, UK, UAE and Saudi Arabia
                  grow online with professional website design, custom web
                  development, SEO, and digital marketing services tailored to
                  their goals.
                </p>
              </div>

              {/* SERVICES */}
              <div className="grid grid-cols-2 gap-5 mt-8">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f8fbff] rounded-2xl p-5 border border-gray-100 text-center font-semibold text-[#0F172A] hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING CARD 1 */}
            <div className="hidden md:flex absolute -top-6 -left-6 bg-white rounded-2xl px-5 py-3 shadow-2xl items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                🚀
              </div>

              <div>
                <h4 className="font-bold text-[#0F172A]">SEO Services</h4>
                <p className="text-sm text-gray-500">
                  Rank Higher on Google Worldwide
                </p>
              </div>
            </div>

            {/* FLOATING CARD 2 */}
            <div className="hidden md:flex absolute -bottom-6 right-0 bg-white rounded-2xl px-5 py-3 shadow-2xl items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-2xl">
                💻
              </div>

              <div>
                <h4 className="font-bold text-[#0F172A]">Web Development</h4>

                <p className="text-sm text-gray-500">
                  Responsive Business Websites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
