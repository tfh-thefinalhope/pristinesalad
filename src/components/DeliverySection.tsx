
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, MessageCircle } from "lucide-react";

export default function DeliverySection() {
    const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

    return (
        <section className="py-12 lg:py-16 bg-brand-light relative z-20">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* WhatsApp Card */}
                    <button
                        onClick={() => setShowWhatsAppModal(true)}
                        className="group relative overflow-hidden bg-white hover:bg-[#25D366]/5 border-2 border-[#25D366] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-4 cursor-pointer"
                    >
                        <div className="text-left flex items-center gap-3">
                            <MessageCircle className="w-10 h-10 text-[#25D366]" />
                            <div>
                                <h3 className="text-2xl font-black text-[#25D366]">WhatsApp</h3>
                                <p className="text-gray-500 text-sm group-hover:text-[#25D366] transition-colors">Direct Order & Offers</p>
                            </div>
                        </div>
                    </button>

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

            {/* Instruction Modal */}
            <AnimatePresence>
                {showWhatsAppModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowWhatsAppModal(false)}
                            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden"
                        >
                            <div className="bg-[#25D366] p-6 text-white text-center relative">
                                <button
                                    onClick={() => setShowWhatsAppModal(false)}
                                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                                >
                                    <X size={20} className="text-white" />
                                </button>
                                <MessageCircle size={48} className="mx-auto mb-3 text-white" />
                                <h3 className="text-2xl font-bold">Order on WhatsApp</h3>
                                <p className="text-green-50 opacity-90">Simple steps to get your fresh meal!</p>
                            </div>

                            <div className="p-8 space-y-6">
                                <ol className="space-y-6 relative border-l-2 border-dashed border-gray-200 ml-3">
                                    <li className="relative pl-8">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow-sm"></span>
                                        <h4 className="font-bold text-gray-900 text-lg">Explore Menu</h4>
                                        <p className="text-gray-500 text-sm">Browse our wide range of healthy salads and nutritious bowls.</p>
                                    </li>
                                    <li className="relative pl-8">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow-sm"></span>
                                        <h4 className="font-bold text-gray-900 text-lg">Select Items</h4>
                                        <p className="text-gray-500 text-sm">Add your favorite items to the cart using the "Add to Cart" button.</p>
                                    </li>
                                    <li className="relative pl-8">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#25D366] border-4 border-white shadow-sm"></span>
                                        <h4 className="font-bold text-gray-900 text-lg">Order on WhatsApp</h4>
                                        <p className="text-gray-500 text-sm">Click "Order Now" & then "Order on WhatsApp" to send your list instantly!</p>
                                    </li>
                                </ol>

                                <div className="pt-4">
                                    <Link
                                        to="/our-menu"
                                        onClick={() => setShowWhatsAppModal(false)}
                                        className="w-full py-3.5 bg-brand-green text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-darkGreen transition-all shadow-lg hover:shadow-brand-green/30"
                                    >
                                        Explore Menu & Order
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </section>
    );
}
