import Cards from "@/components/Cards";
import Future from "@/components/Future";
import Header from "@/components/Header";
import { Nav } from "@/components/Nav";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Product />
      <Future />
      <Cards />

    </>
  );
}
