"use client";

import { motion } from "framer-motion";

interface StorySectionProps {
    data: {
        title: string;
        content: string[];
        images: string[];
    };
}

export default function StorySection({ data }: StorySectionProps) {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8 leading-tight">
                            {data.title}
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600">
                            {data.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                        <button className="mt-8 bg-brand-green text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-darkGreen transition-colors">
                            ABOUT US
                        </button>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Using placeholders if images not found. 
                 The user images are generic so standard kitchen placeholders work nicely unless provided. */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop" alt="Kitchen" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="h-40 bg-gray-200 rounded-2xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1512485800893-e08219705667?q=80&w=2070&auto=format&fit=crop" alt="Salad Prep" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4 pt-12"
                        >
                            <div className="h-40 bg-gray-200 rounded-2xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1556910638-6cd11c107f5b?q=80&w=2070&auto=format&fit=crop" alt="Ambience" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1602881917760-737705400a30?q=80&w=2070&auto=format&fit=crop" alt="Happy Customer" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
