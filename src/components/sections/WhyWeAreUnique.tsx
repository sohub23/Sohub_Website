import { useRef, useState, useEffect } from 'react';
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

/* ──────────────────────────────────────────────
   SHARED — CheckItem (used by both versions)
   ────────────────────────────────────────────── */
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

/* ──────────────────────────────────────────────
   MOBILE — compact single column check item
   ────────────────────────────────────────────── */
const MobileCheckItem = ({ icon: Icon, label, index }: { icon: LucideIcon; label: string; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5%' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.3,
                delay: index * 0.03,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3 py-2.5 px-3"
        >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon
                    className="w-4 h-4 text-primary"
                    strokeWidth={2.2}
                />
            </div>
            <span
                className="text-[13px] text-[#0d0925] dark:text-white/90 font-medium"
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

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopWhyWeAreUnique = () => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

    // Split into two columns
    const midpoint = Math.ceil(uniqueItems.length / 2);
    const leftColumn = uniqueItems.slice(0, midpoint);
    const rightColumn = uniqueItems.slice(midpoint);

    return (
        <section className="py-20 bg-[#f8f9fa] dark:bg-zinc-950 relative overflow-hidden">
            <div className="container-main relative z-10">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 25 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl mx-auto text-center mb-12"
                >
                    <h2 className="text-[48px] font-normal tracking-tight text-[#0d0925] dark:text-white leading-[1.15] mb-5">
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

/* ──────────────────────────────────────────────
   MOBILE VERSION — compact, single-scroll list
   with icon badges, smaller text, tighter spacing
   ────────────────────────────────────────────── */
const MobileWhyWeAreUnique = () => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-5%' });

    // Split into two columns for mobile too (2-col grid)
    const midpoint = Math.ceil(uniqueItems.length / 2);
    const leftColumn = uniqueItems.slice(0, midpoint);
    const rightColumn = uniqueItems.slice(midpoint);

    return (
        <section className="py-10 bg-[#f8f9fa] dark:bg-zinc-950">
            <div className="px-4">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 16 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-6"
                >
                    <h2
                        className="text-[22px] font-medium tracking-tight text-[#0d0925] dark:text-white leading-[1.2] mb-3"
                        style={{
                            fontFamily:
                                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        Why we are{' '}
                        <span className="font-semibold text-primary">Unique?</span>
                    </h2>
                    <p
                        className="text-[13px] leading-[1.6] text-[#4e4a67] dark:text-foreground/60 font-medium px-2"
                        style={{
                            fontFamily:
                                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        From our innovative products to our exceptional customer service,
                        we're dedicated to providing an unparalleled smart solution!
                    </p>
                </motion.div>

                {/* Checklist — compact card */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 py-3 px-2"
                    style={{ boxShadow: '0 4px 20px rgba(34, 35, 58, 0.06)' }}
                >
                    <div className="grid grid-cols-2 gap-x-1">
                        <div>
                            {leftColumn.map((item, i) => (
                                <MobileCheckItem key={i} icon={item.icon} label={item.label} index={i} />
                            ))}
                        </div>
                        <div>
                            {rightColumn.map((item, i) => (
                                <MobileCheckItem key={i + midpoint} icon={item.icon} label={item.label} index={i + midpoint} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const WhyWeAreUnique = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileWhyWeAreUnique />;
    }

    return <DesktopWhyWeAreUnique />;
};
