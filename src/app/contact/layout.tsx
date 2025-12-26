import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Riva Ahşap iletişim bilgileri. İstanbul'da ahşap işleme, mobilya ve dekorasyon hizmetleri için bize ulaşın. Telefon: +90 532 177 61 69, +90 537 745 91 51 | E-posta: info@rivaahsap.com.tr",
  keywords: [
    "Riva Ahşap iletişim",
    "ahşap işleme İstanbul",
    "ahşap mobilya İstanbul",
    "Riva Ahşap telefon",
    "Riva Ahşap adres",
    "ahşap dekorasyon İstanbul",
  ],
  openGraph: {
    title: "İletişim | Riva Ahşap",
    description: "İstanbul'da ahşap işleme, mobilya ve dekorasyon hizmetleri için bize ulaşın. Telefon: +90 532 177 61 69, +90 537 745 91 51",
    url: "https://rivaahsap.com.tr/contact",
    images: [
      {
        url: "/product-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Riva Ahşap İletişim",
      },
    ],
  },
  alternates: {
    canonical: "https://rivaahsap.com.tr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

