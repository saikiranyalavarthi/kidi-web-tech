import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const projects = [
    {
      title: "Vet & Meet Pet Consultation App",
      image: "/assets/image6.jpg",
      description:
        "A modern pet consultation app where pet owners can book online vet consultations via WhatsApp, integrated with a booking calendar and payment gateway.",
    },
    {
      title: "Pet Shop Ecommerce Website",
      image: "/assets/image7.jpg",
      description:
        "A fast-loading eCommerce site for pet food, accessories, and medicine using WooCommerce and custom WordPress themes.",
    },
    {
      title: "News Website",
      image: "/assets/image10.jpg",
      description:
        "A dynamic Telugu-language news website built with ReactJS and WordPress REST API, featuring category navigation, sliders, and ticker components.",
    },
    {
      title: "IT Solutions Company Site",
      image: "/assets/image8.jpg",
      description:
        "A sleek website for a tech company showcasing IT Infrastructure, SAP Services, Staffing, and Immigration Solutions using Next.js and Tailwind CSS.",
    },
    {
      title: "Coworking Space Booking App",
      image: "/assets/image9.jpg",
      description:
        "Mobile-first app and website for hourly/daily coworking space booking. Includes seat selection, map view, and testimonials.",
    },
    {
      title: "Portfolio Website",
      image: "/assets/image11.jpg",
      description:
        "A personal portfolio showcasing a developer&#39;s skills, past projects, blog, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion animations.",
    },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>KIDIWEBTECH - Projects</title>
        <meta
          name="description"
          content="Explore our recent projects including mobile apps, IT company websites, WordPress development, and SEO-friendly solutions for businesses."
        />
        <meta
          name="keywords"
          content="Web Development Projects, App Development Portfolio, SEO Case Studies, ReactJS Developers India, WordPress Website Experts, eCommerce Website Projects"
        />
        <link rel="canonical" href="https://kidiwebtech.com/projects" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Our Work &amp; Projects
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We craft digital experiences across industries. From React apps to
          WordPress-powered platforms, check out our highlights.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 pb-20">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src={proj.image}
              alt={proj.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-700 text-sm">{proj.description}</p>
          </div>
        ))}
      </section>

      {/* SEO-rich Paragraphs */}
      <section className="px-6 md:px-20 pb-20 space-y-10 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            App Development Projects
          </h2>
          <p>
            Our team at <strong>KIDIWEBTECH</strong> specializes in full-cycle{" "}
            <em>mobile app development in India</em>. We&#39;ve built medical,
            educational, and business apps that include booking flows, real-time
            notifications, payment integration, and chat. Whether you need a{" "}
            <strong>React Native app</strong> or a cross-platform Flutter app,
            we deliver performance and scale.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            News Platforms &amp; Content Sites
          </h2>
          <p>
            Our news apps are built with SEO and speed in mind. We use{" "}
            <strong>React.js + WordPress REST API</strong> to deliver smooth
            category browsing, sliders, breaking news tickers, and fast loading.
            Perfect for publishers seeking <em>custom CMS integration</em> and
            real-time updates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Coworking Space Systems
          </h2>
          <p>
            Built for freelancers and flexible workspaces, our{" "}
            <strong>coworking booking apps</strong> offer slot selection, Google
            Maps view, reviews, and testimonials. Great for commercial rental
            businesses and tech parks across India.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            SEO &amp; Digital Marketing Projects
          </h2>
          <p>
            Our <strong>SEO campaigns</strong> are results-oriented and tailored
            to your niche. From technical SEO to local business SEO and Google
            Ads, we help brands increase traffic, leads, and conversions. If
            you&#39;re searching for a <em>trusted SEO company in India</em>,
            we&#39;ve got the case studies to prove it.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Real Estate Websites &amp; Lead Funnels
          </h2>
          <p>
            Real estate agents and builders use our solutions for lead
            generation, showcasing properties with filters, videos, WhatsApp
            inquiry buttons, and multilingual landing pages. Ideal for
            international markets like{" "}
            <strong>Marbella, Dubai, and Hyderabad</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Industrial &amp; Mechanical Sites
          </h2>
          <p>
            Our B2B web platforms for mechanical and hardware industries help
            companies display their catalog, download brochures, and capture
            vendor/supplier inquiries. Optimized for performance and
            conversion-focused design.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            IT Consulting &amp; SAP Services Websites
          </h2>
          <p>
            We work with <strong>IT companies</strong> to build service-oriented
            websites for SAP, staffing, immigration support, and infrastructure
            management. Built using <em>Next.js and Tailwind CSS</em> with
            fast-loading and responsive layouts for enterprises.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Personal Portfolio Sites
          </h2>
          <p>
            Developers, designers, and freelancers love our portfolio templates
            built using <strong>Framer Motion</strong>, Tailwind, and Next.js.
            Includes animation, responsive layout, project showcase, contact
            form, and blog.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Digital Growth India for Local Businesses
          </h2>
          <p>
            Under our “<strong>Digital Growth India</strong>” program, we help
            small shops, doctors, freelancers, and consultants go online in 7
            days. Includes{" "}
            <em>WhatsApp automation, SEO landing pages, local maps listing</em>,
            and mobile-ready design.
          </p>
        </div>
      </section>
    </div>
  );
}
