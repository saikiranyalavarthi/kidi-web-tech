export default function ServicesTestimonials() {
  return (
    <section className="bg-black py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h3 className="text-3xl font-bold text-yellow-400 text-center mb-12">
          What Our Clients Say
        </h3>

        {/* Auto Scroll Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {/* Testimonial 1 */}
            <div className="min-w-[320px] bg-gray-900 border border-yellow-400 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                “Our website speed and Google ranking improved significantly
                after switching to their Next.js development services.”
              </p>
              <h4 className="text-yellow-400 font-semibold">
                — Rahul, Startup Founder
              </h4>
            </div>

            {/* Testimonial 2 */}
            <div className="min-w-[320px] bg-gray-900 border border-yellow-400 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                “Excellent digital marketing support. SEO and Google Ads brought
                us consistent leads within weeks.”
              </p>
              <h4 className="text-yellow-400 font-semibold">
                — Priya, Business Owner
              </h4>
            </div>

            {/* Testimonial 3 */}
            <div className="min-w-[320px] bg-gray-900 border border-yellow-400 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                “They delivered a clean, fast, and modern website using Tailwind
                CSS. Very professional team.”
              </p>
              <h4 className="text-yellow-400 font-semibold">
                — Arjun, Agency Partner
              </h4>
            </div>

            {/* Testimonial 4 */}
            <div className="min-w-[320px] bg-gray-900 border border-yellow-400 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                “Their social media strategy increased our engagement and brand
                visibility within a month.”
              </p>
              <h4 className="text-yellow-400 font-semibold">
                — Neha, Marketing Manager
              </h4>
            </div>

            {/* Testimonial 5 */}
            <div className="min-w-[320px] bg-gray-900 border border-yellow-400 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                “Highly recommend for SEO-optimized websites and
                performance-focused development.”
              </p>
              <h4 className="text-yellow-400 font-semibold">
                — Karthik, Tech Consultant
              </h4>
            </div>

            {/* Duplicate for smooth infinite scroll */}
            <div className="min-w-[320px] bg-gray-900 border border-yellow-400 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                “Our website speed and Google ranking improved significantly
                after switching to their Next.js development services.”
              </p>
              <h4 className="text-yellow-400 font-semibold">
                — Rahul, Startup Founder
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
