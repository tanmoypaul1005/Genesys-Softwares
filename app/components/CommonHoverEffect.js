"use client"
import React from 'react'
import { motion } from 'framer-motion';

const CommonHoverEffect = (props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {props.children}
        </motion.div>
    )
}

export default CommonHoverEffect