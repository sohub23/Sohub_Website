import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import clickToConnectVideo from '@/assets/click to connect.mp4';
import clickToConnectImg from '@/assets/click to connect.png';
import hotscanImg from '@/assets/hotscan.png';
import empImg from '@/assets/EMP Logo Transparent.png';
import machineImg from '@/assets/carousel/machine-navbar.png';
import oMamaImg from '@/assets/O Mama remove bg.png';

interface Experiment {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image?: string;
    video?: string;
    imageFit?: 'cover' | 'contain';
}

const experiments: Experiment[] = [
    {
        id: 1,
        title: "O-Mama",
        description: "Smart fridges delivering fresh, hygienic food 24/7. Install at your workspaces or become a franchise operator.",
        buttonText: "Learn more",
        buttonLink: "https://omama.sohub.com.bd/",
        image: oMamaImg,
        imageFit: 'contain' as const,
    },
    {
        id: 2,
        title: "EMP",
        description: "EMP(Employee Max Portal) is a discipline and accountability system built for Bangladeshi businesses.",
        buttonText: "Visit",
        buttonLink: "https://emp.sohub.com.bd/",
        image: empImg,
        imageFit: 'contain' as const,
    },
    {
        id: 3,
        title: "Smart Powerbank",
        description: "Rent a powerbank on-the-go from smart vending machines across the city. Scan, charge, and return — anytime, anywhere.",
        buttonText: "Learn more",
        buttonLink: "#",
        image: machineImg,
        imageFit: 'contain' as const,
    },
    {
        id: 4,
        title: "Click To Connect",
        description: "Manage Business Calls Directly from Your Website — Without Phone Numbers",
        buttonText: "Check it out",
        buttonLink: "https://connect.sohub.com.bd/home/click_to_connect",
        image: clickToConnectImg,
    },
    {
        id: 5,
        title: "Hotscan",
        description: "Let your customers connect instantly through a QR-powered web dialer. No app. No SIM. No balance. Just internet.",
        buttonText: "Get started",
        buttonLink: "https://connect.sohub.com.bd/hotscan_qr?lang=bangla",
        image: hotscanImg
    },
];

/* ──────────────────────────────────────────────
   DESKTOP VERSION — 100% original, untouched
   ────────────────────────────────────────────── */

const CARD_EXPANDED = 840;
const CARD_COLLAPSED = 340;
const CARD_GAP = 48;
const CARD_HEIGHT = 604;

const TOTAL_TRACK_WIDTH = CARD_EXPANDED + (CARD_COLLAPSED * (experiments.length - 1)) + (CARD_GAP * (experiments.length - 1));

const springTransition = {
    type: "spring" as const,
    stiffness: 120,
    damping: 20,
};

const contentSpring = {
    type: "spring" as const,
    stiffness: 100,
    damping: 18,
    delay: 0.1,
};

