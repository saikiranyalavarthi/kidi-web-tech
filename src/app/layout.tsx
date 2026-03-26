import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Footer/Footer";
import FloatingSocialButtons from "./Components/FloatingSocialButtons";
import Script from "next/script";
import type { Metadata } from "next";

/* =========================
   FONTS
========================= */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =========================
   GLOBAL SEO METADATA
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.kidiwebtech.com"),

  title: {
    default: "KidiWebTech – Digital Marketing & SEO Agency in Hyderabad",
    template: "%s | KidiWebTech",
  },

  description:
    "KidiWebTech is a leading digital marketing agency in Hyderabad offering SEO services, website development, Google Ads management, social media marketing, and web hosting solutions.",

  keywords: [
  "digital marketing agency Hyderabad",
  "SEO services Hyderabad",
  "website development Hyderabad",
  "Google Ads expert Hyderabad",
  "social media marketing agency Hyderabad",
  "best SEO company in Hyderabad",
  "web design company Hyderabad",
  "online marketing services India",
  "KidiWebTech digital agency",
],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "oRuxF-tkLeI9a3b51z2Ic1GkLtcyQdErTtqTYVpjkl0",
  },

  openGraph: {
  title: "KidiWebTech – Digital Growth Partner in Hyderabad",
  description:
    "SEO, web development, Google Ads, social media marketing & hosting services in Hyderabad.",
  url: "https://www.kidiwebtech.com",
  siteName: "KidiWebTech",
  locale: "en_IN",
  type: "website",
  images: [
    {
      url: "https://www.kidiwebtech.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "KidiWebTech Digital Marketing Agency",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: "KidiWebTech – Digital Marketing Agency",
  description:
    "Grow your business with SEO, web development & performance marketing services.",
  images: ["https://www.kidiwebtech.com/og-image.jpg"],
},
};
/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* =========================
     STRUCTURED DATA
  ========================= */

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.kidiwebtech.com/#organization",
    name: "KidiWebTech",
    url: "https://www.kidiwebtech.com",
    logo: "https://www.kidiwebtech.com/logo.png",
    sameAs: [
      "https://www.instagram.com/kidi.webtech/",
      "https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/",
      "https://www.facebook.com/profile.php?id=61585391203839",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.kidiwebtech.com/#localbusiness",
    name: "KidiWebTech",
    image: "https://www.kidiwebtech.com/logo.png",
    url: "https://www.kidiwebtech.com",
    telephone: "+91-9390627367",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.kidiwebtech.com/#website",
    url: "https://www.kidiwebtech.com",
    name: "KidiWebTech",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.kidiwebtech.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* ORGANIZATION SCHEMA */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* LOCAL BUSINESS SCHEMA */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* GOOGLE ANALYTICS 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BG2NCCWS17"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BG2NCCWS17');
          `}
        </Script>

        {/* GOOGLE ADSENSE */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031612318519089"
          crossOrigin="anonymous"
        />

        {/* SITE LAYOUT */}
        <Navbar />
        <main>{children}</main>
        <FloatingSocialButtons />
        <Footer />
      </body>
    </html>
  );
}