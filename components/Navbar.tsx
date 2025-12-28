"use client";

import { motion } from "framer-motion";
import { Menu, ShoppingBag, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { hideLoader } = useLoader();

    // Clear loader on navigation to static pages (Our Menu handles its own loading)
    useEffect(() => {
        if (pathname !== "/our-menu") {
            // Short delay to ensure transition feels smooth
            const timer = setTimeout(() => hideLoader(), 500);
            return () => clearTimeout(timer);
        }
    }, [pathname, hideLoader]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-brand-green/10 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shadow-md ring-4 ring-brand-green/20 group-hover:bg-brand-darkGreen group-hover:ring-brand-green/40 transition-all duration-300">
                            <img src="/logoNav.png" alt="Pristine Salads" className="w-full h-full object-contain p-1" />
                        </div>
                        <span className="text-2xl font-bold text-brand-dark tracking-tight">
                            Pristine<span className="text-brand-green">Salads</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {["Home", "Our Menu", "Our Story", "Gallery", "Contact"].map((item) => {
                            const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
                            const isActive = pathname === href;

                            return (
                                <a
                                    key={item}
                                    href={href}
                                    className={`relative font-medium transition-colors ${isActive ? "text-brand-green" : "text-brand-dark/80 hover:text-brand-green"
                                        }`}
                                >
                                    {item}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <button className="hidden md:flex items-center space-x-2 bg-brand-green hover:bg-[#0a2f1c] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-brand-green/30 transform hover:scale-105 border-2 border-brand-green">
                            <span>Order Now</span>
                            <ShoppingBag className="w-4 h-4" />
                        </button>

                        <button
                            className="md:hidden p-2 text-brand-dark"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden bg-white border-t border-gray-100"
                >
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {["Home", "Our Menu", "Our Story", "Gallery", "Contact"].map((item) => {
                            const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
                            const isActive = pathname === href;

                            return (
                                <a
                                    key={item}
                                    href={href}
                                    className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${isActive
                                        ? "bg-brand-green/10 text-brand-green"
                                        : "text-brand-dark hover:bg-brand-green/10 hover:text-brand-green"
                                        }`}
                                >
                                    {item}
                                </a>
                            );
                        })}
                        <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-brand-green hover:bg-[#0a2f1c] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 border-2 border-brand-green">
                            <span>Order Now</span>
                            <ShoppingBag className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
