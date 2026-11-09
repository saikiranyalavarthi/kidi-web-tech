// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Components/Navbar";
// import Footer from "./Footer/Footer";
// import FloatingSocialButtons from "./Components/FloatingSocialButtons";
// import Script from "next/script";
// import type { Metadata } from "next";
// import { Analytics } from "@vercel/analytics/next"

// /* =========================
//    FONTS
// ========================= */
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: "swap",
// });

// /* =========================
//    GLOBAL SEO METADATA
// ========================= */
// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.kidiwebtech.com"),

//   title: {
//     default:
//       "Website Design, Web Development & SEO Services Hyderabad | KidiWebTech",
//     template: "%s | KidiWebTech",
//   },

//   description:
//     "KidiWebTech provides professional website design, web development, React.js development, Next.js development, website redesign, and SEO services in Hyderabad. Build fast, SEO-friendly websites that grow your business.",

//   keywords: [
//     "website design company Hyderabad",
//     "web development company Hyderabad",
//     "website development services Hyderabad",
//     "custom website development",
//     "website redesign services",
//     "responsive website design",
//     "React JS development services",
//     "Next.js development company",
//     "SEO services Hyderabad",
//     "SEO company Hyderabad",
//     "technical SEO services",
//     "local SEO services",
//     "web design agency Hyderabad",
//     "business website development",
//     "KidiWebTech",
//   ],

