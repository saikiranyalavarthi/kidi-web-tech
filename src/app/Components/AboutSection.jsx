// "use client";

// import Link from "next/link";

// export default function AboutSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#f4f8ff] py-8 md:py-8 px-6">
//       {/* BACKGROUND EFFECTS */}

//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-300/20 blur-[140px] rounded-full"></div>

//         <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-300/20 blur-[140px] rounded-full"></div>

//         <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-purple-300/10 blur-[120px] rounded-full"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT SIDE */}

//           <div>
//             <div
//               className="
//                 inline-flex items-center gap-2
//                 px-5 py-2
//                 rounded-full
//                 bg-white
//                 shadow-md
//                 border border-blue-100
//               "
//             >
//               <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>

//               <span className="text-sm font-semibold text-[#2563EB]">
//                 ABOUT KIDIWEBTECH
//               </span>
//             </div>

//             <h2
//               className="
//                 mt-8
//                 text-4xl sm:text-5xl md:text-6xl
//                 font-black
//                 leading-[1.05]
//                 tracking-tight
//                 text-[#0F172A]
//                 max-w-3xl
//               "
//             >
//               We Build Powerful Digital Experiences That Grow Brands Online
//               Faster
//             </h2>

//             <p
//               className="
//                 mt-8
//                 text-lg
//                 leading-8
//                 text-gray-600
//                 max-w-2xl
//               "
//             >
//               KIDIWEBTECH is a leading digital marketing agency in Hyderabad
//               specializing in SEO services, website development, mobile app
//               development, branding, Google Ads management, social media
//               marketing, and ecommerce solutions for businesses across India.
//             </p>

//             <p
//               className="
//                 mt-6
//                 text-lg
//                 leading-8
//                 text-gray-600
//                 max-w-2xl
//               "
//             >
//               We help startups, brands, and enterprises increase Google
//               rankings, generate quality leads, improve online visibility, and
//               build high-converting digital products using modern technologies
//               and performance marketing strategies.
//             </p>

//             {/* FEATURE LIST */}

//             <div className="grid sm:grid-cols-2 gap-5 mt-12">
//               {[
//                 "SEO Optimization",
//                 "Website Development",
//                 "Mobile App Development",
//                 "Performance Marketing",
//                 "Google Ads Services",
//                 "Social Media Marketing",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     flex items-center gap-4
//                     bg-white/80
//                     backdrop-blur-xl
//                     rounded-2xl
//                     px-5 py-4
//                     border border-white
//                     shadow-md
//                     hover:scale-[1.03]
//                     transition
//                   "
//                 >
//                   <div
//                     className="
//                       w-12 h-12
//                       rounded-2xl
//                       bg-gradient-to-br
//                       from-[#2563EB]
//                       to-[#06B6D4]
//                       flex items-center justify-center
//                       text-white text-lg
//                       font-bold
//                       shrink-0
//                     "
//                   >
//                     ✓
//                   </div>

//                   <span className="font-semibold text-[#0F172A]">{item}</span>
//                 </div>
//               ))}
//             </div>

//             {/* BUTTONS */}

//             <div className="flex flex-wrap gap-5 mt-14">
//               <Link
//                 href="/contact"
//                 className="
//                   inline-flex items-center justify-center
//                   px-8 py-4 rounded-full
//                   bg-gradient-to-r
//                   from-[#2563EB]
//                   to-[#06B6D4]
//                   text-white font-semibold
//                   shadow-[0_15px_40px_rgba(37,99,235,0.35)]
//                   hover:scale-105
//                   transition
//                 "
//               >
//                 Get Free Consultation
//               </Link>

//               <Link
//                 href="/services"
//                 className="
//                   inline-flex items-center justify-center
//                   px-8 py-4 rounded-full
//                   bg-white
//                   text-[#0F172A]
//                   font-semibold
//                   border border-gray-200
//                   shadow-sm
//                   hover:bg-gray-50
//                   transition
//                 "
//               >
//                 Explore Services
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}

//           <div className="relative">
//             {/* FLOATING CARD */}

//             <div
//               className="
//                 relative
//                 bg-white/80
//                 backdrop-blur-2xl
//                 border border-white
//                 rounded-[40px]
//                 p-8 md:p-10
//                 shadow-[0_30px_80px_rgba(15,23,42,0.12)]
//               "
//             >
//               {/* TOP CARD */}

//               <div
//                 className="
//                   bg-gradient-to-r
//                   from-[#2563EB]
//                   to-[#06B6D4]
//                   rounded-[30px]
//                   p-8
//                   text-white
//                 "
//               >
//                 <p className="text-sm uppercase tracking-widest text-white/80">
//                   Digital Growth Agency
//                 </p>

//                 <h3 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
//                   10X Business Growth Through SEO & Modern Development
//                 </h3>

//                 <p className="mt-6 text-white/90 leading-8">
//                   Helping brands scale online with website development, mobile
//                   apps, SEO services, Google Ads, and digital marketing
//                   solutions.
//                 </p>
//               </div>

//               {/* STATS */}

