import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clickToConnectVideo from '@/assets/click to connect.mp4';
import clickToConnectImg from '@/assets/click to connect.png';
import hotscanImg from '@/assets/hotscan.png';
import empImg from '@/assets/EMP Logo Transparent.png';



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
        title: "Click To Connect",
        description: "Manage Business Calls Directly from Your Website — Without Phone Numbers",
        buttonText: "Check it out",
        buttonLink: "https://connect.sohub.com.bd/home/click_to_connect",
        image: clickToConnectImg,
    },
    {
        id: 2,
        title: "Hotscan",
        description: "Let your customers connect instantly through a QR-powered web dialer. No app. No SIM. No balance. Just internet.",
        buttonText: "Get started",
        buttonLink: "https://connect.sohub.com.bd/hotscan_qr?lang=bangla",
        image: hotscanImg
    },
    {
        id: 3,
        title: "EMP",
        description: "EMP(Employee Max POrtal) is a discipline and accountability system built for Bangladeshi businesses.",
        buttonText: "Visit",
        buttonLink: "https://emp.sohub.com.bd/",
        image: empImg,
        imageFit: 'contain' as const,
    }
];

const CARD_EXPANDED = 840;
const CARD_COLLAPSED = 340;
const CARD_GAP = 48;
const CARD_HEIGHT = 604;

const TOTAL_TRACK_WIDTH = CARD_EXPANDED + (CARD_COLLAPSED * 2) + (CARD_GAP * 2);

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

export const AIExperiments = () => {
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

    // Calculate translateX for alignment: left / center / right
    const getTrackX = () => {
        if (containerWidth === 0) return 0;
        const overflow = TOTAL_TRACK_WIDTH - containerWidth;
        if (overflow <= 0) return 0; // Track fits, no sliding needed

        if (activeIndex === 0) return 0;                       // Left-aligned
        if (activeIndex === 1) return -(overflow / 2);         // Centered
        return -overflow;                                       // Right-aligned
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
