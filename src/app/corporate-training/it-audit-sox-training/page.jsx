import Link from "next/link";

const pageUrl =
  "https://kidiwebtech.com/corporate-training/it-audit-sox-training";
const phone = "9390627367";
const whatsappUrl =
  "https://wa.me/919390627367?text=Hi%2C%20I%20am%20interested%20in%20IT%20Audit%20%26%20SOX%20Training.";

export const metadata = {
  title: "IT Audit & SOX Training Online | 45-Day Course | KIDIWEBTECH",
  description:
    "Join KIDIWEBTECH's 45-day online IT Audit and SOX training for working professionals. Learn ITGC, SOX compliance, audit walkthroughs and practical concepts. Fee ₹60,000.",
  keywords: [
    "IT Audit SOX Training",
    "IT Audit Training Online",
    "SOX Compliance Training",
    "SOX Training for Working Professionals",
    "ITGC Training",
    "IT Risk Management Training",
    "Online IT Audit Course",
    "IT Audit Course Online",
    "ITGC Analyst Training",
    "SOX 404 Training",
    "IT Controls Training",
    "Internal Controls Training",
    "IT Audit Training with Placement Assistance",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    title: "IT Audit & SOX Training Online | KIDIWEBTECH",
    description:
      "45-day online IT Audit and SOX training for working professionals, with industry-oriented concepts and placement assistance.",
    url: pageUrl,
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
        width: 1200,
        height: 630,
        alt: "Professionals reviewing audit and compliance documents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Audit & SOX Training Online | KIDIWEBTECH",
    description:
      "Learn IT Audit, SOX compliance and ITGC concepts through a 45-day online training program.",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
    ],
  },
};

const learningModules = [
  {
    number: "01",
    title: "IT Audit Fundamentals",
    topics: [
      "Introduction to IT Audit and its importance",
      "IT Audit lifecycle and methodology",
      "Audit planning and risk assessment",
      "IT General Controls (ITGC)",
      "IT Application Controls (ITAC)",
      "Audit evidence and documentation",
      "Risk identification and control evaluation",
    ],
  },
  {
    number: "02",
    title: "SOX Compliance",
    topics: [
      "Introduction to SOX compliance",
      "SOX 302 and SOX 404 overview",
      "Internal Controls over Financial Reporting (ICFR)",
      "Business processes and financial risks",
      "Risk and Control Matrix (RCM)",
      "Control design and operating effectiveness",
      "Control deficiencies, remediation and follow-up",
    ],
  },
  {
    number: "03",
    title: "IT General Controls (ITGC)",
    topics: [
      "User Access Management",
      "Joiner, Mover and Leaver (JML) process",
      "Privileged Access Management",
      "Password and authentication controls",
      "Change Management",
      "IT Operations, Backup and Recovery",
      "Incident Management and system access reviews",
    ],
  },
  {
    number: "04",
    title: "Practical Audit Activities",
    topics: [
      "Audit walkthroughs and process narratives",
      "Preparing Risk and Control Matrices",
      "Evidence collection and validation",
      "Sample selection and testing",
      "Design Effectiveness (DE) testing",
      "Operating Effectiveness (OE) testing",
      "Audit workpapers, observations and reporting",
      "Control deficiency evaluation",
    ],
  },
];

const industryTopics = [
  "How IT Audit teams work in corporate environments",
  "How SOX audits are conducted",
  "How auditors interact with control owners",
  "How audit evidence is requested and validated",
  "How ITGC controls are tested",
  "How audit findings are documented",
  "How audit observations are discussed with stakeholders",
  "How remediation activities are monitored",
  "Common challenges faced by IT Audit and SOX professionals",
];

const audience = [
  "IT professionals seeking career growth",
  "Finance and accounting professionals",
  "B.Com, M.Com, MBA and other graduates who are working",
  "Professionals interested in SOX Compliance",
  "Internal Audit and External Audit professionals",
  "Candidates interested in ITGC, GRC, IT Risk and Compliance roles",
  "Working professionals planning a career transition",
];

const placementSupport = [
  "Job opportunity updates",
  "Resume preparation guidance",
  "Profile evaluation and career guidance",
  "Relevant job application support",
  "Job referrals and profile sharing where available",
  "Guidance on recruitment processes",
  "Career support after course completion",
];

