import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Footer/Footer";
import FloatingSocialButtons from "./Components/FloatingSocialButtons";
import Script from "next/script";
import OrganizationSchema from "./Components/OrganizationSchema";

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

export const metadata = {
  title: "KIDIWEBTECH - Digital Growth Partner",
  description: "Digital Growth Partner",
  verification: {
    google: "oRuxF-tkLeI9a3b51z2Ic1GkLtcyQdErTtqTYVpjkl0",
  },
  other: {
    "google-adsense-account": "ca-pub-1031612318519089",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ REQUIRED FOR ADSENSE VERIFICATION (RAW HTML) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031612318519089"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ ORGANIZATION SCHEMA */}
        <OrganizationSchema />

        {/* ✅ GOOGLE ANALYTICS (SAFE TO USE Script) */}
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

        <Navbar />
        {children}
        <FloatingSocialButtons />
        <Footer />
      </body>
    </html>
  );
}
