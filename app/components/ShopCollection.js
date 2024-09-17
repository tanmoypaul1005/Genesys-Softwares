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

      <div className='items-end justify-between hidden md:flex gap-x-10 '>

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
            className='opacity-75'
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
            src={iMultiCap} className='object-cover opacity-75' alt="" />
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
            className='opacity-75'
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
            className='object-cover opacity-75'
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
              maxWidth: 250,
              minWidth: 250
            }}
            className='opacity-75'
            src={iTShirt2} alt="" />
          <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>TOPS</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;


