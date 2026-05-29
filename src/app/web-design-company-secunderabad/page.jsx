import Link from "next/link";

export const metadata = {
  title:
    "Web Design Company Secunderabad | Website Development Company Secunderabad",
  description:
    "KidiWebTech is a trusted web design company in Secunderabad offering website design, website development, ecommerce solutions, SEO services and digital marketing for local businesses.",
};

export default function WebDesignSecunderabad() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Web Design Company in Secunderabad
          </h1>

          <p className="text-xl max-w-3xl leading-8">
            Looking for a professional website design company in Secunderabad?
            KidiWebTech helps businesses build modern, responsive and
            SEO-friendly websites that increase visibility and generate leads.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold"
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
            Website Development Services in Secunderabad
          </h2>

          <p className="text-gray-600 leading-8">
            We create custom websites designed for growth. Whether you need a
            business website, ecommerce store, portfolio website or custom web
            application, our team delivers high-quality solutions tailored to
            your business goals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Business Website Design",
              "Corporate Website Development",
              "WordPress Development",
              "Shopify Development",
              "Ecommerce Website Design",
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
          <h2 className="text-4xl font-bold mb-10">Industries We Serve</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Healthcare",
              "Education",
              "Real Estate",
              "Retail",
              "Restaurants",
              "Startups",
              "IT Companies",
              "Manufacturing",
            ].map((industry) => (
              <div key={industry} className="border rounded-xl p-5 text-center">
                {industry}
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
              "Custom Website Solutions",
              "SEO Friendly Development",
              "Fast Loading Websites",
              "Responsive Design",
              "Affordable Pricing",
              "Expert Support Team",
            ].map((item) => (
              <div key={item} className="bg-white p-5 rounded-lg shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Helping Businesses Across Secunderabad
          </h2>

          <p className="text-gray-600 leading-8">
            We work with local businesses, hospitals, schools, restaurants,
            retailers, startups and corporate organizations throughout
            Secunderabad and surrounding areas to create powerful online
            experiences.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-xl">
                How much does website design cost in Secunderabad?
              </h3>
              <p className="text-gray-600 mt-2">
                Pricing depends on your project requirements, features and
                design complexity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Do you provide ecommerce website development?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, we develop Shopify, WooCommerce and custom ecommerce
                websites.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Do you offer SEO services?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, we provide Local SEO, Technical SEO and Digital Marketing
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>

          <div className="flex flex-wrap gap-4">
            <Link href="/seo-services-hyderabad">SEO Services Hyderabad</Link>

            <Link href="/digital-marketing-company-hyderabad">
              Digital Marketing Hyderabad
            </Link>

            <Link href="/web-design-company-banjara-hills">
              Web Design Company Banjara Hills
            </Link>

            <Link href="/web-design-company-kukatpally">
              Web Design Company Kukatpally
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
