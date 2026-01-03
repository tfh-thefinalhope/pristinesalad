import { motion } from "framer-motion";
// Wait, I promised to replace next/image. I should stick to <img />
import Navbar from "@/components/Navbar";

export default function OurStory() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section of Story */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670"
                        alt="Our Story Background"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-outfit mb-4"
                    >
                        Our Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
                    >
                        From a small home kitchen to India's fastest growing salad brand.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-brand-dark mb-6">Born from Passion</h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
                            <p>
                                Pristine Salads was founded with a simple yet powerful belief:
                                <span className="font-semibold text-brand-green"> Healthy food should be delicious.</span>
                            </p>
                            <p>
                                It all started when our founder, struggling to find fresh, hygienic, and tasty salad options in the city, decided to make their own. What began as a personal meal prep quickly turned into orders from friends, neighbors, and eventually, the whole city.
                            </p>
                            <p>
                                Today, we source our vegetables directly from local organic farms every morning. Our dressings are made in-house, zero preservatives, just pure flavor. We are not just selling salads; we are selling a lifestyle change.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574"
                            alt="Fresh Ingredients"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1607301406259-dfb186e15de8?q=80&w=2622"
                            alt="Chef Cooking"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Stats / Trust */}
            <section className="bg-brand-green py-16 text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "50k+", label: "Happy Customers" },
                        { num: "100%", label: "Organic Sourced" },
                        { num: "15+", label: "Award Winning Recipes" },
                        { num: "30min", label: "Fast Delivery" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="text-5xl font-bold mb-2">{stat.num}</div>
                            <div className="text-white/80 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold text-brand-dark mb-4">Meet Our Team</h2>
                        <div className="h-1 w-20 bg-brand-green rounded-full mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                            The passionate individuals working tirelessly to brings the freshest salads to your table.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Arjun Mehta", role: "Head Chef", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2668" },
                            { name: "Priya Sharma", role: "Nutritionist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670" },
                            { name: "Rohan Verma", role: "Sourcing Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670" },
                            { name: "Ananya Gupta", role: "Customer Experience", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576" }
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h3>
                                    <p className="text-brand-green font-medium text-sm uppercase tracking-wider">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
