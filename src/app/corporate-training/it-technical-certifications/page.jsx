import Link from "next/link";

const pageUrl =
  "https://kidiwebtech.com/corporate-training/it-technical-certifications";
const phone = "9666545670";
const whatsappBase =
  "https://wa.me/919666545670?text=Hi%2C%20I%20am%20interested%20in%20IT%20Technical%20Certifications.";

export const metadata = {
  title: "IT Technical Certifications | Guidance & Training | KIDIWEBTECH",
  description:
    "Explore IT technical certifications across cloud, DevOps, cybersecurity, networking, project management, data, software development and IT audit. Get certification guidance, training support and exam preparation assistance.",
  keywords: [
    "IT Technical Certifications",
    "Cloud Certifications",
    "DevOps Certifications",
    "Cybersecurity Certifications",
    "Networking Certifications",
    "IT Service Management Certifications",
    "Project Management Certifications",
    "Data and Database Certifications",
    "Software Development Certifications",
    "IT Audit Certifications",
    "Certification Guidance",
    "Exam Preparation Assistance",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "IT Technical Certifications | KIDIWEBTECH",
    description:
      "One destination for your IT certification goals. Guidance and training support for all major IT technical certifications.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
        width: 1200,
        height: 630,
        alt: "IT professionals working with certification study materials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Technical Certifications | KIDIWEBTECH",
    description:
      "Explore certification paths across cloud, DevOps, cybersecurity, networking, data, and more.",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    ],
  },
};

const certificationDomains = [
  {
    number: "01",
    title: "Cloud Computing Certifications",
    items: [
      "Microsoft Azure Certifications",
      "AWS Certifications",
      "Google Cloud Certifications",
      "Cloud Architecture and Administration",
      "Cloud Security Certifications",
      "Cloud Fundamentals and Associate-Level Certifications",
    ],
  },
  {
    number: "02",
    title: "DevOps & Automation Certifications",
    items: [
      "Microsoft Azure DevOps",
      "AWS DevOps",
      "Kubernetes Certifications",
      "Docker and Containerisation",
      "Terraform Certifications",
      "Git and CI/CD Technologies",
      "Infrastructure Automation",
    ],
  },
  {
    number: "03",
    title: "Cybersecurity Certifications",
    items: [
      "CompTIA Security+",
      "Certified Ethical Hacker (CEH)",
      "CISSP",
      "CISM",
      "CISA",
      "CompTIA CySA+",
      "Information Security and Risk Management",
    ],
  },
  {
    number: "04",
    title: "Networking Certifications",
    items: [
      "Cisco CCNA",
      "Cisco CCNP",
      "Cisco CCIE",
      "CompTIA Network+",
      "CompTIA Security+",
      "Network Security and Infrastructure",
    ],
  },
  {
    number: "05",
    title: "IT Service Management Certifications",
    items: [
      "ITIL 4 Foundation",
      "ITIL Managing Professional",
      "IT Service Management",
      "ServiceNow Certifications",
      "Incident, Problem and Change Management",
    ],
  },
  {
    number: "06",
    title: "Project Management Certifications",
    items: [
      "PMP",
      "CAPM",
      "PRINCE2",
      "Agile and Scrum Certifications",
      "Certified ScrumMaster (CSM)",
      "Professional Scrum Master (PSM)",
    ],
  },
  {
    number: "07",
    title: "Data & Database Certifications",
    items: [
      "Microsoft Power BI",
      "Microsoft Fabric",
      "SQL and Database Administration",
      "Oracle Certifications",
      "Microsoft SQL Server",
      "Data Analytics and Business Intelligence",
    ],
  },
  {
    number: "08",
    title: "Software Development Certifications",
    items: [
      "Java Certifications",
      "Python Certifications",
      "Microsoft Developer Certifications",
      "Full Stack Development",
      "Software Testing Certifications",
      "Automation Testing",
      "Selenium and Testing Frameworks",
    ],
  },
  {
    number: "09",
    title: "IT Audit, Risk & Compliance Certifications",
    items: [
      "CISA – Certified Information Systems Auditor",
      "CISM – Certified Information Security Manager",
      "CRISC – Certified in Risk and Information Systems Control",
      "ISO 27001 Lead Auditor",
      "ISO 27001 Lead Implementer",
      "COBIT Certifications",
      "IT Governance and Risk Management",
    ],
  },
];

const whyChoose = [
  {
    title: "Multiple Certification Options",
    text: "Explore certification paths across cloud computing, DevOps, cybersecurity, networking, IT audit, databases and other technical domains.",
  },
  {
    title: "Based on Your Requirements",
    text: "We help you identify suitable certifications based on your experience, technical background, career objectives and budget.",
  },
  {
    title: "Professional Training Support",
    text: "Get structured learning support and guidance to understand certification topics and prepare effectively.",
  },
  {
    title: "Exam Preparation Assistance",
    text: "Receive guidance on exam patterns, syllabus coverage, practice questions and preparation strategies.",
  },
  {
    title: "Flexible Learning Options",
    text: "Explore online training and preparation support according to your schedule and requirements.",
  },
  {
    title: "Career-Oriented Guidance",
    text: "Understand how relevant certifications can strengthen your professional profile and support your career development.",
  },
];

