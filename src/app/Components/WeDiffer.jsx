"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, BarChart2, Smile } from "lucide-react";

const features = [
  {
    title: "Innovative Strategies",
    description:
      "We break boundaries with innovative marketing strategies tailored to your brand’s voice and goals. We don’t follow trends.",
    icon: Lightbulb,
  },
  {
    title: "Expert Team",
    description:
      "A passionate team of SEO experts, designers, and growth marketers working together to make your brand digitally unforgettable.",
    icon: Users,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Every campaign is powered by real data — from audience behavior to conversions — allowing us to optimize and scale faster.",
    icon: BarChart2,
  },
  {
    title: "Customer-Centric",
    description:
      "Your success drives everything we do. We design campaigns around your business goals to turn attention into action and loyalty.",
    icon: Smile,
  },
];

export default function WeDiffer() {
  return (
    <section className="bg-black py-28 px-6 md:px-20">

      {/* HEADER */}
      <div className="text-center max-w-5xl mx-auto mb-20">
        <p className="uppercase text-sm font-semibold tracking-widest gradient-text mb-3">
          Why We Differ
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
          What Makes Us the{" "}
          <span className="gradient-text">
            Best Digital Marketing Company in Hyderabad
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          In today’s digital jungle, it’s not enough to be heard — you need to be
          remembered. At{" "}
          <span className="gradient-text font-semibold">KIDIWEBTECH</span>, we
          build digital strategies that rise above the noise and convert
          attention into measurable growth.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* GRADIENT BORDER */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-r from-yellow-400 to-orange-500
              opacity-70
              group-hover:opacity-100
              transition
            " />

            {/* CARD */}
            <div className="
              relative bg-black rounded-2xl
              m-[1.5px]
              p-6
              text-center
              transition-transform duration-300
              group-hover:-translate-y-2
              group-hover:shadow-[0_20px_40px_rgba(255,165,0,0.25)]
            ">
              {/* ICON */}
              <div className="
                w-16 h-16 mx-auto mb-4
                flex items-center justify-center
                rounded-full
                border border-yellow-400/40
              ">
                <feature.icon className="w-8 h-8 text-yellow-400" />
              </div>

              <h3 className="text-lg font-semibold mb-3 gradient-text">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
