import Image from "next/image";

// ✅ SEO Metadata for App Router
export const metadata = {
  title: "Services | KIDIWEBTECH - SEO, Web & App Development Agency",
  description:
    "Discover tailored digital services from KIDIWEBTECH including SEO, digital marketing, app development, website design, and WordPress solutions to grow your business.",
  keywords: [
    "Digital Marketing Services",
    "SEO Company India",
    "App Development Agency",
    "Web Development Company",
    "WordPress Services",
    "Next.js Development",
    "React Development",
    "best digital marketing agency",
    "seo services in india",
    "wordpress customization agency",
    "website design company in hyderabad",
    "app developers near me",
  ],
  openGraph: {
    title: "KIDIWEBTECH Services",
    description:
      "Explore our digital marketing, app, web, and WordPress development services. Let us help you grow online.",
    url: "https://kidiwebtech.com/services",
    siteName: "KIDIWEBTECH",
    images: [
      {
        url: "https://kidiwebtech.com/assets/image1.jpg",
        width: 800,
        height: 600,
        alt: "KIDIWEBTECH Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KIDIWEBTECH Services",
    description:
      "Custom SEO, Web, and App Development Services for Businesses.",
    images: ["https://kidiwebtech.com/assets/image1.jpg"],
  },
  alternates: {
    canonical: "https://kidiwebtech.com/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Marketing",
      color: "text-indigo-700",
      hoverShadow: "hover:shadow-indigo-300",
      img: "/assets/image1.jpg",
      desc: "SEO, Google Ads, social media strategies that drive visibility and results.",
    },
    {
      title: "App Development",
      color: "text-purple-700",
      hoverShadow: "hover:shadow-purple-300",
      img: "/assets/image2.jpg",
      desc: "Scalable, high-performance Android & iOS apps using modern frameworks.",
    },
    {
      title: "Website Development",
      color: "text-blue-700",
      hoverShadow: "hover:shadow-blue-300",
      img: "/assets/image3.jpg",
      desc: "Fast, SEO-friendly websites built with Next.js, React, and Tailwind CSS.",
    },
    {
      title: "WordPress Development",
      color: "text-indigo-700",
      hoverShadow: "hover:shadow-indigo-300",
      img: "/assets/image4.jpg",
      desc: "Flexible themes, plugin development, and easy CMS solutions for all businesses.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-28 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Digital solutions tailored to your business needs — SEO, marketing,
          development, and more.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg ${service.hoverShadow} transition p-4 text-center`}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className={`text-xl font-semibold ${service.color} mb-2`}>
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
          Why Choose KIDIWEBTECH for Your Digital Journey?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-base leading-relaxed">
          <p>
            <strong>KIDIWEBTECH</strong> is a trusted{" "}
            <em>digital marketing agency in India</em> offering end-to-end
            services to elevate your online brand. Our expertise includes SEO
            optimization, pay-per-click advertising, website design, and mobile
            app development tailored for startups and established businesses.
          </p>
          <p>
            We use modern tools like Next.js, WordPress, React, and Tailwind CSS
            to build <strong>high-performance websites</strong> and
            applications. Whether you're searching for the{" "}
            <em>best digital marketing company near you</em> or a{" "}
            <strong>custom web development firm</strong>, our team is equipped
            to deliver top-notch results.
          </p>
          <p>
            If you're a small business looking to rank on Google, we provide{" "}
            <strong>local SEO services</strong> that target your region and
            audience. For larger organizations, we deliver scalable enterprise
            solutions backed by analytics, user behavior tracking, and
            automation.
          </p>
          <p>
            Our <strong>SEO services in India</strong> include keyword research,
            content marketing, backlink building, and technical audits —
            everything needed to outrank your competitors and gain organic
            traffic. We also specialize in{" "}
            <strong>WordPress customization</strong> with secure hosting and
            on-page SEO integrations.
          </p>
          <p>
            From lead generation to sales conversion, our digital services are
            built to deliver ROI. We're not just developers or marketers — we're
            long-term partners in your business growth journey.
          </p>
        </div>
      </section>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "KIDIWEBTECH Digital Services",
            provider: {
              "@type": "Organization",
              name: "KIDIWEBTECH",
              url: "https://kidiwebtech.com",
            },
            serviceType:
              "Digital Marketing, App Development, Web Development, WordPress Development",
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            description:
              "We offer expert digital services including SEO, app & website development, and WordPress customization to grow your online presence.",
          }),
        }}
      />
    </div>
  );
}
