import { iBeg1, iMultiBook, iMultiCap, iRightArrow, iTShirt1, iTShirt2, iWaterBottle, iWhiteLogo } from '@/util/imageImports';
import Image from 'next/image';
import React from 'react';
import LaptopCollection from './LaptopCollection';

const ShopCollection = () => {
  return (
    <div className='relative bg-gradient-to-b-custom all_padding'>
      <div className='flex flex-col items-center justify-center mb-4 text-4xl md:hidden gap-x-2'>
        <div className='text-white'>Shop</div>
        <div className='tracking-wide outlined-text-white'>Collection</div>
      </div>

      <div className='absolute flex-col hidden top-20 left-[100px] md:flex'>
        <div className='flex flex-col font-semibold text-[70px] leading-[84px]'>
          <div className='text-white'>Shop</div>
          <div className='tracking-wide outlined-text-white'>Collection</div>
        </div>
        <div className='flex px-8 py-4 md:py-4 bg-white cursor-pointer gap-x-3 w-fit rounded-xl md:mt-[48px] my-5 md:mb-6'>
          <div className='font-medium leading-5 text-fs16'>VIEW ALL</div>
          <Image src={iRightArrow} alt="" />
        </div>
      </div>

      <div className='absolute top-0 left-0'>
         <Image height={600} src={iWhiteLogo} alt="" />
      </div>

     <LaptopCollection/>


      <div className='flex flex-col items-center justify-center md:hidden gap-y-10 '>

        <div className='relative'>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: 250,
              minWidth: 250
            }}
            src={iBeg1}
            alt=""
            className='opacity-75 rounded-xl'
          />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>THE BOSS COLLECTION</div>
        </div>

        <div className='relative'>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: 250,
              minWidth: 250
            }}
            src={iMultiCap} className='object-cover opacity-75 rounded-xl' alt="" />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>HEADW EAR</div>
        </div>

        <div className='relative'>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: 250,
              minWidth: 250
            }}
            className='opacity- rounded-xl'
            src={iMultiBook} alt="" />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>VALUE BOOKS</div>
        </div>

        <div className='relative '>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: 250,
              minWidth: 250
            }}
            className='object-cover opacity-75 rounded-xl'
            src={iWaterBottle} alt="" />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>Accessories</div>
        </div>

        <div className='relative'>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: 250,
              minWidth: 250
            }}
            className='opacity-75 rounded-xl'
            src={iTShirt1} alt=""
          />
          <div className='absolute w-[30px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>The Future Looks Bright Collection</div>
        </div>

        <div className='relative'>
          <Image
            style={{
              maxHeight: 250,
              minHeight: 250,
              maxWidth: 250,
              minWidth: 250
            }}
            className='opacity-75 rounded-xl'
            src={iTShirt2} alt="" />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>TOPS</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;


