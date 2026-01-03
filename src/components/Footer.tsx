import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#1a2e1a] text-white pt-12 pb-6 font-sans">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Top Section: 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: INFORMATION */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">Information</h3>
                        <ul className="space-y-3 text-sm text-gray-300 font-light">
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Blogs</a></li>
                        </ul>
                    </div>

                    {/* Column 2: QUICK LINKS */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300 font-light">
                            <li><a href="/our-story" className="hover:text-brand-yellow transition-colors">Our Team</a></li>
                            <li><a href="/our-story" className="hover:text-brand-yellow transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Franchise Partner</a></li>
                            <li><a href="/contact" className="hover:text-brand-yellow transition-colors">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: OUR COMPANY */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">Our Company</h3>
                        <div className="space-y-4 text-sm text-gray-300 font-light leading-relaxed">
                            <p>
                                <span className="font-semibold text-white">Address:</span> Eklavya Marg, Samrat Enclave, Block L, Raj Nagar, Pitampura, Delhi, 110034
                            </p>
                            <p>
                                <span className="font-semibold text-white">Phone:</span> +91 84483 08305<br />
                                <span className="font-semibold text-white">Email:</span> prestinesaladsllp@gmail.com
                            </p>
                            <p>
                                <span className="font-semibold text-white">Hours:</span> 10:00 AM – 11:00 PM ( Mon – Sun )
                            </p>
                        </div>
                    </div>

                    {/* Column 4: NEWSLETTER (Replaces Other Brands) */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">Stay Updated</h3>
                        <p className="text-sm text-gray-300 font-light mb-4">Subscribe to get special offers and seasonal menu updates.</p>
                        <div className="flex flex-col gap-2">
                            <input type="email" placeholder="Enter your email" className="bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-yellow" />
                            <button className="bg-brand-green text-white font-bold text-sm px-4 py-2 rounded hover:bg-[#0a2f1c] hover:text-white transition-colors border-2 border-brand-green">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div className="flex justify-center mb-12">
                    <div className="text-center flex flex-col items-center">
                        <img src="/logo.png" alt="Pristine Salads Logo" className="w-20 h-20 object-contain mb-4 drop-shadow-lg" />
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-outfit">Pristine Salads</h1>
                        <p className="text-gray-400 mt-2 tracking-widest text-sm uppercase">Freshness Delivered</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-8 gap-6">

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/pristine.salad/?igsh=MXVqNXd0ZnI4MWttMw%3D%3D#" className="bg-white text-brand-dark p-2 rounded-full hover:bg-brand-yellow transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="bg-white text-brand-dark p-2 rounded-full hover:bg-brand-yellow transition-colors">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="bg-white text-brand-dark p-2 rounded-full hover:bg-brand-yellow transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-gray-400 text-center">
                        © 2025 Pristine Salads. All rights reserved.
                    </div>


                </div>
            </div>
        </footer>
    );
}
