import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Code2, GraduationCap, Handshake } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const audiences = [
    {
        icon: Briefcase,
        title: "Businesses",
        desc: "Communication, operations, automation, reliability."
    },
    {
        icon: Users,
        title: "Consumers",
        desc: "Access, convenience, quality of life."
    },
    {
        icon: Code2,
        title: "Builders",
        desc: "Tools, platforms, documentation, open learning."
    },
    {
        icon: GraduationCap,
        title: "Teams & Graduates",
        desc: "Ownership, skills, measurable growth."
    },
    {
        icon: Handshake,
        title: "Partners",
        desc: "Pilots, integration, local execution."
    }
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — exact original, untouched
   ────────────────────────────────────────────── */
const DesktopAudience = () => {
    return (
        <section id="audience" className="py-24 bg-white relative">
            <div className="container-main">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-[48px] font-normal tracking-tight text-foreground mb-4">
                            Built for people who want real progress.
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {audiences.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="p-8 rounded-3xl bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
                                <p className="text-foreground-muted mt-auto">{item.desc}</p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — clean, stacked list matching theme
   ────────────────────────────────────────────── */
const MobileAudienceItem = ({
    item,
    index
}: {
    item: typeof audiences[0];
    index: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-4 p-5 mb-3 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
        >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 text-primary">
                <item.icon className="w-6 h-6" />
            </div>
            <div>
                <h3
                    className="text-[17px] font-medium text-foreground mb-1"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                    {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-foreground-muted">
                    {item.desc}
                </p>
            </div>
        </motion.div>
    );
};

const MobileAudience = () => {
    return (
        <section id="audience-mobile" className="py-16 bg-[#fafafa] relative px-5">
            <div className="text-center mb-10">
                <h2
                    className="text-[28px] leading-[1.2] font-normal tracking-tight text-foreground mb-2"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                    Built for people who want real progress.
                </h2>
            </div>

            <div className="flex flex-col">
                {audiences.map((item, index) => (
                    <MobileAudienceItem key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const Audience = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileAudience />;
    }

    return <DesktopAudience />;
};
