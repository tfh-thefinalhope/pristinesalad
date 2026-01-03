

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AboutSectionProps {
    data: {
        title: string;
        content: string[];
        images: string[];
    };
}

export default function AboutSection({ data }: AboutSectionProps) {
    return (
        <section className="py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-12 lg:mb-16">
                    <h2 className="text-4xl font-bold text-brand-dark tracking-tight text-center">
                        About Us
                    </h2>
                    <div className="h-1 w-20 bg-brand-green rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <img src="/images/about-1.png" alt="Fresh Ingredients" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                                <img src="/images/about-3.png" alt="Healthy Lifestyle" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                            </div>
                            <div className="space-y-4">
                                <img src="/images/about-2.png" alt="Bowl of Salad" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                                <img src="/images/about-4.png" alt="Chef Making Salad" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left px-4 lg:px-0"
                    >
                        <img src="/logo.png" alt="Pristine Salads Logo" className="w-16 h-16 object-contain mb-6 mx-auto lg:mx-0" />
                        <h3 className="text-2xl font-semibold text-brand-green mb-6">
                            {data.title}
                        </h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                            {data.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-8 flex gap-8 justify-center lg:justify-start">
                            <div>
                                <h4 className="text-2xl font-bold text-brand-dark">5000+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Customers</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-brand-dark">100%</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Organic Sourced</p>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-center lg:justify-start">
                            <Link to="/our-story" className="text-brand-green font-bold hover:text-brand-dark transition-colors inline-flex items-center gap-2">
                                Read Full Story
                                <span className="text-xl">→</span>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
