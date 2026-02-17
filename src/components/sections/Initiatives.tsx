'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import XimpulVideo from '../../assets/Ximpul3.mp4';
import OMamaImage from '../../assets/O-mama-initiatives.png';

// Initiative data based on SOHUB ecosystem
const initiatives = [
    {
        id: 'connect',
        label: 'CONNECT',
        title: 'Communication without barriers',
        description: 'PBX, C2C, HotScan — seamless communication solutions for businesses and consumers.',
        bgColor: 'bg-[#E3F2FD]', // Soft blue/Google Blue tint
        // Add your video URL here
        media: { type: 'video' as const, src: '' },
        size: 'large',
    },
    {
        id: 'omama',
        label: 'O-MAMA',
        title: 'Hygienic food access',
        description: 'Quality food where people work and study. Healthy, accessible, reliable.',
        bgColor: 'bg-[#FFF4E6]', // Warm orange/SOHUB Orange tint
        // Add your image URL here
        media: { type: 'image' as const, src: OMamaImage },
        size: 'medium',
    },
    {
        id: 'emp',
        label: 'EMP',
        title: 'Execution & accountability OS',
        description: 'Operating system for teams to track, measure, and deliver results.',
        bgColor: 'bg-[#F3E5F5]', // Soft purple
        media: { type: 'image' as const, src: '' },
        size: 'medium',
    },
    {
        id: 'tolpar',
        label: 'TOLPAR',
        title: 'The SOHUB superapp',
        description: 'Connecting people, systems, and content in one unified experience.',
        bgColor: 'bg-[#E8F5E9]', // Soft green/Google Green tint
        media: { type: 'video' as const, src: '' },
        size: 'medium',
    },
    {
        id: 'ai',
        label: 'AI',
        title: 'Automation that scales',
        description: 'Intelligent solutions that increase speed, quality, and efficiency.',
        bgColor: 'bg-[#FCE4EC]', // Soft pink
        media: { type: 'image' as const, src: '' },
        size: 'small',
    },
    {
        id: 'protect',
        label: 'PROTECT',
        title: 'Safety & trust initiatives',
        description: 'Building reliability and security into everything we create.',
        bgColor: 'bg-[#FFEBEE]', // Soft red/Google Red tint
        media: null,
        size: 'small',
    },
    {
        id: 'filmic',
        label: 'FILMIC STATION',
        title: 'Content that moves culture',
        description: 'Creative content and community building for the next generation.',
        bgColor: 'bg-[#FFF8E1]', // Soft yellow/Google Yellow tint
        media: { type: 'video' as const, src: '' },
        size: 'medium',
    },
    {
        id: 'ximpul',
        label: 'XIMPUL',
        title: 'Product experience standards',
        description: 'Commerce and product experience frameworks for builders.',
        bgColor: 'bg-[#E0F7FA]', // Soft cyan
        media: { type: 'video' as const, src: XimpulVideo },
        size: 'large',
    },
    {
        id: 'smart-home',
        label: 'SMART HOME',
        title: 'Intelligent automation',
        description: 'Automated control systems for modern living spaces.',
        bgColor: 'bg-[#ECEFF1]', // Blue Grey
        media: { type: 'image' as const, src: '' },
        size: 'small',
    },
];

// Apple-style ease for smooth animations
const easeOutExpo = "easeOut";

// Video Card Component
const VideoCard = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent card click
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!src) {
        return (
            <div className="w-full h-full min-h-[140px] rounded-2xl bg-black/5 flex items-center justify-center border border-black/5">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Play className="w-5 h-5 text-foreground/40 ml-0.5" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full min-h-[140px] rounded-2xl overflow-hidden bg-black border border-black/5">
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
            />
            <button
                onClick={togglePlay}
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors z-20"
            >
                {isPlaying ? (
                    <Pause className="w-4 h-4 text-foreground" />
                ) : (
                    <Play className="w-4 h-4 text-foreground ml-0.5" />
                )}
            </button>
        </div>
    );
};

