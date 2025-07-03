export const metadata = {
  title: "Services - KIDIWEBTECH",
  description:
    "Explore our digital marketing, app development, website development, and WordPress solutions at KIDIWEBTECH.",
};

export default function ServicesPage() {
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
          {/* Service Cards */}
          {[
            {
              title: "Digital Marketing",
              color: "indigo",
              img: "/assets/image1.jpg",
              desc: "SEO, Google Ads, social media strategies that drive visibility and results.",
            },
            {
              title: "App Development",
              color: "purple",
              img: "/assets/image2.jpg",
              desc: "Scalable, high-performance Android & iOS apps using modern frameworks.",
            },
            {
              title: "Website Development",
              color: "blue",
              img: "/assets/image3.jpg",
              desc: "Fast, SEO-friendly websites built with Next.js, React, and Tailwind CSS.",
            },
            {
              title: "WordPress Development",
              color: "indigo",
              img: "/assets/image4.jpg",
              desc: "Flexible themes, plugin development, and easy CMS solutions for all businesses.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-${service.color}-300 transition p-4 text-center`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3
                className={`text-xl font-semibold text-${service.color}-700 mb-2`}
              >
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
            At KIDIWEBTECH, we believe in crafting solutions that go beyond
            aesthetics — we build tools that perform. Whether you're a startup
            aiming to build a digital presence or an established enterprise
            seeking growth, our strategic digital services are designed to meet
            your goals efficiently and affordably.
          </p>
          <p>
            Our team of seasoned developers, marketers, and designers work in
            sync to create seamless user experiences, engaging content, and
            high-converting interfaces. We leverage industry-best frameworks
            like Next.js, React Native, and WordPress to develop robust,
            scalable products that perform well across devices and markets.
          </p>
          <p>
            With a strong focus on SEO, we ensure that your website and digital
            campaigns are not only beautiful but also visible to the right
            audience. From keyword research and analytics integration to
            technical optimizations, we cover all aspects of search engine
            marketing to keep you ahead of competitors.
          </p>
          <p>
            Most importantly, we treat every client’s business as our own. Our
            mission is not just to deliver a project but to become your
            long-term digital growth partner — supporting you with innovation,
            strategy, and results-driven execution at every stage.
          </p>
        </div>
      </section>
    </div>
  );
}
