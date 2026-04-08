"use client";

import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentCompanyIndiaPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Web Development Company in{" "}
          <span className="gradient-text">India</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Partner with one of India's leading web development companies to build
          fast, scalable, and revenue-generating websites and web applications —
          engineered precisely around your business goals, users, and growth
          ambitions, not off-the-shelf templates.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/website-development">Website Development</Link>
          <span className="mx-2">›</span>
          <span>Web Development Company in India</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Best Web Development Company in India
            </h2>
            <p className="text-gray-400 mb-4">
              We are a results-driven web development company in India,
              specializing in building high-performance websites, web
              applications, and digital platforms engineered precisely around
              your business model, target audience, and revenue goals. Whether
              you need a corporate website, a SaaS product, a custom web
              application, or a scalable digital platform — we deliver web
              development solutions that perform, convert, and grow with your
              business.
            </p>
            <p className="text-gray-400 mb-4">
              Our web development team brings together expert UI/UX designers,
              frontend developers, backend engineers, DevOps specialists, and
              SEO professionals who collaborate on every project to deliver
              solutions that look exceptional, load fast, rank on Google, and
              drive measurable business results — for clients across India and
              globally.
            </p>
            <p className="text-gray-400">
              Whether you are a startup building your first web product, an
              enterprise modernizing legacy systems, or a growing business
              scaling your digital infrastructure across multiple markets, our
              team has the skills, experience, and technical depth to build the
              right web development solution for your needs — on time, on
              budget, and to the highest standards of engineering quality.
            </p>
          </div>
          <Image
            src="/assets/web-development-company-india.jpg"
            alt="Web Development Company India"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= CORE CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-12 space-y-14 text-gray-400">
        {/* WHAT IS WEB DEVELOPMENT */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Web Development?
          </h2>
          <p className="mb-4">
            Web development is the process of designing, building, and
            maintaining websites and web applications that run on the internet.
            It encompasses everything from the visual design and user interface
            of a website to the backend systems, databases, APIs, and server
            infrastructure that power the entire digital experience — making
            modern web development one of the most multidisciplinary engineering
            disciplines in technology.
          </p>
          <p className="mb-4">
            A professionally developed website or web application is far more
            than a collection of pages — it is a complete digital business
            asset. Whether it is a marketing website designed to generate leads,
            a SaaS platform built to serve thousands of users, a customer portal
            integrating with enterprise systems, or an ecommerce store driving
            revenue around the clock — every element of a professionally
            engineered web solution works together to deliver business value,
            operational efficiency, and competitive advantage.
          </p>
          <p>
            Web development is the right investment for any Indian business
            serious about competing in the digital economy — from early-stage
            startups building their first product to large enterprises
            modernizing their digital infrastructure. In India's rapidly
            evolving digital market, a professionally built web presence is one
            of the most powerful tools for sustainable business growth.
          </p>
        </div>

        {/* WHY PROFESSIONAL WEB DEVELOPMENT */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose a Professional Web Development Company Over Freelancers
            or DIY Builders?
          </h2>
          <p className="mb-4">
            Freelance developers and DIY website builders have their place for
            very limited requirements — but they come with significant
            limitations that growing businesses consistently outgrow.
            Freelancers working alone lack the breadth of skills needed to
            deliver a complete, production-grade web solution — from UI/UX
            design and frontend performance to backend architecture, security
            hardening, and cloud deployment. DIY builders produce generic,
            template-based results that fail to differentiate your brand or meet
            custom functional requirements.
          </p>
          <p className="mb-4">
            A professional web development company brings a complete,
            multidisciplinary team to every project — designers, developers,
            engineers, QA specialists, and project managers working in a
            structured, accountable process. The result is a higher-quality
            product, delivered faster, with proper documentation, testing, and
            long-term maintainability built in from the start.
          </p>
          <p>
            From an SEO, security, and performance perspective, professionally
            developed web solutions have a decisive advantage. Clean code
            architecture, optimized database queries, secure coding practices,
            fast server response times, and superior Core Web Vitals scores all
            contribute to higher rankings, more traffic, better user retention,
            and stronger business outcomes. Companies with professionally
            developed web platforms consistently outperform competitors running
            on template-based or freelancer-built solutions.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Development Services in India
          </h2>
          <p className="mb-6">
            We offer a comprehensive range of web development services covering
            every type of digital project — from marketing websites and landing
            pages to complex SaaS platforms, enterprise web applications, and
            API-driven digital ecosystems.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Custom Website Development
          </h3>
          <p className="mb-5">
            We design and develop fully custom websites built from scratch
            around your brand identity, target audience, and business goals.
            Every element — from homepage layout and navigation to page flow,
            content architecture, and call-to-action design — is purposefully
            engineered to create a lasting impression and drive leads or sales.
            Our custom websites are lightweight, mobile-first, and SEO-optimized
            from the ground up — built to rank on Google and generate consistent
            organic traffic and enquiries.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Web Application Development
          </h3>
          <p className="mb-5">
            We build scalable, secure, and high-performance web applications for
            businesses that need custom digital tools — customer portals,
            internal management systems, workflow automation platforms,
            data-driven dashboards, booking and scheduling systems, and
            industry-specific applications. Our web applications are built with
            modern React.js or Next.js frontends and robust Node.js or Python
            backends, engineered for reliability, security, and long-term
            scalability.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            3. SaaS Product Development
          </h3>
          <p className="mb-5">
            We are an experienced SaaS product development company — helping
            Indian founders and enterprises build, launch, and scale
            software-as-a-service products. Our SaaS development service covers
            product architecture and technical planning, multi-tenant
            application development, subscription billing integration, user
            authentication and role management, API development, and
            growth-phase scaling. We help you go from validated idea to
            market-ready SaaS product with the right engineering foundations to
            support rapid user growth.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            4. WordPress Development
          </h3>
          <p className="mb-5">
            For businesses that need a flexible, content-manageable web
            presence, we build custom WordPress websites with bespoke themes
            developed from scratch — never off-the-shelf templates. We optimize
            every WordPress build aggressively for performance — eliminating
            plugin bloat, implementing server-side caching, and writing custom
            code over heavy page builders wherever possible — delivering
            WordPress websites that load fast, rank well, and give your team
            full content management flexibility.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            5. API Development & Third-Party Integrations
          </h3>
          <p className="mb-5">
            Modern businesses run on connected systems — and we build the APIs
            and integrations that make them work seamlessly. We develop RESTful
            and GraphQL APIs, integrate third-party services like CRMs, ERPs,
            payment gateways, marketing automation platforms, and logistics
            APIs, and build custom middleware solutions that connect your web
            applications with your broader technology stack. Clean, documented,
            and versioned APIs built to industry standards.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Website Redesign & Performance Optimization
          </h3>
          <p className="mb-5">
            If your current website is underperforming — loading slowly,
            generating poor leads, looking outdated, or failing to represent
            your brand — we provide complete website redesign and performance
            optimization services. We combine a modern design direction with
            technical performance improvements and conversion-focused UX
            enhancements to deliver a redesigned website that outperforms its
            predecessor from day one — while carefully preserving your existing
            SEO equity.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            7. Ecommerce Development
          </h3>
          <p className="mb-5">
            We build high-converting, scalable ecommerce platforms for Indian
            businesses selling online — from custom Shopify stores and
            WooCommerce implementations to fully bespoke ecommerce solutions
            with complex product configurators, B2B ordering systems, or
            multi-vendor marketplace functionality. Every ecommerce solution we
            build is SEO-optimized, mobile-first, and engineered to maximize
            conversion rates and revenue per visitor.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Custom Website Development</li>
            <li>Web Application Development</li>
            <li>SaaS Product Development</li>
            <li>WordPress Development</li>
            <li>API Development & Third-Party Integrations</li>
            <li>Website Redesign & Performance Optimization</li>
            <li>Ecommerce Development</li>
          </ul>
        </div>

        {/* TECHNOLOGIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Technologies We Use for Web Development
          </h2>
          <p className="mb-6">
            We select the technology stack best suited to your specific web
            development requirements — balancing performance, scalability,
            developer productivity, and long-term maintainability.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Next.js & React.js
          </h3>
          <p className="mb-4">
            Next.js is our primary framework for custom website development and
            web application frontends. Server-side rendering, static site
            generation, and incremental static regeneration deliver near-instant
            page loads and outstanding Core Web Vitals scores — directly
            contributing to higher search rankings and lower bounce rates.
            React.js powers rich, dynamic user interfaces and complex
            application state management across our web applications and SaaS
            products.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Node.js & Express
          </h3>
          <p className="mb-4">
            For backend web development, Node.js and Express form the backbone
            of our API development, server-side application logic, and real-time
            features. Node.js enables us to build fast, event-driven backends
            that handle high concurrent request volumes efficiently — ideal for
            SaaS platforms, web applications, and ecommerce backends with
            demanding performance requirements.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Python & Django / FastAPI
          </h3>
          <p className="mb-4">
            For data-intensive web applications, machine learning integrations,
            and enterprise-grade backends, we use Python with Django or FastAPI.
            Python's rich ecosystem and Django's mature, batteries-included
            framework make it an excellent choice for complex web applications
            with sophisticated data models, business logic, and third-party
            system integrations.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            WordPress & Custom Themes
          </h3>
          <p className="mb-4">
            For content-driven websites requiring flexible CMS management, we
            build custom WordPress themes and plugins from scratch. We optimize
            every WordPress build for performance, security, and SEO —
            delivering WordPress websites that load fast, rank well, and give
            your team complete content management capability without developer
            dependency.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            MongoDB & PostgreSQL
          </h3>
          <p className="mb-4">
            We select the right database architecture for each project. MongoDB
            handles flexible, document-based data models efficiently for
            applications with varied or evolving data structures. PostgreSQL
            delivers robust relational data management for complex business
            applications with structured data, transactional requirements, and
            sophisticated reporting needs.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            AWS, Vercel & DigitalOcean
          </h3>
          <p className="mb-4">
            We deploy all web projects on enterprise-grade cloud infrastructure
            with global CDN, auto-scaling, load balancing, and comprehensive
            monitoring. We configure SSL, DNS, server-side caching, image
            optimization, and CI/CD pipelines as standard — ensuring your web
            solution is secure, fast, and reliably available for every user,
            everywhere in India and globally.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Next.js / React.js (Frontend & Full-Stack)</li>
            <li>Node.js / Express (Backend & APIs)</li>
            <li>Python / Django / FastAPI (Enterprise Backend)</li>
            <li>WordPress / Custom Themes (CMS Websites)</li>
            <li>MongoDB / PostgreSQL (Database)</li>
            <li>Tailwind CSS / GSAP (Styling & Animation)</li>
            <li>AWS / Vercel / DigitalOcean (Cloud & Hosting)</li>
            <li>Docker / CI-CD Pipelines (DevOps)</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Development Process
          </h2>
          <p className="mb-6">
            We follow a proven, transparent, and collaborative development
            process that keeps you informed and in control at every stage — from
            initial discovery to launch and ongoing growth support.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Discovery & Technical Strategy
          </h3>
          <p className="mb-4">
            We begin with a thorough discovery session to understand your
            business, technical requirements, user needs, competitive landscape,
            and project goals. We audit any existing systems, define the right
            technology stack and architecture, map out all integrations and
            third-party dependencies, and produce a detailed technical
            specification and project plan with clear milestones and delivery
            timeline. A thorough discovery phase ensures your web development
            investment is directed at the right solution from day one.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — UX Design & Wireframing
          </h3>
          <p className="mb-4">
            Our UX designers create detailed wireframes for every key page and
            user flow — mapping out the information architecture, navigation
            structure, and interaction patterns before visual design begins.
            This ensures the usability and conversion logic of your web solution
            is validated before any visual design investment. We refine
            wireframes through collaborative review until every page structure
            and user journey is approved.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Visual Design
          </h3>
          <p className="mb-4">
            Our designers create high-fidelity visual designs for every page —
            translating your brand identity into a compelling, cohesive, and
            memorable digital experience. We design in Figma with full
            responsiveness across desktop, tablet, and mobile breakpoints, and
            deliver a complete design system covering typography, colour, UI
            components, and interactive states. Every visual design decision is
            made with both brand impact and conversion performance in mind.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Development & Engineering
          </h3>
          <p className="mb-4">
            Our frontend and backend developers build your web solution with
            clean, well-structured, documented, and version-controlled code.
            Frontend development is mobile-first and performance-optimized.
            Backend development implements all required business logic, data
            models, APIs, and integrations. We follow agile development
            practices with regular sprint reviews — so you see real progress and
            can provide feedback throughout the build, not just at the end.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Testing & Quality Assurance
          </h3>
          <p className="mb-4">
            Every web development project undergoes rigorous QA testing before
            launch — covering functional testing across all user flows,
            cross-browser and multi-device compatibility, performance testing
            (PageSpeed, Core Web Vitals), security vulnerability testing,
            accessibility review, API integration testing, and SEO technical
            validation. We test every user journey from entry to completion
            before any code goes live.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Launch & Deployment
          </h3>
          <p className="mb-4">
            We manage the complete deployment process — cloud server setup, SSL
            configuration, DNS management, CDN integration, CI/CD pipeline
            configuration, and Google Search Console submission. We ensure a
            smooth, zero-downtime launch and verify that your web solution is
            correctly indexed, performing optimally, and fully operational from
            day one.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 7 — Post-Launch Support & Growth
          </h3>
          <p>
            After launch, we provide ongoing technical support, security
            updates, performance monitoring, feature development, and growth
            optimization as your business scales. We are your long-term
            technology partner — not just a development vendor — committed to
            the continued growth and performance of your web platform.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Discovery & Technical Strategy</li>
            <li>UX Design & Wireframing</li>
            <li>Visual Design</li>
            <li>Development & Engineering</li>
            <li>Testing & Quality Assurance</li>
            <li>Launch & Deployment</li>
            <li>Post-Launch Support & Growth</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Industries We Serve Across India
          </h2>
          <p className="mb-4">
            We have delivered web development projects for businesses across a
            wide range of industries and cities across India — including
            Hyderabad, Bangalore, Mumbai, Delhi, Chennai, and Pune — giving us
            valuable domain expertise and industry-specific best practices that
            we bring to every project.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technology & SaaS Startups</li>
            <li>Healthcare & MedTech</li>
            <li>Real Estate & PropTech</li>
            <li>Finance, Banking & FinTech</li>
            <li>Education & EdTech</li>
            <li>Manufacturing & Industrial</li>
            <li>Retail & Ecommerce</li>
            <li>Logistics & Supply Chain</li>
            <li>Legal & Professional Services</li>
            <li>Media & Entertainment</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose Us as Your Web Development Company in India?
          </h2>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Full-Stack Web Development Expertise Under One Roof
          </h3>
          <p className="mb-5">
            We are a full-stack web development company — covering UX design,
            frontend development, backend engineering, database architecture,
            API development, cloud deployment, DevOps, and SEO all under one
            roof. You work with one team, one point of contact, and one
            accountability structure — making project management simpler and
            outcomes more consistent than coordinating across multiple
            freelancers or agencies.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ SEO & Performance Built into Every Project as Standard
          </h3>
          <p className="mb-5">
            Technical SEO and performance optimization are built into our
            development process as standard — not add-ons. Every web solution we
            deliver targets a Google PageSpeed score of 90+ on both mobile and
            desktop, with optimized Core Web Vitals, clean URL structures,
            semantic HTML, schema markup, XML sitemaps, and mobile-first
            responsive design — giving your web presence the strongest possible
            foundation for organic search visibility from launch day.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Scalable Architecture Built for Business Growth
          </h3>
          <p className="mb-5">
            We architect every web development project with your future growth
            in mind. Whether you are expecting user numbers to grow tenfold or
            planning to expand from one market to ten, we build the right
            infrastructure — modular codebases, scalable cloud hosting,
            efficient database architecture, and clean API design — to support
            your growth without expensive rebuilds or technical debt
            accumulation.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Transparent Agile Process & On-Time Delivery
          </h3>
          <p className="mb-5">
            We follow an agile development process with regular sprint reviews,
            detailed project timelines, and clear milestone-based delivery — so
            you always know exactly where your project stands and can provide
            feedback throughout the build. We have a strong track record of
            on-time, on-budget web development delivery and transparent
            communication throughout every engagement.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Security-First Engineering on Every Project
          </h3>
          <p className="mb-5">
            Security is built into every layer of our web development process —
            from secure coding practices and input validation to server
            hardening, HTTPS enforcement, data encryption, and regular security
            audits. We follow OWASP guidelines on every project and implement
            appropriate security controls for your specific data sensitivity and
            regulatory requirements — giving you and your users confidence in
            the safety of your web platform.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Competitive India-Based Pricing with Global Quality Standards
          </h3>
          <p className="mb-5">
            As an India-based web development company, we deliver world-class
            engineering quality at a fraction of the cost of equivalent agencies
            in the US, UK, or Australia — making us the preferred technology
            partner for Indian businesses of all sizes and international clients
            looking to leverage India's exceptional engineering talent. You get
            global-standard web development at India-competitive pricing,
            without compromising on quality, process, or communication.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Full-Stack Expertise Under One Roof</li>
            <li>SEO & Performance Built in as Standard</li>
            <li>Scalable Architecture for Business Growth</li>
            <li>Transparent Agile Process & On-Time Delivery</li>
            <li>Security-First Engineering</li>
            <li>Competitive India-Based Pricing, Global Quality</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Development FAQs
          </h2>

          <p>
            <strong className="text-white">
              How much does web development cost in India?
            </strong>
            <br />
            Web development pricing in India depends on the type of project,
            design complexity, required functionality, technology stack, and
            timeline. A professionally developed business website typically
            starts from ₹25,000–₹75,000. A custom web application or SaaS
            product is priced based on specific requirements and scope. We
            provide a detailed, transparent proposal for every project — contact
            us for a free consultation and quote tailored to your specific needs
            and goals.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How long does web development take?
            </strong>
            <br />
            Timeline depends on project type and complexity. A standard business
            website with a custom design typically takes 3–6 weeks. A web
            application or SaaS product may take 3–6 months or more depending on
            feature scope. We provide a detailed project timeline with clear
            milestones at the start of every engagement — so you always know
            exactly when to expect delivery at every stage.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Do you work with clients across India or only in Hyderabad?
            </strong>
            <br />
            We work with clients across all major Indian cities — including
            Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune, Kolkata, and
            beyond — as well as international clients in the US, UK, Australia,
            and the Middle East. Our collaborative remote working process
            ensures the same high standard of communication, transparency, and
            delivery quality regardless of your location. We use structured
            project management tools, regular video calls, and detailed progress
            reporting to keep every engagement running smoothly.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Which technology stack do you recommend for my web project?
            </strong>
            <br />
            The right technology stack depends on your project type, performance
            requirements, team's long-term maintenance needs, budget, and
            timeline. For most marketing websites and content-driven platforms,
            Next.js or WordPress are excellent choices. For SaaS products and
            web applications, React.js with Node.js or Python backends are
            typically ideal. We assess your specific requirements during our
            free consultation and recommend the stack that best balances
            performance, scalability, and long-term maintainability for your
            specific situation.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Will my website be optimized for SEO?
            </strong>
            <br />
            Yes — technical SEO optimization is built into our development
            process as standard on every project. Every website we deliver
            includes optimized URL structures, semantic HTML heading hierarchy,
            on-page SEO architecture, structured data schema markup, XML
            sitemaps, canonical tag management, Core Web Vitals optimization,
            and mobile-first responsive design. We can also provide ongoing SEO
            services post-launch to grow your organic search visibility and
            drive qualified traffic over time.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Do you provide maintenance and support after the website or
              application launches?
            </strong>
            <br />
            Yes — we offer monthly maintenance and support retainers for all web
            development projects. This includes security updates, performance
            monitoring, regular backups, bug fixes, minor content and feature
            updates, and priority technical support. For growing businesses and
            SaaS products, we also provide ongoing feature development,
            conversion rate optimization, and SEO growth services. We are your
            long-term technology partner — not just a one-time development
            vendor.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Work with a{" "}
          <span className="gradient-text">
            Leading Web Development Company in India?
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg">
          Get a free consultation with our web development team. We'll review
          your requirements, share relevant examples from our portfolio, and
          provide a clear proposal with timeline and pricing — at no cost and no
          obligation.
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Let's build a web solution that performs, ranks on Google, and grows
          your business — anywhere in India and beyond.
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
