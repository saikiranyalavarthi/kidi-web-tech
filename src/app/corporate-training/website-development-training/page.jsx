import Link from "next/link";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Layers,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Briefcase,
  GraduationCap,
  Laptop,
  Zap,
  Github,
  Palette,
  Terminal,
  ChevronDown,
} from "lucide-react";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  title:
    "Website Development Training | HTML, CSS, JavaScript, React & Next.js | KIDIWEBTECH",

  description:
    "Join Website Development Training at KIDIWEBTECH. Learn HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, responsive design and real-world website development projects.",

  keywords: [
    "Website Development Training",
    "Web Development Course",
    "HTML CSS JavaScript Training",
    "React JS Training",
    "Next.js Training",
    "Frontend Development Course",
    "Website Designing Course",
    "Web Development for Beginners",
    "Frontend Developer Training",
    "Web Development Course Hyderabad",
    "Website Development Training for Freshers",
    "KIDIWEBTECH",
  ],

  alternates: {
    canonical:
      "https://kidiwebtech.com/corporate-training/website-development-training",
  },

  openGraph: {
    title: "Website Development Training | KIDIWEBTECH",
    description:
      "Learn modern website development with practical training in HTML, CSS, JavaScript, React, Next.js and real-world projects.",
    url: "https://kidiwebtech.com/corporate-training/website-development-training",
    siteName: "KIDIWEBTECH",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   CONSTANTS
========================================================= */

const phoneNumber = "9390627367";
const whatsappNumber = "919390627367";

const whatsappMessage =
  "Hi KIDIWEBTECH, I am interested in Website Development Training. Please share the course details, curriculum, duration and fee structure.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    title: "HTML5",
    subtitle: "Website Structure",
    icon: Code2,
    color: "text-orange-400",
  },
  {
    title: "CSS3",
    subtitle: "Styling & Layout",
    icon: Palette,
    color: "text-blue-400",
  },
  {
    title: "JavaScript",
    subtitle: "Dynamic Development",
    icon: Terminal,
    color: "text-yellow-400",
  },
  {
    title: "React.js",
    subtitle: "Component Development",
    icon: Layers,
    color: "text-cyan-400",
  },
  {
    title: "Next.js",
    subtitle: "Modern Framework",
    icon: Rocket,
    color: "text-white",
  },
  {
    title: "Tailwind CSS",
    subtitle: "Modern UI Styling",
    icon: Zap,
    color: "text-teal-400",
  },
  {
    title: "Git & GitHub",
    subtitle: "Version Control",
    icon: Github,
    color: "text-white",
  },
  {
    title: "API Integration",
    subtitle: "Dynamic Applications",
    icon: Database,
    color: "text-purple-400",
  },
];

/* =========================================================
   COURSE CURRICULUM
========================================================= */

