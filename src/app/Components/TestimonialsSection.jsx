"use client";

import "./TestimonialsSection.css";

const testimonials = [
  {
    text: "KidiWebTech helped us create a modern website that presents our business professionally. The design and responsive experience were excellent.",
    name: "Business Owner",
    handle: "Website Development",
    initials: "BO",
    color: "#2563EB",
  },
  {
    text: "The team understood our requirements and delivered a clean, user-friendly digital experience. Communication throughout the project was helpful.",
    name: "Startup Founder",
    handle: "Web Development",
    initials: "SF",
    color: "#9333EA",
  },
  {
    text: "We wanted a professional online presence for our company. The website design and mobile experience were exactly what we needed.",
    name: "Company Director",
    handle: "Website Design",
    initials: "CD",
    color: "#0891B2",
  },
  {
    text: "The digital marketing strategy gave us a clearer direction for our online presence. The team was supportive and professional.",
    name: "Marketing Manager",
    handle: "Digital Marketing",
    initials: "MM",
    color: "#DB2777",
  },
  {
    text: "Our e-commerce website needed a better user experience. The new layout made browsing products and navigating the site much easier.",
    name: "E-commerce Owner",
    handle: "E-commerce Development",
    initials: "EO",
    color: "#16A34A",
  },
  {
    text: "We appreciated the attention to detail, modern design approach and focus on creating a website that works across devices.",
    name: "Project Manager",
    handle: "UI/UX Design",
    initials: "PM",
    color: "#D97706",
  },
  {
    text: "The development process was organised and our business requirements were understood clearly. A useful digital solution for our team.",
    name: "Business Founder",
    handle: "Custom Development",
    initials: "BF",
    color: "#4F46E5",
  },
  {
    text: "We were looking for a better online presence and a professional website. The overall design direction was clean and modern.",
    name: "Brand Manager",
    handle: "Web Design",
    initials: "BM",
    color: "#E11D48",
  },
  {
    text: "The team helped us explore automation opportunities and understand how technology could improve our business workflows.",
    name: "Technology Lead",
    handle: "AI & Automation",
    initials: "TL",
    color: "#0D9488",
  },
];

const columns = [
  [testimonials[0], testimonials[1], testimonials[2]],
  [testimonials[3], testimonials[4], testimonials[5]],
  [testimonials[6], testimonials[7], testimonials[8]],
];

function ReviewCard({ review }) {
  return (
    <article className="ln-test-card">
      <div className="ln-test-card-inner">
        <p className="ln-test-text">{review.text}</p>

        <div className="ln-test-card-head">
          <div className="ln-test-card-head-left">
            <span
              className="ln-test-avatar"
              style={{ backgroundColor: review.color }}
              aria-hidden="true"
            >
              {review.initials}
            </span>

            <div className="ln-test-user">
              <span className="ln-test-name">{review.name}</span>
              <span className="ln-test-handle">{review.handle}</span>
            </div>
          </div>

          <span className="ln-test-brand">K</span>
        </div>
      </div>
    </article>
  );
}

function ReviewColumn({ reviews, direction = "up", duration = 35 }) {
  const repeatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="ln-test-col">
      <div
        className={`ln-test-col-scroll ${
          direction === "down"
            ? "ln-test-col-scroll--down"
            : "ln-test-col-scroll--up"
        }`}
        style={{ "--scroll-duration": `${duration}s` }}
      >
        {[0, 1, 2].map((set) => (
          <div className="ln-test-col-set" key={set}>
            {repeatedReviews.map((review, index) => (
              <ReviewCard
                key={`${set}-${review.initials}-${index}`}
                review={review}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="ln-test-section">
      <div className="ln-test-inner">
        <div className="ln-test-heading">
          <span className="ln-test-eyebrow">CLIENT EXPERIENCES</span>

          <h2 className="ln-test-title">Loved by businesses</h2>

          <p className="ln-test-description">
            Building meaningful digital experiences through design, development
            and technology.
          </p>
        </div>

        <div className="ln-test-grid">
          <ReviewColumn reviews={columns[0]} direction="up" duration={35} />

          <ReviewColumn reviews={columns[1]} direction="down" duration={42} />

          <ReviewColumn reviews={columns[2]} direction="up" duration={38} />
        </div>

        <div className="ln-test-footer">
          <span>WEB DEVELOPMENT</span>
          <span>✦</span>
          <span>UI/UX DESIGN</span>
          <span>✦</span>
          <span>DIGITAL MARKETING</span>
          <span>✦</span>
          <span>AI AUTOMATION</span>
        </div>
      </div>
    </section>
  );
}
