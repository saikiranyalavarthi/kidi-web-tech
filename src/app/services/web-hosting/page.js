"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function WebHostingPage() {
  const title = "Web Hosting Services in Hyderabad | KIDIWEBTECH";
  const description =
    "KIDIWEBTECH offers reliable web hosting services in Hyderabad including shared, cloud, and dedicated hosting. Get secure hosting, 24/7 support, and fast-loading websites.";
  const keywords = [
    "Web Hosting Hyderabad",
    "Domain Registration Hyderabad",
    "Cloud Hosting Services",
    "Dedicated Server Hosting",
    "Shared Web Hosting",
    "Website Hosting Company Hyderabad",
    "KIDIWEBTECH Hosting Services",
  ];

  return (
    <main className="bg-white text-gray-900 py-12 px-4 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {/* Gradient Page Heading */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Web Hosting Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          <span className="mx-1">›</span> Web Hosting Services
        </nav>
      </div>

      {/* Intro Section */}
      <p className="text-lg mt-10 mb-6 leading-relaxed">
        When you create a website and want the world to access it, you need web
        hosting. Web hosting is an internet service that allows individuals and
        organizations to publish their website and make it globally accessible
        via the World Wide Web. Whether you're launching a personal blog or a
        full-fledged e-commerce site, reliable hosting is the foundation.
      </p>

      {/* Service Details */}
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        Web Hosting Company in Hyderabad
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="md:w-1/2">
          <p className="mb-4 text-gray-700">
            At <strong>KIDIWEBTECH</strong>, we pride ourselves on offering
            performance-driven hosting solutions. As one of the best digital
            marketing and SEO agencies in Hyderabad, we also provide hosting and
            domain registration services, ensuring your entire web
            infrastructure is reliable, fast, and secure.
          </p>
          <p className="mb-4 text-gray-700">
            From selecting the perfect domain name to linking it with the right
            hosting plan, we guide you end-to-end. Whether you're launching your
            first site or migrating a high-traffic one, we offer unmatched
            uptime, security, and support.
          </p>
          <p className="text-gray-700">
            Our hosting plans are designed to suit startups, enterprises, and
            everything in between. We focus on speed, scalability, and
            performance so you can focus on growing your business.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/image17.jpg" // Replace with your actual image
            alt="Web Hosting Services"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Hosting Plans */}
      <h3 className="text-xl font-semibold text-indigo-600 mb-4">
        Hosting Solutions We Offer:
      </h3>

      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Dedicated Hosting</li>
        <li>Shared Web Hosting</li>
        <li>Cloud Hosting</li>
        <li>Website Builder + Hosting Bundles</li>
        <li>Domain Registration & Management</li>
      </ul>

      {/* Themed Paragraph */}
      <div className="text-gray-700 text-lg leading-relaxed mb-10">
        <p>
          Our proven hosting solutions come with enterprise-grade security,
          99.99% uptime, and 24x7 expert support. Whether you're looking for
          blazing fast load times, seamless WordPress hosting, or robust cloud
          infrastructure, <strong>KIDIWEBTECH</strong> has the tools and talent
          to support your digital goals. We also provide custom hosting plans
          tailored to your business model. No hidden charges — just transparent,
          efficient, and powerful hosting services you can trust.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Get a Hosting Plan for Your Website
        </a>
      </div>
    </main>
  );
}
