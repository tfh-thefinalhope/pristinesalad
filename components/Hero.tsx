"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLoader } from "@/context/LoaderContext";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { showLoader } = useLoader();

    const slides = [
        {
            topTag: "100% Vegetarian Cloud Kitchen",
            title: <>FRESH. <span className="text-brand-green">CRUNCHY.</span> <br /> HEALTHY.</>,
            subtitle: <>Nourishing your body with <br className="hidden lg:block" /> nature's finest ingredients.</>,
            image: "https://saladocafe.com/wp-content/uploads/2025/08/pannerr.webp"
        },
        {
            topTag: "Protein Packed Bowls",
            title: <>POWER. <span className="text-brand-green">ENERGY.</span> <br /> VITALITY.</>,
            subtitle: <>Fuel your day with our <br className="hidden lg:block" /> high-protein superfood bowls.</>,
            image: "/hero-slide-2.png"
        },
        {
            topTag: "Exotic Green Salads",
            title: <>PURE. <span className="text-brand-green">ORGANIC.</span> <br /> DELICIOUS.</>,
            subtitle: <>Experience the taste of <br className="hidden lg:block" /> farm-fresh exotic greens.</>,
            image: "/hero-slide-3.png"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleActionClick = (e: React.MouseEvent) => {
        showLoader(2000);
    };

    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0a2f1c] pt-20">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b23]/90 to-[#14532D]/90 z-10 pointer-events-none" />

            {/* Background Image Carousel */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#8fc73e]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#8fc73e]/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

                    {/* Text Content */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={`text-${currentSlide}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6 md:space-y-4 px-6 lg:pl-10 lg:pr-0 relative z-20 text-center lg:text-left"
                        >
                            <h3 className="font-poppins text-brand-green text-xl md:text-2xl lg:text-3xl font-normal leading-tight">
                                {slides[currentSlide].topTag}
                            </h3>

                            <div className="h-2" />

                            <h1 className="font-outfit font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide uppercase">
                                {slides[currentSlide].title}
                            </h1>

                            <div className="h-4" />

                            <h2 className="font-outfit font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight max-w-xl mx-auto lg:mx-0">
                                {slides[currentSlide].subtitle}
                            </h2>

                            <div className="h-6 lg:h-8" />

                            <a
                                href="/contact"
                                onClick={handleActionClick}
                                className="inline-block bg-brand-green text-[#192901] px-12 py-4 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-brand-green/90 transition-all duration-300 shadow-lg shadow-green-900/20 transform hover:scale-105 w-full sm:w-auto"
                            >
                                Contact Now
                            </a>
                        </motion.div>
                    </AnimatePresence>

                    {/* Hero Image */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={`img-${currentSlide}`}
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 50, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-[500px] lg:h-[720px] w-full flex items-center justify-center lg:justify-end"
                        >
                            <div className="relative w-full h-full max-w-[727px]">
                                <Image
                                    src={slides[currentSlide].image}
                                    alt="Fresh Salad"
                                    fill
                                    className="object-contain object-right drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-brand-green w-8" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
