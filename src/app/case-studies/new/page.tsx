
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCaseStudyPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    client_name: "",
    industry: "",
    challenge: "",
    solution: "",
    results: "",
    technologies: "",
    featured_image: "",
    content: "",
    seo_title: "",
    seo_description: "",
    published: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;

    setForm((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/case-studies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create case study");
      }

      setMessage("Case study created successfully!");

      setTimeout(() => {
        router.push("/case-studies");
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-25 md:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
              Case Studies
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Add New Case Study
            </h1>

            <p className="mt-2 text-gray-600">
              Create a detailed project case study for your website.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/case-studies")}
            className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            ← Back to Case Studies
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl bg-white p-5 shadow-sm md:p-8"
        >

          {/* Basic Information */}
          <section>
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              Basic Information
            </h2>

            <div className="grid gap-5">

              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Case Study Title *
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleTitleChange}
                  placeholder="Example: Real Estate Website Development"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Slug *
                </label>

                <input
                  type="text"
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  placeholder="real-estate-website-development"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />

                <p className="mt-2 text-xs text-gray-500">
                  URL: /case-studies/{form.slug || "your-slug"}
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Short Description
                </label>

                <textarea
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write a short summary of this case study..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

            </div>
          </section>

          {/* Project Details */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              Project Details
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Client */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Client Name
                </label>

                <input
                  type="text"
                  name="client_name"
                  value={form.client_name}
                  onChange={handleChange}
                  placeholder="Example: ABC Developers"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Industry
                </label>

                <input
                  type="text"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  placeholder="Example: Real Estate"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Technologies */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Technologies
                </label>

                <input
                  type="text"
                  name="technologies"
                  value={form.technologies}
                  onChange={handleChange}
                  placeholder="Next.js, React, Tailwind CSS, Supabase"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* Featured Image */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Featured Image URL
                </label>

                <input
                  type="url"
                  name="featured_image"
                  value={form.featured_image}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

            </div>
          </section>

          {/* Challenge */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              The Challenge
            </h2>

            <p className="mb-5 text-sm text-gray-500">
              Explain what problem the client had before working with you.
            </p>

            <textarea
              name="challenge"
              value={form.challenge}
              onChange={handleChange}
              rows={8}
              placeholder="Describe the client's challenges, requirements and problems..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
            />
          </section>

          {/* Solution */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              Our Solution
            </h2>

            <p className="mb-5 text-sm text-gray-500">
              Explain what your company did to solve the problem.
            </p>

            <textarea
              name="solution"
              value={form.solution}
              onChange={handleChange}
              rows={10}
              placeholder="Describe your strategy, development process, SEO work, marketing strategy, etc..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
            />
          </section>

          {/* Results */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              Results
            </h2>

            <p className="mb-5 text-sm text-gray-500">
              Add measurable results such as rankings, traffic, leads,
              conversions and performance improvements.
            </p>

            <textarea
              name="results"
              value={form.results}
              onChange={handleChange}
              rows={10}
              placeholder={`Example:

Google Ranking:
• Web Development Company Hyderabad — #5
• SEO Company Hyderabad — #8

Organic Traffic:
• Increased by 120%

Leads:
• Increased by 65%

Website Performance:
• Improved Core Web Vitals`}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
            />
          </section>

          {/* Additional Content */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              Additional Content
            </h2>

            <p className="mb-5 text-sm text-gray-500">
              Add the complete case-study content here if required.
            </p>

            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={15}
              placeholder="Write detailed case study content..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
            />
          </section>

          {/* SEO */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              SEO Settings
            </h2>

            <div className="space-y-5">

              {/* SEO Title */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  SEO Title
                </label>

                <input
                  type="text"
                  name="seo_title"
                  value={form.seo_title}
                  onChange={handleChange}
                  placeholder="Real Estate Website Development Case Study | KIDIWEBTECH"
                  maxLength={70}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />

                <p className="mt-1 text-xs text-gray-500">
                  {form.seo_title.length}/70 characters
                </p>
              </div>

              {/* SEO Description */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  SEO Description
                </label>

                <textarea
                  name="seo_description"
                  value={form.seo_description}
                  onChange={handleChange}
                  rows={4}
                  maxLength={160}
                  placeholder="Read how KIDIWEBTECH helped a real estate company improve its website, SEO rankings and online leads."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />

                <p className="mt-1 text-xs text-gray-500">
                  {form.seo_description.length}/160 characters
                </p>
              </div>

            </div>
          </section>

          {/* Publish */}
          <section className="border-t border-gray-200 pt-8">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handleChange}
                className="h-5 w-5 rounded border-gray-300"
              />

              <div>
                <p className="font-semibold text-gray-900">
                  Publish Case Study
                </p>

                <p className="text-sm text-gray-500">
                  Published case studies will appear on the website.
                </p>
              </div>
            </label>
          </section>

          {/* Message */}
          {message && (
            <div
              className={`rounded-lg p-4 text-sm font-medium ${
                message.toLowerCase().includes("success")
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => router.push("/case-studies")}
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Case Study"}
            </button>

          </div>

        </form>
      </div>
    </main>
  );
}

