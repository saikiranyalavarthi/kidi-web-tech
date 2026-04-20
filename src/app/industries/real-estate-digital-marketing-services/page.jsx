"use client";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  :root {
    --gold: #F5C842;
    --orange: #F07A26;
    --bg: #080808;
    --surface: #0f0f0f;
    --border: rgba(255,255,255,0.07);
    --text-dim: #888;
    --grad: linear-gradient(135deg, #F5C842, #F07A26);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  h1,h2,h3,h4 { font-family: 'Syne', sans-serif; }

  .g-text {
    background: var(--grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker-track { animation: ticker 30s linear infinite; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(32px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .fade-up { opacity:0; animation: fadeUp .7s ease forwards; }
  .delay-1 { animation-delay:.1s; }
  .delay-2 { animation-delay:.22s; }
  .delay-3 { animation-delay:.36s; }
  .delay-4 { animation-delay:.5s; }

  .reveal { opacity:0; transform:translateY(40px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }

  .service-card {
    position:relative;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius:16px;
    padding:2px;
    overflow:hidden;
    transition: transform .35s ease, box-shadow .35s ease;
  }
  .service-card::before {
    content:'';
    position:absolute;
    inset:0;
    border-radius:16px;
    background: var(--grad);
    opacity:0;
    transition: opacity .35s ease;
    z-index:0;
  }
  .service-card:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(245,200,66,.18); }
  .service-card:hover::before { opacity:1; }
  .service-card-inner { position:relative; z-index:1; background:var(--surface); border-radius:15px; padding:28px; }

  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .stat-box { animation: countUp .5s ease forwards; }

  .mesh {
    position:absolute; inset:0; z-index:0; pointer-events:none;
    background:
      radial-gradient(ellipse 60% 40% at 20% 30%, rgba(245,200,66,.07) 0%, transparent 70%),
      radial-gradient(ellipse 50% 50% at 80% 70%, rgba(240,122,38,.06) 0%, transparent 70%);
  }

  .btn-glow {
    position:relative;
    display:inline-block;
    background: var(--grad);
    color:#000;
    font-family:'Syne',sans-serif;
    font-weight:700;
    padding:14px 40px;
    border-radius:999px;
    text-decoration:none;
    transition: transform .25s, box-shadow .25s;
    font-size:1rem;
  }
  .btn-glow:hover { transform:scale(1.04); box-shadow:0 0 40px rgba(245,200,66,.45); }

  .faq-item { border-bottom:1px solid var(--border); }
  .faq-q {
    width:100%; background:none; border:none; color:#fff; text-align:left;
    font-family:'Syne',sans-serif; font-size:1.05rem; font-weight:600;
    padding:22px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center;
  }
  .faq-a { overflow:hidden; transition: max-height .4s ease, opacity .4s ease; }
  .faq-a p { padding-bottom:20px; color:var(--text-dim); line-height:1.75; font-size:.95rem; }

  .noise::after {
    content:'';
    position:fixed; inset:0; z-index:999; pointer-events:none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity:.035;
  }

  .compare-table { width:100%; border-collapse:collapse; }
  .compare-table th, .compare-table td { padding:16px 20px; text-align:left; border-bottom:1px solid var(--border); font-size:.93rem; }
  .compare-table th { font-family:'Syne',sans-serif; color:var(--gold); background:var(--surface); }
  .compare-table tr:hover td { background:rgba(255,255,255,.02); }

  @media(max-width:768px){
    .grid-3 { grid-template-columns:1fr !important; }
    .grid-4 { grid-template-columns:1fr 1fr !important; }
    h1 { font-size:2.2rem !important; }
  }
`;

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let start = 0;
        const step = Math.ceil(end / 60);
        const t = setInterval(() => {
          start += step;
          if (start >= end) {
            setVal(end);
            clearInterval(t);
          } else setVal(start);
        }, 24);
      },
      { threshold: 0.5 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   FAQ DATA + COMPONENT
───────────────────────────────────────────── */
const faqs = [
  {
    q: "What is real estate digital marketing?",
    a: "Real estate digital marketing is the use of online channels — search engines, social media, paid ads, email, and WhatsApp — to promote property projects, generate buyer and investor leads, and build brand visibility for builders and realtors. It replaces costly offline hoardings and newspaper ads with precisely targeted, measurable digital campaigns.",
  },
  {
    q: "How does SEO help real estate businesses?",
    a: "Real estate SEO helps your property listings and project pages appear on the first page of Google when potential buyers search for terms like 'flats for sale in Hyderabad' or '3BHK apartments in Pune'. This generates consistent, free organic traffic without paying per click. A well-ranked real estate website can generate 50–200+ qualified inquiries per month purely from SEO.",
  },
  {
    q: "How much do Google Ads cost for real estate in India?",
    a: "Cost per click for real estate keywords in India ranges from ₹20 to ₹120 depending on city and property type. Luxury properties in Tier 1 cities attract higher CPCs, while affordable housing in Tier 2 cities can generate leads for ₹150–₹400 per inquiry. We continuously optimise audience targeting and landing pages to drive your cost per qualified lead as low as possible.",
  },
  {
    q: "Which social media platform works best for real estate marketing?",
    a: "Facebook and Instagram are the most effective platforms for real estate in India due to their powerful location, income, and interest targeting capabilities. YouTube is excellent for property virtual tours and project explainer videos. LinkedIn is ideal for commercial real estate, co-working spaces, and targeting HNI investors. We run cross-platform strategies tailored to your buyer persona and project type.",
  },
  {
    q: "How long does it take to generate real estate leads through digital marketing?",
    a: "Paid campaigns (Google Ads, Meta Ads) can begin generating inquiries within 24–72 hours of launch. SEO campaigns typically take 3–5 months to produce significant organic traffic, though local SEO improvements for Google My Business can show results in 4–8 weeks. A combined paid + organic strategy is recommended for immediate lead flow while building long-term organic assets.",
  },
  {
    q: "Do you work with both residential and commercial real estate?",
    a: "Yes. We run campaigns for residential projects (apartments, villas, plots, affordable housing), commercial properties (office spaces, retail shops, warehouses), and mixed-use developments. We also work with individual realtors, brokerages, property portals, co-working startups, and large construction companies. Each project type gets a custom strategy aligned with its buyer profile and sales cycle.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {f.q}
            <span
              style={{
                fontSize: "1.4rem",
                color: "var(--gold)",
                transition: "transform .3s",
                display: "inline-block",
                transform: open === i ? "rotate(45deg)" : "rotate(0)",
              }}
            >
              +
            </span>
          </button>
          <div
            className="faq-a"
            style={{
              maxHeight: open === i ? "320px" : "0",
              opacity: open === i ? 1 : 0,
            }}
          >
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function RealEstateMarketing() {
  useReveal();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real Estate Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Real estate digital marketing services including SEO, Google Ads, social media marketing, WhatsApp automation, and lead generation for builders, realtors, and property developers across India.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Real Estate SEO" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads for Properties",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing for Real Estate",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Lead Generation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp Marketing for Real Estate",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO for Real Estate",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const services = [
    {
      icon: "🔍",
      title: "Real Estate SEO",
      desc: "Rank your property listings, project pages, and city-specific landing pages on Google. We handle technical SEO, keyword clusters, backlink building, and E-E-A-T content to drive qualified organic traffic.",
    },
    {
      icon: "📣",
      title: "Google Ads for Properties",
      desc: "High-converting Search, Display, and YouTube campaigns that generate instant property inquiries. Precise keyword targeting, negative keyword management, and continuous bid optimisation to minimise cost per lead.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Targeted Facebook and Instagram campaigns reaching buyers by location, income bracket, age, and life event. Carousel ads, virtual tour reels, and lead-gen forms that capture enquiries without leaving the platform.",
    },
    {
      icon: "🖥️",
      title: "Landing Page Design",
      desc: "Speed-optimised, mobile-first property landing pages with trust signals, gallery sections, floor plan downloads, and WhatsApp CTAs. Built to convert ad traffic into booked site visits.",
    },
    {
      icon: "💬",
      title: "WhatsApp Marketing",
      desc: "Automated WhatsApp drip sequences that nurture cold leads into warm buyers. Broadcast campaigns for new project launches, price updates, and offer announcements directly to interested prospects.",
    },
    {
      icon: "📍",
      title: "Local SEO",
      desc: "Dominate 'near me' and city-specific property searches. Google My Business optimisation, local citation building, and review management to capture buyers searching in your project's micro-market.",
    },
    {
      icon: "🎥",
      title: "Video & Virtual Tour Marketing",
      desc: "YouTube walkthroughs, drone footage promotion, and 3D virtual tour amplification that let buyers experience your project remotely and arrive at site visits already pre-sold.",
    },
    {
      icon: "📧",
      title: "Email & CRM Nurturing",
      desc: "Automated email sequences mapped to buyer journey stages — from first inquiry to site visit to booking. Integrated with your CRM to prevent leads from going cold in long sales cycles.",
    },
    {
      icon: "📊",
      title: "Lead Analytics & Attribution",
      desc: "Full-funnel tracking from ad click to site visit to booking. Custom dashboards revealing which campaigns, keywords, and creatives generate actual sales — not just clicks.",
    },
  ];

  const stats = [
    { n: 200, s: "+", label: "Real Estate Clients" },
    { n: 35, s: "%", label: "Avg. Cost Per Lead Reduction" },
    { n: 4, s: "x", label: "Average Lead Volume Growth" },
    { n: 500, s: "+", label: "Property Projects Promoted" },
  ];

  const process = [
    {
      step: "01",
      title: "Project Discovery",
      desc: "We study your project, target buyer profile, competitive landscape, and existing lead funnel to identify the biggest growth levers.",
    },
    {
      step: "02",
      title: "Strategy Design",
      desc: "Custom 90-day marketing roadmap with channel mix, budget allocation, creative brief, and launch timeline tailored to your project type.",
    },
    {
      step: "03",
      title: "Launch & Execute",
      desc: "Campaigns go live across agreed channels with compliance checks, landing page QA, and tracking verification before spending a rupee.",
    },
    {
      step: "04",
      title: "Optimise & Scale",
      desc: "Weekly lead quality reviews, creative refresh cycles, and continuous bid and audience optimisation to lower CPL and increase site visits.",
    },
  ];

  const tickerItems = [
    "Real Estate SEO",
    "Google Ads",
    "Property Leads",
    "WhatsApp Marketing",
    "Social Media",
    "Landing Pages",
    "Local SEO",
    "Video Marketing",
    "CRM Nurturing",
    "Lead Analytics",
  ];

  return (
    <div
      className="noise"
      style={{
        background: "var(--bg)",
        color: "#fff",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{globalStyles}</style>

      {/* ── SEO HEAD ── */}
      <Head>
        <title>
          Real Estate Digital Marketing Services India | Property Leads for
          Builders & Realtors | KidiWebTech
        </title>
        <meta
          name="description"
          content="India's leading real estate digital marketing agency. Generate high-quality property leads with SEO, Google Ads, social media, and WhatsApp marketing. Trusted by 200+ builders and realtors."
        />
        <meta
          name="keywords"
          content="real estate digital marketing India, property lead generation, real estate SEO, Google Ads for real estate, builder marketing agency India, realtor digital marketing, property ads India, real estate social media marketing, local SEO real estate, WhatsApp marketing real estate"
        />
        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/real-estate-digital-marketing"
        />
        <meta
          property="og:title"
          content="Real Estate Digital Marketing Services | KidiWebTech India"
        />
        <meta
          property="og:description"
          content="Generate consistent property leads with ROI-driven SEO, Google Ads, social media, and WhatsApp marketing. Trusted by 200+ real estate brands across India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kidiwebtech.com/services/real-estate-digital-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Real Estate Digital Marketing Services | KidiWebTech"
        />
        <meta
          name="twitter:description"
          content="Performance-driven real estate marketing — SEO, paid ads, WhatsApp automation, and lead generation for builders and realtors across India."
        />
      </Head>

      <Script
        id="re-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          padding: "120px 24px 100px",
          textAlign: "center",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <div className="mesh" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            zIndex: 0,
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <div
            className="fade-up delay-1"
            style={{
              display: "inline-block",
              background: "rgba(245,200,66,.1)",
              border: "1px solid rgba(245,200,66,.25)",
              borderRadius: 999,
              padding: "6px 20px",
              fontSize: ".82rem",
              color: "var(--gold)",
              marginBottom: 28,
              fontFamily: "Syne, sans-serif",
              fontWeight: 600,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            India's #1 Real Estate Marketing Agency
          </div>
          <h1
            className="fade-up delay-2"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: 24,
            }}
          >
            Real Estate Digital{" "}
            <span className="g-text">Marketing Services</span> That Fill Your
            Pipeline
          </h1>
          <p
            className="fade-up delay-3"
            style={{
              color: "var(--text-dim)",
              fontSize: "1.15rem",
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Generate high-quality property leads, increase project visibility,
            and sell faster with performance-driven real estate marketing —
            trusted by 200+ builders and realtors across India.
          </p>
          <div
            className="fade-up delay-4"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-glow">
              Get Free Consultation
            </Link>
            <Link
              href="#services"
              style={{
                display: "inline-block",
                border: "1px solid var(--border)",
                color: "#fff",
                padding: "14px 36px",
                borderRadius: 999,
                fontFamily: "Syne, sans-serif",
                fontWeight: 600,
                textDecoration: "none",
                transition: "border-color .25s",
                fontSize: "1rem",
              }}
            >
              Explore Services ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TICKER
      ══════════════════════════════════════ */}
      <div
        style={{
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
          borderTop: "1px solid var(--border)",
          background: "var(--surface)",
          padding: "14px 0",
        }}
      >
        <div
          className="ticker-track"
          style={{
            display: "flex",
            gap: 60,
            whiteSpace: "nowrap",
            width: "max-content",
          }}
        >
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: ".85rem",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: i % 3 === 0 ? "var(--gold)" : "var(--text-dim)",
              }}
            >
              {t}{" "}
              <span style={{ color: "var(--orange)", marginLeft: 30 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="reveal grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-box"
              style={{
                textAlign: "center",
                padding: "40px 20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  background: "var(--grad)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <Counter end={s.n} suffix={s.s} />
              </div>
              <div
                style={{
                  color: "var(--text-dim)",
                  fontSize: ".9rem",
                  marginTop: 8,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section id="services" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
              }}
            >
              Our <span className="g-text">Real Estate Marketing Services</span>
            </h2>
            <p
              style={{
                color: "var(--text-dim)",
                marginTop: 16,
                fontSize: "1.05rem",
                maxWidth: 620,
                margin: "16px auto 0",
              }}
            >
              Complete digital marketing solutions built specifically for
              builders, realtors, and property developers at every scale.
            </p>
          </div>
          <div
            className="grid-3 reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-card-inner">
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      fontFamily: "Syne, sans-serif",
                      marginBottom: 12,
                      background: "var(--grad)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-dim)",
                      fontSize: ".92rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LONG-FORM SEO CONTENT (~2800 words)
      ══════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px 100px",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            color: "#b0b0b0",
            lineHeight: 1.85,
            fontSize: "1rem",
          }}
        >
          {/* Block 1 */}
          <div className="reveal">
            <h2
              style={{
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Why Real Estate Digital Marketing Is No Longer Optional in 2025
            </h2>
            <p style={{ marginBottom: 16 }}>
              India's real estate market crossed ₹23 lakh crore in value in
              2024, and over{" "}
              <strong style={{ color: "#fff" }}>
                90% of property buyers now begin their search online
              </strong>{" "}
              before ever visiting a site or calling a broker. Google searches
              for terms like "flats for sale near me," "affordable housing
              schemes India," and "new residential projects in [city]" receive
              millions of searches every month. Buyers research on portals,
              compare projects on YouTube, and validate their choice through
              Instagram and Facebook before committing to a site visit.
            </p>
            <p style={{ marginBottom: 16 }}>
              Yet many builders and realtors continue to rely on hoardings,
              newspaper inserts, and word-of-mouth — channels that offer zero
              targeting precision, no performance data, and rapidly declining
              returns. The developers who are winning market share in 2025 are
              those who have mastered digital lead generation: they appear at
              the top of Google when buyers search, run hyper-targeted social
              ads to the right income group in the right pin codes, and nurture
              leads through WhatsApp sequences until they walk through the site
              office door.
            </p>
            <p style={{ marginBottom: 16 }}>
              At KidiWebTech, we have spent years building real estate-specific
              digital marketing systems for builders, individual realtors,
              property portals, and co-working space operators across Hyderabad,
              Bangalore, Mumbai, Pune, Delhi-NCR, and beyond. Our frameworks are
              engineered to generate verified buyer inquiries at the lowest
              possible cost per lead, then nurture those leads through the
              complex, multi-touchpoint journey that characterises high-ticket
              property purchases.
            </p>
          </div>

          {/* Block 2 */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              The Biggest Digital Marketing Challenges Facing Real Estate
              Businesses
            </h2>
            <p style={{ marginBottom: 16 }}>
              Before choosing any marketing strategy, it's essential to
              understand the specific obstacles that make real estate marketing
              fundamentally different from e-commerce or SaaS marketing. These
              are not cosmetic differences — they require purpose-built
              solutions:
            </p>

            <h3
              style={{
                color: "var(--gold)",
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: 10,
                marginTop: 28,
              }}
            >
              1. Extremely Long Sales Cycles
            </h3>
            <p style={{ marginBottom: 16 }}>
              A residential property purchase in India involves multiple family
              members, significant financial planning, multiple site visits,
              legal due diligence, and often a home loan approval process. The
              average buyer journey from first online search to booking spans
              3–9 months. Standard short-term ad campaigns cannot sustain a
              lead's interest over this timeline. Our strategy layers paid
              campaigns for immediate lead capture with SEO for sustained
              visibility, email and WhatsApp sequences for long-term nurturing,
              and retargeting to re-engage prospects who went cold.
            </p>

            <h3
              style={{
                color: "var(--gold)",
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: 10,
                marginTop: 28,
              }}
            >
              2. Lead Quality vs Lead Quantity
            </h3>
            <p style={{ marginBottom: 16 }}>
              Real estate developers frequently complain that their existing
              marketing generates hundreds of leads that never convert — fake
              numbers, wrong cities, or buyers with no budget alignment. The
              problem is almost always a targeting and qualification failure,
              not a volume problem. Our campaigns use income-layer audience
              targeting on Meta, high-intent search keyword selection on Google,
              and multi-step lead forms with qualifying questions to ensure your
              sales team only spends time on verified, serious buyers.
            </p>

            <h3
              style={{
                color: "var(--gold)",
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: 10,
                marginTop: 28,
              }}
            >
              3. Hyper-Local Relevance
            </h3>
            <p style={{ marginBottom: 16 }}>
              Real estate is the most geographically specific product category
              in existence. A buyer looking for a 2BHK in Kondapur, Hyderabad
              has zero interest in a project in Miyapur. Every campaign must be
              architected around hyper-local targeting — specific pin codes,
              micro-markets, nearby landmarks, and neighbourhood keywords. Our
              local SEO and geo-targeted ad framework ensures your project
              reaches buyers within the relevant radius, dramatically improving
              lead-to-site-visit conversion rates.
            </p>

            <h3
              style={{
                color: "var(--gold)",
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: 10,
                marginTop: 28,
              }}
            >
              4. High Cost Per Lead in Competitive Markets
            </h3>
            <p style={{ marginBottom: 16 }}>
              Premium residential markets like South Mumbai, Whitefield
              Bangalore, or Gurgaon Golf Course Road attract massive advertiser
              competition, driving Google CPCs to ₹80–₹200+ and Meta CPLs to
              ₹600–₹2,000 for high-budget projects. Without meticulous audience
              segmentation, negative keyword management, and landing page
              optimisation, budgets evaporate with minimal returns. Our
              proprietary CPL reduction framework has consistently achieved
              30–50% lower cost per qualified lead for clients in competitive
              urban markets.
            </p>
          </div>

          {/* Block 3 */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Real Estate SEO: The Highest-ROI Long-Term Channel
            </h2>
            <p style={{ marginBottom: 16 }}>
              Search engine optimisation for real estate is the most
              cost-effective lead generation channel available to property
              businesses when measured over a 12–24 month horizon. Once a
              project page or city-specific landing page ranks on the first page
              of Google for a high-intent keyword, it generates consistent, free
              organic traffic for months or years — without paying per click.
            </p>
            <p style={{ marginBottom: 16 }}>
              The keyword landscape in real estate SEO is rich and highly
              intent-segmented. At the top of the funnel, informational searches
              like "best areas to buy property in Hyderabad 2025" attract buyers
              in the research phase. Mid-funnel, comparison searches like "2BHK
              vs 3BHK which is better investment" indicate buyers narrowing
              options. At the bottom of the funnel, transactional searches like
              "ready-to-move flats in Gachibowli under 60 lakhs" signal
              purchase-ready buyers. A comprehensive real estate SEO strategy
              targets all three layers with dedicated content and landing pages.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our real estate SEO service includes:{" "}
              <strong style={{ color: "#fff" }}>technical site audits</strong>{" "}
              covering page speed, crawl errors, Core Web Vitals, and mobile
              performance;{" "}
              <strong style={{ color: "#fff" }}>local keyword research</strong>{" "}
              mapped to specific project locations, configurations, and price
              segments;{" "}
              <strong style={{ color: "#fff" }}>content clusters</strong> built
              around city guides, neighbourhood explainers, property investment
              guides, and home-buying tutorials;{" "}
              <strong style={{ color: "#fff" }}>
                Google My Business optimisation
              </strong>{" "}
              to rank in the local map pack for "property dealers near me"
              searches; and{" "}
              <strong style={{ color: "#fff" }}>link building</strong> through
              real estate publication outreach, local news mentions, and
              property portal partnerships.
            </p>
          </div>

          {/* Block 4 */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Google Ads for Real Estate: Instant Leads on Day One
            </h2>
            <p style={{ marginBottom: 16 }}>
              While SEO builds long-term organic assets, Google Ads delivers
              immediate, high-intent traffic from buyers actively searching for
              properties right now. Search campaigns targeting keywords like
              "buy apartment in [city]," "new projects in [locality]," or
              "independent house for sale [area]" reach buyers at the exact
              moment of maximum intent — when they have pulled out their phone
              and decided to start seriously exploring options.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our Google Ads management for real estate goes far beyond basic
              campaign setup. We develop granular keyword lists segmented by
              configuration (1BHK, 2BHK, 3BHK, villa, plot), price range, and
              locality. We build dedicated landing pages for each ad group —
              because sending all traffic to your homepage is the single biggest
              conversion rate killer in real estate PPC. We set up comprehensive
              conversion tracking including call tracking, WhatsApp click
              tracking, and form submission tracking so you know exactly which
              keywords and ads are generating genuine inquiries, not just
              clicks.
            </p>
            <p style={{ marginBottom: 16 }}>
              We also run Google Display remarketing campaigns to re-engage the
              95% of visitors who don't convert on their first visit — showing
              them your project ads across news sites, YouTube, and apps they
              use daily until they return and inquire. For project launches,
              YouTube pre-roll ads featuring walkthrough videos dramatically
              increase awareness at a cost per view as low as ₹0.15–₹0.50.
            </p>
          </div>

          {/* Block 5 */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Social Media Marketing for Real Estate: Reaching Buyers Where They
              Spend Their Time
            </h2>
            <p style={{ marginBottom: 16 }}>
              The average Indian internet user spends over 3 hours per day on
              social media — primarily Facebook, Instagram, and YouTube. For
              real estate marketers, these platforms offer targeting
              capabilities that no offline channel can match: you can reach
              users aged 28–45 in a specific set of pin codes, with household
              income above ₹12 lakh per annum, who have expressed interest in
              home loans, property investment, or home décor within the past 30
              days.
            </p>
            <p style={{ marginBottom: 16 }}>
              Facebook and Instagram Lead Ads allow buyers to submit their
              contact details without leaving the social app — eliminating the
              friction of clicking through to a website and dramatically
              increasing form completion rates. Combined with Advantage+
              audience targeting, which uses Meta's machine learning to identify
              additional buyers similar to your existing converted leads, these
              campaigns consistently deliver CPLs of ₹200–₹600 for affordable
              and mid-segment residential projects.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our social media content strategy for real estate extends beyond
              lead generation ads. We build brand equity through project update
              reels, construction progress videos, customer testimonial clips,
              area infrastructure development posts, and lifestyle content that
              helps buyers visualise their life in your project. This consistent
              organic presence keeps your brand top-of-mind across the buyer's
              multi-month research journey and significantly improves the
              conversion rate of your paid campaigns.
            </p>
          </div>

          {/* Block 6 */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              WhatsApp Marketing: The Highest-Converting Lead Nurture Channel in
              India
            </h2>
            <p style={{ marginBottom: 16 }}>
              With over 500 million active users in India, WhatsApp is where
              property purchase decisions actually happen. A buyer who submits a
              lead form on your landing page is not ready to buy — they are
              ready to start a conversation. If that conversation happens over
              WhatsApp rather than a cold sales call, the probability of
              converting them into a site visit appointment increases by 3–5x,
              based on our campaign data across clients.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our WhatsApp marketing service for real estate covers automated
              welcome sequences triggered immediately when a lead submits a
              form; drip campaigns delivering project brochures, floor plans,
              payment plan options, and RERA details at timed intervals;
              broadcast campaigns for new project launches, pre-launch offers,
              and inventory updates to your existing lead database; and two-way
              conversation management for handling objections, scheduling site
              visits, and following up on post-visit leads.
            </p>
            <p style={{ marginBottom: 16 }}>
              All WhatsApp campaigns are run through the official WhatsApp
              Business API via approved Business Solution Providers, ensuring
              full compliance with Meta's messaging policies and protecting your
              sender reputation. This is a critical detail many agencies
              overlook, resulting in account bans that wipe out your entire lead
              database.
            </p>
          </div>

          {/* Block 7 */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Real Estate Project Types We Market
            </h2>
            <p style={{ marginBottom: 16 }}>
              Real estate is a diverse sector with very different buyer profiles
              and marketing requirements across project types. Our team has deep
              campaign experience across:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              {[
                "Luxury Residential Apartments & Villas",
                "Affordable Housing & PMAY Scheme Projects",
                "Plotted Development & Township Projects",
                "Ready-to-Move Residential Projects",
                "Under-Construction Projects & Pre-Launches",
                "Commercial Office Spaces & IT Parks",
                "Retail Shops, Showrooms & Mixed-Use Developments",
                "Co-Working & Managed Office Spaces",
                "Warehouse & Industrial Properties",
                "NRI-Targeted Property Marketing",
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: 8, color: "#b0b0b0" }}>
                  <span style={{ color: "var(--gold)", marginRight: 10 }}>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Each project type has a distinct buyer persona, preferred platform
              mix, price sensitivity, and conversion timeline. Our
              vertical-specific playbooks ensure your marketing budget is
              allocated to the channels and creative formats that have
              demonstrably performed best for similar project types — giving
              your campaigns a significant head start over generic approaches.
            </p>
          </div>

          {/* Block 8 */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem,2.8vw,2rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Why KidiWebTech Is the Right Real Estate Marketing Partner for You
            </h2>
            <p style={{ marginBottom: 16 }}>
              There are hundreds of digital marketing agencies claiming to
              specialise in real estate. Most are general agencies that have
              added "real estate" to their service list without developing the
              vertical expertise, industry-specific tools, or compliance
              frameworks required to deliver consistent results. Here is what
              differentiates KidiWebTech:
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#fff" }}>
                Real estate-only focus within property vertical:
              </strong>{" "}
              Our campaign managers have collectively managed over ₹50 crore in
              real estate ad spend across India. We know which localities
              respond to which creative formats, which configurations generate
              the most WhatsApp inquiries, and how to structure campaigns for
              RERA-compliant advertising across different states.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#fff" }}>
                Verified lead quality guarantee:
              </strong>{" "}
              We don't measure success by raw lead volume. We track
              lead-to-site-visit conversion rates, site-visit-to-booking rates,
              and ultimately revenue attributed to digital marketing — because
              those are the numbers that matter to your sales team and your CFO.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#fff" }}>
                Integrated channel management:
              </strong>{" "}
              SEO, paid search, social ads, WhatsApp, email, and landing page
              CRO are managed as a single integrated system — not siloed
              services bought from different vendors. This integration is what
              drives compounding growth: organic traffic improves quality scores
              for paid campaigns, retargeting converts organic visitors, and
              WhatsApp sequences close leads from all channels.
            </p>
            <p>
              <strong style={{ color: "#fff" }}>
                Transparent weekly reporting:
              </strong>{" "}
              Every Monday you receive a performance report covering
              impressions, clicks, leads, CPL, site visits booked, and budget
              utilisation across all active campaigns. Direct access to your
              account manager via Slack or WhatsApp for quick answers and rapid
              creative changes.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.9rem,3.5vw,2.6rem)",
                fontWeight: 800,
              }}
            >
              Our <span className="g-text">4-Step Growth Process</span>
            </h2>
          </div>
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
            }}
          >
            {process.map((p, i) => (
              <div
                key={i}
                style={{ position: "relative", textAlign: "center" }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--grad)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontFamily: "Syne",
                    fontWeight: 800,
                    color: "#000",
                    fontSize: "1rem",
                  }}
                >
                  {p.step}
                </div>
                <h3
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-dim)",
                    fontSize: ".9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
                {i < process.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 27,
                      left: "calc(50% + 30px)",
                      right: "calc(-50% + 30px)",
                      height: 1,
                      background:
                        "linear-gradient(90deg, var(--gold), transparent)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════ */}
      <section
        style={{ padding: "100px 24px", borderTop: "1px solid var(--border)" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <h2
              style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", fontWeight: 800 }}
            >
              KidiWebTech vs <span className="g-text">Generic Agency</span>
            </h2>
          </div>
          <div
            className="reveal"
            style={{
              overflowX: "auto",
              borderRadius: 16,
              border: "1px solid var(--border)",
            }}
          >
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>KidiWebTech</th>
                  <th>Generic Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Real Estate Domain Expertise",
                    "✅ 200+ RE projects managed",
                    "❌ Generalist approach",
                  ],
                  [
                    "Lead Quality Verification",
                    "✅ Qualification forms + scoring",
                    "❌ Raw lead counts only",
                  ],
                  [
                    "WhatsApp Automation",
                    "✅ Official API via BSP",
                    "❌ Unofficial tools, risk of ban",
                  ],
                  [
                    "RERA-Compliant Ad Copy",
                    "✅ State-wise compliance checks",
                    "❌ Rarely considered",
                  ],
                  [
                    "Hyper-Local Targeting",
                    "✅ Pin code + micro-market level",
                    "❌ City-level targeting only",
                  ],
                  [
                    "Full Attribution Tracking",
                    "✅ Click to booking dashboard",
                    "❌ Basic GA reports",
                  ],
                  [
                    "Video & Virtual Tour Marketing",
                    "✅ Integrated in campaigns",
                    "❌ Usually not offered",
                  ],
                ].map(([feat, us, them], i) => (
                  <tr key={i}>
                    <td style={{ color: "#ccc" }}>{feat}</td>
                    <td style={{ color: "#6ee7a0" }}>{us}</td>
                    <td style={{ color: "#f87171" }}>{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section
        style={{
          padding: "100px 24px",
          borderTop: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <h2
              style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", fontWeight: 800 }}
            >
              Frequently Asked <span className="g-text">Questions</span>
            </h2>
          </div>
          <div className="reveal">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section
        style={{
          padding: "120px 24px",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mesh" />
        <div
          className="reveal"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              marginBottom: 20,
            }}
          >
            Ready to Generate More{" "}
            <span className="g-text">Property Leads?</span>
          </h2>
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: "1.1rem",
              marginBottom: 40,
              lineHeight: 1.7,
            }}
          >
            Book a free 45-minute strategy session with our real estate
            marketing experts. We'll audit your current lead generation and
            share a custom roadmap — no commitment required.
          </p>
          <Link
            href="/contact"
            className="btn-glow"
            style={{ fontSize: "1.05rem", padding: "16px 48px" }}
          >
            Book Free Strategy Call
          </Link>
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: ".82rem",
              marginTop: 20,
            }}
          >
            No commitment required · Response within 4 business hours
          </p>
        </div>
      </section>
    </div>
  );
}
