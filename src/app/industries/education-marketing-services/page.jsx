"use client";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function EducationMarketing() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = {};
    Object.keys(sectionRefs.current).forEach((key) => {
      const el = sectionRefs.current[key];
      if (!el) return;
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 },
      );
      observers[key].observe(el);
    });
    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  const setRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Education Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Education digital marketing services for schools, colleges, and edtech platforms including SEO, Google Ads, social media marketing, and student lead generation across India.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is education marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Education marketing refers to the use of digital and traditional marketing strategies to promote schools, colleges, universities, and edtech platforms to prospective students. It includes SEO, Google Ads, social media marketing, content marketing, and lead generation campaigns targeted at students and parents.",
        },
      },
      {
        "@type": "Question",
        name: "How can digital marketing increase student admissions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital marketing increases student admissions by improving online visibility through SEO, running targeted Google Ads campaigns, engaging students on social media, and creating high-converting landing pages that capture student inquiries and nurture them through automated workflows until they enroll.",
        },
      },
      {
        "@type": "Question",
        name: "How much does education marketing cost in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Education marketing costs in India vary based on the institution's size, target geography, and services required. Typically, a monthly retainer for comprehensive education digital marketing ranges from ₹25,000 to ₹2,00,000 per month depending on ad spend, SEO scope, and content production.",
        },
      },
      {
        "@type": "Question",
        name: "Which social media platforms work best for education marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For education marketing, Instagram and YouTube are most effective for reaching students aged 16-24. Facebook works best for targeting parents. LinkedIn is ideal for professional courses and MBA programs. WhatsApp marketing is also highly effective in India for student engagement and lead nurturing.",
        },
      },
    ],
  };

  const services = [
    {
      icon: "🔍",
      title: "SEO for Schools & Colleges",
      desc: "Rank your institution on the first page of Google and attract a consistent stream of organic student inquiries. We optimize your website for high-intent keywords like 'best school in [city]', 'college admissions 2025', and course-specific terms that prospective students search for daily.",
    },
    {
      icon: "📢",
      title: "Google Ads for Admissions",
      desc: "Generate instant, high-quality student leads with precision-targeted Google Search and Display ad campaigns. Our certified Google Ads experts craft ad copies that resonate with student intent and optimize bids for maximum ROI on every admission season.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Build a vibrant community of prospective students on Instagram, Facebook, YouTube, and LinkedIn. We create compelling content calendars, run targeted social ads, manage reels, and run influencer collaborations that make your institution the most talked-about choice.",
    },
    {
      icon: "🎯",
      title: "High-Converting Landing Pages",
      desc: "Turn ad traffic into real admissions with professionally designed landing pages built for conversion. Each page is A/B tested, mobile-optimized, and features clear CTAs, course highlights, testimonials, and lead capture forms that work round the clock.",
    },
    {
      icon: "⚙️",
      title: "Lead Nurturing Automation",
      desc: "Never lose a potential student again. Our automated CRM workflows follow up with every inquiry via email, SMS, and WhatsApp — keeping your institution top-of-mind from first click to final enrollment with personalized, timely communication.",
    },
    {
      icon: "📍",
      title: "Local SEO & Google Maps",
      desc: "Dominate local search results for queries like 'schools near me', 'top colleges in Hyderabad', and 'best coaching institutes near me'. We optimize your Google Business Profile and local citations to drive walk-ins and calls from nearby families.",
    },
    {
      icon: "🎥",
      title: "Video Marketing & YouTube SEO",
      desc: "Showcase your campus, faculty, and success stories through powerful video content. We produce and promote YouTube videos optimized for search, helping students and parents discover your institution through authentic visual storytelling.",
    },
    {
      icon: "✍️",
      title: "Content Marketing & Blogging",
      desc: "Establish your institution as an academic authority with high-quality blog posts, career guides, admission FAQs, and educational resources that rank on Google and nurture prospective students throughout their decision-making journey.",
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      desc: "Make data-driven decisions with comprehensive monthly reports covering website traffic, lead quality, cost per lead, and admission conversion rates. Our transparent reporting ensures you always know exactly where every rupee of your marketing budget goes.",
    },
  ];

  const stats = [
    { number: "500+", label: "Educational Institutions Served" },
    { number: "3.2M+", label: "Student Leads Generated" },
    { number: "85%", label: "Average Admission Rate Increase" },
    { number: "12+", label: "Years of Industry Experience" },
  ];

  const benefits = [
    { icon: "🚀", text: "Increase student admissions by up to 300%" },
    { icon: "🎯", text: "Target students with precise demographic data" },
    {
      icon: "💡",
      text: "Improve brand visibility across all digital channels",
    },
    { icon: "📈", text: "Generate high-quality, verified student leads" },
    { icon: "💰", text: "Cost-effective campaigns with measurable ROI" },
    { icon: "🔄", text: "Scalable strategies that grow with your institution" },
    { icon: "🏆", text: "Outperform competitors in search rankings" },
    { icon: "📞", text: "24/7 lead capture automation systems" },
    { icon: "🌐", text: "Pan-India and international student targeting" },
  ];

  const faqs = [
    {
      q: "What is education marketing?",
      a: "Education marketing is the strategic use of digital and traditional marketing channels to promote schools, colleges, universities, and edtech platforms to prospective students and their parents. It encompasses SEO, paid advertising, social media marketing, content creation, email marketing, and lead generation — all tailored to the unique decision-making journey of students choosing an educational institution.",
    },
    {
      q: "How can digital marketing increase student admissions?",
      a: "Digital marketing increases student admissions by creating multiple touchpoints throughout the student's research journey. SEO ensures your institution appears when students search for courses; Google Ads captures high-intent traffic immediately; social media builds trust and engagement; automated follow-ups convert inquiries into enrolled students. Together, these channels create a seamless funnel from awareness to admission.",
    },
    {
      q: "How long does it take to see results from education marketing?",
      a: "Paid campaigns like Google Ads can generate student leads within 24–48 hours of launch. SEO typically shows significant improvements in rankings and organic traffic within 3–6 months. Social media engagement grows steadily over 2–3 months. For sustained admission growth, a consistent 6–12 month marketing strategy delivers the strongest compounding results.",
    },
    {
      q: "Which platforms work best for student lead generation in India?",
      a: "In India, Google Search Ads are most effective for capturing high-intent students actively searching for courses. Instagram and YouTube work excellently for brand awareness among students aged 16–24. Facebook targets parents effectively. WhatsApp marketing has exceptional engagement rates for nurturing inquiries. LinkedIn is ideal for professional courses, MBA, and executive education programs.",
    },
    {
      q: "Do you offer education marketing for edtech platforms?",
      a: "Yes, we specialize in marketing for edtech platforms, online coaching institutes, skill development programs, and certificate courses. Our strategies are tailored for both B2C student acquisition and B2B institutional partnerships, with expertise in app marketing, course launch campaigns, and subscription growth strategies.",
    },
    {
      q: "How much does education digital marketing cost in India?",
      a: "Education marketing costs vary based on your institution's size, geographic targets, and service scope. Our packages start from ₹25,000/month for local SEO and basic social media, scaling up to comprehensive ₹2,00,000+/month packages inclusive of Google Ads management, SEO, content creation, and automation. We offer free consultations to recommend the right package for your budget and goals.",
    },
  ];

  return (
    <div className="bg-[#050508] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'DM Sans', sans-serif; }

        .font-display { font-family: 'Syne', sans-serif; }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-accent {
          background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
        }

        /* Particle BG */
        .hero-bg {
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(239,68,68,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(245,158,11,0.08) 0%, transparent 60%),
            #050508;
        }

        /* Grid overlay */
        .grid-overlay {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Floating orbs */
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(20px) translateX(-15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(40px) translateX(-25px); }
        }
        .orb1 { animation: float1 8s ease-in-out infinite; }
        .orb2 { animation: float2 11s ease-in-out infinite; }

        /* Fade-in animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-up { animation: fadeUp 0.7s ease forwards; }
        .animate-fade-in { animation: fadeIn 0.7s ease forwards; }
        .animate-slide-left { animation: slideLeft 0.7s ease forwards; }
        .animate-scale-in { animation: scaleIn 0.5s ease forwards; }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
        .delay-7 { animation-delay: 0.7s; }
        .delay-8 { animation-delay: 0.8s; }
        .delay-9 { animation-delay: 0.9s; }

        .invisible-start { opacity: 0; }

        /* Service card hover */
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(239,68,68,0.15);
          border-color: rgba(245,158,11,0.3);
          background: rgba(255,255,255,0.05);
        }
        .service-card:hover .service-icon {
          transform: scale(1.2) rotate(-5deg);
        }
        .service-icon { transition: transform 0.3s ease; display: inline-block; }

        /* Stat counter card */
        .stat-card {
          background: linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(239,68,68,0.08) 100%);
          border: 1px solid rgba(245,158,11,0.2);
          transition: transform 0.3s ease;
        }
        .stat-card:hover { transform: scale(1.05); }

        /* Benefit item */
        .benefit-item {
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
        }
        .benefit-item:hover {
          border-color: rgba(245,158,11,0.3);
          background: rgba(245,158,11,0.05);
          transform: translateX(6px);
        }

        /* FAQ accordion */
        .faq-item {
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s ease;
        }
        .faq-item:hover { border-color: rgba(245,158,11,0.3); }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s ease;
        }
        .faq-answer.open { max-height: 300px; }

        /* CTA button */
        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .cta-btn:hover::before { left: 100%; }
        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 40px rgba(239,68,68,0.4);
        }

        /* Noise texture overlay */
        .noise::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        /* Underline animation */
        .animated-underline {
          position: relative;
        }
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, #ef4444);
          transition: width 0.5s ease;
        }
        .animated-underline:hover::after { width: 100%; }

        /* Marquee */
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 20s linear infinite; }

        /* Divider line */
        .gradient-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.4), rgba(239,68,68,0.4), transparent);
        }

        /* Numbered step */
        .step-number {
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Syne', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          opacity: 0.4;
        }

        /* Pulse ring */
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }

        /* Process connector */
        .process-line {
          background: linear-gradient(180deg, rgba(245,158,11,0.4), rgba(239,68,68,0.4));
        }
      `}</style>

      {/* ======================== SEO HEAD ======================== */}
      <Head>
        <title>
          Education Marketing Services India | Student Lead Generation &
          Admissions Growth | KidiWebTech
        </title>
        <meta
          name="description"
          content="#1 Education Marketing Agency in India. We help schools, colleges, universities & edtech platforms get more student admissions with SEO, Google Ads, social media & lead generation. Free consultation."
        />
        <meta
          name="keywords"
          content="education marketing services, student lead generation, school marketing agency India, college admission marketing, edtech marketing, digital marketing for schools, education SEO, Google Ads for colleges, student enrollment marketing, university marketing India"
        />
        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/education-marketing"
        />
        <meta
          property="og:title"
          content="Education Marketing Services | Student Lead Generation & Admissions Growth"
        />
        <meta
          property="og:description"
          content="Grow your school, college or edtech platform with expert SEO, Google Ads and social media marketing. Get more student admissions and leads."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kidiwebtech.com/services/education-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Education Marketing Services India | KidiWebTech"
        />
        <meta
          name="twitter:description"
          content="Expert education digital marketing for schools, colleges & edtech. Get more student leads & admissions."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Script
        id="edu-schema"
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

      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg grid-overlay noise overflow-hidden">
        {/* Floating orbs */}
        <div
          className="orb1 absolute top-1/4 left-10 w-72 h-72 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #ef4444, transparent 70%)",
          }}
        />
        <div
          className="orb2 absolute bottom-1/4 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent 70%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
          <div
            className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              border: "1px solid rgba(245,158,11,0.3)",
              background: "rgba(245,158,11,0.08)",
            }}
          >
            <span className="w-2 h-2 rounded-full gradient-accent inline-block relative">
              <span className="pulse-ring absolute inset-0 rounded-full gradient-accent" />
            </span>
            <span className="text-sm font-medium" style={{ color: "#f59e0b" }}>
              India's Leading Education Marketing Agency
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 animate-fade-up delay-1 invisible-start">
            Education <span className="gradient-text">Marketing</span>
            <br />
            <span className="text-white">That Fills</span>{" "}
            <span className="gradient-text">Classrooms</span>
          </h1>

          <p
            className="text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mb-12 animate-fade-up delay-2 invisible-start"
            style={{ fontWeight: 300 }}
          >
            We help schools, colleges, universities, and edtech platforms
            attract qualified student leads, increase admissions, and build
            lasting brand authority through data-driven digital marketing
            strategies built for the education sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-3 invisible-start">
            <Link
              href="/contact"
              className="cta-btn gradient-accent text-black px-10 py-4 rounded-full font-semibold text-lg inline-block"
            >
              Get Free Strategy Call
            </Link>
            <Link
              href="#services"
              className="px-10 py-4 rounded-full font-semibold text-lg inline-block animated-underline"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e5e7eb",
              }}
            >
              Explore Services ↓
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in delay-4 invisible-start">
            {[
              "Google Partner",
              "500+ Institutions",
              "3.2M+ Leads",
              "Pan-India",
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ color: "#f59e0b" }}>✦</span>
                <span className="text-gray-400 text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== MARQUEE ======================== */}
      <div
        className="py-6 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(245,158,11,0.04)",
        }}
      >
        <div className="flex marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex gap-16 px-8">
              {[
                "SEO for Colleges",
                "Google Ads",
                "Student Lead Generation",
                "Social Media Marketing",
                "Landing Page Design",
                "Local SEO",
                "Video Marketing",
                "Content Strategy",
                "Lead Automation",
                "Edtech Marketing",
                "Admission Campaigns",
                "YouTube SEO",
              ].map((item, i) => (
                <span
                  key={i}
                  className="text-sm font-medium"
                  style={{ color: "rgba(245,158,11,0.6)" }}
                >
                  ✦ {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ======================== STATS ======================== */}
      <section className="py-24 px-6" ref={setRef("stats")}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stat-card rounded-2xl p-8 text-center invisible-start ${visibleSections.stats ? `animate-scale-in delay-${i + 1}` : ""}`}
            >
              <div className="font-display text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gradient-divider mx-6 md:mx-20" />

      {/* ======================== SERVICES ======================== */}
      <section
        id="services"
        className="py-24 px-6 md:px-16"
        ref={setRef("services")}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 invisible-start ${visibleSections.services ? "animate-fade-up" : ""}`}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: "#f59e0b" }}
            >
              What We Do
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-4">
              Our <span className="gradient-text">Education Marketing</span>{" "}
              Services
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A complete suite of digital marketing solutions engineered
              specifically for educational institutions and edtech companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`service-card rounded-2xl p-8 invisible-start ${visibleSections.services ? `animate-fade-up delay-${Math.min(i + 1, 9)}` : ""}`}
              >
                <div className="text-4xl mb-5 service-icon">{service.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3">
                  <span className="gradient-text">{service.title}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider mx-6 md:mx-20" />

      {/* ======================== BENEFITS ======================== */}
      <section className="py-24 px-6 md:px-16" ref={setRef("benefits")}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`invisible-start ${visibleSections.benefits ? "animate-slide-left" : ""}`}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: "#f59e0b" }}
            >
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-4 mb-6">
              Why Our Strategy <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We've spent over 12 years perfecting the art of education
              marketing. Unlike generic digital marketing agencies, we
              understand the unique pressures of admission seasons, parent
              decision-making behaviour, and the student journey from awareness
              to enrollment. Every strategy we build is backed by deep industry
              data and continuously optimised for maximum admission impact.
            </p>
            <Link
              href="/contact"
              className="cta-btn gradient-accent text-black px-8 py-3 rounded-full font-semibold inline-block"
            >
              Talk to an Expert
            </Link>
          </div>

          <div className="grid gap-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`benefit-item rounded-xl px-6 py-4 flex items-center gap-4 invisible-start ${visibleSections.benefits ? `animate-fade-up delay-${Math.min(i + 1, 9)}` : ""}`}
              >
                <span className="text-2xl">{b.icon}</span>
                <span className="text-gray-300 text-sm">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider mx-6 md:mx-20" />

      {/* ======================== PROCESS ======================== */}
      <section className="py-24 px-6 md:px-16" ref={setRef("process")}>
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 invisible-start ${visibleSections.process ? "animate-fade-up" : ""}`}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: "#f59e0b" }}
            >
              How It Works
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-4">
              Our Proven <span className="gradient-text">4-Step Process</span>
            </h2>
          </div>

          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "We begin with a comprehensive audit of your institution's current digital presence — website, SEO health, social media, ad performance, and competitor landscape. This gives us a clear picture of opportunities and gaps.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                desc: "Based on your goals, target geography, and budget, we design a customized 90-day education marketing roadmap covering every channel — SEO, paid ads, content, and social — with clear KPIs and milestones.",
              },
              {
                step: "03",
                title: "Execution & Launch",
                desc: "Our team of education marketing specialists executes the strategy with precision — publishing SEO-optimised content, launching Google Ads campaigns, creating social media creatives, and building conversion-focused landing pages.",
              },
              {
                step: "04",
                title: "Optimize & Scale",
                desc: "We continuously analyse campaign data, A/B test creatives, optimise ad bids, and refine strategies every month to improve results. As admissions grow, we scale the budget and expand into new channels and geographies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-8 items-start invisible-start ${visibleSections.process ? `animate-fade-up delay-${i + 1}` : ""}`}
              >
                <div className="step-number flex-shrink-0 w-20">
                  {item.step}
                </div>
                <div
                  className="pt-2 border-l pl-8"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <h3 className="font-display text-xl font-bold mb-3 gradient-text">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider mx-6 md:mx-20" />

      {/* ======================== LONG-FORM SEO CONTENT ======================== */}
      <section className="py-24 px-6 md:px-16" ref={setRef("content")}>
        <div className="max-w-4xl mx-auto">
          <div
            className={`invisible-start ${visibleSections.content ? "animate-fade-up" : ""}`}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-8">
              Education Marketing That{" "}
              <span className="gradient-text">Drives Real Admissions</span>
            </h2>
          </div>

          <div
            className={`space-y-12 text-gray-400 leading-relaxed invisible-start ${visibleSections.content ? "animate-fade-up delay-2" : ""}`}
            style={{ fontSize: "1.05rem" }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                The Digital Revolution in Education Marketing
              </h3>
              <p className="mb-4">
                The education sector has undergone a seismic transformation in
                how students discover, evaluate, and choose institutions. Today,
                over <strong className="text-white">92% of students</strong>{" "}
                begin their college and course research online. They spend hours
                watching YouTube reviews, comparing colleges on Google,
                scrolling Instagram campus tours, and reading peer reviews
                before they ever step foot on a campus or attend an open day.
                This means that if your school, college, or edtech platform does
                not have a powerful, consistent, and strategic digital presence,
                you are invisible to an entire generation of prospective
                students.
              </p>
              <p>
                At KidiWebTech, we have built our entire practice around
                understanding how modern students make educational decisions —
                and engineering marketing strategies that intercept them at
                every critical touchpoint in that journey. From the first Google
                search to the final enrollment form, we help your institution
                stay top-of-mind, build trust, and convert interest into
                committed admissions.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Why Schools and Colleges Need Dedicated Education Marketing
              </h3>
              <p className="mb-4">
                Education marketing is not the same as regular digital
                marketing. The decision to choose a school or college is one of
                the most significant choices a student and their family will
                make — emotionally charged, financially significant, and highly
                research-intensive. Parents spend weeks comparing institutions.
                Students watch dozens of videos. Families read reviews and
                testimonials obsessively. The marketing strategy that works for
                an e-commerce brand or a restaurant simply does not translate to
                education.
              </p>
              <p className="mb-4">
                Generic marketing agencies lack the nuanced understanding of
                admission cycles, student psychology, and the regulatory
                landscape of the education sector. This is why institutions that
                partner with a specialised education marketing agency like
                KidiWebTech consistently outperform those that rely on in-house
                teams or general-purpose agencies. We understand the peak
                admission seasons, the triggers that move students from
                consideration to application, and the content that builds
                institutional credibility among parents.
              </p>
              <p>
                Our education-specific marketing approach ensures that every
                campaign, every piece of content, and every advertising rupee is
                deployed with a deep understanding of your target audience —
                students in specific age groups, geographies, academic
                interests, and family income brackets — ensuring you attract not
                just any student, but the right students for your programs.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                SEO for Educational Institutions: The Long-Term Growth Engine
              </h3>
              <p className="mb-4">
                Search Engine Optimisation is the single most powerful long-term
                strategy for educational institutions. When a student in
                Hyderabad types "best engineering college in Telangana" or a
                parent searches "CBSE schools near me", being on the first page
                of Google can be the difference between a full admission batch
                and an empty classroom. Our SEO services for schools and
                colleges are comprehensive, technical, and content-driven.
              </p>
              <p className="mb-4">
                We begin with thorough keyword research to identify the exact
                search terms your target students are using — from broad terms
                like "college admissions 2025" to hyper-local queries like "top
                MBA colleges in Hyderabad with low fees". Our technical SEO team
                ensures your website loads fast, is mobile-friendly, and has
                impeccably structured markup that Google loves. Our content team
                then creates deep, authoritative blog posts, course pages, and
                resource guides that rank for hundreds of relevant keywords.
              </p>
              <p>
                Local SEO is especially critical for schools and offline
                coaching institutes. We optimise your Google Business Profile,
                build local citation consistency across directories, and help
                you accumulate authentic student and parent reviews — all of
                which dramatically improve your visibility in local search
                results and Google Maps, driving physical inquiries and campus
                visits from nearby families.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Google Ads for Student Lead Generation: Speed Meets Precision
              </h3>
              <p className="mb-4">
                While SEO builds sustainable organic growth, Google Ads delivers
                immediate results — especially crucial during competitive
                admission seasons when your institution needs a surge of
                qualified leads in a short window. Our Google Ads specialists
                design campaigns that target students at their moment of highest
                intent: when they are actively searching for exactly what your
                institution offers.
              </p>
              <p className="mb-4">
                We build granular campaign structures with tightly themed ad
                groups for each course, program, and geographic target. Our ad
                copies are meticulously crafted to highlight your institution's
                unique value propositions — faculty quality, placement records,
                scholarships, or campus infrastructure — in a way that resonates
                emotionally with students and practically with parents. We
                leverage Google Search, Display, YouTube Pre-Roll, and
                Performance Max campaigns to create comprehensive coverage
                across the student's online journey.
              </p>
              <p>
                Critically, we do not just drive clicks — we drive conversions.
                Our landing pages are designed with a single-minded focus on
                converting visitors into leads. We implement advanced conversion
                tracking to measure cost per lead, cost per admission, and
                return on ad spend, ensuring complete transparency and
                continuous campaign optimisation throughout your admission
                cycle.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Social Media Marketing for Education: Building Community and
                Trust
              </h3>
              <p className="mb-4">
                For today's student, social media is not entertainment — it is a
                research tool. Students watch campus tour reels on Instagram,
                follow college pages for culture insights, watch alumni success
                stories on YouTube, and discover institutions through targeted
                Facebook ads. Your social media presence is often the first and
                most lasting impression a student has of your institution.
              </p>
              <p className="mb-4">
                Our social media marketing for educational institutions is built
                around authentic storytelling. We help you showcase real student
                life, faculty brilliance, campus events, placement achievements,
                and community culture through a consistent content calendar that
                keeps your audience engaged year-round — not just during
                admission season. This ongoing engagement means prospective
                students already feel connected to your institution by the time
                they are ready to apply.
              </p>
              <p>
                We also run precision-targeted social media advertising
                campaigns on Instagram, Facebook, and YouTube that reach
                students based on location, age, academic interests, and
                behaviour patterns. For professional courses and MBA programs,
                our LinkedIn advertising campaigns reach working professionals
                considering higher education, career switches, or upskilling
                opportunities.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Edtech Marketing: Scaling Student Acquisition for Online
                Platforms
              </h3>
              <p className="mb-4">
                The edtech sector has experienced explosive growth, but with
                that growth has come intense competition. Standing out in a
                market crowded with online learning platforms, coaching apps,
                and skill development programs requires a sophisticated,
                multi-channel marketing strategy that combines performance
                marketing with brand building.
              </p>
              <p className="mb-4">
                Our edtech marketing services are designed to accelerate student
                acquisition at scale. We manage full-funnel campaigns that span
                awareness (YouTube ads, programmatic display), consideration
                (SEO content, retargeting), and conversion (Google Search ads,
                WhatsApp automation). For subscription-based edtech models, we
                optimise for low-cost trial conversions and long-term subscriber
                retention. For high-ticket courses, we build elaborate nurturing
                sequences that educate, build trust, and overcome purchase
                hesitation over 7–21 days.
              </p>
              <p>
                Whether you are a K-12 learning app, an upskilling platform, a
                competitive exam coaching institute, or a professional
                certification provider, our data-driven approach ensures you
                acquire students at the lowest possible cost while maximising
                their lifetime value.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Content Marketing: The Authority Builder for Educational Brands
              </h3>
              <p className="mb-4">
                Content marketing is the most sustainable and cost-effective way
                to establish your institution as a thought leader in the
                education space. When prospective students search for "how to
                prepare for NEET 2025", "best careers after BCom", or "how to
                choose the right engineering branch", they are not just looking
                for information — they are subconsciously evaluating which
                institution understands their needs best.
              </p>
              <p className="mb-4">
                Our education content marketing team creates comprehensive blog
                posts, admission guides, career path articles, course comparison
                pages, and FAQ content that ranks on Google for high-intent
                queries and positions your institution as the trusted authority
                in your niche. This content not only drives organic traffic but
                also serves as a powerful nurturing asset — keeping prospective
                students educated, engaged, and moving toward enrollment.
              </p>
              <p>
                We also create downloadable resources — brochures, ebooks,
                scholarship guides — that capture student contact information
                for lead generation while delivering genuine value. These lead
                magnets are seamlessly integrated into our email and WhatsApp
                automation workflows, creating a continuous, personalised
                communication stream that guides every prospective student
                toward admission.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Lead Nurturing and Admission Automation: Converting Leads into
                Enrolled Students
              </h3>
              <p className="mb-4">
                Generating leads is only half the battle. The real challenge —
                and the real opportunity — lies in systematically nurturing
                those leads into committed students. Research shows that over
                60% of student inquiries are never followed up with more than
                one contact, leading to enormous waste of marketing budget and
                lost admission opportunities.
              </p>
              <p className="mb-4">
                Our lead nurturing automation systems change this entirely. We
                integrate your CRM with multi-channel automation workflows that
                trigger personalised follow-ups via email, SMS, and WhatsApp
                immediately upon inquiry, and continue to engage the prospective
                student with relevant content, fee reminders, scholarship
                alerts, and open day invitations over the following weeks.
              </p>
              <p>
                This systematic, personalised follow-up process dramatically
                improves lead-to-admission conversion rates — our clients
                typically see a 40–80% improvement in conversion after
                implementing our automation systems. Combined with a
                well-trained admissions counsellor team using our lead scoring
                and prioritisation tools, your institution can focus human
                effort where it matters most: on the students most likely to
                enroll.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Choosing the Right Education Marketing Agency in India
              </h3>
              <p className="mb-4">
                With hundreds of digital marketing agencies claiming expertise
                in education marketing, choosing the right partner is critical.
                The wrong agency can waste your entire admission season budget
                with generic strategies that generate clicks but not
                enrollments. Here is what to look for when evaluating education
                marketing agencies:
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  Education sector specialisation:
                </strong>{" "}
                Look for agencies that have worked extensively with schools,
                colleges, or edtech companies — not just general marketing
                experience. Education buying decisions are different from any
                other consumer purchase, and your agency must understand that
                nuance deeply.
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  Transparent reporting and attribution:
                </strong>{" "}
                Demand clear reporting on leads generated, cost per lead, and
                campaign performance. A good education marketing agency should
                be able to tell you exactly how many student admissions their
                campaigns contributed to, not just how many website visitors
                they drove.
              </p>
              <p>
                <strong className="text-white">Proven track record:</strong> Ask
                for case studies, testimonials, and references from educational
                institutions similar to yours. At KidiWebTech, we are proud to
                have generated over 3.2 million student leads and supported 500+
                educational institutions across India in scaling their
                admissions — and we can prove it with detailed case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider mx-6 md:mx-20" />

      {/* ======================== FAQ ======================== */}
      <FAQ faqs={faqs} setRef={setRef} visibleSections={visibleSections} />

      <div className="gradient-divider mx-6 md:mx-20" />

      {/* ======================== CTA ======================== */}
      <section
        className="py-32 px-6 text-center relative overflow-hidden"
        ref={setRef("cta")}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(239,68,68,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className={`relative z-10 invisible-start ${visibleSections.cta ? "animate-fade-up" : ""}`}
        >
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "#f59e0b" }}
          >
            Get Started Today
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-6">
            Ready to Fill Your{" "}
            <span className="gradient-text">Next Admission Batch?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Join 500+ educational institutions across India that trust
            KidiWebTech to drive their student admissions. Get your free,
            no-obligation education marketing strategy call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cta-btn gradient-accent text-black px-12 py-5 rounded-full font-semibold text-lg inline-block font-display"
            >
              Book Free Consultation
            </Link>
            <Link
              href="tel:+919999999999"
              className="px-12 py-5 rounded-full font-semibold text-lg inline-block animated-underline"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              📞 Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ======================== FAQ COMPONENT ======================== */
function FAQ({ faqs, setRef, visibleSections }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 md:px-16" ref={setRef("faq")}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 invisible-start ${visibleSections.faq ? "animate-fade-up" : ""}`}
        >
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "#f59e0b" }}
          >
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item rounded-2xl overflow-hidden invisible-start ${visibleSections.faq ? `animate-fade-up delay-${Math.min(i + 1, 6)}` : ""}`}
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display font-bold text-white text-lg">
                  {faq.q}
                </span>
                <span
                  className="text-2xl flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "#f59e0b",
                    transform:
                      openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <p className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
