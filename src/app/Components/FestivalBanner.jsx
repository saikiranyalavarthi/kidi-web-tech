"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function FestivalBanner() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const loadBanner = async () => {
      const today = new Date().toISOString().split("T")[0];

      const { data, error } = await supabase
        .from("festival_banners")
        .select("*")
        .eq("is_active", true)
        .lte("start_date", today)
        .gte("end_date", today)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Festival banner error:", error);
        return;
      }

      console.log("Festival banner loaded:", data);

      setBanner(data);
    };

    loadBanner();
  }, []);

  if (!banner) return null;

  return (
    <section className="w-full overflow-hidden bg-white">
      <img
        src={banner.image_url}
        alt={banner.title}
        className="block h-auto w-full"
      />
    </section>
  );
}