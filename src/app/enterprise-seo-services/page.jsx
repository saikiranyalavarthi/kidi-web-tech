"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnterpriseSEOPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Enterprise SEO Services in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Scalable, data-driven enterprise SEO solutions built for large
          organisations, multi-location businesses, and high-authority websites
          looking to dominate search at scale. We combine deep technical
          expertise, enterprise-grade content frameworks, and authoritative link
          acquisition to deliver compound organic growth across thousands of
          pages and target markets.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/seo-services">SEO Services</Link>
          <span className="mx-2">›</span>
          <span>Enterprise SEO Services</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Leading Enterprise SEO Company in Hyderabad
            </h2>
            <p className="text-gray-400 mb-4">
              We are one of Hyderabad's most trusted enterprise SEO agencies,
              partnering with large corporations, national brands, e-commerce
              giants, and multi-location service businesses to drive scalable
              organic growth. Our enterprise SEO team combines senior-level
              strategy with advanced technical implementation, programmatic
              content at scale, and high-authority link acquisition to deliver
              results that move the needle at the enterprise level.
            </p>
            <p className="text-gray-400 mb-4">
              Enterprise websites come with a unique set of challenges —
              thousands of pages to manage, complex site architectures, multiple
              stakeholders, legacy technical debt, and fierce competition from
              well-established national and global brands. Our team is built
              specifically to handle this complexity, delivering structured SEO
              programmes that align with your business objectives and integrate
              seamlessly with your existing marketing, IT, and content teams.
            </p>
            <p className="text-gray-400">
              Whether you operate a large e-commerce platform with hundreds of
              thousands of product pages, a national service brand with offices
              across multiple cities, a SaaS company targeting enterprise
              buyers, or a media and publishing platform scaling its organic
              audience — our enterprise SEO solutions are engineered to match
              your scale, your ambition, and your competitive landscape.
            </p>
          </div>
          <Image
            src="/assets/enterprise-seo.jpg"
            alt="Enterprise SEO Services Hyderabad"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= WHAT IS ENTERPRISE SEO ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">
          What Is Enterprise SEO and Why Does Your Organisation Need It?
        </h2>
        <p className="text-gray-400 mb-4">
          Enterprise SEO is a specialised branch of search engine optimisation
          designed for large-scale websites and organisations that require
          sophisticated strategy, cross-functional coordination, and the
          technical capability to manage and optimise thousands — or even
          millions — of web pages. Unlike standard SEO, which focuses on a small
          to mid-sized site with a manageable number of pages, enterprise SEO
          must account for complex site hierarchies, large product catalogues,
          multiple regional or language variations, advanced technical
          infrastructure, and the need to coordinate across multiple internal
          departments.
        </p>
        <p className="text-gray-400 mb-4">
          For large organisations, organic search is one of the most valuable
          and scalable customer acquisition channels available. A well-executed
          enterprise SEO strategy can drive millions of high-intent visitors to
          your website every month — without paying per click. As your domain
          authority grows and your content footprint expands, the compounding
          effect of enterprise SEO means that your cost-per-acquisition
          continues to fall even as your traffic and revenue grows.
        </p>
        <p className="text-gray-400">
          At the enterprise level, even a one-position improvement on a
          high-volume commercial keyword can translate into thousands of
          additional monthly visitors and significant incremental revenue. The
          stakes are high, the competition is fierce, and the complexity is real
          — which is why enterprise SEO requires a specialist team with the
          tools, processes, and senior expertise to execute at this level
          consistently.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Our Enterprise SEO Services
          </h2>
          <p className="text-gray-400 mb-6">
            We offer a comprehensive suite of enterprise SEO services designed
            to address every dimension of search visibility at scale — from deep
            technical audits and site architecture planning to large-scale
            content programmes, international SEO, and executive-level
            reporting. Every service is delivered by experienced specialists and
            backed by enterprise-grade tooling.
          </p>

          {/* Technical SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Enterprise Technical SEO & Site Architecture
          </h3>
          <p className="text-gray-400 mb-6">
            Technical health is the foundation of every enterprise SEO
            programme. Large sites are uniquely vulnerable to crawl budget
            waste, duplicate content at scale, canonicalisation errors, faceted
            navigation issues, JavaScript rendering problems, and complex
            redirect chains that silently destroy link equity. Our enterprise
            technical SEO team conducts exhaustive audits using industry-leading
            tools including Screaming Frog, Sitebulb, DeepCrawl, and Google
            Search Console at scale to identify and prioritise every technical
            issue impacting your crawlability, indexability, and ranking
            potential. We then work directly with your development team to
            implement fixes in a structured, prioritised roadmap — ensuring that
            the most impactful technical improvements are deployed first and
            tracked rigorously.
          </p>

          {/* Content at Scale */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Programmatic & Large-Scale Content Strategy
          </h3>
          <p className="text-gray-400 mb-6">
            Content is the currency of enterprise SEO. For large organisations,
            the opportunity lies not just in creating individual high-quality
            pieces, but in building a systematic, scalable content machine that
            targets thousands of valuable keywords across the full funnel — from
            high-volume informational queries to high-intent commercial and
            transactional searches. We design and execute enterprise content
            strategies that include topical authority mapping, pillar and
            cluster architecture, programmatic landing page frameworks for
            location-based or product-based pages, and an editorial calendar
            that supports consistent, compounding content output. Every piece of
            content we produce is rooted in search intent data, competitive gap
            analysis, and your brand's unique positioning.
          </p>

          {/* Link Authority */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Enterprise Link Building & Digital PR
          </h3>
          <p className="text-gray-400 mb-6">
            At the enterprise level, link building requires a strategic,
            brand-aligned approach that goes far beyond basic outreach. We
            design and execute digital PR campaigns, thought leadership
            programmes, data-led content assets, and strategic partnerships that
            earn high-authority backlinks from tier-1 media outlets, industry
            publications, government domains, academic institutions, and
            authoritative vertical websites. Every link we build is manually
            vetted for relevance, authority, and editorial quality — protecting
            your domain's reputation while systematically growing your link
            profile and domain authority to outpace even the most entrenched
            competitors.
          </p>

          {/* International SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            4. International & Multi-Location SEO
          </h3>
          <p className="text-gray-400 mb-6">
            For enterprises operating across multiple cities, states, or
            countries, international and multi-location SEO is critical to
            ensuring that the right content reaches the right audience in the
            right geography. We implement technically precise hreflang
            configurations, country and language-specific site structures
            (ccTLDs, subdirectories, or subdomains), geo-targeted content
            localisation, and city-level landing page programmes designed to
            dominate local search in every market you serve. Whether you're
            expanding from Hyderabad to all major Indian metros, or scaling
            globally from India, we have the expertise and framework to make it
            happen efficiently and correctly.
          </p>

          {/* E-commerce SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Enterprise E-commerce SEO
          </h3>
          <p className="text-gray-400 mb-6">
            Large e-commerce platforms face SEO challenges at a scale that
            standard agencies simply are not equipped to handle — from managing
            duplicate content across thousands of product variants and category
            pages, to optimising faceted navigation without wasting crawl
            budget, to scaling product page content creation and earning
            backlinks that lift the authority of the entire domain. Our
            enterprise e-commerce SEO framework covers category page
            optimisation, product schema implementation, structured data for
            rich results (reviews, pricing, availability), crawl efficiency
            improvements, and a strategic content programme that supports both
            top-of-funnel discovery and bottom-of-funnel conversion.
          </p>

          {/* Reporting */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Enterprise SEO Reporting, Analytics & BI Integration
          </h3>
          <p className="text-gray-400 mb-6">
            Enterprise stakeholders need more than a standard keyword ranking
            report. We build custom enterprise SEO dashboards integrated with
            Google Search Console, Google Analytics 4, SEMrush, Ahrefs, and your
            internal BI tools to give leadership teams a real-time, unified view
            of organic performance, revenue attribution, keyword movement,
            content ROI, and competitive benchmarking. Our reporting frameworks
            are designed to communicate SEO value in business terms — traffic,
            leads, revenue, and market share — making it easy to justify ongoing
            investment and align the SEO programme with broader business
            objectives.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>Enterprise Technical SEO & Site Architecture</li>
            <li>Programmatic & Large-Scale Content Strategy</li>
            <li>Enterprise Link Building & Digital PR</li>
            <li>International & Multi-Location SEO</li>
            <li>Enterprise E-commerce SEO</li>
            <li>Custom Reporting & BI Integration</li>
          </ul>
        </div>

        {/* ================= INDUSTRIES ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Industries We Serve with Enterprise SEO
          </h2>
          <p className="text-gray-400 mb-4">
            Our enterprise SEO team brings deep vertical expertise across the
            industries that matter most in Hyderabad and across India. We
            understand the regulatory environments, competitive dynamics,
            customer search behaviour, and content requirements specific to each
            sector — allowing us to build strategies that are genuinely tailored
            rather than templated. We deliver enterprise SEO programmes for:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Large E-commerce Platforms & Marketplaces</li>
            <li>BFSI — Banking, Financial Services & Insurance</li>
            <li>IT Services, SaaS & Technology Companies</li>
            <li>Healthcare Systems, Hospital Groups & Pharma</li>
            <li>Real Estate Developers & Property Portals</li>
            <li>EdTech Platforms & Higher Education Institutions</li>
            <li>Media, News & Publishing Platforms</li>
            <li>Manufacturing, Logistics & Industrial Enterprises</li>
            <li>Hospitality Chains, Travel Portals & Tourism Brands</li>
            <li>Retail Chains & FMCG Companies</li>
          </ul>
        </div>

        {/* ================= PROCESS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Our Enterprise SEO Process
          </h2>
          <p className="text-gray-400 mb-6">
            Enterprise SEO demands a structured, rigorous, and collaborative
            process that integrates with your organisation's existing workflows
            and delivers consistent, measurable output month after month. Here
            is the framework we follow for every enterprise engagement:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Enterprise Discovery & Stakeholder Alignment
          </h3>
          <p className="text-gray-400 mb-4">
            Every enterprise SEO engagement begins with a deep discovery phase
            involving key stakeholders from marketing, IT, content, and
            leadership. We map your business objectives, revenue targets,
            existing tech stack, content capabilities, and competitive
            landscape. This phase produces a shared understanding of what
            success looks like and how the SEO programme will integrate with
            your broader digital marketing strategy.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — Comprehensive Technical & Content Audit
          </h3>
          <p className="text-gray-400 mb-4">
            We run a full-scale technical audit covering crawlability,
            indexation, site speed, Core Web Vitals, JavaScript rendering,
            duplicate content, internal linking, XML sitemaps, robots.txt
            configuration, structured data, and mobile usability across your
            entire domain. Simultaneously, we audit your existing content
            library for quality, relevance, and keyword coverage — identifying
            high-value pages to optimise, thin content to consolidate, and topic
            gaps to fill with new content.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Strategic Keyword Research & Topical Mapping
          </h3>
          <p className="text-gray-400 mb-4">
            At the enterprise level, keyword research goes far beyond a simple
            list of target terms. We build a comprehensive keyword universe
            covering thousands of search queries across the full funnel —
            segmented by intent, topic cluster, business unit, product line, and
            geography. This topical map forms the blueprint for your entire
            content and on-page optimisation programme and ensures that your
            site builds topical authority systematically over time.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Technical Implementation & On-Page Optimisation
          </h3>
          <p className="text-gray-400 mb-4">
            Working in close collaboration with your development team, we
            implement all critical technical fixes and on-page optimisations
            according to a prioritised roadmap. We provide detailed
            implementation briefs, QA support, and post-deployment validation to
            ensure every change is correctly implemented and tracked. For
            large-scale on-page work, we use templated optimisation frameworks
            that allow high-volume updates to be deployed efficiently without
            sacrificing quality.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Content Production & Optimisation at Scale
          </h3>
          <p className="text-gray-400 mb-4">
            We design and execute a structured content programme aligned with
            your topical map and business priorities. This includes optimising
            high-potential existing pages, developing new pillar and cluster
            content, building programmatic landing page frameworks for location
            or product variations, and establishing an ongoing editorial
            calendar. All content is produced or reviewed by specialist writers
            with subject matter expertise relevant to your industry.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Authority Building & Digital PR
          </h3>
          <p className="text-gray-400 mb-4">
            Our link building and digital PR team executes targeted outreach,
            thought leadership placement, data-driven content campaigns, and
            strategic partnership programmes to earn authoritative backlinks at
            scale. Every link campaign is aligned with your brand guidelines and
            designed to build sustainable, long-term domain authority — not just
            short-term ranking boosts.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 7 — Performance Reporting & Continuous Optimisation
          </h3>
          <p className="text-gray-400 mb-4">
            We deliver monthly enterprise SEO reports covering keyword ranking
            movements across your full target set, organic traffic and revenue
            attribution, content performance, link acquisition, technical health
            trends, and competitive benchmarking. We hold regular strategy
            reviews with your team to interpret the data, identify new
            opportunities, and refine the programme based on what the data tells
            us.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>Enterprise Discovery & Stakeholder Alignment</li>
            <li>Technical & Content Audit</li>
            <li>Keyword Research & Topical Mapping</li>
            <li>Technical Implementation & On-Page Optimisation</li>
            <li>Content Production at Scale</li>
            <li>Authority Building & Digital PR</li>
            <li>Performance Reporting & Continuous Optimisation</li>
          </ul>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Why Choose Us for Enterprise SEO in Hyderabad?
          </h2>
          <p className="text-gray-400 mb-6">
            Enterprise SEO is a long-term, high-stakes engagement. Choosing the
            right partner can mean the difference between compounding organic
            growth and wasted budget. Here's what separates our enterprise SEO
            programme from the rest:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Dedicated Enterprise SEO Team
          </h3>
          <p className="text-gray-400 mb-4">
            When you work with us, you get a dedicated, senior-level team — not
            a single account manager juggling 30 clients. Your enterprise
            account includes an SEO strategist, a technical SEO lead, a content
            strategist, specialist content writers, a link building team, and a
            dedicated analytics and reporting specialist. Every person on your
            team is experienced, accountable, and focused on your programme's
            outcomes.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Enterprise-Grade Tools & Technology
          </h3>
          <p className="text-gray-400 mb-4">
            We invest in the best enterprise SEO tooling — Screaming Frog
            Enterprise, Ahrefs Enterprise, SEMrush Business, Sitebulb,
            BrightEdge data integrations, custom GA4 dashboards, and proprietary
            crawl and content analysis workflows. This means we can audit,
            monitor, and optimise your site at the scale and speed that
            enterprise programmes demand.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Deep Integration with Your Internal Teams
          </h3>
          <p className="text-gray-400 mb-4">
            Enterprise SEO doesn't happen in isolation — it requires close
            collaboration with your development, content, marketing, and
            leadership teams. We operate as a true extension of your
            organisation, embedding into your existing workflows, attending
            relevant internal meetings, providing clear implementation briefs
            for your dev team, and aligning our deliverables with your broader
            marketing calendar and business objectives.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Proven Results at Enterprise Scale
          </h3>
          <p className="text-gray-400 mb-4">
            We have delivered enterprise SEO results for large organisations
            across India — driving double-digit organic traffic growth,
            first-page rankings for thousands of competitive keywords, and
            measurable revenue impact from organic search. Our case studies span
            e-commerce, BFSI, SaaS, healthcare, and media — and we bring the
            learnings from each vertical to every new engagement.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Revenue-Focused, Not Vanity-Metric-Focused
          </h3>
          <p className="text-gray-400 mb-4">
            We don't just track rankings and traffic. We align every metric to
            business outcomes — organic revenue, qualified lead volume, customer
            acquisition cost from organic, and market share growth. Our
            reporting is built to speak the language of your CFO and CEO, not
            just your SEO team.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-2">
            <li>Dedicated Senior Enterprise SEO Team</li>
            <li>Enterprise-Grade Tooling & Technology</li>
            <li>Deep Integration with Internal Teams</li>
            <li>Proven Enterprise-Scale Results</li>
            <li>Revenue-First Reporting Framework</li>
          </ul>
        </div>

        {/* ================= RESULTS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            What Results Can You Expect from Enterprise SEO?
          </h2>
          <p className="text-gray-400 mb-4">
            Enterprise SEO is a strategic, long-term investment with compounding
            returns. The scale of results achievable is significantly larger
            than standard SEO — but so is the time and effort required to reach
            them. Here is a realistic picture of what you can expect at each
            stage of an enterprise SEO engagement:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong className="text-white">Month 1–2:</strong> Discovery, full
              technical and content audit complete. Prioritised implementation
              roadmap delivered. Critical technical fixes deployed in
              collaboration with your dev team. Baseline keyword rankings and
              traffic benchmarks established across your full target set.
            </li>
            <li>
              <strong className="text-white">Month 3–4:</strong> On-page
              optimisation deployed across priority pages. Content programme
              live and producing initial output. Early keyword ranking
              improvements visible for lower-competition targets. Technical
              health metrics showing measurable improvement in GSC data.
            </li>
            <li>
              <strong className="text-white">Month 5–6:</strong> Organic traffic
              growth becoming statistically significant. Core target keywords
              moving toward page one. Link building programme gaining momentum.
              Local and international pages showing improved visibility in
              target geographies.
            </li>
            <li>
              <strong className="text-white">Month 7–12:</strong> Compound
              growth in organic traffic and keyword rankings across the full
              target set. Multiple primary commercial keywords ranking in top-3
              positions. Organic channel contributing measurably to revenue and
              pipeline. Domain authority trend clearly upward relative to
              competitors.
            </li>
            <li>
              <strong className="text-white">Year 2 and Beyond:</strong> SEO
              becomes a dominant, cost-efficient customer acquisition channel.
              Topical authority established across core business verticals.
              Competitive moat built through content depth, link authority, and
              technical excellence that is difficult for competitors to
              replicate quickly.
            </li>
          </ul>
        </div>

        {/* ================= FAQ ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Frequently Asked Questions — Enterprise SEO
          </h2>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              What makes enterprise SEO different from standard SEO?
            </strong>
            <br />
            Enterprise SEO differs in scale, complexity, and strategy. Standard
            SEO typically manages sites with dozens to hundreds of pages,
            targeting a manageable number of keywords and working with a small
            team. Enterprise SEO manages sites with thousands to millions of
            pages, requires cross-functional collaboration with development,
            legal, marketing, and leadership teams, demands enterprise-grade
            tooling, and must account for complex technical challenges like
            crawl budget management, faceted navigation, international hreflang,
            and large-scale content governance. The strategic, technical, and
            operational demands are fundamentally different.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              How long does enterprise SEO take to show results?
            </strong>
            <br />
            Enterprise SEO timelines are longer than standard SEO due to the
            scale of implementation required and the typically more competitive
            keyword landscape. Most enterprise clients begin to see meaningful
            ranking and traffic improvements within 4–6 months of programme
            launch. Significant organic revenue impact is typically visible
            within 9–12 months. The full compounding effect of an enterprise SEO
            programme — including topical authority, domain authority growth,
            and multi-market dominance — typically matures over 18–24 months of
            consistent execution.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              How do you integrate with our internal development team?
            </strong>
            <br />
            We are experienced in working within enterprise development
            environments — including agile sprint processes, JIRA-based ticket
            systems, staging and QA workflows, and change management procedures.
            We provide detailed, developer-ready implementation briefs for every
            technical SEO recommendation, participate in relevant sprint
            planning sessions, and conduct post-deployment QA to verify that
            changes have been implemented correctly. We adapt to your team's
            workflow, not the other way around.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              Can you handle international SEO for our multi-country operations?
            </strong>
            <br />
            Yes. International and multi-location SEO is a core capability of
            our enterprise SEO team. We have experience implementing technically
            precise hreflang configurations, managing ccTLD and subdirectory
            site structures, localising content for different markets, and
            building geo-targeted link acquisition campaigns. Whether you are
            expanding across Indian metros or scaling into Southeast Asia, the
            Middle East, or global markets, we have the framework and expertise
            to support your international SEO requirements.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              How do you measure and report on enterprise SEO ROI?
            </strong>
            <br />
            We build custom enterprise SEO reporting frameworks that connect
            organic search performance to business outcomes. This includes
            organic revenue attribution (via GA4 and your CRM), qualified lead
            volume from organic, cost-per-acquisition from organic versus paid
            channels, keyword ranking progress across your full target universe,
            content performance metrics, and competitive market share analysis.
            We deliver monthly executive summaries and hold quarterly business
            review calls with senior stakeholders to align on progress and
            strategic direction.
          </p>

          <p className="text-gray-400 mt-4">
            <strong className="text-white">
              What is the cost of enterprise SEO services in Hyderabad?
            </strong>
            <br />
            Enterprise SEO investment varies based on the size and complexity of
            your website, the competitiveness of your target keywords, the scope
            of technical and content work required, and the markets you operate
            in. We offer structured enterprise retainer programmes designed for
            sustained, long-term engagement with a dedicated specialist team.
            Contact us for a discovery call and initial assessment — we'll
            provide a transparent proposal aligned with your goals and budget.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Scale Your Organic Growth at Enterprise Level?
        </h2>
        <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
          Get a free enterprise SEO assessment worth ₹15,000 — including a
          technical site review, competitive landscape analysis, and a
          high-level strategic roadmap tailored to your organisation's goals.
          Our senior team will walk you through exactly where your biggest
          organic opportunities lie and how we would approach capturing them.
        </p>
        <p className="text-gray-400 mb-6">
          Let's build the organic channel your business deserves.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold"
        >
          Request Enterprise SEO Assessment →
        </Link>
      </section>
    </div>
  );
}
