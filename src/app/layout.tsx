import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rivaahsap.com.tr"),
  title: {
    default: "Riva Ahşap | Ahşap İşleme ve Mobilya",
    template: "%s | Riva Ahşap",
  },
  description: "Riva Ahşap, doğanın estetiğini modern tasarım anlayışıyla buluşturuyoruz. Yüksek kaliteli malzemeler ve usta işçilikle, her yaşam alanı için özgün ve işlevsel ahşap çözümleri sunuyoruz. Mobilya ve dekorasyon hizmetleri.",
  keywords: [
    "ahşap işleme",
    "ahşap mobilya",
    "ahşap dekorasyon",
    "İstanbul ahşap",
    "ahşap kapı",
    "ahşap tavan",
    "ahşap mihrap",
    "ahşap korkuluk",
    "özel ahşap mobilya",
    "ahşap işçilik",
    "Riva Ahşap",
  ],
  authors: [{ name: "Riva Ahşap" }],
  creator: "Riva Ahşap",
  publisher: "Riva Ahşap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://rivaahsap.com.tr",
    siteName: "Riva Ahşap",
    title: "Riva Ahşap | Ahşap İşleme ve Mobilya",
    description: "Doğanın estetiğini modern tasarım anlayışıyla buluşturuyoruz. Yüksek kaliteli malzemeler ve usta işçilikle, her yaşam alanı için özgün ve işlevsel ahşap çözümleri sunuyoruz.",
    images: [
      {
        url: "/logo-riva.jpg",
        width: 1200,
        height: 630,
        alt: "Riva Ahşap Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riva Ahşap | Ahşap İşleme ve Mobilya",
    description: "Doğanın estetiğini modern tasarım anlayışıyla buluşturuyoruz. Yüksek kaliteli malzemeler ve usta işçilikle ahşap çözümleri.",
    images: ["/logo-riva.jpg"],
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
    // Google Search Console verification code buraya eklenebilir
    // google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
