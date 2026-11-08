import Link from "next/link";

const pageUrl = "https://kidiwebtech.com/corporate-training/devops-with-azure";
const phone = "9666545670";
const whatsappBase =
  "https://wa.me/919666545670?text=Hi%2C%20I%20am%20interested%20in%20DevOps%20with%20Azure%20training";

export const metadata = {
  title:
    "DevOps with Azure Training Online | Azure DevOps Course | KIDIWEBTECH",
  description:
    "Join KIDIWEBTECH's 2-month online DevOps with Microsoft Azure training. Learn Azure DevOps, Git, CI/CD, YAML, Docker, Kubernetes, Terraform and cloud deployment with placement assistance.",
  keywords: [
    "DevOps with Azure Training",
    "Azure DevOps Training Online",
    "Microsoft Azure DevOps Course",
    "DevOps Training Online",
    "Azure DevOps Course",
    "Azure Cloud Training",
    "CI CD Pipeline Training",
    "Azure Pipelines Training",
    "Docker and Kubernetes Training",
    "Terraform Training",
    "DevOps Course with Placement Assistance",
    "Azure DevOps Training for Beginners",
    "DevOps Training for Working Professionals",
    "Cloud and DevOps Training",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "DevOps with Microsoft Azure Online Training | KIDIWEBTECH",
    description:
      "Learn DevOps, Microsoft Azure, Git, CI/CD pipelines, Docker, Kubernetes and infrastructure automation in a structured online training program.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200",
        width: 1200,
        height: 630,
        alt: "Cloud and DevOps engineering technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps with Azure Training Online | KIDIWEBTECH",
    description:
      "Build practical DevOps and Microsoft Azure skills with online training and placement assistance.",
    images: [
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200",
    ],
  },
};

const modules = [
  {
    number: "01",
    title: "DevOps Fundamentals",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
    alt: "Technology professionals collaborating on software development",
    topics: [
      "Introduction to DevOps and its culture",
      "DevOps lifecycle and methodologies",
      "Agile and Scrum fundamentals",
      "Continuous Integration and Continuous Delivery",
      "DevOps architecture and workflow",
      "Roles and responsibilities of DevOps Engineers",
      "Development and operations collaboration",
    ],
  },
  {
    number: "02",
    title: "Microsoft Azure Cloud Fundamentals",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000",
    alt: "Digital cloud network representing Microsoft Azure cloud concepts",
    topics: [
      "Introduction to Microsoft Azure",
      "Azure architecture and cloud computing",
      "Azure Virtual Machines",
      "Azure Storage Accounts",
      "Azure Virtual Networks",
      "Azure Resource Groups",
      "Azure App Services",
      "Azure Identity and Access Management",
      "Azure Monitor and Log Analytics",
      "Azure cloud resource management",
    ],
  },
  {
    number: "03",
    title: "Git and Source Code Management",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1000",
    alt: "Developer workspace for source code and version control",
    topics: [
      "Introduction to Git",
      "Git installation and configuration",
      "Creating and managing repositories",
      "Git clone, pull, push and commit",
      "Branching and merging strategies",
      "Pull requests and code reviews",
      "GitHub and Azure Repos",
      "Source code management best practices",
    ],
  },
  {
    number: "04",
    title: "Azure DevOps Services",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000",
    alt: "Cloud infrastructure and server technology",
    topics: [
      "Introduction to Azure DevOps",
      "Azure Boards",
      "Azure Repos",
      "Azure Pipelines",
      "Azure Test Plans",
      "Azure Artifacts",
      "Project and repository management",
      "Work items and sprint activities",
    ],
  },
  {
    number: "05",
    title: "CI/CD Pipeline Implementation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000",
    alt: "Technology hardware representing software delivery automation",
    topics: [
      "Continuous Integration concepts",
      "Continuous Delivery and Deployment",
      "Creating build pipelines",
      "Creating release pipelines",
      "YAML-based pipelines",
      "Pipeline variables and variable groups",
      "Pipeline triggers",
      "Build and release automation",
      "Deployment approvals and environments",
      "Troubleshooting pipeline failures",
    ],
  },
  {
    number: "06",
    title: "Infrastructure as Code (IaC)",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000",
    alt: "Engineers planning infrastructure and automation work",
    topics: [
      "Introduction to Infrastructure as Code",
      "ARM Templates",
      "Bicep fundamentals",
      "Terraform fundamentals",
      "Creating Azure infrastructure using code",
      "Infrastructure provisioning and automation",
      "Managing infrastructure configurations",
    ],
  },
  {
    number: "07",
    title: "Docker and Containerisation",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1000",
    alt: "Container technology and software deployment concept",
    topics: [
      "Introduction to Docker",
      "Docker architecture",
      "Docker images and containers",
      "Dockerfile creation",
      "Building and managing images",
      "Docker Compose fundamentals",
      "Container registries",
      "Azure Container Registry",
    ],
  },
  {
    number: "08",
    title: "Kubernetes and Azure Kubernetes Service (AKS)",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1000",
    alt: "Cloud native infrastructure and Kubernetes concept",
    topics: [
      "Introduction to Kubernetes",
      "Kubernetes architecture",
      "Pods, Services and Deployments",
      "Namespaces and ConfigMaps",
      "Secrets management",
      "Kubernetes deployment strategies",
      "Introduction to Azure Kubernetes Service",
      "Application deployment and management on AKS",
    ],
  },
  {
    number: "09",
    title: "Monitoring, Security and Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000",
    alt: "Cloud application monitoring and analytics dashboard",
    topics: [
      "Azure Monitor",
      "Application Insights",
      "Log Analytics",
      "Monitoring cloud applications",
      "Azure Key Vault",
      "Secrets and configuration management",
      "Identity and access management",
      "DevSecOps fundamentals",
      "Deployment troubleshooting and optimisation",
    ],
  },
];

