"use client";

import { useRef, useState } from "react";

export default function Herotrain() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    // "/videos/kidiwebtech-video2.mp4",
    "/videos/kidiwebtech-video.mp4",
    "/videos/kidiwebtech-express1.mp4",
    "/videos/kidiwebtech-express.mp4",
  ];

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative h-[40vh] md:h-screen w-full overflow-hidden bg-black mt-16">
      <video
        key={currentVideo}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute bottom-0 left-0 h-24 md:h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
