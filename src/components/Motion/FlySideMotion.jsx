import React from 'react';
import { motion } from "motion/react"

const FlySideMotion = ({ children, index }) => {
    const fromDirection = index % 2 === 0 ? -100 : 100;
    return (
        <motion.div
            initial={{ opacity: 0, x: fromDirection }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default FlySideMotion;