const interviewSupport = [
  "IT Audit technical interview preparation",
  "SOX and ITGC interview questions",
  "Real-time scenario-based questions",
  "Practical audit situation discussions",
  "Resume-based interview preparation",
  "Mock technical interviews",
  "HR interview preparation",
  "Personal feedback and improvement guidance",
];

const careerRoles = [
  "IT Audit Associate",
  "ITGC Analyst",
  "SOX Analyst",
  "IT Risk Analyst",
  "IT Auditor",
  "Internal Audit Associate",
  "IT Compliance Analyst",
  "Risk and Controls Analyst",
  "SOX Compliance Associate",
];

const faqs = [
  {
    question: "What is the duration of IT Audit & SOX training?",
    answer: "The online training program runs for 45 days.",
  },
  {
    question: "Is this an online training program?",
    answer: "Yes. The training is conducted online.",
  },
  {
    question: "Who is eligible to join?",
    answer: "This program is intended for working professionals only.",
  },
  {
    question: "What is the course fee?",
    answer: "The listed course fee is ₹60,000.",
  },
  {
    question: "Does the course include placement assistance?",
    answer:
      "Placement assistance is provided to eligible enrolled candidates. It is assistance with exploring opportunities and the recruitment process, not a guarantee of employment, selection, salary or joining date.",
  },
  {
    question: "Is interview assistance included in the course fee?",
    answer:
      "Interview assistance is an optional paid service and is charged separately unless it is specifically included in a selected package.",
  },
  {
    question: "Can beginners join this training?",
    answer:
      "The program is intended for working professionals. Prior IT Audit experience is not required to begin learning the fundamentals.",
  },
  {
    question: "How can I book a demo class?",
    answer:
      "Contact KIDIWEBTECH by phone or WhatsApp at 9390627367 to enquire about demo-class availability and enrolment.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
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

function ContactButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href={`${whatsappUrl}%20Please%20share%20enrolment%20and%20demo%20class%20details.`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
      >
        Enroll / Book a Free Demo
      </a>
      <a
        href={`tel:+91${phone}`}
        className="rounded-xl border border-white/70 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
      >
        Call {phone}
      </a>
    </div>
  );
}

export default function ITAuditSOXPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "IT Audit & SOX Training",
        description:
          "A 45-day online IT Audit and SOX training program for working professionals, covering IT Audit fundamentals, SOX compliance, ITGC, ITAC, audit walkthroughs, risk assessment and practical audit activities.",
        url: pageUrl,
        educationalLevel: "Professional",
        teaches: [
          "IT Audit fundamentals",
          "SOX compliance and SOX 302 and 404 overview",
          "IT General Controls (ITGC)",
          "IT Application Controls (ITAC)",
          "Risk and Control Matrix (RCM)",
          "Audit walkthroughs and evidence testing",
          "Design Effectiveness and Operating Effectiveness testing",
        ],
        provider: {
          "@type": "Organization",
          name: "KIDIWEBTECH",
          url: "https://kidiwebtech.com",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          duration: "P45D",
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
            name: "IT Audit & SOX Training",
            item: pageUrl,
          },
        ],
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
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800"
            alt="Professionals reviewing business and audit documents"
            className="h-full w-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/75" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Professional Corporate Training
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              IT Audit &amp; SOX Training – Online
            </h1>
            <p className="mt-6 text-xl font-semibold text-blue-100 md:text-2xl">
              Learn from Real-Time Working Professionals. Build Skills. Get
              Career-Ready.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Industry-oriented online training, practical concepts and
              career-focused learning for working professionals interested in IT
              Audit, SOX Compliance, ITGC, IT Risk Management and Internal
              Controls.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                45 Days
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                Online Training
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                Working Professionals Only
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                Fee: ₹60,000
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`${whatsappUrl}%20I%20want%20to%20enroll%20in%20IT%20Audit%20and%20SOX%20training.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Enroll Now
              </a>
              <a
                href={`${whatsappUrl}%20I%20would%20like%20to%20book%20a%20free%20demo%20class.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Book a Free Demo Class
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-md md:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
              Program Overview
            </p>
            <p className="mt-4 text-4xl font-extrabold">45 Days</p>
            <p className="mt-1 text-slate-300">Online professional training</p>
            <div className="my-6 h-px bg-white/20" />
            <div className="flex items-end justify-between gap-3">
              <span className="text-slate-300">Course fee</span>
              <span className="text-3xl font-extrabold">₹60,000</span>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Intended exclusively for working professionals. Contact the
              training team to confirm the next batch and demo-class schedule.
            </p>
            <a
              href={`tel:+91${phone}`}
              className="mt-7 block rounded-xl bg-white px-5 py-3.5 text-center font-bold text-slate-900 transition hover:bg-blue-50"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="IT Audit & SOX Compliance"
            title="Build Practical Understanding of IT Audit and SOX"
            description="Want to build a career in IT Audit, SOX Compliance, ITGC, IT Risk Management or Internal Controls? This online program is designed to connect core concepts with industry-oriented learning."
          />
          <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              The IT Audit &amp; SOX Online Training Program is designed to
              bridge the gap between theoretical knowledge and real-world
              industry requirements. Learn from real-time working professionals
              who bring practical industry knowledge, audit concepts, workplace
              scenarios and explanations into the learning sessions.
            </p>
            <p>
              Go beyond definitions and develop an understanding of how IT Audit
              and SOX activities are performed in corporate environments.
              Training examples and demonstrations are based on industry
              practices. Access to confidential client systems, records or
              proprietary audit documentation is not promised.
            </p>
          </div>
        </div>
      </section>

      {/* TRAINING IMAGE GALLERY */}
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000",
                alt: "Working professionals collaborating during corporate training",
                title: "Learn with Industry Context",
              },
              {
                src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000",
                alt: "Audit professional reviewing business reports and documents",
                title: "Understand Audit Processes",
              },
              {
                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000",
                alt: "Team discussing project workflows and practical business scenarios",
                title: "Discuss Practical Scenarios",
              },
            ].map((image) => (
              <figure
                key={image.title}
                className="group relative min-h-[260px] overflow-hidden rounded-3xl bg-slate-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 pt-16 text-lg font-bold text-white">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Our Program"
            title="Industry-Oriented Learning for Working Professionals"
            description="Understand concepts, processes and workplace expectations through structured online learning."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Learn from Working Professionals",
                text: "Gain practical insights from trainers with current industry experience and an understanding of corporate audit practices.",
              },
              {
                title: "Real-Time Industry Concepts",
                text: "Explore ITGC testing, SOX compliance, audit walkthroughs, evidence collection, control testing and audit documentation.",
              },
              {
                title: "Scenario-Based Learning",
                text: "Discuss industry-related examples, practical situations, audit scenarios and case studies.",
              },
              {
                title: "Placement Assistance",
                text: "Eligible enrolled candidates receive assistance to explore relevant job opportunities and navigate recruitment processes.",
              },
              {
                title: "Optional Interview Assistance",
                text: "Additional technical interview preparation, mock interviews and scenario-based practice are available as a separately charged service.",
              },
              {
                title: "Flexible Online Training",
                text: "Attend online sessions from your location. Contact the team for batch timings and session details.",
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
            eyebrow="Program Information"
            title="IT Audit & SOX Training Course Details"
            description="Review the key details before contacting the training team."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Duration", "45 Days"],
              ["Training Mode", "Online"],
              ["Eligibility", "Working Professionals Only"],
              ["Course Fee", "₹60,000"],
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
            title="IT Audit & SOX Training Syllabus"
            description="Explore the core subject areas and practical activities included in the learning outline."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {learningModules.map((module) => (
              <article
                key={module.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
                    {module.number}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {module.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <CheckList items={module.topics} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY EXPOSURE */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
              alt="Corporate team collaborating on audit and compliance work"
              className="h-[340px] w-full object-cover md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Real-Time Working Concepts
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Understand How Audit Work Happens in Corporate Environments
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Learn practical concepts explained by working professionals.
              Training discussions focus on common processes, responsibilities
              and challenges faced by IT Audit and SOX teams.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm md:p-9">
            <CheckList items={industryTopics} />
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Can Join IT Audit & SOX Training?"
            description="This program is intended for working professionals interested in developing knowledge of IT Audit, compliance and technology risk."
          />
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Eligibility
              </p>
              <h3 className="mt-4 text-3xl font-extrabold">
                Working Professionals Only
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Prior IT Audit experience is not required to start with the
                fundamentals. The program is designed for people who are
                currently working.
              </p>
            </div>
            <CheckList items={audience} />
          </div>
        </div>
      </section>

      {/* PLACEMENT ASSISTANCE */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Career Support"
            title="100% Placement Assistance"
            description="We support your journey from training to exploring career opportunities in the IT Audit and SOX domain."
          />
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="leading-8 text-slate-600">
                Our commitment goes beyond classroom training. We provide
                placement assistance to help eligible candidates prepare for and
                explore relevant employment opportunities. Our objective is to
                help you become job-ready and improve your opportunities in the
                IT Audit and SOX domain.
              </p>
              <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                100% placement assistance refers to assistance provided to all
                eligible enrolled candidates. It is not a guarantee of
                employment, job selection, salary or a specific joining date.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <CheckList items={placementSupport} />
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL INTERVIEW ASSISTANCE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 to-slate-900 p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
              Optional Paid Service
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Interview Assistance – Optional
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Be prepared and confident with additional interview preparation
              support. This specialised service is available at an extra cost.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <CheckList items={interviewSupport} />
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <h3 className="text-xl font-bold">Please Note</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Interview assistance is charged separately and is not included
                  in the standard training fee unless specified in your selected
                  package. Contact the team to confirm the service fee and
                  availability.
                </p>
                <a
                  href={`${whatsappUrl}%20Please%20share%20optional%20interview%20assistance%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Ask About Interview Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Career Opportunities"
            title="Roles You Can Explore After Training"
            description="The program can help you build foundational knowledge relevant to roles in IT Audit, ITGC, SOX, IT Risk and compliance."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careerRoles.map((role) => (
              <div
                key={role}
                className="rounded-xl border border-blue-100 bg-white p-5 font-semibold text-slate-800 shadow-sm"
              >
                <span className="mr-3 text-blue-600">→</span>
                {role}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm leading-7 text-slate-500">
            Career opportunities depend on individual qualifications,
            experience, interview performance and employer requirements.
          </p>
        </div>
      </section>

      {/* TRAINING APPROACH */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Training Approach"
            title="Learn → Understand → Practise → Prepare → Apply"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Learn", "Understand IT Audit and SOX fundamentals."],
              [
                "02",
                "Understand",
                "Explore industry concepts with working professionals.",
              ],
              [
                "03",
                "Practise",
                "Discuss practical examples, audit scenarios and case studies.",
              ],
              [
                "04",
                "Prepare",
                "Build technical knowledge and interview readiness.",
              ],
              [
                "05",
                "Apply",
                "Receive placement assistance and explore suitable opportunities.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <p className="text-sm font-extrabold text-blue-600">{number}</p>
                <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.question}
                  <span className="text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Explore Other Corporate Training Programs
          </h2>
          <div className="mt-5 flex flex-wrap gap-5">
            <Link
              href="/corporate-training"
              className="font-semibold text-blue-700 hover:underline"
            >
              Corporate Training Programs →
            </Link>
            <Link
              href="/corporate-training/devops-with-azure"
              className="font-semibold text-blue-700 hover:underline"
            >
              DevOps with Azure Training →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-800 to-cyan-600 px-6 py-14 text-center text-white md:px-12 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
            Start Your IT Audit Career Journey
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
            Build Industry-Relevant Knowledge in IT Audit &amp; SOX
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-50">
            Learn from real-time working professionals and prepare for
            opportunities in IT Audit, SOX Compliance and IT Risk Management.
            Contact KIDIWEBTECH for enrolment and demo-class details.
          </p>
          <div className="mt-9">
            <ContactButtons />
          </div>
          <p className="mt-7 text-sm text-blue-100">
            Online training · 45 days · Working professionals only · ₹60,000
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Contact KIDIWEBTECH
          </h2>
          <p className="mt-3 text-slate-600">
            Call or WhatsApp us for course details, enrolment and demo-class
            availability.
          </p>
          <p className="mt-4 text-xl font-extrabold text-blue-700">{phone}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white transition hover:bg-green-700"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
