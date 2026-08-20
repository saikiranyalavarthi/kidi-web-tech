import { notFound } from "next/navigation";
import { supabase } from "../../lib/supabase";

async function getBlog(slug) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seo_title || blog.title,

    description: blog.seo_description || blog.excerpt || "",

    keywords: blog.keywords || [],

    alternates: {
      canonical: `/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.seo_title || blog.title,

      description: blog.seo_description || blog.excerpt || "",

      type: "article",

      images: blog.featured_image
        ? [
            {
              url: blog.featured_image,
              alt: blog.title,
            },
          ]
        : [],
    },
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: blog.title,

    description: blog.seo_description || blog.excerpt || "",

    image: blog.featured_image ? [blog.featured_image] : [],

    author: {
      "@type": "Person",
      name: blog.author || "Admin",
    },

    publisher: {
      "@type": "Organization",
      name: "Your Company",
    },

    datePublished: blog.published_at,

    dateModified: blog.updated_at,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${blog.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}

      <section className="mx-auto max-w-5xl px-6 pb-10 pt-16">
        {blog.category && (
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            {blog.category}
          </p>
        )}

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          {blog.title}
        </h1>

        {blog.excerpt && (
          <p className="mt-6 text-xl leading-relaxed text-gray-600">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
          {blog.author && <span>By {blog.author}</span>}

          {blog.published_at && (
            <span>
              {new Date(blog.published_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </section>

      {/* FEATURED IMAGE */}

      {blog.featured_image && (
        <div className="mx-auto max-w-6xl px-6">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full rounded-3xl object-cover"
          />
        </div>
      )}

      {/* CONTENT */}

      <article className="mx-auto max-w-4xl px-6 py-14">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </article>

      {/* ARTICLE SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </main>
  );
}
