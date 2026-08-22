"use client";

import Image from "next/image";
import Link from "next/link";

export default function SearchAdsServicesPage() {
  return (
    <div className="bg-white text-black overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-25 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Search Ads <span className="text-blue-500">Services</span>
        </h1>
        <p className="text-black max-w-3xl mx-auto text-lg">
          Partner with a results-driven search ads agency that builds
          high-performance, ROI-focused Google Ads and Bing Ads campaigns —
          engineered precisely around your brand, target audience, and revenue
          goals, not generic account templates.
        </p>
        <nav className="mt-6 text-sm text-black">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/digital-marketing">Digital Marketing</Link>
          <span className="mx-2">›</span>
          <span>Search Ads Services</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Full-Service Search Ads Management
            </h2>
            <p className="text-black mb-4">
              We are a full-service search ads agency specializing in building
              high-performance paid search campaigns on Google Ads and Microsoft
              Advertising — engineered precisely around your business model,
              target audience, and revenue goals. Whether you need a lead
              generation campaign, an ecommerce shopping strategy, a brand
              awareness push, or a full-funnel search ads architecture — we
              deliver end-to-end search advertising solutions that generate
              qualified traffic, lower your cost per acquisition, and grow your
              business profitably.
            </p>
            <p className="text-black mb-4">
              Our agency brings together expert PPC strategists, copywriters,
              landing page specialists, bid management engineers, and analytics
              professionals who collaborate on every account to deliver search
              campaigns that perform consistently — from first impression to
              final conversion.
            </p>
            <p className="text-black">
              Whether you are a startup launching your first Google Ads
              campaign, a growing business looking to scale paid search
              profitably, or an enterprise managing complex multi-market search
              budgets, our agency has the strategic depth, technical expertise,
              and creative talent to build the right search ads solution for
              your goals — with full transparency, measurable results, and a
              clear return on every rupee spent.
            </p>
          </div>
          <Image
            src="/SEO/kidiwebtechimage10.jpg"
            alt="Search Ads Services"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= CORE CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-12 space-y-14 text-black">
        {/* WHAT ARE SEARCH ADS SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            What Are Search Ads Services?
          </h2>
          <p className="mb-4">
            Search ads services refer to the end-to-end management of paid
            search advertising campaigns on platforms such as Google Ads and
            Microsoft Advertising — covering everything from account strategy,
            keyword research, and campaign architecture to ad copywriting, bid
            management, landing page optimization, conversion tracking, and
            performance reporting. Unlike SEO, which builds organic visibility
            over time, search ads place your business at the top of search
            results immediately — giving you instant access to high-intent
            buyers who are actively searching for exactly what you offer.
          </p>
          <p className="mb-4">
            A professional search ads service provider does not simply set up
            campaigns and let them run — it continuously optimizes every
            variable in the account to improve click-through rates, reduce
            wasted spend, lower cost per conversion, and maximize the return on
            your advertising investment over time. Every keyword, match type, ad
            group, ad copy variant, bidding strategy, and audience signal is
            actively managed and refined based on real performance data.
          </p>
          <p>
            Partnering with the right search ads agency is one of the
            highest-leverage investments a business can make in its digital
            growth — delivering a scalable, predictable, and measurable paid
            acquisition channel that generates qualified leads and revenue
            consistently, month after month.
          </p>
        </div>

        {/* WHY AGENCY OVER DIY */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            Why Use a Search Ads Agency Instead of Managing In-House?
          </h2>
          <p className="mb-4">
            Many businesses attempt to manage their own Google Ads accounts
            in-house — and consistently overspend, underperform, and miss the
            growth opportunities that a specialist agency would capture. Search
            advertising is a highly technical discipline that rewards deep
            platform expertise, continuous optimization habits, and access to
            competitive intelligence tools that most in-house teams simply do
            not have. Poor account structure, broad match keyword waste, weak ad
            copy, and inadequate conversion tracking are among the most common
            and costly mistakes businesses make managing paid search without
            expert support.
          </p>
          <p className="mb-4">
            A professional search ads agency brings a qualitatively different
            level of expertise to your account. Every campaign benefits from
            rigorous keyword research, tightly themed ad groups, compelling ad
            copy tested systematically, intelligent bidding strategies, negative
            keyword discipline, and conversion-optimized landing pages — all
            working together to lower your cost per lead and increase your
            return on ad spend.
          </p>
          <p>
            From a total cost perspective, businesses that invest in
            professional search ads management consistently achieve lower CPAs,
            higher conversion rates, and better overall ROAS than those managing
            accounts in-house without specialist expertise. The agency fee pays
            for itself many times over in waste eliminated and performance
            gained.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            Our Search Ads Services
          </h2>
          <p className="mb-6">
            We offer a comprehensive range of paid search advertising services
            covering every campaign type, platform, and business objective —
            from lead generation and ecommerce sales to brand awareness and
            competitor conquest campaigns.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Google Search Campaign Management
          </h3>
          <p className="mb-5">
            We build and manage Google Search campaigns engineered to capture
            high-intent demand at every stage of the buyer journey. From keyword
            strategy and ad group architecture to responsive search ad
            copywriting, bid management, and quality score optimization — every
            element of your search campaign is designed to maximize
            click-through rates, minimize cost per click, and drive qualified
            traffic that converts into leads and customers at the lowest
            possible cost.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Google Shopping & Performance Max Campaigns
          </h3>
          <p className="mb-5">
            For ecommerce businesses, we develop and manage Google Shopping
            campaigns and Performance Max strategies that place your products
            directly in front of shoppers with high purchase intent. We optimize
            product feed quality, campaign structure, bidding strategies, and
            audience signals to maximize ROAS across Search, Shopping, Display,
            YouTube, and Discover placements — delivering full-funnel ecommerce
            performance from a single, intelligently managed campaign type.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Microsoft Advertising (Bing Ads) Management
          </h3>
          <p className="mb-5">
            Microsoft Advertising reaches a highly valuable audience segment —
            typically older, more affluent, and with lower competition than
            Google — making it a highly cost-effective complement to Google Ads
            for many businesses. We build and manage Bing search campaigns that
            capture incremental search demand at lower CPCs, extending your paid
            search reach and improving overall blended performance across your
            search advertising portfolio.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Search Ads Account Audit & Restructure
          </h3>
          <p className="mb-5">
            If your existing Google Ads account is underperforming — burning
            budget on irrelevant clicks, generating high CPAs, or failing to
            scale — our agency provides a comprehensive paid search audit and
            account restructure service. We identify every source of wasted
            spend, structural inefficiency, and missed opportunity in your
            account, then rebuild it from the ground up with a clean, logical
            architecture designed for performance, scalability, and long-term
            growth.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Landing Page Strategy & CRO for Search Campaigns
          </h3>
          <p className="mb-5">
            The best search ads in the world will not perform if traffic lands
            on a poor-converting page. Our agency provides landing page strategy
            and conversion rate optimization services specifically for paid
            search traffic — ensuring your ad messaging, landing page headline,
            value proposition, and call-to-action are tightly aligned to
            maximize conversion rates and minimize your effective cost per
            acquisition.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Remarketing & Audience-Layered Search Campaigns
          </h3>
          <p className="mb-5">
            We layer audience signals, remarketing lists, customer match, and
            in-market audience targeting onto your search campaigns — allowing
            you to bid more aggressively for high-value audience segments and
            re-engage previous visitors with tailored messaging.
            Audience-layered search campaigns consistently outperform standard
            campaigns, driving higher conversion rates and better overall ROAS
            for the same keyword investment.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            7. Search Ads Reporting & Performance Analytics
          </h3>
          <p className="mb-5">
            We provide detailed, transparent performance reporting for every
            search ads account we manage — covering spend, impressions, clicks,
            CTR, conversions, CPA, ROAS, and Quality Score trends. Every monthly
            report includes clear performance commentary, a summary of
            optimizations completed, and a forward-looking action plan for the
            next period — so you always understand exactly where your budget is
            going and what results it is generating.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Google Search Campaign Management</li>
            <li>Google Shopping & Performance Max</li>
            <li>Microsoft Advertising (Bing Ads) Management</li>
            <li>Search Ads Account Audit & Restructure</li>
            <li>Landing Page Strategy & CRO</li>
            <li>Remarketing & Audience-Layered Search</li>
            <li>Search Ads Reporting & Performance Analytics</li>
          </ul>
        </div>

        {/* PLATFORMS & TOOLS */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            Platforms & Tools We Use for Search Ads Management
          </h2>
          <p className="mb-6">
            We use the industry's leading search advertising platforms and
            optimization tools to manage, analyse, and grow your paid search
            campaigns with maximum precision and efficiency.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">Google Ads</h3>
          <p className="mb-4">
            Google Ads is the world's dominant paid search platform — giving
            advertisers access to billions of searches per day across Google
            Search, Google Shopping, Display Network, YouTube, and Discover. Our
            agency manages Google Ads accounts at every level of complexity,
            from single-market SME campaigns to multi-country enterprise
            accounts with sophisticated audience segmentation, automated bidding
            strategies, and advanced conversion tracking configurations.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Microsoft Advertising
          </h3>
          <p className="mb-4">
            Microsoft Advertising (Bing Ads) powers paid search across Bing,
            Yahoo, and MSN — reaching a high-value audience segment at
            significantly lower CPCs than Google in most verticals. We manage
            Microsoft Advertising accounts both as standalone campaigns and as
            Google Ads imports with platform-specific optimizations applied —
            maximising your reach across the full paid search ecosystem.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Google Analytics 4 & Conversion Tracking
          </h3>
          <p className="mb-4">
            Accurate conversion tracking is the foundation of profitable search
            ads management. We configure GA4, Google Ads conversion tracking,
            and Google Tag Manager with precision — ensuring every lead form
            submission, phone call, ecommerce transaction, and micro-conversion
            is captured, attributed, and used to inform bidding and optimization
            decisions. You cannot optimize what you cannot measure — so we make
            measurement a priority from day one.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Google Keyword Planner & Third-Party Research Tools
          </h3>
          <p className="mb-4">
            We use Google Keyword Planner alongside premium third-party tools
            for competitive keyword research, search volume analysis, and
            opportunity identification — building keyword strategies that
            capture high-intent demand your competitors are missing and avoid
            the wasteful broad keyword mistakes that drain most Google Ads
            budgets.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Looker Studio Reporting Dashboards
          </h3>
          <p className="mb-4">
            We build custom Looker Studio reporting dashboards for every search
            ads client — giving you real-time visibility into campaign
            performance, spend pacing, conversion trends, and ROAS across all
            active campaigns. No more waiting for monthly PDFs — your data is
            always live, always accessible, and always presented in a format
            that makes decision-making straightforward.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Google Ads (Search, Shopping, Performance Max)</li>
            <li>Microsoft Advertising / Bing Ads</li>
            <li>Google Analytics 4 & GA4 Conversion Tracking</li>
            <li>Google Tag Manager</li>
            <li>Google Keyword Planner & SEMrush</li>
            <li>Looker Studio (Custom Reporting Dashboards)</li>
            <li>Optmyzr (Bid Management & Automation)</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            Our Search Ads Management Process
          </h2>
          <p className="mb-6">
            We follow a proven, transparent, and data-driven search ads
            management process that delivers consistent performance improvement
            — from initial account setup and launch through to ongoing
            optimization and scaling.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Discovery & Paid Search Strategy
          </h3>
          <p className="mb-4">
            Every engagement begins with a thorough discovery session to
            understand your business, products, target audience, competitive
            landscape, and advertising goals. We audit any existing Google Ads
            account history, analyse your competitors' search advertising
            presence, and develop a comprehensive paid search strategy —
            covering campaign structure, keyword strategy, match type approach,
            bidding strategy, budget allocation, and conversion tracking
            architecture. A rigorous strategy phase ensures your search ads
            investment is directed at the highest-value opportunities from day
            one.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — Keyword Research & Account Architecture
          </h3>
          <p className="mb-4">
            Our team conducts comprehensive keyword research — identifying
            high-intent, commercially relevant search terms across every stage
            of the buyer journey, from broad awareness queries through to
            high-intent transactional searches. We build tightly themed ad
            groups with granular keyword clustering, define a robust negative
            keyword framework to eliminate irrelevant traffic, and architect the
            account in a logical, scalable structure that supports long-term
            performance and easy ongoing management.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Ad Copywriting & Creative Development
          </h3>
          <p className="mb-4">
            Our copywriters create compelling, high-relevance responsive search
            ads for every ad group — with multiple headline and description
            variants designed to test and identify the messaging that resonates
            most strongly with your target audience. Every ad is written with
            keyword relevance, Quality Score optimization, unique value
            proposition clarity, and strong call-to-action in mind — maximising
            click-through rates and ensuring your ads stand out against
            competitors in every auction.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Conversion Tracking Setup & Verification
          </h3>
          <p className="mb-4">
            Before any campaigns go live, we configure and verify conversion
            tracking with absolute precision — setting up goal tracking for
            every relevant conversion action in GA4 and Google Ads, connecting
            offline conversion imports where applicable, and confirming that
            every conversion fires correctly. Accurate measurement is the
            non-negotiable foundation of profitable search ads management — and
            we treat it accordingly.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Campaign Launch & Initial Optimization
          </h3>
          <p className="mb-4">
            We launch campaigns with controlled initial budgets and close daily
            monitoring — analysing search term reports, Quality Score trends,
            impression share data, and early conversion signals to identify
            quick-win optimization opportunities. The first 30 days of a new
            account are critical for establishing a strong data foundation, and
            we invest intensive management hours during this period to get
            performance on the right trajectory as rapidly as possible.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Ongoing Optimization & Performance Scaling
          </h3>
          <p className="mb-4">
            Once campaigns have accumulated sufficient data, we shift to a
            systematic monthly optimization cycle — analysing performance by
            campaign, ad group, keyword, device, location, audience, and time of
            day to identify every opportunity to improve CTR, conversion rate,
            and ROAS. We conduct regular A/B tests on ad copy, adjust bidding
            strategies as data matures, expand keyword coverage into new
            high-value areas, and scale budget into the best-performing
            campaigns and audience segments.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 7 — Monthly Reporting & Strategy Review
          </h3>
          <p>
            Every month, we deliver a detailed performance report covering all
            key metrics — spend, impressions, clicks, conversions, CPA, ROAS,
            and Quality Score trends — alongside a clear summary of
            optimizations completed and a forward-looking action plan. We hold
            regular strategy reviews to align on priorities, discuss performance
            trends, and identify new growth opportunities — ensuring your search
            ads programme continues to scale as your business grows.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Discovery & Paid Search Strategy</li>
            <li>Keyword Research & Account Architecture</li>
            <li>Ad Copywriting & Creative Development</li>
            <li>Conversion Tracking Setup & Verification</li>
            <li>Campaign Launch & Initial Optimization</li>
            <li>Ongoing Optimization & Performance Scaling</li>
            <li>Monthly Reporting & Strategy Review</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            Industries Our Search Ads Services Cover
          </h2>
          <p className="mb-4">
            Our agency has delivered search ads campaigns for businesses across
            a wide range of industries — giving us valuable vertical-specific
            expertise, competitive insights, and proven keyword strategies that
            we bring to every new client engagement.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technology & SaaS</li>
            <li>Healthcare & Medical</li>
            <li>Real Estate & Construction</li>
            <li>Finance, Banking & Insurance</li>
            <li>Education & EdTech</li>
            <li>Legal & Professional Services</li>
            <li>Retail & Ecommerce</li>
            <li>Hospitality & Travel</li>
            <li>Manufacturing & Industrial</li>
            <li>Startups & D2C Brands</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            Why Choose Our Search Ads Services?
          </h2>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Full-Funnel Paid Search Expertise Under One Roof
          </h3>
          <p className="mb-5">
            We are a true full-service search ads agency — covering paid search
            strategy, keyword research, account architecture, ad copywriting,
            conversion tracking, bid management, landing page CRO, and
            performance reporting all under one roof. You work with one agency,
            one point of contact, and one accountability structure — making
            campaign management simpler, communication cleaner, and results more
            consistent than coordinating multiple vendors across your paid
            search programme.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ ROAS-First Thinking on Every Campaign
          </h3>
          <p className="mb-5">
            Every decision our agency makes — from keyword selection and match
            type strategy to bidding approach and budget allocation — is
            evaluated through the lens of return on ad spend. We are not focused
            on vanity metrics like impressions or clicks — we are focused on the
            metrics that matter to your business: cost per lead, cost per
            acquisition, revenue generated, and overall ROAS. Every optimization
            we make is designed to move those numbers in the right direction.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Rigorous Negative Keyword Management
          </h3>
          <p className="mb-5">
            Wasted spend on irrelevant search terms is the single biggest profit
            drain in most Google Ads accounts. Our agency applies a disciplined,
            proactive negative keyword strategy from day one — reviewing search
            term reports weekly, adding irrelevant terms to negative keyword
            lists systematically, and continuously tightening the relevance of
            traffic entering your campaigns. This discipline alone consistently
            reduces wasted spend by 20–40% in accounts we inherit.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Transparent Reporting & Full Account Access
          </h3>
          <p className="mb-5">
            We believe in complete transparency. You retain full ownership and
            admin access to your Google Ads account at all times. Our monthly
            reports are detailed, honest, and written in plain language —
            showing exactly where your budget was spent, what results it
            generated, and what we are doing to improve performance. We never
            hide behind vanity metrics or obscure reporting — you always know
            exactly what you are getting for your investment.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Continuous Testing & Improvement Culture
          </h3>
          <p className="mb-5">
            Paid search performance compounds over time through systematic
            testing and incremental improvement. Our agency runs continuous A/B
            tests on ad copy, landing page variants, bidding strategies, and
            audience segments — building a growing body of account-specific
            performance intelligence that improves results month after month.
            The best-performing search ads accounts are never static — they
            evolve continuously, and our agency brings the discipline to make
            that happen.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Long-Term Partnership, Not Just Account Management
          </h3>
          <p className="mb-5">
            We view every search ads engagement as the beginning of a long-term
            performance partnership. As your business grows and your digital
            strategy evolves, our agency evolves with you — expanding campaign
            coverage, opening new channels, and aligning your paid search
            programme with your broader marketing objectives. Our clients stay
            with us because we deliver results that compound over time, not just
            a campaign that performs well in the first month.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Full-Funnel Paid Search Expertise Under One Roof</li>
            <li>ROAS-First Thinking on Every Campaign</li>
            <li>Rigorous Negative Keyword Management</li>
            <li>Transparent Reporting & Full Account Access</li>
            <li>Continuous Testing & Improvement Culture</li>
            <li>Long-Term Partnership, Not Just Account Management</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500 mb-4">
            Search Ads Services FAQs
          </h2>

          <p>
            <strong className="text-white">
              What are search ads services?
            </strong>
            <br />
            Search ads services refer to the professional management of paid
            search advertising campaigns — primarily on Google Ads and Microsoft
            Advertising — covering everything from account strategy, keyword
            research, and campaign architecture to ad copywriting, bid
            management, conversion tracking, and performance reporting. A search
            ads service provider handles every element of your paid search
            programme to maximise performance, minimise wasted spend, and
            deliver the strongest possible return on your advertising
            investment.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How much do search ads services cost?
            </strong>
            <br />
            Search ads service pricing depends on your monthly advertising
            budget, account complexity, number of campaigns, and the scope of
            management required. Our agency management fees typically start from
            ₹15,000–₹25,000 per month for small to mid-sized accounts. This is
            separate from your Google Ads media spend, which is billed directly
            to your account. We provide a detailed, transparent proposal for
            every engagement — contact us for a free consultation and customized
            quote based on your specific goals and budget.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How quickly will I see results from search ads?
            </strong>
            <br />
            Unlike SEO, search ads can deliver results almost immediately — your
            ads can appear at the top of Google search results within hours of
            campaign launch. However, peak performance takes time to achieve as
            bidding strategies learn, ad copy variants are tested, and
            optimization decisions accumulate. Most clients see strong
            performance improvements within the first 60–90 days as the account
            matures and our optimization work compounds — with continued
            improvement month on month thereafter.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Will I own my Google Ads account?
            </strong>
            <br />
            Yes — absolutely. You retain full ownership and admin access to your
            Google Ads account at all times. We request manager access to manage
            your campaigns on your behalf, but your account, your data, and your
            campaign history always belong to you. This is a non-negotiable
            principle of how we operate — and a key reason why businesses trust
            us to manage their paid search investment with confidence.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              What budget do I need to run Google search ads?
            </strong>
            <br />
            There is no fixed minimum budget for Google Ads — campaigns can
            start at any spend level. However, to generate meaningful data for
            optimization and achieve a statistically significant volume of
            conversions, we typically recommend a minimum monthly Google Ads
            media budget of ₹30,000–₹50,000 for lead generation campaigns in
            most verticals. Ecommerce and highly competitive industries may
            require higher budgets to compete effectively. We will advise on the
            right budget for your specific goals and market during our initial
            consultation.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Do you manage Google Ads for ecommerce businesses?
            </strong>
            <br />
            Yes — ecommerce search ads management is a core specialization of
            our agency. We build and manage Google Shopping campaigns,
            Performance Max strategies, and standard search campaigns for
            ecommerce businesses across a wide range of product categories —
            optimizing product feeds, campaign structure, bidding strategies,
            and audience segments to maximize ROAS and revenue per rupee spent.
            We can also advise on landing page and product page improvements
            that will lift conversion rates across your paid search traffic.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Grow with{" "}
          <span className="text-blue-500">Expert Search Ads Services?</span>
        </h2>
        <p className="text-black max-w-2xl mx-auto mb-4 text-lg">
          Get a free paid search audit and consultation with our team. We'll
          review your current Google Ads account (or discuss a new campaign
          strategy), share actionable insights, and provide a clear agency
          proposal with scope and pricing — at no cost and no obligation.
        </p>
        <p className="text-black max-w-2xl mx-auto mb-10">
          Let's build a search ads programme that generates qualified leads,
          maximizes your ROAS, and scales your business — with an agency that
          stays invested in your results long after campaign launch.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full
            bg-blue-500 hover:bg-blue-600 transition duration-300
            text-black font-semibold text-lg"
        >
          Get Free Consultation →
        </Link>
      </section>
    </div>
  );
}
