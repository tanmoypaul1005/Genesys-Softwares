import React from 'react'
import ShortSleeve from './ShortSleeve'
import Image from 'next/image'
import { iFutureSeries, iProduct1, iProduct2 } from '@/util/imageImports'

const NewArrival = () => {

    const products = [
        { imageSrc: iProduct1, imageHeight: 320, imageWidth: 320, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
        { imageSrc: iProduct2, imageHeight: 320, imageWidth: 320, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    ];

    return (
        <>
            <div className='all_padding bg-[rgb(246,245,245)]'>
                <div className='uppercase mb-1 md:mb-[48px] font-semibold text-2xl md:text-[70px] leading-[84px] text-[#060606]'>New arrival</div>
                <ShortSleeve />
            </div>

            <div className='flex flex-col items-center justify-between bg-white gap-y-5 md:flex-row all_padding'>
                <Image src={iFutureSeries} alt="" height={400} />

                <div className='flex flex-col gap-y-5 md:flex-row gap-x-6'>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            imageSrc={product.imageSrc}
                            imageHeight={product.imageHeight}
                            imageWidth={product.imageWidth}
                            title={product.title}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewArrival


const ProductCard = ({ imageSrc, imageHeight, imageWidth, title, price, originalPrice }) => {
    return (
        <div>
            <Image height={imageHeight} width={imageWidth} className='rounded-xl' src={imageSrc} alt={title} />
            <div className='flex flex-col mt-6 gap-y-3'>
                <div className='text-sm font-semibold leading-5'>{title}</div>
                <div className='flex font-medium text-[20px] leading-6'>
                    <div>${price}</div>
                    <div className='text-[#9B9B9B] px-3 line-through'>${originalPrice}</div>
                </div>
            </div>
        </div>
    );
};