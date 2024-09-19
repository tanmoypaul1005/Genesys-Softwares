"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { iMan1, iMan2, iMan3, iMan4 } from '@/util/imageImports';
import Image from 'next/image';
import CommonHoverEffect from './CommonHoverEffect';

const FutureProduct = () => {
  const products = [
    { imageSrc: iMan1, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iMan2, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iMan3, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iMan4, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
  ];

  return (
    <motion.div
      className='flex flex-wrap justify-center gap-y-8 md:justify-between'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {products.map((product, index) => (
        <CommonHoverEffect key={index}>
          <div className='text-white'>
            <Image
              width={250}
              height={250}
              className='rounded-xl w-[250px] h-[250px]'
              src={product.imageSrc}
              alt={product.title}
            />
            <div className='flex flex-col mt-2 md:mt-4 gap-y-1.5 md:gap-y-3'>
              <div className='text-base font-medium leading-5 text-white'>{product.title}</div>
              <div className='flex text-xl font-medium leading-6 gap-x-3'>
                <div>${product.price}</div>
                <div className='line-through'>${product.originalPrice}</div>
              </div>
            </div>
          </div>
        </CommonHoverEffect>
      ))}
    </motion.div>
  );
};

export default FutureProduct;



export const ProductCard = ({ imageSrc, title, price, originalPrice }) => {
  return (
    <div className='text-white'>
      <Image
        width={250}
        height={250}
        className='rounded-xl w-[250px] h-[250px]'
        src={imageSrc}
        alt={title}
      />
      <div className='flex flex-col mt-2 md:mt-4 gap-y-1 md:gap-y-3'>
        <div className='text-base font-medium leading-5 text-white'>{title}</div>
        <div className='flex text-xl font-medium leading-6 gap-x-3'>
          <div>${price}</div>
          <div className='line-through'>${originalPrice}</div>
        </div>
      </div>
    </div>
  );
};

