"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function FestivalBanner() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const loadBanner = async () => {
      // Use LOCAL date, not UTC date
      const now = new Date();

      const today =
        `${now.getFullYear()}-` +
        `${String(now.getMonth() + 1).padStart(2, "0")}-` +
        `${String(now.getDate()).padStart(2, "0")}`;

      console.log("Festival local date:", today);

      const { data, error } = await supabase
        .from("festival_banners")
        .select("*")
        .eq("is_active", true)
        .lte("start_date", today)
        .gte("end_date", today)
        .order("created_at", { ascending: false })
        .limit(1);

      console.log("Festival banner data:", data);
      console.log("Festival banner error:", error);

      if (error) {
        console.error("Festival banner error:", error);
        return;
      }

      if (data && data.length > 0) {
        setBanner(data[0]);
      }
    };

    loadBanner();
  }, []);

  if (!banner) return null;

  return (
    <section className="w-full overflow-hidden bg-white">
      <img
        src={banner.image_url}
        alt={banner.title || "Festival Banner"}
        className="block w-full h-auto"
      />
    </section>
  );
}
