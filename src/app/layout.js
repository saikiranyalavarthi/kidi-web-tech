import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Footer/Footer";
import FloatingSocialButtons from "./Components/FloatingSocialButtons";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KIDIWEBTECH - Digital Growth Partner",
  description: "Digital Growth Partner",

  // ✅ GOOGLE SEARCH CONSOLE
  verification: {
    google: "oRuxF-tkLeI9a3b51z2Ic1GkLtcyQdErTtqTYVpjkl0",
  },

  // ✅ GOOGLE ADSENSE
  other: {
    "google-adsense-account": "ca-pub-1031612318519089",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
            gtag('config', 'G-BG2NCCWS17');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <FloatingSocialButtons />
        <Footer />
      </body>
    </html>
  );
}
