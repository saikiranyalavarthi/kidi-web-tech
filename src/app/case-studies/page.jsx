import Link from "next/link";
import Image from "next/image";
import { supabase } from "../lib/supabase";

export const revalidate = 60;

export const metadata = {
  title: "Case Studies | KIDIWEBTECH",
  description:
    "Explore KIDIWEBTECH case studies, projects, digital solutions, website development, SEO and digital marketing results.",
};

export default async function CaseStudiesPage() {
  const { data: caseStudies, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Case studies error:", error);
  }

  return (
    <main className="min-h-screen bg-white py-20">
      {/* Hero */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Our Work
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">Case Studies</h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Explore our real-world projects, strategies, solutions and
            measurable results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {!caseStudies || caseStudies.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 p-10 text-center">
              <h2 className="text-2xl font-bold">No case studies available</h2>

              <p className="mt-3 text-gray-600">
                New case studies will be published soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    {study.featured_image ? (
                      <Image
                        src={study.featured_image}
                        alt={study.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {study.industry && (
                      <p className="mb-2 text-sm font-semibold text-yellow-600">
                        {study.industry}
                      </p>
                    )}

                    <h2 className="text-2xl font-bold text-gray-900">
                      {study.title}
                    </h2>

                    {study.excerpt && (
                      <p className="mt-3 line-clamp-3 text-gray-600">
                        {study.excerpt}
                      </p>
                    )}

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="mt-6 inline-flex items-center rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
                    >
                      View Case Study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
