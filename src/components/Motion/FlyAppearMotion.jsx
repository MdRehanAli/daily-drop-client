import React from 'react';
import { motion } from "motion/react"

const FlyAppearMotion = ({ children, index }) => {
    // const fromDirection = index % 2 === 0 ? -100 : 100
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default FlyAppearMotion;