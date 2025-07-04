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

      {/* Related Content Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
          Why Choose KIDIWEBTECH for Your Digital Journey?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-base leading-relaxed">
          <p>
            At <strong>KIDIWEBTECH</strong>, we build tools that go beyond just
            aesthetics — they’re designed to perform. Whether you're a startup
            building your first digital footprint or an enterprise scaling
            globally, our strategies are customized for growth.
          </p>
          <p>
            Our developers, marketers, and designers collaborate to craft
            seamless user experiences using Next.js, WordPress, React Native,
            and other modern frameworks. Everything we build is responsive,
            fast-loading, and optimized for SEO.
          </p>
          <p>
            We integrate technical SEO from the beginning — structured data,
            keywords, page speed, and accessibility — to ensure your brand gets
            discovered on Google.
          </p>
          <p>
            Most importantly, we don’t just deliver a project — we become your
            long-term growth partner. Innovation, transparency, and performance
            drive every project we take on.
          </p>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
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
