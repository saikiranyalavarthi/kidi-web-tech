import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Footer/Footer";
import FloatingSocialButtons from "./Components/FloatingSocialButtons";
import Script from "next/script";

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
export const metadata = {
  title: {
    default: "KidiWebTech – Digital Marketing & SEO Agency in Hyderabad",
    template: "%s | KidiWebTech",
  },

  description:
    "KidiWebTech is a digital marketing & SEO agency in Hyderabad offering SEO services, website development, Google Ads, and social media marketing.",

  metadataBase: new URL("https://www.kidiwebtech.com"),

  alternates: {
    canonical: "/",
  },
  keywords: [
    "digital marketing agency Hyderabad",
    "SEO company Hyderabad",
    "website development company Hyderabad",
    "Google Ads agency Hyderabad",
    "social media marketing Hyderabad",
    "best SEO services in Hyderabad",
    "KidiWebTech"
  ],

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "oRuxF-tkLeI9a3b51z2Ic1GkLtcyQdErTtqTYVpjkl0",
  },

  openGraph: {
    title: "KidiWebTech – Digital Growth Partner",
    description:
      "SEO, web development, Google Ads & digital marketing services in India.",
    url: "https://www.kidiwebtech.com",
    siteName: "KidiWebTech",
    locale: "en_IN",
    type: "website",
  },
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({ children }) {

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
      addressCountry: "IN"
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad"
    },
    sameAs: [
      "https://www.instagram.com/kidi.webtech/",
      "https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/",
      "https://www.facebook.com/profile.php?id=61585391203839"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "KidiWebTech",
      url: "https://www.kidiwebtech.com"
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads Management"
          }
        }
      ]
    }
  };

  return (
    <html lang="en-IN">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>

        {/* STRUCTURED DATA - LOCAL BUSINESS */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* STRUCTURED DATA - SERVICES */}
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {/* GOOGLE ADSENSE */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031612318519089"
          crossOrigin="anonymous"
        />

        {/* GOOGLE ANALYTICS */}
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

        {/* SITE LAYOUT */}
        <Navbar />
        <main>{children}</main>
        <FloatingSocialButtons />
        <Footer />

      </body>
    </html>
  );
}