const processSteps = [
  {
    step: "STEP 1",
    title: "Understand Your Requirement",
    text: "Share your preferred technology, certification name, experience level and career objective.",
  },
  {
    step: "STEP 2",
    title: "Certification Guidance",
    text: "We help identify the appropriate certification path and explain the relevant requirements.",
  },
  {
    step: "STEP 3",
    title: "Training & Preparation",
    text: "Get learning resources, technical guidance and exam preparation support.",
  },
  {
    step: "STEP 4",
    title: "Exam Registration Guidance",
    text: "Receive assistance in understanding the official registration process and exam requirements.",
  },
  {
    step: "STEP 5",
    title: "Certification",
    text: "Complete the examination through the authorised certification provider and receive the credential directly from that provider, subject to passing and meeting its requirements.",
  },
];

const audience = [
  "Fresh graduates",
  "Working IT professionals",
  "Software Developers",
  "Cloud and DevOps Engineers",
  "System and Network Administrators",
  "Cybersecurity Professionals",
  "IT Audit and Compliance Professionals",
  "Project Managers",
  "Database Administrators",
  "Professionals planning career advancement or a technology transition",
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
    <ul className="space-y-2">
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
  const href = `${whatsappBase}%20${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700"
    >
      {label}
    </a>
  );
}

export default function ITTechnicalCertificationsPage() {
  return (
    <main className="overflow-hidden bg-white pt-20">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800"
            alt="IT professionals working on certification preparation"
            className="h-full w-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/75" />

        <div className="mx-auto max-w-7xl px-5 py-24 text-center text-white md:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            IT Technical Certifications
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            One Destination for Your IT Certification Goals!
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold text-blue-100 md:text-2xl">
            All Major IT Technical Certifications – Based on Your Requirements
          </p>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
            Take your IT career to the next level with industry-recognised
            technical certifications. We provide certification guidance,
            training support, learning resources and exam preparation assistance
            across multiple IT technologies and professional domains.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Enquire Now"
              message="I am interested in IT Technical Certifications. Please share details."
            />
            <a
              href={`${whatsappBase}%20I%20would%20like%20to%20request%20a%20certification%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Request a Certification Consultation
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            Your Career Goals. Your Certification Path. Our Guidance.
          </p>
        </div>
      </section>

      {/* CERTIFICATION DOMAINS */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Certifications Across Multiple IT Domains"
            title="Explore Certification Paths by Technology"
            description="We provide certification guidance and preparation support across a wide range of technical areas."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificationDomains.map((domain) => (
              <article
                key={domain.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
                    {domain.number}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {domain.title}
                  </h3>
                </div>
                <div className="mt-5">
                  <CheckList items={domain.items} />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">
            Certification names, exam structures and eligibility requirements
            are subject to the respective certification providers and may
            change.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Our Certification Services?"
            title="Guidance That Fits Your Career Goals"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg font-extrabold text-blue-700">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION PROCESS */}
      <section className="bg-slate-950 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Our Certification Process
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              A Simple, Guided Journey
            </h2>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-start md:gap-8 md:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-extrabold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                    {step.step}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-300">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN BENEFIT */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Who Can Benefit?"
            title="Our Certification Guidance and Preparation Services Are For:"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFIC CERTIFICATION CTA */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Looking for a Specific IT Certification?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Can't find the certification you are looking for? No problem! Tell
            us your certification requirement and we will help you explore the
            available training, preparation and examination options.
          </p>
          <p className="mt-3 text-slate-600">
            Whether you are looking for Microsoft, AWS, Cisco, CompTIA, Oracle,
            Google Cloud, ISACA, ISC2, PMI or other recognised certification
            programs, contact our team for assistance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Enquire Now"
              message="I am looking for a specific IT certification. Please assist."
            />
            <a
              href={`tel:+91${phone}`}
              className="rounded-xl border border-slate-300 px-7 py-4 font-bold text-slate-900 transition hover:bg-white"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-800 to-cyan-600 px-6 py-14 text-center text-white md:px-12 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
            Upgrade Your Skills. Validate Your Knowledge. Advance Your Career.
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
            The right technical certification can help demonstrate your
            knowledge and strengthen your professional profile.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-50">
            Get in touch today and let us help you plan your next IT
            certification!
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Enquire Now"
              message="I want to plan my next IT certification. Please get in touch."
            />
            <a
              href={`${whatsappBase}%20I%20would%20like%20to%20request%20a%20callback.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Request a Callback
            </a>
            <a
              href={`tel:+91${phone}`}
              className="rounded-xl bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Contact KIDIWEBTECH
          </h2>
          <p className="mt-3 text-slate-600">
            Call or WhatsApp us for certification guidance, training support and
            exam preparation assistance.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 text-lg font-semibold text-slate-800">
            <p>📞 {phone}</p>
            <p>✉️ info@kidiwebtech.com</p>
            <p>🌐 kidiwebtech.com</p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="WhatsApp Us"
              message="I have a question about IT certifications."
            />
            <a
              href={`tel:+91${phone}`}
              className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
