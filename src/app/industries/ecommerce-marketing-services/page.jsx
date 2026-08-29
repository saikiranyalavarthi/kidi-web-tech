import EcommercePage from "./EcommercePage";

export const metadata = {
  title:
    "Ecommerce Marketing Services in India | Ecommerce SEO & Digital Marketing",

  description:
    "KidiWebTech provides ecommerce marketing services in India including ecommerce SEO, Google Ads, Google Shopping, Meta Ads, conversion optimization, content marketing and customer retention strategies.",

  keywords: [
    "ecommerce marketing services India",
    "ecommerce marketing agency India",
    "ecommerce digital marketing agency India",
    "ecommerce SEO services India",
    "ecommerce SEO agency India",
    "Google Ads for ecommerce India",
    "Google Shopping Ads India",
    "Meta Ads for ecommerce India",
    "ecommerce social media marketing India",
    "ecommerce conversion rate optimization",
    "Shopify marketing India",
    "WooCommerce marketing India",
    "online store marketing India",
    "D2C marketing agency India",
    "ecommerce content marketing India",
    "WhatsApp marketing ecommerce India",
    "Amazon marketing services India",
    "Flipkart marketing services India",
    "KidiWebTech",
  ],

  alternates: {
    canonical: "https://www.kidiwebtech.com/ecommerce-marketing-services-india",
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

    url: "https://www.kidiwebtech.com/ecommerce-marketing-services-india",

    siteName: "KidiWebTech",

    title: "Ecommerce Marketing Services in India | KidiWebTech",

    description:
      "Grow your ecommerce business with ecommerce SEO, Google Ads, Shopping Ads, Meta Ads, conversion optimization and digital marketing services.",

    images: [
      {
        url: "https://www.kidiwebtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Marketing Services in India - KidiWebTech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ecommerce Marketing Services in India | KidiWebTech",

    description:
      "Ecommerce SEO, Google Ads, Google Shopping, Meta Ads and conversion optimization services for Indian ecommerce brands.",

    images: ["https://www.kidiwebtech.com/og-image.jpg"],
  },
};

export default function Page() {
  return <EcommercePage />;
}
