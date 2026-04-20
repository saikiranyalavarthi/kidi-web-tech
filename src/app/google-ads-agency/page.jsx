"use client";

import Image from "next/image";
import Link from "next/link";

export default function GoogleAdsAgencyPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Google Ads{" "}
          <span className="gradient-text">Agency</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Partner with a specialist Google Ads agency that builds
          high-performance, ROI-focused campaigns across Search, Shopping,
          Display, YouTube, and Performance Max — engineered precisely around
          your business goals, target audience, and revenue objectives, not
          generic account templates.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/digital-marketing">Digital Marketing</Link>
          <span className="mx-2">›</span>
          <span>Google Ads Agency</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Full-Service Google Ads Agency
            </h2>
            <p className="text-gray-400 mb-4">
              We are a full-service Google Ads agency specializing in building
              and managing high-performance advertising campaigns across every
              Google Ads channel — Search, Shopping, Display, YouTube,
              Performance Max, and App campaigns — engineered precisely around
              your business model, target audience, and commercial objectives.
              Whether you need a lead generation campaign, a Google Shopping
              strategy, a YouTube brand awareness push, or a complete
              full-funnel Google Ads programme — we deliver end-to-end Google
              Ads management that drives qualified traffic, lowers your cost per
              acquisition, and scales your business profitably.
            </p>
            <p className="text-gray-400 mb-4">
              Our agency brings together expert Google Ads strategists, paid
              search specialists, Shopping and Performance Max engineers, ad
              copywriters, landing page conversion specialists, and analytics
              professionals who collaborate on every account to deliver Google
              Ads campaigns that consistently outperform industry benchmarks —
              from first impression to final conversion.
            </p>
            <p className="text-gray-400">
              Whether you are a startup launching your first Google Ads account,
              a growing business looking to scale paid search profitably, or an
              enterprise managing complex multi-campaign and multi-market Google
              Ads budgets, our agency has the strategic depth, technical
              expertise, and creative talent to build the right Google Ads
              solution for your goals — with full transparency, measurable
              results, and a clear return on every rupee invested.
            </p>
          </div>
          <Image
         src="/SEO/kidiwebtechimage4.jpg"
            alt="Google Ads Agency"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= CORE CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-12 space-y-14 text-gray-400">

        {/* WHAT IS A GOOGLE ADS AGENCY */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is a Google Ads Agency?
          </h2>
          <p className="mb-4">
            A Google Ads agency is a specialist digital marketing company that
            plans, builds, manages, and continuously optimizes advertising
            campaigns on the Google Ads platform on behalf of businesses — with
            the goal of generating qualified traffic, leads, and revenue at the
            lowest possible cost per acquisition. Google Ads agencies bring deep
            platform expertise across every campaign type — Search, Shopping,
            Display, YouTube, Performance Max, and App — alongside the keyword
            strategy, bid management, copywriting, audience targeting, and
            conversion tracking capabilities needed to build campaigns that
            deliver a strong, measurable return on advertising spend.
          </p>
          <p className="mb-4">
            A great Google Ads agency does far more than simply set up campaigns
            and monitor spend — it brings a strategic, data-driven, and
            continuously improving approach to every account it manages. Every
            keyword, match type, ad group, ad copy variant, bidding strategy,
            audience layer, and landing page alignment decision is actively
            managed and refined based on real performance data — driving
            systematic improvement in CTR, Quality Score, conversion rate, and
            ROAS month after month.
          </p>
          <p>
            Partnering with the right Google Ads agency is one of the most
            impactful investments a business can make in its digital growth —
            transforming Google Ads from a budget-draining unknown into a
            predictable, scalable, and highly profitable customer acquisition
            channel that generates consistent returns and compounds in
            performance over time.
          </p>
        </div>

        {/* WHY AGENCY OVER IN-HOUSE */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Use a Google Ads Agency Instead of Managing In-House?
          </h2>
          <p className="mb-4">
            Many businesses attempt to manage their own Google Ads accounts
            in-house — and the results are consistently disappointing. Google
            Ads is a highly sophisticated, fast-evolving advertising platform
            that rewards deep specialist expertise, continuous optimization
            discipline, and access to competitive intelligence tools that most
            in-house marketing teams — particularly at SME and mid-market level
            — simply do not possess. Poor campaign structure, broad match
            keyword waste, low Quality Scores, weak ad copy, and inadequate
            conversion tracking are among the most common and costly mistakes
            businesses make when managing Google Ads without specialist support.
          </p>
          <p className="mb-4">
            A specialist Google Ads agency brings a qualitatively different level
            of expertise, tooling, and optimization discipline to your account.
            Every campaign benefits from rigorous keyword research, tightly
            themed ad groups, compelling ad copy tested systematically,
            intelligent Smart Bidding strategy configuration, negative keyword
            discipline, audience signal layering, and conversion-optimized
            landing page alignment — all working together to lower your cost
            per lead and maximize your return on Google Ads spend.
          </p>
          <p>
            From a total cost of ownership perspective, businesses that invest
            in professional Google Ads agency management consistently achieve
            lower CPAs, higher Quality Scores, better impression share in
            high-value auctions, and stronger overall ROAS than those managing
            accounts in-house without specialist expertise. The agency
            management fee pays for itself many times over in waste eliminated,
            performance gained, and strategic opportunities captured.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Google Ads Agency Services
          </h2>
          <p className="mb-6">
            We offer a comprehensive range of Google Ads management services
            covering every campaign type, business objective, and industry
            vertical — from lead generation and ecommerce sales to brand
            awareness, app installs, and B2B demand generation.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Google Search Campaign Management
          </h3>
          <p className="mb-5">
            Google Search campaigns are the foundation of most Google Ads
            programmes — placing your ads at the top of Google's search results
            in front of users who are actively searching for exactly what you
            offer. Our agency builds and manages Search campaigns with a focus
            on keyword precision, tightly themed ad groups, high-relevance
            responsive search ads, Quality Score optimization, and Smart Bidding
            strategy configuration — maximizing click-through rates, minimizing
            cost per click, and driving qualified traffic that converts into
            leads and customers at the lowest possible cost per acquisition.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Google Shopping Campaign Management
          </h3>
          <p className="mb-5">
            Google Shopping is one of the highest-ROAS advertising formats
            available to ecommerce businesses — placing product listings with
            images, prices, and ratings directly in front of shoppers with
            strong purchase intent. Our agency manages Google Shopping campaigns
            with a specialist focus on product feed optimization, campaign
            structure, bidding strategy, and search query sculpting — ensuring
            your products appear for the most commercially valuable searches
            while excluding irrelevant queries that drain budget without
            generating revenue.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Performance Max Campaign Management
          </h3>
          <p className="mb-5">
            Performance Max is Google's most advanced campaign type —
            automating ad delivery across Search, Shopping, Display, YouTube,
            Gmail, and Discover simultaneously using Google's AI to find the
            highest-value conversion opportunities across its entire network.
            Our agency manages Performance Max campaigns with expert attention
            to asset group strategy, audience signal configuration, creative
            asset quality, and conversion goal setup — ensuring Google's
            automation is guided by the right signals to optimize for your
            specific business outcomes, not just volume metrics.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Google Display Network Campaign Management
          </h3>
          <p className="mb-5">
            Google Display Network campaigns extend your reach beyond search —
            placing visual banner and responsive display ads across millions of
            websites, apps, and Google properties to build brand awareness,
            re-engage previous visitors, and capture demand from audiences who
            are not yet actively searching. Our agency manages Display campaigns
            with precise audience targeting — combining in-market audiences,
            affinity segments, custom intent audiences, and remarketing lists
            to ensure your display budget reaches the audiences most likely to
            convert at the lowest possible cost per impression and click.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            5. YouTube Ads Management
          </h3>
          <p className="mb-5">
            YouTube is the world's second-largest search engine and one of the
            most powerful platforms for building brand awareness, driving
            product consideration, and reaching audiences at scale with
            compelling video content. Our agency manages YouTube Ads campaigns
            across skippable in-stream, non-skippable, bumper, and discovery
            formats — with strategic audience targeting, creative direction
            guidance, bid strategy optimization, and brand lift measurement to
            ensure your YouTube advertising investment delivers measurable
            impact on brand metrics and downstream conversion performance.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Google Ads Remarketing Campaigns
          </h3>
          <p className="mb-5">
            Remarketing campaigns re-engage users who have previously visited
            your website, interacted with your app, or engaged with your content
            — targeting them with tailored messaging designed to bring them back
            and convert. Our agency builds remarketing strategies that combine
            standard remarketing, dynamic remarketing, customer match, and
            similar audiences — delivering highly relevant, personalized ads to
            high-value audience segments across Search, Display, Shopping, and
            YouTube at a cost per conversion that consistently outperforms
            prospecting campaigns.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            7. Google Ads Account Audit & Restructure
          </h3>
          <p className="mb-5">
            If your existing Google Ads account is underperforming — burning
            budget on irrelevant clicks, generating poor-quality leads,
            delivering disappointing ROAS, or simply failing to scale — our
            agency provides a comprehensive Google Ads audit and account
            restructure service. We conduct a forensic analysis of your account
            structure, keyword strategy, match type distribution, negative
            keyword coverage, ad copy quality, Quality Scores, bidding strategy,
            and conversion tracking accuracy — then rebuild the account with a
            clean, logical architecture designed for performance and long-term
            growth.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Google Search Campaign Management</li>
            <li>Google Shopping Campaign Management</li>
            <li>Performance Max Campaign Management</li>
            <li>Google Display Network Campaign Management</li>
            <li>YouTube Ads Management</li>
            <li>Google Ads Remarketing Campaigns</li>
            <li>Google Ads Account Audit & Restructure</li>
          </ul>
        </div>

        {/* PLATFORMS & TOOLS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Tools & Technology Our Google Ads Agency Uses
          </h2>
          <p className="mb-6">
            We use the industry's leading Google Ads management tools,
            competitive intelligence platforms, and analytics solutions to
            manage, analyse, and continuously improve your campaign performance
            with maximum precision and efficiency.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Google Ads Platform
          </h3>
          <p className="mb-4">
            We operate at an expert level across every feature and campaign
            type within the Google Ads platform — including Smart Bidding
            strategy configuration (Target CPA, Target ROAS, Maximize
            Conversions, Enhanced CPC), audience segmentation, ad customizers,
            responsive search ad asset testing, Performance Max asset group
            management, and Google Ads Scripts for automated rule-based
            optimization. Our team continuously develops its Google Ads
            expertise to stay ahead of platform changes and leverage new
            features as they roll out.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Google Analytics 4 & Conversion Tracking
          </h3>
          <p className="mb-4">
            Accurate, comprehensive conversion tracking is the non-negotiable
            foundation of profitable Google Ads management. We configure GA4,
            Google Ads conversion tracking, and Google Tag Manager with
            precision — ensuring every lead form, phone call, ecommerce
            transaction, micro-conversion, and offline conversion is captured,
            attributed, and fed back into Smart Bidding algorithms to improve
            campaign performance. We treat measurement as a strategic priority,
            not an afterthought, and verify all conversion tracking before any
            campaign goes live.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Google Merchant Center
          </h3>
          <p className="mb-4">
            For Shopping and Performance Max campaigns, Google Merchant Center
            product feed quality is a critical performance lever — and one that
            most agencies underinvest in. Our agency conducts regular product
            feed audits and optimizations, fixing disapprovals, improving title
            and description relevance, enhancing product categorization, and
            adding supplemental feed data to maximize the number of eligible
            auctions and the quality of the Shopping listings we generate for
            your products.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            SEMrush & Google Keyword Planner
          </h3>
          <p className="mb-4">
            We use Google Keyword Planner alongside SEMrush and other premium
            competitive research tools for comprehensive keyword discovery,
            search volume analysis, competitor keyword gap identification, and
            auction insight benchmarking — building keyword strategies that
            capture every high-value search opportunity your competitors are
            missing while avoiding the broad keyword waste that drains most
            Google Ads budgets.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Optmyzr
          </h3>
          <p className="mb-4">
            We use Optmyzr to automate routine optimization tasks, apply
            rule-based bid adjustments, run account health audits, and surface
            performance anomalies across large, complex Google Ads accounts —
            freeing our team to focus on the higher-level strategic decisions
            that drive the biggest performance improvements. Optmyzr also
            enables us to generate detailed, transparent client reports with
            clear performance commentary efficiently and consistently.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Looker Studio Reporting Dashboards
          </h3>
          <p className="mb-4">
            We build custom Looker Studio performance dashboards for every
            Google Ads client — providing real-time visibility into spend,
            impressions, clicks, conversions, CPA, ROAS, Quality Score trends,
            and impression share across all active campaigns. Your data is
            always live, always accessible, and always presented in a clear,
            decision-ready format — with no waiting for end-of-month PDF reports
            to understand how your campaigns are performing.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Google Ads (All Campaign Types)</li>
            <li>Google Analytics 4 & Conversion Tracking</li>
            <li>Google Tag Manager</li>
            <li>Google Merchant Center (Shopping & PMax)</li>
            <li>Google Keyword Planner</li>
            <li>SEMrush & SpyFu (Competitor Intelligence)</li>
            <li>Optmyzr (Bid Management & Automation)</li>
            <li>Looker Studio (Custom Reporting Dashboards)</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Google Ads Agency Process
          </h2>
          <p className="mb-6">
            We follow a proven, transparent, and data-driven Google Ads
            management process that delivers consistent performance improvement
            from account launch through to long-term scaling — with full
            visibility and clear accountability at every stage.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Discovery & Google Ads Strategy
          </h3>
          <p className="mb-4">
            Every Google Ads agency engagement begins with a thorough discovery
            session to understand your business, products or services, target
            audience, competitive landscape, and advertising goals. We audit any
            existing Google Ads account history, analyse your competitors'
            presence across every relevant campaign type, and develop a
            comprehensive Google Ads strategy — covering campaign type
            selection, account structure, keyword strategy, match type
            framework, bidding approach, budget allocation, audience signal
            configuration, and conversion tracking architecture. A rigorous
            strategy phase ensures every rupee of your Google Ads budget is
            invested where it will generate the greatest return from day one.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — Keyword Research & Account Architecture
          </h3>
          <p className="mb-4">
            Our team conducts comprehensive keyword research — identifying
            high-intent, commercially relevant search terms across every stage
            of the buyer journey. We build tightly themed ad groups with
            granular keyword clustering, define a robust negative keyword
            framework to eliminate irrelevant traffic from the outset, and
            architect the account in a clean, logical, scalable structure that
            supports both immediate performance and long-term expansion. For
            Shopping and Performance Max accounts, we conduct a parallel product
            feed audit and optimization to maximize eligible auction reach from
            launch.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Ad Copy Creation & Asset Development
          </h3>
          <p className="mb-4">
            Our copywriters develop compelling, high-relevance responsive search
            ads for every ad group — with multiple headline and description
            variants designed for systematic A/B testing to identify the
            strongest-performing messaging for your specific audience. For
            Display, YouTube, and Performance Max campaigns, we develop creative
            briefs and asset recommendations — guiding the creation of visual
            and video assets that align with your brand and perform strongly
            across Google's automated placement decisions.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Conversion Tracking Setup & Verification
          </h3>
          <p className="mb-4">
            Before any campaigns go live, we configure and verify conversion
            tracking with precision — setting up goal tracking for every
            relevant conversion action in GA4 and Google Ads, connecting offline
            conversion imports where applicable, configuring enhanced
            conversions for improved attribution accuracy, and verifying that
            every conversion fires correctly across all devices and browsers.
            Accurate conversion data is the fuel that powers Smart Bidding — and
            we invest the time to get it right at the start of every engagement.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Campaign Launch & Intensive Early Optimization
          </h3>
          <p className="mb-4">
            We launch campaigns with controlled initial budgets and intensive
            daily monitoring — analysing search term reports, Quality Score
            trends, auction insight data, impression share signals, and early
            conversion patterns to identify quick-win optimization opportunities.
            The first 30–60 days of a new Google Ads account are critical for
            establishing the performance data foundation that all future
            optimization decisions build upon — and we invest significant
            management attention during this period to establish the strongest
            possible trajectory.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Ongoing Optimization & Budget Scaling
          </h3>
          <p className="mb-4">
            Once campaigns have accumulated sufficient data, we move into a
            systematic monthly optimization cycle — analysing performance by
            campaign, ad group, keyword, match type, device, location, audience
            segment, and time of day to identify every opportunity to improve
            CTR, Quality Score, conversion rate, and ROAS. We run continuous
            ad copy A/B tests, refine Smart Bidding targets as data matures,
            expand into new high-value keyword territories, and progressively
            scale budget into the highest-performing campaigns to compound
            returns over time.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 7 — Monthly Reporting & Strategy Review
          </h3>
          <p>
            Every month, we deliver a detailed performance report covering all
            key Google Ads metrics — spend, impressions, clicks, CTR,
            conversions, CPA, ROAS, Quality Score trends, and impression share
            — alongside a clear summary of optimizations completed and a
            forward-looking action plan for the next period. We hold regular
            strategy review calls to align on priorities, discuss performance
            trends, and identify new growth opportunities — ensuring your Google
            Ads programme continues to evolve and scale in line with your
            business objectives.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Discovery & Google Ads Strategy</li>
            <li>Keyword Research & Account Architecture</li>
            <li>Ad Copy Creation & Asset Development</li>
            <li>Conversion Tracking Setup & Verification</li>
            <li>Campaign Launch & Intensive Early Optimization</li>
            <li>Ongoing Optimization & Budget Scaling</li>
            <li>Monthly Reporting & Strategy Review</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Industries Our Google Ads Agency Serves
          </h2>
          <p className="mb-4">
            Our agency has delivered Google Ads campaigns for businesses across
            a wide range of industries — giving us valuable vertical-specific
            keyword intelligence, competitive insights, and proven campaign
            structures that we bring to every new client engagement.
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
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose Our Google Ads Agency?
          </h2>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Deep Expertise Across Every Google Ads Campaign Type
          </h3>
          <p className="mb-5">
            We are a specialist Google Ads agency with deep, practitioner-level
            expertise across every campaign type the platform offers — Search,
            Shopping, Performance Max, Display, YouTube, and App. Many agencies
            claim Google Ads expertise but operate primarily in Search while
            managing other campaign types superficially. Our team builds
            campaign-type-specific strategies, asset frameworks, and
            optimization approaches for every format — ensuring you get
            genuinely expert management regardless of which campaign types your
            programme requires.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Quality Score & Auction Performance Focus
          </h3>
          <p className="mb-5">
            Quality Score is one of the most important and most underinvested
            levers in Google Ads management — directly affecting your cost per
            click, ad position, and overall account competitiveness. Our agency
            prioritizes Quality Score improvement as a strategic objective on
            every account — building tightly themed ad groups, writing
            highly-relevant ad copy, and aligning landing page content with
            keyword intent to systematically improve Expected CTR, Ad Relevance,
            and Landing Page Experience scores. Higher Quality Scores mean lower
            CPCs and stronger auction positions — compounding your return on
            every rupee spent.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Smart Bidding Strategy Expertise
          </h3>
          <p className="mb-5">
            Google's Smart Bidding algorithms — Target CPA, Target ROAS,
            Maximize Conversions, and Maximize Conversion Value — are powerful
            tools for improving campaign performance, but they require expert
            configuration and management to deliver their full potential.
            Poorly configured Smart Bidding strategies consistently
            underperform or overspend. Our agency has extensive experience
            configuring, launching, and managing Smart Bidding strategies across
            a wide range of verticals and budget levels — knowing when to use
            each strategy, how to set initial targets correctly, and when to
            adjust targets based on performance data.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Transparent Reporting & Full Account Ownership
          </h3>
          <p className="mb-5">
            You retain full ownership and admin access to your Google Ads
            account at all times — without exception. Our monthly reports are
            detailed, honest, and written in plain language — showing exactly
            where your budget was allocated, what results it generated, and
            what specific actions we are taking to improve performance. We never
            hide behind aggregated vanity metrics or obscure account access —
            complete transparency is a non-negotiable principle of how our
            agency operates.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Proactive Negative Keyword Discipline
          </h3>
          <p className="mb-5">
            Irrelevant clicks from poorly controlled keyword matching are the
            single biggest source of wasted spend in most Google Ads accounts.
            Our agency applies a rigorous, proactive negative keyword strategy
            from day one — reviewing search term reports weekly, adding
            irrelevant queries to negative keyword lists systematically, and
            continuously refining match type distribution to tighten the
            relevance of traffic entering your campaigns. This discipline alone
            typically eliminates 20–40% of wasted spend in accounts we inherit
            — delivering immediate CPA improvement without any increase in
            budget.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Long-Term Agency Partnership Built on Compounding Results
          </h3>
          <p className="mb-5">
            We view every Google Ads engagement as the beginning of a long-term
            performance partnership. Google Ads performance compounds over time
            as account history builds, bidding algorithms mature, and
            optimization decisions accumulate — and our agency is committed to
            the long-term work required to capture that compounding value for
            every client. Our clients stay with us because results improve
            consistently over time — not because of lock-in contracts or
            artificial switching costs.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Deep Expertise Across Every Google Ads Campaign Type</li>
            <li>Quality Score & Auction Performance Focus</li>
            <li>Smart Bidding Strategy Expertise</li>
            <li>Transparent Reporting & Full Account Ownership</li>
            <li>Proactive Negative Keyword Discipline</li>
            <li>Long-Term Agency Partnership Built on Compounding Results</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Google Ads Agency FAQs
          </h2>

          <p>
            <strong className="text-white">
              What does a Google Ads agency do?
            </strong>
            <br />
            A Google Ads agency plans, builds, manages, and continuously
            optimizes advertising campaigns on the Google Ads platform on behalf
            of businesses. This includes developing campaign strategy, conducting
            keyword research, building account architecture, writing ad copy,
            configuring bidding strategies, setting up conversion tracking,
            managing product feeds for Shopping campaigns, building audience
            segments, reviewing search term reports, running A/B tests, and
            delivering regular performance reports — all with the goal of
            generating the greatest possible return on your Google Ads
            investment.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How much does a Google Ads agency charge?
            </strong>
            <br />
            Google Ads agency management fees depend on account complexity,
            number of campaign types managed, monthly advertising budget, and
            scope of service. Our agency management fees typically start from
            ₹15,000–₹25,000 per month for focused Search campaign management,
            with fees for broader multi-campaign-type programmes priced based
            on scope. This is separate from your Google Ads media spend, which
            is billed directly to your Google Ads account. Contact us for a
            free consultation and transparent proposal tailored to your specific
            requirements.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How long before Google Ads generates results?
            </strong>
            <br />
            Google Ads can begin generating clicks and conversions within hours
            of campaign launch. However, peak performance takes time to achieve
            as Smart Bidding algorithms accumulate conversion data, ad copy
            variants are tested, and optimization decisions compound. Most
            clients see meaningful CPA improvement within the first 60–90 days
            as campaigns mature — with continued performance gains month on
            month as account history deepens and our optimization work
            accumulates. We set realistic expectations from the outset and
            provide transparent progress updates throughout.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Will I own my Google Ads account?
            </strong>
            <br />
            Yes — you retain full ownership and admin access to your Google Ads
            account at all times. We request manager-level access to operate
            your campaigns on your behalf, but your account, your data, your
            campaign history, and your conversion tracking all belong entirely
            to you. This is a non-negotiable principle of how our agency
            operates — and one that distinguishes us from agencies that
            create accounts under their own MCC and retain ownership as a
            client retention mechanism.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              What Google Ads budget do I need?
            </strong>
            <br />
            There is no fixed minimum Google Ads budget — campaigns can operate
            at any spend level. However, to generate sufficient conversion data
            for Smart Bidding to optimize effectively and deliver commercially
            meaningful results, we typically recommend a minimum monthly Google
            Ads media budget of ₹30,000–₹50,000 for most verticals. Highly
            competitive industries or multi-campaign-type programmes may require
            higher budgets to compete effectively and gather data at the speed
            needed for rapid optimization. We will advise on the right budget
            for your specific goals and market during our initial consultation.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Do you manage Google Shopping and Performance Max campaigns?
            </strong>
            <br />
            Yes — Google Shopping and Performance Max are core specializations
            of our agency. We manage Shopping campaigns and Performance Max
            programmes for ecommerce businesses across a wide range of product
            categories — with specialist expertise in product feed optimization,
            campaign structure, asset group strategy, audience signal
            configuration, and bidding strategy to maximize ROAS and revenue
            per rupee of Google Ads spend. We also manage Google Merchant Center
            accounts directly, conducting regular feed audits and optimizations
            to maintain maximum product eligibility and listing quality.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              What is the difference between a Google Ads agency and a PPC
              agency?
            </strong>
            <br />
            A Google Ads agency specializes specifically in managing campaigns
            on the Google Ads platform — covering Search, Shopping, Display,
            YouTube, Performance Max, and App campaigns. A PPC agency is a
            broader term that encompasses paid advertising management across
            multiple platforms — including Google Ads, Microsoft Advertising,
            Meta Ads, LinkedIn Ads, and others. Our agency provides both
            specialist Google Ads management and broader multi-platform PPC
            management services — allowing clients to start with Google and
            expand into additional channels as their paid advertising programme
            matures.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Grow with a{" "}
          <span className="gradient-text">
            Specialist Google Ads Agency?
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg">
          Get a free Google Ads audit and consultation with our team. We'll
          review your existing account (or design a new campaign strategy from
          scratch), share actionable insights, and provide a clear agency
          proposal with scope and pricing — at no cost and no obligation.
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Let's build a Google Ads programme that generates qualified leads,
          maximizes your ROAS, and scales your business profitably — with an
          agency that stays invested in your results long after campaign launch.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-yellow-400 to-orange-500
            text-black font-semibold text-lg"
        >
          Get Free Consultation →
        </Link>
      </section>
    </div>
  );
}