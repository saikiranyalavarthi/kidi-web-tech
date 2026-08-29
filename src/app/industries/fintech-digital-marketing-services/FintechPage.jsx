import Link from "next/link";

export default function FintechPage() {
  return (
    <main className="bg-white text-black">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Fintech Digital Marketing Agency
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-500 md:text-6xl">
            Fintech Digital Marketing Services in India
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-700 md:text-xl">
            Grow your fintech company with data-driven digital marketing
            strategies including SEO, paid advertising, content marketing,
            social media marketing and high-quality lead generation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Get Free Fintech Strategy
            </Link>

            <Link
              href="/case-studies"
              className="rounded-full border border-blue-500 px-8 py-3 font-semibold text-blue-500 transition hover:bg-blue-50"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            Complete Fintech Marketing Guide
          </h2>

          <p className="leading-8 text-gray-700">
            Fintech digital marketing is essential for financial technology
            businesses operating in a competitive digital market. With the
            growth of digital banking, payment platforms, financial applications
            and online investment services, fintech companies need a clear
            digital strategy to reach relevant audiences.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Customers often research financial products and services online
            before making decisions. This makes search engine optimization, paid
            advertising, useful content and trust-focused communication
            important components of fintech marketing.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY FINTECH MARKETING
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            Why Fintech Marketing is Important
          </h2>

          <p className="leading-8 text-gray-700">
            The fintech industry includes banking technology, payment solutions,
            lending platforms, investment services, insurance technology and
            many other financial products. Because customers have many choices,
            fintech companies need to clearly communicate their value and build
            trust throughout the customer journey.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            A well-planned fintech marketing strategy can help businesses
            improve online visibility, attract relevant audiences, generate
            enquiries and support customer retention.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Build brand trust and credibility",
              "Generate relevant business leads",
              "Increase qualified website traffic",
              "Improve financial product visibility",
              "Support customer acquisition",
              "Improve customer retention",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINTECH SEO
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            SEO for Fintech Companies
          </h2>

          <p className="leading-8 text-gray-700">
            Fintech SEO helps financial technology businesses improve their
            organic visibility for relevant searches. Customers may search for
            financial products, payment solutions, investment information,
            lending options, insurance products and technology solutions before
            choosing a provider.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            A fintech SEO strategy should combine technical optimization, useful
            content, keyword research, internal linking and authority-building
            activities. Financial topics also require particularly careful
            attention to accuracy, transparency and trust.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-blue-500">
            Fintech SEO Services
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Fintech keyword research",
              "Technical SEO",
              "On-page SEO",
              "Financial content strategy",
              "Product and service page optimization",
              "Internal linking",
              "Local SEO where relevant",
              "SEO performance analysis",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PAID ADS
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            Paid Advertising for Fintech Companies
          </h2>

          <p className="leading-8 text-gray-700">
            Paid advertising can help fintech businesses reach relevant
            audiences through search engines, social platforms and other
            advertising channels. Campaign structure should be aligned with the
            product, audience, location, landing page and applicable advertising
            requirements.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Google Ads and social advertising can be used for awareness,
            qualified traffic, enquiries and other measurable business
            objectives where the financial product and advertising platform
            policies allow it.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Google Search Ads",
              "Display Advertising",
              "YouTube Advertising",
              "Social Media Advertising",
              "Remarketing",
              "Lead Generation Campaigns",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL MEDIA
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            Social Media Marketing for Fintech
          </h2>

          <p className="leading-8 text-gray-700">
            Social media can help fintech brands communicate financial concepts,
            explain products, share company updates and build relationships with
            their audiences.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "LinkedIn",
                text: "Build B2B visibility, share company insights and communicate with professional audiences.",
              },

              {
                title: "Instagram",
                text: "Create educational short-form content and communicate financial concepts in accessible formats.",
              },

              {
                title: "YouTube",
                text: "Publish product explainers, educational videos, interviews and financial information.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-blue-500">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT MARKETING
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            Fintech Content Marketing Strategy
          </h2>

          <p className="leading-8 text-gray-700">
            Financial products can be difficult for customers to understand.
            Content marketing gives fintech companies an opportunity to explain
            products, answer customer questions and provide useful information
            throughout the decision-making process.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Content should be accurate, clear and appropriate for the intended
            audience. Topics can include product explainers, financial
            education, frequently asked questions, comparisons and practical
            guides.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Financial education articles",
              "Product explainers",
              "Frequently asked questions",
              "Financial guides",
              "Comparison content",
              "Industry insights",
              "Video explainers",
              "Customer education content",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEAD GENERATION
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            Lead Generation for Financial Technology Businesses
          </h2>

          <p className="leading-8 text-gray-700">
            Fintech lead generation requires more than simply sending visitors
            to a website. Landing pages, messaging, trust elements, enquiry
            forms and conversion tracking should work together to create a clear
            customer journey.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Fintech landing pages",
              "Lead generation campaigns",
              "Conversion tracking",
              "Call and enquiry tracking",
              "Remarketing strategies",
              "Customer journey optimization",
              "Form optimization",
              "Analytics and reporting",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-500 md:text-4xl">
            Building Trust Through Fintech Marketing
          </h2>

          <p className="leading-8 text-gray-700">
            Trust is particularly important for financial technology businesses
            because customers may be considering services involving money,
            personal information or financial decisions.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Marketing content should clearly communicate the company, products,
            terms, support information and relevant credentials. Transparent
            communication and accurate information can help customers make more
            informed decisions.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY KIDIWEBTECH
      ===================================================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-center text-3xl font-bold text-blue-500 md:text-4xl">
            Why Choose KidiWebTech for Fintech Marketing?
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center leading-7 text-gray-600">
            We combine SEO, paid advertising, content, social media and
            conversion-focused strategies to create a connected digital
            marketing approach.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fintech-Focused Strategy",
                text: "Marketing activities can be aligned with financial products, target audiences and business objectives.",
              },

              {
                title: "SEO and Paid Marketing",
                text: "Combine organic search visibility with paid campaigns where appropriate.",
              },

              {
                title: "Trust-Focused Content",
                text: "Create clear and useful content that helps audiences understand fintech products and services.",
              },

              {
                title: "Lead Generation",
                text: "Build landing pages and campaigns around measurable enquiry and conversion actions.",
              },

              {
                title: "Content Strategy",
                text: "Develop educational and product-focused content based on genuine customer questions.",
              },

              {
                title: "Performance Tracking",
                text: "Use analytics and conversion data to understand marketing performance and identify opportunities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-blue-500">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-500 md:text-4xl">
            Frequently Asked Questions About Fintech Marketing
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "What fintech digital marketing services does KidiWebTech provide?",

                a: "KidiWebTech provides fintech SEO, paid advertising, content marketing, social media marketing, lead generation, conversion optimization and digital marketing strategy.",
              },

              {
                q: "How does SEO help fintech companies?",

                a: "SEO can improve organic visibility for relevant financial technology searches by optimizing website structure, useful content, technical elements and internal linking.",
              },

              {
                q: "Can fintech companies use Google Ads?",

                a: "Advertising eligibility depends on the financial product, location and applicable advertising platform policies. Where permitted, Google Ads can be used to reach relevant audiences and generate measurable traffic or enquiries.",
              },

              {
                q: "Why is content marketing important for fintech?",

                a: "Financial products can be complex. Useful content can help explain products, answer customer questions and provide information that supports informed decision-making.",
              },

              {
                q: "How can fintech companies generate qualified leads?",

                a: "Fintech businesses can combine relevant search campaigns, SEO, targeted content, landing pages, conversion tracking and appropriate remarketing strategies to generate and evaluate qualified enquiries.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-7">
                <h3 className="text-xl font-semibold text-black">{faq.q}</h3>

                <p className="mt-3 leading-7 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL LINKS
      ===================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold text-blue-500">
            Related Digital Marketing Services
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/seo-services-hyderabad"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-black transition hover:border-blue-500 hover:text-blue-500"
            >
              SEO Services
            </Link>

            <Link
              href="/digital-marketing-company-hyderabad"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-black transition hover:border-blue-500 hover:text-blue-500"
            >
              Digital Marketing
            </Link>

            <Link
              href="/google-ads-services"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-black transition hover:border-blue-500 hover:text-blue-500"
            >
              Google Ads
            </Link>

            <Link
              href="/social-media-marketing"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-black transition hover:border-blue-500 hover:text-blue-500"
            >
              Social Media Marketing
            </Link>

            <Link
              href="/content-marketing"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-black transition hover:border-blue-500 hover:text-blue-500"
            >
              Content Marketing
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-black transition hover:border-blue-500 hover:text-blue-500"
            >
              Contact KidiWebTech
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-blue-500 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Grow Your Fintech Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-50">
            Build a stronger digital presence with fintech SEO, paid
            advertising, content marketing and lead generation strategies from
            KidiWebTech.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-blue-500 transition hover:bg-gray-100"
          >
            Get Free Fintech Strategy →
          </Link>
        </div>
      </section>
    </main>
  );
}
