// import Image from "next/image";
// import Script from "next/script";
// import type { Metadata } from "next";

// /* ================= SEO METADATA ================= */

// export const metadata: Metadata = {
//   title:
//     "Best PPC Advertising Services in Hyderabad | Google Ads Agency – KIDIWEBTECH",
//   description:
//     "KIDIWEBTECH is a leading PPC advertising company in Hyderabad offering Google Ads management, performance marketing, and ROI-driven Pay Per Click services for businesses.",
//   keywords: [
//     "PPC company in Hyderabad",
//     "Best Google Ads agency Hyderabad",
//     "PPC advertising services",
//     "Pay Per Click marketing",
//     "Performance marketing agency",
//     "Google Ads management company",
//     "Lead generation PPC Hyderabad",
//     "Digital advertising company India",
//   ],
//   alternates: {
//     canonical: "https://kidiwebtech.com/services/ppc",
//   },
//   openGraph: {
//     title: "Top PPC Advertising Company in Hyderabad",
//     description:
//       "Drive high-quality leads with ROI-focused Google Ads and PPC campaigns.",
//     url: "https://kidiwebtech.com/services/ppc",
//     siteName: "KIDIWEBTECH",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Best PPC Agency in Hyderabad",
//     description:
//       "Scale your business with expert Google Ads & PPC management services.",
//   },
// };

// /* ================= PAGE ================= */

// export default function PPCPage() {
//   return (
//     <div className="bg-black text-white font-sans overflow-hidden">

//       {/* ================= STRUCTURED DATA ================= */}

//       <Script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify([
//             {
//               "@context": "https://schema.org",
//               "@type": "Service",
//               serviceType: "PPC Advertising Services",
//               provider: {
//                 "@type": "Organization",
//                 name: "KIDIWEBTECH",
//                 url: "https://kidiwebtech.com",
//               },
//               areaServed: {
//                 "@type": "Place",
//                 name: "Hyderabad, Telangana, India",
//               },
//               description:
//                 "Professional PPC advertising and Google Ads management services in Hyderabad focused on ROI and lead generation.",
//             },
//             {
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               mainEntity: [
//                 {
//                   "@type": "Question",
//                   name: "How much does PPC advertising cost in Hyderabad?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text:
//                       "PPC advertising costs vary depending on industry competition and targeting. Businesses can start with flexible budgets aligned with their campaign goals.",
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: "How long does it take to see PPC results?",
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text:
//                       "PPC campaigns can start generating traffic and leads within hours of launch, making it one of the fastest digital marketing channels.",
//                   },
//                 },
//               ],
//             },
//           ]),
//         }}
//       />

//       {/* ================= HERO ================= */}

//       <section className="py-28 px-6 text-center border-b border-white/10">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//           PPC Advertising Services in{" "}
//           <span className="gradient-text">Hyderabad</span>
//         </h1>

//         <p className="text-gray-400 max-w-3xl mx-auto text-lg">
//           ROI-driven Google Ads and Pay Per Click (PPC) campaigns designed to
//           generate qualified leads, increase conversions, and maximize business growth.
//         </p>
//       </section>

//       {/* ================= INTRO SECTION ================= */}

//       <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           <div className="relative">
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80" />
//             <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
//               <Image
//                 src="/assets/image13.jpg"
//                 alt="PPC advertising services and Google Ads management in Hyderabad"
//                 width={600}
//                 height={400}
//                 className="w-full h-full object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-extrabold mb-6">
//               Leading Google Ads & PPC Experts
//             </h2>

//             <p className="text-gray-400 mb-5 leading-relaxed">
//               PPC advertising is one of the most effective digital marketing
//               strategies for businesses seeking immediate traffic and fast
//               lead generation. Our Google Ads campaigns position your business
//               at the top of search results for high-intent keywords.
//             </p>

//             <p className="text-gray-400 leading-relaxed">
//               As a trusted PPC company in Hyderabad, KIDIWEBTECH builds
//               data-driven campaigns focused on conversions, cost efficiency,
//               and sustainable return on investment (ROI).
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= SERVICES SECTION ================= */}

//       <section className="px-6 md:px-20 max-w-6xl mx-auto pb-24 space-y-14 text-gray-400">

