"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        .order("created_at", {
          ascending: false,
        })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error(error);
        return;
      }

      setBanner(data);
    };

    loadBanner();
  }, []);

  if (!banner) return null;

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="relative aspect-[24/7] w-full">
        <Image
          src={banner.image_url}
          alt={banner.title}
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}
