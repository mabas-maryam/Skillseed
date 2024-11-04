import Future from "@/components/Future";
import Header from "@/components/Header";
import { Nav } from "@/components/Nav";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Product />
      <Future />

    </div>
  );
}
