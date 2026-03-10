import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Initiative {
    id: string;
    name: string;
    description: string;
    logo: string;
    href: string | null;
    order: number;
    isActive: boolean;
}

const BASE_URL = 'https://sohub.netlify.app';

/* ──────────────────────────────────────────────
   DESKTOP VERSION
   ────────────────────────────────────────────── */
const DesktopOurInitiatives = ({ initiatives }: { initiatives: Initiative[] }) => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

    return (
        <section id="initiatives" className="py-20 bg-[#f8f9fa] relative overflow-hidden">
            <div className="container-main relative z-10">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 25 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-14"
                >
                    <h2
                        className="text-[48px] font-normal tracking-tight text-[#0d0925] leading-[1.15]"
                    >
                        Our Initiatives
                    </h2>
                </motion.div>

                {/* Grid — Google-style 4 columns */}
                <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-5">
                    {initiatives.map((item, i) => {
                        const CardContent = (
                            <>
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <img
                                        src={`${BASE_URL}${item.logo}`}
                                        alt={item.name}
                                        className="w-12 h-12 object-contain flex-shrink-0"
                                    />
                                    <span
                                        className="text-[16px] font-medium text-[#3c4043] truncate"
                                    >
                                        {item.name}
                                    </span>
                                </div>
                                {item.href && (
                                    <ExternalLink className="w-5 h-5 text-[#9aa0a6] flex-shrink-0 group-hover:text-[#5f6368] transition-colors" />
                                )}
                            </>
                        );

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 + i * 0.04,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 bg-white border border-[#e8eaed] rounded-2xl px-6 py-5 hover:border-[#fb8a09]/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer"
                                    >
                                        {CardContent}
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4 bg-white border border-[#e8eaed] rounded-2xl px-6 py-5">
                                        {CardContent}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION
   ────────────────────────────────────────────── */
const MobileOurInitiatives = ({ initiatives }: { initiatives: Initiative[] }) => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-5%' });

    return (
        <section id="initiatives" className="py-10 bg-[#f8f9fa]">
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
                        className="text-[22px] font-medium tracking-tight text-[#0d0925] leading-[1.2]"
                    >
                        Our Initiatives
                    </h2>
                </motion.div>

                {/* Grid — 2 columns on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-2 gap-2.5"
                >
                    {initiatives.map((item) => {
                        const CardContent = (
                            <>
                                <img
                                    src={`${BASE_URL}${item.logo}`}
                                    alt={item.name}
                                    className="w-6 h-6 object-contain flex-shrink-0"
                                />
                                <span
                                    className="text-[12px] font-medium text-[#3c4043] truncate flex-1"
                                >
                                    {item.name}
                                </span>
                                {item.href && (
                                    <ExternalLink className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0 group-hover:text-[#5f6368] transition-colors" />
                                )}
                            </>
                        );

                        return item.href ? (
                            <a
                                key={item.id}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 bg-white border border-[#e8eaed] rounded-lg px-3 py-3"
                            >
                                {CardContent}
                            </a>
                        ) : (
                            <div
                                key={item.id}
                                className="flex items-center gap-2.5 bg-white border border-[#e8eaed] rounded-lg px-3 py-3"
                            >
                                {CardContent}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export const OurInitiatives = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [initiatives, setInitiatives] = useState<Initiative[]>([]);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        fetch('/api/initiatives.json')
            .then((res) => res.json())
            .then((data) => {
                const active = (data.initiatives || [])
                    .filter((i: Initiative) => i.isActive)
                    .sort((a: Initiative, b: Initiative) => a.order - b.order);
                setInitiatives(active);
            })
            .catch(() => {});
    }, []);

    if (initiatives.length === 0) return null;

    if (isMobile) {
        return <MobileOurInitiatives initiatives={initiatives} />;
    }

    return <DesktopOurInitiatives initiatives={initiatives} />;
};
