"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function WebDesigningPage() {
  const title = "Web Designing Company in Hyderabad | KIDIWEBTECH";
  const description =
    "KIDIWEBTECH offers modern, responsive, and interactive web design services in Hyderabad to make your brand stand out. Get stunning websites designed with UX and SEO in mind.";
  const keywords = [
    "Web Designing Hyderabad",
    "Website Design Company Hyderabad",
    "Responsive Web Design",
    "UI UX Designers Hyderabad",
    "KIDIWEBTECH Website Design",
    "Custom Web Design Services",
  ];

  return (
    <main className="bg-white text-gray-800 px-4 md:px-16 lg:px-24 py-10 max-w-7xl mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {/* 🔥 Gradient Heading */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Web Designing Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Web Designing Services
        </nav>
      </div>

      {/* Main Content */}
      <section className="mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">
          Web Designing
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          What you need is not just a beautiful website with commendable design,
          you need a website that establishes interactions with the viewer. Your
          website is the first impression for all the reputation you wish to
          hold for your brand. If your website cannot hold your viewer for more
          than 4 seconds, then you&apos;ve failed to convince that your products
          are best in class.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
          Web Designing Company in Hyderabad
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="md:w-1/2">
            <Image
              src="/assets/image16.jpg"
              alt="Web Designing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-gray-700">
              <strong>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                  KIDIWEBTECH
                </span>
              </strong>
              , being one of the best web design and SEO service providers in
              Hyderabad, understands the core vision of your business and
              ensures your website speaks to your users in both design and
              message.
            </p>
            <p className="mb-4 text-gray-700">
              Your brand needs a holistic output — from hosting to lead
              generation. That&apos;s where we bring stunning, fast, and secure
              websites that are tailored for performance, trust, and modern
              business standards.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          Users enjoy visiting websites that are visually appealing and
          intuitive to navigate. At{" "}
          <strong>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
              KIDIWEBTECH
            </span>
          </strong>
          , our creative developers deliver clean layouts and smart structure,
          helping your visitors engage, explore, and act.
        </p>
        <p className="text-gray-700 mb-4">
          Because it&apos;s not always about technical edge — it&apos;s about
          emotional touch, visual storytelling, and experience that make your
          brand unforgettable in the digital crowd.
        </p>
        <p className="text-gray-700 mb-6">
          The secret to{" "}
          <strong>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
              KIDIWEBTECH
            </span>
          </strong>
          &apos;s success is our ability to deliver agile, scalable, and
          responsive web design that gives your business a competitive
          advantage. We help your site leave a lasting first impression — with
          speed, performance, and accessibility in mind.
        </p>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Get a Free Website Design Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
