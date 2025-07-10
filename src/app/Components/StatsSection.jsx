"use client";

import { useEffect, useState } from "react";
import { Users, Briefcase, FolderCheck, Star } from "lucide-react";

const stats = [
  {
    title: "Years Experience",
    value: 5,
    icon: Briefcase,
    color: "from-purple-400 to-indigo-500",
  },
  {
    title: "Clients",
    value: 100,
    icon: Users,
    color: "from-pink-400 to-purple-500",
  },
  {
    title: "Projects Executed",
    value: 100,
    icon: FolderCheck,
    color: "from-green-400 to-blue-500",
  },
  {
    title: "Client Satisfaction",
    value: 100,
    icon: Star,
    suffix: "%",
    color: "from-yellow-400 to-red-400",
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          if (count < stats[i].value) {
            return count + 1;
          }
          return count;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Proven Digital Impact
        </h2>
        <p className="text-gray-900 max-w-2xl mx-auto text-base md:text-lg">
          With a wealth of experience and a portfolio of satisfied clients,
          KIDIWEBTECH consistently delivers top-tier digital solutions backed by
          measurable success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 text-center shadow-xl bg-gradient-to-tr ${stat.color} transition-transform transform hover:scale-105`}
          >
            <div className="flex justify-center mb-4">
              <stat.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white">
              {counts[i]}
              {stat.suffix || "+"}
            </h3>
            <p className="text-white mt-2 text-sm font-medium">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
