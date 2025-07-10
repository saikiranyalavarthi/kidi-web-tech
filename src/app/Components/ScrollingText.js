"use client";
import { motion } from "framer-motion";

export default function AnimatedKidiwebtech() {
  const repeatedText = Array(20).fill("KIDIWEBTECH");

  return (
    <section className="w-full overflow-hidden py-10 bg-white">
      <div className="relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {repeatedText.map((text, index) => (
            <div
              key={index}
              className="text-[60px] sm:text-[80px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-500 whitespace-nowrap px-4"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
