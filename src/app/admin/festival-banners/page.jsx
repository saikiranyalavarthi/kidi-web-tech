"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

export default function FestivalBanners() {
  const [banners, setBanners] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const getBanners = async () => {
    const { data, error } = await supabase
      .from("festival_banners")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setBanners(data || []);
  };

  useEffect(() => {
    getBanners();
  }, []);

  // Resize image to exactly 1900 x 500
  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      const image = new window.Image();

      image.onload = () => {
        const canvas = document.createElement("canvas");

        canvas.width = 1900;
        canvas.height = 500;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          reject(new Error("Canvas is not supported"));
          return;
        }

        // Fill complete banner
        ctx.drawImage(image, 0, 0, 1900, 500);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Unable to resize image"));
              return;
            }

            const resizedFile = new File([blob], "festival-banner.webp", {
              type: "image/webp",
            });

            resolve(resizedFile);
          },
          "image/webp",
          0.92,
        );
      };

      image.onerror = () => {
        reject(new Error("Invalid image"));
      };

      image.src = URL.createObjectURL(file);
    });
  };

  const uploadBanner = async () => {
    if (!title || !file || !startDate || !endDate) {
      alert("Please fill all fields");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("End date must be after start date");
      return;
    }

    setLoading(true);

    try {
      // Automatically convert ANY uploaded image
      // into exactly 1900 x 500
      const resizedFile = await resizeImage(file);

      const cleanTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const fileName = `${cleanTitle}-${Date.now()}.webp`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("festival-banners")
        .upload(fileName, resizedFile, {
          cacheControl: "3600",
          contentType: "image/webp",
          upsert: false,
        });

      if (uploadError) {
        console.error(uploadError);
        alert(uploadError.message);
        setLoading(false);
        return;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("festival-banners")
        .getPublicUrl(fileName);

      const imageUrl = urlData.publicUrl;

      // Save URL to database
      const { error: dbError } = await supabase
        .from("festival_banners")
        .insert({
          title: title,
          image_url: imageUrl,
          start_date: startDate,
          end_date: endDate,
          is_active: true,
        });

      if (dbError) {
        console.error(dbError);
        alert(dbError.message);
        setLoading(false);
        return;
      }

      alert("Festival banner uploaded successfully!");

      setTitle("");
      setFile(null);
      setStartDate("");
      setEndDate("");

      const input = document.getElementById("festival-file");

      if (input) {
        input.value = "";
      }

      await getBanners();

      setLoading(false);
    } catch (error) {
      console.error(error);
      alert(error.message || "Upload failed");
      setLoading(false);
    }
  };

  const toggleBanner = async (id, status) => {
    const { error } = await supabase
      .from("festival_banners")
      .update({
        is_active: !status,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    getBanners();
  };

  const deleteBanner = async (id) => {
    if (!confirm("Delete this festival banner?")) {
      return;
    }

    const { error } = await supabase
      .from("festival_banners")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    getBanners();
  };

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-[#102A56]">
            Festival Banners
          </h1>

          <p className="mt-2 text-gray-600">
            Upload festival banners for your website.
          </p>
        </div>

        {/* UPLOAD CARD */}
        <div className="mt-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold text-gray-900">
            Add Festival Banner
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* TITLE */}
            <input
              type="text"
              placeholder="Festival Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
            />

            {/* IMAGE */}
            <input
              id="festival-file"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="rounded-xl border border-gray-300 p-4"
            />

            {/* START DATE */}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="rounded-xl border border-gray-300 p-4"
            />

            {/* END DATE */}
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="rounded-xl border border-gray-300 p-4"
            />
          </div>

          <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
            <strong>Banner format:</strong> Any image is accepted.
            <br />
            The system automatically converts it to{" "}
            <strong>1900 × 500 px</strong> WebP.
          </div>

          <button
            onClick={uploadBanner}
            disabled={loading}
            className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Festival Banner"}
          </button>
        </div>

        {/* UPLOADED BANNERS */}
        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Uploaded Banners
          </h2>

          <div className="space-y-6">
            {banners.length === 0 && (
              <div className="rounded-xl bg-white p-8 text-center text-gray-500">
                No festival banners uploaded yet.
              </div>
            )}

            {banners.map((banner) => (
              <div
                key={banner.id}
                className="overflow-hidden rounded-2xl bg-white shadow"
              >
                {/* 1900 × 500 preview ratio */}
                <div className="relative aspect-[19/5] w-full bg-gray-100">
                  <Image
                    src={banner.image_url}
                    alt={banner.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {banner.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {banner.start_date} → {banner.end_date}
                    </p>

                    <p
                      className={
                        banner.is_active
                          ? "mt-2 font-semibold text-green-600"
                          : "mt-2 font-semibold text-gray-400"
                      }
                    >
                      {banner.is_active ? "● Active" : "● Disabled"}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleBanner(banner.id, banner.is_active)}
                      className="rounded-lg border border-gray-300 px-5 py-2 font-semibold hover:bg-gray-100"
                    >
                      {banner.is_active ? "Disable" : "Activate"}
                    </button>

                    <button
                      onClick={() => deleteBanner(banner.id)}
                      className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
