import Image from "next/image";
import Link from "next/link";

/* ================= SEO METADATA ================= */

export const metadata = {
  title: "Web Designing Company in Hyderabad | KIDIWEBTECH",
  description:
    "KIDIWEBTECH is a professional web designing company in Hyderabad offering responsive, SEO-friendly, and high-converting website design services for businesses.",
  keywords: [
    "web designing company in hyderabad",
    "website design company hyderabad",
    "responsive web design",
    "ui ux designers hyderabad",
    "custom web design services",
    "business website design",
  ],
  alternates: {
    canonical: "https://kidiwebtech.com/services/web-design",
  },
};

/* ================= PAGE ================= */

export default function WebDesigningPage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-18 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Web Designing Company in{" "}
          <span className="gradient-text">Hyderabad</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          High-converting, responsive, and SEO-friendly website designs that
          help businesses grow online.
        </p>

        <nav className="mt-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <span className="mx-2">›</span>
          <span>Web Designing</span>
        </nav>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-12 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-rose-500 opacity-80" />
            <div className="relative bg-black rounded-3xl m-[1.5px] overflow-hidden">
              <Image
                src="/assets/image16.jpg"
                alt="Web designing services and website design company in Hyderabad"
                width={600}
                height={420}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Professional <span className="gradient-text">Website Design Services</span>
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Your website is the foundation of your digital presence. If it
              doesn’t load fast, look professional, and guide users clearly,
              you lose potential customers.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="gradient-text">KIDIWEBTECH</strong> is a trusted
              web designing company in Hyderabad delivering visually stunning,
              user-friendly, and conversion-focused websites for businesses.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We design websites that are responsive, SEO-optimized, and built
              to convert visitors into leads and customers.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="px-6 md:px-20 max-w-6xl mx-auto py-20 space-y-12 text-gray-400">

        {/* WHAT IS WEB DESIGN */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            What Is Web Designing and Why It Matters?
          </h2>
          <p>
            Web designing is the process of creating visually appealing,
            user-friendly, and functional websites. A professionally designed
            website builds trust, improves user experience, supports SEO, and
            increases conversion rates.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Our Web Designing Services Include
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom Website Design</li>
            <li>Responsive & Mobile-Friendly Layouts</li>
            <li>UI/UX Focused Website Design</li>
            <li>SEO-Friendly Website Structure</li>
            <li>Fast Loading & Performance Optimization</li>
            <li>Landing Pages & Business Websites</li>
          </ul>
        </div>

        {/* LOCAL SEO */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Website Design Services for Businesses in Hyderabad
          </h2>
          <p>
            Our local web designing services help Hyderabad-based businesses
            establish a strong online presence. We design websites that rank
            well on Google and attract local customers searching for your
            services.
          </p>
        </div>

        {/* DESIGN VS TEMPLATE */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Custom Web Design vs Template-Based Websites
          </h2>
          <p>
            Custom website design offers better branding, flexibility, and
            performance compared to generic templates. Businesses that invest
            in custom web design stand out from competitors and achieve better
            long-term results.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-extrabold gradient-text mb-4">
            Web Designing – Frequently Asked Questions
          </h2>

          <p>
            <strong>How much does website design cost?</strong><br />
            Website design cost depends on features, design complexity, and
            business requirements. We offer flexible pricing for startups and
            businesses.
          </p>

          <p className="mt-4">
            <strong>How long does it take to design a website?</strong><br />
            A standard business website usually takes 2–4 weeks, depending on
            scope and content.
          </p>

          <p className="mt-4">
            <strong>Will my website be SEO-friendly?</strong><br />
            Yes. All our websites are designed with SEO best practices,
            responsive layouts, and fast performance.
          </p>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold mb-6">
          Need a <span className="gradient-text">High-Impact Website?</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Let’s design a professional website that represents your brand and
          drives real business growth.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full
              bg-gradient-to-r from-purple-500 to-rose-500
              text-white font-semibold text-lg
              hover:opacity-90 transition"
          >
            Get a Free Website Quote →
          </Link>

          <Link
            href="https://wa.me/919390627367"
            className="inline-block px-10 py-4 rounded-full
              border border-rose-400 text-rose-400
              hover:bg-rose-400 hover:text-black transition"
          >
            WhatsApp Us
          </Link>
        </div>
      </section>

    </div>
  );
}
