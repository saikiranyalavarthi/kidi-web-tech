import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

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

async function requireUser(request) {
  const { supabase } = await getSupabaseServerClient(request);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log("CASE STUDY AUTH USER:", user?.email);
  console.log("CASE STUDY AUTH ERROR:", error);

  return {
    supabase,
    user: error || !user ? null : user,
  };
}

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
      client_name,
      industry,
      challenge,
      solution,
      results,
      technologies,
      featured_image,
      content,
      seo_title,
      seo_description,
      published,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        {
          success: false,
          error: "Title and slug are required",
        },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("case_studies")
      .insert({
        title,
        slug,
        excerpt: excerpt || null,
        client_name: client_name || null,
        industry: industry || null,
        challenge: challenge || null,
        solution: solution || null,
        results: results || null,
        technologies: technologies || null,
        featured_image: featured_image || null,
        content: content || null,
        seo_title: seo_title || null,
        seo_description: seo_description || null,
        published: published === true,
      })
      .select()
      .single();

    if (error) {
      console.error("CASE STUDY INSERT ERROR:", error);

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
    console.error("CASE STUDY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Something went wrong",
      },
      { status: 500 },
    );
  }
}
