import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description: "Riva Ahşap ürün kataloğu. Ahşap mihrap, korkuluk, çıtakari tavan, ahşap tavanlık, ahşap kapı, ahşap kürsü ve daha fazlası. Yüksek kaliteli ahşap işçilik örnekleri.",
  keywords: [
    "ahşap mihrap",
    "ahşap korkuluk",
    "çıtakari tavan",
    "ahşap tavanlık",
    "ahşap kapı",
    "ahşap kürsü",
    "ahşap ürünler",
    "ahşap işçilik",
    "Riva Ahşap ürünler",
  ],
  openGraph: {
    title: "Ürünlerimiz | Riva Ahşap",
    description: "Ahşap mihrap, korkuluk, çıtakari tavan, ahşap tavanlık, ahşap kapı ve daha fazlası. Yüksek kaliteli ahşap işçilik örnekleri.",
    url: "https://rivaahsap.com.tr/products",
    images: [
      {
        url: "/product-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Riva Ahşap Ürünler",
      },
    ],
  },
  alternates: {
    canonical: "https://rivaahsap.com.tr/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

