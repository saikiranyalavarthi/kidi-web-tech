import EducationMarketingPage from "./EducationMarketingPage";

export const metadata = {
  title:
    "Education Marketing Services in India | Education Digital Marketing Agency",

  description:
    "KidiWebTech provides education marketing services in India for schools, colleges, universities, coaching institutes and edtech companies, including SEO, Google Ads, social media marketing and student lead generation.",

  keywords: [
    "education marketing services India",
    "education marketing agency India",
    "education digital marketing agency India",
    "education marketing company India",
    "education SEO services India",
    "SEO for education industry",
    "Google Ads for education",
    "student lead generation India",
    "school marketing agency India",
    "college marketing agency India",
    "edtech marketing agency India",
    "education social media marketing",
    "education content marketing India",
    "student admission marketing",
    "KidiWebTech",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/education-marketing-services-india",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: "https://www.kidiwebtech.com/education-marketing-services-india",

    siteName: "KidiWebTech",

    title: "Education Marketing Services in India | KidiWebTech",

    description:
      "Education SEO, Google Ads, social media marketing and student lead generation services for schools, colleges, coaching institutes and edtech companies.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Education Marketing Services in India - KidiWebTech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Education Marketing Services in India | KidiWebTech",

    description:
      "Grow your education business with SEO, Google Ads, social media marketing and student lead generation.",

    images: ["https://www.kidiwebtech.com/og-image.jpg"],
  },
};

export default function Page() {
  return <EducationMarketingPage />;
}
