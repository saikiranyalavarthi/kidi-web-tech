import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Goals from "./goals/Goals";
import AnimatedServices from "./Components/AnimatedServices";
import AnimatedCompanies from "./Components/AnimatedCompanies";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <AnimatedServices />
        <Goals />
        {/* <AnimatedCompanies /> */}
        <Footer />
      </body>
    </html>
  );
}
