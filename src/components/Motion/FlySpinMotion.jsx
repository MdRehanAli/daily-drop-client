import React from 'react';
import { motion } from "motion/react"

const FlySpinSection = ({ children, index }) => {
    const fromDirection = index % 2 === 0 ? -100 : 100;

    return (
        <motion.div
            initial={{ opacity: 0, x: fromDirection, rotate: -90 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.2 }}  // repeats when re-entered on scroll
            className="my-20"
        >
            {children}
        </motion.div>
    );
};

export default FlySpinSection;