"use client";
import { motion } from "framer-motion";
import {
  Rocket,
  PieChart,
  Megaphone,
  MapPin,
  Lightbulb,
  Target,
  BarChart2,
  Users,
  Filter,
  Search,
  Link as LinkIcon,
  Monitor,
  Mail,
  PenTool,
  Settings,
} from "lucide-react";

const iconsMap = {
  "SEO Ranking": Rocket,
  PPC: PieChart,
  "Social Media": Megaphone,
  "Local SEO": MapPin,
  "Smart Ads": Lightbulb,
  Retargeting: Target,
  "Technical SEO": BarChart2,
  "Lead generation": Users,
  Funneling: Filter,
  "Search Marketing": Search,
  "Link Building": LinkIcon,
  Branding: Monitor,
  "Email Marketing": Mail,
  "Graphic Designing": PenTool,
  "Marketing & sales automation": Settings,
};

const bgGradients = [
  "from-purple-100 to-purple-200",
  "from-pink-100 to-pink-200",
  "from-indigo-100 to-indigo-200",
  "from-yellow-100 to-yellow-200",
  "from-green-100 to-green-200",
  "from-red-100 to-red-200",
  "from-blue-100 to-blue-200",
  "from-rose-100 to-rose-200",
  "from-teal-100 to-teal-200",
  "from-fuchsia-100 to-fuchsia-200",
  "from-lime-100 to-lime-200",
  "from-cyan-100 to-cyan-200",
  "from-violet-100 to-violet-200",
  "from-orange-100 to-orange-200",
  "from-sky-100 to-sky-200",
];

export default function ServiceCard({ title, index }) {
  const Icon = iconsMap[title];
  if (!Icon) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`rounded-xl w-28 h-28 flex flex-col items-center justify-center bg-gradient-to-br ${
        bgGradients[index % bgGradients.length]
      } shadow-lg p-3 text-black`}
    >
      <Icon size={30} className="mb-2" />
      <p className="text-center text-sm font-semibold">{title}</p>
    </motion.div>
  );
}
