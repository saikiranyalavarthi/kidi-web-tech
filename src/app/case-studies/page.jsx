// app/case-studies/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Web Development & SEO Projects | KidiWebTech Hyderabad",
  description:
    "Explore KidiWebTech's real-world case studies — from pet consultation platforms and healthcare websites to news portals and agency sites. See how we help Hyderabad businesses grow online.",
  keywords: [
    "KidiWebTech Case Studies",
    "Web Development Case Studies Hyderabad",
    "React JS Projects Hyderabad",
    "Healthcare Website Development Hyderabad",
    "News Portal Development Hyderabad",
    "SEO Case Studies Hyderabad",
    "Digital Marketing Case Studies Hyderabad",
    "Web Development Portfolio Hyderabad",
  ],
  alternates: {
    canonical: "https://www.kidiwebtech.com/case-studies",
  },
  openGraph: {
    title: "Case Studies | Web Development & SEO Projects | KidiWebTech Hyderabad",
    description:
      "See how KidiWebTech builds high-performance websites and drives real results for businesses across Hyderabad.",
    url: "https://www.kidiwebtech.com/case-studies",
    siteName: "KidiWebTech",
    locale: "en_IN",
    type: "website",
  },
};

const caseStudies = [
  {
    id: 1,
    title: "Vet Meet Pet Consultation Platform",
    slug: "vet-meet-pet-consultation-platform",
    category: "Web Development",
    image: "/images/case-studies/vet-meet.jpg",
    description:
      "Built a modern pet consultation platform using React.js, Vite, and Tailwind CSS with responsive design and appointment booking.",
    tags: ["React JS", "Vite", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Aarya Neuro Care Hospital Website",
    slug: "aarya-neuro-care-hospital-website",
    category: "Healthcare Website",
    image: "/images/case-studies/aarya-neuro-care.jpg",
    description:
      "Developed a healthcare website with appointment booking, doctor profiles, and mobile-first responsive design.",
    tags: ["Next.js", "SEO", "Mobile-First"],
  },
  {
    id: 3,
    title: "Mana Enadu News Portal",
    slug: "mana-enadu-news-portal",
    category: "News Portal",
    image: "/images/case-studies/mana-enadu.jpg",
    description:
      "Created a Telugu news portal integrated with WordPress APIs for dynamic content and SEO optimization.",
    tags: ["WordPress API", "SEO", "React JS"],
  },
  {
    id: 4,
    title: "KidiWebTech Agency Website",
    slug: "kidiwebtech-agency-website",
    category: "Digital Marketing",
    image: "/images/case-studies/kidiwebtech.jpg",
    description:
      "Built a high-performance agency website optimized for SEO, lead generation, and Core Web Vitals.",
    tags: ["Next.js", "Core Web Vitals", "Lead Gen"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-gray-900 pt-24">

      {/* ── HERO ── */}
      <section className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Real Projects. Real Results.
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight mb-6">
            Our Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore how KidiWebTech helps businesses across Hyderabad grow through
            web development, SEO, and digital marketing solutions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mt-14">
            {[
              { stat: "200+", label: "Projects Delivered" },
              { stat: "8+ Yrs", label: "Hyderabad Experience" },
              { stat: "50+", label: "Industries Served" },
              { stat: "4.9★", label: "Client Rating" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-700">{stat}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-blue-700 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-4 flex-1">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/case-studies/${item.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Want Results Like These for Your Business?
          </h2>
          <p className="mb-10 text-lg text-blue-100">
            Talk with our Hyderabad web development team today. Free consultation,
            no commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Request Free Quote
            </a>
            <a
              href="https://wa.me/919390627367"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}