import Image from "next/image";
import type { Metadata } from "next";
import Slider from "@/components/Slider";
import AboutUs from "@/components/AboutUs";
import ProductList from "@/components/ProductList";
import StuffList from "@/components/StuffList";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: "Riva Ahşap: Doğanın estetiğini modern tasarımla buluşturan ahşap işleme, özel mobilya ve dekorasyon hizmetleri. Uzman kadro, kaliteli malzeme ve işçilik ile özgün çözümler sunar.",
  keywords: [
    "ahşap işleme İstanbul",
    "ahşap mobilya İstanbul",
    "özel ahşap mobilya",
    "ahşap dekorasyon",
    "ahşap kapı",
    "ahşap tavan",
    "ahşap mihrap",
    "Riva Ahşap",
  ],
  openGraph: {
    title: "Riva Ahşap | Ana Sayfa",
    description: "Doğanın estetiğini modern tasarım anlayışıyla buluşturuyoruz. İstanbul'da ahşap işleme, mobilya ve dekorasyon hizmetleri.",
    url: "https://rivaahsap.com.tr",
    images: [
      {
        url: "/logo-riva.jpg",
        width: 1200,
        height: 630,
        alt: "Riva Ahşap Ana Sayfa",
      },
    ],
  },
  alternates: {
    canonical: "https://rivaahsap.com.tr",
  },
};

export default function Home() {
  return (
    <>
      <Slider useH1={true} />
      <StuffList />
      <AboutUs />
      <ProductList />
    </>
  );
}
