"use client";
import { TrendingUp, BarChart4, Hourglass, ShoppingBag } from "lucide-react";

export default function Goals() {
  const goals = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-white" />,
      title: "Make your website sell better",
      color: "bg-rose-300",
    },
    {
      icon: <Hourglass className="w-8 h-8 text-white" />,
      title: "Create and improve your marketing potential",
      color: "bg-teal-400",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Help your business grow with quality leads or sales",
      color: "bg-purple-500",
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-white" />,
      title: "Show you the promised results with improved ROI growth",
      color: "bg-sky-500",
    },
  ];

  return (
    <section className="bg-pink-50 py-20 px-6 md:px-20 text-center relative">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR GOALS</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        The outcomes you attain are intertwined with your aspirations!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        {goals.map((goal, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${goal.color} mb-4 shadow-lg`}
            >
              {goal.icon}
            </div>
            <p className="text-sm text-gray-700 max-w-[12rem]">{goal.title}</p>
          </div>
        ))}
      </div>

      {/* Dotted path arrow effect (optional design enhancement) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* You could optionally draw a dotted curved path with SVG here */}
      </div>
    </section>
  );
}
