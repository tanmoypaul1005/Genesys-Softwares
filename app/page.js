
import Believe from "./components/Believe";
import BestSellingProducts from "./components/BestSellingProducts";
import NewArrival from "./components/NewArrival";
import ProductOfMonth from "./components/ProductOfMonth";
import Services from "./components/Services";
import SignedCollection from "./components/SignedCollection";

export default function Home() {
  return (
    <div className="">
      <BestSellingProducts />
      <SignedCollection/>
      <NewArrival/>
      <Believe/>
      <ProductOfMonth/>
      <Services/>
    </div>
  );
}
