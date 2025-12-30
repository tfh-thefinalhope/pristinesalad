"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    text: string;
    rating: number;
}

interface TestimonialsSectionProps {
    data: Testimonial[];
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
    if (!data || data.length === 0) return null;

    return (
        <section className="py-12 lg:py-24 bg-brand-light relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-brand-dark mb-4"
                    >
                        What Our Customers Say
                    </motion.h2>
                    <p className="text-xl text-gray-600">Stories from our happy healthy community</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-green/10 fill-current" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed italic">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green font-bold text-lg">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark">{item.name}</h4>
                                    <p className="text-xs text-brand-green uppercase tracking-wide font-semibold">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
