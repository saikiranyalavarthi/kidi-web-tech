import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Inline global styles ── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --gold:    #F5C842;
      --amber:   #F59E0B;
      --fire:    #F97316;
      --bg:      #080808;
      --surface: #111111;
      --border:  rgba(255,255,255,0.07);
      --muted:   #9CA3AF;
      --white:   #FFFFFF;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--white);
      font-family: 'DM Sans', sans-serif;
      overflow-x: hidden;
    }

    .syne { font-family: 'Syne', sans-serif; }

    .g-text {
      background: linear-gradient(135deg, var(--gold) 0%, var(--fire) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

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

    .noise::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
      opacity: 0.35;
    }

    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-40px) scale(1.08)} }
    @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,30px) scale(0.95)} }
    @keyframes float3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(15px,20px) scale(1.05)} }
    .orb1 { animation: float1 8s ease-in-out infinite; }
    .orb2 { animation: float2 11s ease-in-out infinite; }
    .orb3 { animation: float3 9s ease-in-out infinite; }

    @keyframes fadeUp { from{opacity:0;transform:translateY(50px)} to{opacity:1;transform:translateY(0)} }
    .hero-title { animation: fadeUp 0.9s ease forwards; }
    .hero-sub   { animation: fadeUp 0.9s 0.2s ease forwards; opacity:0; }
    .hero-cta   { animation: fadeUp 0.9s 0.4s ease forwards; opacity:0; }

    @keyframes pulse-glow {
      0%,100%  { box-shadow: 0 0 0px 0px rgba(245,200,66,0); }
      50% { box-shadow: 0 0 24px 6px rgba(245,200,66,0.35); }
    }
    .cta-btn { animation: pulse-glow 3s ease-in-out infinite; }

    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .marquee-track { animation: marquee 24s linear infinite; display:flex; width:max-content; }

    .grid-bg {
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .svc-card {
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }
    .svc-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 60px rgba(245,115,22,0.18);
    }

    .faq-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.45s ease, padding 0.3s ease;
    }
    .faq-body.open { max-height: 300px; }

    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border), transparent);
    }

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
export default function HealthcareMarketing() {
  useReveal();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Healthcare Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Healthcare digital marketing services including SEO, Google Ads, social media marketing, online reputation management, local SEO, and patient lead generation for hospitals, clinics, and doctors across India.",
  };

  const services = [
    {
      icon: "🔍",
      title: "Healthcare SEO",
      desc: "Rank your hospital, clinic, or practice on Google's first page with technical SEO, medical keyword research, schema markup, and content strategies that attract patients actively searching for your services.",
    },
    {
      icon: "📍",
      title: "Local SEO for Doctors",
      desc: "Dominate 'near me' searches and Google Maps results so local patients find your clinic first. We optimise your Google Business Profile, citations, and reviews for maximum local visibility.",
    },
    {
      icon: "🖥️",
      title: "Google Ads for Clinics",
      desc: "Generate instant, high-quality patient appointment requests with expertly managed Google Search and Display campaigns targeted by location, specialty, and search intent.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Build patient trust and community on Facebook and Instagram with health awareness content, doctor spotlights, patient testimonials, and educational posts that position your brand as a credible authority.",
    },
    {
      icon: "🌐",
      title: "Website & Landing Pages",
      desc: "Convert website visitors into appointment bookings with high-converting, mobile-optimised healthcare landing pages built for speed, trust, and clear calls to action.",
    },
    {
      icon: "⭐",
      title: "Online Reputation Management",
      desc: "Manage and grow your Google, Practo, and Justdial reviews. We implement ethical review generation strategies and handle negative feedback to protect and strengthen your online reputation.",
    },
    {
      icon: "📧",
      title: "Patient Email & WhatsApp Marketing",
      desc: "Re-engage existing patients with automated appointment reminders, health tips, seasonal campaigns, and follow-up sequences that build loyalty and drive repeat visits.",
    },
    {
      icon: "📊",
      title: "Analytics & Performance Reporting",
      desc: "Track every patient enquiry, call, and booking with GA4, call tracking, and custom dashboards. Monthly reports clearly show your cost per lead, ROI, and campaign performance.",
    },
    {
      icon: "🎯",
      title: "Content Marketing for Healthcare",
      desc: "Publish authoritative medical blog posts, FAQs, and health guides that rank on Google, educate patients, and establish your doctors as trusted specialists in their field.",
    },
  ];

  const stats = [
    { stat: "500", suf: "+", label: "Patient Leads Generated Monthly" },
    { stat: "200", suf: "+", label: "Healthcare Clients Served" },
    { stat: "45", suf: "%", label: "Lower Cost Per Appointment" },
    { stat: "97", suf: "%", label: "Client Retention Rate" },
  ];

  const process = [
    {
      num: "01",
      title: "Clinic Audit & Research",
      desc: "We analyse your current online presence, competition, and patient search behaviour in your city and specialty.",
    },
    {
      num: "02",
      title: "Custom Growth Strategy",
      desc: "A tailored 90-day plan is built around your specialty, location, patient demographics, and budget.",
    },
    {
      num: "03",
      title: "Launch & Activate",
      desc: "Campaigns go live across SEO, Google Ads, social media, and reputation management simultaneously.",
    },
    {
      num: "04",
      title: "Optimise & Scale",
      desc: "Weekly performance reviews allow us to reduce cost per lead, increase appointment volume, and scale what works.",
    },
  ];

  const faqs = [
    {
      q: "How long does healthcare SEO take to show results?",
      a: "Most clinics and hospitals begin seeing measurable improvements in organic rankings and traffic within 90–120 days. Significant patient enquiry growth from SEO typically becomes evident between months 4–6, with compounding results thereafter as domain authority builds.",
    },
    {
      q: "Do you work with multi-specialty hospitals and individual doctors?",
      a: "Yes. We work with multi-specialty hospitals, single-specialty clinics, individual practitioners, diagnostic centres, dental clinics, dermatology practices, fertility centres, physiotherapy clinics, and more. Our strategies are tailored to your specific specialty and patient profile.",
    },
    {
      q: "What is the minimum budget required for Google Ads for a clinic?",
      a: "We recommend a minimum ad spend of ₹25,000/month for Google Ads for clinics and hospitals to generate enough data for optimisation and a meaningful volume of appointment enquiries. Our management fee is charged separately and includes full campaign setup, creative, and reporting.",
    },
    {
      q: "Can you help with Practo, JustDial, and other healthcare directories?",
      a: "Yes. We manage and optimise your profiles on Practo, JustDial, Lybrate, Credihealth, and other relevant healthcare directories to maximise visibility, review volume, and patient enquiries across multiple platforms beyond Google.",
    },
    {
      q: "How do you generate patient reviews ethically?",
      a: "We implement a systematic, fully compliant review generation process that prompts satisfied patients via WhatsApp, SMS, and email to leave reviews on Google, Practo, and JustDial. We never offer incentives for reviews, ensuring your reputation is built on genuine patient experiences.",
    },
    {
      q: "Do you offer a free consultation for healthcare marketing?",
      a: "Yes! We offer a complimentary 30-minute strategy session where our healthcare marketing specialists will review your current online presence, benchmark you against local competitors, and outline a tailored plan to grow your patient base—no commitment required.",
    },
  ];

  const marqueeItems = [
    "Healthcare SEO",
    "Google Ads for Clinics",
    "Local SEO",
    "Reputation Management",
    "Social Media Marketing",
    "Patient Lead Generation",
    "Content Marketing",
    "Landing Page Design",
    "WhatsApp Marketing",
    "Analytics & Reporting",
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

      {/* ── SEO HEAD ── */}
      <Head>
        <title>
          Healthcare Digital Marketing Services India | Get More Patients |
          KidiWebTech
        </title>
        <meta
          name="description"
          content="Grow your clinic or hospital with expert healthcare SEO, Google Ads, local SEO, social media marketing, and online reputation management. Get more patient appointments with India's trusted healthcare marketing agency. Free consultation available."
        />
        <meta
          name="keywords"
          content="healthcare digital marketing services, hospital marketing India, clinic SEO, doctor marketing, Google Ads for clinics, local SEO for doctors, patient lead generation, healthcare social media marketing, online reputation management healthcare, Practo marketing India"
        />
        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/healthcare-digital-marketing"
        />
        <meta
          property="og:title"
          content="Healthcare Digital Marketing Services | KidiWebTech"
        />
        <meta
          property="og:description"
          content="Attract more patients with expert healthcare SEO, Google Ads, local SEO, social media & reputation management. Serving hospitals and clinics across India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kidiwebtech.com/services/healthcare-digital-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Healthcare Digital Marketing Services | KidiWebTech"
        />
        <meta
          name="twitter:description"
          content="Expert healthcare marketing: SEO, Google Ads, Local SEO, Reputation Management & more. Grow your clinic or hospital today."
        />
      </Head>

      <Script
        id="healthcare-schema"
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
            <span className="pill">Trusted by 200+ Healthcare Brands</span>
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
            Healthcare Digital{" "}
            <span className="g-text">Marketing Services</span> That Fill Your
            Calendar
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
            Attract more patients, build unshakeable trust, and grow your clinic
            or hospital with India's most result-focused healthcare digital
            marketing agency.
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
          {stats.map((b, i) => (
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
              Our <span className="g-text">Healthcare Marketing Services</span>
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
              A complete patient acquisition and retention system for hospitals,
              clinics, and individual practitioners.
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
              Why Healthcare Marketing Matters
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
              Healthcare Digital Marketing That{" "}
              <span className="g-text">
                Builds Trust and Fills Appointment Books
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
              The way patients find and choose healthcare providers has changed
              permanently. Today, over{" "}
              <strong style={{ color: "var(--white)" }}>77% of patients</strong>{" "}
              use a search engine before booking an appointment, and more than
              60% read online reviews before selecting a doctor or clinic. If
              your hospital, clinic, or practice is not visible online—on Google
              Search, Google Maps, and social media—you are losing patients to
              competitors who are.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              At KidiWebTech, we understand that healthcare marketing is
              fundamentally different from marketing any other industry. Your
              audience is making decisions that affect their health and
              wellbeing. Trust, credibility, and clear communication are not
              optional—they are the foundation of every effective healthcare
              marketing campaign. That is why every strategy we build is
              designed not just to generate leads, but to attract the{" "}
              <strong style={{ color: "var(--white)" }}>right patients</strong>{" "}
              who genuinely need your services and are ready to book.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              Whether you run a multi-specialty hospital in Hyderabad, a dental
              clinic in Mumbai, a fertility centre in Bangalore, or an
              individual dermatology practice in Delhi—our healthcare digital
              marketing services are built to grow your patient base, protect
              your reputation, and deliver a measurable return on every
              marketing rupee spent.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 2 – Healthcare SEO */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Healthcare SEO:{" "}
              <span className="g-text">
                Get Found by Patients Who Need You Most
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
              Search Engine Optimisation for healthcare is a highly specialised
              discipline. Medical websites must not only rank—they must also
              meet Google's strict{" "}
              <strong style={{ color: "var(--white)" }}>
                E-E-A-T (Experience, Expertise, Authoritativeness, and
                Trustworthiness)
              </strong>{" "}
              standards for YMYL (Your Money or Your Life) content. A generic
              SEO agency will not cut it. You need specialists who understand
              medical content, patient search intent, and the compliance
              requirements of the healthcare industry.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Our healthcare SEO service begins with a comprehensive{" "}
              <strong style={{ color: "var(--white)" }}>technical audit</strong>{" "}
              of your website—identifying crawl errors, page speed issues,
              mobile usability problems, duplicate content, and indexation gaps
              that prevent Google from ranking your pages. We resolve every
              technical issue at the root, ensuring your site is perfectly
              structured for both search engine bots and human visitors.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We then conduct in-depth{" "}
              <strong style={{ color: "var(--white)" }}>
                medical keyword research
              </strong>
              , mapping high-intent queries—such as "best orthopaedic surgeon in
              Pune," "IVF clinic near me," or "LASIK eye surgery cost India"—to
              the correct pages on your website. Each page is then optimised
              with keyword-rich headings, meta tags, schema markup
              (MedicalOrganization, Physician, MedicalClinic), and structured
              content that satisfies both search algorithms and the patients
              reading it.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              Finally, we build a sustained{" "}
              <strong style={{ color: "var(--white)" }}>
                content and authority-building strategy
              </strong>
              —publishing medically accurate blog posts, FAQ pages, condition
              guides, and treatment explainers that earn backlinks, build
              topical authority, and establish your doctors as recognised
              specialists in their field.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 3 – Local SEO */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Local SEO for Doctors & Clinics:{" "}
              <span className="g-text">
                Own Your Neighbourhood on Google Maps
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
              For most clinics and hospitals, the majority of patients come from
              within a 5–15 km radius. Local SEO ensures that when someone in
              your area searches "dermatologist near me," "best gynaecologist in
              [city]," or "24-hour clinic in [area]," your practice appears at
              the top of the Google Maps Local Pack—the three prominent map
              listings that appear above organic results and capture the highest
              click-through rates of any search result type.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We fully optimise your{" "}
              <strong style={{ color: "var(--white)" }}>
                Google Business Profile
              </strong>{" "}
              with accurate NAP (Name, Address, Phone) information, correct
              category selection, service descriptions, high-quality photos,
              appointment booking links, and Q&A responses. We also build and
              clean your{" "}
              <strong style={{ color: "var(--white)" }}>
                local citation profile
              </strong>{" "}
              across Practo, JustDial, Sulekha, Lybrate, IndiaMart, and other
              relevant directories to reinforce your local authority signals.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              Our local SEO strategies consistently result in clinics appearing
              in the Google Maps top 3 within 60–90 days, generating a
              significant increase in phone calls, direction requests, and
              appointment bookings from local patients who are ready to visit.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 4 – Google Ads */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Google Ads for Hospitals & Clinics:{" "}
              <span className="g-text">
                Instant Visibility, Qualified Patient Leads
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
              While SEO is the most sustainable long-term patient acquisition
              channel, Google Ads provides immediate visibility—placing your
              clinic at the very top of search results from the first day your
              campaign goes live. For specialties where competition is fierce
              and patient lifetime value is high—such as dentistry, cosmetology,
              fertility treatment, and orthopaedics—Google Ads is one of the
              highest-ROI paid channels available.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Our Google Ads team builds{" "}
              <strong style={{ color: "var(--white)" }}>
                tightly structured Search campaigns
              </strong>{" "}
              with ad groups organised by specialty, treatment, and location. We
              write compelling ad copy that emphasises your USPs—experience,
              technology, success rates, certifications, and patient
              testimonials. We deploy{" "}
              <strong style={{ color: "var(--white)" }}>Call-Only ads</strong>{" "}
              for mobile users who want to book immediately, and optimise
              landing pages for maximum appointment form completions.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              All campaigns are built with{" "}
              <strong style={{ color: "var(--white)" }}>
                conversion tracking
              </strong>{" "}
              (phone calls, form submissions, WhatsApp clicks) so every lead is
              attributed accurately. We continuously optimise bids, keywords,
              and ad schedules to lower your cost per patient lead month over
              month—with most clients achieving a 40%–60% reduction in CPL
              within the first 90 days of management.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 5 – Social Media */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Social Media Marketing for Healthcare:{" "}
              <span className="g-text">Build Trust at Scale</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Social media has become one of the most powerful patient education
              and trust-building channels in healthcare. Facebook and Instagram
              together reach over 500 million users in India, including patients
              researching conditions, seeking second opinions, and looking for
              specialists. A consistent, professional social media presence
              positions your practice as a credible, caring, and knowledgeable
              healthcare provider before a patient even visits your website.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We develop and manage a{" "}
              <strong style={{ color: "var(--white)" }}>
                complete social media content strategy
              </strong>{" "}
              for your clinic or hospital, including: doctor introduction reels,
              patient success story posts (with consent), health awareness
              content aligned to national health days, treatment explainer
              videos, myth-busting posts, and community Q&A sessions. Every
              piece of content is designed to educate, build trust, and drive
              profile visits and appointment enquiries.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              We also run targeted{" "}
              <strong style={{ color: "var(--white)" }}>
                Meta Ads campaigns
              </strong>{" "}
              for healthcare—lead generation ads for specific treatments (e.g.,
              hair transplant, knee replacement, dental implants), retargeting
              ads for website visitors, and awareness campaigns for new clinic
              locations or service launches—all with compliant ad copy that
              adheres to healthcare advertising guidelines.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 6 – ORM */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Online Reputation Management:{" "}
              <span className="g-text">Your Reviews Are Your Referrals</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              In healthcare, your online reputation is arguably your most
              valuable marketing asset. Studies show that{" "}
              <strong style={{ color: "var(--white)" }}>
                84% of patients trust online reviews as much as personal
                recommendations
              </strong>{" "}
              from friends and family. A clinic with 4.7 stars and 300+ Google
              reviews will consistently outperform a competitor with a superior
              facility but minimal online credibility.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Our ORM service for healthcare providers includes a systematic{" "}
              <strong style={{ color: "var(--white)" }}>
                review generation programme
              </strong>{" "}
              that prompts satisfied patients via WhatsApp, SMS, and email to
              share their experience on Google, Practo, JustDial, and Lybrate.
              We craft personalised, compliant request messages that achieve
              significantly higher response rates than generic approaches.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              We also monitor your profiles daily, craft{" "}
              <strong style={{ color: "var(--white)" }}>
                professional responses
              </strong>{" "}
              to both positive and negative reviews, and work to suppress or
              resolve negative feedback through legitimate means. For major
              reputation crises, we deploy a multi-channel content strategy to
              rebuild and protect your brand's standing in search results.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: 60 }} />

          {/* Block 7 – Content */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2
              className="syne"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Healthcare Content Marketing:{" "}
              <span className="g-text">Educate Patients, Rank on Google</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              Content is the backbone of every successful healthcare SEO and
              brand trust strategy. When patients search for symptoms,
              treatments, costs, or doctor recommendations, they land on
              informational content first. If that content is on your website,
              you earn their trust—and their appointment. Our healthcare content
              marketing service produces medically accurate, SEO-optimised
              content that serves both Google's algorithms and your patients'
              genuine information needs.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We create a diverse content mix including:{" "}
              <strong style={{ color: "var(--white)" }}>
                condition and treatment pages
              </strong>{" "}
              that rank for high-intent keywords;{" "}
              <strong style={{ color: "var(--white)" }}>
                doctor profile pages
              </strong>{" "}
              optimised with credentials, specialisations, and patient reviews;{" "}
              <strong style={{ color: "var(--white)" }}>blog articles</strong>{" "}
              targeting informational queries ("how much does rhinoplasty cost
              in India," "signs you need a knee replacement"); and{" "}
              <strong style={{ color: "var(--white)" }}>
                FAQ schema pages
              </strong>{" "}
              that appear directly in Google's featured snippets.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              All content is reviewed for medical accuracy, written in clear
              patient-friendly language, and structured to satisfy Google's
              E-E-A-T guidelines—including author bylines from qualified medical
              professionals where required.
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
              Why KidiWebTech is India's{" "}
              <span className="g-text">
                Most Trusted Healthcare Marketing Agency
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
              Choosing a healthcare marketing partner is a significant decision.
              You need an agency that understands not only digital marketing but
              also the sensitivity, compliance requirements, and unique patient
              journey of the healthcare sector. At KidiWebTech, every member of
              our healthcare marketing team has been trained specifically in
              medical marketing ethics, healthcare advertising regulations, and
              the patient psychology that drives appointment decisions.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We have served over{" "}
              <strong style={{ color: "var(--white)" }}>
                200 healthcare clients
              </strong>{" "}
              across India—from corporate hospital chains to solo
              practitioners—spanning specialties including cardiology, oncology,
              orthopaedics, dermatology, dentistry, ophthalmology, fertility,
              psychiatry, and more. Our campaigns have collectively generated
              over{" "}
              <strong style={{ color: "var(--white)" }}>
                500,000 patient enquiries
              </strong>{" "}
              and helped our clients achieve an average 45% reduction in cost
              per appointment within the first six months.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 18,
                fontSize: "1rem",
              }}
            >
              We operate with complete transparency. You retain full ownership
              of all ad accounts, website content, and creative assets. Our
              monthly performance reports provide a clear breakdown of every
              campaign's results—leads generated, cost per lead, appointment
              conversion rate, and ROI—so you always know exactly what your
              marketing investment is delivering.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              If you are ready to grow your patient base with a marketing
              partner who genuinely understands healthcare, we invite you to
              book a free 30-minute strategy consultation. Our team will audit
              your online presence, benchmark you against local competitors, and
              deliver a clear, actionable plan to increase your appointment
              volume—starting this month.
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
              Our 4-Step <span className="g-text">Patient Growth Process</span>
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
            Ready to Grow Your{" "}
            <span className="g-text">Healthcare Practice?</span>
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
            Let's build a patient acquisition strategy that consistently fills
            your appointment calendar and grows your reputation as the go-to
            healthcare provider in your area.
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
