import FintechPage from "./FintechPage";

export const metadata = {
  title:
    "Fintech Digital Marketing Services in India | Fintech SEO & Lead Generation",

  description:
    "KidiWebTech provides fintech digital marketing services in India including fintech SEO, Google Ads, social media marketing, content marketing and lead generation for financial technology businesses.",

  keywords: [
    "fintech digital marketing services India",
    "fintech marketing agency India",
    "fintech digital marketing agency India",
    "fintech marketing company India",
    "fintech SEO services India",
    "fintech SEO agency India",
    "digital marketing for fintech companies",
    "fintech lead generation India",
    "fintech Google Ads",
    "fintech social media marketing",
    "fintech content marketing",
    "financial technology marketing agency",
    "finance digital marketing India",
    "financial services marketing agency India",
    "KidiWebTech",
  ],

  alternates: {
    canonical:
      "https://www.kidiwebtech.com/fintech-digital-marketing-services-india",
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

    url: "https://www.kidiwebtech.com/fintech-digital-marketing-services-india",

    siteName: "KidiWebTech",

    title: "Fintech Digital Marketing Services in India | KidiWebTech",

    description:
      "Grow your fintech business with SEO, paid advertising, content marketing, social media marketing and lead generation services from KidiWebTech.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fintech Digital Marketing Services in India - KidiWebTech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Fintech Digital Marketing Services in India | KidiWebTech",

    description:
      "Fintech SEO, Google Ads, social media marketing, content marketing and lead generation services in India.",

    images: ["https://www.kidiwebtech.com/og-image.jpg"],
  },
};

export default function Page() {
  return <FintechPage />;
}
