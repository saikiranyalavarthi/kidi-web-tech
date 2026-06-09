// "use client";

// import Image from "next/image";

// const services = [
//   {
//     title: "Digital Marketing",
//     img: "/assets/image1.jpg",
//     desc: "Boost your visibility with SEO, Google Ads, and social media strategies to reach the right audience.",
//   },
//   {
//     title: "App Development",
//     img: "/assets/image2.jpg",
//     desc: "We build fast, secure iOS and Android apps using modern technologies.",
//   },
//   {
//     title: "Website Development",
//     img: "/assets/image3.jpg",
//     desc: "SEO-optimized websites built with Next.js and Tailwind CSS for speed and UX.",
//   },
//   {
//     title: "Social Media",
//     img: "/assets/image4.jpg",
//     desc: "Custom themes and plugins for powerful, manageable WordPress websites.",
//   },
// ];

// export default function ServicesSection1() {
//   return (
//     <section className="bg-black py-4 px-6 md:px-20">

//       {/* SECTION TITLE */}
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 gradient-text">
//         Our Services
//       </h2>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {services.map((item, i) => (
//           <div key={i} className="relative group">

//             {/* GRADIENT BORDER ONLY */}
//             <div className="
//               absolute inset-0 rounded-3xl
//               bg-gradient-to-r from-yellow-400 to-orange-500
//               opacity-80
//               transition-opacity duration-300
//               group-hover:opacity-100
//             " />

//             {/* CARD (PURE BLACK) */}
//             <div className="
//               relative bg-black rounded-3xl
//               m-[1.5px]
//               overflow-hidden
//               transition-transform duration-300
//               group-hover:-translate-y-2
//               group-hover:shadow-[0_20px_40px_rgba(255,165,0,0.25)]
//             ">
//               {/* IMAGE */}
//               <div className="overflow-hidden rounded-t-3xl">
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   width={400}
//                   height={260}
//                   className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold mb-3 gradient-text">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Digital Marketing Services",
    slug: "/services/digital-marketing-company-hyderabad",
    img: "/assets/image1.jpg",
    desc: "Grow your business with SEO, Google Ads, and social media marketing services in Hyderabad.",
  },
  {
    title: "Mobile App Development",
    slug: "/services/seo-services-hyderabad",
    img: "/assets/image2.jpg",
    desc: "We build fast, secure Android and iOS mobile apps tailored for business growth.",
  },
  {
    title: "Website Development",
    slug: "/services/web-design-company-hyderabad",
    img: "/assets/image3.jpg",
    desc: "High-performance SEO-friendly websites using Next.js for speed, UX, and conversions.",
  },
  {
    title: "Social Media Marketing",
    slug: "/services/",
    img: "/assets/image4.jpg",
    desc: "Engage your audience with result-driven social media marketing strategies.",
  },
];

export default function ServicesSection1() {
  return (
    <section
      className="bg-black py-16 px-6 md:px-20"
      aria-labelledby="services-heading"
    >
      {/* SECTION TITLE */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2
          id="services-heading"
          className="text-4xl md:text-5xl font-extrabold gradient-text mb-4"
        >
          Digital Marketing & Web Development Services in Hyderabad
        </h2>

        <p className="text-gray-400 text-lg">
          We offer complete digital marketing solutions including SEO, Google
          Ads, social media marketing, and website development to grow your
          business online.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((item, i) => (
          <div key={i} className="relative group">
            {/* GRADIENT BORDER */}
            <div
              className="
              absolute inset-0 rounded-3xl
              bg-gradient-to-r from-yellow-400 to-orange-500
              opacity-80
              transition-opacity duration-300
              group-hover:opacity-100
            "
            />

            {/* CARD */}
            <div
              className="
              relative bg-black rounded-3xl
              m-[1.5px]
              overflow-hidden
              transition-transform duration-300
              group-hover:-translate-y-2
              group-hover:shadow-[0_20px_40px_rgba(255,165,0,0.25)]
            "
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-3xl">
                <Image
                  src={item.img}
                  alt={`${item.title} in Hyderabad`}
                  width={400}
                  height={260}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* INTERNAL LINK (SEO BOOST) */}
                <Link
                  href={item.slug}
                  className="text-yellow-400 text-sm font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-300 mb-4 text-lg">
          Looking for the best digital marketing agency in Hyderabad?
        </p>

        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500
          text-black font-semibold hover:opacity-90 transition"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
