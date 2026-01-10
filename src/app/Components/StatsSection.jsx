"use client";

import { useEffect, useState } from "react";
import { Users, Briefcase, FolderCheck, Star } from "lucide-react";

const stats = [
  {
    title: "Years Experience",
    value: 5,
    icon: Briefcase,
  },
  {
    title: "Clients",
    value: 100,
    icon: Users,
  },
  {
    title: "Projects Executed",
    value: 100,
    icon: FolderCheck,
  },
  {
    title: "Client Satisfaction",
    value: 100,
    suffix: "%",
    icon: Star,
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < stats[i].value ? count + 1 : count
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-8 px-6 md:px-20">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
          Our <span className="gradient-text">Proven Digital Impact</span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          With years of experience and a growing list of satisfied clients,
          <span className="gradient-text font-semibold"> KIDIWEBTECH </span>
          consistently delivers measurable digital success.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="relative group">

            {/* GRADIENT BORDER */}
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-yellow-400 to-orange-500
                opacity-70
                group-hover:opacity-100
                transition
              "
            />

            {/* CARD */}
            <div
              className="
                relative bg-black rounded-2xl
                m-[1.5px]
                p-8
                text-center
                transition-transform duration-300
                group-hover:-translate-y-2
                group-hover:shadow-[0_20px_40px_rgba(255,165,0,0.25)]
              "
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <stat.icon className="w-10 h-10 text-yellow-400" />
              </div>

              {/* VALUE */}
              <h3 className="text-4xl font-extrabold gradient-text">
                {counts[i]}
                {stat.suffix || "+"}
              </h3>

              {/* LABEL */}
              <p className="text-gray-400 mt-3 text-sm font-medium">
                {stat.title}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
