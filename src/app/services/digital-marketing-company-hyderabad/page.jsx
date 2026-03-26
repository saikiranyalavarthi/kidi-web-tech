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
  title:
    "Best PPC Services in Hyderabad | Google Ads Agency for High Quality Leads",
  description:
    "Looking for the best PPC services in Hyderabad? KidiWebTech offers expert Google Ads management, lead generation campaigns, and ROI-driven paid marketing solutions.",
  keywords: [
    "PPC services in Hyderabad",
    "Google Ads agency in Hyderabad",
    "best PPC company in Hyderabad",
    "Google Ads expert Hyderabad",
    "lead generation services Hyderabad",
    "performance marketing agency Hyderabad",
    "paid ads agency India",
    "digital marketing agency Hyderabad PPC",
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
                    text: "PPC advertising cost in Hyderabad depends on competition, keywords, and campaign goals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How fast can PPC generate leads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PPC campaigns can generate leads within hours, making Google Ads a fast marketing strategy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is PPC better than SEO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PPC provides instant results, while SEO offers long-term growth. Combining both gives the best results.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KIDIWEBTECH",
              url: "https://kidiwebtech.com",
              logo: "https://kidiwebtech.com/logo.png",
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KIDIWEBTECH",
              image: "https://kidiwebtech.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressCountry: "India",
              },
              areaServed: "Hyderabad",
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
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Image
            src="/assets/image13.jpg"
            alt="Best PPC services in Hyderabad Google Ads agency for lead generation"
            width={600}
            height={400}
            className="rounded-3xl"
            priority
          />

          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best PPC Services in Hyderabad – Google Ads Experts
            </h2>

            <p className="text-gray-400 mb-5">
              KidiWebTech is a leading PPC agency in Hyderabad offering
              result-driven Google Ads campaigns that generate leads and
              maximize ROI.
            </p>

            <p className="text-gray-400 mb-5">
              We specialize in search ads, display ads, YouTube advertising, and
              remarketing campaigns targeting the right audience.
            </p>

            <p className="text-gray-400">
              Our PPC services help businesses achieve fast visibility, increase
              conversions, and grow revenue.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto pb-24 space-y-10">
        <h2 className="text-2xl font-extrabold">
          PPC Services in Hyderabad – Google Ads Solutions
        </h2>

        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Google Search Ads for lead generation in Hyderabad</li>
          <li>Display advertising campaigns for brand awareness</li>
          <li>YouTube ads for video marketing</li>
          <li>Remarketing campaigns to boost conversions</li>
        </ul>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-6 md:px-20 max-w-5xl mx-auto pb-20">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions About PPC Services in Hyderabad
        </h2>

        <div className="space-y-4 text-gray-400">
          <p>
            <strong>How much does PPC cost in Hyderabad?</strong>
            <br />
            PPC advertising cost depends on industry competition and keywords.
          </p>

          <p>
            <strong>How fast can PPC generate leads?</strong>
            <br />
            PPC campaigns can start generating leads within hours.
          </p>

          <p>
            <strong>Is PPC better than SEO?</strong>
            <br />
            PPC gives instant results, while SEO provides long-term growth.
          </p>
        </div>
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
