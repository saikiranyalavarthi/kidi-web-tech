"use client";

import Image from "next/image";
import Link from "next/link";

export default function SEOServicesHyderabadPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          SEO Services in <span className="gradient-text">Hyderabad</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Result-driven SEO services in Hyderabad crafted to grow your organic
          traffic, improve your Google rankings, and convert visitors into
          paying customers. We deliver end-to-end search engine optimisation —
          from deep technical audits and on-page improvements to content
          strategy and high-authority link building — tailored to businesses of
          every size across Hyderabad and Telangana.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <span>SEO Services Hyderabad</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Hyderabad's Trusted SEO Services Agency
            </h2>
            <p className="text-gray-400 mb-4">
              We are a specialist SEO agency serving businesses across Hyderabad
              — from startups in Hitech City and Gachibowli to established
              enterprises in Banjara Hills, Secunderabad, and beyond. Our team
              of experienced SEO professionals combines technical depth, content
              expertise, and a data-first approach to deliver consistent,
              long-lasting organic growth for every client we work with.
            </p>
            <p className="text-gray-400 mb-4">
              Hyderabad's business landscape is one of the most competitive in
              India — spanning IT, pharma, real estate, healthcare, retail,
              education, and hospitality. With more consumers turning to Google
              to discover and evaluate businesses every single day, your
              visibility in organic search results is no longer optional — it is
              a core growth driver. Our SEO services are designed to help you
              win that visibility and convert it into measurable business
              results.
            </p>
            <p className="text-gray-400">
              We don't believe in cookie-cutter packages or vanity metrics.
              Every SEO strategy we build is custom to your business, your
              market, and your goals — and every action we take is tied to
              outcomes that matter: more qualified traffic, more leads, and more
              revenue from organic search.
            </p>
          </div>
          <Image
       src="/SEO/kidiwebtechimage6.jpg"
            alt="SEO Services in Hyderabad"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= WHAT IS SEO ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">
          Why SEO Is the Most Valuable Digital Investment for Hyderabad
          Businesses
        </h2>
        <p className="text-gray-400 mb-4">
          Search Engine Optimisation is the process of improving your website's
          position on Google and other search engines so that potential
          customers find you when they search for the products or services you
          offer. In a city like Hyderabad — where digital adoption is
          accelerating rapidly and competition across every industry is
          intensifying — SEO has become one of the most powerful and
          cost-efficient growth channels available to businesses of all sizes.
        </p>
        <p className="text-gray-400 mb-4">
          Consider that over 90% of online experiences begin with a search
          engine, and that the top five organic results on Google capture more
          than 67% of all clicks on a given search query. If your business is
          not appearing prominently on the first page of Google for the keywords
          your customers are searching, you are handing that traffic — and those
          customers — directly to your competitors, every single day.
        </p>
        <p className="text-gray-400">
          Unlike paid advertising, where visibility stops the moment you pause
          your spend, SEO builds a permanent digital asset. A well-optimised
          website continues to attract qualified, high-intent visitors 24 hours
          a day, seven days a week — without a cost-per-click. Over time, the
          compounding nature of SEO means that your cost of customer acquisition
          from organic search continues to fall, even as your traffic and
          revenue grows. This makes SEO one of the highest-ROI investments a
          Hyderabad business can make in its digital future.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Our SEO Services in Hyderabad
          </h2>
          <p className="text-gray-400 mb-6">
            We offer a full-spectrum SEO service designed to address every
            factor that influences your visibility in Google search — from the
            technical foundation of your website to the quality of your content
            and the authority of your backlink profile. Here is what's included
            in our SEO services in Hyderabad:
          </p>

          {/* SEO Audit */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            1. SEO Audit & Competitive Analysis
          </h3>
          <p className="text-gray-400 mb-6">
            Every successful SEO engagement begins with a thorough understanding
            of where you stand today. We conduct a comprehensive SEO audit
            covering your website's technical health, on-page optimisation,
            content quality, keyword rankings, and backlink profile —
            identifying every issue that is holding your site back from ranking
            higher on Google. Alongside this, we perform in-depth competitor
            research to understand exactly what your top-ranking competitors are
            doing right, where their gaps are, and how you can outmanoeuvre them
            in search results for the keywords that matter most to your
            business.
          </p>

          {/* On-Page SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            2. On-Page SEO Optimisation
          </h3>
          <p className="text-gray-400 mb-6">
            On-page SEO is the process of optimising each individual page on
            your website to rank higher and attract more relevant organic
            traffic. Our on-page optimisation covers title tags, meta
            descriptions, header tag structures (H1 through H4), URL
            optimisation, image alt text, internal linking architecture, content
            quality improvements, keyword placement, and overall page relevance
            signals. We ensure that every page on your site clearly communicates
            its topic and relevance to both Google's crawlers and your human
            visitors — improving your click-through rates from search results
            and increasing the time users spend on your site.
          </p>

          {/* Technical SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Technical SEO & Core Web Vitals Optimisation
          </h3>
          <p className="text-gray-400 mb-6">
            Technical SEO is the engine room of your entire search strategy. No
            matter how strong your content is or how many backlinks you earn, if
            Google cannot efficiently crawl and index your website, your
            rankings will be limited. Our technical SEO specialists identify and
            resolve crawl errors, broken links, duplicate content issues,
            redirect chains, slow page load times, poor mobile usability, XML
            sitemap misconfiguration, robots.txt errors, and Core Web Vitals
            failures. We also implement structured data markup (schema) to help
            your pages qualify for rich results — including FAQs, reviews,
            breadcrumbs, and more — which directly improves your visibility and
            click-through rate in Google search.
          </p>

          {/* Local SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Local SEO for Hyderabad Businesses
          </h3>
          <p className="text-gray-400 mb-6">
            For businesses serving customers in Hyderabad — whether across the
            entire city or in specific localities like Kondapur, Madhapur,
            Kukatpally, Ameerpet, Dilsukhnagar, or LB Nagar — Local SEO is one
            of the most direct and high-ROI strategies available. We optimise
            your Google Business Profile with accurate business information,
            compelling descriptions, high-quality photos, service area
            configuration, Q&amp;A management, and an active review generation
            strategy. We also build consistent, accurate local citations across
            major Indian and global directories — including Justdial, Sulekha,
            IndiaMART, Yelp, and dozens more — and create location-specific
            landing pages that help you rank in the Google Local Pack and map
            results for your target service areas across Hyderabad.
          </p>

          {/* Keyword Research */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Keyword Research & Content Strategy
          </h3>
          <p className="text-gray-400 mb-6">
            The foundation of effective SEO is targeting the right keywords —
            the exact search terms that your potential customers in Hyderabad
            are using when they are looking for what you offer. We perform
            exhaustive keyword research to identify high-intent, commercially
            valuable search terms across every stage of the buying funnel — from
            awareness-stage informational queries to high-intent transactional
            searches. We then build a complete content strategy around these
            keywords, including optimised service pages, blog content calendars,
            FAQ sections, pillar pages, and supporting cluster content —
            designed to attract qualified traffic, establish your topical
            authority, and drive conversions for your business.
          </p>

          {/* Link Building */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Link Building & Off-Page SEO
          </h3>
          <p className="text-gray-400 mb-6">
            Backlinks — links from other websites pointing to yours — remain one
            of Google's most significant ranking signals. The quality,
            relevance, and authority of the websites linking to you directly
            influence your domain authority and your ability to rank
            competitively for high-value keywords. We earn high-quality
            backlinks for your website through white-hat outreach, guest posting
            on relevant publications, digital PR, content partnerships, and
            strategic link acquisition from authoritative Indian and
            international websites. Every link we build is manually vetted for
            quality and relevance — ensuring that your backlink profile grows
            sustainably and never puts your site at risk of a Google penalty.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>SEO Audit & Competitive Analysis</li>
            <li>On-Page SEO Optimisation</li>
            <li>Technical SEO & Core Web Vitals</li>
            <li>Local SEO for Hyderabad</li>
            <li>Keyword Research & Content Strategy</li>
            <li>Link Building & Off-Page SEO</li>
          </ul>
        </div>

        {/* ================= LOCAL SEO ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Local SEO Services Across Hyderabad
          </h2>
          <p className="text-gray-400 mb-4">
            Hyderabad is a sprawling, fast-growing city with distinct commercial
            hubs, residential zones, and business districts — each with its own
            search behaviour and competitive landscape. Whether your customers
            are searching for services in the IT corridor of Hitech City and
            Gachibowli, the commercial heart of Ameerpet and Somajiguda, the
            upscale neighbourhoods of Banjara Hills and Jubilee Hills, or the
            densely populated areas of Kukatpally, LB Nagar, and Dilsukhnagar —
            our Local SEO strategies are built to get you visible exactly where
            your customers are searching.
          </p>
          <p className="text-gray-400 mb-4">
            We help you appear in Google's Local Pack — the prominent map
            listings that appear at the very top of local search results — as
            well as in the standard organic results for "near me" searches,
            service-plus-location queries, and neighbourhood-specific searches
            that drive high-intent, ready-to-act customers directly to your
            business. Local SEO is particularly powerful for clinics and
            hospitals, restaurants and cafes, retail shops, law firms, interior
            designers, salons, real estate offices, educational institutes, and
            any other business that serves a local customer base.
          </p>
          <p className="text-gray-400">
            Our local SEO service includes complete Google Business Profile
            management, local citation building across 50+ Indian and global
            directories, location-specific landing page creation, review
            generation and reputation management, and local link acquisition
            from Hyderabad-based websites and publications — giving you a
            comprehensive local SEO presence that competitors will struggle to
            match.
          </p>
        </div>

        {/* ================= INDUSTRIES ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Industries We Serve in Hyderabad
          </h2>
          <p className="text-gray-400 mb-4">
            Our SEO team brings hands-on experience across a wide range of
            industries that define Hyderabad's dynamic economy. We understand
            the unique search behaviour, competitive landscape, regulatory
            considerations, and content requirements of each sector — enabling
            us to build strategies that are genuinely industry-specific rather
            than generic. We have delivered measurable SEO results for
            businesses in:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>IT Services, Software & SaaS Companies</li>
            <li>Real Estate Developers & Property Consultants</li>
            <li>Healthcare, Hospitals, Clinics & Diagnostics</li>
            <li>E-commerce & Online Retail</li>
            <li>Education, EdTech & Coaching Institutes</li>
            <li>Restaurants, Cafes & Food & Beverage Businesses</li>
            <li>Legal Services & Law Firms</li>
            <li>Interior Design, Architecture & Construction</li>
            <li>Travel, Tourism & Hospitality</li>
            <li>Pharma & Life Sciences</li>
            <li>Manufacturing & Industrial Companies</li>
            <li>Financial Services, Accounting & Insurance</li>
          </ul>
        </div>

        {/* ================= PROCESS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Our SEO Process — How We Deliver Results
          </h2>
          <p className="text-gray-400 mb-6">
            We follow a structured, transparent, and results-oriented SEO
            process that ensures every action we take is purposeful, measurable,
            and aligned with your business goals. Here is exactly how we work:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Business Discovery & Goal Setting
          </h3>
          <p className="text-gray-400 mb-4">
            We begin every engagement with a thorough discovery session to
            understand your business, your target audience, your revenue goals,
            your current digital presence, and the competitive landscape in your
            specific market and industry in Hyderabad. This foundation ensures
            that every decision we make throughout the SEO programme is grounded
            in your actual business context — not generic best practices applied
            blindly.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — Comprehensive SEO Audit
          </h3>
          <p className="text-gray-400 mb-4">
            We conduct a detailed audit of your website covering over 150 SEO
            factors — including technical health, on-page optimisation, content
            quality and gaps, backlink profile analysis, keyword ranking
            baseline, and user experience signals. The audit produces a clear,
            prioritised action plan that forms the roadmap for the entire
            programme. We share this openly with you so you understand exactly
            what we are doing and why.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Keyword Research & Content Mapping
          </h3>
          <p className="text-gray-400 mb-4">
            We identify the most valuable keywords for your business — balancing
            search volume, ranking difficulty, and commercial intent — and map
            them to the right pages on your website. Where gaps exist between
            your current content and the keywords your customers are searching,
            we build a content plan to fill them systematically over time.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Technical & On-Page Implementation
          </h3>
          <p className="text-gray-400 mb-4">
            We implement all technical fixes and on-page optimisations
            identified in the audit — from site speed improvements and crawl
            error resolution to meta tag optimisation, internal linking
            restructuring, schema markup implementation, and mobile usability
            fixes. We work with your existing development team or handle
            implementation directly, depending on your setup.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Content Creation & Optimisation
          </h3>
          <p className="text-gray-400 mb-4">
            Our specialist SEO content writers produce high-quality,
            search-intent-aligned content for your website — including optimised
            service pages, location landing pages, blog articles, FAQs, and
            pillar content. Every piece is written for both your human audience
            and Google's algorithms — striking the balance between genuinely
            useful content and strategic keyword integration that drives
            rankings.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Link Building & Authority Development
          </h3>
          <p className="text-gray-400 mb-4">
            We execute a targeted, white-hat link building programme to earn
            high-quality backlinks from authoritative, relevant websites —
            growing your domain authority and signalling to Google that your
            site deserves to rank higher for competitive keywords. Every link
            acquisition is manual, vetted, and aligned with your brand and
            niche.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 7 — Reporting, Review & Continuous Improvement
          </h3>
          <p className="text-gray-400 mb-4">
            Every month, we deliver a clear, detailed SEO performance report
            covering keyword ranking movements, organic traffic growth, leads
            and conversions from organic search, backlinks earned, and technical
            health status. We hold regular review calls to walk you through the
            data, discuss what's working, and refine the strategy based on
            performance insights and any changes in the competitive landscape.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>Business Discovery & Goal Setting</li>
            <li>Comprehensive SEO Audit</li>
            <li>Keyword Research & Content Mapping</li>
            <li>Technical & On-Page Implementation</li>
            <li>Content Creation & Optimisation</li>
            <li>Link Building & Authority Development</li>
            <li>Monthly Reporting & Strategy Review</li>
          </ul>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Why Choose Our SEO Services in Hyderabad?
          </h2>
          <p className="text-gray-400 mb-6">
            Hyderabad has hundreds of digital marketing agencies claiming to
            deliver SEO results. Here is what genuinely sets our SEO services
            apart from the rest — and why businesses across the city trust us
            with their organic growth:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Deep Local Market Knowledge
          </h3>
          <p className="text-gray-400 mb-4">
            We are based in Hyderabad and have spent years building expertise in
            the local search landscape across every major industry in the city.
            We understand how Hyderabad consumers search, what local competition
            looks like in different sectors, and which strategies deliver the
            fastest results in this specific market — giving us an advantage
            that agencies outside Hyderabad simply cannot match.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ 100% Ethical, White Hat SEO
          </h3>
          <p className="text-gray-400 mb-4">
            We follow Google's Webmaster Guidelines strictly and exclusively. We
            never use black-hat tactics like link spam, keyword stuffing, hidden
            text, cloaking, or private blog networks — shortcuts that might
            deliver a brief ranking boost before resulting in a serious Google
            penalty that can devastate your organic traffic for months. Every
            strategy we execute is ethical, sustainable, and built for long-term
            results.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Dedicated, Experienced SEO Specialists
          </h3>
          <p className="text-gray-400 mb-4">
            You work with a dedicated team of experienced SEO professionals — an
            SEO strategist, technical SEO specialist, content writer, and link
            building expert assigned specifically to your account. You are never
            handed off to a junior executive or lost in a large agency's client
            roster. Your team is invested in your results and accountable for
            delivering them.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Full Transparency — No Black Boxes
          </h3>
          <p className="text-gray-400 mb-4">
            We believe you should always know exactly what we are doing, why we
            are doing it, and what results it is producing. Our monthly reports
            are detailed, jargon-free, and honest — covering everything from
            keyword ranking movements and traffic growth to the specific
            activities completed that month and what's planned next. We never
            hide behind vague activity reports or meaningless vanity metrics.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Results Tied to Business Outcomes
          </h3>
          <p className="text-gray-400 mb-4">
            We measure success in business terms — organic leads, enquiries,
            sales, and revenue — not just rankings and traffic numbers. Every
            SEO strategy we build is tied to your actual business objectives,
            and every report we produce connects organic search performance to
            the metrics that matter to you as a business owner or marketing
            leader.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>Deep Local Hyderabad Market Knowledge</li>
            <li>100% White Hat, Ethical SEO Only</li>
            <li>Dedicated Experienced SEO Team</li>
            <li>Full Transparency in Reporting</li>
            <li>Business Outcome-Focused Strategy</li>
          </ul>
        </div>

        {/* ================= RESULTS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            What Results Can You Expect?
          </h2>
          <p className="text-gray-400 mb-4">
            SEO is a compounding, long-term investment — and the results reflect
            that. Here is a realistic timeline of what you can expect when you
            partner with us for SEO services in Hyderabad:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong className="text-white">Month 1–2:</strong> Full SEO audit
              complete. Technical fixes deployed. On-page optimisation
              implemented across priority pages. Keyword tracking established.
              Baseline organic performance benchmarked across all target terms.
            </li>
            <li>
              <strong className="text-white">Month 3–4:</strong> Ranking
              improvements visible for lower and medium-competition keywords.
              Organic traffic beginning to grow noticeably. Content programme
              live and producing initial output. Local SEO improvements
              reflected in Google Business Profile performance metrics.
            </li>
            <li>
              <strong className="text-white">Month 5–6:</strong> Significant
              ranking improvements for primary target keywords. Organic leads
              and enquiry volume increasing measurably. Local pack visibility
              stronger across target service areas in Hyderabad. Domain
              authority trend clearly upward.
            </li>
            <li>
              <strong className="text-white">Month 7–12:</strong> Rankings
              stabilise and compound across the full keyword universe. Multiple
              first-page and top-3 positions achieved for high-value commercial
              keywords. Organic traffic becomes a reliable, growing revenue
              channel. ROI from SEO investment clearly demonstrated in business
              metrics.
            </li>
          </ul>
        </div>

        {/* ================= FAQ ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Frequently Asked Questions — SEO Services in Hyderabad
          </h2>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              How long does SEO take to show results in Hyderabad?
            </strong>
            <br />
            SEO typically produces noticeable improvements in rankings and
            organic traffic within 3 to 6 months, though the exact timeline
            depends on your current website authority, the competitiveness of
            your target keywords, and the volume of optimisation work required.
            Highly competitive industries in Hyderabad — such as real estate,
            healthcare, and IT services — may require 6 to 12 months to achieve
            significant first-page rankings. The key distinction from paid
            advertising is that the results of SEO are durable and continue to
            compound long after the initial investment.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              Is SEO worth it for a small business in Hyderabad?
            </strong>
            <br />
            Absolutely. In fact, SEO often delivers its highest ROI for small
            and medium businesses competing for local customers in Hyderabad. By
            ranking prominently in local search results and the Google Local
            Pack, a well-optimised small business can compete directly with much
            larger competitors for the attention of high-intent local customers
            — at a fraction of the cost of paid advertising. Local SEO in
            particular is one of the most cost-effective growth strategies
            available to Hyderabad's small business community.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              How much do SEO services cost in Hyderabad?
            </strong>
            <br />
            SEO pricing in Hyderabad varies based on the scope of work, the
            competitiveness of your target keywords, and the size and current
            condition of your website. We offer flexible monthly retainer
            packages suited to small businesses, growing companies, and larger
            enterprises. Contact us for a free SEO audit and custom quote — we
            will give you a transparent picture of what investment is needed and
            what results you can realistically expect.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              Do you work with businesses outside of Hyderabad?
            </strong>
            <br />
            Yes. While Hyderabad is our home market and where we have the
            deepest local expertise, we work with businesses across India and
            internationally. We have delivered successful SEO campaigns for
            clients in Bangalore, Mumbai, Delhi, Chennai, and globally — and we
            bring the same rigour, transparency, and results focus to every
            engagement regardless of geography.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              What is the difference between Local SEO and regular SEO?
            </strong>
            <br />
            Regular (or organic) SEO focuses on improving your website's
            visibility in standard Google search results for keywords relevant
            to your business — which may include national or international
            audiences. Local SEO specifically targets geographic search queries
            — "SEO agency in Hyderabad", "dentist near Banjara Hills",
            "restaurants in Jubilee Hills" — and focuses heavily on your Google
            Business Profile, local citations, and location-specific on-page
            optimisation. Most Hyderabad businesses benefit from both, with the
            balance depending on whether you serve customers locally,
            nationally, or both.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              Can you guarantee first-page Google rankings?
            </strong>
            <br />
            No honest SEO agency can guarantee specific rankings, because
            Google's algorithm is independent and outside anyone's control. What
            we can guarantee is a rigorous, data-driven strategy, complete
            transparency in everything we do, consistent and high-quality
            execution, and a proven track record of delivering measurable
            improvements in organic visibility for our clients across Hyderabad.
            Our results speak for themselves — and we are happy to share
            relevant case studies during your initial consultation.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business with SEO in Hyderabad?
        </h2>
        <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
          Get a free, no-obligation SEO audit worth ₹5,000 — and find out
          exactly what's stopping your website from ranking on the first page of
          Google. Our team will analyse your site, review your competition, and
          present a clear, actionable roadmap to organic growth in Hyderabad's
          search results.
        </p>
        <p className="text-gray-400 mb-6">
          Let's put your business at the top of Google — and keep it there.
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
