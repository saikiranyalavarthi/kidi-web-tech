"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentPage() {
  const title = "Web Development Company in Hyderabad | KIDIWEBTECH";
  const description =
    "Get custom web development services in Hyderabad from KIDIWEBTECH. From static sites to complex web apps, we deliver fast, scalable, and SEO-friendly web solutions.";
  const keywords = [
    "Web Development Hyderabad",
    "Website Development Services",
    "Full Stack Web Development",
    "Frontend Backend Developer Hyderabad",
    "KIDIWEBTECH Web Design",
    "Custom Web App Development",
    "SEO Friendly Websites",
  ];

  return (
    <main className="bg-gray-50 text-gray-900 py-12 px-4 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {/* 🔥 Gradient Heading */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Web Development Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Web Development Services
        </nav>
      </div>

      {/* Main Content */}
      <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-indigo-700">
        Web Development
      </h2>

      <p className="text-lg mb-6 leading-relaxed">
        Web development, also known as website development, refers to the
        creation and maintenance of websites. It usually focuses on coding and
        functionality rather than design. Whether you&apos;re launching a simple
        static website or a full-scale web application, web development ensures
        everything works smoothly under the hood.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        It encompasses essential tasks such as content management, responsive
        front-end design, backend APIs, security, and performance tuning — all
        crucial for a successful online presence.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
        Web Development Company in Hyderabad
      </h3>

      <p className="mb-4 text-gray-700">
        Web development involves several steps and phases:
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Project definition &amp; scope</li>
        <li>Visual design &amp; UI planning</li>
        <li>Frontend &amp; backend development</li>
        <li>Testing and QA</li>
        <li>Deployment &amp; security configuration</li>
        <li>Ongoing maintenance &amp; optimization</li>
      </ul>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-10">
        <div className="md:w-1/2">
          <p className="mb-4 text-gray-700">
            <strong>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                KIDIWEBTECH
              </span>
            </strong>{" "}
            — one of the best digital marketing and development agencies in
            Hyderabad — builds everything from e-commerce stores and CMS
            platforms to SaaS tools and custom portals. Whether you need a
            dynamic business site or a complex web app, we deliver it.
          </p>
          <p className="text-gray-700">
            Our team of skilled developers integrates cutting-edge technologies,
            frameworks, and tools to ensure your website is secure, fast,
            mobile-friendly, and easy to scale.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/image18.jpg"
            alt="Web Development"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Themed Paragraph */}
      <div className="mb-10 text-gray-700 text-lg leading-relaxed">
        <p>
          A good website isn&apos;t just code — it&apos;s a business asset. At{" "}
          <strong>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
              KIDIWEBTECH
            </span>
          </strong>
          , we combine strategy, design, and development to create web
          experiences that not only look good but perform exceptionally. From
          optimizing site speed and SEO to ensuring user-friendly interfaces and
          backend efficiency, we cover it all. Whether you&apos;re a startup or
          an enterprise, we offer end-to-end solutions tailored to your goals.
          We prioritize responsiveness, clean-code architecture, and
          cross-browser compatibility to help your brand scale fast. Our
          solutions are future-proof and built with your growth in mind.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/contact"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Request a Web Development Proposal
        </Link>
      </div>
    </main>
  );
}
