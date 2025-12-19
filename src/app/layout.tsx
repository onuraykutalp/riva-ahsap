import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riva Ahşap",
  description: "Riva Ahşap, doğanın estetiğini, modern tasarım anlayışıyla buluşturuyoruz. Yüksek kaliteli malzemeler ve usta işçilikle, her yaşam alanı için özgün ve işlevsel ahşap çözümleri sunuyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
