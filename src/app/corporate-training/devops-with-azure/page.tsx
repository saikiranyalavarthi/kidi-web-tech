
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "DevOps with Azure Training Online | 2 Months Professional Course",
  description:
    "Learn DevOps with Microsoft Azure through a 2-month online training program. Training led by a real-time working professional from CTS. Fee ₹60,000. Call 9666545670.",
  keywords: [
    "DevOps with Azure Training",
    "Azure DevOps Training Online",
    "Microsoft Azure DevOps Course",
    "DevOps Online Training",
    "Azure Cloud Training",
    "DevOps Training for Working Professionals",
    "Corporate IT Training",
  ],
  alternates: {
    canonical:
      "https://kidiwebtech.com/corporate-training/devops-with-azure",
  },
  openGraph: {
    title: "DevOps with Azure Training Online | KIDIWEBTECH",
    description:
      "Two-month online DevOps with Azure professional training program.",
    url: "https://kidiwebtech.com/corporate-training/devops-with-azure",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200",
        width: 1200,
        height: 630,
        alt: "DevOps and Azure cloud technology training",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is DevOps with Azure training?",
    answer:
      "This is an online professional training program focused on DevOps concepts and Microsoft Azure cloud technologies.",
  },
  {
    question: "What is the duration of DevOps with Azure training?",
    answer: "The training program duration is two months.",
  },
  {
    question: "Who is the trainer?",
    answer:
      "The program is described as being led by a real-time working professional from CTS.",
  },
  {
    question: "Is the DevOps Azure training online?",
    answer: "Yes, the training is conducted online.",
  },
  {
    question: "What is the DevOps with Azure course fee?",
    answer: "The listed training fee is ₹60,000.",
  },
  {
    question: "Who can join the DevOps Azure course?",
    answer:
      "IT and working professionals interested in DevOps and Azure technologies can contact the training team to confirm eligibility.",
  },
  {
    question: "How can I contact KIDIWEBTECH?",
    answer:
      "Call or WhatsApp 9666545670 for course information and enrolment details.",
  },
];

export default function DevOpsAzurePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "DevOps with Microsoft Azure Training",
        description:
          "Two-month online professional training program covering DevOps concepts and Microsoft Azure technologies.",
        url: "https://kidiwebtech.com/corporate-training/devops-with-azure",
        provider: {
          "@type": "Organization",
          name: "KIDIWEBTECH",
          url: "https://kidiwebtech.com",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          duration: "P2M",
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
            name: "DevOps with Azure",
            item: "https://kidiwebtech.com/corporate-training/devops-with-azure",
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
            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1800"
            alt="DevOps engineer working with cloud infrastructure"
            className="w-full h-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 py-24 md:py-32">
          <div className="max-w-3xl">

            <p className="text-cyan-400 font-bold tracking-widest text-sm">
              CLOUD COMPUTING & DEVOPS TRAINING
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-6">
              DevOps with Microsoft Azure Training Online
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Build your knowledge of DevOps and Microsoft Azure
              cloud technologies through a structured two-month
              online professional training program.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="https://wa.me/919666545670?text=Hi%2C%20I%20am%20interested%20in%20DevOps%20with%20Azure%20Training."
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
              <span>✓ 2 Months</span>
              <span>✓ Online Training</span>
              <span>✓ Industry Professional Trainer</span>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">

          <p className="text-blue-600 font-bold tracking-widest text-sm">
            MICROSOFT AZURE & DEVOPS
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
            Professional DevOps with Azure Online Training
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            DevOps combines development and operations practices
            to support efficient software delivery and technology
            operations. Microsoft Azure provides cloud services
            that organizations can use to develop, deploy and
            manage applications.
          </p>

          <p className="text-gray-600 leading-8 mt-5">
            KIDIWEBTECH offers a two-month online DevOps with Azure
            training program for professionals interested in
            cloud computing and DevOps technologies. The program
            features a trainer described as a real-time working
            professional from CTS.
          </p>

        </div>
      </section>

      {/* COURSE DETAILS */}
      <section className="bg-slate-950 py-16 px-5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            DevOps with Azure Course Details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            {[
              ["Duration", "2 Months"],
              ["Mode", "Online"],
              ["Training Fee", "₹60,000"],
              ["Trainer", "CTS Working Professional"],
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

      {/* DEVOPS OVERVIEW */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 font-bold tracking-widest text-sm">
              CLOUD & TECHNOLOGY LEARNING
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              Understand DevOps and Microsoft Azure Technologies
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              DevOps and cloud computing are important areas
              in modern software development. Understanding
              these technologies can help IT professionals
              build knowledge of application delivery and
              cloud infrastructure.
            </p>

            <ul className="mt-7 space-y-4 text-gray-700">
              {[
                "Introduction to DevOps concepts",
                "Understanding Microsoft Azure",
                "Cloud computing fundamentals",
                "DevOps and cloud technology concepts",
                "Professional guidance from an industry employee",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 mt-5">
              Confirm the detailed syllabus, tools and practical
              exercises with the training team before enrolment.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200"
              alt="Microsoft Azure cloud and DevOps engineering"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* TRAINER */}
      <section className="bg-blue-50 py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-600 font-bold text-sm tracking-widest">
            INDUSTRY-ORIENTED LEARNING
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
            Learn with a Real-Time Industry Professional
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            The DevOps with Azure training program features
            a trainer described as a real-time working
            professional from CTS. The program aims to provide
            industry-oriented professional guidance through
            online learning.
          </p>

          <p className="font-bold text-blue-700 mt-5">
            Training Duration: 2 Months
          </p>

        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-extrabold text-slate-900 text-center">
            Who Can Join DevOps with Azure Training?
          </h2>

          <p className="text-gray-600 text-center leading-8 mt-6">
            IT professionals, software professionals and
            individuals interested in cloud computing and
            DevOps can contact our training team to confirm
            the program's eligibility requirements.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 bg-slate-50">
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
      <section className="py-12 px-5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold text-slate-900">
            Explore Other Professional Training Programs
          </h2>

          <Link
            href="/corporate-training"
            className="block mt-5 text-blue-600 font-semibold hover:underline"
          >
            Corporate Training Programs →
          </Link>

          <Link
            href="/corporate-training/it-audit-sox-training"
            className="block mt-4 text-blue-600 font-semibold hover:underline"
          >
            IT Audit / SOX Training Online →
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 to-cyan-500 rounded-3xl p-10 md:p-16 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-extrabold">
            Start Your DevOps with Azure Training
          </h2>

          <p className="mt-5 text-blue-50">
            Contact KIDIWEBTECH for training details,
            syllabus and enrolment information.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="https://wa.me/919666545670?text=Hi%2C%20please%20share%20DevOps%20with%20Azure%20training%20details."
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
