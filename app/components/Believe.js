"use client"
import { motion, useInView } from 'framer-motion';
import { iBgLogo, iGoldenChess, iMan2, iWhatWeBelieveText } from '@/util/imageImports'
import Image from 'next/image'
import React, { useRef } from 'react'

const Believe = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const beliefs = [
        {
            title: 'Leadership',
            description: 'is vital from the top of corporations to the military to small businesses to parents to students. We all can be leaders.',
        },
        {
            title: 'Capitalism',
            description: 'are heroes who should be respected and celebrated for taking risks, launching products, creating jobs and building companies.',
        },
        {
            title: 'Capitalism',
            description: 'is a critically important economic system that has advanced society and the quality of life we enjoy today.',
        },
        {
            title: 'Debate',
            description: 'is welcome and necessary as it can lead to consensus, epiphanies, and expose the truth. When a clash of ideas, often emotionally-charged, evolves into civil debate and objective processing of issues, everyone wins. Free speech is critical to productive debate.',
        },
    ];

    return (
        <motion.div
            ref={ref}
            className='relative grid grid-cols-1 md:grid-cols-2 gap-x-10 all_padding bg-gradient-custom'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >

            <div>
                <div className='hidden w-full h-full md:block'>
                    <Image className="w-full h-full" width={500} height={900} src={iMan2} alt="Man Image" />
                </div>
            </div>
            <motion.div
                className='flex flex-col gap-10 mt-28 md:mt-20'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
                {beliefs.map((belief, index) => (
                    <div key={index} className='text-white w-[700px] text-medium border-b-[0.5px] border-white pb-6'>
                        <span className='text-2xl leading-9'>{belief.title}</span>
                        <span className='text-base'>{` ${belief.description}`}</span>
                    </div>
                ))}
            </motion.div>
            <div className='absolute bottom-0 right-0'>
                <Image src={iGoldenChess} height={200} alt="Golden Chess" />
            </div>
            <div className='absolute top-0 right-0'>
                <Image height={600} src={iBgLogo} alt="Background Logo" />
            </div>
            <div className='absolute transform -translate-x-1/2 top-10 left-1/2'>
                <Image src={iWhatWeBelieveText} height={150} alt="What We Believe Text" />
            </div>

        </motion.div>
    )
}

export default Believe