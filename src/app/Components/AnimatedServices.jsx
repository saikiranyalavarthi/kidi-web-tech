"use client";
import { motion } from "framer-motion";

const services = [
  "Content Marketing",
  "Branding & Design",
  "Email Marketing",
  "Performance Tracking",
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click Advertising",
  "Social Media Management",
  "Web Development",
  "Mobile App Development",
  "E-commerce Solutions",
  "UI/UX Design",
  "Cloud Solutions",
  "Custom Software Development",
];

export default function AnimatedServices() {
  const repeatedServices = [...services, ...services, ...services]; // repeat more for smoother loop

  return (
    <section className="w-full overflow-hidden py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="relative w-full">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {repeatedServices.map((service, index) => (
            <div
              key={index}
              className="min-w-max text-white text-lg sm:text-xl font-semibold bg-white/10 px-6 py-3 rounded-xl shadow hover:bg-white/20 transition-all whitespace-nowrap"
            >
              {service}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
