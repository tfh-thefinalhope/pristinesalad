"use client";

import { motion } from "framer-motion";

export default function DeliverySection() {
    return (
        <section className="py-12 lg:py-16 bg-brand-light">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold text-brand-dark mb-4">Order Online</h2>
                    <div className="h-1 w-20 bg-brand-green rounded-full mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Craving our wholesome meals? Order from your favorite delivery platforms and get fresh food delivered to your doorstep.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Zomato Card */}
                    <a
                        href="https://www.zomato.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-white hover:bg-[#Cb202d]/5 border-2 border-[#Cb202d] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-4"
                    >
                        <div className="text-left">
                            <h3 className="text-2xl font-black text-[#Cb202d] italic">zomato</h3>
                            <p className="text-gray-500 text-sm group-hover:text-[#Cb202d] transition-colors">Order now on Zomato</p>
                        </div>
                    </a>

                    {/* Swiggy Card */}
                    <a
                        href="https://www.swiggy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-white hover:bg-[#fc8019]/5 border-2 border-[#fc8019] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-4"
                    >
                        <div className="text-left">
                            <h3 className="text-2xl font-black text-[#fc8019]">SWIGGY</h3>
                            <p className="text-gray-500 text-sm group-hover:text-[#fc8019] transition-colors">Order now on Swiggy</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
