import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoader } from "@/context/LoaderContext";
import { useCart } from "@/context/CartContext";

import contentData from "@/data/content.json";

// Ensure type safety for imports
const chefHighlights = (contentData as any).chefHighlights || [];

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
        title: "Chef Highlights",
        items: chefHighlights
    }
];

export default function MenuHighlights() {
    const [currentImage, setCurrentImage] = useState(MENU_DATA[0].items[0].image);
    const [activeIdx, setActiveIdx] = useState(0);
    const { showLoader } = useLoader();
    const { addToCart } = useCart();

    const handleAddToCart = (item: MenuItem) => {
        showLoader(500); // reduced loader time for better UX
        addToCart({
            id: item.name, // using name as id for now
            name: item.name,
            price: item.price,
            image: item.image,
        });
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
                    {/* Image Showcase - Hidden on Mobile */}
                    <div className="hidden lg:flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gray-50 flex items-center justify-center border border-gray-100"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImage}
                                    initial={{ opacity: 0, scale: 1.2 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 p-4"
                                >
                                    <img
                                        src={currentImage}
                                        alt="Menu Highlights"
                                        className="object-contain w-full h-full drop-shadow-xl"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Price Tag Overlay */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-brand-dark shadow-lg border border-brand-green/20 z-10">
                                {MENU_DATA[0].items[activeIdx].price}
                            </div>
                        </motion.div>

                        {/* Product Name Under Image */}
                        <motion.div
                            key={activeIdx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 text-center"
                        >
                            <h3 className="text-2xl font-bold text-brand-green">
                                {MENU_DATA[0].items[activeIdx].name}
                            </h3>
                        </motion.div>
                    </div>

                    {/* Menu List */}
                    <div className="space-y-4 lg:space-y-6">
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
                                onClick={() => {
                                    setCurrentImage(item.image);
                                    setActiveIdx(idx);
                                }}
                                className={`group p-4 lg:p-6 rounded-2xl transition-all duration-300 border border-transparent cursor-pointer ${idx === activeIdx ? "bg-brand-green/5 border-brand-green/20 shadow-lg scale-[1.02]" : "hover:bg-gray-50 hover:border-gray-200"
                                    }`}
                            >
                                <div className="flex flex-col gap-4">
                                    {/* Mobile Only Inline Image */}
                                    {idx === activeIdx && (
                                        <div className="lg:hidden w-full h-48 bg-white rounded-xl overflow-hidden shadow-sm relative mb-2">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain p-2"
                                            />
                                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full font-bold text-brand-dark text-xs shadow-md border border-brand-green/20">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}

                                    <div className="w-full">
                                        <h3 className={`text-xl font-bold mb-2 transition-colors ${idx === activeIdx ? "text-brand-green" : "text-gray-900"
                                            }`}>
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-gray-900">{item.price}</span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAddToCart(item);
                                                }}
                                                className="text-sm font-semibold text-brand-green flex items-center gap-1 hover:gap-2 transition-all hover:text-[#0a2f1c]"
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

                {/* View Full Menu Button - Centered on Page */}
                <div className="pt-12 flex justify-center w-full">
                    <Link
                        to="/our-menu"
                        className="flex items-center justify-center w-full max-w-2xl py-4 bg-brand-green text-white rounded-full font-bold text-lg hover:bg-[#0a2f1c] transition-all duration-300 shadow-xl hover:shadow-brand-green/30 uppercase tracking-widest transform hover:scale-[1.02] border-2 border-brand-green"
                    >
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}
