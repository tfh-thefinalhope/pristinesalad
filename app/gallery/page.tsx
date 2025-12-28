"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const galleryImages = [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680",
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2544",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2584",
    "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2670",
    "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887",
    "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2517",
    "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?q=80&w=2622"
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-brand-light">
            <Navbar />

            <div className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold text-brand-dark mb-4">Our Gallery</h1>
                    <p className="text-xl text-gray-600">A visual feast of our finest creations.</p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryImages.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Gallery Item ${idx}`}
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 block"
                            />

                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
