"use client";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   GLOBAL STYLES  (injected once via <style>)
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

  /* ── ticker ── */
  @keyframes ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker-track { animation: ticker 28s linear infinite; }

  /* ── fade-up ── */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(32px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .fade-up { opacity:0; animation: fadeUp .7s ease forwards; }
  .delay-1 { animation-delay:.1s; }
  .delay-2 { animation-delay:.22s; }
  .delay-3 { animation-delay:.36s; }
  .delay-4 { animation-delay:.5s; }
  .delay-5 { animation-delay:.65s; }

  /* ── reveal on scroll ── */
  .reveal { opacity:0; transform:translateY(40px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }

  /* ── card hover ── */
  .service-card {
    position:relative;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius:16px;
    padding:32px 28px;
    overflow:hidden;
    transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
  }
  .service-card::before {
    content:'';
    position:absolute;
    inset:-1px;
    border-radius:17px;
    background: var(--grad);
    opacity:0;
    transition: opacity .35s ease;
    z-index:0;
  }
  .service-card:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(245,200,66,.18); border-color:transparent; }
  .service-card:hover::before { opacity:1; }
  .service-card-inner { position:relative; z-index:1; background:var(--surface); border-radius:15px; padding:28px; margin:-1px; }

  /* ── stat counter ── */
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .stat-box { animation: countUp .5s ease forwards; }

  /* ── mesh bg ── */
  .mesh {
    position:absolute; inset:0; z-index:0; pointer-events:none;
    background:
      radial-gradient(ellipse 60% 40% at 20% 30%, rgba(245,200,66,.07) 0%, transparent 70%),
      radial-gradient(ellipse 50% 50% at 80% 70%, rgba(240,122,38,.06) 0%, transparent 70%);
  }

  /* ── process step ── */
  .step-line::after {
    content:'';
    position:absolute;
    top:28px; left:50%; right:-50%;
    height:1px;
    background: linear-gradient(90deg, var(--gold), transparent);
  }

  /* ── glow btn ── */
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

  /* ── accordion ── */
  .faq-item { border-bottom:1px solid var(--border); }
  .faq-q {
    width:100%; background:none; border:none; color:#fff; text-align:left;
    font-family:'Syne',sans-serif; font-size:1.05rem; font-weight:600;
    padding:22px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center;
  }
  .faq-a { overflow:hidden; transition: max-height .4s ease, opacity .4s ease; }
  .faq-a p { padding-bottom:20px; color:var(--text-dim); line-height:1.75; font-size:.95rem; }

  /* ── noise overlay ── */
  .noise::after {
    content:'';
    position:fixed; inset:0; z-index:999; pointer-events:none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity:.035;
  }

  /* ── table ── */
  .compare-table { width:100%; border-collapse:collapse; }
  .compare-table th, .compare-table td { padding:16px 20px; text-align:left; border-bottom:1px solid var(--border); font-size:.93rem; }
  .compare-table th { font-family:'Syne',sans-serif; color:var(--gold); background:var(--surface); }
  .compare-table tr:hover td { background:rgba(255,255,255,.02); }

  @media(max-width:768px){
    .grid-3 { grid-template-columns:1fr !important; }
    .grid-2 { grid-template-columns:1fr !important; }
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
   FAQ ACCORDION
───────────────────────────────────────────── */
const faqs = [
  {
    q: "What is fintech digital marketing?",
    a: "Fintech digital marketing refers to the specialized strategies and tactics used to promote financial technology products and services online. It encompasses SEO, paid advertising, content marketing, social media, and conversion optimization — all tailored to the unique compliance, trust, and acquisition challenges of the financial sector.",
  },
  {
    q: "Why does fintech need a specialized marketing agency?",
    a: "Financial products are heavily regulated and require a high degree of user trust before conversion. A specialized fintech marketing agency understands RBI guidelines, SEBI advertising norms, and compliance requirements while still driving aggressive growth. Generic agencies often mishandle financial messaging, leading to ad disapprovals or regulatory issues.",
  },
  {
    q: "How long does fintech SEO take to show results?",
    a: "Typically, you can expect meaningful organic traffic improvements within 3–6 months of implementing a comprehensive fintech SEO strategy. High-authority finance keywords are competitive, but with technical SEO, quality backlinks, and E-E-A-T optimized content, rankings improve steadily. Some long-tail keywords can rank within 6–8 weeks.",
  },
  {
    q: "What is the average cost of fintech performance marketing?",
    a: "Costs vary based on product type, target audience, and platform. For a lending or insurance app in India, Google UAC campaigns typically run ₹50–₹150 cost-per-install, while lead generation for loan products averages ₹200–₹800 per qualified lead. We optimize continuously to lower your CAC.",
  },
  {
    q: "Do you handle compliance for fintech ads?",
    a: "Yes. All our ad creatives and copy are reviewed against ASCI guidelines, RBI digital lending norms, and platform-specific financial advertising policies. We include required disclaimers and ensure no misleading claims — protecting your brand and your users.",
  },
  {
    q: "Can you market both B2B and B2C fintech products?",
    a: "Absolutely. We run account-based marketing (ABM) campaigns for B2B fintech SaaS targeting CFOs, banks, and NBFCs, as well as high-volume B2C acquisition funnels for wallets, lending apps, insurance platforms, and investment products.",
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
              maxHeight: open === i ? "300px" : "0",
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
export default function FintechMarketing() {
  useReveal();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fintech Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Fintech digital marketing services including SEO, performance marketing, social media and lead generation for financial startups and companies in India.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fintech Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Fintech SEO" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Performance Marketing for Fintech",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Fintech Lead Generation" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App Marketing for Fintech",
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
      title: "Fintech SEO",
      desc: "Dominate Google rankings for high-intent finance keywords. We perform deep technical audits, build authoritative backlinks, and create E-E-A-T compliant content that ranks and converts.",
    },
    {
      icon: "📈",
      title: "Performance Marketing",
      desc: "ROI-obsessed paid campaigns across Google, Meta, YouTube, and programmatic networks. Continuous A/B testing, audience segmentation, and funnel optimization to slash your CAC.",
    },
    {
      icon: "🎯",
      title: "Lead Generation",
      desc: "Precision funnels that attract and qualify prospects for loans, insurance, investment, and payment products. Multi-channel nurture sequences that move leads from awareness to activation.",
    },
    {
      icon: "🖥️",
      title: "Landing Page CRO",
      desc: "High-converting landing pages built for trust signals, speed, and regulatory compliance. We test headlines, CTAs, social proof, and form flows to maximize conversion rates.",
    },
    {
      icon: "✍️",
      title: "Content Marketing",
      desc: "Long-form SEO blogs, comparison guides, explainer articles, and video scripts that educate users, build brand authority, and generate organic traffic at scale.",
    },
    {
      icon: "📱",
      title: "Fintech App Marketing",
      desc: "User acquisition for Android and iOS fintech apps via Google UAC, Meta App Ads, and ASO. We optimize installs, activation rates, and day-30 retention simultaneously.",
    },
    {
      icon: "📣",
      title: "Social Media Marketing",
      desc: "LinkedIn thought leadership, Twitter/X engagement, and Instagram brand campaigns tailored for fintech audiences. Community building that translates into product trust.",
    },
    {
      icon: "🔗",
      title: "Affiliate & Partnership Marketing",
      desc: "Build scalable distribution through fintech affiliate networks, co-marketing partnerships, and influencer collaborations with finance creators and money management channels.",
    },
    {
      icon: "📊",
      title: "Analytics & Attribution",
      desc: "Full-funnel tracking with GA4, Mixpanel, or Clevertap. We build custom dashboards so you always know which channels drive real revenue, not just vanity metrics.",
    },
  ];

  const stats = [
    { n: 150, s: "+", label: "Fintech Clients Served" },
    { n: 40, s: "%", label: "Avg. CAC Reduction" },
    { n: 320, s: "%", label: "Avg. Organic Traffic Growth" },
    { n: 8, s: "x", label: "Average ROAS Delivered" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Audit",
      desc: "Deep-dive into your product, audience, competitive landscape, and existing marketing performance.",
    },
    {
      step: "02",
      title: "Strategy & Roadmap",
      desc: "Custom 90-day growth roadmap with channel prioritization, budget allocation, and KPI targets.",
    },
    {
      step: "03",
      title: "Launch & Execute",
      desc: "Rapid campaign deployment across SEO, paid, content, and social with compliance checks at every step.",
    },
    {
      step: "04",
      title: "Optimize & Scale",
      desc: "Weekly data reviews, creative refresh cycles, and budget reallocation toward highest-performing channels.",
    },
  ];

  const tickerItems = [
    "Fintech SEO",
    "Performance Marketing",
    "Lead Generation",
    "App Marketing",
    "CRO",
    "Content Strategy",
    "Analytics",
    "Social Media",
    "Affiliate Marketing",
    "Brand Building",
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
          Fintech Digital Marketing Services India | SEO, Ads & Lead Generation
          | KidiWebTech
        </title>
        <meta
          name="description"
          content="India's leading fintech digital marketing agency. Scale your financial app, lending platform, or insurtech startup with data-driven SEO, performance ads, and lead generation. Get measurable ROI."
        />
        <meta
          name="keywords"
          content="fintech digital marketing, fintech SEO India, financial services marketing, fintech lead generation, banking app marketing, lending app SEO, insurtech marketing, fintech performance marketing, financial startup marketing agency India, fintech content marketing"
        />
        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/fintech-digital-marketing"
        />
        <meta
          property="og:title"
          content="Fintech Digital Marketing Services | KidiWebTech India"
        />
        <meta
          property="og:description"
          content="Scale your fintech business with ROI-driven SEO, performance marketing, and lead generation. Trusted by 150+ financial brands across India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kidiwebtech.com/services/fintech-digital-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fintech Digital Marketing Services | KidiWebTech"
        />
        <meta
          name="twitter:description"
          content="Data-driven fintech marketing — SEO, paid ads, lead generation, and app marketing for financial brands in India."
        />
      </Head>

      <Script
        id="fintech-schema"
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
            position: "relative",
            zIndex: 1,
            maxWidth: 800,
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
            India's #1 Fintech Growth Partner
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
            Fintech Digital <span className="g-text">Marketing Services</span>{" "}
            That Drive Real Growth
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
            Acquire users, build credibility, and scale revenue with
            performance-driven fintech marketing strategies — trusted by 150+
            financial brands across India.
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
              Get Free Strategy Session
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
        {/* decorative grid lines */}
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
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
          }}
          id="stats"
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
              Our <span className="g-text">Fintech Marketing Services</span>
            </h2>
            <p
              style={{
                color: "var(--text-dim)",
                marginTop: 16,
                fontSize: "1.05rem",
                maxWidth: 600,
                margin: "16px auto 0",
              }}
            >
              End-to-end growth solutions built specifically for financial
              technology companies at every stage.
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
          LONG-FORM SEO CONTENT  (~2800 words)
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
              What Is Fintech Digital Marketing — And Why Does It Matter in
              2025?
            </h2>
            <p style={{ marginBottom: 16 }}>
              Fintech digital marketing is the strategic application of digital
              channels — search engines, paid media, social platforms, content
              ecosystems, and mobile — to promote financial technology products
              and services. Unlike conventional marketing, fintech marketing
              operates at the intersection of regulatory compliance, high
              consumer distrust, and intensely competitive search landscapes.
              Every campaign must simultaneously educate users about complex
              financial products, build the psychological safety required before
              someone shares their bank details, and still outperform
              well-funded competitors on metrics like cost per acquisition (CAC)
              and lifetime value (LTV).
            </p>
            <p style={{ marginBottom: 16 }}>
              India's fintech market is expected to reach{" "}
              <strong style={{ color: "#fff" }}>
                $1.3 trillion in transaction value by 2030
              </strong>
              , making it the third-largest fintech ecosystem globally. From
              UPI-powered payment apps to lending marketplaces, robo-advisors,
              and embedded insurance platforms — the number of fintech products
              competing for the same user's attention has exploded. In this
              environment, the fintech companies that invest early and
              intelligently in digital marketing build durable competitive
              moats. Those that delay often find user acquisition costs
              multiplying 3x–5x within 18 months as competitors corner
              high-intent keywords and social audiences.
            </p>
            <p style={{ marginBottom: 16 }}>
              At KidiWebTech, we have spent years building fintech-specific
              marketing frameworks that respect both the ambition of growth
              teams and the guardrails imposed by regulators. Whether you are a
              seed-stage lending startup trying to get your first 1,000 verified
              borrowers, or a Series C payments platform looking to halve CAC
              while doubling monthly active users, our playbooks are engineered
              for your exact stage and vertical.
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
              The Unique Challenges of Marketing a Fintech Product in India
            </h2>
            <p style={{ marginBottom: 16 }}>
              Marketing a fintech product is fundamentally different from
              marketing a SaaS tool or an e-commerce brand. The challenges are
              structural, not cosmetic, and any agency that ignores them will
              waste your budget within weeks:
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
              1. Regulatory Compliance in Advertising
            </h3>
            <p style={{ marginBottom: 16 }}>
              RBI's digital lending guidelines, SEBI's advertising code for
              investment products, IRDAI's regulations for insurance marketing,
              and platform-specific financial advertising policies (Google's
              financial products policy, Meta's credit advertising restrictions)
              create a complex compliance matrix. Non-compliant ads don't just
              get disapproved — they can result in account bans, regulatory
              notices, or reputational damage. Our compliance-first creative
              process ensures every ad, landing page, and email is cleared
              against current guidelines before going live.
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
              2. Trust as the Primary Conversion Barrier
            </h3>
            <p style={{ marginBottom: 16 }}>
              A consumer considering an online loan application or a new
              investment platform is not just evaluating features — they are
              assessing risk. Concerns about data privacy, predatory lending
              practices, and digital fraud are front of mind for Indian internet
              users, particularly in Tier 2 and Tier 3 cities. Our marketing
              builds trust systematically: through Google E-E-A-T signals,
              transparent UX copy, visible security certifications, authentic
              user testimonials, and PR placements in credible financial
              publications.
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
              3. Extremely Competitive SEO Landscape
            </h3>
            <p style={{ marginBottom: 16 }}>
              Finance is one of the most contested SEO verticals in the world.
              Keywords like "instant personal loan," "best mutual fund app," and
              "compare term insurance" attract bids from multi-billion-dollar
              incumbents. Winning organic visibility requires domain authority
              building, topical authority through content clusters, technical
              SEO perfection, and strategic backlink acquisition — not just
              on-page optimization. We have helped fintech clients achieve
              first-page rankings for competitive terms within 4–7 months using
              our proprietary content-velocity framework combined with high-DA
              financial media placements.
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
              4. Long and Complex User Journeys
            </h3>
            <p style={{ marginBottom: 16 }}>
              Unlike e-commerce where a user can convert in a single session,
              fintech conversions — a completed loan application, a KYC-verified
              investment account, or an insurance purchase — often span multiple
              touchpoints across days or weeks. Effective attribution modelling,
              multi-touch retargeting, and lifecycle email/WhatsApp sequences
              are essential to nurture users from awareness to activation and
              through to long-term retention.
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
              Fintech SEO: Building Organic Traffic That Compounds Over Time
            </h2>
            <p style={{ marginBottom: 16 }}>
              Search engine optimization for fintech is the highest-LTV
              marketing channel available to financial brands. Organic traffic,
              once earned, costs nothing per click. A single top-3 ranking for
              "best personal loan app India" can drive thousands of high-intent
              sessions every month for years. The return on investment from
              fintech SEO consistently outperforms paid channels when measured
              over an 18–24 month horizon.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our fintech SEO methodology follows Google's E-E-A-T framework
              (Experience, Expertise, Authoritativeness, Trustworthiness) — the
              standard by which Google evaluates Your Money, Your Life (YMYL)
              pages, which includes virtually all financial content. This means
              author credentialing, fact-checking workflows, editorial policies,
              and expert review processes are baked into every piece of content
              we produce.
            </p>
            <p style={{ marginBottom: 16 }}>
              Key components of our fintech SEO service include:{" "}
              <strong style={{ color: "#fff" }}>technical SEO audits</strong>{" "}
              covering Core Web Vitals, crawlability, schema markup, and mobile
              performance;{" "}
              <strong style={{ color: "#fff" }}>keyword research</strong>{" "}
              segmented by funnel stage, user intent, and financial product
              type;{" "}
              <strong style={{ color: "#fff" }}>
                content cluster architecture
              </strong>{" "}
              that builds topical authority around your core product categories;{" "}
              <strong style={{ color: "#fff" }}>link building</strong> through
              guest posts, digital PR, and journalist outreach to RBI-regulated
              financial media; and{" "}
              <strong style={{ color: "#fff" }}>local SEO</strong> for fintech
              companies serving specific geographies or operating physical
              touchpoints like CSP networks.
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
              Performance Marketing for Fintech: Maximising ROI on Every Rupee
              Spent
            </h2>
            <p style={{ marginBottom: 16 }}>
              Paid digital advertising for fintech products demands a level of
              precision that generic performance marketers rarely achieve.
              Financial ad policies on Google and Meta are among the strictest
              in any industry — requiring pre-authorization for credit,
              investing, and insurance products. Audience targeting is
              constrained by platform policies that prohibit targeting based on
              financial vulnerability signals. Creative messaging must be
              carefully worded to avoid misleading claims under ASCI guidelines.
            </p>
            <p style={{ marginBottom: 16 }}>
              Within these constraints, our performance marketing team
              consistently delivers above-benchmark results. For a lending
              client, we reduced cost per verified lead from ₹1,200 to ₹380
              within 90 days through a combination of lookalike audience
              restructuring, ad copy reframing from feature-led to outcome-led
              messaging, and landing page CRO that increased form completion
              rates by 68%. For a wealth management app, we scaled monthly
              installs 4x while maintaining a CAC below ₹95 per install through
              YouTube masthead campaigns combined with Google UAC optimization.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our performance marketing stack covers Google Search, Display, and
              UAC; Meta (Facebook + Instagram) lead ads and App campaigns;
              YouTube pre-roll and bumper ads; LinkedIn for B2B fintech;
              programmatic display via DV360; and native advertising on
              financial portals like Moneycontrol, Economic Times Wealth, and
              Mint.
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
              Fintech Content Marketing: Authority That Converts
            </h2>
            <p style={{ marginBottom: 16 }}>
              Content is the currency of trust in fintech. A user researching
              whether to apply for a business loan doesn't want an ad — they
              want a clear, expert explanation of interest rate types,
              eligibility criteria, and documentation requirements. The brand
              that provides that information earns the user's trust and,
              critically, their backlink profile, brand recall, and eventual
              application.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our content marketing service for fintech encompasses long-form
              SEO articles (2,500–5,000 words) optimised for featured snippets
              and People Also Ask boxes; comparison content targeting
              high-intent "vs" and "best" queries; regulatory explainers that
              demonstrate compliance literacy and build user confidence; video
              scripts for YouTube channels and reels; email drip sequences for
              loan application nurturing; and data-driven research reports that
              earn natural backlinks from financial media and government
              portals.
            </p>
            <p style={{ marginBottom: 16 }}>
              We maintain a dedicated team of finance writers with SEBI/NISM
              certifications and editorial experience at leading publications
              including The Economic Times, LiveMint, and Business Standard.
              This ensures every piece of content meets Google's quality rater
              guidelines for YMYL topics — a non-negotiable requirement for
              ranking in competitive finance verticals.
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
              Fintech App Marketing: From Install to Loyal Active User
            </h2>
            <p style={{ marginBottom: 16 }}>
              India has over 750 million smartphone users, and financial apps
              are among the most downloaded categories on both the Play Store
              and App Store. Yet install volumes are a vanity metric if users
              don't complete KYC, link their bank accounts, or make their first
              transaction. Effective fintech app marketing closes the gap
              between install and activation — and then between activation and
              long-term engagement.
            </p>
            <p style={{ marginBottom: 16 }}>
              Our app marketing service covers{" "}
              <strong style={{ color: "#fff" }}>
                App Store Optimisation (ASO)
              </strong>{" "}
              — optimising your app title, description, screenshots, and keyword
              metadata to rank higher in search results within the Play Store
              and App Store;{" "}
              <strong style={{ color: "#fff" }}>Google UAC campaigns</strong>{" "}
              with creative matrix testing across text, image, and video asset
              types;{" "}
              <strong style={{ color: "#fff" }}>deep-link retargeting</strong>{" "}
              that re-engages users who installed but didn't activate;{" "}
              <strong style={{ color: "#fff" }}>cohort analysis</strong> to
              identify which acquisition channels produce the highest day-7,
              day-30, and day-90 retention; and{" "}
              <strong style={{ color: "#fff" }}>
                push notification and in-app messaging
              </strong>{" "}
              strategy to drive feature adoption and transaction frequency.
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
              Industries We Serve Within the Fintech Ecosystem
            </h2>
            <p style={{ marginBottom: 16 }}>
              Fintech is not a monolithic category — a digital lending startup
              has completely different marketing needs from a B2B payment
              gateway or a retail investment platform. Our team has deep
              vertical expertise across:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              {[
                "Digital Lending & BNPL Platforms",
                "Neobanks & Digital Savings Accounts",
                "Mutual Fund & Wealth Management Apps",
                "Insurtech & Online Insurance Aggregators",
                "Payment Gateways & UPI Apps",
                "Blockchain & Crypto Platforms",
                "Regtech & Compliance SaaS",
                "B2B Fintech & Banking-as-a-Service",
                "Micro-Credit & Rural Finance Startups",
                "Corporate Expense Management Tools",
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
              Each vertical demands different keyword strategies, creative
              approaches, audience targeting parameters, and compliance
              frameworks. Our vertical-specific playbooks — developed across
              150+ fintech engagements — give your campaigns a head start that
              generalist agencies cannot replicate.
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
              Why KidiWebTech Is India's Preferred Fintech Marketing Agency
            </h2>
            <p style={{ marginBottom: 16 }}>
              There are thousands of digital marketing agencies in India. Very
              few have the combination of financial domain knowledge, technical
              marketing expertise, compliance awareness, and creative
              capabilities required to grow a fintech brand in today's
              environment. Here's what sets KidiWebTech apart:
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#fff" }}>Fintech-only focus:</strong> We
              don't dilute our attention across retail, education, and
              healthcare clients. Our entire team — strategists, content
              writers, paid media managers, and SEO specialists — is focused
              exclusively on financial technology and financial services
              marketing.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#fff" }}>
                Compliance-first processes:
              </strong>{" "}
              Every campaign asset goes through a compliance review checklist
              aligned with current RBI, SEBI, IRDAI, and ASCI guidelines before
              launch. We have never had a client receive a regulatory notice
              related to advertising.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#fff" }}>Full-funnel ownership:</strong>{" "}
              We don't just run ads or write blogs in isolation. We build
              integrated growth systems where SEO, paid, content, CRO, and
              retention work together — because fintech growth requires every
              touchpoint in the funnel to be optimised simultaneously.
            </p>
            <p>
              <strong style={{ color: "#fff" }}>Transparent reporting:</strong>{" "}
              You get weekly performance dashboards, monthly strategy reviews,
              and direct Slack access to your account lead. No black boxes. No
              vanity metrics. Only the KPIs that actually matter to your CFO —
              CAC, LTV, activation rate, and revenue attributed to marketing.
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
            className="grid-3 reveal"
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
                      display: "block",
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
                    "Fintech Domain Expertise",
                    "✅ Dedicated fintech team",
                    "❌ Generalist approach",
                  ],
                  [
                    "Compliance Review Process",
                    "✅ Pre-launch compliance checks",
                    "❌ Rarely considered",
                  ],
                  [
                    "Finance Content Writers",
                    "✅ SEBI/NISM certified writers",
                    "❌ General content writers",
                  ],
                  [
                    "Performance Benchmarks",
                    "✅ Fintech-specific KPI targets",
                    "❌ Industry-agnostic targets",
                  ],
                  [
                    "Regulatory Ad Approvals",
                    "✅ Handled in-house",
                    "❌ Outsourced or skipped",
                  ],
                  [
                    "Full-Funnel Attribution",
                    "✅ Custom dashboards per client",
                    "❌ Basic GA reports",
                  ],
                  [
                    "App Marketing (UAC + ASO)",
                    "✅ Integrated service",
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
            Ready to Scale Your{" "}
            <span className="g-text">Fintech Business?</span>
          </h2>
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: "1.1rem",
              marginBottom: 40,
              lineHeight: 1.7,
            }}
          >
            Book a free 45-minute strategy session with our fintech marketing
            experts. We'll audit your current growth channels and share a custom
            roadmap — no strings attached.
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