const DesktopAIExperiments = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handlePrev = () => {
        setActiveIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => Math.min(experiments.length - 1, prev + 1));
    };

    const showLeftArrow = activeIndex > 0;
    const showRightArrow = activeIndex < experiments.length - 1;

    const getTrackX = () => {
        if (containerWidth === 0) return 0;
        const overflow = TOTAL_TRACK_WIDTH - containerWidth;
        if (overflow <= 0) return 0;

        const maxIndex = experiments.length - 1;
        if (activeIndex === 0) return 0;
        if (activeIndex >= maxIndex) return -overflow;

        // Distribute scroll evenly across middle indices
        const scrollPerStep = overflow / maxIndex;
        return -(scrollPerStep * activeIndex);
    };

    return (
        <section className="py-16 md:py-24 bg-[#f8f9fa] overflow-hidden relative">

            {/* Left Arrow — fixed to far left */}
            <motion.button
                onClick={handlePrev}
                animate={{ opacity: showLeftArrow ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#dadce0] flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 bg-white z-50 shadow-sm"
                style={{ pointerEvents: showLeftArrow ? 'auto' : 'none' }}
                aria-label="Previous"
            >
                <ChevronLeft className="w-5 h-5 text-[#3c4043]" />
            </motion.button>

            {/* Right Arrow — fixed to far right */}
            <motion.button
                onClick={handleNext}
                animate={{ opacity: showRightArrow ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#dadce0] flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 bg-white z-50 shadow-sm"
                style={{ pointerEvents: showRightArrow ? 'auto' : 'none' }}
                aria-label="Next"
            >
                <ChevronRight className="w-5 h-5 text-[#3c4043]" />
            </motion.button>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <h2
                    className="text-[48px] font-normal tracking-tight text-foreground text-center mb-12 md:mb-16"
                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                >
                    Try new products and experiments
                </h2>

                {/* Sliding card track — shifts alignment via GPU x transform */}
                <motion.div
                    ref={containerRef}
                    className="flex items-stretch mx-16"
                    animate={{ x: getTrackX() }}
                    transition={springTransition}
                    style={{
                        height: CARD_HEIGHT,
                        gap: CARD_GAP,
                    }}
                >
                    {experiments.map((experiment: Experiment, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={experiment.id}
                                layout
                                onClick={() => setActiveIndex(index)}
                                className="relative flex-shrink-0 cursor-pointer overflow-hidden"
                                animate={{
                                    width: isActive ? CARD_EXPANDED : CARD_COLLAPSED,
                                }}
                                transition={springTransition}
                                style={{
                                    height: CARD_HEIGHT,
                                    borderRadius: 24,
                                }}
                            >
                                {/* Inner flex: image + content side by side */}
                                <div className="flex h-full">

                                    {/* === Image Column — always 340px === */}
                                    <div
                                        className="relative flex-shrink-0 overflow-hidden"
                                        style={{ width: CARD_COLLAPSED, height: CARD_HEIGHT }}
                                    >
                                        {experiment.video ? (
                                            <motion.video
                                                src={experiment.video}
                                                className="w-full h-full object-cover"
                                                animate={{ scale: isActive ? 1 : 1.05 }}
                                                transition={springTransition}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                        ) : (
                                            <motion.img
                                                src={experiment.image}
                                                alt={experiment.title}
                                                className={`w-full h-full ${experiment.imageFit === 'contain' ? 'object-contain p-10 bg-[#fff8e1]' : 'object-cover'}`}
                                                animate={{ scale: isActive ? 1 : 1.05 }}
                                                transition={springTransition}
                                            />
                                        )}

                                        {/* Gradient overlay — only on collapsed cards */}
                                        <motion.div
                                            className="absolute inset-0"
                                            animate={{ opacity: isActive ? 0 : 1 }}
                                            transition={{ duration: 0.4 }}
                                            style={{
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                                            }}
                                        />

                                        {/* Collapsed title overlay */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 p-8"
                                            animate={{
                                                opacity: isActive ? 0 : 1,
                                                y: isActive ? 16 : 0,
                                            }}
                                            transition={springTransition}
                                            style={{ pointerEvents: isActive ? 'none' : 'auto' }}
                                        >
                                            <h3
                                                className="text-white text-[28px] font-medium"
                                                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                            >
                                                {experiment.title}
                                            </h3>
                                        </motion.div>
                                    </div>

                                    {/* === Content Column — 500px, white bg === */}
                                    <div
                                        className="flex-shrink-0 bg-white flex flex-col justify-center"
                                        style={{ width: 500, height: CARD_HEIGHT }}
                                    >
                                        <motion.div
                                            className="px-10"
                                            animate={{
                                                x: isActive ? 0 : 30,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                            transition={contentSpring}
                                        >
                                            <h3
                                                className="text-[48px] font-normal text-[#202124] mb-3"
                                                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                            >
                                                {experiment.title}
                                            </h3>
                                            <p
                                                className="text-[16px] text-[#5f6368] mb-8 leading-relaxed"
                                                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                            >
                                                {experiment.description}
                                            </p>
                                            <a
                                                href={experiment.buttonLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ee8d22] text-white rounded-full text-[16px] font-medium hover:bg-[#d67d1e] transition-colors w-fit"
                                                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                            >
                                                {experiment.buttonText}
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {experiments.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="w-3 h-3 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: index === activeIndex ? '#3c4043' : 'transparent',
                                border: index === activeIndex ? '2px solid #3c4043' : '2px solid #5f6368',
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MOBILE VERSION — Google about.google/products style
   Expand/Collapse carousel:
   - Active card: EXPANDED (image top + white text below)
   - Inactive cards: COLLAPSED (narrow image strip, no text)
   ────────────────────────────────────────────── */
const M_EXPANDED_VW = 75;
const M_COLLAPSED_VW = 19;
const M_GAP = 8;
const M_CARD_HEIGHT = 620;
const M_IMAGE_HEIGHT = 420;

const mobileSpring = {
    type: "tween" as const,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Smooth, gradual curve
    duration: 1.2,
};

const mobileContentSpring = {
    type: "tween" as const,
    ease: "easeOut" as const,
    duration: 0.9,
    delay: 0.2,
};

const MobileAIExperiments = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchStartTime = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const deltaTime = Date.now() - touchStartTime.current;
        const velocity = Math.abs(deltaX) / deltaTime;
        const threshold = velocity > 0.3 ? 30 : 60;

        if (Math.abs(deltaX) > threshold) {
            if (deltaX < 0 && activeIndex < experiments.length - 1) {
                setActiveIndex(activeIndex + 1);
            } else if (deltaX > 0 && activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
            }
        }
    };

    // Track position: keep the active expanded card visible with padding
    const getTrackX = () => {
        // Each card before the active one is collapsed (M_COLLAPSED_VW vw + gap)
        // The active card is M_EXPANDED_VW vw
        // We want ~16px left padding for card 1, center for middle, right-align for last
        const vw = typeof window !== 'undefined' ? window.innerWidth / 100 : 3.75;
        const expandedPx = M_EXPANDED_VW * vw;
        const collapsedPx = M_COLLAPSED_VW * vw;

        // Total width before the active card
        let offsetBeforeActive = 0;
        for (let i = 0; i < activeIndex; i++) {
            offsetBeforeActive += collapsedPx + M_GAP;
        }

        if (activeIndex === 0) {
            return 12; // left padding — pushes collapsed cards to right edge
        } else if (activeIndex === experiments.length - 1) {
            // Right-align: viewport - right padding - expanded width = left offset
            return window.innerWidth - 12 - expandedPx - offsetBeforeActive;
        } else {
            // Center the expanded card
            const cardCenter = offsetBeforeActive + expandedPx / 2;
            return window.innerWidth / 2 - cardCenter;
        }
    };

    return (
        <section className="py-12 bg-[#f8f9fa] overflow-hidden">
            <h2
                className="px-5 text-[26px] font-normal tracking-tight text-foreground text-center mb-8"
                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
            >
                Try new products and experiments
            </h2>

            {/* Expand/Collapse carousel */}
            <div
                className="relative touch-pan-y select-none"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <motion.div
                    className="flex items-start"
                    animate={{ x: getTrackX() }}
                    transition={mobileSpring}
                    style={{ gap: M_GAP }}
                >
                    {experiments.map((experiment, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={experiment.id}
                                onClick={() => setActiveIndex(index)}
                                className="relative flex-shrink-0 overflow-hidden cursor-pointer"
                                animate={{
                                    width: isActive ? `${M_EXPANDED_VW}vw` : `${M_COLLAPSED_VW}vw`,
                                    height: isActive ? M_CARD_HEIGHT : M_IMAGE_HEIGHT,
                                }}
                                transition={mobileSpring}
                                style={{
                                    borderRadius: 32,
                                    border: '1px solid #dadce0',
                                }}
                            >
                                {isActive ? (
                                    /* ── EXPANDED STATE: image top + white text below ── */
                                    <div className="flex flex-col h-full">
                                        {/* Image section */}
                                        <div className="relative w-full flex-1 overflow-hidden bg-[#f0f1f3]">
                                            {experiment.video ? (
                                                <video
                                                    src={experiment.video}
                                                    className="w-full h-full object-cover"
                                                    autoPlay loop muted playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={experiment.image}
                                                    alt={experiment.title}
                                                    className={`w-full h-full ${experiment.imageFit === 'contain' ? 'object-contain p-6 bg-[#fff8e1]' : 'object-cover'}`}
                                                />
                                            )}
                                        </div>

                                        {/* White text section */}
                                        <motion.div
                                            className="bg-white px-5 pt-4 pb-5"
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={mobileContentSpring}
                                        >
                                            <h3
                                                className="text-[20px] font-medium text-[#202124] mb-1.5"
                                                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                            >
                                                {experiment.title}
                                            </h3>
                                            <p
                                                className="text-[14px] text-[#5f6368] leading-[1.5] mb-4"
                                                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                            >
                                                {experiment.description}
                                            </p>
                                            <a
                                                href={experiment.buttonLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ee8d22] text-white rounded-full text-[14px] font-semibold w-full justify-center"
                                                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                                            >
                                                {experiment.buttonText}
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </motion.div>
                                    </div>
                                ) : (
                                    /* ── COLLAPSED STATE: full height image strip only ── */
                                    <div className="relative w-full h-full overflow-hidden bg-[#f0f1f3]">
                                        {experiment.video ? (
                                            <video
                                                src={experiment.video}
                                                className="w-full h-full object-cover"
                                                autoPlay loop muted playsInline
                                            />
                                        ) : (
                                            <img
                                                src={experiment.image}
                                                alt={experiment.title}
                                                className={`w-full h-full ${experiment.imageFit === 'contain' ? 'object-contain bg-[#fff8e1]' : 'object-cover'}`}
                                            />
                                        )}

                                        {/* Dark overlay */}
                                        <div className="absolute inset-0 bg-black/15" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Dot pagination */}
            <div className="flex justify-center gap-2.5 mt-6">
                {experiments.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                        style={{
                            backgroundColor: index === activeIndex ? '#3c4043' : 'transparent',
                            border: index === activeIndex ? '2px solid #3c4043' : '2px solid #9aa0a6',
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

/* ──────────────────────────────────────────────
   MAIN EXPORT — switches between mobile/desktop
   ────────────────────────────────────────────── */
export const AIExperiments = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    if (isMobile) {
        return <MobileAIExperiments />;
    }

    return <DesktopAIExperiments />;
};