const industryTopics = [
  "How developers and DevOps teams collaborate",
  "How source code moves from development to production",
  "How CI/CD pipelines are designed and implemented",
  "How applications are deployed into Azure environments",
  "How infrastructure is provisioned and automated",
  "How Docker containers are built and deployed",
  "How Kubernetes clusters are managed",
  "How deployment failures are identified and resolved",
  "How application monitoring and logging are performed",
  "How production issues are analysed and troubleshot",
  "How cloud environments are secured and maintained",
  "How DevOps teams manage releases and deployment approvals",
];

const practicalTopics = [
  "Creating and managing Azure resources",
  "Configuring Git repositories",
  "Building CI/CD pipelines",
  "Writing YAML pipeline configurations",
  "Automating application deployments",
  "Creating Docker images and containers",
  "Deploying applications to Kubernetes",
  "Provisioning cloud infrastructure",
  "Configuring monitoring and alerts",
  "Troubleshooting deployment and infrastructure issues",
];

const audience = [
  "Fresh graduates looking to start an IT career",
  "Software Developers",
  "System Administrators",
  "Linux Administrators",
  "Cloud Engineers",
  "IT Support Professionals",
  "Network Engineers",
  "Testing and QA Professionals",
  "Working IT professionals looking for career growth",
  "Professionals planning to transition into DevOps and Cloud Engineering",
];

const placementSupport = [
  "Resume preparation guidance",
  "Professional profile improvement",
  "Relevant job opportunity updates",
  "Job application guidance",
  "Profile sharing and referrals where available",
  "Career counselling and job role guidance",
  "Recruitment process guidance",
  "Support in identifying suitable DevOps and Azure opportunities",
];

const interviewSupport = [
  "Azure DevOps technical interview preparation",
  "DevOps frequently asked interview questions",
  "Git and CI/CD pipeline interview questions",
  "YAML pipeline scenario-based questions",
  "Docker and Kubernetes interview preparation",
  "Terraform and Infrastructure as Code questions",
  "Real-time troubleshooting scenarios",
  "Practical problem-solving discussions",
  "Mock technical interview sessions",
  "HR interview preparation",
  "Personal feedback and improvement guidance",
];

const careerRoles = [
  "DevOps Engineer",
  "Azure DevOps Engineer",
  "Cloud Engineer",
  "Build and Release Engineer",
  "CI/CD Engineer",
  "Automation Engineer",
  "Infrastructure Engineer",
  "Site Reliability Engineer (SRE)",
  "Kubernetes Engineer",
  "Cloud Operations Engineer",
];

