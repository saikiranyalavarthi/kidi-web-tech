"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase-client";

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
  const [uploading, setUploading] = useState(false);
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

  // ==============================
  // IMAGE UPLOAD
  // ==============================

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      setMessage("Image must be less than 5MB.");
      return;
    }

    // Image only
    if (!file.type.startsWith("image/")) {
      setMessage("Please select an image file.");
      return;
    }

    try {
      setUploading(true);
      setMessage("Uploading image...");

      const supabase = createClient();

      const fileExtension = file.name.split(".").pop();

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 10)}.${fileExtension}`;

      const filePath = `case-studies/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("case-studies")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("UPLOAD ERROR:", uploadError);
        throw new Error(uploadError.message);
      }

      const { data } = supabase.storage
        .from("case-studies")
        .getPublicUrl(filePath);

      setForm((prev) => ({
        ...prev,
        featured_image: data.publicUrl,
      }));

      setMessage("Image uploaded successfully!");
    } catch (error) {
      console.error("IMAGE UPLOAD ERROR:", error);
      setMessage(error.message || "Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  // ==============================
  // SUBMIT CASE STUDY
  // ==============================

  async function handleSubmit(e) {
    e.preventDefault();

    if (uploading) {
      setMessage("Please wait for the image upload to finish.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/case-studies", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to create case study"
        );
      }

      setMessage("Case study created successfully!");

      setTimeout(() => {
        router.push("/case-studies");
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error("CREATE CASE STUDY ERROR:", error);
      setMessage(error.message || "Failed to create case study.");
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

          {/* TITLE */}

          <input
            name="title"
            value={form.title}
            onChange={handleTitleChange}
            placeholder="Case Study Title"
            required
            className="w-full rounded-lg border p-3"
          />

          {/* SLUG */}

          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="Slug"
            required
            className="w-full rounded-lg border p-3"
          />

          {/* EXCERPT */}

          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Short Description"
            rows={4}
            className="w-full rounded-lg border p-3"
          />

          {/* CLIENT */}

          <input
            name="client_name"
            value={form.client_name}
            onChange={handleChange}
            placeholder="Client Name"
            className="w-full rounded-lg border p-3"
          />

          {/* INDUSTRY */}

          <input
            name="industry"
            value={form.industry}
            onChange={handleChange}
            placeholder="Industry"
            className="w-full rounded-lg border p-3"
          />

          {/* CHALLENGE */}

          <textarea
            name="challenge"
            value={form.challenge}
            onChange={handleChange}
            placeholder="Challenge"
            rows={7}
            className="w-full rounded-lg border p-3"
          />

          {/* SOLUTION */}

          <textarea
            name="solution"
            value={form.solution}
            onChange={handleChange}
            placeholder="Solution"
            rows={7}
            className="w-full rounded-lg border p-3"
          />

          {/* RESULTS */}

          <textarea
            name="results"
            value={form.results}
            onChange={handleChange}
            placeholder="Results / Google Rankings / Traffic / Leads"
            rows={7}
            className="w-full rounded-lg border p-3"
          />

          {/* TECHNOLOGIES */}

          <input
            name="technologies"
            value={form.technologies}
            onChange={handleChange}
            placeholder="Technologies: Next.js, React, Supabase, SEO"
            className="w-full rounded-lg border p-3"
          />

          {/* ==============================
              FEATURED IMAGE UPLOAD
          ============================== */}

          <div>
            <label className="mb-2 block font-semibold">
              Featured Image
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center transition hover:border-black hover:bg-gray-100">

              <div className="text-4xl">
                📷
              </div>

              <p className="mt-3 font-semibold">
                {uploading
                  ? "Uploading..."
                  : "Click to upload image"}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                JPG, PNG or WebP · Maximum 5MB
              </p>

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>

            {/* IMAGE PREVIEW */}

            {form.featured_image && (
              <div className="mt-5 overflow-hidden rounded-xl border bg-gray-50">
                <img
                  src={form.featured_image}
                  alt={form.title || "Case Study Featured Image"}
                  className="h-auto max-h-[400px] w-full object-cover"
                />
              </div>
            )}
          </div>

          {/* CONTENT */}

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Additional Case Study Content"
            rows={10}
            className="w-full rounded-lg border p-3"
          />

          {/* SEO TITLE */}

          <input
            name="seo_title"
            value={form.seo_title}
            onChange={handleChange}
            placeholder="SEO Title"
            className="w-full rounded-lg border p-3"
          />

          {/* SEO DESCRIPTION */}

          <textarea
            name="seo_description"
            value={form.seo_description}
            onChange={handleChange}
            placeholder="SEO Description"
            rows={4}
            className="w-full rounded-lg border p-3"
          />

          {/* PUBLISH */}

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

          {/* MESSAGE */}

          {message && (
            <div className="rounded-lg bg-gray-100 p-4">
              {message}
            </div>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading || uploading}
            className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-yellow-500 hover:text-black disabled:opacity-50"
          >
            {uploading
              ? "Uploading Image..."
              : loading
              ? "Publishing..."
              : "Create Case Study"}
          </button>

        </form>
      </div>
    </main>
  );
}