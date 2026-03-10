import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Cpu,
    Layers,
    Globe,
    MapPin,
    Network,
    Eye,
    type LucideIcon,
} from 'lucide-react';

const standardItems: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: Cpu, title: 'Technology with discipline', description: 'We build systems that work reliably in the real world.' },
    { icon: Layers, title: 'Integrated engineering', description: 'Hardware and software designed to operate as one system.' },
    { icon: Globe, title: 'Global inspiration, local innovation', description: 'We learn from the world and adapt technology for Bangladesh.' },
    { icon: MapPin, title: 'Built for Bangladesh', description: 'Solutions designed around local infrastructure, behavior, and cost.' },
    { icon: Network, title: 'Ecosystem thinking', description: 'Independent systems connected to create lasting impact.' },
    { icon: Eye, title: 'Transparent execution', description: 'Clear processes, measurable results, and long-term accountability.' },
];

/* ──────────────────────────────────────────────
   DESKTOP — Standard Card
   ────────────────────────────────────────────── */
const StandardCard = ({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5%' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,35,58,0.08)] hover:border-primary/20"
        >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <h3
                className="text-[17px] font-semibold text-[#0d0925] dark:text-white tracking-tight mb-2"
                style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
            >
                {title}
            </h3>
            <p
                className="text-[14px] leading-[1.6] text-[#4e4a67] dark:text-foreground/60 font-medium"
                style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
            >
                {description}
            </p>
        </motion.div>
    );
};

/* ──────────────────────────────────────────────
   MOBILE — compact card
   ────────────────────────────────────────────── */
const MobileStandardCard = ({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5%' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 p-3 flex flex-col items-start"
        >
            <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                    <h3
                        className="text-[13px] font-semibold text-[#0d0925] dark:text-white tracking-tight mb-1 leading-snug"
                        style={{
                            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        {title}
                    </h3>
                    <p
                        className="text-[11px] leading-[1.4] text-[#4e4a67] dark:text-foreground/60 font-medium"
                        style={{
                            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopWhyWeAreUnique = () => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

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
                        The SOHUB{' '}
                        <span className="font-semibold text-primary">Standard</span>
                    </h2>
                    <p
                        className="text-[15px] md:text-[16px] leading-[1.7] text-[#4e4a67] dark:text-foreground/60 max-w-xl mx-auto font-medium mb-2"
                        style={{
                            fontFamily:
                                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        How we design, build, and operate technology.
                    </p>
                    <p
                        className="text-[14px] leading-[1.7] text-[#4e4a67]/70 dark:text-foreground/40 max-w-xl mx-auto font-medium italic"
                        style={{
                            fontFamily:
                                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        Because Bangladesh deserves systems that work.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-5">
                    {standardItems.map((item, i) => (
                        <StandardCard key={i} icon={item.icon} title={item.title} description={item.description} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileWhyWeAreUnique = () => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-5%' });

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
                        The SOHUB{' '}
                        <span className="font-semibold text-primary">Standard</span>
                    </h2>
                    <p
                        className="text-[13px] leading-[1.6] text-[#4e4a67] dark:text-foreground/60 font-medium px-2"
                        style={{
                            fontFamily:
                                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        How we design, build, and operate technology.
                    </p>
                    <p
                        className="text-[12px] leading-[1.6] text-[#4e4a67]/70 dark:text-foreground/40 font-medium italic mt-1 px-2"
                        style={{
                            fontFamily:
                                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        Because Bangladesh deserves systems that work.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-2 gap-3"
                >
                    {standardItems.map((item, i) => (
                        <MobileStandardCard key={i} icon={item.icon} title={item.title} description={item.description} index={i} />
                    ))}
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
