"use client";
import ServiceCard from "./ServiceCard";

const services = [
  "SEO Ranking",
  "PPC",
  "Social Media",
  "Local SEO",
  "Smart Ads",
  "Retargeting",
  "Technical SEO",
  "Lead generation",
  "Funneling",
  "Search Marketing",
  "Link Building",
  "Branding",
  "Email Marketing",
  "Graphic Designing",
  "Marketing & sales automation",
];

export default function ServicesSection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Digital Marketing Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {services.map((title, index) => (
          <ServiceCard key={index} title={title} index={index} />
        ))}
      </div>
    </section>
  );
}
