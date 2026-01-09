"use client";

import { motion } from "framer-motion";

export default function AnimatedKidiwebtech() {
  const repeatedText = Array(20).fill("KIDIWEBTECH");

  return (
    <section className="w-full overflow-hidden py-14 bg-black border-t border-white/10 border-b border-white/10">
      <div className="relative w-full">

        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {repeatedText.map((text, index) => (
            <div
              key={index}
              className="
                text-[56px] sm:text-[80px] md:text-[96px]
                font-extrabold
                gradient-text
                whitespace-nowrap
                tracking-wider
                select-none
              "
            >
              {text}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
