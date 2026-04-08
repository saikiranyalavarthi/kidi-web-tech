"use client";

import Image from "next/image";
import Link from "next/link";

export default function TechnicalSEOPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Technical SEO Services in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Fix the hidden technical issues holding your website back from
          Google's first page. Our expert technical SEO services in Hyderabad
          cover site speed, Core Web Vitals, crawlability, structured data, and
          everything in between — so search engines can find, index, and rank
          your website with confidence.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/seo-services">SEO Services</Link>
          <span className="mx-2">›</span>
          <span>Technical SEO</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              What Is Technical SEO?
            </h2>
            <p className="text-gray-400 mb-4">
              Technical SEO refers to the process of optimizing the
              infrastructure of your website so that search engine crawlers like
              Googlebot can efficiently access, crawl, interpret, and index your
              web pages. While on-page SEO focuses on content and keywords, and
              off-page SEO focuses on backlinks, technical SEO is the foundation
              that supports all your other SEO efforts.
            </p>
            <p className="text-gray-400 mb-4">
              Without a technically sound website, even the best content and
              strongest backlinks won't get you to the top of Google. If your
              pages are slow, have crawl errors, duplicate content, broken
              links, or poor mobile usability, Google will struggle to properly
              rank your site — no matter how good the rest of your strategy is.
            </p>
            <p className="text-gray-400">
              Our technical SEO specialists in Hyderabad diagnose and fix every
              technical barrier standing between your website and higher
              rankings — turning your site into a high-performance,
              search-engine-friendly asset that Google loves to crawl and rank.
            </p>
          </div>
          <Image
            src="/assets/technical-seo.jpg"
            alt="Technical SEO Services Hyderabad"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= WHY TECHNICAL SEO MATTERS ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">
          Why Technical SEO Is the Foundation of Every Successful SEO Strategy
        </h2>
        <p className="text-gray-400 mb-4">
          Many businesses invest heavily in content creation and link building
          but see disappointing results — because they've skipped the most
          critical step: fixing their website's technical foundation. Google
          processes billions of web pages every day, and it has limited time to
          spend crawling any individual website. If your site makes it hard for
          Googlebot to crawl and understand your pages, your content will never
          rank — no matter how good it is.
        </p>
        <p className="text-gray-400 mb-4">
          In 2024 and beyond, Google's ranking algorithm places enormous weight
          on user experience signals. Core Web Vitals — which measure loading
          speed, interactivity, and visual stability — are now confirmed Google
          ranking factors. A website that loads slowly, shifts around while
          loading, or takes too long to respond will rank lower than competitors
          who have invested in technical performance optimization.
        </p>
        <p className="text-gray-400 mb-4">
          Technical SEO is also what protects your rankings from sudden drops.
          Algorithm updates, accidental canonicalization errors, duplicate
          content issues, and broken structured data can all cause dramatic
          ranking losses overnight. A well-maintained technical SEO foundation
          acts as insurance against these risks — and gives you a stable
          platform to grow from month after month.
        </p>
        <p className="text-gray-400">
          Our technical SEO audits and implementation services cover over 150
          individual checkpoints across site architecture, crawlability,
          indexability, page speed, structured data, mobile optimization, and
          more — giving your website the cleanest possible technical profile in
          Google's eyes.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto space-y-10">
        <h2 className="text-2xl font-bold mb-6 gradient-text">
          Our Technical SEO Services in Hyderabad
        </h2>

        {/* 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Comprehensive Technical SEO Audit
          </h3>
          <p className="text-gray-400 mb-3">
            Our technical SEO audit is the starting point for all our
            engagements. We run an exhaustive analysis of your website using
            industry-leading tools including Screaming Frog, Google Search
            Console, SEMrush, Ahrefs, and GTmetrix — combined with manual expert
            review — to identify every technical issue affecting your search
            performance.
          </p>
          <p className="text-gray-400">
            The audit covers crawl errors, indexation issues, redirect chains,
            broken internal and external links, duplicate content, thin content
            pages, cannibalization issues, page speed bottlenecks, Core Web
            Vitals failures, mobile usability problems, structured data errors,
            hreflang issues (for multilingual sites), and much more. You receive
            a prioritized action plan with clear explanations and implementation
            guidance for every issue found.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Website Crawlability & Indexation Optimization
          </h3>
          <p className="text-gray-400 mb-3">
            If Google can't crawl or index your pages, they simply won't appear
            in search results. Crawlability and indexation problems are among
            the most serious technical SEO issues a website can have — and
            they're more common than most business owners realize.
          </p>
          <p className="text-gray-400">
            We audit and optimize your robots.txt file to ensure the right pages
            are accessible to search engine crawlers. We review and submit
            optimized XML sitemaps to Google Search Console. We identify and
            resolve noindex tags applied to pages that should be indexed, fix
            orphan pages with no internal links, and ensure your most important
            pages are within a maximum of three clicks from the homepage for
            maximum crawl efficiency. We also manage crawl budget optimization
            for large websites with thousands of pages.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Core Web Vitals & Page Speed Optimization
          </h3>
          <p className="text-gray-400 mb-3">
            Google's Core Web Vitals — Largest Contentful Paint (LCP), First
            Input Delay (FID) / Interaction to Next Paint (INP), and Cumulative
            Layout Shift (CLS) — are official Google ranking factors that
            measure real-world user experience. Failing these metrics means
            lower rankings and higher bounce rates as frustrated users leave
            your slow-loading pages.
          </p>
          <p className="text-gray-400">
            Our technical team implements comprehensive page speed optimizations
            including image compression and next-gen format conversion (WebP,
            AVIF), lazy loading implementation, JavaScript and CSS minification
            and deferral, server response time improvements, browser caching
            configuration, Content Delivery Network (CDN) setup, render-blocking
            resource elimination, and font loading optimization. We target a
            Google PageSpeed score of 90+ on both mobile and desktop for every
            client website.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Mobile SEO & Responsive Optimization
          </h3>
          <p className="text-gray-400 mb-3">
            Google uses mobile-first indexing, meaning it primarily uses the
            mobile version of your website to determine your rankings — even for
            desktop searches. If your mobile experience is poor, your rankings
            will suffer across all devices.
          </p>
          <p className="text-gray-400">
            We audit your website's mobile performance including responsive
            design implementation, tap target sizing, font legibility on small
            screens, viewport configuration, mobile page speed, and the
            elimination of intrusive interstitials (pop-ups that block content
            on mobile). We ensure that every page on your site delivers an
            excellent experience on all screen sizes — from small smartphones to
            large tablets — meeting Google's mobile-first standards completely.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Structured Data & Schema Markup Implementation
          </h3>
          <p className="text-gray-400 mb-3">
            Structured data (schema markup) is code added to your website that
            helps Google understand the content and context of your pages more
            precisely. It also enables rich results — enhanced search listings
            that show star ratings, prices, FAQs, event dates, recipe
            information, and more directly in the search results — dramatically
            improving your click-through rates.
          </p>
          <p className="text-gray-400">
            We implement the full range of relevant schema types for your
            business including Organization, LocalBusiness, Product, FAQPage,
            HowTo, Article, BreadcrumbList, SiteLinks SearchBox, and Review
            schemas. We validate all markup using Google's Rich Results Test and
            monitor for errors in Search Console to ensure your structured data
            remains error-free and eligible for rich results at all times.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Duplicate Content & Canonicalization
          </h3>
          <p className="text-gray-400 mb-3">
            Duplicate content — where the same or very similar content appears
            on multiple URLs — confuses Google and dilutes the ranking power of
            your pages. This is a surprisingly common issue caused by URL
            parameters, HTTP vs HTTPS versions, www vs non-www versions,
            trailing slash variations, and pagination.
          </p>
          <p className="text-gray-400">
            We identify all sources of duplicate content across your website and
            resolve them through proper canonical tag implementation, 301
            redirects, URL parameter handling in Google Search Console, and
            consolidation of thin or near-duplicate pages. This ensures that
            Google's ranking signals are concentrated on your preferred URLs,
            maximizing their ability to rank for your target keywords.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            7. HTTPS & Website Security Optimization
          </h3>
          <p className="text-gray-400 mb-3">
            HTTPS is a confirmed Google ranking factor, and websites without
            valid SSL certificates are flagged as "Not Secure" in Chrome —
            destroying user trust and hurting conversions. Security is no longer
            optional for websites that want to rank well and convert visitors
            into customers.
          </p>
          <p className="text-gray-400">
            We ensure your website is properly secured with a valid SSL
            certificate, correctly configured to redirect all HTTP traffic to
            HTTPS, and free from mixed content errors (where HTTP resources are
            loaded on HTTPS pages). We also review your security headers, check
            for vulnerabilities that could result in Google blacklisting your
            site for malware, and implement best practices for long-term site
            security.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            8. Site Architecture & Internal Linking Optimization
          </h3>
          <p className="text-gray-400 mb-3">
            A well-structured website with logical navigation and strong
            internal linking distributes PageRank (link equity) efficiently
            across your pages, helps users find what they need quickly, and
            makes it easy for search engines to discover and understand the
            relationships between your content.
          </p>
          <p className="text-gray-400">
            We audit and redesign your site architecture to ensure a flat,
            logical hierarchy where every important page can be reached within
            three clicks from the homepage. We build a strategic internal
            linking framework that channels authority from your high-authority
            pages to your target landing pages — boosting their ranking
            potential without any additional link building. We also implement
            breadcrumb navigation for better usability and structured data
            eligibility.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            9. Redirect Audit & Management
          </h3>
          <p className="text-gray-400 mb-3">
            Redirect chains, redirect loops, and incorrectly implemented
            redirects are a silent killer of SEO performance. Every time a
            redirect occurs, a small amount of link equity is lost. Multiple
            redirects in a chain compound this loss and slow down page load
            times — both of which negatively impact your rankings.
          </p>
          <p className="text-gray-400">
            We audit all existing redirects on your website, eliminate
            unnecessary chains and loops, convert temporary (302) redirects to
            permanent (301) redirects where appropriate, and set up a clean
            redirect management system for future URL changes and site
            migrations. We also handle full website migration projects —
            ensuring you don't lose rankings when moving to a new domain, CMS,
            or URL structure.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            10. Google Search Console & Analytics Setup
          </h3>
          <p className="text-gray-400">
            Accurate data is the foundation of every good SEO decision. We set
            up and configure Google Search Console, Google Analytics 4, and Bing
            Webmaster Tools for your website — ensuring you have complete
            visibility into how your site is performing in search. We configure
            goal tracking, set up custom reports, monitor for crawl errors and
            security issues, and create dashboards that give you a clear,
            real-time view of your organic traffic, rankings, and conversions.
          </p>
        </div>

        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Technical SEO Audit (150+ checkpoints)</li>
          <li>Crawlability & Indexation Fixes</li>
          <li>Core Web Vitals & Page Speed Optimization</li>
          <li>Mobile-First & Responsive SEO</li>
          <li>Schema Markup & Structured Data</li>
          <li>Duplicate Content & Canonicalization</li>
          <li>HTTPS & Security Optimization</li>
          <li>Site Architecture & Internal Linking</li>
          <li>Redirect Audit & Migration Support</li>
          <li>Google Search Console & Analytics Setup</li>
        </ul>
      </section>

      {/* ================= WHO NEEDS ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">
          Who Needs Technical SEO Services?
        </h2>
        <p className="text-gray-400 mb-4">
          Technical SEO is essential for any business that relies on organic
          search traffic. However, it becomes especially critical in certain
          situations:
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-3">
          <li>
            <strong className="text-white">New websites launching:</strong>{" "}
            Start with a technically perfect foundation so you can rank faster
            and avoid costly fixes later.
          </li>
          <li>
            <strong className="text-white">
              Sites with dropping rankings:
            </strong>{" "}
            If your rankings suddenly dropped after a Google algorithm update,
            technical issues are often the cause.
          </li>
          <li>
            <strong className="text-white">E-commerce websites:</strong> Large
            product catalogs create complex technical challenges including
            duplicate content from faceted navigation, crawl budget issues, and
            paginated content.
          </li>
          <li>
            <strong className="text-white">Sites undergoing migration:</strong>{" "}
            Moving to a new domain, CMS, or URL structure without proper
            technical SEO can wipe out years of ranking history.
          </li>
          <li>
            <strong className="text-white">
              Businesses investing in content:
            </strong>{" "}
            If you're spending on content creation but not seeing ranking
            improvements, technical barriers may be preventing that content from
            being indexed and ranked properly.
          </li>
          <li>
            <strong className="text-white">Competitive markets:</strong> In
            highly competitive niches in Hyderabad, technical excellence can be
            the differentiator that pushes you above competitors with similar
            content and backlink profiles.
          </li>
        </ul>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 gradient-text">
          Our Technical SEO Process
        </h2>

        <h3 className="text-xl font-semibold mb-2 text-white">
          Step 1 — Deep Technical Audit
        </h3>
        <p className="text-gray-400 mb-5">
          We begin with a comprehensive technical crawl of your entire website,
          analyzing over 150 individual technical factors. Every issue is
          documented, categorized by severity (critical, high, medium, low), and
          included in a detailed audit report with clear explanations of what
          each issue is, why it matters, and how it will be fixed.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          Step 2 — Prioritized Implementation Roadmap
        </h3>
        <p className="text-gray-400 mb-5">
          Not all technical issues carry equal weight. We prioritize fixes based
          on their potential ranking impact and implementation complexity, so
          the most impactful improvements are made first. You receive a clear
          roadmap with timelines, responsibilities, and expected outcomes for
          every action item.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          Step 3 — Implementation & Developer Collaboration
        </h3>
        <p className="text-gray-400 mb-5">
          Our technical SEO team can implement fixes directly (for CMS-based
          sites like WordPress, Shopify, and Webflow) or work closely with your
          development team to provide precise technical specifications and
          implementation guidance. We bridge the gap between SEO strategy and
          technical development to ensure every fix is implemented correctly the
          first time.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          Step 4 — Verification & Quality Assurance
        </h3>
        <p className="text-gray-400 mb-5">
          After every implementation, we re-crawl the affected pages, verify
          fixes in Google Search Console, re-test Core Web Vitals, and confirm
          that all issues have been fully resolved without introducing new
          problems. Nothing is marked complete until it passes our QA checklist.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          Step 5 — Ongoing Monitoring & Maintenance
        </h3>
        <p className="text-gray-400 mb-5">
          Technical SEO is not a one-time project — it's an ongoing discipline.
          New pages get added, code gets updated, and Google's standards evolve.
          We continuously monitor your website's technical health through
          automated alerts and monthly audits, catching and resolving new issues
          before they impact your rankings.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          Step 6 — Monthly Technical SEO Reporting
        </h3>
        <p className="text-gray-400">
          Every month you receive a detailed technical SEO report covering
          issues found and resolved, Core Web Vitals scores, crawl health
          metrics from Google Search Console, indexation status, and the impact
          of technical improvements on your organic rankings and traffic. Full
          transparency, every step of the way.
        </p>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">
          Why Choose Our Technical SEO Team in Hyderabad?
        </h2>

        <h3 className="text-xl font-semibold mb-2 text-white">
          ✅ Deep Technical Expertise
        </h3>
        <p className="text-gray-400 mb-5">
          Our technical SEO specialists have hands-on experience with a wide
          range of CMS platforms (WordPress, Shopify, Magento, Webflow, custom
          builds), JavaScript frameworks (React, Next.js, Vue, Angular), and
          server environments. We understand both the SEO requirements and the
          underlying technology — which means we can diagnose root causes, not
          just surface symptoms.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          ✅ 150+ Point Audit Methodology
        </h3>
        <p className="text-gray-400 mb-5">
          Our proprietary audit framework covers every technical SEO factor
          known to influence Google rankings — from XML sitemaps and robots.txt
          to JavaScript rendering issues, hreflang implementation, log file
          analysis, and crawl budget management. No stone is left unturned.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          ✅ Direct Implementation, Not Just Recommendations
        </h3>
        <p className="text-gray-400 mb-5">
          Many SEO agencies provide audit reports but leave implementation to
          your team. We go further — our technical team can implement fixes
          directly on most CMS platforms, or provide developer-ready
          specifications with exact code snippets so your development team can
          execute quickly and accurately.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          ✅ Proven Results Across Diverse Industries
        </h3>
        <p className="text-gray-400 mb-5">
          We have resolved technical SEO issues and driven measurable ranking
          improvements for businesses across Hyderabad in real estate,
          healthcare, e-commerce, SaaS, education, and more. Our track record of
          turning technically broken websites into high-ranking organic traffic
          engines speaks for itself.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          ✅ Transparent, Jargon-Free Communication
        </h3>
        <p className="text-gray-400">
          Technical SEO can sound intimidating, but we make it easy to
          understand. Every issue we identify and every action we take is
          explained in plain, business-friendly language — so you always
          understand what's being done, why it matters, and what impact it will
          have on your rankings and traffic.
        </p>

        <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-6">
          <li>Deep Technical & Development Expertise</li>
          <li>150+ Point Audit Framework</li>
          <li>Direct CMS Implementation</li>
          <li>Proven Results Across Industries</li>
          <li>Transparent, Plain-Language Reporting</li>
          <li>Ongoing Monitoring & Proactive Maintenance</li>
        </ul>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 gradient-text">
          Technical SEO FAQs
        </h2>

        <p className="text-gray-400 mt-4">
          <strong className="text-white">
            What is the difference between technical SEO and on-page SEO?
          </strong>
          <br />
          On-page SEO deals with the content and HTML elements on each page —
          title tags, headers, content, keywords, and internal links. Technical
          SEO focuses on the underlying infrastructure of your website — how it
          is built, how fast it loads, how search engines crawl and index it,
          and how it performs for users. Both are essential; technical SEO
          provides the foundation on which on-page SEO performs.
        </p>

        <p className="text-gray-400 mt-6">
          <strong className="text-white">
            How do I know if my website has technical SEO problems?
          </strong>
          <br />
          Common signs include pages not appearing in Google search results, a
          sudden drop in organic traffic after a Google update, poor Google
          PageSpeed scores, warnings in Google Search Console, slow loading
          times, pages with "noindex" tags applied incorrectly, or any website
          that has never had a professional SEO audit. We offer a free initial
          technical review — contact us to find out exactly where your site
          stands.
        </p>

        <p className="text-gray-400 mt-6">
          <strong className="text-white">
            Does technical SEO help with Google rankings directly?
          </strong>
          <br />
          Yes. Core Web Vitals (page speed and user experience), HTTPS security,
          mobile-friendliness, and crawlability are all confirmed direct Google
          ranking factors. Additionally, fixing technical issues allows your
          existing content and backlinks to perform to their full potential —
          often resulting in significant ranking improvements without any
          additional content or link building work.
        </p>

        <p className="text-gray-400 mt-6">
          <strong className="text-white">
            How long does a technical SEO audit take?
          </strong>
          <br />A comprehensive technical SEO audit for a small to medium-sized
          website (up to 500 pages) typically takes 5–7 business days. For
          larger e-commerce or enterprise sites with thousands of pages, the
          audit may take 2–3 weeks. You receive a detailed report with
          prioritized recommendations and an implementation roadmap upon
          completion.
        </p>

        <p className="text-gray-400 mt-6">
          <strong className="text-white">
            Can you fix technical SEO issues on any CMS?
          </strong>
          <br />
          We have direct implementation experience with WordPress, Shopify, Wix,
          Squarespace, Webflow, Magento, and custom-built websites. For
          JavaScript-heavy frameworks like Next.js, Nuxt, React, and Angular, we
          work closely with your development team and provide precise technical
          specifications to ensure correct implementation.
        </p>

        <p className="text-gray-400 mt-6">
          <strong className="text-white">
            How much do technical SEO services cost in Hyderabad?
          </strong>
          <br />
          Technical SEO pricing depends on the size of your website, the
          complexity of issues found, and whether you need ongoing maintenance
          or a one-time project. We offer standalone technical audit packages as
          well as ongoing technical SEO retainers. Contact us for a custom quote
          — and get a free high-level technical health check of your website at
          no cost.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-4">
          Is Your Website Technically Holding You Back?
        </h2>
        <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
          Get a free technical SEO health check and find out exactly what's
          preventing your website from ranking on Google's first page. Our
          technical SEO team in Hyderabad will analyze your site and give you a
          clear, actionable diagnosis — no jargon, no fluff.
        </p>
        <p className="text-gray-400 mb-6">
          Stop leaving rankings on the table. Let's fix your technical SEO
          today.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold"
        >
          Get Free Technical Audit →
        </Link>
      </section>
    </div>
  );
}
