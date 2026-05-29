import Link from "next/link";

export const metadata = {
  title:
    "Web Design Company Kukatpally | Website Development Company Kukatpally",
  description:
    "KidiWebTech provides professional web design, website development, ecommerce solutions, SEO services and digital marketing services in Kukatpally Hyderabad.",
};

export default function WebDesignKukatpally() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Web Design Company in Kukatpally
          </h1>

          <p className="text-xl max-w-3xl">
            Looking for professional website design services in Kukatpally?
            KidiWebTech creates modern, responsive and SEO-friendly websites for
            startups, local businesses, ecommerce stores and corporate
            companies.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Website Development Company in Kukatpally
          </h2>

          <p className="text-gray-600 leading-8">
            Our team develops high-performance websites designed to improve
            visibility, generate leads and increase conversions. We build
            business websites, ecommerce stores, landing pages and custom web
            applications.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services in Kukatpally
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Business Website Design",
              "Corporate Website Development",
              "WordPress Development",
              "Shopify Development",
              "Ecommerce Websites",
              "Website Redesign",
              "Landing Page Design",
              "SEO Services",
              "Google Ads Management",
            ].map((service) => (
              <div key={service} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Industries We Serve</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Healthcare",
              "Education",
              "Real Estate",
              "Restaurants",
              "Retail Stores",
              "IT Companies",
              "Manufacturing",
              "Ecommerce",
            ].map((item) => (
              <div key={item} className="border rounded-lg p-5 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Why Choose KidiWebTech?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Custom Website Design",
              "SEO-Friendly Development",
              "Mobile Responsive Layouts",
              "Fast Loading Speed",
              "Affordable Packages",
              "Dedicated Support",
            ].map((item) => (
              <div key={item} className="bg-white p-5 rounded-lg shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-xl">
                How much does a website cost in Kukatpally?
              </h3>
              <p className="text-gray-600 mt-2">
                Website pricing depends on features, pages and project
                requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Do you provide ecommerce development?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, we develop Shopify, WooCommerce and custom ecommerce
                websites.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Do you provide SEO services?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, we provide Local SEO, Technical SEO and Digital Marketing
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4">
          <Link href="/seo-services-hyderabad">SEO Services Hyderabad</Link>

          <Link href="/digital-marketing-company-hyderabad">
            Digital Marketing Hyderabad
          </Link>

          <Link href="/web-design-company-madhapur">Web Design Madhapur</Link>

          <Link href="/web-design-company-hitech-city">
            Web Design Hitech City
          </Link>
        </div>
      </section>
    </main>
  );
}
