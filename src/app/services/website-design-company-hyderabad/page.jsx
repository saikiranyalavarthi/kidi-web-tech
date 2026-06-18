// app/website-design-company-hyderabad/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design Company in Hyderabad | KidiWebTech",
  description:
    "KidiWebTech is a top-rated Website Design Company in Hyderabad. We create stunning, SEO-friendly, mobile-responsive website designs for businesses in Hitech City, Gachibowli, Banjara Hills & across Hyderabad.",
  keywords: [
    "Website Design Company Hyderabad",
    "Web Design Company Hyderabad",
    "Website Design Services Hyderabad",
    "Custom Website Design Hyderabad",
    "Business Website Design Hyderabad",
    "Ecommerce Website Design Hyderabad",
    "Website Design Hitech City",
    "Website Design Gachibowli",
    "Website Design Banjara Hills",
    "Website Design Madhapur",
    "Website Design Kukatpally",
    "Website Design Secunderabad",
    "Professional Web Design Hyderabad",
    "Affordable Website Design Hyderabad",
    "Responsive Website Design Hyderabad",
    "UI UX Design Company Hyderabad",
  ],
  alternates: {
    canonical:
      "https://www.kidiwebtech.com/website-design-company-hyderabad",
  },
  openGraph: {
    title: "Website Design Company in Hyderabad | KidiWebTech",
    description:
      "Professional website design services in Hyderabad for startups, SMBs, and enterprises. Creative, SEO-optimized, and mobile-responsive web designs.",
    url: "https://www.kidiwebtech.com/website-design-company-hyderabad",
    siteName: "KidiWebTech",
    locale: "en_IN",
    type: "website",
  },
};

const services = [
  {
    title: "Business Website Design",
    desc: "Creative, conversion-focused website designs for local Hyderabad businesses that build trust and generate real leads.",
    icon: "🏢",
  },
  {
    title: "Corporate Website Design",
    desc: "Elegant, professional corporate website designs with strong brand identity, clean layouts, and enterprise-grade UI.",
    icon: "🏦",
  },
  {
    title: "Ecommerce Website Design",
    desc: "High-converting ecommerce store designs with intuitive product pages, smooth checkout flows, and mobile-first layouts.",
    icon: "🛒",
  },
  {
    title: "UI/UX Design Services",
    desc: "User-first UI/UX design with wireframes, prototypes, and design systems that make your website easy and enjoyable to use.",
    icon: "🎨",
  },
  {
    title: "Landing Page Design",
    desc: "High-impact landing page designs built to maximize conversions from your Google Ads and Meta campaigns.",
    icon: "🎯",
  },
  {
    title: "Website Redesign Services",
    desc: "Transform your outdated website with a modern, fresh design that improves user experience and boosts SEO rankings.",
    icon: "🔄",
  },
];

const whyChoose = [
  {
    title: "Creative & Unique Designs",
    desc: "We never use generic templates. Every website design is crafted from scratch to reflect your brand identity, target audience, and business goals.",
  },
  {
    title: "SEO-Friendly Design Structure",
    desc: "Our designs follow Google's best practices — semantic HTML, Core Web Vitals, structured layout, and mobile-first design so your site ranks and converts.",
  },
  {
    title: "100% Mobile-Responsive Design",
    desc: "Pixel-perfect on every screen — Android phones, iPhones, tablets, and desktops — tested across all major browsers and devices.",
  },
  {
    title: "Hyderabad-Based Design Experts",
    desc: "We understand local Hyderabad market needs and aesthetics. Face-to-face design consultations available in Hitech City, Gachibowli, Banjara Hills, and Madhapur.",
  },
  {
    title: "Fast Turnaround",
    desc: "Most website designs are delivered within 5–7 business days. We share design previews at every stage so you are always in control.",
  },
  {
    title: "Revisions Until You Are Happy",
    desc: "We offer multiple design revision rounds to ensure the final website design perfectly matches your vision and business requirements.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Brief",
    desc: "We understand your brand, target audience, competitors, and design preferences before opening any design tool.",
  },
  {
    step: "02",
    title: "Wireframing",
    desc: "Low-fidelity wireframes are created first to map out page structure, user flow, and content hierarchy.",
  },
  {
    step: "03",
    title: "Visual Design",
    desc: "Full visual mockups with your brand colors, typography, icons, and imagery — reviewed and approved by you.",
  },
  {
    step: "04",
    title: "Handoff & Development",
    desc: "Approved designs are handed off for pixel-perfect development or delivered as Figma files ready for your team.",
  },
];

const locations = [
  "Hitech City",
  "Madhapur",
  "Gachibowli",
  "Banjara Hills",
  "Jubilee Hills",
  "Kukatpally",
  "Secunderabad",
  "Ameerpet",
  "KPHB",
  "Miyapur",
  "Kondapur",
  "Manikonda",
];