const curriculum = [
  {
    number: "01",
    title: "Web Development Fundamentals",
    topics: [
      "Introduction to Web Development",
      "How websites work",
      "Frontend vs Backend",
      "Web browsers and servers",
      "Developer tools",
    ],
  },
  {
    number: "02",
    title: "HTML5",
    topics: [
      "HTML Structure",
      "HTML Elements",
      "Headings and Paragraphs",
      "Links and Images",
      "Lists and Tables",
      "Forms and Input Fields",
      "Semantic HTML",
    ],
  },
  {
    number: "03",
    title: "CSS3",
    topics: [
      "CSS Selectors",
      "Colors and Typography",
      "Box Model",
      "Margin and Padding",
      "Display Properties",
      "Flexbox",
      "CSS Grid",
      "Transitions and Animations",
    ],
  },
  {
    number: "04",
    title: "Responsive Web Design",
    topics: [
      "Mobile-First Development",
      "Media Queries",
      "Responsive Layouts",
      "Flexible Images",
      "Responsive Navigation",
      "Mobile and Desktop UI",
    ],
  },
  {
    number: "05",
    title: "JavaScript",
    topics: [
      "Variables and Data Types",
      "Operators",
      "Conditions",
      "Loops",
      "Functions",
      "Arrays and Objects",
      "ES6+",
      "DOM Manipulation",
      "Event Handling",
      "Async/Await",
    ],
  },
  {
    number: "06",
    title: "Git & GitHub",
    topics: [
      "Introduction to Git",
      "Git Installation",
      "Repository Creation",
      "Git Commands",
      "Commit and Push",
      "GitHub Projects",
      "Version Control",
    ],
  },
  {
    number: "07",
    title: "React.js",
    topics: [
      "Introduction to React",
      "React Setup",
      "Components",
      "JSX",
      "Props",
      "State Management",
      "React Hooks",
      "useState",
      "useEffect",
      "Forms",
      "Conditional Rendering",
    ],
  },
  {
    number: "08",
    title: "API Integration",
    topics: [
      "Introduction to APIs",
      "REST APIs",
      "HTTP Methods",
      "JSON",
      "Fetch API",
      "Axios",
      "API Integration",
      "Loading and Error States",
    ],
  },
  {
    number: "09",
    title: "Next.js",
    topics: [
      "Introduction to Next.js",
      "App Router",
      "Pages and Layouts",
      "Navigation",
      "Dynamic Routing",
      "Server and Client Components",
      "SEO Metadata",
      "Image Optimization",
    ],
  },
  {
    number: "10",
    title: "Tailwind CSS",
    topics: [
      "Introduction to Tailwind",
      "Utility Classes",
      "Typography",
      "Colors and Backgrounds",
      "Spacing",
      "Flexbox and Grid",
      "Responsive Styling",
      "UI Development",
    ],
  },
  {
    number: "11",
    title: "Website Deployment",
    topics: [
      "Production Build",
      "Deployment Process",
      "GitHub Integration",
      "Vercel Deployment",
      "Domain Connection",
      "Environment Variables",
      "Website Testing",
    ],
  },
  {
    number: "12",
    title: "SEO & Website Optimization",
    topics: [
      "SEO Fundamentals",
      "Meta Title and Description",
      "Heading Structure",
      "URL Optimization",
      "Image SEO",
      "Page Speed",
      "Google Search Console",
      "Website Performance",
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Business Website",
    description:
      "Develop a professional business website with services, about, contact, navigation and responsive sections.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    title: "Portfolio Website",
    description:
      "Create a personal portfolio showcasing skills, projects, experience and professional profile.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Landing Page",
    description:
      "Build a modern conversion-focused landing page with responsive design and enquiry sections.",
    tags: ["React", "Responsive UI"],
  },
  {
    number: "04",
    title: "Dynamic Website",
    description:
      "Create a website that displays dynamic information using APIs and reusable React components.",
    tags: ["React", "API", "JavaScript"],
  },
  {
    number: "05",
    title: "Next.js Website",
    description:
      "Develop a modern SEO-friendly website with routing, metadata, layouts and deployment.",
    tags: ["Next.js", "SEO"],
  },
  {
    number: "06",
    title: "Final Real-World Project",
    description:
      "Build and deploy a complete website from planning and development to testing and production.",
    tags: ["Full Project", "GitHub", "Deployment"],
  },
];

/* =========================================================
   TRAINING BENEFITS
========================================================= */

const benefits = [
  "Beginner-Friendly Training",
  "Practical Coding Sessions",
  "Real-World Website Projects",
  "Responsive Website Development",
  "Industry-Oriented Curriculum",
  "Portfolio Development",
  "GitHub Project Experience",
  "Website Deployment Training",
  "Interview Preparation Guidance",
  "Career Guidance",
];

/* =========================================================
   CAREER OPPORTUNITIES
========================================================= */

const careerOptions = [
  "Frontend Developer",
  "Web Developer",
  "React Developer",
  "UI Developer",
  "Junior Next.js Developer",
  "Website Designer & Developer",
  "Freelance Web Developer",
];

/* =========================================================
   TARGET AUDIENCE
========================================================= */

const audience = [
  "Students",
  "Freshers",
  "Job Seekers",
  "Beginners",
  "Freelancers",
  "Working Professionals",
  "Career Switchers",
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "Who can join Website Development Training?",
    answer:
      "Students, freshers, graduates, job seekers, working professionals and beginners interested in website development can join this course.",
  },
  {
    question: "Do I need coding knowledge before joining?",
    answer:
      "No prior programming knowledge is required. The course starts with web development fundamentals and gradually progresses to advanced concepts.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "You will learn HTML5, CSS3, JavaScript, responsive web design, Git, GitHub, React.js, API integration, Next.js and Tailwind CSS.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. The training includes practical assignments and website projects such as business websites, portfolio websites, landing pages and dynamic web applications.",
  },
  {
    question: "Will I learn responsive website development?",
    answer:
      "Yes. You will learn to develop websites that work across mobile phones, tablets, laptops and desktop screens using responsive design techniques.",
  },
  {
    question: "Will I learn website deployment?",
    answer:
      "Yes. You will learn deployment fundamentals, GitHub integration, production builds, domain connection basics and website publishing.",
  },
  {
    question: "Is this course suitable for freshers?",
    answer:
      "Yes. The training is suitable for freshers who want to build technical skills, practical projects and prepare for entry-level frontend and web development opportunities.",
  },
  {
    question: "Does the course guarantee a job?",
    answer:
      "The course focuses on skills, projects and career preparation. Job placement or employment is not guaranteed.",
  },
];

