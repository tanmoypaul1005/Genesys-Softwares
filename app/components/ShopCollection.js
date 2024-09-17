import { iBeg1, iMultiBook, iMultiCap, iTShirt1, iTShirt2, iWaterBottle } from '@/util/imageImports';
import Image from 'next/image';
import React from 'react';

const ShopCollection = () => {
  return (
    <div className='bg-gradient-to-b-custom all_padding'>
      <div className='flex text-4xl gap-x-2'>
        <div className='text-white'>Shop</div>
        <div className='tracking-wide outlined-text'>Collection</div>
      </div>

      <div className='flex items-end justify-between gap-x-10 '>

        <div className='relative w-full'>
          <Image style={{
            maxHeight: 250,
            minHeight: 250,
            maxWidth: "100%",
            minWidth: "100%"
          }}
            src={iBeg1}
            alt=""
            className='opacity-75'
          />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>THE BOSS COLLECTION</div>
        </div>

        <div className='flex flex-col w-full gap-y-5'>
          <div className='relative'>
          <Image
            style={{
              maxHeight: 180,
              minHeight: 180,
              maxWidth: "100%",
              minWidth: "100%"
            }}
            src={iMultiCap} className='object-cover opacity-75' alt="" />
            <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>HEADW EAR</div>
          </div>

          <div className='relative'> 
          <Image
            style={{
              maxHeight: 180,
              minHeight: 180,
              maxWidth: "100%",
              minWidth: "100%"
            }}
            className='opacity-75'
            src={iMultiBook} alt="" />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>VALUE BOOKS</div>
          </div>
        </div>

        <div className='relative w-full'>
          <Image
            style={{
              maxHeight: 450,
              minHeight: 450,
              maxWidth: "100%",
              minWidth: "100%"
            }} className='object-cover opacity-75'
            src={iWaterBottle} alt="" />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>Accessories</div>
        </div>

        <div className='flex flex-col w-full gap-y-5'>
          <div className='relative'>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: "100%",
              minWidth: "100%"
            }}
            className='opacity-75'
            src={iTShirt1} alt="" 
            />
<div className='absolute w-[30px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>The Future Looks Bright Collection</div>
          </div>

          <div className='relative'>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: "100%",
              minWidth: "100%"
            }}
            className='opacity-75'
            src={iTShirt2} alt="" />
            <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>TOPS</div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;



const CollectionItem = ({ title }) => {
  return (
    <div className="p-5 transition bg-gray-800 rounded-lg hover:bg-gray-700">
      <div className="h-64 mb-4 bg-gray-600 rounded">
        {/* Dummy image placeholder */}
        <img
          src="https://via.placeholder.com/300x200"
          alt={title}
          className="object-cover w-full h-full rounded"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
  );
};

