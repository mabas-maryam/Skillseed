import Cards from "@/components/Cards";
import FindCard from "@/components/FindCards";
import Footer from "@/components/Footer";
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
      <div>
      <header className="text-center py-8">
        <h1 className="text-xl text-gray-600">Shop Smarter, Live Better!</h1>
      </header>
      <FindCard />
    </div>

    <Footer />
    </>
  );
}
