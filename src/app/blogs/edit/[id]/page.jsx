"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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

  useEffect(() => {
    async function loadBlog() {
      try {
        const response = await fetch("/api/blogs");

        const result = await response.json();

        const blog = result.data?.find((item) => item.id === params.id);

        if (!blog) {
          alert("Blog not found");
          router.push("/blogs");
          return;
        }

        setForm({
          title: blog.title || "",
          slug: blog.slug || "",
          excerpt: blog.excerpt || "",
          content: blog.content || "",
          featured_image: blog.featured_image || "",
          category: blog.category || "",
          author: blog.author || "",
          status: blog.status || "draft",
          seo_title: blog.seo_title || "",
          seo_description: blog.seo_description || "",
          keywords: blog.keywords?.join(", ") || "",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      loadBlog();
    }
  }, [params.id, router]);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e, status) {
    e.preventDefault();

    setSaving(true);

    try {
      const response = await fetch("/api/blogs", {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: params.id,

          ...form,

          status,

          keywords: form.keywords
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Update failed");
        return;
      }

      alert("Blog updated successfully!");

      router.push("/blogs");

      router.refresh();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="p-10">Loading blog...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">Edit Blog</h1>

        <form className="space-y-6">
          {/* BASIC */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Blog Information</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-medium">Title</label>

                <input
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Slug</label>

                <input
                  value={form.slug}
                  onChange={(e) => updateField("slug", e.target.value)}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Excerpt</label>

                <textarea
                  value={form.excerpt}
                  onChange={(e) => updateField("excerpt", e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  placeholder="Category"
                  className="w-full rounded-xl border px-4 py-3"
                />

                <input
                  value={form.author}
                  onChange={(e) => updateField("author", e.target.value)}
                  placeholder="Author"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>
            </div>
          </section>

          {/* IMAGE */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">Featured Image</h2>

            <input
              value={form.featured_image}
              onChange={(e) => updateField("featured_image", e.target.value)}
              placeholder="Image URL"
              className="w-full rounded-xl border px-4 py-3"
            />

            {form.featured_image && (
              <img
                src={form.featured_image}
                alt=""
                className="mt-5 max-h-80 rounded-xl object-cover"
              />
            )}
          </section>

          {/* CONTENT */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">Content</h2>

            <textarea
              value={form.content}
              onChange={(e) => updateField("content", e.target.value)}
              rows={25}
              className="w-full rounded-xl border p-5 font-mono text-sm"
            />
          </section>

          {/* SEO */}

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">SEO Settings</h2>

            <div className="space-y-5">
              <input
                value={form.seo_title}
                onChange={(e) => updateField("seo_title", e.target.value)}
                placeholder="SEO Title"
                className="w-full rounded-xl border px-4 py-3"
              />

              <textarea
                value={form.seo_description}
                onChange={(e) => updateField("seo_description", e.target.value)}
                rows={4}
                placeholder="SEO Description"
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                value={form.keywords}
                onChange={(e) => updateField("keywords", e.target.value)}
                placeholder="keyword1, keyword2, keyword3"
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>
          </section>

          {/* BUTTONS */}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              disabled={saving}
              onClick={(e) => handleSubmit(e, "draft")}
              className="rounded-xl border bg-white px-6 py-3 font-semibold"
            >
              Save Draft
            </button>

            <button
              type="button"
              disabled={saving}
              onClick={(e) => handleSubmit(e, "published")}
              className="rounded-xl bg-black px-6 py-3 font-semibold text-white"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
