"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadBlogs() {
    setLoading(true);

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (!error) {
      setBlogs(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadBlogs();
  }, []);

  async function deleteBlog(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("blogs").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-30">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Blog Management</h1>

            <p className="mt-1 text-gray-500">
              Create, edit and manage your website blogs.
            </p>
          </div>

          <Link
            href="/blogs/new"
            className="rounded-xl bg-black px-6 py-3 text-center font-semibold text-white hover:bg-gray-800"
          >
            + Create New Blog
          </Link>
        </div>

        {/* SEARCH */}

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 outline-none focus:border-black md:max-w-md"
          />
        </div>

        {/* TABLE */}

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {loading ? (
            <div className="p-10 text-center">Loading blogs...</div>
          ) : filteredBlogs.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              No blogs found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left">Blog</th>

                    <th className="px-6 py-4 text-left">Category</th>

                    <th className="px-6 py-4 text-left">Status</th>

                    <th className="px-6 py-4 text-left">Date</th>

                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id} className="border-b last:border-0">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          {blog.featured_image ? (
                            <img
                              src={blog.featured_image}
                              alt=""
                              className="h-14 w-20 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="h-14 w-20 rounded-lg bg-gray-100" />
                          )}

                          <div>
                            <p className="font-semibold">{blog.title}</p>

                            <p className="mt-1 text-sm text-gray-400">
                              /blog/{blog.slug}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">{blog.category || "-"}</td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            blog.status === "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {blog.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-500">
                        {new Date(blog.created_at).toLocaleDateString("en-IN")}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-3">
                          <Link
                            href={`/blogs/edit/${blog.id}`}
                            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => deleteBlog(blog.id)}
                            className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
