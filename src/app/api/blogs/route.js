import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}
const supabase = createClient(supabaseUrl, supabaseKey);

// GET BLOGS
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
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

// CREATE BLOG
export async function POST(request) {
  try {
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
        featured_image,
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

// UPDATE BLOG
export async function PUT(request) {
  try {
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
      featured_image,
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

// DELETE BLOG
export async function DELETE(request) {
  try {
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
