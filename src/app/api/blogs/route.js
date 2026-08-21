import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Create Supabase server client using the logged-in user's cookies
async function getSupabaseServerClient(request) {
  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  return { supabase, response };
}

// CHECK ADMIN LOGIN
async function requireUser(request) {
  const { supabase } = await getSupabaseServerClient(request);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      supabase,
      user: null,
    };
  }

  return {
    supabase,
    user,
  };
}

// ==============================
// GET BLOGS
// PUBLIC
// ==============================

export async function GET(request) {
  try {
    const { supabase } = await getSupabaseServerClient(request);

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("GET BLOGS ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET BLOGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}

// ==============================
// CREATE BLOG
// ADMIN ONLY
// ==============================

export async function POST(request) {
  try {
    const { supabase, user } = await requireUser(request);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized. Please login as admin.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      content,
      featured_image,
      category,
      author,
      status,
      seo_title,
      seo_description,
      keywords,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          success: false,
          error: "Title, slug and content are required",
        },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert({
        title,
        slug,
        excerpt,
        content,
        featured_image: featured_image || null,
        category,
        author,
        status: status || "draft",
        seo_title,
        seo_description,
        keywords: keywords || [],
        published_at: status === "published" ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (error) {
      console.error("CREATE BLOG ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("POST BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}

// ==============================
// UPDATE BLOG
// ADMIN ONLY
// ==============================

export async function PUT(request) {
  try {
    const { supabase, user } = await requireUser(request);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized. Please login as admin.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const {
      id,
      title,
      slug,
      excerpt,
      content,
      featured_image,
      category,
      author,
      status,
      seo_title,
      seo_description,
      keywords,
    } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Blog ID is required",
        },
        { status: 400 },
      );
    }

    const updateData = {
      title,
      slug,
      excerpt,
      content,
      featured_image: featured_image || null,
      category,
      author,
      status,
      seo_title,
      seo_description,
      keywords: keywords || [],
      updated_at: new Date().toISOString(),
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    const { data, error } = await supabase
      .from("blogs")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("UPDATE BLOG ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("PUT BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}

// ==============================
// DELETE BLOG
// ADMIN ONLY
// ==============================

export async function DELETE(request) {
  try {
    const { supabase, user } = await requireUser(request);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized. Please login as admin.",
        },
        { status: 401 },
      );
    }

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Blog ID is required",
        },
        { status: 400 },
      );
    }

    const { error } = await supabase.from("blogs").delete().eq("id", id);

    if (error) {
      console.error("DELETE BLOG ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
