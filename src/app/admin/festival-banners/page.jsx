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

  const uploadBanner = async () => {
    if (!title || !file || !startDate || !endDate) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // Check image size
      const image = new window.Image();

      image.onload = async () => {
        if (image.width !== 1920 || image.height !== 560) {
          alert(
            `Wrong image size!\nRequired: 1920 × 560 px\nYour image: ${image.width} × ${image.height} px`,
          );
          setLoading(false);
          return;
        }

        const extension = file.name.split(".").pop()?.toLowerCase() || "webp";

        const fileName = `${title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}-${Date.now()}.${extension}`;

        // Upload image
        const { error: uploadError } = await supabase.storage
          .from("festival-banners")
          .upload(fileName, file);

        if (uploadError) {
          console.error(uploadError);
          alert(uploadError.message);
          setLoading(false);
          return;
        }

        // Get image URL
        const { data: urlData } = supabase.storage
          .from("festival-banners")
          .getPublicUrl(fileName);

        const imageUrl = urlData.publicUrl;

        // Save URL to existing table
        const { error: dbError } = await supabase
          .from("festival_banners")
          .insert({
            title,
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

        document.getElementById("festival-file").value = "";

        getBanners();
        setLoading(false);
      };

      image.src = URL.createObjectURL(file);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
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
    if (!confirm("Delete this festival banner?")) return;

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
        <h1 className="text-4xl font-bold text-[#102A56]">Festival Banners</h1>

        <p className="mt-2 text-gray-600">
          Upload festival banners for your website.
        </p>

        {/* UPLOAD */}
        <div className="mt-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold">Add Festival Banner</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <input
              type="text"
              placeholder="Festival Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-xl border p-4"
            />

            <input
              id="festival-file"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => setFile(e.target.files?.[0])}
              className="rounded-xl border p-4"
            />

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="rounded-xl border p-4"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="rounded-xl border p-4"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Banner size must be exactly <b>1920 × 560 px</b>
          </p>

          <button
            onClick={uploadBanner}
            disabled={loading}
            className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 font-bold text-white disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Festival Banner"}
          </button>
        </div>

        {/* EXISTING BANNERS */}
        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold">Uploaded Banners</h2>

          <div className="space-y-6">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="overflow-hidden rounded-2xl bg-white shadow"
              >
                <div className="relative aspect-[24/7]">
                  <Image
                    src={banner.image_url}
                    alt={banner.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="text-xl font-bold">{banner.title}</h3>

                    <p className="text-sm text-gray-500">
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

                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleBanner(banner.id, banner.is_active)}
                      className="rounded-lg border px-5 py-2"
                    >
                      {banner.is_active ? "Disable" : "Activate"}
                    </button>

                    <button
                      onClick={() => deleteBanner(banner.id)}
                      className="rounded-lg bg-red-500 px-5 py-2 text-white"
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
