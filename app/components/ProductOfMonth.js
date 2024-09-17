"use client"
import { iBeg1, iBeg2, iBeg3, iBottomArrow, iShare, iTopArrow } from "@/util/imageImports";
import Image from "next/image";
import { useState } from "react";

const ProductOfMonth = () => {

  const [quantity, setQuantity] = useState(1);

  const [size, setSize] = useState("M");

  const [mainImage, setMainImage] = useState(iBeg1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) of size ${size} to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Purchasing ${quantity} item(s) of size ${size}!`);
  };

  return (
    <div className="container p-6 mx-auto">
      <div className="text-xl md:text-[70px] leading-[80px] justify-center font-bold text-center flex gap-x-2 mb-[48px]">
        <h1 className="">PRODUCT OF </h1>
        <div className="tracking-wide outlined-text">
          THE MONTH
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>

          <div className="flex gap-x-6">
            <div className="flex flex-col gap-y-3">
              <div onClick={() => {
                if (mainImage === iBeg1) setMainImage(iBeg3);
                else if (mainImage === iBeg3) setMainImage(iBeg2);
                else if (mainImage === iBeg2) setMainImage(iBeg1);
              }} className="flex items-center justify-center cursor-pointer">
                <Image src={iTopArrow} alt="" />
              </div>
              <Image
                style={{ maxHeight: 100, minHeight: 100, minWidth: 100, maxWidth: 100 }}
                className={`w-16 ${mainImage === iBeg1 ? "border-2 border-blue-400" : ""} h-16 border rounded-md cursor-pointer`}
                src={iBeg1}
                alt="Side view"
                onClick={() => setMainImage(iBeg1)}
              />
              <Image
                style={{ maxHeight: 100, minHeight: 100, minWidth: 100, maxWidth: 100 }}
                className={`w-16 ${mainImage === iBeg2 ? "border-2 border-blue-400" : ""} h-16 border rounded-md cursor-pointer`}
                src={iBeg2}
                alt="Red Backpack"
                onClick={() => setMainImage(iBeg2)}
              />
              <Image
                style={{ maxHeight: 100, minHeight: 100, minWidth: 100, maxWidth: 100 }}
                className={`w-16 ${mainImage === iBeg3 ? "border-2 border-blue-400" : ""} h-16 border rounded-md cursor-pointer`}
                src={iBeg3}
                alt="Open view"
                onClick={() => setMainImage(iBeg3)}
              />

              <div onClick={() => {
                if (mainImage === iBeg1) setMainImage(iBeg2);
                else if (mainImage === iBeg2) setMainImage(iBeg3);
                else if (mainImage === iBeg3) setMainImage(iBeg1);
              }} className="flex items-center justify-center cursor-pointer">
                <Image src={iBottomArrow} alt="" />
              </div>
            </div>
            <div>
              <Image
                style={{ maxHeight: 400, minHeight: 400, minWidth: 400, maxWidth: 400 }}
                className="w-full rounded-lg shadow-md"
                src={mainImage}
                alt="Premium Valuetainment Leather Backpack"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-[32px] font-medium">Premium Valuetainment Leather Backpack</h2>
          <p className="mb-4 text-base font-normal text-[#060606CC">
            The attention to detail is evident in every aspect of this backpack. From the sturdy
            hardware and reinforced stitching to the smooth zippers and luxurious lining, no detail
            has been overlooked.
          </p>

          <div className="flex mb-2 text-xl font-semibold gap-x-3">
            <p className="">Price:</p>
            <p className="text-[#EA2127]"> $199.95</p>
          </div>
          {/* Size Selection */}
          <div className="flex mb-4 gap-x-3">
            <label className="font-medium flex justify-center items-center text-[#060606] text-[20px] leading-6">Size:</label>
            <div className="flex">
              {["S", "M", "L", "XL", "XXL"].map((sizeOption, index) => (
                <button
                  key={sizeOption}
                  className={`px-3 py-2 ${index === 4 && "border-r-2"} border-t-2 border-b-2 border-l-2 border-black ${size === sizeOption
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600"
                    }`}
                  onClick={() => setSize(sizeOption)}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-4">
            <label className="font-semibold">Quantity:</label>
            <div className="flex items-center mt-2">
              <button
                className="px-4 py-2 border border-black "
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <div
                type="number"
                className="px-4 py-2 border-t border-b border-black"

              >{quantity}</div>
              <button
                className="px-4 py-2 border border-black"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-x-6">
            <button
              className="w-full px-4 py-4 text-white bg-black rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="px-4 py-4 bg-white border border-black rounded-md w-ful"
              onClick={handleBuyNow}
            >
              Buy it Now
            </button>
          </div>

          {/* Share Links */}
          <div className="flex mt-6 gap-x-3">
            <div className="flex items-center justify-center font-semibold">Share:</div>
            <Image src={iShare} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOfMonth;



