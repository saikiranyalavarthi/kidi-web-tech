import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Footer/Footer";
import FloatingSocialButtons from "./Components/FloatingSocialButtons";
import Script from "next/script";
import OrganizationSchema from "./Components/OrganizationSchema";

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
    "KidiWebTech is a digital marketing & SEO agency in Hyderabad offering SEO services, website development, Google Ads, and social media marketing to grow businesses online.",
  applicationName: "KidiWebTech",
  metadataBase: new URL("https://www.kidiwebtech.com"),

  keywords: [
    "digital marketing agency Hyderabad",
    "SEO company Hyderabad",
    "website development company India",
    "Google Ads services",
    "KidiWebTech",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "oRuxF-tkLeI9a3b51z2Ic1GkLtcyQdErTtqTYVpjkl0",
  },

  other: {
    "google-adsense-account": "ca-pub-1031612318519089",
  },

  openGraph: {
    title: "KidiWebTech – Digital Growth Partner",
    description:
      "SEO, web development, Google Ads & digital marketing services for businesses in India.",
    url: "https://www.kidiwebtech.com",
    siteName: "KidiWebTech",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KidiWebTech – Digital Growth Partner",
    description:
      "Grow your business online with SEO, websites, and performance marketing.",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* ✅ ORGANIZATION STRUCTURED DATA */}
        <OrganizationSchema />

        {/* ✅ GOOGLE ADSENSE */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031612318519089"
          crossOrigin="anonymous"
        />

        {/* ✅ GOOGLE ANALYTICS (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BG2NCCWS17"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BG2NCCWS17', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ✅ SITE LAYOUT */}
        <Navbar />
        <main>{children}</main>
        <FloatingSocialButtons />
        <Footer />
      </body>
    </html>
  );
}
