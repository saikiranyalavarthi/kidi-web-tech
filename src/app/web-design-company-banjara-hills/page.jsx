import Link from "next/link";

export const metadata = {
  title:
    "Web Design Company Banjara Hills | Website Development Company Banjara Hills",
  description:
    "KidiWebTech provides professional website design, web development, ecommerce development, SEO and digital marketing services in Banjara Hills Hyderabad.",
};

export default function WebDesignBanjaraHills() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Web Design Company in Banjara Hills
          </h1>

          <p className="text-xl max-w-3xl">
            KidiWebTech helps businesses in Banjara Hills build stunning,
            high-performance websites that attract customers, generate leads,
            and grow revenue online.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Professional Website Development Services
          </h2>

          <p className="text-gray-600 leading-8">
            Our team specializes in designing responsive websites that help
            local businesses, startups, healthcare clinics, restaurants,
            educational institutions and corporate brands establish a strong
            digital presence.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Web Design Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Business Website Design",
              "Corporate Website Development",
              "WordPress Website Development",
              "Shopify Store Development",
              "Ecommerce Website Design",
              "Landing Page Design",
              "Custom Web Applications",
              "Website Maintenance",
              "SEO-Friendly Website Development",
            ].map((service) => (
              <div key={service} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Why Businesses Choose KidiWebTech
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Modern UI/UX Design",
              "Mobile Responsive Websites",
              "SEO Optimized Structure",
              "Fast Loading Pages",
              "Affordable Pricing",
              "Local Hyderabad Support",
              "Custom Development Solutions",
              "Conversion Focused Design",
            ].map((item) => (
              <div key={item} className="border p-5 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Serving Businesses Across Banjara Hills
          </h2>

          <p className="text-gray-700 leading-8">
            We work with premium brands, retail stores, healthcare providers,
            restaurants, law firms, consultants, educational institutions and
            startups throughout Banjara Hills and surrounding areas.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Benefits of Our Website Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "More Leads",
              "Better Online Visibility",
              "Improved Customer Trust",
              "Higher Conversion Rates",
              "Faster Website Speed",
              "SEO-Friendly Architecture",
            ].map((benefit) => (
              <div key={benefit} className="bg-gray-50 p-6 rounded-lg">
                {benefit}
              </div>
            ))}
          </div>
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
                How long does website development take?
              </h3>
              <p className="text-gray-600 mt-2">
                Most websites are completed within 1 to 4 weeks depending on
                project requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Do you provide SEO services?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes. We offer Local SEO, Technical SEO and Digital Marketing
                services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Can you redesign my existing website?
              </h3>
              <p className="text-gray-600 mt-2">
                Absolutely. We redesign outdated websites with modern UI and
                improved performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4">
          <Link href="/seo-services-hyderabad">SEO Services Hyderabad</Link>

          <Link href="/digital-marketing-company-hyderabad">
            Digital Marketing Hyderabad
          </Link>

          <Link href="/web-design-company-kukatpally">
            Web Design Kukatpally
          </Link>

          <Link href="/web-design-company-madhapur">Web Design Madhapur</Link>
        </div>
      </section>
    </main>
  );
}
