"use client";

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Strategy",
      desc: "We understand your business goals, audience, and competitors.",
      icon: "🚀",
    },
    {
      number: "02",
      title: "Design",
      desc: "Modern UI/UX designs focused on engagement and conversions.",
      icon: "🎨",
    },
    {
      number: "03",
      title: "Development",
      desc: "Fast, responsive websites and apps built with modern technologies.",
      icon: "💻",
    },
    {
      number: "04",
      title: "Marketing",
      desc: "SEO, Google Ads, and digital campaigns that drive real results.",
      icon: "📈",
    },
    {
      number: "05",
      title: "Growth",
      desc: "Continuous optimization to improve leads, sales, and business growth.",
      icon: "⚡",
    },
  ];

  const features = [
    "SEO Services",
    "Web Development",
    "App Development",
    "Google Ads",
    "Branding",
    "Lead Generation",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-6 md:py-8">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/40 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[120px]" />

        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-100/40 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="mx-auto max-w-4xl text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-sm sm:px-5">
            ⚡ Our Working Process
          </div>

          {/* HEADING */}
          <h2 className="mx-auto mt-5 text-[30px] font-black leading-[1.15] tracking-tight text-[#0F172A] sm:mt-8 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
            Simple Process. Powerful Results.
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 md:text-xl">
            We combine strategy, design, development, SEO, and digital marketing
            to help businesses generate more traffic, leads, and long-term
            online growth.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-5 lg:gap-8">
          {processSteps.map((item) => (
            <div
              key={item.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(37,99,235,0.10)] sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-8"
            >
              {/* NUMBER */}
              <div className="absolute right-5 top-5 text-4xl font-black text-blue-50 sm:right-6 sm:top-6 sm:text-5xl">
                {item.number}
              </div>

              {/* ICON */}
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-2xl shadow-lg sm:h-16 sm:w-16 sm:rounded-3xl sm:text-3xl">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-xl font-black leading-snug text-[#0F172A] sm:mt-7 sm:text-2xl">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 flex-grow text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                {item.desc}
              </p>

              {/* HOVER LINE */}
              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="relative mt-12 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] p-6 text-white shadow-[0_30px_80px_rgba(37,99,235,0.18)] sm:mt-16 sm:rounded-[32px] sm:p-9 md:p-12 lg:mt-24 lg:rounded-[40px] lg:p-14">
          {/* GLOW */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[100px] sm:h-[320px] sm:w-[320px] sm:blur-[120px]" />

          <div className="relative z-10 grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-white/80 sm:text-sm sm:tracking-[4px]">
                BUSINESS GROWTH PROCESS
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
                Helping Businesses Scale Faster Online
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                From SEO and websites to Google Ads and branding, we create
                growth-focused digital solutions tailored for your business.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[62px] items-center justify-center rounded-xl border border-white/10 bg-white/10 px-2 py-3 text-center text-xs font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:min-h-[75px] sm:rounded-2xl sm:px-4 sm:text-sm md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
