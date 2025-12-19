import Image from "next/image";
import Slider from "@/components/Slider";
import AboutUs from "@/components/AboutUs";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <ProductList />
    </>
  );
}
