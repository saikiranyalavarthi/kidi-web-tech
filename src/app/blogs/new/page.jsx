"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    category: "",
    author: "",
    status: "draft",
    seo_title: "",
    seo_description: "",
    keywords: "",
  });

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function createSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleTitleChange(value) {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: createSlug(value),
    }));
  }

  async function handleSubmit(e, publish = false) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...form,

          status: publish ? "published" : "draft",

          keywords: form.keywords
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Failed to create blog");
        return;
      }

      alert("Blog created successfully!");

      router.push("/blogs");

      router.refresh();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Create New Blog</h1>

          <p className="mt-2 text-gray-500">
            Create and publish a new article.
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
          {/* BASIC */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Blog Information</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-medium">Blog Title *</label>

                <input
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                  placeholder="Enter blog title"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Slug *</label>

                <input
                  value={form.slug}
                  onChange={(e) => updateField("slug", e.target.value)}
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
                />

                <p className="mt-2 text-sm text-gray-400">
                  URL: /blog/{form.slug}
                </p>
              </div>

              <div>
                <label className="mb-2 block font-medium">Excerpt</label>

                <textarea
                  value={form.excerpt}
                  onChange={(e) => updateField("excerpt", e.target.value)}
                  rows={4}
                  placeholder="Short description..."
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">Category</label>

                  <input
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    placeholder="SEO"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">Author</label>

                  <input
                    value={form.author}
                    onChange={(e) => updateField("author", e.target.value)}
                    placeholder="Author name"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* IMAGE */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Featured Image</h2>

            <input
              value={form.featured_image}
              onChange={(e) => updateField("featured_image", e.target.value)}
              placeholder="https://example.com/blog-image.jpg"
              className="w-full rounded-xl border px-4 py-3"
            />

            {form.featured_image && (
              <img
                src={form.featured_image}
                alt="Preview"
                className="mt-5 max-h-80 rounded-xl object-cover"
              />
            )}
          </section>

          {/* CONTENT */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-2 text-xl font-bold">Blog Content</h2>

            <p className="mb-5 text-sm text-gray-500">
              You can use HTML formatting such as &lt;h2&gt;, &lt;p&gt;,
              &lt;strong&gt;, &lt;ul&gt; and &lt;img&gt;.
            </p>

            <textarea
              value={form.content}
              onChange={(e) => updateField("content", e.target.value)}
              required
              rows={25}
              placeholder="<h2>Introduction</h2><p>Your blog content...</p>"
              className="w-full rounded-xl border p-5 font-mono text-sm outline-none focus:border-black"
            />
          </section>

          {/* SEO */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">SEO Settings</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-medium">SEO Title</label>

                <input
                  value={form.seo_title}
                  onChange={(e) => updateField("seo_title", e.target.value)}
                  placeholder="SEO optimized title"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  SEO Description
                </label>

                <textarea
                  value={form.seo_description}
                  onChange={(e) =>
                    updateField("seo_description", e.target.value)
                  }
                  rows={4}
                  placeholder="SEO meta description"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Keywords</label>

                <input
                  value={form.keywords}
                  onChange={(e) => updateField("keywords", e.target.value)}
                  placeholder="seo, website design, digital marketing"
                  className="w-full rounded-xl border px-4 py-3"
                />

                <p className="mt-2 text-sm text-gray-400">
                  Separate keywords with commas.
                </p>
              </div>
            </div>
          </section>

          {/* BUTTONS */}

          <div className="flex flex-wrap justify-end gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl border bg-white px-6 py-3 font-semibold hover:bg-gray-50"
            >
              {loading ? "Saving..." : "Save Draft"}
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={(e) => handleSubmit(e, true)}
              className="rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
