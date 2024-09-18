"use client"

import React, { useRef } from 'react';
import ShortSleeve from './ShortSleeve';
import Image from 'next/image';
import { iFutureSeries, iProduct1, iProduct2 } from '@/util/imageImports';
import { motion, useInView } from 'framer-motion';

const NewArrival = () => {
    const products = [
        { imageSrc: iProduct1, imageHeight: 320, imageWidth: 320, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
        { imageSrc: iProduct2, imageHeight: 320, imageWidth: 320, title: 'Army Green Active Short Sleeve', price: '34.95', originalPrice: '34.95' },
    ];

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });

    return (
        <>
            <motion.div
                ref={ref1}
                className='all_padding bg-[rgb(246,245,245)]'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className='uppercase mb-1 md:mb-[48px] font-semibold text-2xl md:text-[70px] leading-[84px] text-[#060606]'>New arrival</div>
                <ShortSleeve />
            </motion.div>

            <motion.div
                ref={ref2}
                className='flex flex-col items-center justify-between bg-white gap-y-5 md:flex-row all_padding'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
                <Image src={iFutureSeries} alt="" height={400} />

                <motion.div
                    className='flex flex-col gap-y-5 md:flex-row gap-x-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                >
                    {products?.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ProductCard
                                imageSrc={product.imageSrc}
                                imageHeight={product.imageHeight}
                                imageWidth={product.imageWidth}
                                title={product.title}
                                price={product.price}
                                originalPrice={product.originalPrice}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
};

export default NewArrival;


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
