"use client";

import Image from "next/image";
import Link from "next/link";

export default function WebsiteMaintenanceServicesPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Website Maintenance Services in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Keep your website fast, secure, up-to-date, and performing at its best
          — without lifting a finger. Our website maintenance services in
          Hyderabad give businesses a dedicated technical team to handle
          everything from security updates and performance monitoring to content
          changes and feature additions, so your website never becomes a
          liability.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/website-development">Website Development</Link>
          <span className="mx-2">›</span>
          <span>Website Maintenance Services</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best Website Maintenance Company in Hyderabad
            </h2>
            <p className="text-gray-400 mb-4">
              We are a reliable, proactive website maintenance company in
              Hyderabad, providing businesses with a dedicated technical team
              that keeps their websites secure, fast, updated, and fully
              operational — month after month. We handle all the technical
              complexity of running a website so you can focus entirely on
              running your business.
            </p>
            <p className="text-gray-400 mb-4">
              Our website maintenance team covers everything a live website
              needs to stay healthy — security patches and malware monitoring,
              CMS and plugin updates, performance optimization, uptime
              monitoring, regular backups, content updates, bug fixes, and
              ongoing feature development. You get one reliable team handling
              all of it under a single, transparent monthly plan.
            </p>
            <p className="text-gray-400">
              Whether you have a WordPress site, a custom-built web application,
              a Shopify store, or any other web platform — our maintenance team
              has the technical expertise to keep it running at its best. No
              more chasing freelancers, dealing with slow agency response times,
              or ignoring critical updates because you don't have the time or
              in-house skills to handle them.
            </p>
          </div>
          <Image
            src="/assets/website-maintenance-services.jpg"
            alt="Website Maintenance Services Hyderabad"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= CORE CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-12 space-y-14 text-gray-400">
        {/* WHAT IS WEBSITE MAINTENANCE */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Website Maintenance?
          </h2>
          <p className="mb-4">
            Website maintenance is the ongoing process of keeping a website
            secure, updated, fast, and fully functional after it launches. A
            website is not a one-time project — it is a living digital asset
            that requires regular technical attention to remain secure against
            evolving threats, perform well for visitors and search engines, and
            continue to serve your business as your needs change over time.
          </p>
          <p className="mb-4">
            Website maintenance encompasses a wide range of technical
            activities: applying security patches and CMS updates before
            vulnerabilities can be exploited, monitoring uptime and performance
            to catch issues before visitors do, running regular backups to
            protect against data loss, optimizing page speed as third-party
            scripts and content accumulate, fixing bugs and compatibility issues
            as browsers and devices evolve, and making content and feature
            updates to keep the site accurate and relevant.
          </p>
          <p>
            For any business that relies on its website to generate leads,
            process orders, or represent its brand online, professional website
            maintenance is not optional — it is essential. A neglected website
            becomes a security risk, a performance liability, and a growing
            source of lost revenue. In Hyderabad's competitive digital
            landscape, a well-maintained website is a genuine competitive
            advantage.
          </p>
        </div>

        {/* WHY PROFESSIONAL MAINTENANCE */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose Professional Website Maintenance Over DIY?
          </h2>
          <p className="mb-4">
            Many businesses attempt to handle website maintenance themselves —
            or simply ignore it until something breaks. Both approaches carry
            significant risk. DIY maintenance without deep technical expertise
            leads to botched updates that break functionality, missed security
            vulnerabilities that expose customer data, and performance
            degradation that silently costs leads and sales every day. Ignoring
            maintenance entirely is even more dangerous — outdated CMS
            installations and plugins are the primary entry point for the vast
            majority of website hacks and malware infections.
          </p>
          <p className="mb-4">
            Professional website maintenance provides systematic, proactive care
            by experienced technical teams who know exactly what to monitor,
            what to update, how to test changes before applying them to live
            sites, and how to respond quickly when issues arise. Issues are
            caught and resolved before they impact visitors or business
            operations — not after a customer reports a broken form or a Google
            security warning kills your traffic.
          </p>
          <p>
            From a business economics perspective, professional website
            maintenance is one of the highest-ROI investments a business can
            make in its digital infrastructure. The cost of a monthly
            maintenance plan is a fraction of the cost of recovering from a
            security breach, rebuilding a hacked site, or losing a week of leads
            because a critical page is broken and nobody noticed. Prevention is
            always cheaper than recovery.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Website Maintenance Services in Hyderabad
          </h2>
          <p className="mb-6">
            We offer a comprehensive range of website maintenance services
            covering every aspect of keeping a live website secure, fast,
            updated, and continuously improving.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Security Monitoring & Updates
          </h3>
          <p className="mb-5">
            Website security is the most critical and time-sensitive aspect of
            ongoing maintenance. We apply CMS core updates, theme updates, and
            plugin or dependency updates on a regular schedule — testing every
            update in a staging environment before applying it to your live
            site. We monitor for malware, unauthorized file changes, and
            suspicious activity continuously — and respond immediately to any
            security alert. We also implement and maintain SSL certificates,
            security headers, firewall rules, and login protection measures that
            reduce your attack surface proactively.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Performance Monitoring & Optimization
          </h3>
          <p className="mb-5">
            Website performance degrades over time as content accumulates,
            plugins multiply, and third-party scripts add load weight. We
            monitor your website's Core Web Vitals, PageSpeed scores, and server
            response times continuously — and proactively optimize when
            performance drops below target thresholds. Our performance
            maintenance includes image optimization, database optimization,
            caching configuration, CDN management, and script load optimization
            — keeping your site fast for visitors and search engines month after
            month.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Uptime Monitoring & Incident Response
          </h3>
          <p className="mb-5">
            Every minute your website is down costs you visitors, leads, and
            revenue. We monitor your website's uptime around the clock — with
            automated alerts that notify our team the moment your site goes
            offline or becomes unreachable. Our team responds to downtime
            incidents immediately, diagnosing and resolving the root cause as
            quickly as possible to minimize business impact. We also provide
            monthly uptime reports so you have full visibility into your
            website's availability record.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Regular Backups & Disaster Recovery
          </h3>
          <p className="mb-5">
            Data loss from server failures, hacking, or accidental deletion can
            be catastrophic — and completely avoidable with proper backup
            management. We run automated daily, weekly, and monthly backups of
            your complete website — including files, databases, and
            configurations — stored securely in off-site cloud storage. In the
            event of any data loss or site corruption, we restore your website
            from the most recent clean backup with minimal downtime. We also
            test backup integrity regularly to ensure restores work when they
            are actually needed.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Content Updates & Management
          </h3>
          <p className="mb-5">
            Keeping your website content accurate, fresh, and relevant requires
            ongoing updates — new service pages, updated pricing, team changes,
            blog posts, case studies, portfolio additions, and event
            announcements. Our maintenance plans include a monthly allocation of
            content update hours — so you can send us changes and have them
            implemented quickly and accurately, without needing to log into a
            CMS or manage a separate content update request with a development
            agency.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Bug Fixes & Compatibility Updates
          </h3>
          <p className="mb-5">
            Browsers update, operating systems evolve, and third-party services
            change their APIs — all of which can break website functionality
            over time. We monitor for and fix compatibility issues, broken
            links, form errors, display bugs, and functional regressions as part
            of our ongoing maintenance — ensuring your website works correctly
            for every visitor on every device and browser, continuously.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            7. SEO Health Monitoring & Technical SEO Maintenance
          </h3>
          <p className="mb-5">
            Technical SEO issues accumulate silently over time — broken links,
            crawl errors, missing meta tags, duplicate content issues, and Core
            Web Vitals degradation — and erode your organic rankings without
            obvious warning signs. We monitor your website's technical SEO
            health continuously, reporting on and resolving issues that could
            impact your Google rankings before they cause meaningful traffic
            loss.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Security Monitoring & Updates</li>
            <li>Performance Monitoring & Optimization</li>
            <li>Uptime Monitoring & Incident Response</li>
            <li>Regular Backups & Disaster Recovery</li>
            <li>Content Updates & Management</li>
            <li>Bug Fixes & Compatibility Updates</li>
            <li>SEO Health Monitoring & Technical SEO Maintenance</li>
          </ul>
        </div>

        {/* TECHNOLOGIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Platforms & Technologies We Maintain
          </h2>
          <p className="mb-6">
            Our website maintenance team has deep expertise across all major web
            platforms and technology stacks — so regardless of how your website
            was built, we have the technical knowledge to maintain it properly.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            WordPress & WooCommerce
          </h3>
          <p className="mb-4">
            WordPress powers a significant proportion of the web — and requires
            consistent, careful maintenance to remain secure and performant. Our
            WordPress maintenance service covers core updates, theme and plugin
            updates, database optimization, security hardening, performance
            optimization, and WooCommerce-specific maintenance including product
            catalogue management, payment gateway updates, and order system
            health monitoring.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Next.js & React Applications
          </h3>
          <p className="mb-4">
            Modern Next.js and React web applications require dependency
            management, framework version updates, build pipeline maintenance,
            and performance monitoring. We handle all aspects of Next.js and
            React application maintenance — keeping dependencies current,
            resolving security vulnerabilities in the package ecosystem,
            monitoring Core Web Vitals, and ensuring deployment pipelines remain
            healthy and reliable.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Shopify & Shopify Plus
          </h3>
          <p className="mb-4">
            Shopify stores require ongoing theme maintenance, app management,
            payment gateway monitoring, and performance optimization. We handle
            Shopify theme updates, app configuration and troubleshooting, custom
            code maintenance, and store performance monitoring — ensuring your
            Shopify store continues to convert and operate reliably as Shopify's
            platform evolves.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Custom Web Applications
          </h3>
          <p className="mb-4">
            Custom web applications built on Node.js, Laravel, Django, or other
            frameworks require ongoing dependency updates, security patching,
            database maintenance, and infrastructure management. We provide
            comprehensive maintenance for custom-built web applications —
            handling all technical upkeep so your development investment
            continues to perform reliably long after the initial build.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Hosting & Cloud Infrastructure
          </h3>
          <p className="mb-4">
            We manage and maintain hosting environments across AWS,
            DigitalOcean, Vercel, Cloudflare, and other major cloud platforms —
            handling server updates, SSL renewals, CDN configuration, DNS
            management, and infrastructure scaling as your traffic grows.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>WordPress & WooCommerce</li>
            <li>Next.js & React Applications</li>
            <li>Shopify & Shopify Plus</li>
            <li>Custom Node.js / Laravel / Django Applications</li>
            <li>AWS / DigitalOcean / Vercel / Cloudflare (Hosting & Cloud)</li>
            <li>MySQL / PostgreSQL / MongoDB (Database Maintenance)</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Website Maintenance Process
          </h2>
          <p className="mb-6">
            We follow a structured, proactive, and transparent maintenance
            process that keeps your website healthy, gives you complete
            visibility into what we are doing, and ensures nothing falls through
            the cracks.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Website Audit & Onboarding
          </h3>
          <p className="mb-4">
            When you come on board, we conduct a comprehensive audit of your
            website — reviewing security configuration, software versions,
            performance metrics, backup setup, uptime history, SEO health, and
            any existing technical issues. We document the complete technical
            state of your site, set up all monitoring tools, configure backup
            systems, and establish staging environments. This thorough
            onboarding ensures we know exactly what we are maintaining and start
            from a solid, documented baseline.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — Proactive Monthly Maintenance
          </h3>
          <p className="mb-4">
            Every month, we execute a structured maintenance checklist —
            applying security and software updates, running performance
            optimization tasks, verifying backup integrity, reviewing uptime and
            incident logs, checking SEO health metrics, and implementing any
            content updates included in your plan. All updates are tested in
            staging before being applied to your live site — eliminating the
            risk of updates breaking live functionality.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Continuous Monitoring
          </h3>
          <p className="mb-4">
            Between monthly maintenance cycles, we monitor your website
            continuously — tracking uptime, security alerts, performance
            metrics, and error logs in real time. Automated monitoring systems
            alert our team immediately to any anomaly — downtime, security
            events, performance degradation, or broken functionality — so we can
            respond before issues impact your visitors or business.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Rapid Issue Resolution
          </h3>
          <p className="mb-4">
            When issues arise — whether detected by our monitoring systems or
            reported by you — we respond quickly with clear communication about
            what the issue is, what is causing it, and how we are resolving it.
            Our response time commitments are defined clearly in your
            maintenance plan — so you always know what to expect when something
            needs immediate attention.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Monthly Reporting & Transparency
          </h3>
          <p className="mb-4">
            Every month, we provide a clear maintenance report covering all work
            completed, software versions updated, security checks performed,
            backup status, uptime statistics, performance metrics, and any
            issues detected and resolved. You have complete transparency into
            exactly what your maintenance investment delivers — every single
            month.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Ongoing Improvement Recommendations
          </h3>
          <p>
            Beyond keeping your website running smoothly, we proactively
            identify opportunities to improve performance, security, and
            functionality over time — and present these as prioritized
            recommendations in your monthly report. Your website should get
            better every month, not just stay the same — and our maintenance
            service is designed to drive that continuous improvement.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Website Audit & Onboarding</li>
            <li>Proactive Monthly Maintenance</li>
            <li>Continuous Monitoring</li>
            <li>Rapid Issue Resolution</li>
            <li>Monthly Reporting & Transparency</li>
            <li>Ongoing Improvement Recommendations</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Industries We Serve with Website Maintenance
          </h2>
          <p className="mb-4">
            We provide website maintenance services to businesses across a wide
            range of industries in Hyderabad and across India — with
            platform-specific and industry-specific expertise that makes our
            maintenance service more effective than a generic technical support
            provider.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IT Companies & Technology Startups</li>
            <li>SaaS Products & Software Companies</li>
            <li>Ecommerce & D2C Brands</li>
            <li>Real Estate & Property Platforms</li>
            <li>Healthcare, Clinics & Medical Services</li>
            <li>Education & EdTech Platforms</li>
            <li>Financial Services & Fintech</li>
            <li>Professional Services & Consulting Firms</li>
            <li>Manufacturing & Industrial Businesses</li>
            <li>Hospitality, Travel & Lifestyle Brands</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose Us for Website Maintenance in Hyderabad?
          </h2>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Proactive Maintenance — Not Just Reactive Fixes
          </h3>
          <p className="mb-5">
            Most website support providers only respond when something breaks.
            We work proactively — applying updates before vulnerabilities are
            exploited, optimizing performance before it degrades enough to
            impact conversions, and monitoring continuously so issues are caught
            before visitors experience them. Proactive maintenance prevents
            problems from occurring in the first place — which is always better
            than fixing them after the damage is done.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Staging Environment Testing on Every Update
          </h3>
          <p className="mb-5">
            We never apply updates directly to your live website. Every CMS
            update, plugin update, and code change is tested thoroughly in a
            staging environment before being deployed to production. This
            eliminates the risk of updates breaking live functionality — a
            common and costly mistake when updates are applied without proper
            testing protocols.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Dedicated Technical Team — Not a Ticket Queue
          </h3>
          <p className="mb-5">
            When you work with us, you get a dedicated technical team that knows
            your website inside and out — not a generic support ticket queue
            handled by rotating support agents who have never seen your site
            before. This familiarity means faster issue diagnosis, smarter
            maintenance decisions, and a team that genuinely understands your
            technical environment and business context.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Full-Stack Expertise Across All Platforms
          </h3>
          <p className="mb-5">
            Our maintenance team covers WordPress, WooCommerce, Shopify,
            Next.js, React, Node.js, and custom web applications — along with
            the hosting and cloud infrastructure they run on. Whatever your
            technology stack, we have the expertise to maintain it properly. You
            don't need to find separate specialists for different parts of your
            technical environment.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Complete Transparency with Monthly Reports
          </h3>
          <p className="mb-5">
            Every month, you receive a detailed report of all work completed,
            metrics monitored, issues resolved, and recommendations for the
            coming month. You always know exactly what your maintenance
            investment is delivering — with no vague assurances and no hidden
            activity. Complete transparency is a core commitment of our
            maintenance service.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Flexible Plans for Every Business Size
          </h3>
          <p className="mb-5">
            We offer flexible monthly maintenance plans scaled to the size and
            complexity of your website and the level of support your business
            requires — from essential security and backup plans for simple
            websites to comprehensive full-service maintenance plans for complex
            web applications and high-traffic ecommerce stores. Every plan
            includes clear deliverables, defined response times, and monthly
            reporting.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Proactive Maintenance — Not Just Reactive Fixes</li>
            <li>Staging Environment Testing on Every Update</li>
            <li>Dedicated Technical Team — Not a Ticket Queue</li>
            <li>Full-Stack Expertise Across All Platforms</li>
            <li>Complete Transparency with Monthly Reports</li>
            <li>Flexible Plans for Every Business Size</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Website Maintenance FAQs
          </h2>

          <p>
            <strong className="text-white">
              What happens if I don't maintain my website regularly?
            </strong>
            <br />
            An unmaintained website accumulates risk over time across multiple
            dimensions. Outdated CMS software and plugins become vulnerable to
            known security exploits — the majority of website hacks target
            outdated WordPress installations and plugins. Performance degrades
            as content and scripts accumulate — reducing organic rankings and
            conversion rates silently. Bugs and compatibility issues develop as
            browsers, operating systems, and third-party services evolve. And
            without regular backups, any data loss event — whether from hacking,
            server failure, or accidental deletion — can result in complete site
            loss. Regular professional maintenance eliminates all of these
            risks.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How much do website maintenance services cost in Hyderabad?
            </strong>
            <br />
            Website maintenance pricing depends on your website's platform,
            complexity, size, and the level of support required. Our maintenance
            plans start from ₹5,000–₹8,000 per month for essential security,
            backup, and update coverage on standard websites, and scale to
            ₹15,000–₹30,000+ per month for comprehensive full-service
            maintenance of complex web applications and high-traffic ecommerce
            stores. We provide a detailed, transparent proposal after a free
            consultation and website audit.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Can you maintain a website that your team didn't build?
            </strong>
            <br />
            Yes — we maintain websites built by any development team or agency.
            Our onboarding process includes a thorough technical audit of your
            existing website to fully understand its architecture, technology
            stack, and current state before we take over maintenance
            responsibility. We document everything we find, resolve any existing
            issues, and establish proper monitoring and backup systems — giving
            you a clean, well-managed technical baseline from day one of the
            engagement.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How quickly do you respond to website emergencies?
            </strong>
            <br />
            Our response time commitments are clearly defined in your
            maintenance plan. For critical issues — website downtime, security
            breaches, broken checkout flows, or any issue with significant
            business impact — we respond within 1–2 hours and work continuously
            until the issue is resolved. For standard bug fixes and non-critical
            issues, we respond within one business day. You always have a clear
            point of contact and defined response time expectations — no
            ambiguity about what to expect when something goes wrong.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Do you provide website maintenance for ecommerce stores?
            </strong>
            <br />
            Yes — we provide specialized ecommerce maintenance services for
            Shopify, WooCommerce, and custom ecommerce platforms. Ecommerce
            maintenance includes all standard website maintenance tasks plus
            ecommerce-specific monitoring: payment gateway health checks, order
            processing verification, inventory sync monitoring, product
            catalogue updates, and checkout flow testing. For ecommerce
            businesses, website downtime or checkout failures have direct,
            immediate revenue impact — making proactive maintenance even more
            critical.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Can I upgrade or change my maintenance plan as my needs change?
            </strong>
            <br />
            Yes — our maintenance plans are flexible. As your website grows in
            complexity or traffic, or as your support requirements evolve, you
            can upgrade to a higher-tier plan at any time. We review your
            maintenance plan with you quarterly to ensure it remains the right
            fit for your current business needs — and proactively recommend plan
            adjustments when your website's requirements change significantly.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Put Your{" "}
          <span className="gradient-text">Website Maintenance</span> in Expert
          Hands?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg">
          Get a free website audit and maintenance consultation from our team in
          Hyderabad. We'll review your website's current technical health,
          identify any existing risks or issues, and recommend the right
          maintenance plan for your business — at no cost and no obligation.
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Let's keep your website fast, secure, and performing at its best —
          every single month.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-yellow-400 to-orange-500
            text-black font-semibold text-lg"
        >
          Get Free Website Audit →
        </Link>
      </section>
    </div>
  );
}
