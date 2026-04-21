"use client";

import Link from "next/link";
import { useState } from "react";

export const metadata = {
  title: "Ecommerce Marketing Services India | Boost Online Sales & ROI | KidiWebTech",
  description:
    "Grow your ecommerce store with expert SEO, Google Shopping Ads, Meta Ads, email automation, CRO, and marketplace marketing. Data-driven strategies that increase traffic, conversions, and revenue. Free consultation available.",
};

export default function EcommercePage() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="py-28 px-6 text-center border-b border-white/10">
        <span className="text-yellow-400 text-sm uppercase tracking-widest">
          Performance Driven Growth
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
          Ecommerce <span className="text-yellow-400">Marketing Services</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
          Grow your online store with data-driven SEO, ads, and conversion strategies.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Free Consultation
          </Link>

          <Link
            href="#services"
            className="border border-white/20 px-6 py-3 rounded-full hover:border-yellow-400 transition"
          >
            Explore Services ↓
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <h2 className="text-3xl text-center mb-12">
          Our <span className="text-yellow-400">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:translate-y-[-6px] transition"
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-semibold text-lg text-yellow-400 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-yellow-400">{s.num}</h3>
              <p className="text-gray-400 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-24 px-6 max-w-4xl mx-auto space-y-16">

        {/* Block 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Ecommerce Marketing That <span className="text-yellow-400">Drives Sustainable Sales Growth</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            India's ecommerce market is expected to surpass $200 billion by 2026, yet the majority of online stores fail to generate consistent sales. The difference between a store that thrives and one that stagnates is not the product—it's the marketing strategy behind it. At KidiWebTech, we've spent years perfecting an integrated approach to ecommerce marketing that combines the power of organic search, paid advertising, conversion science, and customer retention to build brands that don't just sell—they scale.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            Unlike traditional marketing agencies that focus on vanity metrics, our team is laser-focused on the numbers that matter: Revenue, ROAS, and Customer Lifetime Value. Every strategy we build, every campaign we launch, and every optimisation we make is tied directly to your bottom line.
          </p>
          <p className="text-gray-400 leading-8">
            Whether you run a D2C fashion brand on Shopify, a B2B supply store on WooCommerce, or a multi-category marketplace on Magento—our ecommerce marketing services are designed to generate measurable, repeatable growth for your specific business model.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Block 2 – Ecommerce SEO */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Ecommerce SEO: <span className="text-yellow-400">Own Page One, Own the Market</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            Search Engine Optimisation for ecommerce is fundamentally different from standard SEO. Your store may have thousands of product pages, dozens of categories, and complex site architecture—all of which require specialist knowledge to optimise effectively. Our ecommerce SEO service covers every layer of your store's online presence.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            We begin with a deep technical SEO audit, identifying crawl errors, duplicate content issues, slow page speeds, and indexation problems that prevent Google from ranking your products. We fix these issues at the root, ensuring every page of your store is discoverable, fast, and structured correctly.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            Next, we conduct granular ecommerce keyword research, mapping high-commercial-intent keywords to your product pages and high-volume informational keywords to your blog and content strategy. We then optimise product titles, meta descriptions, alt tags, schema markup (Product, Review, BreadcrumbList), and internal linking structures to maximise ranking potential.
          </p>
          <p className="text-gray-400 leading-8">
            Finally, we build a content and link acquisition strategy that earns your domain the authority it needs to outrank competitors for competitive product keywords—whether you sell sarees, electronics, software, or supplements.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Block 3 – Google Shopping */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Google Shopping & Performance Max: <span className="text-yellow-400">Capture Buyers at the Moment of Intent</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            Google Shopping Ads are one of the most powerful tools available to ecommerce businesses. When someone searches "buy leather wallet online" or "best air purifier for home India," Shopping ads appear with product images, prices, and store names right at the top of the results. Our team specialises in building and optimising Shopping campaigns that generate a high ROAS from day one.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            We start by ensuring your Google Merchant Center feed is perfectly optimised—accurate titles, rich descriptions, correct GTINs, and clean product data that Google's algorithm favours for top placement. We then structure your campaigns with smart bidding strategies (Target ROAS, Maximise Conversions), audience layering, and negative keyword lists to eliminate wasted spend.
          </p>
          <p className="text-gray-400 leading-8">
            For brands ready to scale, we integrate Performance Max campaigns that leverage Google's full inventory—Search, Shopping, Display, YouTube, and Discover—with AI-driven asset optimisation. Combined with smart remarketing, our paid search strategies consistently deliver 3x–8x ROAS for ecommerce clients across categories.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Block 4 – Meta Ads */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Meta Ads for Ecommerce: <span className="text-yellow-400">Build Desire, Drive Purchase</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            Facebook and Instagram remain the most powerful platforms for ecommerce brands looking to reach new audiences at scale. With over 450 million active users in India across both platforms, Meta Ads allow you to place your products directly in front of your ideal customer—based on their interests, behaviours, demographics, and purchase intent signals.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            Our Meta Ads team builds full-funnel campaigns using the Awareness → Consideration → Conversion framework. At the top of funnel, we use broad interest targeting, lookalike audiences, and engaging video creatives to introduce your brand to new shoppers. In the middle, we retarget engaged users with carousel ads, social proof content, and UGC (user-generated content) to build trust. At the bottom of the funnel, dynamic product ads (DPA) serve personalised product recommendations to users who have already visited your store—driving them back to complete their purchase.
          </p>
          <p className="text-gray-400 leading-8">
            We also manage creative strategy and ad production, including static image ads, video ads, reels, and story formats—ensuring your brand stands out in a crowded feed and drives profitable clicks.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Block 5 – CRO */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Conversion Rate Optimisation: <span className="text-yellow-400">Squeeze More Revenue from Existing Traffic</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            Driving traffic to your store is only half the equation. If your ecommerce conversion rate is below 2%—the industry average—you are leaving significant revenue on the table. CRO is the process of systematically improving your website experience to turn more visitors into paying customers without spending an extra rupee on advertising.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            Our CRO team analyses your store using heatmaps, session recordings, Google Analytics funnel reports, and qualitative customer surveys to identify exactly where shoppers are dropping off. Common issues we uncover include: confusing navigation, slow product image loading, lack of trust signals, complicated checkout flows, poor mobile UX, and weak call-to-action copy.
          </p>
          <p className="text-gray-400 leading-8">
            We then design and execute A/B tests to validate improvements before rolling them out site-wide. Our CRO interventions typically include product page redesigns, urgency triggers (low stock alerts, countdown timers), trust badge placement, one-click checkout optimisation, and personalised product recommendation widgets—all proven to lift conversion rates by 25%–80% within 60–90 days.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Block 6 – Email */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Email Marketing Automation: <span className="text-yellow-400">Your Highest-ROI Retention Channel</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            Email marketing consistently delivers the highest return on investment of any digital marketing channel—averaging ₹3,600 for every ₹100 spent globally. For ecommerce businesses, a well-built email automation system is the difference between a one-time buyer and a loyal customer who orders again and again.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            We build and manage complete email automation ecosystems for your store, including: Welcome Sequences that introduce your brand and drive the first purchase; Abandoned Cart Flows that recover 15%–25% of lost carts; Browse Abandonment emails that re-engage window shoppers; Post-Purchase Flows that upsell, cross-sell, and collect reviews; Win-Back Campaigns that reactivate dormant customers; and VIP & Loyalty programmes that reward your best buyers.
          </p>
          <p className="text-gray-400 leading-8">
            We work with Klaviyo, Mailchimp, Omnisend, and other leading email platforms, and every campaign is designed with mobile-first templates, personalised dynamic content, and strategic send-time optimisation for maximum open and click rates.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Block 7 – Marketplace */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Marketplace Marketing: <span className="text-yellow-400">Dominate Amazon, Flipkart & Beyond</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            Over 60% of ecommerce searches in India begin on a marketplace rather than Google. If your products are listed on Amazon, Flipkart, Meesho, or Myntra without proper optimisation, you are effectively invisible to the majority of potential buyers. Our marketplace marketing service ensures your products are discovered, clicked, and purchased at scale.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            We optimise your product listings with keyword-rich titles, compelling bullet points, enhanced brand content (A+ content), and high-quality images that pass marketplace quality checks and outperform competitor listings. We manage Sponsored Products, Sponsored Brands, and Sponsored Display ad campaigns on Amazon with granular targeting, bid management, and weekly performance reporting.
          </p>
          <p className="text-gray-400 leading-8">
            We also implement ethical review generation strategies, monitor seller health metrics, and advise on pricing, inventory, and Deal of the Day applications to maximise your marketplace BSR (Best Seller Rank) and long-term brand presence.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Block 8 – Why KidiWebTech */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Why Choose KidiWebTech as Your <span className="text-yellow-400">Ecommerce Marketing Partner?</span>
          </h2>
          <p className="text-gray-400 leading-8 mb-4">
            There is no shortage of digital marketing agencies in India. What sets KidiWebTech apart is our unwavering focus on ecommerce specifically—every strategist, every copywriter, and every analyst on our team has been trained to think in terms of product margins, cart values, and customer lifetime revenue. We don't run generic campaigns; we build growth systems tailored to your category, your customers, and your competitive landscape.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            Our clients span fashion, beauty, home décor, electronics, food & beverage, health & wellness, industrial supplies, and more. We have managed ecommerce marketing budgets ranging from ₹50,000/month to ₹50 lakhs/month, and our results speak for themselves: an average 300% increase in revenue within 12 months for clients who adopt our full-stack approach.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            We operate with full transparency. You own all your ad accounts, all your data, and all your creative assets. Our monthly reports break down every rupee spent and every rupee earned. And with a dedicated account manager assigned to every client, you'll always know exactly what's happening with your campaigns.
          </p>
          <p className="text-gray-400 leading-8">
            If you are ready to stop guessing and start growing, we invite you to schedule a free 30-minute strategy call with our ecommerce marketing specialists. We will audit your current store performance, identify your biggest growth opportunities, and show you exactly what a tailored marketing strategy could achieve for your business—no fluff, no jargon, just a clear roadmap to more sales.
          </p>
        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/5">
        <h2 className="text-3xl text-center mb-10">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          {faqs.map((f, i) => (
            <FAQ key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Grow Your <span className="text-yellow-400">Online Store?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Let's build a data-driven ecommerce marketing strategy that turns visitors into loyal, repeat customers—and your store into a brand.
        </p>

        <Link
          href="/contact"
          className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Start Now
        </Link>
      </section>

    </div>
  );
}

/* DATA */
const services = [
  { icon: "🔍", title: "Ecommerce SEO", desc: "Rank your product and category pages on Google's first page with technical SEO, keyword research, and schema markup." },
  { icon: "🛒", title: "Google Shopping Ads", desc: "Drive high-intent buyers to your store with expertly managed Shopping and Performance Max campaigns." },
  { icon: "📱", title: "Meta Ads", desc: "Run full-funnel Facebook and Instagram campaigns with dynamic product ads, retargeting, and lookalike audiences." },
  { icon: "📈", title: "Conversion Rate Optimisation", desc: "Increase sales from existing traffic with A/B testing, UX improvements, and checkout optimisation." },
  { icon: "📧", title: "Email Marketing Automation", desc: "Recover abandoned carts and build repeat buyers with automated welcome, cart, and win-back flows." },
  { icon: "🏪", title: "Marketplace Marketing", desc: "Dominate Amazon, Flipkart, and Meesho with optimised listings, sponsored ads, and review strategies." },
];

const stats = [
  { num: "300%", label: "Average ROI Increase" },
  { num: "150+", label: "Ecommerce Brands Grown" },
  { num: "40%", label: "Lower Cost Per Acquisition" },
  { num: "98%", label: "Client Retention Rate" },
];

/* FAQ */
function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left"
      >
        <span>{q}</span>
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && <p className="text-gray-400 mt-2 text-sm leading-7">{a}</p>}
    </div>
  );
}

