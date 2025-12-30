

import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { useState, useEffect } from "react";

interface OfferPopupProps {
    data: {
        show: boolean;
        title: string;
        description: string;
        code: string;
    };
}

export default function OfferPopup({ data }: OfferPopupProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds
        if (data.show) {
            const timer = setTimeout(() => setIsOpen(true), 3000);
            return () => clearTimeout(timer);
        }
    }, [data.show]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        className="bg-white rounded-3xl p-1 shadow-2xl max-w-md w-full relative overflow-hidden"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>

                        <div className="bg-gradient-to-br from-brand-green to-brand-darkGreen p-8 text-center text-white rounded-[1.3rem] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]" />

                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                                <Gift className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-3xl font-bold mb-2">{data.title}</h3>
                            <p className="text-green-100 mb-6">{data.description}</p>

                            <div className="bg-white text-brand-dark font-mono text-xl py-3 px-6 rounded-xl border-2 border-dashed border-gray-300 mb-6 inline-block select-all">
                                {data.code}
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-brand-yellow text-brand-dark font-bold py-3 rounded-full hover:bg-yellow-300 transition-colors"
                            >
                                CLAIM OFFER
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
