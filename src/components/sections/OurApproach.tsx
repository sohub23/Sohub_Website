import { AnimatedSection } from '../ui/AnimatedSection';
import { Eye, Sliders, Play, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
    {
        number: "01",
        icon: Eye,
        title: "Observe",
        desc: "We don't wait for reports. We look for the normalized problems people live with.",
        color: "#4285F4", // Blue
        bgLight: "#e8f0fe"
    },
    {
        number: "02",
        icon: Sliders,
        title: "Normalize",
        desc: "We adapt global technology to fit Bangladesh's infrastructure, cost, and habits.",
        color: "#EA4335", // Red
        bgLight: "#fce8e6"
    },
    {
        number: "03",
        icon: Play,
        title: "Execute",
        desc: "We build systems that run in the real world — transparent, reliable, and scalable.",
        color: "#34A853", // Green
        bgLight: "#e6f4ea"
    },
    {
        number: "04",
        icon: TrendingUp,
        title: "Evolve",
        desc: "We don't stop at launch. We measure, improve, and raise the standard continuously.",
        color: "#FBBC05", // Yellow
        bgLight: "#fef7e0"
    }
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% untouched
   ────────────────────────────────────────────── */
const DesktopOurApproach = () => {
    return (
        <section id="approach" className="section-spacing bg-secondary/30 relative overflow-hidden">
            <div className="container-main">
                <AnimatedSection>
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <h2 className="text-[48px] font-normal tracking-tight text-foreground mb-6">
                            From reality to results.
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                            <div className="h-full card-google p-6 flex flex-col items-start relative group overflow-hidden">
                                {/* Colored Number */}
                                <div className="text-4xl font-bold text-primary/10 group-hover:text-primary transition-colors duration-300 mb-4 select-none">
                                    {step.number}
                                </div>

                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary relative z-10 transition-transform group-hover:scale-110">
                                    <step.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-heading-3 mb-2 relative z-10">{step.title}</h3>
                                <p className="text-body-sm relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — elegant vertical timeline
   ────────────────────────────────────────────── */
const MobileStepItem = ({
    step,
    index,
    isLast
}: {
    step: typeof steps[0];
    index: number;
    isLast: boolean;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div className="relative flex gap-5">
            {/* Timeline connector line */}
            {!isLast && (
                <div
                    className="absolute left-6 top-14 bottom-[-16px] w-[2px] bg-gray-100 rounded-full"
                    aria-hidden="true"
                />
            )}

            {/* Icon/Number Bubble */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative z-10 shrink-0 mt-1"
            >
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full shadow-sm flex items-center justify-center text-foreground-muted relative overflow-hidden">
                    <div
                        className="absolute inset-x-0 bottom-0 h-[2px] opacity-60"
                        style={{ backgroundColor: step.color }}
                    />
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                className="flex-1 pb-8"
            >
                <div className="bg-white/80 p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/5">
                    <div className="flex items-center gap-2 mb-2">
                        <span
                            className="text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-md"
                            style={{ backgroundColor: step.bgLight, color: step.color }}
                        >
                            {step.number}
                        </span>
                        <h3
                            className="text-[17px] font-medium text-foreground tracking-tight"
                            style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                        >
                            {step.title}
                        </h3>
                    </div>
                    <p className="text-[14px] leading-relaxed text-foreground-muted">
                        {step.desc}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const MobileOurApproach = () => {
    return (
        <section id="approach-mobile" className="py-16 bg-[#fafafa] relative overflow-hidden px-5">
            <div className="text-left mb-10 max-w-sm">
                <p className="text-[12px] font-bold tracking-widest text-[#fb8a09] uppercase mb-2">Our Process</p>
                <h2
                    className="text-[28px] leading-[1.2] font-normal tracking-tight text-foreground"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                    From reality to results.
                </h2>
            </div>

            <div className="relative pt-2">
                {steps.map((step, index) => (
                    <MobileStepItem
                        key={index}
                        step={step}
                        index={index}
                        isLast={index === steps.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const OurApproach = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileOurApproach />;
    }

    return <DesktopOurApproach />;
};