/* =========================================================
   STRUCTURED DATA
========================================================= */

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Website Development Training",
  description:
    "Website development training covering HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, responsive web design and real-world projects.",
  provider: {
    "@type": "Organization",
    name: "KIDIWEBTECH",
    url: "https://kidiwebtech.com",
  },
  url: "https://kidiwebtech.com/corporate-training/website-development-training",
  educationalLevel: "Beginner to Advanced",
  teaches: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Web Design",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "API Integration",
    "Website Deployment",
    "SEO Fundamentals",
  ],
};

const faqSchema = {
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
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Website Development Training",
      item: "https://kidiwebtech.com/corporate-training/website-development-training",
    },
  ],
};

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <div
      className={`mb-12 max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2 size={19} className="mt-1 shrink-0 text-yellow-400" />
          <span className="text-gray-300 leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function WhatsAppButton({
  children = "Enquire About Training",
  className = "",
  message = whatsappMessage,
}) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 ${className}`}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function WebsiteDevelopmentTrainingPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="relative isolate overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.12),transparent_40%)]" />

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-500/5 blur-[120px]" />

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* HERO CONTENT */}

            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2">
                <Code2 size={16} className="text-yellow-400" />

                <span className="text-xs font-semibold tracking-wide text-yellow-300">
                  PROFESSIONAL WEBSITE DEVELOPMENT TRAINING
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                Build Websites.
                <span className="block text-yellow-400">Build Skills.</span>
                <span className="block">Build Your Career.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                Learn modern website development from fundamentals to advanced
                frontend technologies. Build responsive websites, work on
                real-world projects and develop the skills required to start
                your web development career.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <WhatsAppButton>
                  Join Website Development Training
                </WhatsAppButton>

                <Link
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 px-7 py-4 font-semibold text-white transition hover:border-yellow-400/50 hover:bg-white/5"
                >
                  Explore Curriculum
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400" />
                  Practical Learning
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400" />
                  Real Projects
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400" />
                  Career Guidance
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-5 shadow-2xl sm:p-7">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-gray-500">
                    website-project.jsx
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <p className="text-purple-400">
                    <span className="text-gray-600">01 </span>
                    import React from
                    <span className="text-green-400"> &quot;react&quot;</span>;
                  </p>

                  <p className="text-purple-400">
                    <span className="text-gray-600">02 </span>
                    export default function
                    <span className="text-yellow-400"> Website</span>
                    () {"{"}
                  </p>

                  <p className="pl-5 text-gray-400">
                    <span className="text-gray-600">03 </span>
                    return (
                  </p>

                  <p className="pl-10 text-blue-400">
                    <span className="text-gray-600">04 </span>
                    &lt;main&gt;
                  </p>

                  <p className="pl-14 text-green-400">
                    <span className="text-gray-600">05 </span>
                    &lt;h1&gt;Build Your Future&lt;/h1&gt;
                  </p>

                  <p className="pl-14 text-yellow-400">
                    <span className="text-gray-600">06 </span>
                    &lt;p&gt;Learn. Build. Launch.&lt;/p&gt;
                  </p>

                  <p className="pl-10 text-blue-400">
                    <span className="text-gray-600">07 </span>
                    &lt;/main&gt;
                  </p>

                  <p className="pl-5 text-gray-400">
                    <span className="text-gray-600">08 </span>
                    );
                  </p>

                  <p className="text-purple-400">
                    <span className="text-gray-600">09 </span>
                    {"}"}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { name: "HTML", color: "text-orange-400" },
                    { name: "CSS", color: "text-blue-400" },
                    { name: "JavaScript", color: "text-yellow-400" },
                    { name: "React", color: "text-cyan-400" },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center"
                    >
                      <Code2
                        className={`mx-auto mb-2 ${tech.color}`}
                        size={22}
                      />
                      <span className="text-xs font-semibold text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ABOUT COURSE
      ================================================= */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                centered={false}
                eyebrow="ABOUT THE TRAINING"
                title="Learn to Create Modern Websites from Scratch"
              />

              <p className="mb-6 text-base leading-8 text-gray-400">
                Website development is one of the most valuable digital skills
                for businesses and professionals. Our website development
                training program is designed to help you understand how websites
                work and how to build modern, professional and responsive
                websites.
              </p>

              <p className="mb-6 text-base leading-8 text-gray-400">
                Starting from HTML and CSS, you will progress through
                JavaScript, React.js, Next.js and modern development tools. The
                training focuses on practical learning, project development and
                building your confidence as a developer.
              </p>

              <CheckList
                items={[
                  "Learn from basic to advanced concepts",
                  "Practice coding with hands-on exercises",
                  "Develop responsive websites",
                  "Work with modern development technologies",
                  "Create projects for your portfolio",
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Laptop,
                  title: "Hands-on Learning",
                  text: "Practice while learning",
                },
                {
                  icon: Globe,
                  title: "Modern Websites",
                  text: "Build responsive experiences",
                },
                {
                  icon: Code2,
                  title: "Practical Coding",
                  text: "Learn through coding",
                },
                {
                  icon: Rocket,
                  title: "Project Development",
                  text: "Develop real-world projects",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-white/5 bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-yellow-400/30 hover:bg-[#121212]"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-yellow-400/10 p-3">
                      <Icon size={24} className="text-yellow-400" />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
      TECHNOLOGIES
  ================================================= */}

      <section className="border-y border-white/5 bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="TECHNOLOGY STACK"
            title="Learn the Technologies That Power the Web"
            description="Develop your skills using modern web development technologies, tools and frameworks."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/5 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30"
                >
                  <Icon size={30} className={`mb-5 ${tech.color}`} />

                  <h3 className="font-bold text-white">{tech.title}</h3>

                  <p className="mt-2 text-sm text-gray-500">{tech.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
      CURRICULUM
  ================================================= */}

      <section id="curriculum" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="COURSE CURRICULUM"
            title="Complete Website Development Curriculum"
            description="A structured learning path designed to take you from beginner-level fundamentals to modern website development."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {curriculum.map((module) => (
              <div
                key={module.number}
                className="rounded-2xl border border-white/5 bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-yellow-400/20 sm:p-8"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-sm font-bold text-yellow-400">
                    {module.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {module.title}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {module.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm leading-6 text-gray-400"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-1 shrink-0 text-yellow-400"
                      />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
      PROJECTS
  ================================================= */}

      <section className="border-y border-white/5 bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="PRACTICAL PROJECTS"
            title="Build Projects. Gain Experience."
            description="Apply what you learn by building practical websites and projects that help strengthen your development skills and portfolio."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.number}
                className="group rounded-2xl border border-white/5 bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30"
              >
                <span className="text-sm font-bold tracking-widest text-yellow-400">
                  PROJECT {project.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-[100px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="text-sm font-medium text-gray-500">
                    Practical Experience
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-yellow-400 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
      WHO CAN JOIN
  ================================================= */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                centered={false}
                eyebrow="WHO CAN JOIN"
                title="Start Your Web Development Journey"
                description="Our website development training is suitable for learners from different backgrounds who want to build a career in technology."
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: GraduationCap,
                    title: "Students",
                    description:
                      "Students who want to learn modern web development skills.",
                  },
                  {
                    icon: Briefcase,
                    title: "Freshers",
                    description:
                      "Fresh graduates preparing for entry-level developer roles.",
                  },
                  {
                    icon: Laptop,
                    title: "Job Seekers",
                    description:
                      "Individuals preparing for web development jobs.",
                  },
                  {
                    icon: Rocket,
                    title: "Career Switchers",
                    description:
                      "Professionals looking to transition into technology.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/5 bg-[#0d0d0d] p-6"
                    >
                      <Icon size={25} className="mb-4 text-yellow-400" />

                      <h3 className="font-bold text-white">{item.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-yellow-400/15 bg-gradient-to-br from-yellow-400/[0.06] to-transparent p-8 sm:p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                YOUR LEARNING JOURNEY
              </span>

              <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                From Beginner
                <span className="block text-yellow-400">To Developer</span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Start with the fundamentals, practice coding, develop real-world
                projects, learn modern frameworks and build your portfolio step
                by step.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Understand web fundamentals",
                  "Learn frontend technologies",
                  "Build responsive websites",
                  "Develop practical projects",
                  "Prepare for developer opportunities",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-xs font-bold text-yellow-400">
                      {index + 1}
                    </div>

                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <WhatsAppButton className="mt-9 w-full sm:w-fit">
                Get Course Details
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
      BENEFITS
  ================================================= */}

      <section className="border-y border-white/5 bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="WHY KIDIWEBTECH"
            title="Learn. Practice. Develop."
            description="A learning experience focused on practical skills, development knowledge and career readiness."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#111111] p-5"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <span className="text-sm leading-6 text-gray-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
      CAREER OPPORTUNITIES
  ================================================= */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="CAREER OPPORTUNITIES"
            title="Explore Web Development Career Paths"
            description="Develop your skills and prepare for different entry-level roles in web development and frontend technology."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careerOptions.map((career, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#0d0d0d] p-6 transition hover:border-yellow-400/20"
              >
                <div className="rounded-xl bg-yellow-400/10 p-3">
                  <Briefcase size={20} className="text-yellow-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">{career}</h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Web development career path
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-gray-500">
            Career opportunities depend on your skills, projects, communication,
            interview performance and employer requirements.
          </p>
        </div>
      </section>

      {/* =================================================
      FAQ
  ================================================= */}

      <section className="border-y border-white/5 bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Website Development Training FAQs"
            description="Find answers to common questions about our website development course."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/5 bg-[#111111] p-6 transition hover:border-yellow-400/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white">
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-yellow-400 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="mt-5 border-t border-white/5 pt-5 text-sm leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
      RELATED TRAINING
  ================================================= */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="EXPLORE MORE TRAINING"
            title="Explore Other Training Programs"
            description="Explore more career-focused training programs available at KIDIWEBTECH."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/corporate-training/digital-marketing-training"
              className="group rounded-2xl border border-white/10 bg-[#111111] p-7 transition hover:border-yellow-400/30"
            >
              <Globe className="mb-5 text-yellow-400" size={28} />

              <h3 className="text-xl font-bold text-white transition group-hover:text-yellow-400">
                Digital Marketing Training
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Learn SEO, social media marketing, Google Ads, content
                marketing, analytics and digital growth.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400">
                Explore Training
                <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/corporate-training/cv-resume-interview-preparation"
              className="group rounded-2xl border border-white/10 bg-[#111111] p-7 transition hover:border-yellow-400/30"
            >
              <Briefcase className="mb-5 text-yellow-400" size={28} />

              <h3 className="text-xl font-bold text-white transition group-hover:text-yellow-400">
                CV & Interview Preparation
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Improve your resume, prepare for interviews, strengthen
                communication and build career confidence.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400">
                Explore Training
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================
      FINAL CTA
  ================================================= */}

      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.10),transparent_65%)]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mb-6 inline-flex rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">
            <Code2 size={30} className="text-yellow-400" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
            Ready to Start Your
            <span className="block text-yellow-400">
              Web Development Career?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">
            Learn modern website development, build real-world projects, develop
            your portfolio and take the next step towards your career in
            technology.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <WhatsAppButton>Enquire on WhatsApp</WhatsAppButton>

            <a
              href={`tel:+91${phoneNumber}`}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-7 py-4 font-semibold text-white transition hover:border-yellow-400/30 hover:bg-white/5"
            >
              Call {phoneNumber}
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            KIDIWEBTECH · Website Development Training
          </p>
        </div>
      </section>
    </main>
  );
}
