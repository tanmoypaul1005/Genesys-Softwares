
import BestSellingProducts from "./components/BestSellingProducts";
import Services from "./components/Services";
import SignedCollection from "./components/SignedCollection";

export default function Home() {
  return (
    <div className="">
      <BestSellingProducts />
      <SignedCollection/>
      <Services/>
    </div>
  );
}
