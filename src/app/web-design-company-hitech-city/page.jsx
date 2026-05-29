import Link from "next/link";

export const metadata = {
  title:
    "Web Design Company Hitech City | Website Development Services Hitech City",
  description:
    "Looking for a web design company in Hitech City? KidiWebTech offers website design, web development, ecommerce solutions, WordPress development, SEO, and digital marketing services.",
  keywords: [
    "web design company hitech city",
    "website development company hitech city",
    "website designers hitech city",
    "web development hitech city",
    "wordpress development hitech city",
    "ecommerce website development hitech city",
  ],
};

export default function WebDesignHitechCity() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web Design Company in Hitech City
          </h1>

          <p className="text-lg md:text-xl max-w-3xl">
            KidiWebTech provides professional website design and development
            services in Hitech City for startups, IT companies, ecommerce
            businesses, and local brands.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Get Free Quote
            </Link>

            <Link
              href="/portfolio"
              className="border border-white px-6 py-3 rounded-lg"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Website Development Company in Hitech City
          </h2>

          <p className="text-gray-600 leading-8">
            We create high-performing websites designed to generate leads,
            increase sales, and establish a strong online presence. Whether you
            need a business website, ecommerce store, or custom web application,
            our team delivers modern and SEO-friendly solutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Web Design Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Business Website Design",
              "Corporate Website Development",
              "Ecommerce Website Development",
              "WordPress Development",
              "Shopify Development",
              "Landing Page Design",
              "Website Redesign",
              "Custom Web Applications",
              "SEO Friendly Websites",
            ].map((service) => (
              <div key={service} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Why Choose KidiWebTech?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Experienced Developers",
              "SEO Optimized Websites",
              "Fast Loading Pages",
              "Mobile Responsive Design",
              "Affordable Pricing",
              "Latest Technologies",
              "Dedicated Support",
              "Local Hyderabad Expertise",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Serving Businesses Across Hitech City
          </h2>

          <p className="text-gray-700 leading-8">
            We help software companies, startups, healthcare providers,
            educational institutions, real estate businesses, and ecommerce
            brands establish a strong digital presence through professional
            website design services.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">
                How much does website design cost in Hitech City?
              </h3>
              <p className="text-gray-600 mt-2">
                Pricing depends on the website size, functionality, and business
                requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Do you provide SEO services?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, we offer Local SEO, Technical SEO, and Digital Marketing
                services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Can you redesign my website?
              </h3>
              <p className="text-gray-600 mt-2">
                Absolutely. We redesign existing websites to improve performance
                and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>

          <div className="flex flex-wrap gap-4">
            <Link href="/seo-services-hyderabad">SEO Services Hyderabad</Link>

            <Link href="/digital-marketing-company-hyderabad">
              Digital Marketing Hyderabad
            </Link>

            <Link href="/web-design-company-gachibowli">
              Web Design Company Gachibowli
            </Link>

            <Link href="/website-design-company-hyderabad">
              Website Design Company Hyderabad
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
