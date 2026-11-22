import Link from "next/link";

const pageUrl =
  "https://kidiwebtech.com/corporate-training/cv-resume-interview-preparation";

const phone = "9390627367";

const whatsappUrl = (message) =>
  `https://wa.me/919390627367?text=${encodeURIComponent(message)}`;

export const metadata = {
  title: "CV Writing, Resume Preparation & Interview Training | KIDIWEBTECH",

  description:
    "Get professional CV writing, ATS-friendly resume preparation, HR and technical interview training, mock interviews, LinkedIn guidance and career coaching from KIDIWEBTECH.",

  keywords: [
    "CV Preparation Services",
    "Resume Writing Services",
    "ATS Friendly Resume",
    "Resume Preparation for Freshers",
    "Professional CV Writing",
    "Interview Preparation Training",
    "Mock Interview Preparation",
    "Technical Interview Preparation",
    "HR Interview Preparation",
    "Career Guidance",
    "LinkedIn Profile Optimization",
    "Resume Writing Hyderabad",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "CV Writing, Resume Preparation & Interview Training | KIDIWEBTECH",
    description:
      "Build a professional CV, improve interview confidence and prepare for your next career opportunity with KIDIWEBTECH.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
        width: 1200,
        height: 630,
        alt: "Professional CV preparation and career guidance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CV Writing, Resume Preparation & Interview Training | KIDIWEBTECH",
    description:
      "Professional resume writing, interview preparation, mock interviews and career guidance.",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
    ],
  },
};

const resumeServices = [
  "Professional CV and resume writing",
  "Freshers resume preparation",
  "Experienced professionals' resume development",
  "ATS-friendly resume formatting",
  "Career summary and objective writing",
  "Skills and achievements presentation",
  "LinkedIn profile improvement guidance",
  "Cover letter preparation",
  "Resume customization based on job descriptions",
];

const resumeAudience = [
  "Fresh Graduates",
  "Experienced Professionals",
  "Job Seekers",
  "Career Changers",
  "Professionals Seeking Better Opportunities",
];

const interviewServices = [
  "HR interview preparation",
  "Technical interview preparation",
  "Mock interview sessions",
  "Frequently asked interview questions and answers",
  "Self-introduction preparation",
  "Strengths and weaknesses presentation",
  "Salary negotiation guidance",
  "Communication and presentation skills",
  "Body language and professional etiquette",
  "Group discussion preparation",
  "Situational and behavioural interview preparation",
];

const trainingSteps = [
  {
    number: "01",
    title: "Profile Assessment",
    description:
      "Understand your educational background, professional experience, skills, strengths and career goals.",
    icon: "👤",
  },
  {
    number: "02",
    title: "CV Development",
    description:
      "Prepare a customized, professional and ATS-friendly CV aligned with your career objectives.",
    icon: "📄",
  },
  {
    number: "03",
    title: "Interview Coaching",
    description:
      "Practice common interview questions and participate in mock interview sessions to improve confidence.",
    icon: "🎯",
  },
  {
    number: "04",
    title: "Career Guidance",
    description:
      "Receive guidance on job applications, interview etiquette, career opportunities and professional development.",
    icon: "🚀",
  },
];

const benefits = [
  {
    icon: "🎯",
    title: "Personalized Career Guidance",
    description:
      "Preparation tailored to your education, experience, skills and career objectives.",
  },
  {
    icon: "📄",
    title: "Professional CV Writing",
    description:
      "Present your profile through a structured, professional and ATS-conscious resume.",
  },
  {
    icon: "💼",
    title: "Industry-Oriented Preparation",
    description:
      "Understand interview expectations, professional communication and recruitment processes.",
  },
  {
    icon: "🗣️",
    title: "Practical Mock Interviews",
    description:
      "Practise interviews and improve your responses through guided feedback.",
  },
  {
    icon: "🌱",
    title: "For Freshers and Experienced Candidates",
    description:
      "Career preparation support for candidates at different stages of their professional journey.",
  },
  {
    icon: "✨",
    title: "Confidence Building",
    description:
      "Improve communication, presentation, body language and professional confidence.",
  },
];

