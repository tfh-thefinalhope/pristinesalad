

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

interface MenuItem {
    name: string;
    price: string;
    description: string;
    image: string;
}

interface MenuCategory {
    category: string;
    items: MenuItem[];
}

import { useLoader } from "@/context/LoaderContext";
import { useCart } from "@/context/CartContext";
import content from "@/data/content.json";

export default function MenuPage() {
    const [menuData, setMenuData] = useState<MenuCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const { hideLoader, showLoader } = useLoader();
    const { addToCart } = useCart();

    useEffect(() => {
        // Simulating async load for better UX with loader
        const timer = setTimeout(() => {
            setMenuData(content.fullMenu || []);
            setLoading(false);
            hideLoader();
        }, 500);

        return () => clearTimeout(timer);
    }, [hideLoader]);

    if (loading) return <div className="min-h-screen bg-brand-light"></div>;

    return (
        <main className="min-h-screen bg-brand-light">
            <Navbar />

            <div className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Our Menu</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our wide range of healthy, nutritious, and delicious salads and bowls.
                    </p>
                </motion.div>

                <div className="space-y-12 lg:space-y-20">
                    {menuData.map((category, _catIdx) => (
                        <div key={category.category} id={category.category.replace(/\s+/g, '-').toLowerCase()}>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl md:text-3xl font-bold text-white bg-brand-green py-3 px-6 rounded-lg mb-8 shadow-md w-full"
                            >
                                {category.category}
                            </motion.h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                {category.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: itemIdx * 0.05 }}
                                        className="bg-white hover:bg-[#f2fce5] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] ring-1 ring-gray-100 hover:ring-brand-green/30 flex flex-col h-full"
                                    >
                                        <div className="h-40 overflow-hidden relative flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain p-1 transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full font-bold text-brand-dark text-sm shadow-sm">
                                                ₹{item.price}
                                            </div>
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors mb-2 line-clamp-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-500 text-xs leading-relaxed flex-grow line-clamp-2">
                                                {item.description}
                                            </p>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    showLoader(300);
                                                    addToCart({
                                                        id: item.name,
                                                        name: item.name,
                                                        price: `₹${item.price}`, // Adding symbol as it seems missing in data or inconsistent
                                                        image: item.image,
                                                    });
                                                }}
                                                className="mt-3 w-full py-2 rounded-lg border border-brand-green text-brand-green text-sm font-semibold transition-all group-hover:bg-brand-green group-hover:text-white hover:bg-[#0a2f1c] hover:border-brand-green hover:text-white"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main >
    );
}
