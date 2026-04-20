"use client";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Inline global styles injected once ── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --gold:   #F5C842;
      --amber:  #F59E0B;
      --fire:   #F97316;
      --bg:     #080808;
      --surface:#111111;
      --border: rgba(255,255,255,0.07);
      --muted:  #9CA3AF;
      --white:  #FFFFFF;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--white);
      font-family: 'DM Sans', sans-serif;
      overflow-x: hidden;
    }

    .syne { font-family: 'Syne', sans-serif; }

    /* gradient text */
    .g-text {
      background: linear-gradient(135deg, var(--gold) 0%, var(--fire) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* gradient border card */
    .g-card {
      position: relative;
      border-radius: 20px;
    }
    .g-card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 1.5px;
      background: linear-gradient(135deg, var(--gold), var(--fire));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    /* noise overlay for depth */
    .noise::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
      opacity: 0.35;
    }

    /* scroll-reveal */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* stagger children */
    .stagger > * { transition-delay: calc(var(--i, 0) * 0.08s); }

    /* floating orbs */
    @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-40px) scale(1.08)} }
    @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,30px) scale(0.95)} }
    @keyframes float3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(15px,20px) scale(1.05)} }
    .orb1 { animation: float1 8s ease-in-out infinite; }
    .orb2 { animation: float2 11s ease-in-out infinite; }
    .orb3 { animation: float3 9s ease-in-out infinite; }

    /* hero text fade-in */
    @keyframes fadeUp { from{opacity:0;transform:translateY(50px)} to{opacity:1;transform:translateY(0)} }
    .hero-title { animation: fadeUp 0.9s ease forwards; }
    .hero-sub   { animation: fadeUp 0.9s 0.2s ease forwards; opacity:0; }
    .hero-cta   { animation: fadeUp 0.9s 0.4s ease forwards; opacity:0; }

    /* counter roll */
    @keyframes countUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    .count-anim { animation: countUp 0.6s ease forwards; }

    /* pulsing glow on CTA button */
    @keyframes pulse-glow {
      0%,100%  { box-shadow: 0 0 0px 0px rgba(245,200,66,0); }
      50% { box-shadow: 0 0 24px 6px rgba(245,200,66,0.35); }
    }
    .cta-btn { animation: pulse-glow 3s ease-in-out infinite; }

    /* marquee */
    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .marquee-track { animation: marquee 22s linear infinite; display:flex; width:max-content; }

    /* grid lines bg */
    .grid-bg {
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    /* service card hover */
    .svc-card {
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }
    .svc-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 60px rgba(245,115,22,0.18);
    }

    /* process step connector */
    .step-line {
      position: absolute;
      top: 28px;
      right: -50%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, var(--gold), transparent);
    }

    /* accordion */
    .faq-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.45s ease, padding 0.3s ease;
    }
    .faq-body.open { max-height: 300px; }

    /* divider */
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border), transparent);
    }

    /* tag pill */
    .pill {
      display: inline-block;
      border: 1px solid rgba(245,200,66,0.3);
      color: var(--gold);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      padding: 4px 14px;
      border-radius: 999px;
      text-transform: uppercase;
      font-family: 'Syne', sans-serif;
    }
  `}</style>
);

/* ── Scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let start = 0;
        const step = Math.ceil(target / 60);
        const t = setInterval(() => {
          start += step;
          if (start >= target) {
            setVal(target);
            clearInterval(t);
          } else setVal(start);
        }, 24);
      },
      { threshold: 0.5 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ── FAQ Item ── */
function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="g-card"
      style={{
        background: "var(--surface)",
        marginBottom: 12,
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div
        style={{
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          className="syne"
          style={{ fontWeight: 600, fontSize: "1rem", color: "var(--white)" }}
        >
          {q}
        </p>
        <span
          style={{
            color: "var(--gold)",
            fontSize: "1.4rem",
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </div>
      <div className={`faq-body ${open ? "open" : ""}`}>
        <p
          style={{
            padding: "0 24px 20px",
            color: "var(--muted)",
            lineHeight: 1.75,
            fontSize: "0.95rem",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function EcommerceMarketing() {
  useReveal();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Ecommerce digital marketing services including SEO, Google Ads, social media marketing, email automation, CRO, and marketplace marketing to increase online sales and ROI.",
  };

  const services = [
    {
      icon: "🔍",
      title: "Ecommerce SEO",
      desc: "Rank your product pages, category pages, and collections on Google's first page with technical SEO, keyword research, schema markup, and authoritative link building tailored for online stores.",
    },
    {
      icon: "🛒",
      title: "Google Shopping Ads",
      desc: "Get your products in front of high-intent buyers with expertly managed Google Shopping and Performance Max campaigns that drive clicks and sales at the lowest possible cost per acquisition.",
    },
    {
      icon: "📱",
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Reach your ideal customer with scroll-stopping creatives and laser-targeted audience segmentation on Facebook and Instagram. We handle full-funnel campaigns from awareness to conversion.",
    },
    {
      icon: "📈",
      title: "Conversion Rate Optimization",
      desc: "Turn existing traffic into revenue. We audit your store, fix UX friction, improve product page copy, and A/B test checkout flows to dramatically increase your conversion rate.",
    },
    {
      icon: "📧",
      title: "Email Marketing & Automation",
      desc: "Recover abandoned carts, nurture leads, and build repeat customers with automated email sequences—welcome flows, browse abandonment, post-purchase upsells, and win-back campaigns.",
    },
    {
      icon: "🏪",
      title: "Marketplace Marketing",
      desc: "Dominate Amazon, Flipkart, Meesho, and Myntra with optimized listings, sponsored ads, review strategies, and inventory planning that maximize your marketplace revenue.",
    },
    {
      icon: "🎯",
      title: "Influencer & Affiliate Marketing",
      desc: "Leverage the power of creators and affiliates to drive authentic traffic and sales. We identify, onboard, and manage influencer partnerships that deliver measurable ROI for your brand.",
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      desc: "Make smarter decisions with real-time dashboards, GA4 setup, pixel tracking, and monthly performance reports that clearly show what's working and where to scale.",
    },
    {
      icon: "✍️",
      title: "Content & Social Media Marketing",
      desc: "Build brand authority and organic reach with a consistent content strategy—blog posts, reels, infographics, and social media management that keeps your audience engaged and coming back.",
    },
  ];

  const benefits = [
    { stat: "300", suf: "%", label: "Average ROI Increase" },
    { stat: "150", suf: "+", label: "Ecommerce Brands Grown" },
    { stat: "40", suf: "%", label: "Lower Cost Per Acquisition" },
    { stat: "98", suf: "%", label: "Client Retention Rate" },
  ];

  const process = [
    {
      num: "01",
      title: "Discovery & Audit",
      desc: "We deep-dive into your store, competitors, and market to uncover opportunities and gaps.",
    },
    {
      num: "02",
      title: "Strategy Blueprint",
      desc: "A custom 90-day growth roadmap is built around your goals, budget, and audience.",
    },
    {
      num: "03",
      title: "Launch & Execute",
      desc: "We activate campaigns across SEO, ads, email, and social simultaneously for maximum impact.",
    },
    {
      num: "04",
      title: "Optimise & Scale",
      desc: "Weekly data reviews allow us to double down on what works and cut what doesn't—fast.",
    },
  ];

  const faqs = [
    {
      q: "How long does ecommerce SEO take to show results?",
      a: "Most clients see measurable organic traffic improvements within 90–120 days. Significant revenue impact from SEO typically becomes clear between months 4–6, with compounding growth thereafter.",
    },
    {
      q: "Do you work with Shopify, WooCommerce, and custom stores?",
      a: "Yes. Our ecommerce marketing team has hands-on experience with Shopify, WooCommerce, Magento, BigCommerce, and custom-built storefronts across all major industries.",
    },
    {
      q: "What is your minimum budget for Google or Meta Ads?",
      a: "We recommend a minimum ad spend of ₹30,000/month for Google Ads and ₹20,000/month for Meta Ads to generate meaningful data and optimisation opportunities. Our management fee is separate.",
    },
    {
      q: "How do you measure campaign success?",
      a: "We track ROAS (Return on Ad Spend), revenue, CPA (Cost Per Acquisition), conversion rate, organic traffic, and keyword rankings. You get a live dashboard and a detailed monthly report.",
    },
    {
      q: "Can you help with marketplace marketing on Amazon India or Flipkart?",
      a: "Absolutely. We offer full-service marketplace marketing including listing optimisation, sponsored product ads, A+ content, and review growth strategies for Amazon India, Flipkart, Meesho, and Myntra.",
    },
    {
      q: "Do you offer a free consultation?",
      a: "Yes! We offer a complimentary 30-minute strategy call where we review your store, identify quick-win opportunities, and outline a growth plan—no obligation required.",
    },
  ];

  const marqueeItems = [
    "Ecommerce SEO",
    "Google Shopping Ads",
    "Meta Ads",
    "Email Automation",
    "CRO",
    "Marketplace Marketing",
    "Influencer Marketing",
    "Analytics & Reporting",
    "Content Strategy",
    "Performance Marketing",
  ];

  return (
    <div
      className="noise"
      style={{
        background: "var(--bg)",
        color: "var(--white)",
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      <GlobalStyles />

      {/* SEO */}
      <Head>
        <title>
          Ecommerce Marketing Services India | Boost Online Sales & ROI |
          KidiWebTech
        </title>
        <meta
          name="description"
          content="Grow your ecommerce store with expert SEO, Google Shopping Ads, Meta Ads, email automation, CRO, and marketplace marketing. Data-driven strategies that increase traffic, conversions, and revenue. Free consultation available."
        />
        <meta
          name="keywords"
          content="ecommerce marketing services, ecommerce SEO India, Google Shopping ads, Meta ads for ecommerce, Shopify marketing agency, WooCommerce SEO, increase online sales India, ecommerce conversion rate optimization, marketplace marketing Amazon Flipkart, email marketing automation ecommerce"
        />
        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/ecommerce-marketing"
        />
        <meta
          property="og:title"
          content="Ecommerce Marketing Services | KidiWebTech"
        />
        <meta
          property="og:description"
          content="Drive traffic, boost conversions, and increase revenue with data-driven ecommerce marketing strategies. Serving India's fastest-growing online brands."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kidiwebtech.com/services/ecommerce-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ecommerce Marketing Services | KidiWebTech"
        />
        <meta
          name="twitter:description"
          content="Expert ecommerce marketing: SEO, Google Ads, Meta Ads, Email, CRO & more. Grow your online store revenue today."
        />
      </Head>

      <Script
        id="ecommerce-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ── */}
      <section
        className="grid-bg"
        style={{
          position: "relative",
          padding: "120px 24px 100px",
          textAlign: "center",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* floating orbs */}
        <div
          className="orb1"
          style={{
            position: "absolute",
            top: "10%",
            left: "8%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,200,66,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="orb2"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "6%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="orb3"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div className="hero-title" style={{ marginBottom: 8 }}>
            <span className="pill">Performance-Driven Growth</span>
          </div>
          <h1
            className="syne hero-title"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: 20,
              marginBottom: 24,
            }}
          >
            Ecommerce <span className="g-text">Marketing Services</span> That
            Drive Real Sales
          </h1>
          <p
            className="hero-sub"
            style={{
              color: "var(--muted)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.75,
              maxWidth: 680,
              margin: "0 auto 36px",
            }}
          >
            Attract high-intent shoppers, convert more visitors, and grow your
            online revenue with India's most result-focused ecommerce marketing
            agency.
          </p>
          <div
            className="hero-cta"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="cta-btn"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, var(--gold), var(--fire))",
                color: "#000",
                padding: "15px 36px",
                borderRadius: 999,
                fontWeight: 700,
                fontFamily: "'Syne', sans-serif",
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Get Free Consultation
            </Link>
            <Link
              href="#services"
              style={{
                display: "inline-block",
                border: "1.5px solid rgba(245,200,66,0.4)",
                color: "var(--gold)",
                padding: "15px 36px",
                borderRadius: 999,
                fontWeight: 600,
                fontFamily: "'Syne', sans-serif",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Explore Services ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        style={{
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
          padding: "18px 0",
          background: "var(--surface)",
        }}
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                padding: "0 40px",
                color: "var(--muted)",
                fontSize: "0.85rem",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "var(--gold)", marginRight: 16 }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section
        style={{
          padding: "80px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal g-card"
              style={{
                background: "var(--surface)",
                padding: "36px 24px",
                textAlign: "center",
              }}
            >
              <p
                className="syne g-text"
                style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}
              >
                <Counter target={parseInt(b.stat)} suffix={b.suf} />
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: 10,
                  fontSize: "0.9rem",
                }}
              >
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        style={{
          padding: "100px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <span
              className="pill"
              style={{ marginBottom: 16, display: "inline-block" }}
            >
              What We Do
            </span>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: 12,
              }}
            >
              Our <span className="g-text">Ecommerce Marketing Services</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginTop: 16,
                maxWidth: 560,
                margin: "16px auto 0",
                lineHeight: 1.75,
              }}
            >
              A complete growth engine for your online store—every channel,
              every touchpoint, fully managed.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                className="reveal svc-card g-card"
                style={{
                  background: "var(--surface)",
                  padding: "36px 28px",
                  transitionDelay: `${i * 0.06}s`,
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>
                  {s.icon}
                </div>
                <h3
                  className="syne g-text"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LONG-FORM SEO CONTENT ── */}
      <section
        style={{
          padding: "100px 24px",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Block 1 */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <span
              className="pill"
              style={{ marginBottom: 16, display: "inline-block" }}
            >
              Why Ecommerce Marketing Matters
            </span>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                marginBottom: 24,
                marginTop: 12,
              }}
            >
              Ecommerce Marketing That{" "}
              <span className="g-text">Drives Sustainable Sales Growth</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              India's ecommerce market is expected to surpass $200 billion by
              2026, yet the majority of online stores fail to generate
              consistent sales. The difference between a store that thrives and
              one that stagnates is not the product—it's the{" "}
              <strong style={{ color: "var(--white)" }}>
                marketing strategy
              </strong>{" "}
              behind it. At KidiWebTech, we've spent years perfecting an
              integrated approach to ecommerce marketing that combines the power
              of organic search, paid advertising, conversion science, and
              customer retention to build brands that don't just sell—they
              scale.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Unlike traditional marketing agencies that focus on vanity
              metrics, our team is laser-focused on the numbers that matter:{" "}
              <strong style={{ color: "var(--white)" }}>
                Revenue, ROAS, and Customer Lifetime Value.
              </strong>{" "}
              Every strategy we build, every campaign we launch, and every
              optimisation we make is tied directly to your bottom line.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              Whether you run a D2C fashion brand on Shopify, a B2B supply store
              on WooCommerce, or a multi-category marketplace on Magento—our
              ecommerce marketing services are designed to generate measurable,
              repeatable growth for your specific business model.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 2 – Ecommerce SEO */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Ecommerce SEO:{" "}
              <span className="g-text">Own Page One, Own the Market</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Search Engine Optimisation for ecommerce is fundamentally
              different from standard SEO. Your store may have thousands of
              product pages, dozens of categories, and complex site
              architecture—all of which require specialist knowledge to optimise
              effectively. Our ecommerce SEO service covers every layer of your
              store's online presence.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We begin with a deep{" "}
              <strong style={{ color: "var(--white)" }}>
                technical SEO audit
              </strong>
              , identifying crawl errors, duplicate content issues, slow page
              speeds, and indexation problems that prevent Google from ranking
              your products. We fix these issues at the root, ensuring every
              page of your store is discoverable, fast, and structured
              correctly.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Next, we conduct granular{" "}
              <strong style={{ color: "var(--white)" }}>
                ecommerce keyword research
              </strong>
              , mapping high-commercial-intent keywords to your product pages
              and high-volume informational keywords to your blog and content
              strategy. We then optimise product titles, meta descriptions, alt
              tags, schema markup (Product, Review, BreadcrumbList), and
              internal linking structures to maximise ranking potential.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              Finally, we build a{" "}
              <strong style={{ color: "var(--white)" }}>
                content and link acquisition strategy
              </strong>{" "}
              that earns your domain the authority it needs to outrank
              competitors for competitive product keywords—whether you sell
              sarees, electronics, software, or supplements.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 3 – Paid Ads */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Google Shopping & Performance Max:{" "}
              <span className="g-text">
                Capture Buyers at the Moment of Intent
              </span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Google Shopping Ads are one of the most powerful tools available
              to ecommerce businesses. When someone searches "buy leather wallet
              online" or "best air purifier for home India," Shopping ads appear
              with product images, prices, and store names right at the top of
              the results. Our team specialises in building and optimising
              Shopping campaigns that generate a high ROAS from day one.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We start by ensuring your{" "}
              <strong style={{ color: "var(--white)" }}>
                Google Merchant Center feed
              </strong>{" "}
              is perfectly optimised—accurate titles, rich descriptions, correct
              GTINs, and clean product data that Google's algorithm favours for
              top placement. We then structure your campaigns with smart bidding
              strategies (Target ROAS, Maximise Conversions), audience layering,
              and negative keyword lists to eliminate wasted spend.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              For brands ready to scale, we integrate{" "}
              <strong style={{ color: "var(--white)" }}>
                Performance Max campaigns
              </strong>{" "}
              that leverage Google's full inventory—Search, Shopping, Display,
              YouTube, and Discover—with AI-driven asset optimisation. Combined
              with smart remarketing, our paid search strategies consistently
              deliver 3x–8x ROAS for ecommerce clients across categories.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 4 – Meta Ads */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Meta Ads for Ecommerce:{" "}
              <span className="g-text">Build Desire, Drive Purchase</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Facebook and Instagram remain the most powerful platforms for
              ecommerce brands looking to reach new audiences at scale. With
              over 450 million active users in India across both platforms, Meta
              Ads allow you to place your products directly in front of your
              ideal customer—based on their interests, behaviours, demographics,
              and purchase intent signals.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Our Meta Ads team builds full-funnel campaigns using the{" "}
              <strong style={{ color: "var(--white)" }}>
                Awareness → Consideration → Conversion
              </strong>{" "}
              framework. At the top of funnel, we use broad interest targeting,
              lookalike audiences, and engaging video creatives to introduce
              your brand to new shoppers. In the middle, we retarget engaged
              users with carousel ads, social proof content, and UGC
              (user-generated content) to build trust. At the bottom of the
              funnel, dynamic product ads (DPA) serve personalised product
              recommendations to users who have already visited your
              store—driving them back to complete their purchase.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              We also manage{" "}
              <strong style={{ color: "var(--white)" }}>
                creative strategy and ad production
              </strong>
              , including static image ads, video ads, reels, and story
              formats—ensuring your brand stands out in a crowded feed and
              drives profitable clicks.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 5 – CRO */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Conversion Rate Optimisation:{" "}
              <span className="g-text">
                Squeeze More Revenue from Existing Traffic
              </span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Driving traffic to your store is only half the equation. If your
              ecommerce conversion rate is below 2%—the industry average—you are
              leaving significant revenue on the table. CRO is the process of
              systematically improving your website experience to turn more
              visitors into paying customers without spending an extra rupee on
              advertising.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Our CRO team analyses your store using heatmaps, session
              recordings, Google Analytics funnel reports, and qualitative
              customer surveys to identify exactly where shoppers are dropping
              off. Common issues we uncover include: confusing navigation, slow
              product image loading, lack of trust signals, complicated checkout
              flows, poor mobile UX, and weak call-to-action copy.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              We then design and execute{" "}
              <strong style={{ color: "var(--white)" }}>A/B tests</strong> to
              validate improvements before rolling them out site-wide. Our CRO
              interventions typically include product page redesigns, urgency
              triggers (low stock alerts, countdown timers), trust badge
              placement, one-click checkout optimisation, and personalised
              product recommendation widgets—all proven to lift conversion rates
              by 25%–80% within 60–90 days.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 6 – Email */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Email Marketing Automation:{" "}
              <span className="g-text">Your Highest-ROI Retention Channel</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Email marketing consistently delivers the highest return on
              investment of any digital marketing channel—averaging ₹3,600 for
              every ₹100 spent globally. For ecommerce businesses, a well-built
              email automation system is the difference between a one-time buyer
              and a loyal customer who orders again and again.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We build and manage complete{" "}
              <strong style={{ color: "var(--white)" }}>
                email automation ecosystems
              </strong>{" "}
              for your store, including: Welcome Sequences that introduce your
              brand and drive the first purchase; Abandoned Cart Flows that
              recover 15%–25% of lost carts; Browse Abandonment emails that
              re-engage window shoppers; Post-Purchase Flows that upsell,
              cross-sell, and collect reviews; Win-Back Campaigns that
              reactivate dormant customers; and VIP & Loyalty programmes that
              reward your best buyers.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              We work with Klaviyo, Mailchimp, Omnisend, and other leading email
              platforms, and every campaign is designed with mobile-first
              templates, personalised dynamic content, and strategic send-time
              optimisation for maximum open and click rates.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 7 – Marketplace */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Marketplace Marketing:{" "}
              <span className="g-text">Dominate Amazon, Flipkart & Beyond</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Over 60% of ecommerce searches in India begin on a marketplace
              rather than Google. If your products are listed on Amazon,
              Flipkart, Meesho, or Myntra without proper optimisation, you are
              effectively invisible to the majority of potential buyers. Our
              marketplace marketing service ensures your products are
              discovered, clicked, and purchased at scale.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We optimise your{" "}
              <strong style={{ color: "var(--white)" }}>
                product listings
              </strong>{" "}
              with keyword-rich titles, compelling bullet points, enhanced brand
              content (A+ content), and high-quality images that pass
              marketplace quality checks and outperform competitor listings. We
              manage{" "}
              <strong style={{ color: "var(--white)" }}>
                Sponsored Products, Sponsored Brands, and Sponsored Display
              </strong>{" "}
              ad campaigns on Amazon with granular targeting, bid management,
              and weekly performance reporting.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              We also implement ethical{" "}
              <strong style={{ color: "var(--white)" }}>
                review generation strategies
              </strong>
              , monitor seller health metrics, and advise on pricing, inventory,
              and Deal of the Day applications to maximise your marketplace BSR
              (Best Seller Rank) and long-term brand presence.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 8 – Why KidiWebTech */}
          <div className="reveal">
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Why Choose KidiWebTech as Your{" "}
              <span className="g-text">Ecommerce Marketing Partner?</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              There is no shortage of digital marketing agencies in India. What
              sets KidiWebTech apart is our unwavering focus on ecommerce
              specifically—every strategist, every copywriter, and every analyst
              on our team has been trained to think in terms of{" "}
              <strong style={{ color: "var(--white)" }}>
                product margins, cart values, and customer lifetime revenue
              </strong>
              . We don't run generic campaigns; we build growth systems tailored
              to your category, your customers, and your competitive landscape.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Our clients span fashion, beauty, home décor, electronics, food &
              beverage, health & wellness, industrial supplies, and more. We
              have managed ecommerce marketing budgets ranging from
              ₹50,000/month to ₹50 lakhs/month, and our results speak for
              themselves:{" "}
              <strong style={{ color: "var(--white)" }}>
                an average 300% increase in revenue within 12 months for clients
                who adopt our full-stack approach.
              </strong>
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We operate with full transparency. You own all your ad accounts,
              all your data, and all your creative assets. Our monthly reports
              break down every rupee spent and every rupee earned. And with a
              dedicated account manager assigned to every client, you'll always
              know exactly what's happening with your campaigns.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              If you are ready to stop guessing and start growing, we invite you
              to schedule a free 30-minute strategy call with our ecommerce
              marketing specialists. We will audit your current store
              performance, identify your biggest growth opportunities, and show
              you exactly what a tailored marketing strategy could achieve for
              your business—no fluff, no jargon, just a clear roadmap to more
              sales.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        style={{
          padding: "100px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <span
              className="pill"
              style={{ marginBottom: 16, display: "inline-block" }}
            >
              How We Work
            </span>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: 12,
              }}
            >
              Our 4-Step <span className="g-text">Growth Process</span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}
          >
            {process.map((p, i) => (
              <div
                key={i}
                className="reveal g-card"
                style={{
                  background: "var(--surface)",
                  padding: "36px 28px",
                  textAlign: "center",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <p
                  className="syne g-text"
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    marginBottom: 12,
                  }}
                >
                  {p.num}
                </p>
                <h3
                  className="syne"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: 12,
                    color: "var(--white)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          padding: "100px 24px",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <span
              className="pill"
              style={{ marginBottom: 16, display: "inline-block" }}
            >
              FAQs
            </span>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: 12,
              }}
            >
              Frequently Asked <span className="g-text">Questions</span>
            </h2>
          </div>
          <div className="reveal">
            {faqs.map((f, i) => (
              <FAQ key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "120px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="orb1"
          style={{
            position: "absolute",
            top: "0%",
            left: "20%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <span
            className="pill"
            style={{ marginBottom: 24, display: "inline-block" }}
          >
            Let's Grow Together
          </span>
          <h2
            className="syne reveal"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: 20,
              marginTop: 12,
            }}
          >
            Ready to Boost Your <span className="g-text">Online Sales?</span>
          </h2>
          <p
            className="reveal"
            style={{
              color: "var(--muted)",
              marginBottom: 40,
              lineHeight: 1.75,
              fontSize: "1.05rem",
            }}
          >
            Let's build a data-driven ecommerce marketing strategy that turns
            visitors into loyal, repeat customers—and your store into a brand.
          </p>
          <Link
            href="/contact"
            className="cta-btn reveal"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, var(--gold), var(--fire))",
              color: "#000",
              padding: "18px 48px",
              borderRadius: 999,
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.1rem",
              textDecoration: "none",
            }}
          >
            Start Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
