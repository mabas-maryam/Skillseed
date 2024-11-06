import Cards from "@/components/Cards";
import FindCard from "@/components/FindCards";
import Footer from "@/components/Footer";
import Future from "@/components/Future";
import Header from "@/components/Header";
import { Nav } from "@/components/Nav";
import Product from "@/components/Product";
import ShopSmart from "@/components/ShopSmart";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Product />
      <Future />
      <Cards />
      <div className="bg-white gap-16">
      <header className="text-start py-2 pt-8">
        <h1 className="text-sm text-gray-800 px-14">Shop Smarter, Live Better!</h1>
      </header>
      <FindCard />
    </div>
    <div className="flex flex-col-reverse">
    <ShopSmart  />
    </div>
    <Footer />
    </div>
  );
}