const faqs = [
  {
    q: "How much does website design cost in Hyderabad?",
    a: "Website design cost in Hyderabad starts from ₹5,000 for simple landing page designs and goes up to ₹50,000+ for custom ecommerce or corporate website designs. We offer transparent pricing with no hidden charges.",
  },
  {
    q: "How long does website design take in Hyderabad?",
    a: "Most business website designs are completed in 5–10 business days. Complex ecommerce or corporate designs may take 2–4 weeks depending on the number of pages and revision rounds.",
  },
  {
    q: "Will my website design be SEO friendly?",
    a: "Yes. Our designs follow Google's Core Web Vitals, semantic HTML structure, mobile-first principles, and fast-loading layouts so your website is built to rank from day one.",
  },
  {
    q: "Do you provide Figma or design files after the project?",
    a: "Yes. We deliver all source design files in Figma format so you have full ownership of your website design assets.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We audit your current site, identify UX and design issues, and deliver a modern redesign while preserving your brand identity and improving your Google rankings.",
  },
  {
    q: "Which areas in Hyderabad do you serve for website design?",
    a: "We serve all areas of Hyderabad including Hitech City, Gachibowli, Madhapur, Banjara Hills, Kukatpally, Secunderabad, Jubilee Hills, Ameerpet, KPHB, Kondapur, and Miyapur.",
  },
];

export default function WebsiteDesignPage() {
  return (
    <main className="bg-white text-gray-900 pt-24">

      {/* ── HERO ── */}
      <section className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            #1 Website Design Company in Hyderabad
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight mb-6 max-w-4xl">
            Website Design Company Hyderabad
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
            KidiWebTech creates stunning, SEO-optimized, and mobile-responsive website
            designs for businesses across Hyderabad — from startups in Hitech City
            to enterprises in Banjara Hills.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919390627367"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-8 mt-14">
            {[
              { stat: "200+", label: "Websites Designed" },
              { stat: "8+ Yrs", label: "Hyderabad Experience" },
              { stat: "100%", label: "Mobile Responsive" },
              { stat: "4.9★", label: "Client Rating" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-700">{stat}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Professional Website Design Services in Hyderabad
          </h2>
          <p className="text-gray-600 leading-8 text-lg mb-6">
            Looking for a reliable <strong>Website Design Company in Hyderabad</strong>?
            KidiWebTech specializes in creating visually stunning, high-performance website
            designs that help local Hyderabad businesses make a powerful first impression,
            generate more leads, and rank higher on Google.
          </p>
          <p className="text-gray-600 leading-8 text-lg">
            Whether you are a startup in Madhapur, a retail business in Kukatpally, or
            an enterprise in Gachibowli — our design team creates SEO-friendly,
            mobile-responsive, and conversion-focused website designs tailored to your
            exact business goals and budget.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-700 text-center mb-4">
            Our Website Design Services in Hyderabad
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            End-to-end website design solutions for every type of Hyderabad business.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">{title}</h3>
                <p className="text-gray-600 leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Why Hyderabad Businesses Choose KidiWebTech for Website Design
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl">
          We are not just a design agency — we are a Hyderabad-based team that
          understands local market aesthetics and helps your brand stand out online.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {whyChoose.map(({ title, desc }) => (
            <div key={title} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-7">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-700 text-center mb-4">
            Our Website Design Process
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            A transparent, milestone-driven design process so you always know what's happening.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-3xl p-8 border border-blue-100 relative"
              >
                <div className="text-5xl font-extrabold text-blue-100 mb-4 leading-none">
                  {step}
                </div>
                <h3 className="font-bold text-blue-700 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL HYDERABAD AREAS ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Website Design Across All Hyderabad Areas
        </h2>
        <p className="text-gray-600 leading-8 mb-10 max-w-3xl">
          KidiWebTech provides <strong>website design services across Hyderabad</strong> including
          all major business hubs and residential areas. Whether you run a clinic in
          Banjara Hills or a tech startup in Hitech City, we are your local website
          design partner.
        </p>
        <div className="flex flex-wrap gap-3">
          {locations.map((loc) => (
            <span
              key={loc}
              className="bg-blue-50 border border-blue-200 text-blue-700 font-semibold px-5 py-2 rounded-full text-sm"
            >
              Website Design {loc}
            </span>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mb-12">
            Common questions from Hyderabad business owners about website design.
          </p>
          <div className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="font-bold text-lg text-blue-700 mb-3">{q}</h3>
                <p className="text-gray-600 leading-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM SEO TEXT ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          KidiWebTech — Hyderabad's Trusted Website Design Partner
        </h2>
        <div className="prose prose-blue max-w-none text-gray-600 leading-8 space-y-4">
          <p>
            KidiWebTech is a leading <strong>website design company in Hyderabad</strong> with
            a track record of delivering beautiful, high-performing website designs for
            businesses of all sizes. From small local shops in Ameerpet to IT companies
            in Hitech City, we have helped hundreds of Hyderabad businesses make a
            powerful first impression online.
          </p>
          <p>
            Our <strong>website design services in Hyderabad</strong> cover everything from
            simple business websites and landing pages to complex ecommerce stores and
            corporate portals. Every design is built with SEO, speed, user experience,
            and conversion in mind.
          </p>
          <p>
            We design using modern tools like <strong>Figma, Adobe XD</strong> and develop
            with <strong>Next.js, React, and WordPress</strong> to bring designs to life
            that load fast, rank well on Google, and deliver an outstanding experience
            on all devices. If you are searching for a{" "}
            <strong>web design company in Hyderabad</strong> that delivers real results,
            contact KidiWebTech today.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Design Your Website in Hyderabad?
          </h2>
          <p className="mb-10 text-lg text-blue-100">
            Talk with our Hyderabad website design team today. Free consultation,
            no commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Request Free Quote
            </a>
            <a
              href="https://wa.me/919390627367"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}