"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SEOPage() {
  return (
    <div className="bg-white text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black text-blue-600">
          Best SEO Services in <span className="text-blue-600">Hyderabad</span>
        </h1>
        <p className="text-black max-w-3xl mx-auto text-lg">
          Professional SEO services to increase Google rankings, boost organic
          traffic, and generate high-quality leads for your business in
          Hyderabad. We combine technical expertise, data-driven content
          strategy, and authoritative link building to deliver real, measurable
          growth.
        </p>
        <nav className="mt-6 text-sm text-black">
          <Link href="/">Home</Link>
          <span className="mx-2">›</span>
          <span>SEO Services</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Top SEO Company in Hyderabad
            </h2>
            <p className="text-black mb-4">
              We are one of the leading SEO companies in Hyderabad, helping
              businesses of all sizes achieve top rankings on Google and other
              major search engines. Our team of certified SEO specialists
              combines deep technical knowledge with creative content strategies
              to deliver consistent, long-lasting results.
            </p>
            <p className="text-black mb-4">
              Whether you run a local retail store, a growing e-commerce brand,
              a real estate company, or a B2B SaaS product, our SEO services are
              tailored to match your business goals and target audience. We
              don't believe in one-size-fits-all packages — every strategy we
              build is custom, competitive, and result-oriented.
            </p>
            <p className="text-black">
              Our SEO solutions are designed to deliver long-term organic
              growth, increased brand visibility, and a consistent pipeline of
              high-quality leads. We help you compete and win in even the most
              competitive niches in Hyderabad and across India.
            </p>
          </div>
          <Image
            src="/assets/image14.jpg"
            alt="SEO Services Hyderabad"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ================= WHAT IS SEO ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          What Is SEO and Why Does Your Business Need It?
        </h2>
        <p className="text-black mb-4">
          Search Engine Optimization (SEO) is the process of improving your
          website's visibility on search engines like Google, Bing, and Yahoo so
          that potential customers can find you when they search for products or
          services you offer. SEO involves a combination of technical website
          improvements, high-quality content creation, and strategic link
          acquisition to signal authority and relevance to search engine
          algorithms.
        </p>
        <p className="text-black mb-4">
          In today's digital-first world, over 93% of online experiences begin
          with a search engine. If your business is not appearing on the first
          page of Google, you are losing customers to your competitors every
          single day. Studies show that the first five organic results on Google
          capture more than 67% of all clicks — making top rankings not just
          desirable, but essential for business growth.
        </p>
        <p className="text-black">
          Unlike paid advertising, which stops the moment you stop spending, SEO
          builds a permanent digital asset. A well-optimized website continues
          to generate organic traffic and leads 24/7, month after month, year
          after year. This makes SEO one of the highest ROI digital marketing
          investments you can make for your business in Hyderabad or anywhere in
          India.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-20 py-12 max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Our Comprehensive SEO Services in Hyderabad
          </h2>
          <p className="text-black mb-6">
            We offer a full spectrum of SEO services designed to cover every
            aspect of search engine optimization. From the initial audit to
            ongoing monthly management, our team handles everything so you can
            focus on running your business.
          </p>

          {/* SEO Audit */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            1. SEO Audit & Competitor Analysis
          </h3>
          <p className="text-black mb-6">
            Every successful SEO campaign begins with a thorough audit of your
            existing website. We analyze your site's technical health, content
            quality, backlink profile, and keyword rankings to identify
            strengths and weaknesses. Alongside this, we conduct in-depth
            competitor research to understand what your top-ranking competitors
            are doing right — and where the gaps exist that you can exploit for
            faster results.
          </p>

          {/* On-Page SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            2. On-Page SEO Optimization
          </h3>
          <p className="text-black mb-6">
            On-page SEO involves optimizing each page of your website to rank
            higher and earn more relevant traffic. This includes optimizing
            title tags, meta descriptions, header tags (H1–H4), image alt text,
            URL structures, internal linking, and overall content quality. We
            ensure that every page on your website clearly communicates its
            relevance to both users and search engines, improving click-through
            rates and dwell time.
          </p>

          {/* Technical SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            3. Technical SEO & Website Speed Optimization
          </h3>
          <p className="text-black mb-6">
            Technical SEO forms the foundation of all your SEO efforts. If your
            website has crawl errors, broken links, slow loading times, or poor
            mobile usability, no amount of content or backlinks will get you to
            the top of Google. Our technical SEO specialists fix Core Web Vitals
            issues, improve page speed, resolve indexing errors, set up proper
            XML sitemaps and robots.txt files, implement structured data (schema
            markup), and ensure your site is 100% crawlable and indexable by
            Google.
          </p>

          {/* Local SEO */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            4. Local SEO & Google Business Profile Optimization
          </h3>
          <p className="text-black mb-6">
            For businesses targeting customers in Hyderabad or specific
            neighborhoods like Banjara Hills, Hitech City, Gachibowli, or
            Jubilee Hills, Local SEO is critical. We optimize your Google
            Business Profile (formerly Google My Business), build consistent
            local citations across major directories, create location-specific
            landing pages, and earn local backlinks to help you dominate the
            local pack and map results for relevant searches.
          </p>

          {/* Keyword Research */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            5. Keyword Research & Content Strategy
          </h3>
          <p className="text-black mb-6">
            Ranking for the right keywords is what separates a high-converting
            SEO strategy from a vanity metrics exercise. We perform exhaustive
            keyword research to identify high-intent, high-volume search terms
            that your ideal customers are using. We then build a content
            strategy around these keywords — including blog posts, service
            pages, landing pages, FAQs, and pillar content — that drives
            qualified traffic and supports your conversion goals.
          </p>

          {/* Link Building */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            6. Link Building & Domain Authority Growth
          </h3>
          <p className="text-black mb-6">
            Backlinks remain one of Google's most important ranking factors. We
            earn high-quality, relevant backlinks from authoritative websites
            through white-hat outreach, digital PR, guest posting, and content
            partnerships. Our link building campaigns are designed to
            sustainably increase your domain authority, improve your site's
            trustworthiness in Google's eyes, and push your rankings higher over
            time — without risking any penalties.
          </p>

          <ul className="list-disc pl-6 text-black space-y-2 mt-2">
            <li>SEO Audit & Competitor Analysis</li>
            <li>On-Page SEO Optimization</li>
            <li>Technical SEO & Website Speed Optimization</li>
            <li>Local SEO & Google Business Profile</li>
            <li>Keyword Research & Content Strategy</li>
            <li>Link Building & Authority Growth</li>
          </ul>
        </div>

        {/* ================= LOCAL SEO ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Local SEO Services in Hyderabad
          </h2>
          <p className="text-black mb-4">
            Hyderabad is one of India's fastest-growing cities with a booming
            economy spanning IT, pharma, manufacturing, retail, real estate, and
            hospitality. As more consumers turn to Google to find local
            businesses — from restaurants and clinics to law firms and interior
            designers — ranking in local search results has never been more
            important.
          </p>
          <p className="text-black mb-4">
            Our local SEO services help you appear in the Google Local Pack (the
            map listings that appear at the top of local search results), rank
            for "near me" searches, and attract customers who are actively
            looking for your services in your specific area of Hyderabad.
          </p>
          <p className="text-black">
            We optimize your Google Business Profile with accurate NAP (Name,
            Address, Phone) information, compelling business descriptions,
            service areas, photo uploads, Q&amp;A management, and review
            generation strategies. We also build citations across top Indian and
            global directories like Justdial, Sulekha, IndiaMART, Yelp, and
            dozens more to strengthen your local authority.
          </p>
        </div>

        {/* ================= INDUSTRIES ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Industries We Serve
          </h2>
          <p className="text-black mb-4">
            Our SEO team has hands-on experience working across a wide range of
            industries, giving us the unique ability to understand your market
            dynamics, customer intent, and competitive landscape. We have
            delivered top Google rankings for businesses in:
          </p>
          <ul className="list-disc pl-6 text-black space-y-2">
            <li>Real Estate & Property Developers</li>
            <li>Healthcare, Clinics & Hospitals</li>
            <li>E-commerce & Retail Stores</li>
            <li>IT Companies & SaaS Products</li>
            <li>Education & Coaching Institutes</li>
            <li>Restaurants, Cafes & Food Businesses</li>
            <li>Legal Services & Law Firms</li>
            <li>Interior Design & Architecture</li>
            <li>Travel, Hospitality & Tourism</li>
            <li>Manufacturing & Industrial Companies</li>
          </ul>
        </div>

        {/* ================= PROCESS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Our Proven SEO Process
          </h2>
          <p className="text-black mb-6">
            We follow a structured, transparent, and results-driven SEO process
            that ensures every action we take moves the needle for your
            business. Here's how we work:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 1 — Discovery & Keyword Research
          </h3>
          <p className="text-black mb-4">
            We begin by understanding your business, target audience, goals, and
            competition. We then perform in-depth keyword research to identify
            the most valuable search terms for your business — balancing search
            volume, competition, and commercial intent.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 2 — Comprehensive Website Audit
          </h3>
          <p className="text-black mb-4">
            We run a 150-point SEO audit covering technical health, on-page
            factors, content gaps, backlink quality, and user experience
            signals. This forms the roadmap for everything we do next.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 3 — On-Page & Technical Optimization
          </h3>
          <p className="text-black mb-4">
            We implement all on-page and technical fixes — from meta tag
            optimization and internal link restructuring to fixing Core Web
            Vitals, mobile usability, and crawl errors. We also add schema
            markup where relevant to improve your visibility in rich results.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 4 — Content Creation & Optimization
          </h3>
          <p className="text-black mb-4">
            Our SEO content writers create high-quality, keyword-rich content
            tailored to your audience's search intent. Whether it's optimizing
            existing service pages or building a blog content calendar, we
            ensure every piece of content serves both users and search engines.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 5 — Link Building & Off-Page SEO
          </h3>
          <p className="text-black mb-4">
            We execute targeted outreach campaigns to earn backlinks from
            relevant, high-authority websites in your niche. Each link we build
            is manually vetted for quality and relevance to ensure maximum
            impact on your domain authority and rankings.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Step 6 — Monthly Reporting & Strategy Review
          </h3>
          <p className="text-black mb-4">
            Every month, we deliver a detailed report covering keyword ranking
            movements, organic traffic growth, backlinks earned, technical
            health status, and key insights. We hold regular strategy review
            calls to align on progress and refine the approach based on data.
          </p>

          <ul className="list-disc pl-6 text-black space-y-2 mt-2">
            <li>Keyword Research</li>
            <li>Website Audit</li>
            <li>On-Page Optimization</li>
            <li>Content Creation</li>
            <li>Link Building</li>
            <li>Monthly Reporting</li>
          </ul>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Why Choose Us as Your SEO Partner in Hyderabad?
          </h2>
          <p className="text-black mb-6">
            There are hundreds of digital marketing agencies in Hyderabad, but
            not all of them deliver real results. Here's what sets us apart:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ 100% White Hat SEO
          </h3>
          <p className="text-black mb-4">
            We strictly follow Google's Webmaster Guidelines. Every tactic we
            use is ethical, sustainable, and designed for long-term growth. We
            never use black-hat shortcuts like link spam, keyword stuffing, or
            cloaking that could result in Google penalties.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Proven Ranking Results
          </h3>
          <p className="text-black mb-4">
            We have helped businesses across Hyderabad rank on the first page of
            Google for competitive keywords in industries ranging from real
            estate to healthcare. Our portfolio of case studies demonstrates
            consistent results across diverse industries and budget levels.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Fully Transparent Reporting
          </h3>
          <p className="text-black mb-4">
            You always know exactly what we're doing and why. Our monthly
            reports are detailed, plain-language summaries of every action
            taken, every ranking gained, and every metric that matters. We don't
            hide behind jargon or vague activity reports.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Dedicated & Experienced SEO Team
          </h3>
          <p className="text-black mb-4">
            You get a dedicated team of SEO strategists, content writers,
            technical SEO experts, and link building specialists — not a single
            junior freelancer managing everything. Our team stays updated with
            the latest Google algorithm changes and industry trends to keep your
            rankings protected and growing.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-white">
            ✅ Custom Strategies, Not Cookie-Cutter Packages
          </h3>
          <p className="text-black mb-4">
            Every business we work with gets a custom SEO strategy built around
            their specific goals, market, and competition. We never apply the
            same template approach to every client — we build what works for
            you, specifically.
          </p>

          <ul className="list-disc pl-6 text-black space-y-2 mt-2">
            <li>100% White Hat SEO</li>
            <li>Proven Ranking Results</li>
            <li>Transparent Reports</li>
            <li>Experienced SEO Team</li>
          </ul>
        </div>

        {/* ================= RESULTS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            What Results Can You Expect from SEO?
          </h2>
          <p className="text-black mb-4">
            SEO is a long-term investment, but the results compound over time
            and deliver exceptional ROI compared to most other digital marketing
            channels. Here's what you can typically expect when working with our
            SEO team:
          </p>
          <ul className="list-disc pl-6 text-black space-y-2">
            <li>
              <strong className="text-white">Month 1–2:</strong> Technical fixes
              deployed, on-page optimization complete, initial keyword rankings
              tracked and baselined.
            </li>
            <li>
              <strong className="text-white">Month 3–4:</strong> Rankings begin
              improving for long-tail and medium-competition keywords. Organic
              traffic starts growing noticeably.
            </li>
            <li>
              <strong className="text-white">Month 5–6:</strong> Significant
              ranking improvements for primary keywords. Organic leads and
              conversions increase. Local SEO results strengthen.
            </li>
            <li>
              <strong className="text-white">Month 7–12:</strong> Rankings
              stabilize and compound. Multiple first-page and top-3 positions
              achieved. Organic traffic becomes a reliable, growing channel for
              your business.
            </li>
          </ul>
        </div>

        {/* ================= FAQ ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Frequently Asked Questions (FAQs)
          </h2>

          <p className="text-black mt-4">
            <strong className="text-white">
              How long does SEO take to show results?
            </strong>
            <br />
            SEO typically takes 3–6 months to show noticeable improvements in
            rankings and traffic, though this depends on your current website
            authority, competition, and the keywords you're targeting. Highly
            competitive niches may take 9–12 months for significant first-page
            rankings. The results, however, are durable and compound over time —
            unlike paid ads that stop the moment you pause your budget.
          </p>

          <p className="text-black mt-4">
            <strong className="text-white">
              Is SEO better than Google Ads?
            </strong>
            <br />
            Both have their place. Google Ads deliver instant visibility and are
            great for promotions, product launches, and immediate lead
            generation. SEO is a long-term strategy that builds sustainable
            organic traffic at no ongoing cost per click. Businesses that
            combine both see the best overall results — using ads for immediate
            wins while SEO builds a long-term foundation.
          </p>

          <p className="text-black mt-4">
            <strong className="text-white">
              How much do SEO services cost in Hyderabad?
            </strong>
            <br />
            SEO pricing varies based on the scope of work, competition level,
            and your business goals. We offer flexible monthly packages for
            small businesses, growing startups, and large enterprises. Contact
            us for a custom quote and free audit — we'll give you a clear
            picture of what's possible within your budget.
          </p>

          <p className="text-black mt-4">
            <strong className="text-white">
              Do you guarantee first-page rankings?
            </strong>
            <br />
            No ethical SEO company can guarantee specific rankings because
            Google's algorithm is outside anyone's control. What we do guarantee
            is a data-driven strategy, full transparency, consistent execution,
            and measurable improvements in your organic visibility over time.
            Our track record of results speaks for itself.
          </p>

          <p className="text-black mt-4">
            <strong className="text-white">
              Will SEO work for my local business in Hyderabad?
            </strong>
            <br />
            Absolutely. Local SEO is one of the highest ROI strategies for local
            businesses. Whether you're a clinic in Banjara Hills, a restaurant
            in Jubilee Hills, or a law firm in Secunderabad — if your customers
            are searching for your services in Hyderabad, we can help you get in
            front of them.
          </p>

          <p className="text-black mt-4">
            <strong className="text-white">
              What makes your SEO different from other agencies?
            </strong>
            <br />
            We focus on revenue and business outcomes, not just rankings and
            traffic metrics. Every strategy we build is tied to your actual
            business goals. We combine technical excellence with high-quality
            content and authoritative link building — and we communicate clearly
            and transparently throughout the entire engagement.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Rank #1 on Google in Hyderabad?
        </h2>
        <p className="text-black mb-2 max-w-2xl mx-auto">
          Get a free, no-obligation SEO audit worth ₹5,000 — and discover
          exactly what's holding your website back from the top of Google. Our
          team will analyze your site, review your competition, and present a
          clear roadmap to ranking success.
        </p>
        <p className="text-black mb-6">
          Let's grow your business with the power of organic search.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold"
        >
          Get Free SEO Audit →
        </Link>
      </section>
    </div>
  );
}
