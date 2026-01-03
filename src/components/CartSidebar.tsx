import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CartSidebar() {
    const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, totalAmount } = useCart();
    const location = useLocation();

    // Close sidebar on route change
    useEffect(() => {
        if (isCartOpen) {
            toggleCart();
        }
    }, [location.pathname]);

    const handleWhatsAppOrder = () => {
        if (cart.length === 0) return;

        let message = "Hi, I would like to order:\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - Qty: ${item.quantity}\n`;
        });
        message += `\nTotal: ₹${totalAmount}`;

        // Replace with actual phone number
        const phoneNumber = "918448308305"; // Found in footer/contact usually, using a placeholder or one found nearby if any
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-brand-light">
                            <h2 className="text-2xl font-bold font-outfit text-brand-dark flex items-center gap-2">
                                <ShoppingBag className="text-brand-green" />
                                Your Order
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-white rounded-full transition-colors"
                            >
                                <X className="text-gray-500" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                                        <ShoppingBag size={40} className="text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Your cart is empty</h3>
                                    <p className="text-gray-500 max-w-xs">
                                        Looks like you haven't added anything to your cart yet.
                                    </p>
                                    <Link
                                        to="/our-menu"
                                        onClick={toggleCart}
                                        className="px-8 py-3 bg-brand-green text-white rounded-full font-bold hover:bg-brand-darkGreen transition-all shadow-lg hover:shadow-brand-green/30"
                                    >
                                        Explore Menu
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <div className="bg-brand-green/5 p-4 rounded-xl border border-brand-green/10 mb-6 flex flex-col items-center gap-3">
                                        <p className="text-brand-dark font-medium text-sm text-center">
                                            🎉 Great choice! Wanna add some more delicious items?
                                        </p>
                                        <Link
                                            to="/our-menu"
                                            onClick={toggleCart}
                                            className="text-xs font-bold text-brand-green border border-brand-green px-4 py-2 rounded-full hover:bg-brand-green hover:text-white transition-all uppercase tracking-wide"
                                        >
                                            Add More Items
                                        </Link>
                                    </div>

                                    {cart.map((item) => (
                                        <motion.div
                                            layout
                                            key={item.id}
                                            className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                                        >
                                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-gray-400 hover:text-red-500"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-brand-green">{item.price}</span>
                                                    <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white text-gray-600 transition-colors"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white text-gray-600 transition-colors"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-white">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-500">Total Amount</span>
                                    <span className="text-2xl font-bold text-gray-900">₹{totalAmount}</span>
                                </div>
                                <button
                                    onClick={handleWhatsAppOrder}
                                    className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-[#25D366]/30 flex items-center justify-center gap-2"
                                >
                                    Order on WhatsApp
                                    <ArrowRight size={20} />
                                </button>
                                <p className="text-xs text-gray-400 text-center mt-4">
                                    You will be redirected to WhatsApp to send your order.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