//   alternates: {
//     canonical: "/",
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   verification: {
//     google: "oRuxF-tkLeI9a3b51z2Ic1GkLtcyQdErTtqTYVpjkl0",
//   },

//   openGraph: {
//     title:
//       "Website Design, Web Development & SEO Services Hyderabad | KidiWebTech",
//     description:
//       "Professional website design, web development, React.js, Next.js, and SEO services in Hyderabad.",
//     url: "https://www.kidiwebtech.com",
//     siteName: "KidiWebTech",
//     locale: "en_IN",
//     type: "website",
//     images: [
//       {
//         url: "https://www.kidiwebtech.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "KidiWebTech Website Development & SEO Services",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title:
//       "Website Design, Web Development & SEO Services Hyderabad | KidiWebTech",
//     description:
//       "Grow your business with professional website development and SEO services.",
//     images: ["https://www.kidiwebtech.com/og-image.jpg"],
//   },

// };
// /* =========================
//    ROOT LAYOUT
// ========================= */
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   /* =========================
//      STRUCTURED DATA
//   ========================= */

//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "@id": "https://www.kidiwebtech.com/#organization",
//     name: "KidiWebTech",
//     url: "https://www.kidiwebtech.com",
//     logo: "https://www.kidiwebtech.com/logo.png",
//     sameAs: [
//       "https://www.instagram.com/kidi.webtech/",
//       "https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/",
//       "https://www.facebook.com/profile.php?id=61585391203839",
//     ],
//   };

//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "ProfessionalService",
//     "@id": "https://www.kidiwebtech.com/#localbusiness",
//     name: "KidiWebTech",
//     image: "https://www.kidiwebtech.com/logo.png",
//     url: "https://www.kidiwebtech.com",
//     telephone: "+91-9390627367",
//     priceRange: "₹₹",
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: "Hyderabad",
//       addressRegion: "Telangana",
//       addressCountry: "IN",
//     },
//     areaServed: {
//       "@type": "City",
//       name: "Hyderabad",
//     },
//   };

//   const websiteSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "@id": "https://www.kidiwebtech.com/#website",
//     url: "https://www.kidiwebtech.com",
//     name: "KidiWebTech",
//     potentialAction: {
//       "@type": "SearchAction",
//       target: "https://www.kidiwebtech.com/?s={search_term_string}",
//       "query-input": "required name=search_term_string",
//     },
//   };

//   return (
//     <html lang="en-IN">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
//       >
//         {/* ORGANIZATION SCHEMA */}
//         <Script
//           id="organization-schema"
//           type="application/ld+json"
//      strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationSchema),
//           }}
//         />

//         {/* LOCAL BUSINESS SCHEMA */}
//         <Script
//           id="local-business-schema"
//           type="application/ld+json"
//      strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(localBusinessSchema),
//           }}
//         />

//         {/* WEBSITE SCHEMA */}
//         <Script
//           id="website-schema"
//           type="application/ld+json"
//        strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(websiteSchema),
//           }}
//         />

//         {/* GOOGLE ANALYTICS 4 */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-BG2NCCWS17"
//           strategy="lazyOnload"
//         />
//         <Script id="ga4-init" strategy="lazyOnload">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-BG2NCCWS17');
//           `}
//         </Script>

//         {/* GOOGLE ADSENSE */}
//        <Script
//   async
//   strategy="afterInteractive"
//   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-10316123185109089"
//   crossOrigin="anonymous"
// />

//         {/* SITE LAYOUT */}
//         <Navbar />
//         <main>{children}</main>
//         <FloatingSocialButtons />
//         <Footer />
//         <Analytics />
//       </body>
//     </html>
//   );
// }




import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Footer/Footer";
import FloatingSocialButtons from "./Components/FloatingSocialButtons";
import Script from "next/script";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import KidiWebTechChatbot from "./Components/KidiWebTechChatbot";

/* =========================================================
   FONTS
========================================================= */

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

/* =========================================================
   WEBSITE CONSTANTS
========================================================= */

const SITE_URL = "https://www.kidiwebtech.com";
const SITE_NAME = "KidiWebTech";

/* =========================================================
   GLOBAL SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Web Development & SEO Company in Hyderabad | KidiWebTech",
    template: "%s | KidiWebTech",
  },

  description:
    "KidiWebTech is a web development and SEO company in Hyderabad, Telangana. We build fast, responsive and SEO-friendly websites using Next.js, React.js and modern web technologies.",

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  category: "Technology",

  keywords: [
    "web development company in Hyderabad",
    "website development company Hyderabad",
    "web design company Hyderabad",
    "website design company Hyderabad",
    "SEO company in Hyderabad",
    "SEO services Hyderabad",
    "digital marketing company Hyderabad",
    "Next.js development company Hyderabad",
    "React.js development company Hyderabad",
    "custom website development Hyderabad",
    "business website development Hyderabad",
    "responsive website design Hyderabad",
    "technical SEO Hyderabad",
    "local SEO Hyderabad",
    "website redesign Hyderabad",
    "SEO friendly website development",
    "KidiWebTech",
  ],

  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
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
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,

    title:
      "Web Development & SEO Company in Hyderabad | KidiWebTech",

    description:
      "KidiWebTech provides professional web development, website design, Next.js, React.js and SEO services for businesses in Hyderabad and across Telangana.",

    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt:
          "KidiWebTech Web Development and SEO Company in Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Web Development & SEO Company in Hyderabad | KidiWebTech",

    description:
      "Professional website development, Next.js, React.js and SEO services in Hyderabad, Telangana.",

    images: [`${SITE_URL}/og-image.jpg`],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* =========================================================
     ORGANIZATION SCHEMA
  ========================================================= */

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${SITE_URL}/#organization`,

    name: SITE_NAME,
    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },

    description:
      "KidiWebTech is a web development and SEO company providing website development, website design, Next.js, React.js and SEO services.",

    sameAs: [
      "https://www.instagram.com/kidi.webtech/",
      "https://www.linkedin.com/in/kidi-webtech-a86b8b3a2/",
      "https://www.facebook.com/profile.php?id=61585391203839",
    ],
  };

  /* =========================================================
     LOCAL BUSINESS / PROFESSIONAL SERVICE SCHEMA
  ========================================================= */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    "@id": `${SITE_URL}/#localbusiness`,

    name: SITE_NAME,

    url: SITE_URL,

    image: `${SITE_URL}/logo.png`,

    logo: `${SITE_URL}/logo.png`,

    telephone: "+91-9390627367",

    priceRange: "₹₹",

    description:
      "KidiWebTech provides website development, web design, Next.js development, React.js development and SEO services in Hyderabad and Telangana.",

    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "City",
        name: "Secunderabad",
      },
      {
        "@type": "AdministrativeArea",
        name: "Telangana",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],

    serviceType: [
      "Web Development",
      "Website Design",
      "Next.js Development",
      "React.js Development",
      "SEO Services",
      "Technical SEO",
      "Local SEO",
      "Website Redesign",
    ],

    knowsAbout: [
      "Search Engine Optimization",
      "Web Development",
      "Next.js",
      "React.js",
      "Website Design",
      "Technical SEO",
      "Local SEO",
    ],
  };

  /* =========================================================
     WEBSITE SCHEMA
  ========================================================= */

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,

    name: SITE_NAME,

    description:
      "KidiWebTech web development and SEO services in Hyderabad.",

    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },

    inLanguage: "en-IN",
  };

  /* =========================================================
     SERVICES SCHEMA
  ========================================================= */

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",

    "@id": `${SITE_URL}/#services`,

    name: "KidiWebTech Services",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Web Development",
        url: `${SITE_URL}/web-development`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Website Design",
        url: `${SITE_URL}/website-design`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Next.js Development",
        url: `${SITE_URL}/nextjs-development`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "React.js Development",
        url: `${SITE_URL}/reactjs-development`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "SEO Services",
        url: `${SITE_URL}/seo-services`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Local SEO",
        url: `${SITE_URL}/local-seo`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Website Redesign",
        url: `${SITE_URL}/website-redesign`,
      },
    ],
  };

  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* =====================================================
            ORGANIZATION SCHEMA
        ===================================================== */}

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* =====================================================
            LOCAL BUSINESS SCHEMA
        ===================================================== */}

        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* =====================================================
            WEBSITE SCHEMA
        ===================================================== */}

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* =====================================================
            SERVICES SCHEMA
        ===================================================== */}

        <Script
          id="services-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />

        {/* =====================================================
            GOOGLE ANALYTICS 4
        ===================================================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BG2NCCWS17"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-BG2NCCWS17', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* =====================================================
            GOOGLE ADSENSE
        ===================================================== */}

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-10316123185109089"
          crossOrigin="anonymous"
        />

        {/* =====================================================
            WEBSITE CONTENT
        ===================================================== */}

        <Navbar />

        <main>{children}</main>
{/* <KidiWebTechChatbot /> */}
        <FloatingSocialButtons />

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}