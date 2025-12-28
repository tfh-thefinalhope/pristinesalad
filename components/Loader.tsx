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
                className="relative w-44 h-44 md:w-52 md:h-52 bg-white rounded-full shadow-2xl flex items-center justify-center mb-8 p-4 ring-4 ring-brand-green/20 overflow-hidden"
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
            <div className="flex items-center gap-1.5 mt-4">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 bg-brand-green rounded-full"
                        initial={{ height: "12px", opacity: 0.5 }}
                        animate={{
                            height: ["12px", "32px", "12px"],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