//               <div className="grid grid-cols-2 gap-5 mt-8">
//                 {[
//                   {
//                     value: "150+",
//                     label: "Projects Completed",
//                   },
//                   {
//                     value: "100+",
//                     label: "Happy Clients",
//                   },
//                   {
//                     value: "5+",
//                     label: "Years Experience",
//                   },
//                   {
//                     value: "24/7",
//                     label: "Support Available",
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="
//                       bg-[#f8fbff]
//                       rounded-3xl
//                       p-7
//                       border border-gray-100
//                       text-center
//                       hover:shadow-lg
//                       transition
//                     "
//                   >
//                     <h4
//                       className="
//                         text-4xl
//                         md:text-5xl
//                         font-black
//                         text-[#2563EB]
//                       "
//                     >
//                       {item.value}
//                     </h4>

//                     <p className="mt-3 text-gray-600 text-sm md:text-base">
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* FLOATING MINI CARDS */}

//             <div
//               className="
//                 hidden md:flex
//                 absolute -top-8 -left-8
//                 bg-white
//                 shadow-xl
//                 rounded-2xl
//                 px-6 py-4
//                 items-center gap-4
//               "
//             >
//               <div
//                 className="
//                   w-12 h-12
//                   rounded-2xl
//                   bg-blue-100
//                   flex items-center justify-center
//                   text-2xl
//                 "
//               >
//                 🚀
//               </div>

//               <div>
//                 <h5 className="font-bold text-[#0F172A]">SEO Services</h5>

//                 <p className="text-sm text-gray-500">Rank Higher On Google</p>
//               </div>
//             </div>

//             <div
//               className="
//                 hidden md:flex
//                 absolute -bottom-8 right-0
//                 bg-white
//                 shadow-xl
//                 rounded-2xl
//                 px-6 py-4
//                 items-center gap-4
//               "
//             >
//               <div
//                 className="
//                   w-12 h-12
//                   rounded-2xl
//                   bg-cyan-100
//                   flex items-center justify-center
//                   text-2xl
//                 "
//               >
//                 💻
//               </div>

//               <div>
//                 <h5 className="font-bold text-[#0F172A]">Web Development</h5>

//                 <p className="text-sm text-gray-500">
//                   Responsive Business Websites
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

const expertise = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and SEO-friendly websites built around your business requirements.",
  },
  {
    number: "02",
    title: "Digital Marketing & SEO",
    description:
      "Digital strategies that improve online visibility, reach relevant audiences and generate enquiries.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Intelligent integrations and automated workflows that help businesses work more efficiently.",
  },
];

const values = [
  "Business-focused digital solutions",
  "Modern and scalable technologies",
  "Responsive and user-friendly experiences",
  "Long-term technical support",
];

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-sky-100/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: Visual */}
          <div className="about-visual relative mx-auto w-full max-w-[550px]">
            <div className="about-orb absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-200 blur-2xl sm:h-96 sm:w-96" />

            <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-xl shadow-blue-100/50 sm:p-9">
              {/* Decorative graphic */}
              <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-2xl border border-white bg-white/70 sm:min-h-[390px]">
                <div className="about-ring absolute h-64 w-64 rounded-full border border-blue-200 sm:h-80 sm:w-80" />
                <div className="about-ring about-ring-reverse absolute h-48 w-48 rounded-full border border-indigo-200 sm:h-60 sm:w-60" />

                <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-600 text-6xl font-black text-white shadow-2xl shadow-blue-500/30 sm:h-44 sm:w-44 sm:text-7xl">
                  K
                  <span className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white bg-sky-400 text-2xl text-white">
                    ✦
                  </span>
                </div>

                {/* Floating elements */}
                <div className="about-float absolute left-4 top-8 rounded-xl border border-gray-100 bg-white p-3 shadow-lg sm:left-8">
                  <p className="text-xs font-bold text-gray-900">
                    Web Development
                  </p>
                  <p className="mt-1 text-[10px] text-blue-600">
                    Modern experiences
                  </p>
                </div>

                <div className="about-float about-float-delay absolute bottom-8 right-4 rounded-xl border border-gray-100 bg-white p-3 shadow-lg sm:right-8">
                  <p className="text-xs font-bold text-gray-900">
                    AI & Digital Growth
                  </p>
                  <p className="mt-1 text-[10px] text-blue-600">
                    Smarter solutions
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-blue-600 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-100">
                  Our approach
                </p>
                <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">
                  Technology with a purpose.
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Combining creativity, development and digital strategy to
                  solve real business challenges.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              About KidiWebTech
            </span>

            <h2
              id="about-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-5xl"
            >
              Building Digital Experiences
              <span className="about-gradient-text block">
                That Move Businesses Forward
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              KidiWebTech is a digital technology and marketing agency helping
              businesses establish, strengthen and grow their online presence.
              We bring together website development, digital marketing, search
              engine optimization and modern technology to create practical
              digital solutions.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              From business websites and e-commerce platforms to mobile
              applications and AI-powered automation, we focus on creating
              solutions that align with your business goals and customer needs.
            </p>

            {/* Expertise */}
            <div className="mt-8 space-y-5">
              {expertise.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-600">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                More About Us
                <span>→</span>
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-600 px-7 py-4 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
              >
                Let's Talk
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