const faqs = [
  {
    question: "What is the duration of DevOps with Azure training?",
    answer:
      "The DevOps with Microsoft Azure training program is planned for two months. Contact the training team to confirm the current batch schedule.",
  },
  {
    question: "Is the Azure DevOps training conducted online?",
    answer:
      "Yes. The program is delivered online. Contact KIDIWEBTECH for session timings and batch details.",
  },
  {
    question: "What is covered in the DevOps with Azure course?",
    answer:
      "The learning outline covers DevOps fundamentals, Microsoft Azure, Git, Azure DevOps Services, CI/CD pipelines, Infrastructure as Code, Docker, Kubernetes, monitoring, security and automation.",
  },
  {
    question: "Who can join this DevOps training?",
    answer:
      "Fresh graduates, developers, system administrators, cloud engineers, IT support professionals, QA professionals and working IT professionals can explore this program. Basic computer and IT knowledge is useful.",
  },
  {
    question: "Does the program include placement assistance?",
    answer:
      "Placement assistance is provided to eligible enrolled candidates to help them explore relevant opportunities and navigate recruitment. It does not guarantee a job, selection, salary or joining date.",
  },
  {
    question: "Is interview assistance included in the course fee?",
    answer:
      "Interview assistance is an optional paid service. It is charged separately unless it is specifically included in a selected package.",
  },
  {
    question: "What is the course fee?",
    answer:
      "The listed course fee is ₹60,000. Contact the training team to confirm the current fee and payment details before enrolment.",
  },
  {
    question: "How can I book a free demo class?",
    answer:
      "Call or WhatsApp KIDIWEBTECH at 9666545670 to ask about demo-class availability and enrolment.",
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

export default function DevOpsWithAzurePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "DevOps with Microsoft Azure Online Training",
        description:
          "A two-month online DevOps with Azure training program covering DevOps fundamentals, Azure cloud, Git, Azure DevOps, CI/CD, infrastructure as code, Docker, Kubernetes, monitoring and security.",
        url: pageUrl,
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
            name: "DevOps with Azure Training",
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
            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1800"
            alt="Cloud infrastructure and DevOps engineering environment"
            className="h-full w-full object-cover opacity-30"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/75" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Professional Corporate Training
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              DevOps with Microsoft Azure – Online Training
            </h1>
            <p className="mt-6 text-xl font-semibold text-blue-100 md:text-2xl">
              Become a Job-Ready Azure DevOps Engineer with Real-Time Industry
              Training
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Learn how modern IT organisations develop, deploy, automate and
              manage applications using DevOps practices, Microsoft Azure cloud
              services and industry-standard tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white">
              {[
                "2 Months",
                "Online Training",
                "Practical Learning",
                "₹60,000",
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
                message="I want to enrol in DevOps with Microsoft Azure training. Please share the details."
              />
              <a
                href={`${whatsappBase}%20I%20would%20like%20to%20book%20a%20free%20demo%20class.`}
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
            <p className="mt-4 text-4xl font-extrabold">2 Months</p>
            <p className="mt-1 text-slate-300">
              Online DevOps with Azure training
            </p>
            <div className="my-6 h-px bg-white/20" />
            <div className="flex items-end justify-between gap-3">
              <span className="text-slate-300">Course fee</span>
              <span className="text-3xl font-extrabold">₹60,000</span>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Learn cloud, CI/CD, automation and container technologies. Contact
              the training team to confirm the next batch and schedule.
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
            eyebrow="DevOps & Microsoft Azure"
            title="Build Practical Skills in DevOps and Azure Cloud"
            description="Want to build a successful career in DevOps and Microsoft Azure? Learn the tools, workflows and cloud concepts used to build, deploy, automate and manage modern applications."
          />
          <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              KIDIWEBTECH's DevOps with Azure Online Training Program is
              designed to introduce learners to modern DevOps practices and
              Microsoft Azure cloud services. The two-month program combines
              foundational concepts with practical insights, guided exercises,
              demonstrations and real-world scenarios.
            </p>
            <p>
              Learn from real-time working professionals who share industry
              concepts, implementation approaches and examples of how DevOps
              teams collaborate in corporate environments. The objective is not
              only to learn tools, but also to understand how software delivery
              and cloud operations work together.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
              alt: "Software engineers collaborating on development work",
              title: "DevOps Collaboration",
            },
            {
              src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
              alt: "Global cloud computing network",
              title: "Azure Cloud",
            },
            {
              src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900",
              alt: "Data centre servers and cloud infrastructure",
              title: "Cloud Infrastructure",
            },
            {
              src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
              alt: "Application monitoring analytics dashboard",
              title: "Monitoring & Automation",
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

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Our Azure DevOps Training?"
            title="Learn DevOps Tools Through Industry-Oriented Training"
            description="Build an understanding of modern cloud and software delivery workflows through guided online learning."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Learn from Working Professionals",
                text: "Gain practical insights from trainers with real-time IT industry experience and knowledge of current DevOps practices.",
              },
              {
                title: "Real-Time Industry Concepts",
                text: "Understand application deployment, infrastructure automation, CI/CD pipelines and cloud operations.",
              },
              {
                title: "Hands-On Practical Training",
                text: "Get guided exposure to Azure DevOps tools, Git, YAML pipelines, Docker, Kubernetes and related technologies.",
              },
              {
                title: "Placement Assistance",
                text: "Eligible enrolled candidates receive support to explore relevant DevOps and Azure job opportunities.",
              },
              {
                title: "Optional Interview Assistance",
                text: "Additional technical interview preparation, mock interviews and scenario-based guidance are available at an extra cost.",
              },
              {
                title: "Flexible Online Classes",
                text: "Learn online from your location. Contact the training team for batch timings and session details.",
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
            title="DevOps with Azure Course Details"
            description="Review the program information and contact the training team for the next batch."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Duration", "2 Months"],
              ["Training Mode", "Online"],
              ["Learning", "Practical Concepts"],
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
            title="Complete DevOps with Azure Training Syllabus"
            description="Explore the major learning areas, tools and technologies covered in the course outline."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <article
                key={module.number}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={module.image}
                  alt={module.alt}
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

      {/* INDUSTRY EXPOSURE */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Real-Time Working Concepts
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Understand How DevOps Works in Actual IT Companies
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Learn how DevOps engineers handle day-to-day responsibilities in
              enterprise IT environments. Explore common workflows, cloud
              deployments, automation practices and production support concepts.
            </p>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
              alt="Technology team collaborating on software and cloud projects"
              loading="lazy"
              className="mt-8 h-72 w-full rounded-3xl object-cover"
            />
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-sm md:p-9">
            <CheckList items={industryTopics} />
            <p className="mt-6 text-sm leading-7 text-slate-500">
              Training demonstrations are based on industry practices. Access to
              confidential employer systems, production environments or
              proprietary company projects is not promised.
            </p>
          </div>
        </div>
      </section>

      {/* HANDS-ON LEARNING */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:order-1 md:p-9">
            <CheckList items={practicalTopics} />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Hands-On Practical Learning
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Learn by Practising DevOps and Azure Workflows
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              The training approach focuses on guided practical exposure.
              Understand how cloud resources, source code, automated
              deployments, containers and monitoring fit into a DevOps workflow.
            </p>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
              alt="IT professionals working together on practical technology tasks"
              loading="lazy"
              className="mt-8 h-72 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Can Join DevOps with Azure Training?"
            description="The program is suitable for learners who want to understand DevOps practices, cloud services and automation workflows."
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
                Candidates with basic computer and IT knowledge can start with
                the fundamentals. Prior DevOps experience is not stated as a
                requirement for this program.
              </p>
            </div>
            <CheckList items={audience} />
          </div>
        </div>
      </section>

      {/* PLACEMENT */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Career Support"
            title="100% Placement Assistance"
            description="From training to career opportunities, we support eligible candidates as they explore relevant DevOps and Azure roles."
          />
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="leading-8 text-slate-600">
                We understand that finding the right job opportunity is an
                important part of a career journey. Our placement assistance
                program is designed to support eligible candidates after
                training completion and help them prepare to pursue relevant
                opportunities.
              </p>
              <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                100% placement assistance means placement support for all
                eligible enrolled candidates. It does not guarantee employment,
                job selection, salary or joining date. Final selection depends
                on employer requirements and candidate performance.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <CheckList items={placementSupport} />
            </div>
          </div>
        </div>
      </section>

      {/* CAREER ROLES */}
      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Career Opportunities"
            title="Job Roles You Can Explore After Training"
            description="Build the skills and understanding that can help you pursue entry-level and experienced DevOps and cloud career paths."
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
            Career roles listed here are for guidance only. Actual opportunities
            depend on your skills, experience, location and employer
            requirements.
          </p>
        </div>
      </section>

      {/* OPTIONAL INTERVIEW ASSISTANCE */}
      <section className="bg-slate-950 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Optional Paid Service
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
                Interview Assistance
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Prepare for technical interviews with additional guidance,
                scenario-based discussions and mock interview practice. This is
                an optional service available at an extra cost.
              </p>
              <p className="mt-5 rounded-xl border border-white/15 bg-white/10 p-4 text-sm leading-7 text-slate-300">
                Interview assistance is not included in the standard training
                fee unless specifically mentioned in the selected package.
                Contact the team to confirm service charges and availability.
              </p>
              <div className="mt-7">
                <WhatsAppButton
                  label="Ask About Interview Assistance"
                  message="Please share details and charges for optional DevOps interview assistance."
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white p-7">
              <CheckList items={interviewSupport} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about the DevOps with Microsoft Azure online training program."
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
            Ready to Start Your DevOps with Azure Journey?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Speak with the KIDIWEBTECH training team about the next batch,
            session timings, course fee and demo-class availability.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Enroll Now"
              message="I want to enrol in DevOps with Microsoft Azure training. Please share the details."
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
