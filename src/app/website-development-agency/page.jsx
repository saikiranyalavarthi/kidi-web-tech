"use client";

import Image from "next/image";
import Link from "next/link";

export default function WebsiteDevelopmentAgencyPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Website Development <span className="gradient-text">Agency</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Partner with a full-service website development agency that builds
          high-performance, SEO-optimized, and conversion-focused websites and
          web applications — engineered precisely around your brand, audience,
          and business goals, not off-the-shelf templates.
        </p>
        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/website-development">Website Development</Link>
          <span className="mx-2">›</span>
          <span>Website Development Agency</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Full-Service Website Development Agency
            </h2>
            <p className="text-gray-400 mb-4">
              We are a full-service website development agency specializing in
              building high-performance websites, web applications, ecommerce
              platforms, and digital products engineered precisely around your
              business model, target audience, and revenue goals. Whether you
              need a sleek corporate website, a high-converting landing page, a
              scalable web application, or a full-featured ecommerce store — we
              deliver end-to-end website development solutions that perform,
              convert, and grow with your business.
            </p>
            <p className="text-gray-400 mb-4">
              Our agency brings together expert UI/UX designers, frontend
              developers, backend engineers, QA specialists, and SEO
              professionals who collaborate on every project to deliver websites
              that look exceptional, load fast, rank on Google, and drive
              measurable business results — from first click to final
              conversion.
            </p>
            <p className="text-gray-400">
              Whether you are a startup building your first online presence, a
              growing business redesigning an underperforming website, or an
              enterprise scaling your digital infrastructure across multiple
              markets, our agency has the creative talent, technical depth, and
              strategic thinking to build the right website development solution
              for your needs — on time, on budget, and to the highest standards
              of quality.
            </p>
          </div>
          <Image
            src="/assets/website-development-agency.jpg"
            alt="Website Development Agency"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= CORE CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-12 space-y-14 text-gray-400">
        {/* WHAT IS A WEBSITE DEVELOPMENT AGENCY */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is a Website Development Agency?
          </h2>
          <p className="mb-4">
            A website development agency is a specialist company that provides
            end-to-end website design, development, and digital strategy
            services — bringing together the full range of skills needed to
            conceive, design, build, launch, and grow a high-performing web
            presence under one roof. Unlike hiring a single freelance developer
            or using a DIY website builder, a professional website development
            agency gives you access to a complete, multidisciplinary team —
            designers, developers, engineers, strategists, QA specialists, and
            project managers — all working together within a structured,
            accountable process to deliver a superior outcome.
          </p>
          <p className="mb-4">
            A great website development agency does not just build websites — it
            builds digital assets that generate measurable business value.
            Whether that means a corporate website that positions your brand as
            the undisputed leader in your market, a landing page that converts
            paid traffic at an industry-leading rate, a web application that
            streamlines your operations, or an ecommerce store that drives
            revenue growth month after month — a skilled website development
            agency aligns every design and engineering decision with your
            specific business objectives.
          </p>
          <p>
            Partnering with the right website development agency is one of the
            highest-ROI investments a business can make in its digital future —
            delivering a web presence that works harder, performs better, and
            grows faster than anything a template builder or junior freelancer
            could produce.
          </p>
        </div>

        {/* WHY AGENCY OVER FREELANCER */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose a Website Development Agency Over a Freelancer or DIY
            Builder?
          </h2>
          <p className="mb-4">
            Freelance developers and DIY website builders are popular choices
            for businesses looking to minimize upfront costs — but they come
            with significant limitations that consistently hold growing
            businesses back. A single freelancer, however talented, cannot match
            the breadth of expertise a full agency team brings to a project.
            They lack the design depth, QA rigour, project management
            discipline, and strategic thinking that a professional agency
            applies as standard on every engagement. And DIY builders produce
            generic, template-based results that fail to differentiate your
            brand or meet custom functional requirements.
          </p>
          <p className="mb-4">
            A professional website development agency delivers a qualitatively
            different outcome. Every project benefits from dedicated UX research
            and design, performance-optimized frontend engineering, robust
            backend development, thorough QA testing, and a launch process that
            includes SEO setup, analytics configuration, and post-launch
            monitoring. The result is a website that is not just visually
            impressive — it is technically excellent, commercially effective,
            and built to last.
          </p>
          <p>
            From a total cost of ownership perspective, websites built by
            professional agencies consistently outperform freelancer or
            template-based alternatives — generating more traffic, more leads,
            and more revenue over their lifetime while requiring less emergency
            maintenance, security patching, and costly rebuilds. Investing in a
            quality agency engagement upfront is almost always the more
            economically rational choice for any business with serious digital
            ambitions.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Website Development Agency Services
          </h2>
          <p className="mb-6">
            We offer a comprehensive range of website development services
            covering every type of digital project — from marketing websites and
            landing pages to complex web applications, ecommerce platforms, and
            enterprise portals — for businesses of all sizes across all
            industries.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            1. Custom Website Development
          </h3>
          <p className="mb-5">
            We design and develop fully custom websites built from scratch
            around your brand identity, target audience, and business goals.
            Every element — from homepage layout and visual hierarchy to page
            flow, content architecture, and call-to-action design — is
            purposefully engineered to make a lasting impression and drive
            conversions. Our custom websites are lightweight, mobile-first, and
            SEO-optimized from the ground up — built to rank on Google and
            generate consistent organic leads and revenue.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            2. Corporate & Business Website Development
          </h3>
          <p className="mb-5">
            We develop professional corporate websites that establish your
            brand's authority, communicate your value proposition with clarity,
            and convert visitors into qualified leads. Our corporate website
            development service covers strategy, UX design, visual design,
            frontend development, backend integration, CMS setup, and SEO
            optimization — delivering a complete, production-ready corporate web
            presence that performs as impressively as it looks.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Landing Page Development
          </h3>
          <p className="mb-5">
            High-converting landing pages are among the highest-ROI digital
            assets a business can build — and every design and development
            decision we make is focused on maximizing your conversion rate. We
            develop landing pages for Google Ads campaigns, social media
            advertising, product launches, and email marketing — with sharp
            focus on message clarity, visual persuasion, social proof
            integration, and frictionless conversion paths that maximize your
            return on advertising spend.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Web Application Development
          </h3>
          <p className="mb-5">
            We build scalable, secure, and high-performance web applications for
            businesses that need custom digital tools — customer portals,
            internal management systems, workflow automation platforms,
            data-driven dashboards, booking and scheduling systems, and
            industry-specific applications. Our web application development
            covers the full stack — from UI/UX design and React.js frontends to
            Node.js or Python backends, database design, API development, and
            cloud deployment.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Ecommerce Website Development
          </h3>
          <p className="mb-5">
            We build high-converting, scalable ecommerce platforms — from custom
            Shopify stores and WooCommerce implementations to fully bespoke
            ecommerce solutions with complex product configurators, B2B ordering
            systems, or multi-vendor marketplace functionality. Every ecommerce
            solution we build is SEO-optimized, mobile-first, and engineered to
            maximize conversion rates and revenue per visitor.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            6. WordPress Website Development
          </h3>
          <p className="mb-5">
            For businesses that need a flexible, content-manageable website, we
            develop custom WordPress websites with bespoke themes built from
            scratch — never off-the-shelf templates. We optimize every WordPress
            build aggressively for performance, security, and SEO — delivering
            WordPress websites that load fast, rank well, and give your team
            complete content management capability without developer dependency.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            7. Website Redesign & Performance Optimization
          </h3>
          <p className="mb-5">
            If your current website is underperforming — loading slowly,
            generating poor leads, looking outdated, or failing to reflect your
            current brand — our agency provides complete website redesign and
            performance optimization services. We combine a modern design
            direction with conversion-focused UX improvements and technical
            performance enhancements to deliver a redesigned website that
            outperforms its predecessor from day one — while carefully
            protecting your existing SEO equity.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Custom Website Development</li>
            <li>Corporate & Business Website Development</li>
            <li>Landing Page Development</li>
            <li>Web Application Development</li>
            <li>Ecommerce Website Development</li>
            <li>WordPress Website Development</li>
            <li>Website Redesign & Performance Optimization</li>
          </ul>
        </div>

        {/* TECHNOLOGIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Technologies Our Agency Uses for Website Development
          </h2>
          <p className="mb-6">
            We select the technology stack best suited to your specific website
            requirements — balancing performance, scalability, developer
            productivity, and long-term maintainability across every project.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Next.js & React.js
          </h3>
          <p className="mb-4">
            Next.js is our agency's primary framework for custom website builds
            and web application frontends. Server-side rendering and static site
            generation deliver near-instant page loads and outstanding Core Web
            Vitals scores — directly contributing to higher search rankings and
            lower bounce rates. React.js powers rich interactive components,
            animations, and dynamic content experiences that make websites truly
            memorable.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Node.js & Express
          </h3>
          <p className="mb-4">
            For backend website development — custom APIs, server-side
            application logic, form handling, integrations, and real-time
            features — we use Node.js and Express to build fast, scalable
            server-side applications that handle high traffic volumes reliably.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            WordPress & Custom Themes
          </h3>
          <p className="mb-4">
            For content-driven websites requiring flexible CMS management, our
            agency builds custom WordPress themes from scratch. We optimize
            every WordPress build aggressively for performance and SEO —
            delivering WordPress websites that load fast, rank well, and give
            your team complete content control without developer dependency.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Shopify & WooCommerce
          </h3>
          <p className="mb-4">
            For ecommerce projects, our agency works with Shopify and
            WooCommerce — developing fully custom themes and advanced
            functionality that deliver ecommerce experiences far beyond what
            standard themes can achieve. We optimize every store for Core Web
            Vitals, mobile performance, and conversion rate as standard.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Tailwind CSS & GSAP
          </h3>
          <p className="mb-4">
            Tailwind CSS powers our frontend styling — enabling rapid, precise,
            and consistent implementation of complex design systems. GSAP powers
            our premium scroll animations, page transitions, and interactive
            motion design — the details that elevate a good website into an
            unforgettable agency-quality experience.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            AWS, Vercel & DigitalOcean
          </h3>
          <p className="mb-4">
            We deploy all websites on enterprise-grade cloud infrastructure with
            global CDN integration to ensure fast load times for every visitor,
            everywhere. SSL, DNS, server-side caching, image optimization, and
            CI/CD pipelines are configured as standard on every agency project.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Next.js / React.js (Custom & Full-Stack Builds)</li>
            <li>Node.js / Express (Backend & APIs)</li>
            <li>WordPress / Custom Themes (CMS Websites)</li>
            <li>Shopify / WooCommerce (Ecommerce)</li>
            <li>Tailwind CSS / GSAP (Styling & Animation)</li>
            <li>MongoDB / PostgreSQL (Database)</li>
            <li>AWS / Vercel / DigitalOcean (Cloud & Hosting)</li>
            <li>Figma (UI/UX Design)</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Website Development Agency Process
          </h2>
          <p className="mb-6">
            We follow a proven, transparent, and collaborative agency process
            that keeps you informed and in control at every stage — from
            discovery and strategy through to launch and ongoing growth.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Discovery & Digital Strategy
          </h3>
          <p className="mb-4">
            Every agency engagement begins with a thorough discovery session to
            understand your business, brand, target audience, competitive
            landscape, and website goals. We audit your existing digital
            presence, research your competitors, define the right technology
            stack and architecture, and produce a detailed project plan covering
            site structure, content strategy, SEO approach, integration
            requirements, milestones, and delivery timeline. A rigorous
            discovery phase ensures your website investment is directed at what
            will actually drive your business forward.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — UX Design & Wireframing
          </h3>
          <p className="mb-4">
            Our UX designers create detailed wireframes for every key page —
            mapping out the content layout, navigation structure, and user
            journey flows before visual design begins. This ensures the
            information architecture and conversion logic of your website is
            validated before any visual design or development investment. We
            refine wireframes through collaborative review until every page
            structure and user flow is approved by your team.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — Visual Design & Brand Expression
          </h3>
          <p className="mb-4">
            Our designers create high-fidelity visual designs for every page —
            translating your brand identity into a compelling, cohesive, and
            memorable digital experience. We design in Figma with full
            responsiveness across desktop, tablet, and mobile breakpoints, and
            deliver a complete design system covering typography, colour
            palette, UI components, and interactive states. Every visual design
            decision is made with both brand impact and conversion performance
            in mind.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Development & Engineering
          </h3>
          <p className="mb-4">
            Our frontend and backend developers build your website with clean,
            well-structured, and documented code — implementing every design
            detail with pixel precision. We build mobile-first,
            performance-first, and SEO-first. All animations, interactions, CMS
            integrations, and third-party connections are implemented and tested
            during this phase. We follow agile development practices with
            regular progress updates — so you see real progress throughout the
            build, not just at the end.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Testing & Quality Assurance
          </h3>
          <p className="mb-4">
            Every website undergoes rigorous agency-grade QA testing before
            launch — covering cross-browser and multi-device compatibility,
            performance testing (PageSpeed, Core Web Vitals), accessibility
            review, form and integration testing, SEO technical validation, and
            full content proofreading. We test every user journey from entry to
            conversion before any code goes live.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Launch & Deployment
          </h3>
          <p className="mb-4">
            We manage the complete deployment process — server setup, SSL
            configuration, DNS management, CDN integration, analytics setup, and
            Google Search Console submission. We ensure a smooth, zero-downtime
            launch and verify that your website is correctly indexed and
            performing optimally from day one.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 7 — Post-Launch Growth & Agency Support
          </h3>
          <p>
            After launch, we act as your ongoing digital growth agency —
            providing technical support, security updates, performance
            monitoring, conversion rate optimization, SEO services, and feature
            development as your business grows. We track your website's
            rankings, Core Web Vitals, and lead generation metrics and
            proactively recommend improvements that drive continued results. We
            are your long-term agency partner, not just a project vendor.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Discovery & Digital Strategy</li>
            <li>UX Design & Wireframing</li>
            <li>Visual Design & Brand Expression</li>
            <li>Development & Engineering</li>
            <li>Testing & Quality Assurance</li>
            <li>Launch & Deployment</li>
            <li>Post-Launch Growth & Agency Support</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Industries Our Website Development Agency Serves
          </h2>
          <p className="mb-4">
            Our agency has delivered website development projects for businesses
            across a wide range of industries — giving us valuable domain
            expertise and sector-specific best practices that we bring to every
            client engagement.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technology & SaaS</li>
            <li>Healthcare & Medical</li>
            <li>Real Estate & Construction</li>
            <li>Finance, Banking & Insurance</li>
            <li>Education & EdTech</li>
            <li>Manufacturing & Industrial</li>
            <li>Hospitality & Travel</li>
            <li>Legal & Professional Services</li>
            <li>Retail & Ecommerce</li>
            <li>Startups & D2C Brands</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Why Choose Our Website Development Agency?
          </h2>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ End-to-End Agency Capability Under One Roof
          </h3>
          <p className="mb-5">
            We are a true full-service website development agency — covering
            digital strategy, UX research, UI design, frontend development,
            backend engineering, CMS integration, ecommerce development, cloud
            deployment, QA testing, and SEO all under one roof. You work with
            one agency, one point of contact, and one accountability structure —
            making project management simpler, communication cleaner, and
            outcomes more consistent than managing multiple vendors or
            freelancers across your project.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Conversion-First Design on Every Project
          </h3>
          <p className="mb-5">
            Every design and development decision our agency makes is evaluated
            through the lens of business performance. From page layout and
            visual hierarchy to call-to-action placement, form design, and trust
            signal positioning — we build websites engineered to turn visitors
            into leads and customers. Our websites consistently achieve higher
            engagement and conversion rates than template-based or
            freelancer-built alternatives.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ SEO & Performance Built into Every Website as Standard
          </h3>
          <p className="mb-5">
            SEO optimization and performance engineering are built into our
            agency's development process as standard — not optional add-ons.
            Every website we deliver targets a Google PageSpeed score of 90+ on
            both mobile and desktop, with optimized Core Web Vitals, clean URL
            structures, semantic HTML, schema markup, XML sitemaps, and
            mobile-first responsive design — giving your website the strongest
            possible organic search foundation from launch day.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Transparent Agile Process & On-Time Delivery
          </h3>
          <p className="mb-5">
            We follow an agile development process with regular progress
            updates, clear milestone-based delivery, and a project management
            approach that gives you full visibility into where your project
            stands at every point in the engagement. We have a strong agency
            track record of on-time, on-budget delivery and transparent
            communication — so you always know what to expect and when.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Scalable Architecture Built for Long-Term Growth
          </h3>
          <p className="mb-5">
            We architect every website with your future growth in mind —
            building modular, well-documented codebases, scalable cloud hosting
            configurations, and design systems that extend cleanly as your brand
            and digital needs evolve. Our agency builds for where your business
            is going, not just where it is today — so you avoid costly rebuilds
            and technical debt as you scale.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Long-Term Agency Partnership, Not Just Project Delivery
          </h3>
          <p className="mb-5">
            We view every client engagement as the beginning of a long-term
            agency partnership. After launch, we remain invested in the
            continued performance, growth, and evolution of your website —
            providing ongoing support, optimization, and feature development as
            your business scales. Our clients stay with us because we deliver
            results that compound over time, not just a website that looks good
            on delivery day.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>End-to-End Agency Capability Under One Roof</li>
            <li>Conversion-First Design on Every Project</li>
            <li>SEO & Performance Built in as Standard</li>
            <li>Transparent Agile Process & On-Time Delivery</li>
            <li>Scalable Architecture for Long-Term Growth</li>
            <li>Long-Term Agency Partnership</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Website Development Agency FAQs
          </h2>

          <p>
            <strong className="text-white">
              What does a website development agency do?
            </strong>
            <br />A website development agency provides end-to-end website
            design, development, and digital strategy services — covering
            everything from initial discovery and UX design to frontend
            development, backend engineering, CMS integration, SEO setup, cloud
            deployment, and ongoing support. Unlike a single freelancer, an
            agency brings a complete multidisciplinary team to every project —
            giving you access to the full range of skills needed to build a
            high-performing, production-ready website that drives real business
            results.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How much does it cost to hire a website development agency?
            </strong>
            <br />
            Website development agency pricing depends on the type of project,
            design complexity, number of pages, required functionality, and
            technology stack. A professionally developed business website
            typically starts from ₹30,000–₹80,000 with our agency. A custom web
            application or enterprise website is priced based on specific scope
            and requirements. We provide a detailed, transparent proposal for
            every project — contact us for a free consultation and quote
            tailored to your specific needs and goals.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How long does a website development agency project take?
            </strong>
            <br />
            Timeline depends on project type and complexity. A standard business
            website with a custom design typically takes 3–6 weeks with our
            agency. A web application or ecommerce platform may take 8–16 weeks.
            Enterprise projects are scoped individually. We provide a detailed
            project timeline with clear milestones at the start of every
            engagement — so you always know exactly when to expect delivery at
            every stage.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              How is working with a website development agency different from
              hiring a freelancer?
            </strong>
            <br />
            Working with a professional website development agency gives you
            access to a complete, multidisciplinary team — designers,
            developers, QA specialists, and project managers — all working
            within a structured, accountable process. A freelancer, however
            talented, works alone and cannot match the design depth, engineering
            rigour, QA thoroughness, or strategic thinking that an agency team
            applies as standard. Agencies also provide formal contracts, IP
            protection, and continuity of service — giving you far greater
            security and reliability on projects that matter.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Will my website be optimized for SEO?
            </strong>
            <br />
            Yes — SEO optimization is built into our agency's development
            process as standard on every project. Every website we deliver
            includes optimized URL structures, heading hierarchy, on-page SEO
            architecture, schema markup, XML sitemaps, canonical tag management,
            Core Web Vitals optimization, and mobile-first responsive design. We
            can also provide ongoing SEO services post-launch to grow your
            organic search rankings and drive qualified traffic over time.
          </p>

          <p className="mt-6">
            <strong className="text-white">
              Do you provide ongoing support after the website launches?
            </strong>
            <br />
            Yes — we offer monthly agency support and maintenance retainers for
            all website projects. This includes security updates, performance
            monitoring, regular backups, bug fixes, content updates, and
            priority technical support. For growing businesses, we also provide
            ongoing conversion rate optimization, SEO services, and feature
            development to drive continued results. We are your long-term
            digital growth agency partner — not just a one-time project vendor.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to Work with a{" "}
          <span className="gradient-text">
            Full-Service Website Development Agency?
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg">
          Get a free consultation with our website development team. We'll
          review your requirements, share relevant portfolio examples, and
          provide a clear agency proposal with timeline and pricing — at no cost
          and no obligation.
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Let's build a website that ranks on Google, converts your audience,
          and grows your business — with an agency that stays invested in your
          success long after launch day.
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