// Image Card Component
const ImageCard = ({ src, alt }: { src: string; alt: string }) => {
    if (!src) {
        return (
            <div className="w-full h-full min-h-[140px] rounded-2xl bg-black/5 flex items-center justify-center border border-black/5">
                <span className="text-3xl opacity-40">📷</span>
            </div>
        );
    }

    return (
        <div className="w-full h-full min-h-[140px] rounded-2xl overflow-hidden border border-black/5 bg-white/50 p-2 flex items-center justify-center">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export const Initiatives = () => {
    return (
        <section id="initiatives" className="pt-8 pb-24 md:pt-12 md:pb-32 bg-background">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: easeOutExpo }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                        Our Ecosystem
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground mb-4">
                        One ecosystem. Many focused systems.
                    </h2>
                    <p className="text-lg text-foreground-muted max-w-2xl mx-auto font-normal">
                        Explore what matters to you. From communication to commerce.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {/* Card 1 - CONNECT (Large with Video) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.1 }}
                        className={`${initiatives[0].bgColor} rounded-[32px] p-8 flex flex-col lg:row-span-2 group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-6">
                            {initiatives[0].label}
                        </span>

                        {/* Video placeholder */}
                        <div className="flex-1 mb-8">
                            <VideoCard src={initiatives[0].media?.src || ''} />
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-foreground mb-3">
                                {initiatives[0].title}
                            </h3>
                            <p className="text-base text-foreground/70 mb-6 leading-relaxed font-normal">
                                {initiatives[0].description}
                            </p>
                            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-white/50">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 - O-MAMA (Image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.15 }}
                        className={`${initiatives[1].bgColor} rounded-[32px] p-8 flex flex-col min-h-[320px] group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-4">
                            {initiatives[1].label}
                        </span>

                        <div className="flex-1 mb-6">
                            <ImageCard src={initiatives[1].media?.src || ''} alt={initiatives[1].title} />
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[1].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[1].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 - EMP (No media) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
                        className={`${initiatives[2].bgColor} rounded-[32px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <div>
                            <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-8">
                                {initiatives[2].label}
                            </span>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[2].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[2].description}
                            </p>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4 - TOLPAR (Video) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.25 }}
                        className={`${initiatives[3].bgColor} rounded-[32px] p-8 flex flex-col min-h-[320px] group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-4">
                            {initiatives[3].label}
                        </span>

                        <div className="flex-1 mb-6">
                            <VideoCard src={initiatives[3].media?.src || ''} />
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-foreground mb-2">
                                {initiatives[3].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[3].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5 - AI (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
                        className={`${initiatives[4].bgColor} rounded-[32px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <div>
                            <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-6">
                                {initiatives[4].label}
                            </span>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                {initiatives[4].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[4].description}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                        </div>
                    </motion.div>

                    {/* Card 6 - PROTECT (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.35 }}
                        className={`${initiatives[5].bgColor} rounded-[32px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <div>
                            <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-6">
                                {initiatives[5].label}
                            </span>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                {initiatives[5].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[5].description}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                        </div>
                    </motion.div>

                    {/* Card 7 - FILMIC STATION (Video) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.4 }}
                        className={`${initiatives[6].bgColor} rounded-[32px] p-8 flex flex-col min-h-[300px] lg:col-span-2 group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-4">
                            {initiatives[6].label}
                        </span>

                        <div className="flex flex-col md:flex-row gap-8 h-full">
                            <div className="flex-1 min-h-[160px]">
                                <VideoCard src={initiatives[6].media?.src || ''} />
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-medium text-foreground mb-3">
                                    {initiatives[6].title}
                                </h3>
                                <p className="text-base text-foreground/70 mb-6 leading-relaxed font-normal">
                                    {initiatives[6].description}
                                </p>
                                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                    <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-white/50">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                    <span>Explore Station</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 8 - XIMPUL (Video - Single Column) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.45 }}
                        className={`${initiatives[7].bgColor} rounded-[32px] p-8 flex flex-col min-h-[300px] lg:col-span-2 group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase mb-4">
                            {initiatives[7].label}
                        </span>

                        <div className="flex flex-col md:flex-row gap-8 h-full">
                            <div className="flex-1 min-h-[160px]">
                                <VideoCard src={initiatives[7].media?.src || ''} />
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-medium text-foreground mb-3">
                                    {initiatives[7].title}
                                </h3>
                                <p className="text-base text-foreground/70 mb-6 leading-relaxed font-normal">
                                    {initiatives[7].description}
                                </p>
                                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                    <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center bg-white/50">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                    <span>Explore Standard</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 9 - SMART HOME (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.5 }}
                        className={`${initiatives[8].bgColor} rounded-[32px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                    >
                        <div>
                            <span className="text-xs font-semibold tracking-[0.12em] text-foreground/60 uppercase block mb-6">
                                {initiatives[8].label}
                            </span>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                {initiatives[8].title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                                {initiatives[8].description}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
