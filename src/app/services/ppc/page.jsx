import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Pay Per Click (PPC) Advertising Services | KIDIWEBTECH Hyderabad",
  description:
    "Boost your brand with Google Ads & PPC Campaigns from KIDIWEBTECH, the best PPC company in Hyderabad. Certified Google AdWords experts. Contact now!",
  keywords: [
    "PPC Company Hyderabad",
    "Google Ads Services Hyderabad",
    "Pay Per Click Advertising",
    "Best Digital Marketing Agency in Hyderabad",
    "PPC Campaign Experts India",
    "KIDIWEBTECH SEO PPC",
    "Digital Advertising Hyderabad",
    "Google Ads Agency Hyderabad",
  ],
};

export default function PPCPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </Head>

      {/* 💡 Gradient Page Title Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Pay Per Click Advertising
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          <span className="mx-1">›</span> Pay Per Click Advertising
        </nav>
      </div>

      {/* Main Content */}
      <main className="bg-white text-gray-800 px-4 md:px-16 py-10 max-w-6xl mx-auto">
        {/* Image + Description */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          <div className="md:w-1/2">
            <Image
              src="/assets/image13.jpg"
              alt="PPC Marketing Services"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              PPC Service
            </h2>
            <p>
              PPC (Pay-Per-Click) is a fast and powerful digital marketing
              strategy that puts your brand in front of the right audience at
              the right time. Advertisers pay only when users click on their
              ads, making it one of the most measurable and budget-friendly
              methods for lead generation.
            </p>
            <p>
              As a <strong>Google-certified PPC Company in Hyderabad</strong>,{" "}
              <strong>KIDIWEBTECH</strong> builds custom ad campaigns that focus
              on results — more traffic, leads, and conversions. From Google
              Search to YouTube and social platforms, we help businesses
              dominate search rankings with targeted ads.
            </p>
          </div>
        </div>

        <section className="space-y-5 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Choose KIDIWEBTECH for PPC?
          </h2>
          <p>
            At <strong>KIDIWEBTECH</strong>, we understand that every click
            counts. Our expert marketers conduct deep keyword research, design
            persuasive ads, and fine-tune landing pages to increase ROI. Whether
            you’re a local business in Hyderabad or serving global customers,
            our PPC strategies are tailored to deliver performance.
          </p>
          <p>
            As a <strong>leading Digital Marketing Agency in Hyderabad</strong>,
            we go beyond clicks — we generate real business. With full
            transparency, weekly performance reporting, and continuous
            optimization, you get the most value from every rupee you spend.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">
            Our PPC Process Includes:
          </h2>
          <ul className="list-disc pl-6">
            <li>Keyword Research & Analysis</li>
            <li>Ad Design & Copywriting</li>
            <li>Compelling Call-To-Action (CTA) Creation</li>
            <li>Audience Targeting & Segmentation</li>
            <li>Landing Page Optimization</li>
            <li>Conversion Tracking & Analytics</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            Our Core Pay Per Click Services:
          </h3>
          <ul className="list-disc pl-6">
            <li>Google Ads Campaigns</li>
            <li>Video Advertising (YouTube)</li>
            <li>Display Ads</li>
            <li>Social Media Paid Advertising</li>
          </ul>

          <p className="mt-6">
            Whether you’re launching a new product or scaling your business
            digitally, <strong>KIDIWEBTECH</strong> helps you achieve your
            marketing goals through our high-converting PPC services. Let's
            build powerful ad strategies together and grow your business with
            confidence.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Get a Free PPC Consultation
          </a>
        </div>
      </main>
    </>
  );
}
