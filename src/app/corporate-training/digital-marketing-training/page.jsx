import Link from "next/link";

const pageUrl =
  "https://kidiwebtech.com/corporate-training/digital-marketing-training";

const phone = "9390627367";

const whatsapp = (message) =>
  `https://wa.me/919390627367?text=${encodeURIComponent(message)}`;

export const metadata = {
  title:
    "Digital Marketing Training Course | SEO, Google Ads & Social Media | KIDIWEBTECH",
  description:
    "Learn digital marketing with practical training in SEO, Google Ads, social media marketing, content marketing, analytics, Meta Ads and AI marketing tools.",
  keywords: [
    "Digital Marketing Training",
    "Digital Marketing Course",
    "SEO Training",
    "Google Ads Training",
    "Social Media Marketing Course",
    "Meta Ads Training",
    "Content Marketing Training",
    "Online Digital Marketing Training",
    "Digital Marketing Course for Beginners",
    "Digital Marketing Training Hyderabad",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Digital Marketing Training Course | KIDIWEBTECH",
    description:
      "Build practical digital marketing skills through SEO, Google Ads, social media marketing, content strategy and analytics training.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        width: 1200,
        height: 630,
        alt: "Digital marketing analytics and online growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Training | KIDIWEBTECH",
    description:
      "Learn SEO, Google Ads, social media marketing, content marketing and digital growth.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    ],
  },
};

const modules = [
  {
    number: "01",
    title: "Digital Marketing Fundamentals",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000",
    topics: [
      "Introduction to digital marketing",
      "Digital marketing channels",
      "Traditional vs digital marketing",
      "Customer journey and marketing funnel",
      "Understanding target audiences",
      "Digital marketing strategy",
      "Competitor analysis",
    ],
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1000",
    topics: [
      "SEO fundamentals",
      "Keyword research",
      "Search intent analysis",
      "On-page SEO",
      "Off-page SEO",
      "Technical SEO fundamentals",
      "Internal linking",
      "SEO content optimization",
      "Search engine ranking factors",
    ],
  },
  {
    number: "03",
    title: "Local SEO & Google Business Profile",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000",
    topics: [
      "Local SEO fundamentals",
      "Google Business Profile setup",
      "Business profile optimization",
      "Local keyword targeting",
      "Local citations",
      "Reviews and reputation management",
      "Local search visibility",
    ],
  },
  {
    number: "04",
    title: "Google Ads & Paid Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000",
    topics: [
      "Introduction to paid advertising",
      "Google Ads account structure",
      "Search campaign creation",
      "Keyword targeting",
      "Ad copywriting",
      "Campaign budgets and bidding",
      "Conversion tracking fundamentals",
      "Campaign optimization",
    ],
  },
  {
    number: "05",
    title: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1000",
    topics: [
      "Social media marketing fundamentals",
      "Facebook marketing",
      "Instagram marketing",
      "LinkedIn marketing",
      "Social media content planning",
      "Audience engagement",
      "Brand building",
      "Social media campaign strategies",
    ],
  },
  {
    number: "06",
    title: "Meta Ads & Campaign Management",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
    topics: [
      "Introduction to Meta advertising",
      "Meta Business Suite",
      "Campaign objectives",
      "Audience targeting",
      "Creative and ad copy",
      "Lead generation campaigns",
      "Budget optimization",
      "Performance analysis",
    ],
  },
  {
    number: "07",
    title: "Content Marketing & Copywriting",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000",
    topics: [
      "Content marketing fundamentals",
      "Content strategy",
      "Blog writing",
      "Website content writing",
      "Marketing copywriting",
      "Social media captions",
      "Content calendars",
      "Content optimization",
    ],
  },
  {
    number: "08",
    title: "Email Marketing & Lead Generation",
    image: "https://images.unsplash.com/photo-1557200134-310a6f17d4b5?w=1000",
    topics: [
      "Email marketing fundamentals",
      "Email campaign planning",
      "Lead generation strategies",
      "Landing page concepts",
      "Lead nurturing",
      "Email automation basics",
      "Campaign performance",
    ],
  },
  {
    number: "09",
    title: "Analytics, Reporting & AI Tools",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000",
    topics: [
      "Marketing analytics fundamentals",
      "Google Analytics concepts",
      "Website traffic analysis",
      "Campaign performance reporting",
      "Conversion measurement",
      "Marketing dashboards",
      "AI tools for content creation",
      "AI-assisted marketing workflows",
    ],
  },
];

const practicalTopics = [
  "Keyword research for business websites",
  "SEO website audit",
  "On-page SEO optimization",
  "Google Business Profile optimization",
  "Content calendar creation",
  "Social media page management",
  "Google Ads campaign planning",
  "Meta advertising campaign planning",
  "Lead generation strategy",
  "Marketing performance reporting",
];

