
import Link from "next/link";

export default function ITAuditSOXSection() {
  return (
    <section
      id="it-audit-sox"
      className="scroll-mt-28 py-20 px-5 bg-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
            alt="IT Audit and SOX compliance professional training"
            className="w-full h-[350px] md:h-[480px] object-cover rounded-3xl shadow-xl"
            loading="lazy"
          />

          <div className="absolute bottom-5 left-5 bg-blue-600 text-white px-6 py-4 rounded-2xl">
            <p className="text-sm">Training Duration</p>
            <p className="text-2xl font-extrabold">45 Days</p>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="text-blue-600 font-bold tracking-widest text-sm">
            AUDIT & COMPLIANCE TRAINING
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-5 leading-tight">
            IT Audit / SOX Training Online
          </h2>

          <p className="text-slate-600 leading-8 mt-6">
            Enhance your professional knowledge through our IT Audit
            and SOX training program. This online training is designed
            exclusively for working professionals interested in
            understanding IT auditing and SOX compliance concepts.
          </p>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">Duration</p>
              <h3 className="text-xl font-bold mt-2">45 Days</h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">Mode</p>
              <h3 className="text-xl font-bold mt-2">Online</h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">Eligibility</p>
              <h3 className="text-lg font-bold mt-2">
                Working Employees Only
              </h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-sm text-slate-500">Course Fee</p>
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                ₹60,000
              </h3>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://wa.me/919666545670?text=Hi%2C%20I%20am%20interested%20in%20IT%20Audit%20SOX%20Training."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            >
              Enquire Now →
            </a>

            <a
              href="tel:+919666545670"
              className="px-7 py-4 rounded-xl border border-slate-300 font-bold text-slate-900 hover:bg-slate-50"
            >
              Call 9666545670
            </a>

          </div>

          <p className="text-sm text-slate-500 mt-5">
            Contact our training team for syllabus and enrolment details.
          </p>

          <Link
            href="/corporate-training/it-audit-sox-training"
            className="inline-block mt-5 text-blue-600 font-bold hover:underline"
          >
            View Full IT Audit / SOX Course Details →
          </Link>

        </div>
      </div>
    </section>
  );
}
