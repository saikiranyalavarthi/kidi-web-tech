import Link from "next/link";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  title: "Education Marketing Services in India | Education Digital Marketing",

  description:
    "KidiWebTech provides education marketing services in India for schools, colleges, universities, coaching institutes and edtech companies, including SEO, Google Ads, social media marketing and student lead generation.",

  keywords: [
    "education marketing services India",
    "education marketing agency India",
    "education digital marketing agency India",
    "education marketing company India",
    "digital marketing for education",
    "education SEO services India",
    "SEO for education industry",
    "Google Ads for education",
    "student lead generation services India",
    "school marketing agency India",
    "college marketing agency India",
    "edtech marketing agency India",
    "education social media marketing",
    "admission lead generation agency",
    "education content marketing India",
    "KidiWebTech",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/education-marketing-services-india",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: "https://www.kidiwebtech.com/education-marketing-services-india",

    siteName: "KidiWebTech",

    title: "Education Marketing Services in India | KidiWebTech",

    description:
      "Digital marketing for schools, colleges, universities, coaching institutes and edtech businesses. SEO, Google Ads, social media and student lead generation.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Education Marketing Services in India - KidiWebTech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Education Marketing Services in India | KidiWebTech",

    description:
      "Education SEO, Google Ads, social media marketing and student lead generation services across India.",

    images: ["https://www.kidiwebtech.com/og-image.jpg"],
  },
};

/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.kidiwebtech.com/",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Education Marketing Services India",
      item: "https://www.kidiwebtech.com/education-marketing-services-india",
    },
  ],
};

