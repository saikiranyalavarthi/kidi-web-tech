import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "../../lib/supabase";

export const revalidate = 60;

async function getCaseStudy(slug) {
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) {
    console.error("Case study error:", error);
    return null;
  }

  return data;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const study = await getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | KIDIWEBTECH",
    };
  }

  return {
    title:
      study.seo_title ||
      `${study.title} | KIDIWEBTECH Case Study`,

    description:
      study.seo_description ||
      study.excerpt ||
      `Read the ${study.title} case study by KIDIWEBTECH.`,

    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },

    openGraph: {
      title:
        study.seo_title ||
        `${study.title} | KIDIWEBTECH`,

      description:
        study.seo_description ||
        study.excerpt ||
        "",

      images: study.featured_image
        ? [study.featured_image]
        : [],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  const study = await getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/case-studies"
            className="mb-8 inline-block text-sm text-yellow-400 hover:underline"
          >
            ← Back to Case Studies
          </Link>

          {study.industry && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-yellow-400">
              {study.industry}
            </p>
          )}

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {study.title}
          </h1>

          {study.excerpt && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              {study.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {study.featured_image && (
        <section className="px-6 pt-12">
          <div className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-2xl">
            <Image
              src={study.featured_image}
              alt={study.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* Project Information */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">

          {/* Client / Industry / Technology */}
          <div className="grid gap-6 border-b border-gray-200 pb-10 md:grid-cols-3">

            {study.client_name && (
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  CLIENT
                </p>

                <p className="mt-2 text-lg font-bold">
                  {study.client_name}
                </p>
              </div>
            )}

            {study.industry && (
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  INDUSTRY
                </p>

                <p className="mt-2 text-lg font-bold">
                  {study.industry}
                </p>
              </div>
            )}

            {study.technologies && (
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  TECHNOLOGIES
                </p>

                <p className="mt-2 text-lg font-bold">
                  {study.technologies}
                </p>
              </div>
            )}

          </div>

          {/* Challenge */}
          {study.challenge && (
            <section className="mt-14">
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
                The Challenge
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Understanding the Problem
              </h2>

              <div className="mt-5 whitespace-pre-line text-lg leading-8 text-gray-600">
                {study.challenge}
              </div>
            </section>
          )}

          {/* Solution */}
          {study.solution && (
            <section className="mt-14">
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
                Our Solution
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                How We Solved It
              </h2>

              <div className="mt-5 whitespace-pre-line text-lg leading-8 text-gray-600">
                {study.solution}
              </div>
            </section>
          )}

          {/* Results */}
          {study.results && (
            <section className="mt-14 rounded-2xl bg-gray-50 p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
                Results
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Project Results
              </h2>

              <div className="mt-5 whitespace-pre-line text-lg leading-8 text-gray-700">
                {study.results}
              </div>
            </section>
          )}

          {/* Content */}
          {study.content && (
            <section className="mt-14">
              <div className="whitespace-pre-line text-lg leading-8 text-gray-700">
                {study.content}
              </div>
            </section>
          )}

        </div>
      </section>
    </main>
  );
}