const faqs = [
  {
    q: "How long does ecommerce SEO take to show results?",
    a: "Most clients see measurable organic traffic improvements within 90–120 days. Significant revenue impact from SEO typically becomes clear between months 4–6, with compounding growth thereafter as domain authority builds.",
  },
  {
    q: "Do you work with Shopify, WooCommerce, and custom stores?",
    a: "Yes. Our ecommerce marketing team has hands-on experience with Shopify, WooCommerce, Magento, BigCommerce, and custom-built storefronts across all major industries and product categories.",
  },
  {
    q: "What is your minimum budget for Google or Meta Ads?",
    a: "We recommend a minimum ad spend of ₹30,000/month for Google Ads and ₹20,000/month for Meta Ads to generate meaningful data and optimisation opportunities. Our management fee is charged separately and includes full campaign setup, creative, and reporting.",
  },
  {
    q: "How do you measure ecommerce campaign success?",
    a: "We track ROAS (Return on Ad Spend), revenue, CPA (Cost Per Acquisition), conversion rate, organic traffic, and keyword rankings. You receive a live dashboard and a detailed monthly report that clearly shows what's working and where to scale.",
  },
  {
    q: "Can you help with marketplace marketing on Amazon India or Flipkart?",
    a: "Absolutely. We offer full-service marketplace marketing including listing optimisation, sponsored product ads, A+ content, and review growth strategies for Amazon India, Flipkart, Meesho, and Myntra.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes! We offer a complimentary 30-minute strategy call where we review your store, identify quick-win opportunities, and outline a clear growth plan—no obligation required.",
  },
];