//         <div>
//           <h2 className="text-2xl font-extrabold gradient-text mb-4">
//             Our Google Ads & PPC Services
//           </h2>
//           <ul className="list-disc pl-6 space-y-3">
//             <li>Google Search Ads</li>
//             <li>Display Advertising Campaigns</li>
//             <li>YouTube Video Advertising</li>
//             <li>Google Shopping Ads for E-commerce</li>
//             <li>Remarketing & Retargeting Campaigns</li>
//             <li>Local PPC Campaigns for Hyderabad Businesses</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-extrabold gradient-text mb-4">
//             Data-Driven Performance Marketing
//           </h2>
//           <p>
//             We optimize campaigns using performance metrics such as CTR,
//             CPC, conversion rate, and ROAS. Continuous A/B testing and
//             audience refinement ensure your advertising budget delivers
//             measurable growth.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-extrabold gradient-text mb-4">
//             PPC vs <a href="/services/seo" className="underline">SEO Services</a>
//           </h2>
//           <p>
//             PPC delivers immediate visibility and leads, while SEO focuses
//             on long-term organic growth. Businesses that combine both
//             strategies often achieve maximum digital marketing success.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-extrabold gradient-text mb-4">
//             Why Choose KIDIWEBTECH?
//           </h2>
//           <ul className="list-disc pl-6 space-y-3">
//             <li>Certified Google Ads Specialists</li>
//             <li>Transparent Budget Management</li>
//             <li>Conversion-Focused Landing Page Optimization</li>
//             <li>Industry-Specific Campaign Strategies</li>
//             <li>Monthly Performance Reporting</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-extrabold gradient-text mb-4">
//             Frequently Asked Questions
//           </h2>

//           <p>
//             <strong>Is Google Ads suitable for small businesses?</strong><br />
//             Yes. With proper targeting and optimization, Google Ads can
//             generate high ROI even for small and local businesses.
//           </p>

//           <p className="mt-4">
//             <strong>Do you provide monthly reports?</strong><br />
//             Yes. We provide detailed reports covering clicks, impressions,
//             conversions, and ROI analysis.
//           </p>
//         </div>

//       </section>

//       {/* ================= CTA ================= */}

//       <section className="py-24 px-6 text-center border-t border-white/10">
//         <h2 className="text-3xl font-extrabold mb-6">
//           Ready to Scale with PPC Advertising?
//         </h2>

//         <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
//           Get a customized Google Ads strategy designed to increase traffic,
//           generate leads, and maximize your ROI.
//         </p>

//         <a
//           href="/contact"
//           className="inline-block px-10 py-4 rounded-full
//             bg-gradient-to-r from-yellow-400 to-orange-500
//             text-black font-semibold text-lg
//             hover:opacity-90 transition"
//         >
//           Get a Free PPC Consultation →
//         </a>
//       </section>

//     </div>
//   );
// }

import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

/* ================= SEO METADATA ================= */

export const metadata = {
  title: "PPC Advertising Services in Hyderabad | Google Ads Agency for Leads",
  description:
    "Best PPC advertising company in Hyderabad offering Google Ads management, paid campaigns, and performance marketing to generate high-quality leads and ROI.",
  keywords: [
    "PPC services Hyderabad",
    "Google Ads agency Hyderabad",
    "Pay Per Click marketing India",
    "lead generation PPC",
    "performance marketing company",
  ],
  alternates: {
    canonical: "https://kidiwebtech.com/services/ppc",
  },
  openGraph: {
    title: "Top PPC & Google Ads Agency in Hyderabad",
    description:
      "Drive high-quality leads with ROI-focused Google Ads campaigns.",
    url: "https://kidiwebtech.com/services/ppc",
    siteName: "KIDIWEBTECH",
    type: "website",
  },
};

/* ================= PAGE ================= */

export default function PPCPage() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* ================= SCHEMA ================= */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "PPC Advertising Services",
              provider: {
                "@type": "Organization",
                name: "KIDIWEBTECH",
                url: "https://kidiwebtech.com",
              },
              areaServed: {
                "@type": "Place",
                name: "Hyderabad, India",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does PPC cost in Hyderabad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PPC costs depend on your industry and competition.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How fast can PPC generate leads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PPC campaigns can generate leads within hours.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          PPC Advertising Services in Hyderabad – Google Ads Experts for Lead
          Generation
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Get instant traffic and high-quality leads with our Google Ads
          campaigns.
        </p>

        <div className="mt-6 text-sm text-gray-500">
          <Link href="/services/seo" className="underline mr-4">
            SEO Services
          </Link>
          <Link href="/services/social-media-marketing" className="underline">
            Social Media Marketing
          </Link>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/assets/image13.jpg"
              alt="Google Ads services in Hyderabad"
              width={600}
              height={400}
              priority
              className="rounded-3xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best PPC & Google Ads Agency in Hyderabad
            </h2>

            <p className="text-gray-400 mb-5">
              We help businesses generate leads using high-performance PPC
              campaigns.
            </p>

            <p className="text-gray-400">
              Our strategies focus on ROI, conversions, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto pb-24 space-y-10">
        <h2 className="text-2xl font-extrabold gradient-text">
          Our PPC Services
        </h2>

        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Google Search Ads</li>
          <li>Display Ads</li>
          <li>YouTube Ads</li>
          <li>Remarketing Campaigns</li>
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Start Generating Leads Today
        </h2>

        <Link
          href="/contact"
          className="px-10 py-4 rounded-full bg-yellow-400 text-black font-semibold"
        >
          Get Free Consultation
        </Link>
      </section>
    </div>
  );
}
