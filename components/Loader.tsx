"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-xl transition-all duration-500">
            {/* Logo Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center mb-8 p-6 ring-4 ring-brand-green/20"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/logo.png"
                        alt="Pristine Salads Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </motion.div>

            {/* Vertical Line Loading Animation */}
            <div className="flex flex-col items-center gap-2">
                <motion.div
                    className="w-1 bg-brand-green rounded-full"
                    animate={{
                        height: ["20px", "60px", "20px"],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
}
