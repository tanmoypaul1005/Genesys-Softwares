"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { iPaHomeHero } from '@/util/imageImports';

const PaHomeHero = () => {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
            <motion.div
                ref={ref}
                className=''
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <Image
                    className='w-fit h-[220px] md:h-[500px]'
                    src={iPaHomeHero}
                    alt=""
                    height={500} // Ensure the width is set to maintain aspect ratio
                />
            </motion.div>
    )
}

export default PaHomeHero