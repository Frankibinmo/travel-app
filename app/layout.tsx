import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTope from "@/components/Home/Helper/ScrollToTope";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font =Poppins({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "travel-app",
  description: "Travel Landing Page for you To Access",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}  antialiased`}>
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTope/>
      </body>
    </html>
  );
}
