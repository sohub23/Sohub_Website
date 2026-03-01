import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */
const DesktopIoTEcosystems = () => {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-10%' });

    return (
        <section className="py-20 md:py-28 bg-white dark:bg-zinc-900 relative overflow-hidden">
            <div className="container-main relative z-10">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 25 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-[48px] font-normal tracking-tight text-[#0d0925] dark:text-white leading-[1.15]"
                        style={{
                            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        Interconnect with global IoT ecosystems
                    </h2>
                </motion.div>

                {/* Content Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-[1244px] mx-auto bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-zinc-700 p-8 md:p-10"
                    style={{
                        boxShadow: '0 8px 16px 0 rgb(75 104 123 / 20%), 0 2px 4px 0 rgb(0 0 0 / 20%)',
                    }}
                >
                    {/* AI Voice Platforms Section */}
                    <div className="mb-12">
                        <h4
                            className="text-[20px] md:text-[24px] font-bold text-[#3c4043] dark:text-white mb-8 text-center"
                            style={{
                                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            }}
                        >
                            Connect to prominent AI voice platforms easily
                        </h4>

                        {/* Desktop Image */}
                        <div className="hidden md:block mb-6">
                            <img
                                src="/src/assets/Brand/Wide-Compatibility (1).jpg"
                                alt="Wide Compatibility"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Mobile Images */}
                        <div className="md:hidden space-y-4 mb-6">
                            <img
                                src="/src/assets/Brand/Wide-CompatibilityM(1).jpg"
                                alt="Wide Compatibility Mobile 1"
                                className="w-full h-auto rounded-lg"
                            />
                            <img
                                src="/src/assets/Brand/Wide-CompatibilityM(2).jpg"
                                alt="Wide Compatibility Mobile 2"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {/* IoT Platforms Section */}
                    <div>
                        <h4
                            className="text-[20px] md:text-[24px] font-bold text-[#3c4043] dark:text-white mb-8 text-center"
                            style={{
                                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            }}
                        >
                            Connect to prominent IoT platforms
                        </h4>

                        {/* Desktop Image */}
                        <div className="hidden md:block">
                            <img
                                src="/src/assets/Brand/f51c51f33edfc8ee1d68.png"
                                alt="IoT Platforms"
                                className="w-full h-auto max-h-[200px] object-contain rounded-lg"
                            />
                        </div>

                        {/* Mobile Image */}
                        <div className="md:hidden">
                            <img
                                src="/src/assets/Brand/png4-01.png"
                                alt="IoT Platforms Mobile"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — boxed card, compact, no animations
   ────────────────────────────────────────────── */
const MobileIoTEcosystems = () => {
    return (
        <section className="py-10 bg-white dark:bg-zinc-900">
            <div className="px-4">
                {/* Header */}
                <h2
                    className="text-[22px] font-medium tracking-tight text-[#0d0925] dark:text-white leading-[1.25] text-center mb-6"
                    style={{
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                >
                    Interconnect with global IoT ecosystems
                </h2>

                {/* Content Box */}
                <div
                    className="bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-zinc-700 p-4"
                    style={{
                        boxShadow: '0 4px 16px rgba(75, 104, 123, 0.12)',
                    }}
                >
                    {/* AI Voice Platforms */}
                    <div className="mb-6">
                        <h4
                            className="text-[13px] font-bold text-[#3c4043] dark:text-white mb-3 text-center"
                            style={{
                                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            }}
                        >
                            Connect to prominent AI voice platforms easily
                        </h4>

                        <div className="space-y-3">
                            <img
                                src="/src/assets/Brand/Wide-CompatibilityM(1).jpg"
                                alt="Wide Compatibility Mobile 1"
                                className="w-full h-auto rounded-xl"
                            />
                            <img
                                src="/src/assets/Brand/Wide-CompatibilityM(2).jpg"
                                alt="Wide Compatibility Mobile 2"
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 dark:bg-zinc-700 mx-2 mb-6" />

                    {/* IoT Platforms */}
                    <div>
                        <h4
                            className="text-[13px] font-bold text-[#3c4043] dark:text-white mb-0 text-center relative z-20"
                            style={{
                                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            }}
                        >
                            Connect to prominent IoT platforms
                        </h4>

                        <img
                            src="/src/assets/Brand/png4-01.png"
                            alt="IoT Platforms Mobile"
                            className="w-full h-auto rounded-xl -mt-6 relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const IoTEcosystems = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileIoTEcosystems />;
    }

    return <DesktopIoTEcosystems />;
};
