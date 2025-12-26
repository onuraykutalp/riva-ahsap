import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobilyalarımız",
  description: "Riva Ahşap mobilya koleksiyonu. Genç odası, ahşap masa, ahşap sandalye, ahşap kitaplık, lambader, oturma ünitesi, yan sehpa ve raf ünitesi. Özel tasarım ahşap mobilyalar.",
  keywords: [
    "ahşap mobilya",
    "genç odası mobilya",
    "ahşap masa",
    "ahşap sandalye",
    "ahşap kitaplık",
    "ahşap lambader",
    "oturma ünitesi",
    "yan sehpa",
    "raf ünitesi",
    "özel mobilya",
    "Riva Ahşap mobilya",
  ],
  openGraph: {
    title: "Mobilyalarımız | Riva Ahşap",
    description: "Genç odası, ahşap masa, ahşap sandalye, ahşap kitaplık ve daha fazlası. Özel tasarım ahşap mobilyalar.",
    url: "https://rivaahsap.com.tr/stuff",
    images: [
      {
        url: "/product-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Riva Ahşap Mobilyalar",
      },
    ],
  },
  alternates: {
    canonical: "https://rivaahsap.com.tr/stuff",
  },
};

export default function StuffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

