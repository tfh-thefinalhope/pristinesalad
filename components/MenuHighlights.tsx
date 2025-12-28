"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useLoader } from "@/context/LoaderContext";

interface MenuItem {
    name: string;
    description: string;
    price: string;
    image: string;
    tags?: string[];
}

interface MenuCategory {
    title: string;
    items: MenuItem[];
}

const MENU_DATA: MenuCategory[] = [
    {
        title: "Signature Bowls",
        items: [
            {
                name: "Protein Packed Paneer",
                description: "Grilled paneer cubes, quinoa, mixed exotic greens, cherry tomatoes with lemon-herb dressing.",
                price: "₹349",
                image: "https://saladocafe.com/wp-content/uploads/2025/08/pannerr.webp"
            },
            {
                name: "Avocado Supergreen",
                description: "Fresh buttery avocado, kale, spinach, toasted seeds, and balsamic vinaigrette.",
                price: "₹399",
                image: "/menu/avocado.jpg"
            }
        ]
    },
    {
        title: "Exotic Fruit Salads",
        items: [
            {
                name: "Tropical Paradise",
                description: "Dragon fruit, kiwi, blueberries, and citrus dressing with chia seeds.",
                price: "₹299",
                image: "/menu/fruit.jpg"
            }
        ]
    }
];

export default function MenuHighlights() {
    const [currentImage, setCurrentImage] = useState(MENU_DATA[0].items[0].image);
    const [activeIdx, setActiveIdx] = useState(0);
    const { showLoader } = useLoader();

    const handleAddToCart = () => {
        showLoader(2000);
        // Add cart logic here later
    };

    return (
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-gray-900 mb-4">
                        Chef's <span className="text-brand-green">Highlights</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Handpicked favorites from our kitchen, crafted for nutrition and taste.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Showcase */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImage}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentImage}
                                        alt="Menu Highlights"
                                        fill
                                        className="object-cover object-[center_30%]"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Menu List */}
                    <div className="space-y-6">
                        {MENU_DATA[0].items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onMouseEnter={() => {
                                    setCurrentImage(item.image);
                                    setActiveIdx(idx);
                                }}
                                className={`group p-6 rounded-2xl transition-all duration-300 border border-transparent cursor-pointer ${idx === activeIdx ? "bg-brand-green/5 border-brand-green/20 shadow-lg scale-105" : "hover:bg-gray-50 hover:border-gray-200"
                                    }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 transition-colors ${idx === activeIdx ? "text-brand-green" : "text-gray-900"
                                            }`}>
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-lg font-bold text-gray-900">{item.price}</span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAddToCart();
                                                }}
                                                className="text-sm font-semibold text-brand-green flex items-center gap-1 hover:gap-2 transition-all"
                                            >
                                                Add to Cart <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
