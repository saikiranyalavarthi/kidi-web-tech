// "use client";

// export default function HeroSlider() {
//   return (
//     <section
//       className="relative min-h-[90vh] flex items-center justify-center bg-black px-6"
//       aria-label="Digital Marketing & SEO Services Hero Section"
//     >
//       <div className="max-w-5xl text-center">

//         {/* EYEBROW / BADGE */}
//         <p className="mb-4 inline-block px-4 py-4 rounded-full text-sm font-medium
//           bg-white/5 border border-white/10 text-gray-300">
//           🚀 Digital Growth Partner for Businesses in India
//         </p>

//         {/* MAIN HEADING (SEO H1 – OPTIMIZED) */}
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
//           Digital Marketing & SEO Agency in{" "}
//           <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//             Hyderabad
//           </span>{" "}
//           – Get More Leads & Sales
//         </h1>

//         {/* SUPPORTING HEADING (SEO H2) */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
//           SEO Services, Website Development, Google Ads & Social Media Marketing That Convert
//         </h2>

//         {/* SUB TEXT – KEYWORD RICH */}
//         <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-3xl mx-auto">
//           We are a full-service digital marketing company in Hyderabad helping
//           businesses grow online with high-converting websites, SEO-driven organic traffic,
//           paid advertising, and result-focused marketing strategies.
//         </p>

//         {/* OFFER */}
//         <p className="text-yellow-400 font-semibold mb-10">
//           🎁 Free 30-Minute Business Growth Consultation
//         </p>

//         {/* CTA BUTTONS */}
//         <div className="flex justify-center gap-5 flex-wrap mb-12">

//           <a
//             href="/contact"
//             className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500
//               text-black font-semibold hover:opacity-90 transition"
//           >
//             Get Free Consultation
//           </a>

//           <a
//             href="https://wa.me/919390627367?text=Hi%2C%20I%20want%20a%20free%20consultation%20to%20grow%20my%20business."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-8 py-4 rounded-full border border-white/20 text-white
//               hover:border-green-400 hover:text-green-400 transition"
//           >
//             Chat on WhatsApp
//           </a>

//         </div>

//         {/* TRUST STRIP */}
//         <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
//           <span>✔ 100+ Projects Delivered</span>
//           <span>✔ SEO & Google Ads Experts</span>
//           <span>✔ High-Conversion Websites</span>
//           <span>✔ Trusted by Businesses Across India</span>
//         </div>

//         {/* SEO SUPPORT CONTENT (INVISIBLE BUT SAFE) */}
//         <div className="sr-only">
//           <p>
//             KidiWebTech is a digital marketing and SEO services company in Hyderabad
//             offering search engine optimization, website design and development,
//             Google Ads management, and social media marketing for startups and businesses in India.
//           </p>
//           <a href="/services/seo">SEO Services in Hyderabad</a>
//           <a href="/services/web-development">Website Development Company</a>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

export default function HeroSlider() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-black px-6"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-5xl text-center">
        {/* BADGE */}
        <p
          className="mb-4 inline-block px-4 py-2 rounded-full text-sm font-medium
          bg-white/5 border border-white/10 text-gray-300"
        >
          🚀 Digital Marketing Agency in Hyderabad, India
        </p>

        {/* MAIN H1 */}
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white"
        >
          Best Digital Marketing & SEO Agency in{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Hyderabad
          </span>{" "}
          for Business Growth
        </h1>

        {/* H2 */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
          SEO Services, Google Ads, Social Media Marketing & High-Converting
          Websites
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
          We help startups and businesses in Hyderabad and across India grow
          online with data-driven SEO strategies, high-performance websites,
          Google Ads, and social media marketing that generate real leads and
          sales.
        </p>

        {/* OFFER */}
        <p className="text-yellow-400 font-semibold mb-10">
          🎁 Get Free 30-Minute Digital Marketing Consultation
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-5 flex-wrap mb-12">
          <a
            href="/contact"
            title="Contact Digital Marketing Agency in Hyderabad"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500
              text-black font-semibold hover:opacity-90 transition"
          >
            Get Free Consultation
          </a>

          <a
            href="https://wa.me/919390627367?text=Hi%2C%20I%20want%20digital%20marketing%20services%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp for digital marketing services"
            className="px-8 py-4 rounded-full border border-white/20 text-white
              hover:border-green-400 hover:text-green-400 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* TRUST SIGNALS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <span>✔ 100+ Successful Projects</span>
          <span>✔ SEO & PPC Experts</span>
          <span>✔ ROI-Focused Marketing</span>
          <span>✔ Trusted by Businesses in India</span>
        </div>

        {/* INTERNAL SEO LINKS */}
        <div className="mt-10 text-sm text-gray-300">
  <a
    href="/services/seo"
    className="text-yellow-400 hover:text-yellow-300 underline font-medium mr-4"
  >
    SEO Services in Hyderabad
  </a>

  <a
    href="/services/google-ads"
    className="text-yellow-400 hover:text-yellow-300 underline font-medium mr-4"
  >
    Google Ads Management
  </a>

  <a
    href="/services/social-media-marketing"
    className="text-yellow-400 hover:text-yellow-300 underline font-medium"
  >
    Social Media Marketing Services
  </a>
</div>
      </div>
    </section>
  );
}
