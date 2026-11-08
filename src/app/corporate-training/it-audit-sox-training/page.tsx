
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "IT Audit SOX Training Online | 45 Days Professional Course",
  description:
    "Join IT Audit and SOX training online for working professionals. Explore our 45-day professional training program. Course fee ₹60,000. Call 9666545670.",
  keywords: [
    "IT Audit SOX Training",
    "IT Audit Training Online",
    "SOX Compliance Training",
    "SOX Training for Working Professionals",
    "IT Audit Course",
    "Online SOX Training",
    "Corporate Training Programs",
  ],
  alternates: {
    canonical:
      "https://kidiwebtech.com/corporate-training/it-audit-sox-training",
  },
  openGraph: {
    title: "IT Audit / SOX Training Online | KIDIWEBTECH",
    description:
      "45-day online IT Audit and SOX training program for working professionals.",
    url: "https://kidiwebtech.com/corporate-training/it-audit-sox-training",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
        width: 1200,
        height: 630,
        alt: "IT Audit and SOX professional training",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is IT Audit and SOX training?",
    answer:
      "IT Audit and SOX training introduces professionals to IT auditing and Sarbanes-Oxley compliance concepts.",
  },
  {
    question: "What is the duration of IT Audit SOX training?",
    answer: "The program duration is 45 days.",
  },
  {
    question: "Is this an online training program?",
    answer: "Yes, this training program is conducted online.",
  },
  {
    question: "Who can join this training?",
    answer:
      "This training program is intended exclusively for working professionals.",
  },
  {
    question: "What is the IT Audit SOX training fee?",
    answer: "The listed training fee is ₹60,000.",
  },
  {
    question: "How can I enquire about the training?",
    answer:
      "Call or WhatsApp KIDIWEBTECH at 9666545670 for training details and enrolment information.",
  },
];

export default function ITAuditSOXPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "IT Audit / SOX Training",
        description:
          "45-day online IT Audit and SOX training program for working professionals.",
        url: "https://kidiwebtech.com/corporate-training/it-audit-sox-training",
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
            name: "IT Audit SOX Training",
            item: "https://kidiwebtech.com/corporate-training/it-audit-sox-training",
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white pt-24">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800"
            alt="IT audit professional reviewing compliance reports"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 py-24 md:py-32">
          <div className="max-w-3xl">

            <p className="text-cyan-400 font-bold tracking-widest text-sm">
              PROFESSIONAL CORPORATE TRAINING
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-6">
              IT Audit / SOX Training Online for Working Professionals
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Develop your understanding of IT auditing and
              SOX compliance through a structured 45-day
              online professional training program.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="https://wa.me/919666545670?text=Hi%2C%20I%20am%20interested%20in%20IT%20Audit%20SOX%20Training."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition"
              >
                Enquire Now →
              </a>

              <a
                href="tel:+919666545670"
                className="border border-white/40 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10"
              >
                Call 9666545670
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-white">
              <span>✓ 45 Days</span>
              <span>✓ Online Training</span>
              <span>✓ Working Professionals Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 font-bold tracking-widest text-sm">
            IT AUDIT & SOX COMPLIANCE
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
            Professional IT Audit and SOX Compliance Training
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            IT auditing and SOX compliance are important areas
            within corporate governance, financial reporting
            controls and information technology risk management.
            Professionals working in IT, audit and compliance
            environments may benefit from understanding these
            concepts and their role in business operations.
          </p>

          <p className="text-gray-600 leading-8 mt-5">
            KIDIWEBTECH offers an online IT Audit / SOX training
            program designed exclusively for working professionals.
            The program runs for 45 days and provides an opportunity
            to develop professional knowledge in IT audit and
            SOX compliance-related subjects.
          </p>
        </div>
      </section>

      {/* COURSE DETAILS */}
      <section className="bg-slate-950 py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            IT Audit SOX Training Course Details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              ["Duration", "45 Days"],
              ["Mode", "Online"],
              ["Eligibility", "Working Professionals Only"],
              ["Course Fee", "₹60,000"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-white/10 border border-white/10 rounded-2xl p-6"
              >
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-white font-bold text-lg mt-3">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING OVERVIEW */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
              alt="Corporate professionals collaborating during IT audit training"
              className="w-full h-[420px] object-cover rounded-3xl"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-blue-600 font-bold text-sm tracking-widest">
              PROFESSIONAL LEARNING
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              Understanding IT Audit and SOX Compliance
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              IT Audit and SOX compliance knowledge can support
              professionals involved in technology controls,
              audit processes and corporate compliance activities.
            </p>

            <ul className="mt-7 space-y-4 text-gray-700">
              {[
                "Introduction to IT auditing",
                "Understanding SOX compliance concepts",
                "IT controls and audit-related terminology",
                "Corporate compliance awareness",
                "Professional learning for working employees",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 mt-5">
              Detailed syllabus and practical coverage should be
              confirmed with the training team.
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-blue-50 py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Who Can Join IT Audit / SOX Training?
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            This program is specifically intended for working
            professionals who want to develop their knowledge
            of IT Audit and SOX compliance.
          </p>

          <p className="font-bold text-blue-700 mt-5">
            Eligibility: Working Professionals Only
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-gray-200 pb-5"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-7 mt-3">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-slate-50 py-12 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore Other Corporate Training Programs
          </h2>

          <Link
            href="/corporate-training"
            className="block mt-5 text-blue-600 font-semibold hover:underline"
          >
            Corporate Training Programs →
          </Link>

          <Link
            href="/corporate-training/devops-with-azure"
            className="block mt-4 text-blue-600 font-semibold hover:underline"
          >
            DevOps with Azure Training →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 to-cyan-500 rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Enquire About IT Audit / SOX Training
          </h2>

          <p className="mt-5 text-blue-50">
            Contact our training team for syllabus, course
            details and enrolment information.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://wa.me/919666545670?text=Hi%2C%20please%20share%20IT%20Audit%20SOX%20training%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp 9666545670
            </a>

            <a
              href="tel:+919666545670"
              className="border border-white px-8 py-4 rounded-xl font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
