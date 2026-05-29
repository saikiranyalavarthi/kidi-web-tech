import Link from "next/link";

export const metadata = {
  title: "Web Design Company Madhapur | Website Development Company Madhapur",
  description:
    "KidiWebTech offers professional web design, website development, ecommerce solutions, WordPress development and SEO services in Madhapur Hyderabad.",
};

export default function WebDesignMadhapur() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Web Design Company in Madhapur
          </h1>

          <p className="text-xl max-w-3xl">
            Professional website design and development services in Madhapur. We
            help startups, IT companies, ecommerce businesses and local brands
            build modern websites that generate leads and sales.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Website Development Services in Madhapur
          </h2>

          <p className="text-gray-600 leading-8">
            KidiWebTech provides custom website development solutions for
            businesses in Madhapur. Our websites are mobile-friendly,
            SEO-optimized and designed for maximum conversions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Website Design",
              "Website Development",
              "WordPress Development",
              "Shopify Development",
              "Ecommerce Development",
              "Landing Pages",
              "Website Redesign",
              "SEO Services",
              "Google Ads Management",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Helping Businesses Across Madhapur
          </h2>

          <p className="text-gray-600 leading-8">
            We work with startups, software companies, restaurants, healthcare
            clinics, educational institutes, real estate firms and ecommerce
            stores located throughout Madhapur Hyderabad.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">
                Do you build ecommerce websites?
              </h3>
              <p className="text-gray-600">
                Yes, we build Shopify, WooCommerce and custom ecommerce
                websites.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Do you provide SEO?</h3>
              <p className="text-gray-600">
                Yes, we offer Local SEO and Digital Marketing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4">
          <Link href="/seo-services-hyderabad">SEO Services Hyderabad</Link>

          <Link href="/web-design-company-hitech-city">
            Web Design Company Hitech City
          </Link>

          <Link href="/web-design-company-gachibowli">
            Web Design Company Gachibowli
          </Link>
        </div>
      </section>
    </main>
  );
}
