import { useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, MessageCircle, BarChart3, Shield, Layout, Home, Film, Zap, Globe } from 'lucide-react';

const categories = ["All", "For Businesses", "For Consumers", "For Builders", "For Teams"];

const products = [
    {
        id: "connect",
        name: "CONNECT",
        desc: "Communication without barriers (PBX, C2C, HotScan).",
        category: ["For Businesses", "For Consumers"],
        icon: MessageCircle,
        color: "bg-blue-500"
    },
    {
        id: "omama",
        name: "O-MAMA",
        desc: "Hygienic food access where people work and study.",
        category: ["For Consumers"],
        icon: Home,
        color: "bg-orange-500"
    },
    {
        id: "emp",
        name: "EMP",
        desc: "Execution & accountability operating system.",
        category: ["For Businesses", "For Teams"],
        icon: BarChart3,
        color: "bg-purple-500"
    },
    {
        id: "tolpar",
        name: "TOLPAR",
        desc: "The SOHUB superapp connecting people, systems, content.",
        category: ["For Consumers"],
        icon: Smartphone,
        color: "bg-green-500"
    },
    {
        id: "ai",
        name: "AI",
        desc: "Automation that increases speed and quality.",
        category: ["For Businesses", "For Builders"],
        icon: Zap,
        color: "bg-pink-500"
    },
    {
        id: "protect",
        name: "PROTECT",
        desc: "Safety, reliability, and trust initiatives.",
        category: ["For Consumers", "For Businesses"],
        icon: Shield,
        color: "bg-red-500"
    },
    {
        id: "home",
        name: "HOME & CONTROLS",
        desc: "Smart living and control systems.",
        category: ["For Consumers"],
        icon: Home,
        color: "bg-indigo-500"
    },
    {
        id: "ximpul",
        name: "XIMPUL",
        desc: "Product experience and commerce standards.",
        category: ["For Businesses", "For Builders"],
        icon: Layout,
        color: "bg-cyan-500"
    },
    {
        id: "filmic",
        name: "FILMIC STATION",
        desc: "Content and community to move culture.",
        category: ["For Consumers"],
        icon: Film,
        color: "bg-yellow-500"
    },
    {
        id: "smart-home",
        name: "SMART HOME",
        desc: "Intelligent automation for modern living spaces.",
        category: ["For Consumers"],
        icon: Home,
        color: "bg-teal-500"
    }
];

export const EcosystemExplorer = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category.includes(activeCategory));

    return (
        <section id="initiatives" className="py-24 bg-secondary/10">
            <div className="container-main">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] font-normal tracking-tight text-foreground mb-4">
                            One ecosystem. Many focused systems.
                        </h2>
                        <p className="text-xl text-foreground-muted">
                            Explore what matters to you. Go deep — at your pace.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white text-foreground-muted hover:bg-secondary hover:text-foreground'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={product.id}
                                className="group bg-white rounded-3xl p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full"
                            >
                                <div className={`w-12 h-12 ${product.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 text-foreground group-hover:scale-110 transition-transform`}>
                                    <product.icon className={`w-6 h-6 stroke-current ${product.color.replace('bg-', 'text-')}`} />
                                </div>

                                <h3 className="text-xl font-medium text-foreground mb-2">{product.name}</h3>
                                <p className="text-foreground-muted mb-8 leading-relaxed flex-grow">
                                    {product.desc}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all cursor-pointer">
                                    <span>Explore</span>
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
