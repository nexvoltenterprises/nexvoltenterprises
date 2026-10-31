import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Nexvolt Enterprises — Premium Electronics & Audio Products | Bengaluru",
    template: "%s | Nexvolt Enterprises",
  },
  description:
    "Nexvolt Enterprises offers a wide range of consumer electronics, audio products, and charging accessories in Bengaluru, Karnataka. Explore neckbands, TWS earbuds, Bluetooth speakers, soundbars, charger adapters, and more.",
  keywords: [
    "Nexvolt Enterprises",
    "electronics Bengaluru",
    "audio products",
    "TWS earbuds",
    "neckbands",
    "Bluetooth speakers",
    "soundbars",
    "charger adapters",
    "charging cables",
    "home theatre systems",
    "OWS earbuds",
    "consumer electronics",
    "electronics accessories Bengaluru",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nexvolt Enterprises",
    title: "Nexvolt Enterprises — Premium Electronics & Audio Products",
    description:
      "Explore a versatile range of audio products, charging accessories, and everyday technology essentials from Nexvolt Enterprises, Bengaluru.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#0B0B0D] text-white selection:bg-[#D4AF37] selection:text-[#0B0B0D]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
