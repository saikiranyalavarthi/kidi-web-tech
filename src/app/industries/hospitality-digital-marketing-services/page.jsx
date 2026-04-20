import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HospitalityMarketing() {
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
    serviceType: "Hospitality Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com",
    },
    areaServed: "India",
    description:
      "Hospitality digital marketing services for hotels, resorts, restaurants and travel businesses including SEO, Google Ads, social media marketing, and direct booking optimization across India.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is hospitality digital marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hospitality digital marketing refers to the use of online marketing strategies to promote hotels, resorts, restaurants, and travel businesses. It includes SEO, Google Ads, social media marketing, online reputation management, email marketing, and direct booking optimization designed to attract guests and increase revenue.",
        },
      },
      {
        "@type": "Question",
        name: "How can digital marketing increase hotel bookings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital marketing increases hotel bookings by improving visibility on Google through SEO and paid ads, reducing OTA dependency through direct booking campaigns, engaging travelers on social media, managing online reviews and ratings, and retargeting past visitors with personalized offers — all combining to drive more direct reservations at lower cost.",
        },
      },
      {
        "@type": "Question",
        name: "How much does hotel digital marketing cost in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hotel digital marketing costs in India typically range from ₹30,000 to ₹3,00,000 per month depending on property size, location, services required, and ad spend budget. Boutique hotels may start with focused local SEO and social packages, while large resorts benefit from comprehensive multi-channel campaigns including Google Ads, content marketing, and ORM.",
        },
      },
      {
        "@type": "Question",
        name: "Which platforms work best for hospitality marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For hospitality marketing, Google Search Ads and Google Hotel Ads are most effective for capturing high-intent travelers. Instagram and Pinterest work excellently for visual brand building. Facebook targets family travelers and special occasion bookings. TripAdvisor and Google Reviews management is critical for reputation. YouTube is powerful for resort and destination marketing through immersive video content.",
        },
      },
      {
        "@type": "Question",
        name: "What is OTA dependency and how can marketing reduce it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OTA (Online Travel Agency) dependency is the reliance on platforms like MakeMyTrip, Booking.com, and Goibibo for bookings, which typically charge 15-25% commission per reservation. Digital marketing reduces OTA dependency by driving guests to book directly through your website via SEO, Google Ads, retargeting, and email campaigns — significantly improving profit margins per booking.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer restaurant digital marketing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide specialized digital marketing for restaurants including local SEO for food-related searches, Google Maps optimization, social media marketing on Instagram and Zomato, food delivery platform optimization, influencer collaborations with food bloggers, and targeted advertising campaigns for events, private dining, and seasonal menus.",
        },
      },
    ],
  };

  const services = [
    {
      icon: "🏨",
      title: "Hotel & Resort SEO",
      desc: "Rank your property on Google's first page for high-intent travel searches like 'best hotel in Goa', 'luxury resorts near Hyderabad', or 'boutique hotels in Rajasthan'. Our hospitality-focused SEO strategy drives a consistent stream of organic, commission-free bookings directly to your website.",
    },
    {
      icon: "📢",
      title: "Google Ads & Hotel Ads",
      desc: "Capture travelers at peak booking intent with precision Google Search, Display, and Google Hotel Ads campaigns. We build campaigns that appear when travelers are actively comparing hotels — driving high-quality, direct reservation traffic at optimal cost per acquisition.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Inspire wanderlust and drive bookings with stunning visual content across Instagram, Facebook, Pinterest, and YouTube. We create scroll-stopping campaigns that showcase your property's ambiance, rooms, dining, and experiences — turning followers into booked guests.",
    },
    {
      icon: "⭐",
      title: "Online Reputation Management",
      desc: "Your reputation on Google, TripAdvisor, MakeMyTrip, and Booking.com directly impacts your occupancy rate. We proactively manage reviews, respond to guest feedback, generate authentic positive reviews, and build a 5-star digital reputation that converts lookers into bookers.",
    },
    {
      icon: "🎯",
      title: "Direct Booking Optimization",
      desc: "Reduce OTA commission costs by converting more guests to book directly through your website. We optimize your booking engine, create best-rate-guarantee messaging, build member-only offer pages, and run targeted campaigns that make direct booking the most attractive option for guests.",
    },
    {
      icon: "📍",
      title: "Local SEO & Google Maps",
      desc: "Dominate local travel searches like 'hotels near me', 'best restaurants in [city]', and 'resorts near [landmark]'. We optimize your Google Business Profile with compelling photos, accurate information, and consistent citation building to maximize local discovery and drive walk-in guests.",
    },
    {
      icon: "🎥",
      title: "Video & Virtual Tours",
      desc: "Let travelers fall in love with your property before they arrive. We produce cinematic property videos, 360° virtual tours, restaurant ambiance reels, and experience showcases optimized for YouTube and Instagram — making your property impossible to scroll past.",
    },
    {
      icon: "✉️",
      title: "Email & WhatsApp Marketing",
      desc: "Build lasting guest relationships that drive repeat bookings and referrals. Our targeted email and WhatsApp campaigns deliver personalized seasonal offers, anniversary packages, loyalty rewards, and event promotions that bring past guests back and increase lifetime value.",
    },
    {
      icon: "📊",
      title: "Revenue & Analytics Reporting",
      desc: "Make data-driven decisions with comprehensive monthly dashboards covering website traffic, booking conversion rates, cost per booking, OTA vs. direct booking split, and revenue attribution. Full transparency ensures every marketing rupee is accountable to your bottom line.",
    },
  ];

  const stats = [
    { number: "300+", label: "Hospitality Brands Served" },
    { number: "₹120Cr+", label: "Direct Revenue Generated" },
    { number: "40%", label: "Average OTA Reduction" },
    { number: "4.8★", label: "Average Review Rating Achieved" },
  ];

  const benefits = [
    { icon: "🚀", text: "Increase direct bookings by up to 250%" },
    { icon: "💰", text: "Reduce OTA commission costs by 30-50%" },
    { icon: "🎯", text: "Target travelers by location, intent & budget" },
    { icon: "⭐", text: "Build a 4.8+ star online reputation" },
    { icon: "📈", text: "Maximize occupancy rates year-round" },
    { icon: "🌐", text: "Reach domestic & international travelers" },
    { icon: "🔄", text: "Drive repeat bookings with retention campaigns" },
    { icon: "📞", text: "24/7 automated inquiry & reservation follow-up" },
    { icon: "🏆", text: "Outrank competitors in Google travel results" },
  ];

  const faqs = [
    {
      q: "What is hospitality digital marketing?",
      a: "Hospitality digital marketing is the strategic application of online marketing channels to promote hotels, resorts, restaurants, homestays, and travel businesses. It encompasses SEO to rank on Google, paid advertising to capture high-intent travelers, social media marketing to inspire bookings, online reputation management to build trust, and email marketing to drive repeat stays — all working together to increase occupancy and revenue.",
    },
    {
      q: "How can digital marketing increase hotel bookings?",
      a: "Digital marketing increases hotel bookings through multiple simultaneous channels. SEO ensures your property appears when travelers search for hotels in your area. Google Ads capture guests who are ready to book right now. Social media campaigns inspire future travel and build brand preference. Retargeting ads re-engage website visitors who browsed but didn't book. Email campaigns convert past guests into loyal repeat visitors. Together, these channels create a powerful booking funnel that works 24/7.",
    },
    {
      q: "How long does hospitality digital marketing take to show results?",
      a: "Google Hotel Ads and Search campaigns can generate bookings within 48-72 hours of launch. Social media advertising typically shows measurable booking lift within 2-4 weeks. SEO delivers significant organic booking growth within 3-6 months. Online reputation improvement is visible within 4-8 weeks of systematic review generation. For maximum impact, we recommend a sustained 6-12 month strategy that compounds results across all channels.",
    },
    {
      q: "What is OTA dependency and how can marketing reduce it?",
      a: "OTA (Online Travel Agency) dependency means relying on platforms like MakeMyTrip, Booking.com, Agoda, or Goibibo for the majority of your bookings — which typically costs 15-25% commission on every reservation. Our direct booking marketing strategies use SEO, Google Ads, retargeting, and best-rate guarantees to shift the booking mix toward your own website, saving substantial commission costs and giving you direct access to your guests' contact information for future remarketing.",
    },
    {
      q: "Which platforms are most effective for hotel marketing in India?",
      a: "For Indian hospitality businesses, Google Search Ads and Google Hotel Ads are most powerful for capturing travelers with immediate booking intent. Instagram excels at visual property showcase and aspirational travel content. Facebook targets specific demographics for family vacations, corporate travel, and wedding bookings. YouTube is exceptional for destination resort and luxury property marketing. Managing reviews on Google, TripAdvisor, and MakeMyTrip is non-negotiable for conversion. WhatsApp marketing has outstanding engagement for inquiry follow-up and repeat guest offers.",
    },
    {
      q: "Do you offer restaurant and food business marketing?",
      a: "Absolutely. Our restaurant marketing services include local SEO to rank for 'best restaurant near me' and cuisine-specific searches, Google Maps optimization, Instagram and food blogger collaborations, Zomato and Swiggy profile optimization, targeted advertising for private dining events and special menus, and loyalty programs via WhatsApp. For restaurant chains, we also manage multi-location SEO and centralized reputation management across all outlets.",
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

        .hero-bg {
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(239,68,68,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(245,158,11,0.08) 0%, transparent 60%),
            #050508;
        }
        .grid-overlay {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

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

        .stat-card {
          background: linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(239,68,68,0.08) 100%);
          border: 1px solid rgba(245,158,11,0.2);
          transition: transform 0.3s ease;
        }
        .stat-card:hover { transform: scale(1.05); }

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

        .noise::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        .animated-underline { position: relative; }
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #f59e0b, #ef4444);
          transition: width 0.5s ease;
        }
        .animated-underline:hover::after { width: 100%; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 20s linear infinite; }

        .gradient-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.4), rgba(239,68,68,0.4), transparent);
        }

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

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
      `}</style>

      {/* ======================== SEO HEAD ======================== */}
      <Head>
        <title>
          Hospitality Digital Marketing Services India | Increase Hotel Bookings
          & Revenue | KidiWebTech
        </title>
        <meta
          name="description"
          content="#1 Hospitality Marketing Agency in India. We help hotels, resorts, restaurants & travel businesses increase direct bookings, reduce OTA dependency, and grow revenue with SEO, Google Ads & social media. Free consultation."
        />
        <meta
          name="keywords"
          content="hospitality marketing services India, hotel digital marketing, restaurant marketing agency, resort marketing, increase hotel bookings, hotel SEO India, Google Ads for hotels, direct booking optimization, online reputation management hotels, travel marketing India"
        />
        <link
          rel="canonical"
          href="https://www.kidiwebtech.com/services/hospitality-digital-marketing"
        />
        <meta
          property="og:title"
          content="Hospitality Digital Marketing Services | Increase Bookings & Revenue | KidiWebTech"
        />
        <meta
          property="og:description"
          content="Grow your hotel, resort or restaurant with expert SEO, Google Ads, social media marketing and booking optimization. Increase reservations and revenue."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kidiwebtech.com/services/hospitality-digital-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hospitality Digital Marketing Services India | KidiWebTech"
        />
        <meta
          name="twitter:description"
          content="Expert hospitality marketing for hotels, resorts & restaurants. Increase direct bookings and reduce OTA costs."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Script
        id="hospitality-schema"
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
              India's Leading Hospitality Marketing Agency
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 animate-fade-up delay-1 invisible-start">
            Hospitality <span className="gradient-text">Marketing</span>
            <br />
            <span className="text-white">That Fills</span>{" "}
            <span className="gradient-text">Every Room</span>
          </h1>

          <p
            className="text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mb-12 animate-fade-up delay-2 invisible-start"
            style={{ fontWeight: 300 }}
          >
            We help hotels, resorts, restaurants, and travel businesses attract
            qualified guests, increase direct bookings, reduce OTA dependency,
            and build a 5-star digital reputation through data-driven
            hospitality marketing strategies.
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

          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in delay-4 invisible-start">
            {[
              "Google Partner",
              "300+ Properties",
              "₹120Cr+ Revenue",
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
                "Hotel SEO",
                "Google Hotel Ads",
                "Direct Booking Optimization",
                "Restaurant Marketing",
                "Resort Branding",
                "OTA Reduction",
                "Online Reputation Management",
                "Local SEO",
                "Social Media Marketing",
                "Video & Virtual Tours",
                "Email Campaigns",
                "WhatsApp Marketing",
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
              Our <span className="gradient-text">Hospitality Marketing</span>{" "}
              Services
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A complete suite of digital marketing solutions built exclusively
              for hotels, resorts, restaurants, and travel businesses across
              India.
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
              Why Our Strategy <span className="gradient-text">Delivers</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We have spent over 12 years mastering the art of hospitality
              marketing. Unlike generic digital agencies, we understand the
              seasonality of travel demand, the psychology of vacation
              decision-making, the fierce competition from OTAs, and the
              razor-thin margins that make every direct booking count. Every
              strategy we deploy is backed by deep industry benchmarks and
              continuously optimised to maximise your RevPAR and minimize cost
              per booking.
            </p>
            <Link
              href="/contact"
              className="cta-btn gradient-accent text-black px-8 py-3 rounded-full font-semibold inline-block"
            >
              Talk to a Specialist
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
                title: "Property Audit & Analysis",
                desc: "We start with a comprehensive audit of your current digital presence — website performance, SEO health, Google Business Profile, OTA listing quality, social media presence, review scores, and competitor benchmarking. This gives us a clear picture of where you stand and exactly where the biggest booking growth opportunities lie.",
              },
              {
                step: "02",
                title: "Custom Strategy & Roadmap",
                desc: "Based on your property type, target traveler segments, geographic focus, and revenue goals, we build a bespoke 90-day hospitality marketing roadmap. This covers channel prioritization, budget allocation, seasonal campaign planning, content strategy, and clear KPIs tied to bookings and revenue — not just clicks.",
              },
              {
                step: "03",
                title: "Execution & Campaign Launch",
                desc: "Our hospitality marketing specialists execute every element of the strategy — launching Google Hotel Ads and Search campaigns, publishing SEO-optimised property content, creating social media campaigns, optimizing your booking engine, and building automated guest communication workflows that convert inquiries to reservations around the clock.",
              },
              {
                step: "04",
                title: "Optimise, Scale & Report",
                desc: "We analyse booking data, occupancy trends, and campaign performance every month — A/B testing ad creatives, refining bidding strategies, and expanding into new traveler segments as results improve. Transparent monthly reports show exactly which campaigns drove bookings and what revenue was attributed to each marketing channel.",
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
              Hospitality Marketing That{" "}
              <span className="gradient-text">Drives Real Bookings</span>
            </h2>
          </div>

          <div
            className={`space-y-12 text-gray-400 leading-relaxed invisible-start ${visibleSections.content ? "animate-fade-up delay-2" : ""}`}
            style={{ fontSize: "1.05rem" }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                The Digital Transformation of Travel & Hospitality
              </h3>
              <p className="mb-4">
                The hospitality industry is undergoing a fundamental
                transformation. Today, over{" "}
                <strong className="text-white">95% of travelers</strong>{" "}
                research accommodations and dining options online before making
                any booking decision. They scroll through Instagram for property
                inspiration, compare hotels on Google, watch YouTube virtual
                tours, read TripAdvisor reviews obsessively, and often visit a
                property's website multiple times before committing to a
                reservation. The entire guest journey — from dream to
                destination — happens digitally.
              </p>
              <p>
                For hotels, resorts, restaurants, and travel businesses in
                India, this means that your digital presence is your most
                powerful salesperson, working 24/7 to attract, inspire, and
                convert potential guests. At KidiWebTech, we have built our
                entire hospitality marketing practice around mastering this
                digital guest journey — ensuring your property is discovered,
                trusted, and booked at every critical moment.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Why Hospitality Businesses Need Specialised Digital Marketing
              </h3>
              <p className="mb-4">
                Marketing a hotel or restaurant is fundamentally different from
                marketing a product or software. Hospitality purchases are
                high-consideration, emotionally driven decisions. Guests are not
                just buying a room — they are buying an experience, a memory, a
                feeling of luxury or adventure or romance. This emotional
                dimension demands a marketing approach that goes far beyond
                driving clicks and impressions.
              </p>
              <p className="mb-4">
                Hospitality businesses also face unique structural challenges
                that generic marketing agencies simply do not understand. The
                tyranny of OTAs (Online Travel Agencies) like MakeMyTrip,
                Booking.com, and Goibibo — which charge 15–25% commission on
                every booking — erodes margins significantly. Seasonal demand
                swings create revenue volatility that requires sophisticated
                marketing planning. Online reputation on platforms like
                TripAdvisor, Google, and Zomato directly determines booking
                conversion rates. These are specialist challenges requiring a
                specialist partner.
              </p>
              <p>
                At KidiWebTech, our hospitality marketing team combines deep
                industry knowledge with cutting-edge digital expertise —
                delivering strategies that increase direct bookings, strengthen
                your brand, and improve profitability across every season and
                every traveler segment you serve.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Hotel SEO: Winning Organic Bookings on Google
              </h3>
              <p className="mb-4">
                Search Engine Optimisation is the cornerstone of sustainable,
                long-term growth for hospitality businesses. When a traveler
                searches "luxury hotel in Jaipur", "beach resort near Goa", or
                "best restaurants in Banjara Hills Hyderabad", appearing on
                Google's first page can be the difference between a fully booked
                property and empty rooms. Organic search traffic is
                commission-free, highly intentional, and compounds in value over
                time — making it the highest-ROI marketing channel for
                properties willing to invest consistently.
              </p>
              <p className="mb-4">
                Our hotel SEO strategy is multi-layered and comprehensive. We
                begin with deep keyword research to map every search query your
                target travelers use — from broad destination searches to
                hyper-specific queries like "pet-friendly hotels in Coorg" or
                "rooftop restaurants in Mumbai with live music". We then
                optimize your website's technical foundation — page speed,
                mobile responsiveness, structured data markup, and Core Web
                Vitals — ensuring Google can crawl, understand, and rank your
                pages with confidence.
              </p>
              <p>
                Content is the engine of our hotel SEO strategy. We create
                authoritative, deeply researched property pages, destination
                guides, local attraction content, event pages, and travel blogs
                that rank for hundreds of relevant keywords and establish your
                property as the expert voice for your destination. Each piece of
                content is engineered to rank and to convert — turning organic
                visitors into booked guests.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Google Ads & Google Hotel Ads: Capturing Travelers Ready to Book
              </h3>
              <p className="mb-4">
                While SEO builds sustainable organic growth over months, Google
                Ads delivers immediate results — capturing high-intent travelers
                the moment they are ready to book. Our Google Ads specialists
                design campaigns that appear precisely when travelers search for
                hotels in your area, at optimal bid positions, with compelling
                ad copy that makes your property the obvious choice.
              </p>
              <p className="mb-4">
                Google Hotel Ads are a particularly powerful tool for
                hospitality businesses — appearing directly in Google Search
                results and Google Maps with real-time availability and pricing
                pulled from your booking engine. Properties running Google Hotel
                Ads consistently report 20–40% increases in direct booking
                volume, significantly reducing OTA commission costs. We manage
                the full Google Hotel Ads setup including booking engine
                integration, rate parity monitoring, and bid optimization.
              </p>
              <p>
                Beyond Search campaigns, we leverage Google Display ads for
                retargeting travelers who visited your website without booking —
                reminding them of your property as they browse other sites and
                bringing them back to complete their reservation. YouTube
                pre-roll campaigns showcase your property's cinematic beauty to
                travelers in the early inspiration phase. Performance Max
                campaigns use Google's AI to find booking-intent travelers
                across all Google surfaces — Search, YouTube, Gmail, and Maps —
                maximising reach with minimal campaign management overhead.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Social Media Marketing: Inspiring Travel & Building Brand Love
              </h3>
              <p className="mb-4">
                For hospitality brands, social media is not just a marketing
                channel — it is where travel dreams are born. Instagram reels of
                a stunning infinity pool, Facebook posts about a wedding venue
                draped in flowers, YouTube tours of a mountain resort at sunrise
                — this is the content that plants the seed of desire in a
                traveler's mind long before they are actively searching for
                accommodation.
              </p>
              <p className="mb-4">
                Our hospitality social media strategy is built around authentic,
                aspirational storytelling that showcases the real experience of
                staying or dining at your property. We work with your team to
                capture and create a consistent stream of high-quality content —
                room showcases, chef's table videos, guest testimonials,
                seasonal decor reveals, local experience highlights, and event
                coverage — delivering it on a strategic content calendar that
                keeps your property top-of-mind year-round.
              </p>
              <p>
                Social media advertising adds a powerful performance layer to
                this organic presence. We run Instagram and Facebook ad
                campaigns with precision traveler targeting — reaching
                honeymooners planning romantic getaways, families searching for
                summer vacation destinations, corporate travel managers booking
                team offsites, and food enthusiasts looking for the city's best
                new dining experience. Each campaign is designed to generate
                measurable booking enquiries, not just likes and shares.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Online Reputation Management: Your Digital First Impression
              </h3>
              <p className="mb-4">
                In the hospitality industry, your online reputation is
                everything. Studies show that{" "}
                <strong className="text-white">93% of travelers</strong> read
                reviews before booking a hotel, and a single star increase in
                your average rating can increase revenue by 5–9%. Your scores on
                Google, TripAdvisor, MakeMyTrip, Booking.com, and Zomato are
                among the most powerful conversion factors in your marketing
                arsenal — more influential than any ad you could ever run.
              </p>
              <p className="mb-4">
                Our Online Reputation Management (ORM) service for hospitality
                businesses is comprehensive and proactive. We implement
                systematic review generation campaigns — training your front
                desk teams, automating post-stay review requests via email and
                WhatsApp, and leveraging in-property signage to encourage
                authentic guest reviews. We monitor all review platforms in real
                time and craft professional, personalized responses to every
                review — positive and negative — demonstrating your commitment
                to guest experience and building trust with prospective bookers.
              </p>
              <p>
                For properties with existing reputation challenges — clusters of
                negative reviews, outdated criticism, or low overall ratings —
                we develop structured reputation recovery programs that
                systematically improve scores through a combination of
                operational feedback loops, guest recovery initiatives, and
                accelerated review generation campaigns. Most properties see
                meaningful rating improvements within 60–90 days of our ORM
                engagement.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Reducing OTA Dependency: The Path to Higher Profitability
              </h3>
              <p className="mb-4">
                The hospitality industry's over-reliance on Online Travel
                Agencies is one of the most significant profitability challenges
                facing hotels and resorts today. When 60–80% of your bookings
                come through OTAs charging 15–25% commission, an enormous share
                of your revenue evaporates before it ever reaches your bank
                account. Worse, OTAs own the guest relationship — you receive a
                reservation, but not the guest's email, phone number, or ability
                to market to them in the future.
              </p>
              <p className="mb-4">
                Our direct booking shift strategy is designed to systematically
                move your booking mix away from expensive OTA channels and
                toward your own website. We optimize your booking engine for
                conversion, implement best-rate-guarantee messaging prominently
                across your site, create member-only discount programs, and run
                targeted Google and social campaigns specifically designed to
                intercept travelers who might otherwise book through an OTA. We
                also build post-stay email and WhatsApp sequences that convert
                OTA guests into direct bookers for their next visit.
              </p>
              <p>
                Properties that shift even 20% of their OTA booking volume to
                direct channels typically see 8–15% improvement in net revenue
                without increasing total bookings — simply by eliminating
                commission costs. Over a 12-month period, this can represent
                millions of rupees in recovered revenue for mid-size properties,
                making direct booking optimization one of the highest-ROI
                investments a hospitality business can make.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Restaurant Marketing: Filling Tables & Building Dining
                Destinations
              </h3>
              <p className="mb-4">
                Restaurant marketing in the digital age requires a
                multi-platform approach that spans Google search, social media,
                food delivery platforms, and influencer partnerships. When a
                diner in Hyderabad searches "best biryani restaurant near me" or
                a couple plans a romantic anniversary dinner in Mumbai, your
                restaurant needs to appear — and appear compellingly — across
                multiple digital touchpoints simultaneously.
              </p>
              <p className="mb-4">
                Our restaurant digital marketing services are comprehensive.
                Local SEO ensures your restaurant appears prominently in Google
                Maps and organic search for relevant cuisine and occasion
                searches. Instagram marketing showcases your food photography,
                chef's stories, and ambiance reels to build a loyal following of
                food enthusiasts. We manage your presence on Zomato, Swiggy, and
                Google, optimising your profile, photos, and reviews to maximize
                your visibility and order volume on each platform.
              </p>
              <p>
                For special occasions and premium dining experiences, our
                targeted Facebook and Instagram ad campaigns reach high-value
                diners planning birthdays, anniversaries, corporate dinners, and
                celebrations — driving reservations for your highest-margin
                dining occasions. Food blogger and influencer collaborations,
                carefully selected for authentic audience alignment, create
                powerful word-of-mouth momentum that no paid campaign can fully
                replicate.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Email & WhatsApp Marketing: Building Loyal Guests Who Return
              </h3>
              <p className="mb-4">
                Acquiring a new guest is 5–7 times more expensive than retaining
                an existing one. Yet most hospitality businesses invest almost
                exclusively in new guest acquisition, leaving enormous repeat
                booking revenue on the table. Our email and WhatsApp marketing
                programs are specifically designed to maximize the lifetime
                value of every guest who has ever stayed at your property or
                dined at your restaurant.
              </p>
              <p className="mb-4">
                We build sophisticated guest segmentation systems that
                categorize your past guests by visit frequency, spend level,
                travel purpose, and booking lead time — then deliver highly
                personalized communications that feel individually crafted
                rather than mass-broadcast. Seasonal offers, anniversary stay
                reminders, early bird discounts for peak periods, new restaurant
                menu announcements, loyalty program updates, and exclusive
                member packages — all delivered through perfectly timed email
                and WhatsApp campaigns that feel like a message from a
                hospitality friend rather than a marketing database.
              </p>
              <p>
                The numbers are compelling. Our hospitality email campaigns
                consistently achieve open rates of 35–50% — far above the
                industry average — because we send relevant, valuable content to
                well-segmented audiences rather than generic blasts to everyone.
                Properties that implement our guest retention email programs
                typically see 25–40% of their annual bookings come from repeat
                guests within 18 months — dramatically reducing acquisition
                costs and improving overall marketing ROI.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Choosing the Right Hospitality Marketing Agency in India
              </h3>
              <p className="mb-4">
                The hospitality marketing agency landscape in India is crowded,
                and choosing the wrong partner can cost you an entire peak
                season's booking potential. Here is what to look for when
                evaluating hospitality digital marketing agencies:
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  Hospitality sector specialisation:
                </strong>{" "}
                Only work with agencies that have a proven, dedicated
                hospitality practice — not generalists who claim to serve all
                industries. Hospitality-specific knowledge of OTA dynamics,
                RevPAR optimization, booking engine integration, and travel
                seasonality is non-negotiable.
              </p>
              <p className="mb-4">
                <strong className="text-white">
                  Booking-focused reporting:
                </strong>{" "}
                Demand that your agency reports on bookings generated, cost per
                booking, and direct vs. OTA booking mix — not just traffic and
                impressions. Marketing that cannot be tied to reservations and
                revenue is not serving your business.
              </p>
              <p>
                <strong className="text-white">
                  Track record with comparable properties:
                </strong>{" "}
                Ask for case studies from hotels, resorts, or restaurants
                similar to yours in size and market positioning. At KidiWebTech,
                we have helped over 300 hospitality businesses across India —
                from boutique heritage hotels in Rajasthan to multi-property
                resort chains in Goa — significantly grow their direct bookings
                and revenue. We welcome the due diligence.
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
            Ready to Fill Every{" "}
            <span className="gradient-text">Room & Table?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Join 300+ hospitality businesses across India that trust KidiWebTech
            to drive their bookings and revenue. Get your free, no-obligation
            hospitality marketing strategy call today.
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
