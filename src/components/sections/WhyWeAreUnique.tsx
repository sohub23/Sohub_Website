import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Cpu,
    Zap,
    GraduationCap,
    Globe,
    Wrench,
    Leaf,
    Briefcase,
    Layers,
    TrendingUp,
    Monitor,
    Lightbulb,
    Trophy,
    Headphones,
    BadgeDollarSign,
    ShieldCheck,
    MapPin,
    type LucideIcon,
} from 'lucide-react';

const uniqueItems: { icon: LucideIcon; label: string }[] = [
    { icon: Cpu, label: 'Most Modern Technology' },
    { icon: Zap, label: 'Young Energetic & Enthusiastic Team' },
    { icon: GraduationCap, label: 'Foreign Training and Degree' },
    { icon: Globe, label: 'Collaborate with Global Engineers' },
    { icon: Wrench, label: 'Customizable Solutions' },
    { icon: Leaf, label: 'Sustainable Solutions' },
    { icon: Briefcase, label: 'Industry Expertise' },
    { icon: Layers, label: 'Integrated Services' },
    { icon: TrendingUp, label: 'Scalability' },
    { icon: Monitor, label: 'Hardware & Software combine Work' },
    { icon: Lightbulb, label: 'Innovation' },
    { icon: Trophy, label: 'Successful Project' },
    { icon: Headphones, label: 'Customer Support' },
    { icon: BadgeDollarSign, label: 'Cost-Effective' },
    { icon: ShieldCheck, label: 'Quality Assurance' },
    { icon: MapPin, label: 'Global Reach' },
];

const CheckItem = ({ icon: Icon, label, index }: { icon: LucideIcon; label: string; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5%' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-primary/[0.04] cursor-default"
        >
            <Icon
                className="w-[18px] h-[18px] flex-shrink-0 text-primary transition-transform duration-200 group-hover:scale-110"
                strokeWidth={2}
            />
            <span
                className="text-[14px] md:text-[15px] text-[#0d0925] dark:text-white/90 font-medium tracking-tight"
                style={{
                    fontFamily:
                        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
            >
                {label}
            </span>
        </motion.div>
    );
};

export const WhyWeAreUnique = () => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

    // Split into two columns
    const midpoint = Math.ceil(uniqueItems.length / 2);
    const leftColumn = uniqueItems.slice(0, midpoint);
    const rightColumn = uniqueItems.slice(midpoint);

    return (
        <section className="py-20 md:py-28 bg-[#f8f9fa] dark:bg-zinc-950 relative overflow-hidden">
            <div className="container-main relative z-10">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 25 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl mx-auto text-center mb-12"
                >
                    <h2 className="text-[36px] md:text-[44px] font-normal tracking-tight text-[#0d0925] dark:text-white leading-[1.15] mb-5">
                        Why we are{' '}
                        <span className="font-semibold text-primary">Unique?</span>
                    </h2>
                    <p
                        className="text-[15px] md:text-[16px] leading-[1.7] text-[#4e4a67] dark:text-foreground/60 max-w-xl mx-auto font-medium"
                        style={{
                            fontFamily:
                                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        From our innovative products to our exceptional customer service,
                        we're dedicated to providing an unparalleled smart solution!
                    </p>
                </motion.div>

                {/* Checklist Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-[860px] mx-auto bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 py-6 px-4 md:px-10"
                    style={{
                        boxShadow: '0 8px 40px rgba(34, 35, 58, 0.08)',
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                        {/* Left Column */}
                        <div>
                            {leftColumn.map((item, i) => (
                                <CheckItem key={i} icon={item.icon} label={item.label} index={i} />
                            ))}
                        </div>

                        {/* Right Column */}
                        <div>
                            {rightColumn.map((item, i) => (
                                <CheckItem key={i + midpoint} icon={item.icon} label={item.label} index={i + midpoint} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