/* =========================================================
   SERVICE SCHEMA
========================================================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://www.kidiwebtech.com/education-marketing-services-india#service",

  name: "Education Marketing Services in India",

  serviceType: [
    "Education Marketing",
    "Education SEO",
    "Education Digital Marketing",
    "Google Ads for Education",
    "Social Media Marketing",
    "Student Lead Generation",
    "Education Content Marketing",
    "Local SEO",
  ],

  description:
    "Digital marketing services for schools, colleges, universities, coaching institutes and edtech businesses in India.",

  provider: {
    "@type": "ProfessionalService",

    name: "KidiWebTech",

    url: "https://www.kidiwebtech.com/",

    telephone: "+91-9390627367",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  url: "https://www.kidiwebtech.com/education-marketing-services-india",
};

/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "What education marketing services does KidiWebTech provide?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "KidiWebTech provides education SEO, Google Ads, social media marketing, content marketing, student lead generation, local SEO and digital marketing services for schools, colleges, universities, coaching institutes and edtech businesses.",
      },
    },

    {
      "@type": "Question",

      name: "How does SEO help educational institutions?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "SEO can help educational institutions improve their visibility for relevant searches related to courses, admissions, programs, locations and educational information. A strong SEO strategy includes technical optimization, useful content, internal linking and relevant local search signals.",
      },
    },

    {
      "@type": "Question",

      name: "Can you generate student admission leads using Google Ads?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Google Ads can be used to reach people searching for relevant courses, institutions and educational programs. Campaigns can be structured around search intent, locations, courses and measurable lead actions.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide social media marketing for schools and colleges?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Social media marketing can include content planning, short-form video, educational content, student-focused campaigns, paid advertising and audience engagement for schools, colleges and other education organizations.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide marketing services for edtech companies?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. KidiWebTech can provide SEO, paid advertising, content marketing, social media marketing and lead-generation strategies for edtech companies and online education businesses.",
      },
    },

    {
      "@type": "Question",

      name: "How long does education SEO take to produce results?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "SEO is a long-term marketing process. Results depend on competition, website authority, technical condition, content quality, target keywords, location and the overall search landscape. Rankings should be evaluated over time rather than based on a guaranteed timeframe.",
      },
    },
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function EducationMarketingPage() {
  return (
    <main className="bg-white text-black">
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-6 pt-6 text-sm text-black"
      >
        <Link href="/" className="hover:text-teal-400">
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>Education Marketing Services India</span>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Education Digital Marketing Agency
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Education Marketing Services in India
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-black md:text-xl">
            KidiWebTech provides digital marketing services for schools,
            colleges, universities, coaching institutes and edtech companies
            across India. We combine SEO, Google Ads, social media marketing,
            content marketing and student lead generation to help education
            brands build visibility and connect with prospective students and
            parents.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/case-studies"
              className="rounded-full border border-gray-700 px-8 py-3 font-semibold transition hover:border-teal-400"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="border-y border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Digital Marketing for the Education Industry
          </h2>

          <p className="leading-8 text-black">
            Students and parents increasingly use search engines, social media,
            websites and online reviews when researching educational
            institutions and courses. This makes a strong digital presence an
            important part of an education marketing strategy.
          </p>

          <p className="mt-5 leading-8 text-black">
            KidiWebTech helps education organizations develop digital marketing
            strategies around their target students, courses, locations and
            admission objectives. Our services can support awareness, website
            traffic, enquiries and lead-generation activities.
          </p>
        </div>
      </section>

      {/* =====================================================
          EDUCATION INDUSTRIES
      ===================================================== */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-center text-3xl font-bold md:text-4xl">
            Education Businesses We Support
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-black">
            Digital marketing strategies can be adapted to different education
            models, audiences and admission cycles.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Schools",
                text: "Build awareness among parents and improve visibility for school programs, facilities, admissions and educational offerings.",
              },

              {
                title: "Colleges",
                text: "Promote courses, programs, campus information and admission opportunities to prospective students.",
              },

              {
                title: "Universities",
                text: "Support visibility for degree programs, postgraduate courses, research programs and admissions.",
              },

              {
                title: "Coaching Institutes",
                text: "Reach students searching for entrance exam preparation, competitive exams and professional training.",
              },

              {
                title: "EdTech Companies",
                text: "Build awareness and generate relevant traffic for online courses, learning platforms and education products.",
              },

              {
                title: "Training Institutes",
                text: "Promote professional courses, skill development programs and career-focused training services.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-800 p-7"
              >
                <h3 className="text-xl text-black">{item.title}</h3>

                <p className="mt-3 leading-7 text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            SEO Services for Educational Institutions
          </h2>

          <p className="leading-8 text-black">
            Education SEO helps institutions build organic visibility for
            searches related to courses, institutions, admissions, locations and
            educational topics. A strong SEO strategy should focus on useful
            information for students and parents while maintaining a technically
            accessible website.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Education Keyword Research
          </h3>

          <p className="mt-4 leading-8 text-black">
            Keyword research can identify the searches used by prospective
            students and parents. Depending on the institution, this can include
            course names, degree programs, admissions, locations, fees,
            eligibility and other questions.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Local SEO for Schools and Colleges
          </h3>

          <p className="mt-4 leading-8 text-black">
            Educational institutions that depend on local admissions can benefit
            from location-focused SEO. Website content, local information and
            relevant business listings should provide accurate information about
            the institution and its location.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Technical SEO",
              "Education keyword research",
              "Course page optimization",
              "Local SEO",
              "On-page SEO",
              "Content strategy",
              "Internal linking",
              "Search Console analysis",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-gray-800 p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOGLE ADS
      ===================================================== */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Google Ads for Education and Student Lead Generation
          </h2>

          <p className="leading-8 text-black">
            Google Ads can help educational institutions reach prospective
            students when they are actively searching for courses, colleges,
            schools, coaching programs and other education services.
          </p>

          <p className="mt-5 leading-8 text-black">
            Campaigns can be structured around relevant search intent, course
            categories, locations, admission periods and measurable lead
            actions. Landing pages and conversion tracking should be aligned
            with the advertising campaign.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Search Campaigns",
              "Display Campaigns",
              "YouTube Campaigns",
              "Remarketing",
              "Lead Generation",
              "Conversion Tracking",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-800 p-6">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL MEDIA
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Social Media Marketing for Education
          </h2>

          <p className="leading-8 text-black">
            Social media can help educational institutions communicate their
            campus experience, programs, student activities, achievements,
            events and educational content.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Instagram",
                text: "Reels, student-focused content, campus stories and admission campaigns.",
              },

              {
                title: "YouTube",
                text: "Campus videos, course explainers, interviews, educational videos and event coverage.",
              },

              {
                title: "Facebook",
                text: "Community communication, awareness campaigns and targeted advertising.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-800 p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT MARKETING
      ===================================================== */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Education Content Marketing
          </h2>

          <p className="leading-8 text-black">
            Educational content can answer questions students and parents have
            before they contact an institution. Useful content can also support
            organic search visibility when it matches genuine search intent.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Course guides",
              "Admission guides",
              "Eligibility information",
              "Career guides",
              "Course comparisons",
              "Student FAQs",
              "Exam preparation content",
              "Campus and program information",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-blue-300 p-5 ">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEAD GENERATION
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Student Lead Generation and Admission Marketing
          </h2>

          <p className="leading-8 text-black">
            Generating enquiries is only one part of an education marketing
            strategy. Institutions also need clear landing pages, simple enquiry
            forms, useful course information and a process for following up with
            prospective students.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "Course-specific landing pages",
              "Admission enquiry forms",
              "Call and WhatsApp enquiry options",
              "Lead source tracking",
              "Conversion tracking",
              "Remarketing campaigns",
              "Email communication",
              "WhatsApp follow-up strategies",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-gray-800 p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY KIDIWEBTECH
      ===================================================== */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-center text-3xl font-bold md:text-4xl">
            Why Choose KidiWebTech for Education Marketing?
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-black">
            We combine organic search, paid advertising, content, social media
            and conversion-focused website strategies to create a connected
            digital marketing approach.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Education-Focused Strategy",
                text: "Marketing activities can be aligned with courses, students, parents, locations and admission objectives.",
              },

              {
                title: "SEO and Paid Marketing",
                text: "Combine long-term organic visibility with paid campaigns when appropriate.",
              },

              {
                title: "Lead Generation",
                text: "Build campaigns and landing experiences around measurable student enquiry actions.",
              },

              {
                title: "Content Strategy",
                text: "Create useful content around courses, admissions, student questions and educational topics.",
              },

              {
                title: "Conversion Tracking",
                text: "Measure meaningful actions such as forms, calls and other configured conversion events.",
              },

              {
                title: "Multi-Channel Marketing",
                text: "Connect search, social media, paid advertising and content into a broader strategy.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-800 p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "What education marketing services does KidiWebTech provide?",

                a: "KidiWebTech provides education SEO, Google Ads, social media marketing, content marketing, student lead generation, local SEO and digital marketing services for schools, colleges, universities, coaching institutes and edtech businesses.",
              },

              {
                q: "How does SEO help educational institutions?",

                a: "SEO can improve organic visibility for relevant searches related to courses, institutions, admissions, locations and educational information when supported by useful content and a technically sound website.",
              },

              {
                q: "Can you generate student admission leads using Google Ads?",

                a: "Yes. Google Ads can reach prospective students searching for relevant courses and institutions. Campaigns can be structured around search intent, locations, programs and measurable lead actions.",
              },

              {
                q: "Do you provide social media marketing for schools and colleges?",

                a: "Yes. Social media services can include content planning, short-form video, educational content, paid campaigns and audience engagement.",
              },

              {
                q: "Do you work with edtech companies?",

                a: "Yes. KidiWebTech can provide SEO, paid advertising, content marketing, social media and lead-generation strategies for edtech businesses.",
              },

              {
                q: "How long does education SEO take?",

                a: "SEO is a long-term process. Results depend on competition, website authority, technical condition, content quality and the search terms being targeted. Rankings should not be based on a guaranteed timeframe.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-800 pb-7">
                <h3 className="text-xl font-semibold">{faq.q}</h3>

                <p className="mt-3 leading-7 text-black">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL LINKS
      ===================================================== */}

      <section className="border-t border-gray-800 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold">
            Related Digital Marketing Services
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/seo-services-hyderabad"
              className="rounded-lg border border-gray-700 px-5 py-3 hover:border-teal-400"
            >
              SEO Services Hyderabad
            </Link>

            <Link
              href="/digital-marketing-company-hyderabad"
              className="rounded-lg border border-gray-700 px-5 py-3 hover:border-teal-400"
            >
              Digital Marketing Hyderabad
            </Link>

            <Link
              href="/google-ads-services"
              className="rounded-lg border border-gray-700 px-5 py-3 hover:border-teal-400"
            >
              Google Ads Services
            </Link>

            <Link
              href="/social-media-marketing"
              className="rounded-lg border border-gray-700 px-5 py-3 hover:border-teal-400"
            >
              Social Media Marketing
            </Link>

            <Link
              href="/content-marketing"
              className="rounded-lg border border-gray-700 px-5 py-3 hover:border-teal-400"
            >
              Content Marketing
            </Link>

            <Link
              href="/web-development"
              className="rounded-lg border border-gray-700 px-5 py-3 hover:border-teal-400"
            >
              Web Development
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-blue-300 px-6 py-20 text-center text-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Grow Your Education Brand?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8">
            Talk to KidiWebTech about SEO, student lead generation, Google Ads,
            social media marketing and digital growth for your education
            business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-900"
          >
            Get Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
