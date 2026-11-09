import Link from "next/link";

const pageUrl = "https://kidiwebtech.com/corporate-training";

export const metadata = {
  title: "Corporate Training Programs | KIDIWEBTECH",
  description:
    "Explore KIDIWEBTECH's corporate training programs: DevOps with Azure, IT Audit & SOX, and more. Online, industry-oriented training for working professionals.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Corporate Training Programs | KIDIWEBTECH",
    description:
      "Industry-oriented online corporate training for working professionals.",
    url: pageUrl,
    type: "website",
  },
};

export default function CorporateTrainingPage() {
  return (
    <main className="overflow-hidden bg-white pt-20">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/75" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            KIDIWEBTECH
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Corporate Training Programs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Industry-oriented online training designed for working
            professionals. Learn from real-time experts and build job-ready
            skills.
          </p>
        </div>
      </section>

      {/* COURSE CARDS (optional quick overview) */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
            Our Training Programs
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* DevOps with Azure Card */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-extrabold text-slate-900">
                DevOps with Microsoft Azure
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                2-month online training covering DevOps fundamentals, Azure
                cloud, Git, CI/CD, Docker, Kubernetes, Terraform and more.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
                <span className="rounded-full bg-blue-50 px-3 py-1">
                  2 Months
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1">
                  Online
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1">
                  ₹60,000
                </span>
              </div>
              <Link
                href="/corporate-training/devops-with-azure"
                className="mt-6 inline-block font-bold text-blue-600 hover:underline"
              >
                View Course Details →
              </Link>
            </article>

            {/* IT Audit & SOX Card */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-extrabold text-slate-900">
                IT Audit & SOX Training
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                45-day online training on IT Audit, SOX compliance, ITGC, risk
                management and practical audit activities.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
                <span className="rounded-full bg-blue-50 px-3 py-1">
                  45 Days
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1">
                  Online
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1">
                  ₹60,000
                </span>
              </div>
              <Link
                href="/corporate-training/it-audit-sox-training"
                className="mt-6 inline-block font-bold text-blue-600 hover:underline"
              >
                View Course Details →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-slate-950 px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready to Upskill Your Team?
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Contact us to discuss custom corporate training, batch schedules and
            group discounts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919390627367?text=Hi%2C%20I%20am%20interested%20in%20corporate%20training%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919390627367"
              className="rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Call 9390627367
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
