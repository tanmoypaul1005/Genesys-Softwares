"use client"
import { iBeg1, iMultiBook, iMultiCap, iTShirt1, iTShirt2, iWaterBottle } from '@/util/imageImports'
import Image from 'next/image'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LaptopCollection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            className='items-end justify-between hidden md:flex gap-x-10'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <motion.div
                className='relative w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Image style={{
                    maxHeight: 310,
                    minHeight: 310,
                    maxWidth: "100%",
                    minWidth: "100%"
                }}
                    src={iBeg1}
                    alt=""
                    className='opacity-75 rounded-xl'
                />
                <div className='absolute w-full bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>THE BOSS COLLECTION</div>
            </motion.div>

            <motion.div
                className='relative flex flex-col w-full gap-y-4'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className='relative'>
                        <Image
                            style={{
                                maxHeight: 200,
                                minHeight: 200,
                                maxWidth: "100%",
                                minWidth: "100%"
                            }}
                            src={iMultiCap} className='object-cover opacity-75 rounded-xl' alt="" />
                        <div className='absolute w-full bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>HEADW EAR</div>
                    </div>
                </motion.div>


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className='relative'>
                        <Image
                            style={{
                                maxHeight: 200,
                                minHeight: 200,
                                maxWidth: "100%",
                                minWidth: "100%"
                            }}
                            className='opacity-75 rounded-xl'
                            src={iMultiBook} alt="" />
                        <div className='absolute w-full bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>VALUE BOOKS</div>
                    </div>
                </motion.div>

            </motion.div>

            <motion.div
                className='relative w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Image
                    style={{
                        maxHeight: 520,
                        minHeight: 520,
                        maxWidth: "100%",
                        minWidth: "100%"
                    }} className='object-cover opacity-75 rounded-xl'
                    src={iWaterBottle} alt="" />
                <div className='absolute w-full bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>Accessories</div>
            </motion.div>

            <motion.div
                className='flex flex-col w-full gap-y-5'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className='relative'>
                        <Image
                            style={{
                                maxHeight: 320,
                                minHeight: 320,
                                maxWidth: "100%",
                                minWidth: "100%"
                            }}
                            className='opacity-75 rounded-xl'
                            src={iTShirt1} alt=""
                        />
                        <div className='absolute w-full bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>The Future Looks Bright Collection</div>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <div className='relative'>
                        <Image
                            style={{
                                maxHeight: 320,
                                minHeight: 320,
                                maxWidth: "100%",
                                minWidth: "100%"
                            }}
                            className='opacity-75 rounded-xl'
                            src={iTShirt2} alt="" />
                        <div className='absolute w-[150px] bottom-4 left-4 text-white font-fold text-[32px] leading-[38px]'>TOPS</div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default LaptopCollection