const audience = [
  "Fresh Graduates",
  "Students",
  "Business Owners",
  "Entrepreneurs",
  "Freelancers",
  "Working Professionals",
  "Content Creators",
  "Job Seekers",
];

const careerRoles = [
  "Digital Marketing Executive",
  "SEO Executive",
  "SEO Analyst",
  "Social Media Manager",
  "Digital Marketing Analyst",
  "Google Ads Specialist",
  "Performance Marketing Executive",
  "Content Marketing Executive",
  "Digital Marketing Freelancer",
  "Marketing Strategist",
];

const faqs = [
  {
    question: "What is digital marketing training?",
    answer:
      "Digital marketing training teaches you how to promote businesses, brands, products and services using online platforms, search engines, social media, advertising and content strategies.",
  },
  {
    question: "What topics are covered in this course?",
    answer:
      "The course outline includes digital marketing fundamentals, SEO, local SEO, Google Business Profile, Google Ads, social media marketing, Meta Ads, content marketing, email marketing, lead generation, analytics and AI marketing tools.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes. Beginners, students, fresh graduates, business owners and working professionals can learn the fundamentals and progress toward practical digital marketing concepts.",
  },
  {
    question: "Will I learn SEO?",
    answer:
      "Yes. SEO topics include keyword research, search intent, on-page optimization, off-page SEO, technical SEO fundamentals, local SEO and content optimization.",
  },
  {
    question: "Will I learn Google Ads and Meta Ads?",
    answer:
      "The course outline covers Google Ads campaign fundamentals, audience targeting, ad creation, budgeting, campaign optimization and Meta advertising concepts.",
  },
  {
    question: "Does the training include practical learning?",
    answer:
      "The training is designed to include practical concepts, guided exercises and campaign-related scenarios to help learners understand how digital marketing is applied.",
  },
  {
    question: "What career opportunities are available after training?",
    answer:
      "Learners can explore opportunities such as Digital Marketing Executive, SEO Executive, Social Media Manager, Content Marketing Executive, Performance Marketing Executive and freelancer roles, depending on their skills and experience.",
  },
  {
    question: "Can business owners join this course?",
    answer:
      "Yes. Business owners and entrepreneurs can learn digital marketing strategies to improve online visibility, generate leads, understand advertising and build their digital presence.",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${
            light ? "text-cyan-300" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-extrabold leading-tight md:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-700">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
            ✓
          </span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function WhatsAppButton({ label = "WhatsApp Us", message = "" }) {
  return (
    <a
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700"
    >
      {label}
    </a>
  );
}

export default function DigitalMarketingTrainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Digital Marketing Training Course",
        description:
          "Digital marketing training covering SEO, Google Ads, social media marketing, Meta Ads, content marketing, email marketing, analytics and AI tools.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "KIDIWEBTECH",
          url: "https://kidiwebtech.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://kidiwebtech.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Corporate Training",
            item: "https://kidiwebtech.com/corporate-training",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Digital Marketing Training",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800"
            alt="Digital marketing analytics and online marketing"
            className="h-full w-full object-cover opacity-30"
            fetchPriority="high"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/80" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Professional Digital Marketing Training
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Digital Marketing Training Course
            </h1>

            <p className="mt-6 text-xl font-semibold text-blue-100 md:text-2xl">
              Learn Digital Marketing. Build Brands. Generate Growth.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Learn how businesses grow online through SEO, digital advertising,
              social media, content marketing, lead generation and analytics.
              Build practical knowledge of modern digital marketing strategies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white">
              {[
                "SEO",
                "Google Ads",
                "Social Media",
                "Content Marketing",
                "Analytics",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <WhatsAppButton
                label="Enroll Now"
                message="Hi, I am interested in Digital Marketing Training at KIDIWEBTECH. Please share course details."
              />

              <a
                href={`tel:+91${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Call {phone}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-md md:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
              Course Overview
            </p>

            <h2 className="mt-4 text-3xl font-extrabold">
              Master Digital Growth
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Understand how brands attract audiences, generate leads, improve
              visibility and measure marketing performance.
            </p>

            <div className="my-6 h-px bg-white/20" />

            <div className="space-y-4">
              {[
                "Search Engine Optimization",
                "Google & Meta Advertising",
                "Social Media Marketing",
                "Content & Email Marketing",
                "Analytics & AI Tools",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-sm text-cyan-300">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={whatsapp(
                "Hi, I would like to know more about Digital Marketing Training.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block rounded-xl bg-white px-5 py-3.5 text-center font-bold text-slate-900 transition hover:bg-blue-50"
            >
              Get Course Details
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Digital Marketing"
            title="Build Skills for the Digital Business World"
            description="Understand how businesses attract customers, build awareness and generate leads using digital platforms."
          />

          <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              Digital marketing has become an important part of modern business.
              Organisations use online platforms, search engines, advertising,
              social media and content strategies to reach customers and promote
              their products and services.
            </p>

            <p>
              Our Digital Marketing Training Program introduces learners to
              essential marketing concepts and tools. Learn how search engine
              optimization, paid advertising, social media marketing, content
              strategies and analytics work together to support business growth.
            </p>

            <p>
              The program is suitable for beginners, students, fresh graduates,
              business owners, freelancers and working professionals who want to
              develop digital marketing knowledge and practical skills.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
              alt: "Digital marketing analytics",
              title: "Marketing Analytics",
            },
            {
              src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900",
              alt: "SEO and digital content strategy",
              title: "SEO Strategy",
            },
            {
              src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900",
              alt: "Social media digital marketing",
              title: "Social Media",
            },
            {
              src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
              alt: "Marketing performance reporting",
              title: "Performance Marketing",
            },
          ].map((image) => (
            <figure
              key={image.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 pb-5 pt-12 font-bold text-white">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Our Training?"
            title="Learn Digital Marketing Through Practical Concepts"
            description="Develop an understanding of the strategies and tools used to market businesses online."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Industry-Oriented Learning",
                text: "Understand digital marketing strategies used by modern businesses and brands.",
              },
              {
                title: "SEO Skills",
                text: "Learn keyword research, content optimization, search visibility and SEO fundamentals.",
              },
              {
                title: "Advertising Knowledge",
                text: "Explore paid campaigns, targeting, ad creatives, budgets and performance.",
              },
              {
                title: "Practical Marketing Concepts",
                text: "Learn marketing workflows through guided exercises and campaign scenarios.",
              },
              {
                title: "Analytics & Reporting",
                text: "Understand traffic, engagement, leads, conversions and marketing performance.",
              },
              {
                title: "Career Development",
                text: "Build knowledge for digital marketing roles, freelance work and business growth.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg font-extrabold text-blue-700">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE DETAILS */}
      <section className="bg-slate-950 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            light
            eyebrow="Program Information"
            title="Digital Marketing Course Overview"
            description="Explore the major digital marketing areas covered in the training program."
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Learning", "Digital Marketing"],
              ["Core Skills", "SEO & Ads"],
              ["Platforms", "Google & Social"],
              ["Approach", "Practical Concepts"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center"
              >
                <p className="text-sm text-slate-300">{label}</p>
                <p className="mt-3 text-lg font-extrabold text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What Will You Learn?"
            title="Digital Marketing Course Syllabus"
            description="Explore the core subjects, tools and strategies covered in the course."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <article
                key={module.number}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={module.image}
                  alt={module.title}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />

                <div className="p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
                      {module.number}
                    </span>

                    <h3 className="text-xl font-extrabold text-slate-900">
                      {module.title}
                    </h3>
                  </div>

                  <div className="mt-6">
                    <CheckList items={module.topics} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL TRAINING */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Practical Learning
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Learn How Digital Marketing Works in Real Businesses
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Understand how digital marketing activities are planned,
              implemented and evaluated. Explore practical scenarios and
              strategies that businesses use to improve their online presence
              and generate leads.
            </p>

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
              alt="Marketing professionals collaborating"
              loading="lazy"
              className="mt-8 h-72 w-full rounded-3xl object-cover"
            />
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm md:p-9">
            <CheckList items={practicalTopics} />

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Practical activities and demonstrations are designed to help
              learners understand marketing workflows and campaign strategies.
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Who Can Join?"
            title="Digital Marketing Training for Everyone"
            description="Whether you are starting your career or growing your business, learn digital marketing skills that can support your goals."
          />

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Learning Requirements
              </p>

              <h3 className="mt-4 text-3xl font-extrabold">
                Start with the Fundamentals
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Basic computer knowledge, internet familiarity and an interest
                in online marketing are helpful. Previous marketing experience
                is not necessary to begin learning the fundamentals.
              </p>
            </div>

            <CheckList items={audience} />
          </div>
        </div>
      </section>

      {/* CAREER ROLES */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Career Opportunities"
            title="Career Paths After Digital Marketing Training"
            description="Explore roles across marketing, SEO, content, social media, advertising and digital growth."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {careerRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-600">
            Career opportunities depend on your skills, practical knowledge,
            experience, location and employer requirements.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about our Digital Marketing Training Program."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>{faq.question}</span>
                  <span className="text-xl font-extrabold text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-700 px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Ready to Build Your Digital Marketing Career?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Start learning SEO, advertising, social media marketing, content
            marketing and digital growth strategies. Contact our training team
            for course details.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Enroll Now"
              message="Hi, I am interested in Digital Marketing Training. Please share the syllabus, timings and course details."
            />

            <a
              href={`tel:+91${phone}`}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-blue-50"
            >
              Call {phone}
            </a>
          </div>

          <p className="mt-6 text-sm text-blue-100">
            <Link href="/corporate-training" className="underline">
              Explore all corporate training programs
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
