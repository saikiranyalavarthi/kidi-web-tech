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

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function generateSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleTitleChange(e) {
    const title = e.target.value;

    setForm((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  }

  async function handleSubmit(e) {
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
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-8 text-4xl font-bold">
          Add Case Study
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-white p-8 shadow"
        >

          <input
            name="title"
            value={form.title}
            onChange={handleTitleChange}
            placeholder="Case Study Title"
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="Slug"
            required
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Short Description"
            rows={4}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="client_name"
            value={form.client_name}
            onChange={handleChange}
            placeholder="Client Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            name="industry"
            value={form.industry}
            onChange={handleChange}
            placeholder="Industry"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="challenge"
            value={form.challenge}
            onChange={handleChange}
            placeholder="Challenge"
            rows={7}
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="solution"
            value={form.solution}
            onChange={handleChange}
            placeholder="Solution"
            rows={7}
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="results"
            value={form.results}
            onChange={handleChange}
            placeholder="Results / Google Rankings / Traffic / Leads"
            rows={7}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="technologies"
            value={form.technologies}
            onChange={handleChange}
            placeholder="Technologies: Next.js, React, Supabase, SEO"
            className="w-full rounded-lg border p-3"
          />

          <input
            name="featured_image"
            value={form.featured_image}
            onChange={handleChange}
            placeholder="Featured Image URL"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Additional Case Study Content"
            rows={10}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="seo_title"
            value={form.seo_title}
            onChange={handleChange}
            placeholder="SEO Title"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="seo_description"
            value={form.seo_description}
            onChange={handleChange}
            placeholder="SEO Description"
            rows={4}
            className="w-full rounded-lg border p-3"
          />

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
              className="h-5 w-5"
            />

            <span className="font-medium">
              Publish Case Study
            </span>
          </label>

          {message && (
            <div className="rounded-lg bg-gray-100 p-4">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-yellow-500 hover:text-black disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Create Case Study"}
          </button>

        </form>
      </div>
    </main>
  );
}