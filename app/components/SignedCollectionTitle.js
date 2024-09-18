"use client"
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const SignedCollectionTitle = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className='uppercase font-medium text-4xl md:text-[50px] md:leading-[58px] bg-gradient-to-b from-[#DE2A2F] to-[#EF5256] text-transparent bg-clip-text'>
            <motion.div
                className='text-white'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                Patrick Bet-David
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
                Signed
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            >
                Collection
            </motion.div>
        </div>
    );
};

export default SignedCollectionTitle;