const faqs = [
  {
    question: "What is included in CV and resume preparation?",
    answer:
      "Our CV preparation service includes professional resume writing, career summary development, skills presentation, experience formatting and ATS-friendly resume structure based on your career profile.",
  },
  {
    question: "Do you prepare resumes for freshers?",
    answer:
      "Yes. We help fresh graduates prepare professional resumes that highlight education, skills, projects, internships, certifications and career objectives.",
  },
  {
    question: "Can experienced professionals get resume support?",
    answer:
      "Yes. Experienced professionals can receive resume development focused on professional experience, responsibilities, achievements, technical skills and career progression.",
  },
  {
    question: "What is interview preparation?",
    answer:
      "Interview preparation helps candidates practise HR interviews, technical interviews, self-introductions, behavioural questions, communication skills and professional presentation.",
  },
  {
    question: "Do you provide mock interviews?",
    answer:
      "Mock interview sessions can help candidates practise answering questions in an interview-style environment and identify areas for improvement.",
  },
  {
    question: "Can you help with technical interviews?",
    answer:
      "Yes. Technical interview preparation can be customized according to your domain, job role, experience, skills and target position.",
  },
  {
    question: "Do you help with LinkedIn profile improvement?",
    answer:
      "Yes. We provide guidance on improving your LinkedIn profile, headline, summary, skills and professional presentation.",
  },
  {
    question: "Who can use your career preparation services?",
    answer:
      "Fresh graduates, job seekers, experienced professionals, career changers and candidates looking for better employment opportunities can benefit from these services.",
  },
  {
    question: "Does interview preparation guarantee a job?",
    answer:
      "No. CV preparation and interview coaching are intended to improve your professional presentation and interview readiness. Job selection depends on your skills, performance, employer requirements and recruitment decisions.",
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
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700"
    >
      {label}
    </a>
  );
}

export default function CVResumeInterviewPreparationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "CV, Resume and Interview Preparation Services",
        serviceType:
          "CV Writing, Resume Preparation, Interview Coaching and Career Guidance",
        description:
          "Professional CV preparation, ATS-friendly resume writing, interview coaching, mock interviews, LinkedIn profile guidance and career preparation services.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "KIDIWEBTECH",
          url: "https://kidiwebtech.com",
          telephone: "+919390627367",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Fresh graduates, job seekers, experienced professionals and career changers",
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
            name: "CV Resume and Interview Preparation",
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
      {/* SEO STRUCTURED DATA */}
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
            alt="Professional resume preparation and career planning"
            className="h-full w-full object-cover opacity-30"
            fetchPriority="high"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/80" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-28">
          {/* HERO CONTENT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Career Development & Professional Preparation
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              CV Preparation & Interview Training
            </h1>

            <p className="mt-6 text-xl font-semibold text-blue-100 md:text-2xl">
              Build Your Profile. Improve Your Confidence. Prepare for Your
              Career.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Make your first impression count. Get professional CV preparation,
              interview coaching, mock interview practice and personalized
              career guidance to help you confidently pursue your next
              opportunity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white">
              {[
                "CV Preparation",
                "Mock Interviews",
                "Career Guidance",
                "Professional Coaching",
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
                label="Get Started Today"
                message="Hi, I am interested in CV preparation and interview training services. Please share the details."
              />

              <a
                href={`tel:+91${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Call {phone}
              </a>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-md md:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
              Career Preparation Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold">
              Prepare for Your Next Opportunity
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Get the support you need to build your professional profile,
              prepare for interviews and present your skills with confidence.
            </p>

            <div className="my-6 h-px bg-white/20" />

            <div className="space-y-4">
              {[
                "Professional Resume Development",
                "HR & Technical Interview Preparation",
                "Mock Interview Practice",
                "Career Guidance",
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
              href={whatsappUrl(
                "Hi, I would like to know more about CV preparation, interview training and career guidance.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block rounded-xl bg-white px-5 py-3.5 text-center font-bold text-slate-900 transition hover:bg-blue-50"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Career Preparation"
            title="Make Your Professional Profile Stand Out"
            description="Build a strong professional profile and prepare yourself to confidently face interviews and explore career opportunities."
          />

          <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              Your resume and interview performance play an important role in
              your career journey. A well-structured CV helps recruiters
              understand your qualifications, skills, experience and
              achievements. Effective interview preparation helps you
              communicate your strengths and present yourself professionally.
            </p>

            <p>
              KIDIWEBTECH provides CV preparation, interview coaching and career
              guidance designed for fresh graduates, experienced professionals
              and job seekers. Our approach focuses on understanding your
              background, preparing your professional profile and helping you
              improve your interview readiness.
            </p>

            <p>
              Whether you are starting your career, looking for a new job,
              changing your career direction or targeting better opportunities,
              the right preparation can help you take the next step with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900",
              alt: "Professional resume and documents",
              title: "Professional CV",
            },
            {
              src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900",
              alt: "Professional career coaching discussion",
              title: "Career Guidance",
            },
            {
              src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900",
              alt: "Team professional meeting and interview discussion",
              title: "Interview Coaching",
            },
            {
              src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900",
              alt: "Business professionals working together",
              title: "Career Development",
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

      {/* CV PREPARATION */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <SectionHeading
                eyebrow="01 — CV / Resume Preparation"
                title="Make Your First Impression Count!"
                description="Your CV is your first introduction to potential employers. We help you create a professional, impactful and ATS-friendly CV."
              />

              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
                  alt="Professional resume preparation and career documentation"
                  loading="lazy"
                  className="h-80 w-full rounded-3xl object-cover"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <h3 className="mb-6 text-2xl font-extrabold text-slate-900">
                Our CV Preparation Services
              </h3>

              <CheckList items={resumeServices} />

              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <h4 className="font-bold text-slate-900">Who Can Benefit?</h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {resumeAudience.map((person) => (
                    <span
                      key={person}
                      className="rounded-full border border-blue-200 bg-white px-3 py-2 text-sm font-medium text-blue-800"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>

              <WhatsAppButton
                label="Get CV Preparation"
                message="Hi, I am interested in professional CV and resume preparation services. Please share the details."
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTERVIEW PREPARATION */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:order-1 md:p-9">
              <h3 className="mb-6 text-2xl font-extrabold text-slate-900">
                Our Interview Preparation Services
              </h3>

              <CheckList items={interviewServices} />

              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <p className="font-bold text-slate-900">
                  Prepare Smart. Perform Better. Get Hired!
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Practice, improve your confidence and learn to communicate
                  your skills effectively during interviews.
                </p>
              </div>

              <WhatsAppButton
                label="Prepare for Interviews"
                message="Hi, I am interested in interview preparation, mock interviews and HR/technical interview coaching."
              />
            </div>

            <div className="order-1 md:order-2">
              <SectionHeading
                eyebrow="02 — Interview Preparation"
                title="Prepare Smart. Perform Better. Get Hired!"
                description="Interviews are an important step in securing career opportunities. Prepare your communication, presentation, confidence and interview performance with guided coaching."
              />

              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
                alt="Professional interview preparation and corporate discussion"
                loading="lazy"
                className="h-80 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING APPROACH */}
      <section className="bg-slate-950 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            light
            eyebrow="03 — Our Training Approach"
            title="A Structured Approach to Career Preparation"
            description="Follow a simple, personalized process designed to improve your professional profile and interview readiness."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
                  {step.icon}
                </div>

                <p className="mt-6 text-sm font-bold tracking-widest text-cyan-300">
                  STEP {step.number}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="04 — Why Choose Us?"
            title="Your Career Preparation Partner"
            description="Get personalized support, practical preparation and professional guidance to help you move forward in your career."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER SUPPORT */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Professional Development
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Build Skills. Improve Confidence. Move Forward.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Career preparation is more than creating a resume. It is about
              understanding your strengths, communicating your experience,
              preparing for recruitment processes and presenting yourself
              confidently to employers.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our career preparation services help you focus on your
              professional goals and strengthen the way you approach job
              applications, interviews and career development.
            </p>

            <div className="mt-8">
              <WhatsAppButton
                label="Talk to a Career Advisor"
                message="Hi, I would like career guidance and professional CV/interview preparation support."
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
              alt="Career guidance and professional development meeting"
              loading="lazy"
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about CV preparation, interview training and career guidance."
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
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Start Your Career Journey
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Your Dream Job Starts With the Right Preparation!
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Don't let a weak CV or lack of interview confidence hold you back.
            Let us help you present your best professional self and prepare for
            your next opportunity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "CV Preparation",
              "Interview Preparation",
              "Mock Interviews",
              "Career Guidance",
            ].map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Get Started Today"
              message="Hi, I want to get started with CV preparation, interview preparation, mock interviews and career guidance. Please contact me."
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
