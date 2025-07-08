"use client";
import { motion } from "framer-motion";

// 🏷️ Company names by category
const companies = [
  "Suvira Facilities Pvt Ltd", // Security
  "manaenadu", // News
  "Digo IT Solutions", // IT
  "Mallela Telugu Tejam", // News
  "Rozogar", // Job/Startup
  "Bharat sanchar", // Telecom
  "feble Decor", // Interior
  "coworking space", // Workspace
  "3 estate", // Real Estate
  "vet and meet", // Petshop
  "arya nuero care hospital", // Hospital
  "fortunate Properties", // Real Estate
];

// 🎨 Assign color based on category keyword
const getColorByCategory = (name) => {
  name = name.toLowerCase();
  if (name.includes("hospital") || name.includes("care"))
    return "bg-red-500/20"; // 🏥 Hospitals
  if (name.includes("estate") || name.includes("properties"))
    return "bg-yellow-500/20"; // 🏘 Real Estate
  if (name.includes("pet") || name.includes("vet")) return "bg-green-500/20"; // 🐾 Petshops
  if (name.includes("mana") || name.includes("tej")) return "bg-indigo-500/20"; // 📰 News
  if (name.includes("it") || name.includes("tech")) return "bg-blue-500/20"; // 💻 IT
  if (name.includes("cowork")) return "bg-purple-500/20"; // 🧑‍💻 Coworking
  return "bg-white/10"; // Default
};

export default function AnimatedCompanies() {
  const repeatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="w-full overflow-hidden py-10 bg-gradient-to-r from-teal-500 via-blue-600 to-cyan-500">
      <div className="relative w-full">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 70,
            ease: "linear",
          }}
        >
          {repeatedCompanies.map((company, index) => (
            <div
              key={index}
              className={`min-w-max text-white text-base sm:text-lg font-semibold ${getColorByCategory(
                company
              )} px-6 py-3 rounded-xl shadow hover:bg-white/30 transition-all whitespace-nowrap`}
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
