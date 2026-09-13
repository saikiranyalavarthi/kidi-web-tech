"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/kidiwebtech-vinayaka-chavithi.png"
          alt="KIDIWEBTECH Happy Vinayaka Chavithi"
          width={2500}
          height={750}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
