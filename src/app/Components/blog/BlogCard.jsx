import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${blog.slug}`}>
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          {blog.featured_image && (
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>

        <div className="p-6">
          {blog.category && (
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              {blog.category}
            </span>
          )}

          <h2 className="mt-3 text-2xl font-bold">{blog.title}</h2>

          <p className="mt-3 line-clamp-3 text-gray-600">{blog.excerpt}</p>

          <span className="mt-5 inline-block font-semibold">Read More →</span>
        </div>
      </Link>
    </article>
  );
}
