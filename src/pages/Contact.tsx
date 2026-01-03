import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
// Reuse the Map component but make it full width here maybe, or standard
import MapSection from "@/components/MapSection"; // Static import is fine for Vite, or lazy if needed

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="pt-28 pb-10 px-4 max-w-7xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-brand-dark mb-4"
                >
                    Get in Touch
                </motion.h1>
                <p className="text-xl text-gray-600">We'd love to hear from you. Queries, feedback, or catering requests.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="bg-brand-light p-8 rounded-3xl space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-brand-dark">Visit Us</h3>
                                <p className="text-gray-600">Eklavya Marg, Samrat Enclave, Block L, Raj Nagar, Pitampura, Delhi, 110034</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-brand-dark">Call Us</h3>
                                <p className="text-gray-600">+91 84483 08305</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-brand-dark">Email Us</h3>
                                <p className="text-gray-600">prestinesaladsllp@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-brand-dark">Opening Hours</h3>
                                <p className="text-gray-600">Mon - Sun: 10:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const name = formData.get("name") as string;
                        const phone = formData.get("phone") as string;
                        const email = formData.get("email") as string;
                        const message = formData.get("message") as string;

                        if (!name || !phone || !email || !message) {
                            alert("Please fill in all fields.");
                            return;
                        }

                        const whatsappMessage = `*New Contact Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
                        const encodedMessage = encodeURIComponent(whatsappMessage);
                        window.open(`https://wa.me/918448308305?text=${encodedMessage}`, '_blank');
                    }}
                >
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                                <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                                <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="Your Phone" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                            <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                            <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-green text-white font-bold py-4 rounded-xl hover:bg-brand-darkGreen transition-colors shadow-lg shadow-brand-green/30">
                            Send Message
                        </button>
                    </div>
                </motion.form>

            </div>
            <MapSection />
        </main>
    );
}
