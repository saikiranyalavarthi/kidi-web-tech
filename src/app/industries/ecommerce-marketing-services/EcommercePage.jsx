"use client";

import Link from "next/link";

export default function EcommercePage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="py-24 text-center px-6">
        <p className="text-teal-400 uppercase tracking-widest text-sm mb-4 font-semibold">
          India's Trusted Ecommerce Growth Partner
        </p>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Ecommerce Marketing Services in India
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Scale your online store with powerful ecommerce marketing strategies —
          from SEO and Google Shopping Ads to conversion rate optimization and
          social commerce. We help Indian ecommerce brands grow faster with
          measurable results.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-teal-500 hover:bg-teal-400 transition px-8 py-3 rounded-full font-semibold"
          >
            Get Free Ecommerce Strategy
          </Link>
          <Link
            href="/case-studies"
            className="border border-gray-600 hover:border-teal-500 transition px-8 py-3 rounded-full text-gray-300"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-gray-800 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Ecommerce Brands Scaled" },
            { value: "8x", label: "Average ROAS Delivered" },
            { value: "₹200Cr+", label: "Revenue Generated for Clients" },
            { value: "12+", label: "Years of Ecommerce Expertise" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-teal-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-300 leading-relaxed text-[17px]">
        {/* Section 1 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            What Is Ecommerce Marketing and Why Does It Matter in India?
          </h2>
          <p>
            Ecommerce marketing is the practice of using digital channels —
            including search engines, social media, email, and paid advertising
            — to drive traffic to an online store, convert that traffic into
            buyers, and retain those buyers for repeat purchases. In India,
            ecommerce marketing has become one of the most critical growth
            levers for businesses of all sizes, from D2C startups to large
            retail chains going digital.
          </p>
          <p>
            India's ecommerce market is projected to reach $350 billion by 2030,
            driven by rising smartphone penetration, affordable data, and
            growing consumer confidence in online shopping. With millions of
            products competing for attention across platforms like Google,
            Amazon, Flipkart, and Instagram, businesses that invest in
            structured ecommerce marketing gain a decisive advantage over those
            that don't.
          </p>
          <p>
            The challenge isn't just driving traffic — it's attracting the{" "}
            <em>right</em> traffic at the <em>right</em> moment with the{" "}
            <em>right</em> message. That's where a well-executed ecommerce
            marketing strategy becomes the difference between a store that
            stagnates and one that scales profitably month over month.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            The Core Pillars of a Winning Ecommerce Marketing Strategy
          </h2>
          <p>
            A robust ecommerce marketing strategy is not a single tactic — it's
            an integrated system of channels working together to attract,
            convert, and retain customers. At KidiWebTech, we build ecommerce
            marketing frameworks around five core pillars:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {[
              {
                title: "1. Search Engine Optimization (SEO)",
                desc: "Organic search is the highest-intent, lowest-cost traffic source. SEO ensures your products are visible when customers are actively looking to buy.",
              },
              {
                title: "2. Performance Marketing (Paid Ads)",
                desc: "Google Shopping, Search, and Meta ads drive immediate, targeted traffic. The right bid strategies and creatives determine your profitability.",
              },
              {
                title: "3. Conversion Rate Optimization (CRO)",
                desc: "Traffic without conversions is wasted spend. CRO improves your product pages, checkout flow, and UX to turn more visitors into buyers.",
              },
              {
                title: "4. Social Commerce & Influencer Marketing",
                desc: "Instagram, YouTube, and Meesho-style social selling are reshaping how Indians discover and buy products. We build your presence across these channels.",
              },
              {
                title: "5. Email & WhatsApp Marketing",
                desc: "Retention is more profitable than acquisition. Automated email and WhatsApp journeys bring customers back, recover abandoned carts, and drive repeat orders.",
              },
              {
                title: "6. Content & Marketplace Marketing",
                desc: "From blog content that ranks on Google to A+ content on Amazon and Flipkart, we help you win across all selling surfaces.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Ecommerce SEO: Ranking Your Store on Google in India
          </h2>
          <p>
            Search engine optimization for ecommerce is fundamentally different
            from SEO for blogs or service businesses. Ecommerce SEO involves
            optimizing thousands of product pages, managing dynamic URLs,
            handling duplicate content across variants, and building category
            page authority — all while ensuring a fast, mobile-first shopping
            experience.
          </p>
          <p>
            In India, where a large share of ecommerce browsing happens on
            mobile devices with varying internet speeds, technical SEO is
            especially critical. Google's Core Web Vitals — metrics like Largest
            Contentful Paint (LCP), First Input Delay (FID), and Cumulative
            Layout Shift (CLS) — directly impact both rankings and user
            experience.
          </p>
          <h3 className="text-xl font-semibold text-white mt-4">
            Our Ecommerce SEO Process
          </h3>
          <ul className="space-y-3 list-none">
            {[
              {
                step: "Keyword Research",
                desc: "We identify high-intent, transactional keywords across product, category, and informational queries. We map keywords to the right page type — product page, category page, or blog — to avoid cannibalization.",
              },
              {
                step: "Product Page Optimization",
                desc: "Every product page is treated as a landing page. We optimize title tags, meta descriptions, H1s, product descriptions, image alt text, and structured data (schema markup) for rich snippets like price, ratings, and availability.",
              },
              {
                step: "Category Page SEO",
                desc: "Category pages often have the highest commercial intent but are frequently ignored. We add unique introductory content, internal linking, and faceted navigation management to maximize their ranking potential.",
              },
              {
                step: "Technical SEO Audit",
                desc: "Crawl errors, broken links, duplicate content, slow page speed, improper canonical tags, and XML sitemap issues are all addressed through our comprehensive technical audit.",
              },
              {
                step: "Content Marketing for SEO",
                desc: "Informational blog content targeting 'best [product]', 'how to choose [product]', and '[product] vs [product]' queries builds topical authority and drives top-of-funnel organic traffic.",
              },
              {
                step: "Link Building",
                desc: "We earn backlinks from relevant Indian media, industry blogs, and partner websites to build domain authority over time.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="text-teal-400 mt-1">✦</span>
                <span>
                  <strong className="text-white">{item.step}:</strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Google Ads for Ecommerce: Driving High-Intent Traffic That Converts
          </h2>
          <p>
            Google Ads remains one of the most effective paid channels for
            ecommerce businesses in India. The platform lets you target
            customers at the exact moment they're searching for your products —
            making it a high-intent, high-conversion channel when managed
            correctly.
          </p>
          <p>
            However, many ecommerce businesses waste significant budget on
            Google Ads due to poor campaign structure, inefficient bidding, and
            weak product feed optimization. At KidiWebTech, we take a data-first
            approach to Google Ads management that maximizes your return on ad
            spend (ROAS).
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            Google Shopping Ads (Performance Max)
          </h3>
          <p>
            Google Shopping campaigns — now powered by Performance Max — display
            your products directly in Google Search results with images, prices,
            and store names. For ecommerce, Shopping ads typically outperform
            text ads in both click-through rate and conversion rate. We optimize
            your Google Merchant Center product feed — titles, descriptions,
            categories, GTINs, and pricing — to ensure maximum impressions for
            the most profitable products.
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            Google Search Ads for Ecommerce
          </h3>
          <p>
            Search ads complement Shopping campaigns by capturing branded
            queries, competitor searches, and long-tail product searches that
            Shopping doesn't always catch. We structure campaigns with tight ad
            groups, highly relevant ad copy, and strong negative keyword lists
            to eliminate wasted spend.
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            Remarketing & Dynamic Remarketing
          </h3>
          <p>
            Only a small percentage of visitors convert on their first visit.
            Remarketing campaigns re-engage visitors who viewed products, added
            items to cart, or started checkout — dramatically improving your
            overall conversion rate. Dynamic remarketing automatically shows
            users the exact products they viewed, making ads highly personalized
            and effective.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Social Media Marketing for Ecommerce in India
          </h2>
          <p>
            Social media has transformed ecommerce in India. Platforms like
            Instagram, Facebook, YouTube, and increasingly Meesho have created
            new discovery channels where consumers find, research, and buy
            products without ever visiting a traditional search engine.
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            Instagram & Facebook Advertising
          </h3>
          <p>
            Meta's advertising ecosystem offers unparalleled audience targeting
            capabilities. We build full-funnel Meta ad strategies — from
            awareness campaigns using Reels and video to conversion campaigns
            targeting warm audiences with carousel and collection ads. Our
            creative team produces thumb-stopping ad creatives tailored to
            Indian consumer preferences, festivals, and regional nuances.
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            Influencer Marketing for Ecommerce
          </h3>
          <p>
            India has one of the world's largest and most engaged influencer
            ecosystems. Micro and nano influencers (10K–500K followers)
            consistently outperform mega influencers in categories like fashion,
            beauty, home decor, food, and fitness. We identify, vet, and manage
            influencer partnerships aligned with your product category and
            target audience — tracking performance with unique discount codes,
            UTM parameters, and affiliate links.
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            YouTube Commerce
          </h3>
          <p>
            Product review videos, unboxing content, and how-to guides on
            YouTube drive significant ecommerce sales in India. YouTube Ads —
            particularly TrueView for Shopping — allow you to run video ads that
            display product cards alongside the video, making it easy for
            viewers to click and purchase directly.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Conversion Rate Optimization (CRO) for Ecommerce
          </h2>
          <p>
            Driving traffic to your ecommerce store is only half the battle. If
            your website has a poor conversion rate, you're paying for traffic
            that generates little revenue. Conversion rate optimization (CRO) is
            the systematic process of improving your website so that more
            visitors take the desired action — whether that's adding a product
            to cart, completing checkout, or signing up for a newsletter.
          </p>
          <p>
            The average ecommerce conversion rate in India ranges between 1.5%
            and 3.5%. Moving your conversion rate from 1.5% to 3% without
            increasing ad spend effectively doubles your revenue. That's the
            power of CRO.
          </p>
          <p>Our CRO approach covers:</p>
          <ul className="space-y-3 list-none">
            {[
              "Product page UX improvements — better image galleries, clear CTAs, trust badges, and social proof",
              "Checkout flow optimization — reducing steps, enabling guest checkout, and offering local payment options (UPI, wallets, EMI)",
              "Mobile-first design audits — since 70%+ of Indian ecommerce traffic comes from mobile devices",
              "A/B testing of headlines, product descriptions, pricing presentation, and promotional messaging",
              "Exit-intent popups and cart abandonment recovery to recapture lost conversions",
              "Page speed optimization — every 1-second delay in load time can reduce conversions by 7%",
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span className="text-teal-400 mt-1">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 7 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Email Marketing & WhatsApp Automation for Ecommerce
          </h2>
          <p>
            Retention marketing is the most cost-efficient way to grow an
            ecommerce business. Acquiring a new customer costs 5–7x more than
            retaining an existing one. Email and WhatsApp are your most direct,
            owned channels to communicate with customers — and when automated
            intelligently, they drive significant repeat revenue with minimal
            ongoing cost.
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            Key Email Automation Flows
          </h3>
          <ul className="space-y-2 list-none">
            {[
              "Welcome series — onboarding new subscribers with brand story, bestsellers, and a first-purchase discount",
              "Abandoned cart recovery — reminding shoppers of items left behind with urgency and social proof",
              "Post-purchase sequences — order confirmation, shipping updates, review requests, and cross-sell recommendations",
              "Win-back campaigns — re-engaging customers who haven't purchased in 60–90 days",
              "VIP & loyalty flows — rewarding high-value customers with early access and exclusive offers",
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span className="text-teal-400 mt-1">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-white mt-2">
            WhatsApp Marketing for Indian Ecommerce
          </h3>
          <p>
            WhatsApp has a 90%+ open rate in India, making it the most powerful
            retention channel available. We set up WhatsApp Business API
            campaigns for order updates, abandoned cart recovery, promotional
            broadcasts, and two-way customer support — significantly
            outperforming email in engagement for Indian audiences.
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Marketplace Marketing: Amazon, Flipkart & Meesho
          </h2>
          <p>
            For many Indian ecommerce businesses, marketplaces like Amazon
            India, Flipkart, and Meesho drive a significant share of revenue.
            But simply listing products isn't enough — marketplace SEO and
            sponsored ad management are essential to winning the Buy Box and
            ranking at the top of search results.
          </p>
          <p>
            Our marketplace marketing services include product listing
            optimization (titles, bullet points, A+ content), backend keyword
            optimization, Sponsored Products and Sponsored Brands campaign
            management, review generation strategies, and seller account health
            monitoring. We help brands grow their marketplace presence while
            simultaneously building their own D2C website to reduce dependency
            on platforms.
          </p>
        </div>

        {/* Section 9 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Content Marketing for Ecommerce: Building Authority and Trust
          </h2>
          <p>
            Content marketing is a long-term asset for ecommerce businesses.
            While paid ads stop the moment you pause your budget, content keeps
            driving organic traffic for months and years. A well-structured
            ecommerce content strategy targets customers at every stage of their
            buying journey.
          </p>
          <p>
            For example, a customer buying a running shoe might first search
            "best running shoes for beginners in India" (informational), then
            "Nike vs Adidas running shoes" (comparison), and finally "Nike
            Pegasus 40 price India" (transactional). A complete content strategy
            ensures your brand appears at every stage of this journey — from
            blog post to product page.
          </p>
          <p>
            Our content team creates SEO-optimized buying guides, product
            comparisons, how-to articles, video scripts, and infographics — all
            designed to build topical authority in your product category and
            drive bottom-of-funnel conversions.
          </p>
        </div>

        {/* Section 10 */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Analytics & Reporting: Making Data-Driven Ecommerce Decisions
          </h2>
          <p>
            Every ecommerce marketing decision at KidiWebTech is grounded in
            data. We set up comprehensive analytics infrastructure — GA4, Google
            Tag Manager, Meta Pixel, and custom dashboards — to give you
            complete visibility into where your revenue is coming from and where
            your opportunities lie.
          </p>
          <p>
            Our monthly reports cover organic traffic growth, keyword rankings,
            ad performance (ROAS, CPC, conversion rate), email/WhatsApp metrics,
            customer lifetime value (CLV), and cohort analysis. We don't just
            share data — we tell you what it means and what we're doing about
            it.
          </p>
        </div>

        {/* Section 11 - Why KidiWebTech */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Why Choose KidiWebTech for Ecommerce Marketing in India?
          </h2>
          <p>
            There are hundreds of digital marketing agencies in India, but very
            few specialize deeply in ecommerce. KidiWebTech was built
            specifically for ecommerce brands — our entire team, processes, and
            tools are optimized for the unique challenges of selling products
            online.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-4">
            {[
              {
                title: "Ecommerce-First Approach",
                desc: "We don't do generic digital marketing. Every strategy, tool, and team member is specialized for ecommerce growth.",
              },
              {
                title: "Full-Funnel Expertise",
                desc: "From awareness to retention, we manage your complete customer acquisition and retention funnel — not just isolated channels.",
              },
              {
                title: "Transparent Reporting",
                desc: "Real-time dashboards and monthly strategy calls keep you fully informed on performance and next steps.",
              },
              {
                title: "India-Specific Insights",
                desc: "We understand Indian consumer behaviour, regional languages, payment preferences, and festival-driven buying patterns.",
              },
              {
                title: "Proven Track Record",
                desc: "With 500+ ecommerce clients scaled and ₹200Cr+ in revenue generated, our results speak for themselves.",
              },
              {
                title: "No Lock-In Contracts",
                desc: "We earn your trust with performance — not legal contracts. Flexible month-to-month engagement terms available.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                <h3 className="font-bold text-teal-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 12 - FAQs */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Frequently Asked Questions About Ecommerce Marketing in India
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How much does ecommerce marketing cost in India?",
                a: "Ecommerce marketing budgets vary widely based on business size, category, and goals. A growing D2C brand typically invests ₹50,000–₹3,00,000/month across SEO, paid ads, and retention. We offer customized packages based on your current revenue and growth targets.",
              },
              {
                q: "How long does ecommerce SEO take to show results?",
                a: "SEO is a long-term investment. Most ecommerce stores begin seeing meaningful organic traffic improvements within 4–6 months, with significant ranking gains at the 9–12 month mark. Paid ads deliver immediate results while SEO builds long-term organic growth in parallel.",
              },
              {
                q: "Do you work with Shopify, WooCommerce, and Magento stores?",
                a: "Yes. Our team has deep experience across all major ecommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built stores. We adapt our strategies to your platform's capabilities and technical requirements.",
              },
              {
                q: "Can you help with both my own website and marketplace (Amazon/Flipkart) sales?",
                a: "Absolutely. We help brands grow across all selling surfaces — their own D2C website, Amazon India, Flipkart, Meesho, and social commerce channels. A multi-channel approach reduces dependency on any single platform.",
              },
              {
                q: "What industries do you specialize in for ecommerce marketing?",
                a: "We work across fashion, beauty & personal care, electronics, home & furniture, health & wellness, food & beverages, sports & fitness, and kids' products. Our India-specific market knowledge ensures strategies are relevant to your category's unique buying behaviour.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-800 pb-6">
                <h3 className="font-semibold text-white text-lg mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Ready to Scale Your Ecommerce Business in India?
          </h2>
          <p>
            The Indian ecommerce market offers extraordinary growth
            opportunities — but only for brands that market strategically. With
            the right mix of SEO, paid advertising, social commerce, and
            retention marketing, your store can achieve consistent, profitable
            growth month after month.
          </p>
          <p>
            KidiWebTech has helped over 500 ecommerce brands across India unlock
            their growth potential with data-driven marketing strategies built
            for the Indian market. Whether you're a D2C startup looking to
            launch, or an established retailer ready to scale, we have the
            expertise, tools, and track record to get you there.
          </p>
          <p>
            Get in touch today for a free ecommerce marketing audit. We'll
            review your current performance, identify your biggest growth
            opportunities, and recommend a customized strategy — no strings
            attached.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-teal-900/20 border-y border-teal-800/30 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get Your Free Ecommerce Marketing Audit
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Our ecommerce specialists will review your store, ad accounts, and SEO
          — and share a free, personalized growth plan. No pitch, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-teal-500 hover:bg-teal-400 transition px-10 py-4 rounded-full font-semibold text-black"
          >
            Get Free Audit →
          </Link>
          <Link
            href="/contact"
            className="border border-gray-600 hover:border-teal-400 transition px-10 py-4 rounded-full text-gray-300"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
