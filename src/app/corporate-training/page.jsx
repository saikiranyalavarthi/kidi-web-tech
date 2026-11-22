import Link from "next/link";

const pageUrl = "https://kidiwebtech.com/corporate-training";

export const metadata = {
  title:
    "Corporate Training Programs | DevOps, Azure & IT Audit Training | KIDIWEBTECH",
  description:
    "Explore KIDIWEBTECH corporate training programs including DevOps with Microsoft Azure and IT Audit & SOX training. Industry-oriented online training for working professionals.",
  keywords: [
    "Corporate Training",
    "DevOps Training",
    "Azure Training",
    "IT Audit Training",
    "SOX Training",
    "Online Corporate Training",
    "Professional IT Training",
    "KIDIWEBTECH",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Corporate Training Programs | DevOps, Azure & IT Audit | KIDIWEBTECH",
    description:
      "Develop professional IT skills with industry-oriented corporate training programs from KIDIWEBTECH.",
    url: pageUrl,
    type: "website",
    siteName: "KIDIWEBTECH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const courses = [
  {
    title: "DevOps with Microsoft Azure",
    category: "CLOUD & DEVOPS",
    duration: "2 Months",
    mode: "Online Training",
    price: "₹60,000",
    description:
      "Learn DevOps practices and Microsoft Azure cloud technologies with practical exposure to Git, CI/CD pipelines, Docker, Kubernetes, Terraform and cloud deployment.",
    technologies: [
      "Linux",
      "Git & GitHub",
      "Azure",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    href: "/corporate-training/devops-with-azure",
    color: "blue",
  },
  {
    title: "IT Audit & SOX Training",
    category: "AUDIT & COMPLIANCE",
    duration: "45 Days",
    mode: "Online Training",
    price: "₹60,000",
    description:
      "Build professional knowledge in IT auditing, SOX compliance, IT General Controls, risk management, audit documentation and practical audit activities.",
    technologies: [
      "IT Audit",
      "SOX Compliance",
      "ITGC",
      "Risk Management",
      "Audit Testing",
      "Documentation",
    ],
    href: "/corporate-training/it-audit-sox-training",
    color: "purple",
  },
  {
    title: "Website Development Training",
    category: "WEB DEVELOPMENT",
    duration: "Course Duration on Enquiry",
    mode: "Online Training",
    price: "Contact Us",
    description:
      "Learn modern website development from fundamentals to advanced concepts using HTML, CSS, JavaScript, React, Next.js and Tailwind CSS. Build responsive and real-world websites.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Git & GitHub",
    ],
    href: "/corporate-training/website-development-training",
    color: "blue",
  },
  {
    title: "Digital Marketing Training",
    category: "DIGITAL MARKETING",
    duration: "Course Duration on Enquiry",
    mode: "Online Training",
    price: "Contact Us",
    description:
      "Develop practical digital marketing skills covering SEO, social media marketing, Google Ads, content marketing, analytics, lead generation and online brand growth.",
    technologies: [
      "SEO",
      "Google Ads",
      "Social Media",
      "Content Marketing",
      "Analytics",
      "Lead Generation",
      "Local SEO",
    ],
    href: "/corporate-training/digital-marketing-training",
    color: "purple",
  },
  {
    title: "CV, Digital Skills & Interview Preparation",
    category: "CAREER DEVELOPMENT",
    duration: "Customized Training",
    mode: "Online Training",
    price: "Contact Us",
    description:
      "Prepare for your career with professional CV and resume creation, LinkedIn profile optimization, digital skills, interview preparation, communication skills and career guidance.",
    technologies: [
      "CV & Resume",
      "ATS Optimization",
      "LinkedIn Profile",
      "Interview Preparation",
      "Communication",
      "Career Guidance",
      "Job Preparation",
    ],
    href: "/corporate-training/cv-resume-interview-preparation",
    color: "blue",
  },
];
const benefits = [
  {
    title: "Industry-Oriented Curriculum",
    description:
      "Learn skills and concepts relevant to current IT industry requirements and professional responsibilities.",
    icon: "01",
  },
  {
    title: "Practical Learning",
    description:
      "Understand concepts through practical exercises, real-world scenarios and hands-on learning.",
    icon: "02",
  },
  {
    title: "Professional Trainers",
    description:
      "Learn from experienced trainers with industry knowledge and practical experience.",
    icon: "03",
  },
  {
    title: "Flexible Online Training",
    description:
      "Participate in online training designed to support working professionals and learners.",
    icon: "04",
  },
];

const audiences = [
  "Working Professionals",
  "IT Professionals",
  "Fresh Graduates",
  "Career Switchers",
  "Job Seekers",
  "Corporate Teams",
];

const faqs = [
  {
    question: "What corporate training programs are available?",
    answer:
      "KIDIWEBTECH currently offers training programs including DevOps with Microsoft Azure and IT Audit & SOX Training. Additional programs may be introduced based on industry requirements.",
  },
  {
    question: "Are the training programs conducted online?",
    answer:
      "Yes. Our corporate training programs are conducted online, making them suitable for working professionals and learners from different locations.",
  },
  {
    question: "Who can join these corporate training programs?",
    answer:
      "Working professionals, IT professionals, fresh graduates, job seekers and individuals looking to upgrade their skills can enquire about our training programs.",
  },
  {
    question: "Does the training include practical learning?",
    answer:
      "Our programs are designed to include practical learning, exercises and real-world scenarios based on the selected course curriculum.",
  },
  {
    question: "What is the duration of the training?",
    answer:
      "DevOps with Microsoft Azure training is planned for 2 months, while IT Audit & SOX training is planned for 45 days.",
  },
  {
    question: "How can I get course details and enrollment information?",
    answer:
      "You can contact KIDIWEBTECH through WhatsApp or phone to enquire about course details, curriculum, upcoming batches, enrollment and training schedules.",
  },
];

const whatsappLink =
  "https://wa.me/919390627367?text=Hi%2C%20I%20am%20interested%20in%20KIDIWEBTECH%20Corporate%20Training%20Programs.%20Please%20share%20the%20course%20details.";

export default function CorporateTrainingPage() {
  return (
    <main className="overflow-hidden bg-white pt-20">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-[#020617] px-5 py-24 text-white md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-slate-950 to-blue-950" />

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              KIDIWEBTECH CORPORATE LEARNING
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Build Skills.
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Advance Your Career.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Upgrade your professional capabilities with industry-oriented
              corporate training programs designed to help you learn, practice
              and grow in today's technology-driven world.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Training Programs
              </a>

              <a
                href="tel:+919390627367"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Talk to Our Team
              </a>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-4">
              {[
                "Industry-Oriented Learning",
                "Practical Training",
                "Online Classes",
                "Career-Focused Skills",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Professional Development
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Training Designed for
              <span className="text-blue-600"> Real-World Skills</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Technology and business requirements continue to evolve.
              Professionals need more than theoretical knowledge—they need
              practical skills, industry understanding and the confidence to
              work with real-world tools and processes.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              KIDIWEBTECH corporate training programs focus on structured
              learning, practical understanding and career-oriented knowledge to
              help individuals and teams strengthen their professional
              capabilities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-3"
            >
              Contact Our Training Team →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Industry Knowledge",
                text: "Learn technologies and professional concepts",
              },
              {
                title: "Practical Skills",
                text: "Build hands-on experience",
              },
              {
                title: "Career Growth",
                text: "Strengthen your professional profile",
              },
              {
                title: "Flexible Learning",
                text: "Training suitable for professionals",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`rounded-3xl border border-slate-200 p-6 ${
                  index % 2 === 0 ? "bg-slate-50" : "bg-white shadow-sm"
                }`}
              >
                <div className="mb-4 text-3xl font-black text-blue-600">
                  0{index + 1}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRAINING PROGRAMS ================= */}
      <section className="bg-slate-50 px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Courses
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
              Explore Our Training Programs
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choose a program that aligns with your career goals and
              professional development requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`p-8 ${
                    course.color === "blue"
                      ? "bg-gradient-to-br from-slate-950 to-blue-950"
                      : "bg-gradient-to-br from-slate-950 to-purple-950"
                  } text-white`}
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                    {course.category}
                  </span>

                  <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                    {course.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {course.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                      {course.duration}
                    </span>

                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                      {course.mode}
                    </span>

                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                      {course.price}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="font-bold text-slate-900">
                    Key Learning Areas
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={course.href}
                    className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition group-hover:gap-3"
                  >
                    View Course Details
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why KIDIWEBTECH
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
              A Better Approach to Professional Learning
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our learning approach combines structured concepts, practical
              exercises and industry-relevant knowledge to support your learning
              journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-blue-600">
                  {benefit.icon}
                </span>

                <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO CAN JOIN ================= */}
      <section className="bg-slate-950 px-5 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Who Can Join?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Learn, Upgrade and
              <span className="text-cyan-300"> Grow Professionally</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Our training programs are designed for individuals who want to
              develop new skills, improve their knowledge and explore
              opportunities for professional growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {audiences.map((audience, index) => (
              <div
                key={audience}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <span className="text-sm font-bold text-cyan-300">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-bold text-white">{audience}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRAINING PROCESS ================= */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Learning Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
              Your Training Journey
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Choose Your Course",
                description:
                  "Select a training program based on your goals and interests.",
              },
              {
                number: "02",
                title: "Learn the Concepts",
                description:
                  "Understand fundamentals, concepts, tools and workflows.",
              },
              {
                number: "03",
                title: "Practice & Apply",
                description:
                  "Strengthen your understanding through exercises and practical learning.",
              },
              {
                number: "04",
                title: "Grow Your Skills",
                description:
                  "Apply your knowledge towards professional and career development.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="text-4xl font-black text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-slate-50 px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
              Corporate Training FAQs
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    {faq.question}

                    <span className="text-xl text-blue-600 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-5 py-20 text-white md:py-24">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Start Your Learning Journey
          </span>

          <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
            Invest in Your Skills.
            <span className="block text-cyan-300">Build Your Future.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Explore our corporate training programs and take the next step
            towards developing your professional skills. Contact our team for
            course details, batch schedules and enrollment information.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
            >
              WhatsApp Enquiry
            </a>

            <a
              href="tel:+919390627367"
              className="rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10"
            >
              Call 9390627367
            </a>
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB ================= */}
      <div className="border-t border-slate-200 bg-white px-5 py-5">
        <div className="mx-auto max-w-7xl text-sm text-slate-500">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-slate-900">
            Corporate Training
          </span>
        </div>
      </div>

      {/* ================= FAQ STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* ================= COURSE STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "KIDIWEBTECH Corporate Training Programs",
            itemListElement: courses.map((course, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: course.title,
              url: `https://kidiwebtech.com${course.href}`,
            })),
          }),
        }}
      />
    </main>
  );
}
