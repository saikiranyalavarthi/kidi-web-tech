import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
            KIDIWEBTECH
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-gray-600">
            Manage your website content.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* BLOG */}
          <Link
            href="/blogs/new"
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-black text-2xl text-white">
              📝
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Create Blog Post
            </h2>

            <p className="mt-3 text-gray-600">
              Create and publish a new SEO blog article.
            </p>

            <div className="mt-6 font-semibold text-yellow-600">
              Create Blog →
            </div>
          </Link>

          {/* CASE STUDY */}
          <Link
            href="/admin/case-studies/new"
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-black text-2xl text-white">
              📊
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Create Case Study
            </h2>

            <p className="mt-3 text-gray-600">
              Add a project, results, rankings, traffic and client success
              story.
            </p>

            <div className="mt-6 font-semibold text-yellow-600">
              Create Case Study →
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}