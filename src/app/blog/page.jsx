import Link from "next/link";
import { supabase } from "../lib/supabase";

export const revalidate = 60;

async function getBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("status", "published")
    .order("published_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-white py-20">
      {/* HERO */}

      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Our Blog
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Insights, Ideas & Latest Updates
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Explore our latest articles, insights, trends, guides and expert
            perspectives.
          </p>
        </div>
      </section>

      {/* BLOGS */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        {blogs.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 p-10 text-center">
            <h2 className="text-2xl font-bold">No blogs published yet</h2>

            <p className="mt-2 text-gray-500">
              Check back soon for new articles.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/blog/${blog.slug}`}>
                  {/* IMAGE */}

                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    {blog.featured_image ? (
                      <img
                        src={blog.featured_image}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gray-100">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}

                  <div className="p-6">
                    {blog.category && (
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        {blog.category}
                      </span>
                    )}

                    <h2 className="mt-3 text-2xl font-bold leading-tight">
                      {blog.title}
                    </h2>

                    {blog.excerpt && (
                      <p className="mt-3 line-clamp-3 text-gray-600">
                        {blog.excerpt}
                      </p>
                    )}

                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-semibold">Read More →</span>

                      {blog.published_at && (
                        <span className="text-sm text-gray-400">
                          {new Date(blog.published_at).toLocaleDateString(
                            "en-IN",
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
