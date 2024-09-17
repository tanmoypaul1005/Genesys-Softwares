import { iCap1, iCap2, iCap3, iCap4 } from '@/util/imageImports';
import Image from 'next/image';
import React from 'react'

const ShortSleeve = () => {
  const products = [
    { imageSrc: iCap1, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iCap2, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iCap3, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iCap4, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
  ];

  return (
    <div className='flex flex-wrap items-center justify-center md:justify-between gap-y-5'>
      {products?.map((product, index) => (
        <ProductCard
          key={index}
          imageSrc={product.imageSrc}
          title={product.title}
          price={product.price}
          originalPrice={product.originalPrice}
        />
      ))}
    </div>
  );
};

export default ShortSleeve;



export const ProductCard = ({ imageSrc, title, price, originalPrice }) => {
  return (
    <div className='p-4 bg-white rounded-xl'>
      <Image width={260} height={260} src={imageSrc} alt={title} className='rounded-lg' />
      <div className='flex flex-col mt-7 gap-y-3'>
        <div className='text-sm font-semibold leading-5'>{title}</div>
        <div className='flex text-lg font-medium leading-6'>
          <div>${price}</div>
          <div className='px-3 text-gray-400 line-through'>${originalPrice}</div>
        </div>
      </div>
    </div>
  );
};