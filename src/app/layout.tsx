import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import SearchModal from "@/components/SearchModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexvoltenterprises.com"),
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.nexvoltenterprises.com/#organization",
      name: "Nexvolt Enterprises",
      url: "https://www.nexvoltenterprises.com",
      logo: "https://www.nexvoltenterprises.com/images/nexvolt-logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#13, Moodlappa Cross, Doddamavali",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560004",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9180595957",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.nexvoltenterprises.com/#localbusiness",
      name: "Nexvolt Enterprises",
      description:
        "Consumer electronics, personal audio, home entertainment, and charging accessories business in Bengaluru, Karnataka.",
      url: "https://www.nexvoltenterprises.com",
      telephone: "+91-9180595957",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#13, Moodlappa Cross, Doddamavali",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560004",
        addressCountry: "IN",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0B0B0D] text-white selection:bg-[#D4AF37] selection:text-[#0B0B0D]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <SearchModal />
      </body>
    </html>
  );
}
