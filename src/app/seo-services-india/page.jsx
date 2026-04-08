"use client";

import Image from "next/image";
import Link from "next/link";

export default function SEOServicesIndiaPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          SEO Services <span className="gradient-text">India</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Results-driven search engine optimisation services for Indian
          businesses — driving organic traffic, qualified leads, and sustainable
          revenue growth through proven on-page, off-page, and technical SEO
          strategies tailored to the Indian market.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <span>SEO Services India</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Professional SEO Services for Indian Businesses
            </h2>
            <p className="text-gray-400 mb-4">
              India's digital economy is growing at a pace unlike anywhere else
              in the world — and the businesses that will win the next decade
              are the ones that own the first page of Google for the searches
              their customers are already making. Yet the vast majority of
              Indian businesses are either invisible in search results or
              relying on paid advertising to buy traffic they should be earning
              organically.
            </p>
            <p className="text-gray-400 mb-4">
              Our SEO services in India are built for one purpose: to get your
              website ranking for the keywords that drive real business — and to
              keep it there. Whether you are a local business targeting
              customers in a single city, a national brand competing across
              India, or an e-commerce store looking to scale organic revenue, we
              deliver a strategy that is specific to your business, your market,
              and your goals.
            </p>
            <p className="text-gray-400">
              We do not offer cookie-cutter packages or generic deliverables.
              Every engagement begins with a deep analysis of your current
              visibility, your competitive landscape, and the search demand that
              exists for what you offer — and everything we do is designed to
              move those numbers in a measurable, sustainable way.
            </p>
          </div>
          <Image
            src="/assets/seo-services-india.jpg"
            alt="SEO Services India"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= WHY SEO INDIA ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">
          Why SEO Matters for Indian Businesses Right Now
        </h2>
        <p className="text-gray-400 mb-4">
          India has over 700 million internet users — and that number is growing
          by tens of millions every year. Google processes over 8 billion
          searches in India every month. Your potential customers are searching
          for what you offer, right now, on Google. The question is whether they
          are finding you or your competitors.
        </p>
        <p className="text-gray-400 mb-4">
          Unlike paid advertising, which stops the moment you stop paying, SEO
          builds a durable, compounding asset — your organic search presence —
          that continues to deliver traffic and leads month after month, year
          after year. The cost per lead from organic search is consistently
          lower than from any paid channel over a 12-month horizon, and the
          leads themselves tend to convert at higher rates because the customer
          has actively searched for what you offer.
        </p>
        <p className="text-gray-400">
          The window to establish organic dominance in your category is not
          unlimited. Competitors who invest in SEO today will be significantly
          harder to displace in 12 months. The businesses that act now — and act
          with a coherent, technically sound strategy — will own the organic
          visibility in their category for years to come.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Our SEO Services — What&apos;s Included
          </h2>
          <p className="text-gray-400 mb-6">
            Our India SEO services cover every dimension of search optimisation
            — from deep technical audits through to content strategy, link
            acquisition, and ongoing performance management. Here is exactly
            what we do:
          </p>

          {/* Technical SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Technical SEO Audit &amp; Implementation
          </h3>
          <p className="text-gray-400 mb-6">
            We conduct a comprehensive technical audit of your website —
            analysing site architecture, crawlability, indexation, page speed,
            Core Web Vitals, mobile usability, structured data, canonical tags,
            hreflang configuration, and dozens of additional technical signals.
            We deliver a prioritised, actionable remediation plan — and our
            development team implements every fix, ensuring your site gives
            Google's crawlers the clearest possible path to understanding,
            indexing, and ranking every page.
          </p>

          {/* Keyword Research */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Keyword Research &amp; Search Demand Mapping
          </h3>
          <p className="text-gray-400 mb-6">
            Effective SEO begins with understanding the precise language your
            customers use when they search. We conduct in-depth keyword research
            tailored to the Indian market — mapping search volume, competition,
            intent signals, and seasonal trends across every relevant query
            cluster. We identify the full universe of keywords your business
            should be targeting — from high-volume head terms to long-tail,
            high-intent queries — and build a strategic keyword map that aligns
            every page of your website to a defined set of search opportunities.
          </p>

          {/* On-Page */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            3. On-Page SEO Optimisation
          </h3>
          <p className="text-gray-400 mb-6">
            We optimise every on-page element that Google uses to understand the
            relevance and quality of your content — including title tags, meta
            descriptions, heading hierarchy, body copy, internal linking, image
            optimisation, URL structure, and schema markup. Every page on your
            site is treated as a discrete ranking opportunity, and every
            optimisation decision is grounded in data from our keyword research
            and competitive analysis rather than generic best-practice
            checklists.
          </p>

          {/* Content */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Content Strategy &amp; SEO Content Creation
          </h3>
          <p className="text-gray-400 mb-6">
            Content is the fuel of organic search. We develop a comprehensive
            content strategy that identifies every topic cluster, informational
            query, and buyer-journey stage for which your website should be
            visible — and we create the high-quality, deeply researched,
            search-optimised content needed to rank for those opportunities.
            From service pages and landing pages to long-form blog content and
            FAQ sections, every piece of content we produce is designed to rank,
            convert, and build topical authority in your niche.
          </p>

          {/* Link Building */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Link Building &amp; Digital PR
          </h3>
          <p className="text-gray-400 mb-6">
            Backlinks from authoritative, relevant websites remain one of the
            most powerful ranking signals in Google's algorithm. We build
            high-quality, editorially earned links through a range of white-hat
            strategies — including digital PR, expert contribution outreach,
            resource link building, competitor link gap analysis, and local
            citation building. Every link we acquire is from a real, relevant
            website with genuine authority — never from link farms, private blog
            networks, or paid link schemes that risk a Google penalty.
          </p>

          {/* Local SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Local SEO for Indian Cities
          </h3>
          <p className="text-gray-400 mb-6">
            For businesses serving customers in specific Indian cities —
            Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, and beyond —
            local SEO is a distinct discipline requiring a dedicated strategy.
            We optimise your Google Business Profile, build locally relevant
            citations, create location-specific landing pages, and develop a
            review generation programme that drives Google Local Pack visibility
            for the searches your local customers are making. We work across all
            major Indian metros and tier-2 cities.
          </p>

          {/* E-Commerce SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            7. E-Commerce SEO
          </h3>
          <p className="text-gray-400 mb-6">
            E-commerce SEO in India requires a specialist approach — managing
            thousands of product and category pages, structured data for product
            listings, faceted navigation and duplicate content issues, and the
            unique competitive dynamics of competing with Flipkart, Amazon
            India, and vertically dominant aggregators. We bring proven
            e-commerce SEO expertise to help Indian online retailers grow their
            organic traffic and reduce their dependence on expensive marketplace
            fees and paid search spend.
          </p>

          {/* Reporting */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            8. SEO Reporting &amp; Performance Analytics
          </h3>
          <p className="text-gray-400 mb-6">
            We deliver transparent, detailed monthly performance reports
            covering keyword ranking movements, organic traffic growth,
            conversion metrics, backlink acquisition, and a full audit of work
            completed. You always know exactly where your SEO investment is
            going, what it is producing, and what the trajectory looks like. We
            hold regular strategy calls to review the data and refine the
            approach based on real performance signals.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>Technical SEO Audit &amp; Implementation</li>
            <li>Keyword Research &amp; Search Demand Mapping</li>
            <li>On-Page SEO Optimisation</li>
            <li>Content Strategy &amp; SEO Content Creation</li>
            <li>Link Building &amp; Digital PR</li>
            <li>Local SEO for Indian Cities</li>
            <li>E-Commerce SEO</li>
            <li>SEO Reporting &amp; Performance Analytics</li>
          </ul>
        </div>

        {/* ================= PROCESS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Our SEO Process — How We Work
          </h2>
          <p className="text-gray-400 mb-6">
            Every SEO engagement follows a structured, transparent process
            designed to maximise results while keeping you fully informed at
            every stage.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Discovery &amp; Audit
          </h3>
          <p className="text-gray-400 mb-4">
            We begin with a comprehensive audit of your current organic
            performance, technical health, backlink profile, and competitive
            landscape — establishing a clear baseline and identifying the
            highest-impact opportunities.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — Keyword Research &amp; Strategy
          </h3>
          <p className="text-gray-400 mb-4">
            We map the full universe of search demand relevant to your business
            and build a keyword strategy that informs every content and
            optimisation decision throughout the engagement.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Technical Fixes &amp; On-Page Optimisation
          </h3>
          <p className="text-gray-400 mb-4">
            We implement all technical and on-page optimisations — ensuring your
            site is fully crawlable, correctly structured, and sending the
            strongest possible relevance signals to Google for your target
            keywords.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Content Creation &amp; Publishing
          </h3>
          <p className="text-gray-400 mb-4">
            We create and publish high-quality SEO content on a consistent
            schedule — building topical authority and expanding your site's
            footprint across your target keyword landscape.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Link Building &amp; Authority Growth
          </h3>
          <p className="text-gray-400 mb-4">
            We execute a sustained, white-hat link acquisition programme —
            building the backlink authority your site needs to outrank
            competitors for high-value keywords.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Monthly Reporting &amp; Strategy Refinement
          </h3>
          <p className="text-gray-400 mb-4">
            We report on all key metrics monthly, hold regular strategy calls,
            and continuously refine the approach based on performance data and
            evolving search algorithm signals.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>Discovery &amp; Audit</li>
            <li>Keyword Research &amp; Strategy</li>
            <li>Technical Fixes &amp; On-Page Optimisation</li>
            <li>Content Creation &amp; Publishing</li>
            <li>Link Building &amp; Authority Growth</li>
            <li>Monthly Reporting &amp; Strategy Refinement</li>
          </ul>
        </div>

        {/* ================= INDUSTRIES ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Industries We Serve
          </h2>
          <p className="text-gray-400 mb-4">
            We deliver SEO services across the full range of industries
            competing for organic visibility in India:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong className="text-white">Healthcare &amp; Medical:</strong>{" "}
              Hospitals, clinics, diagnostic centres, dental practices, Ayurveda
              &amp; wellness
            </li>
            <li>
              <strong className="text-white">Legal Services:</strong> Law firms,
              advocates, legal consultants, and corporate legal services
            </li>
            <li>
              <strong className="text-white">Real Estate:</strong> Developers,
              builders, property consultants, and rental agencies
            </li>
            <li>
              <strong className="text-white">Education &amp; EdTech:</strong>{" "}
              Schools, colleges, coaching institutes, online learning platforms
            </li>
            <li>
              <strong className="text-white">E-Commerce &amp; Retail:</strong>{" "}
              Online stores, marketplaces, and local retail chains
            </li>
            <li>
              <strong className="text-white">Financial Services:</strong> CA
              firms, insurance, wealth management, fintech
            </li>
            <li>
              <strong className="text-white">Hospitality &amp; Travel:</strong>{" "}
              Hotels, resorts, travel agencies, tour operators
            </li>
            <li>
              <strong className="text-white">SaaS &amp; Technology:</strong> B2B
              software companies, IT services, digital agencies
            </li>
            <li>
              <strong className="text-white">Food &amp; Beverage:</strong>{" "}
              Restaurant chains, cloud kitchens, food brands
            </li>
            <li>
              <strong className="text-white">Automotive:</strong> Dealerships,
              service centres, auto parts retailers
            </li>
            <li>
              <strong className="text-white">Beauty &amp; Wellness:</strong>{" "}
              Salon chains, spa brands, fitness studios
            </li>
            <li>
              <strong className="text-white">Home Services:</strong> Interior
              design, construction, facility management
            </li>
          </ul>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Why Choose Our SEO Services in India?
          </h2>
          <p className="text-gray-400 mb-6">
            There are hundreds of agencies claiming to offer SEO in India. Here
            is what genuinely sets our service apart:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ India-Specific Expertise
          </h3>
          <p className="text-gray-400 mb-4">
            We understand the Indian search landscape — regional language
            queries, local intent patterns, and the competitive dynamics of
            every major Indian metro and vertical. We do not apply a Western
            playbook to an Indian market context.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ No Black-Hat Shortcuts
          </h3>
          <p className="text-gray-400 mb-4">
            Every strategy we implement is 100% white-hat and Google-compliant.
            We build durable organic visibility — not short-term rankings that
            collapse with the next algorithm update or result in a manual
            penalty that takes months to recover from.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Full-Stack SEO Team
          </h3>
          <p className="text-gray-400 mb-4">
            Technical SEOs, content strategists, link builders, and developers —
            all under one roof. We do not outsource critical SEO work to
            freelancers or offshore vendors with no accountability for results.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Transparent Reporting
          </h3>
          <p className="text-gray-400 mb-4">
            Monthly reports covering rankings, traffic, conversions, and work
            completed. No vanity metrics. No hiding behind "SEO takes time" when
            results are not materialising.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Integrated Digital Strategy
          </h3>
          <p className="text-gray-400 mb-4">
            SEO works best alongside GMB optimisation, local SEO, and content
            marketing. We offer all three — and integrate them into a single
            coherent strategy that maximises your total organic visibility
            across every surface where your customers are searching.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>India-Specific Market Expertise</li>
            <li>100% White-Hat, Google-Compliant Strategies</li>
            <li>In-House Full-Stack SEO Team</li>
            <li>Transparent, Outcome-Focused Reporting</li>
            <li>Integrated Local, National &amp; E-Commerce SEO</li>
          </ul>
        </div>

        {/* ================= RESULTS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            What Results Can You Expect from SEO in India?
          </h2>
          <p className="text-gray-400 mb-4">
            SEO is a medium-to-long-term investment — but with a technically
            sound strategy and consistent execution, the trajectory is
            predictable:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong className="text-white">Month 1–2:</strong> Technical audit
              complete, all critical fixes implemented, keyword strategy
              finalised, on-page optimisations deployed, baseline data recorded
              across all tracked metrics.
            </li>
            <li>
              <strong className="text-white">Month 3–4:</strong> First
              measurable ranking improvements for long-tail and mid-competition
              keywords. Organic impressions increasing in Google Search Console.
              Content and link acquisition activity underway.
            </li>
            <li>
              <strong className="text-white">Month 5–6:</strong> Consistent
              ranking movements for primary target keywords. Organic traffic
              showing clear upward trend. Conversions and leads from organic
              search increasing measurably.
            </li>
            <li>
              <strong className="text-white">Month 7–12:</strong> Strong, stable
              rankings across the full target keyword set. Organic search
              established as a primary, reliable lead generation channel.
              Compounding authority growth as content and backlink signals
              accumulate.
            </li>
          </ul>
        </div>

        {/* ================= FAQ ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Frequently Asked Questions — SEO Services India
          </h2>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              How long does SEO take to show results in India?
            </strong>
            <br />
            For most Indian businesses starting from a low-authority or
            under-optimised baseline, meaningful ranking improvements for
            long-tail keywords are typically visible within 3 to 4 months of
            implementing core technical and on-page optimisations. Competitive
            head terms in established verticals typically require 6 to 12 months
            of sustained effort. The timeline depends heavily on your current
            domain authority, the competitiveness of your target keywords, and
            the consistency of content and link-building activity.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              Do you offer SEO services for regional Indian languages?
            </strong>
            <br />
            Yes. We offer SEO optimisation for content in Hindi, Telugu, Tamil,
            Kannada, Malayalam, Marathi, Bengali, and other major Indian
            languages — including keyword research in regional languages,
            on-page optimisation of regional-language pages, and hreflang
            configuration for multilingual sites.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              What is the difference between local SEO and national SEO?
            </strong>
            <br />
            Local SEO focuses on ranking for geographically qualified searches —
            "CA firm in Hyderabad", "dentist near me", "best restaurant in
            Banjara Hills" — and includes Google Business Profile optimisation,
            local citation building, and location-specific landing pages.
            National SEO targets searches without a geographic qualifier — "best
            accounting software India", "online MBA", "buy running shoes" — and
            focuses on domain-level authority, content breadth, and competitive
            keyword strategy. Many Indian businesses need both, and we build
            integrated strategies that cover both dimensions simultaneously.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              How much do SEO services in India cost?
            </strong>
            <br />
            Our SEO retainer pricing depends on the scope of work, the
            competitiveness of your target keywords, the size of your website,
            and whether local, national, or e-commerce SEO (or a combination) is
            required. We offer flexible monthly retainer packages with
            transparent pricing and no lock-in contracts beyond an initial
            6-month commitment. Contact us for a free SEO audit and custom
            proposal.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              Can you guarantee first-page rankings on Google?
            </strong>
            <br />
            No ethical SEO agency can guarantee specific rankings — Google's
            algorithm is independent and considers hundreds of factors outside
            any agency's direct control. What we can guarantee is a rigorous,
            data-driven strategy, complete transparency in everything we do,
            consistent expert execution across every element of your SEO
            programme, and a proven track record of delivering measurable
            organic growth for our clients in the Indian market.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              Do you work with startups and small businesses?
            </strong>
            <br />
            Yes. We work with businesses across the full size spectrum — from
            funded startups and SMEs through to established enterprises and
            national brands. For smaller businesses and startups, we offer
            focused, high-impact packages that prioritise the SEO activities
            with the highest return relative to budget. We will always tell you
            honestly whether SEO is the right investment for your business at
            its current stage — and what a realistic ROI trajectory looks like
            given your budget and competitive context.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Organic Traffic?
        </h2>
        <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
          Get a free, no-obligation SEO audit for your website — and find out
          exactly what is holding your rankings back, what your competitors are
          doing that you are not, and what a realistic growth roadmap looks like
          for your business.
        </p>
        <p className="text-gray-400 mb-6">
          Let&apos;s get your business to the top of Google — and keep it there.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold"
        >
          Get Your Free SEO Audit →
        </Link>
      </section>
    </div>
  );
}
