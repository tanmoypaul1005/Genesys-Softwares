import React from 'react';
import { iMan1, iMan2, iMan3, iMan4 } from '@/util/imageImports';
import Image from 'next/image';


const FutureProduct = () => {
  const products = [
    { imageSrc: iMan1, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iMan2, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iMan3, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    { imageSrc: iMan4, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
  ];

  return (
    <div className='flex flex-wrap justify-between gap-y-5'>
      {products.map((product, index) => (
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
      <div className='flex flex-col mt-4 gap-y-3'>
        <div className='text-base font-medium leading-5 text-white'>{title}</div>
        <div className='flex text-xl font-medium leading-6 gap-x-3'>
          <div>${price}</div>
          <div className='line-through'>${originalPrice}</div>
        </div>
      </div>
    </div>
  );
};



// import { iMan1, iMan2, iMan3, iMan4 } from '@/util/imageImports'
// import Image from 'next/image'
// import React from 'react'

// const FutureProduct = () => {
//     return (
//         <div className='flex justify-between'>
//             <div className='text-white'>
//                 <Image
//                  style={{
//                     maxHeight:250,
//                     minHeight:250,
//                     maxWidth:250,
//                     minWidth:250
//                  }}
//                  width={250} height={250} className='rounded-xl' src={iMan1} alt="" />
//                 <div className='flex flex-col mt-4 gap-y-3'>
//                 <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
//                 <div className='flex text-xl font-medium leading-6 gap-x-3'>
//                     <div>$ 34.95</div>
//                     <div className='line-through'>34.95</div>
//                 </div>
//                 </div>
//             </div>

//             <div className='text-white'>
//                 <Image style={{
//                     maxHeight:250,
//                     minHeight:250,
//                     maxWidth:250,
//                     minWidth:250
//                  }} width={250} className='rounded-xl' height={250} src={iMan2} alt="" />
//                 <div className='flex flex-col mt-4 gap-y-3'>
//                 <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
//                 <div className='flex text-xl font-medium leading-6 gap-x-3'>
//                     <div>$ 34.95</div>
//                     <div className='line-through'>34.95</div>
//                 </div>
//                 </div>
//             </div>


//             <div className='text-white'>
//                 <Image style={{
//                     maxHeight:250,
//                     minHeight:250,
//                     maxWidth:250,
//                     minWidth:250
//                  }} width={250} className='rounded-xl' height={250} src={iMan3} alt="" />
//                 <div className='flex flex-col mt-4 gap-y-3'>
//                 <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
//                 <div className='flex text-xl font-medium leading-6 gap-x-3'>
//                     <div>$ 34.95</div>
//                     <div className='line-through'>34.95</div>
//                 </div>
//                 </div>
//             </div>


//             <div className='text-white'>
//                 <Image  style={{
//                     maxHeight:250,
//                     minHeight:250,
//                     maxWidth:250,
//                     minWidth:250
//                  }} width={250} className='rounded-xl' height={250} src={iMan4} alt="" />
//                 <div className='flex flex-col mt-4 gap-y-3'>
//                 <div className='text-base font-medium leading-5 text-white'>Army Green Active Short Sleeve</div>
//                 <div className='flex text-xl font-medium leading-6 gap-x-3'>
//                     <div>$ 34.95</div>
//                     <div className='line-through'>34.95</div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FutureProduct