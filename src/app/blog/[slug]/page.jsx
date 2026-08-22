import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabase";

export async function POST(request) {
  try {
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
          error: "Title and slug are required",
        },
        {
          status: 400,
        },
      );
    }

    const { data, error } = await supabase
      .from("case_studies")
      .insert([
        {
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
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase Case Study Error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Case Study API Error:", error);

    return NextResponse.json(
      {
        error: error.message || "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
