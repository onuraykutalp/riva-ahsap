import Image from "next/image";
import Slider from "@/components/Slider";
import AboutUs from "@/components/AboutUs";
import ProductList from "@/components/ProductList";
import StuffList from "@/components/StuffList";

export default function Home() {
  return (
    <>
      <Slider />
      <StuffList />
      <AboutUs />
      <ProductList />
    </>
  );
}
