
import Believe from "./components/Believe";
import BestSellingProducts from "./components/BestSellingProducts";
import NewArrival from "./components/NewArrival";
import ProductOfMonth from "./components/ProductOfMonth";
import Services from "./components/Services";
import ShopCollection from "./components/shopCollection/ShopCollection";
import SignedCollection from "./components/SignedCollection";

export default function Home() {
  return (
    <div className="">
      <BestSellingProducts />
      <SignedCollection/>
      <ShopCollection/>
      <NewArrival/>
      <Believe/>
      <ProductOfMonth/>
      <Services/>
    </div>
  );
}
